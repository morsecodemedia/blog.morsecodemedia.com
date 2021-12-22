---
title: "Smart Mirror: The Screensaver"
createdAt: 2018-05-09T21:56:34-04:00
tags:
  - Smart Mirror
  - MorseCodeMirror
  - Screensaver
  - GreenSock
draft: false
---

As mentioned in the original post about the smart mirror, one of the first things I wanted to address was the [Screensaver][ss] feature for the project. This smart mirror is actually going to consist of multiple pages or screens, rather than your typical single screen with multiple components displayed at once. There will be components that have a quick overview view from the main screen, but also a feature specific screen that has much more detail and features available as you drill in.

With this in mind, I don't want to have an image of a weather map burned into the screen while I'm trying to view the security cam at my front door. Hence the screensaver feature.

The ultimate goal is to have a timer running behind the scenes on the mirror. The timer will be editable from the main config file of the mirror, as it will be part of the mirror regardless if the screensaver module is implemented or not. Every interaction with the mirror will emit an event that will reset the timer. If X amount of time has passed without any user interaction, the Screensaver component will activate.

A rough user-flow of the functionality is as follows:

    timer reaches 0
    if screensaver component is implemented
      goto screensaver
    else
      if on main screen
        do nothing
      else
        goto main screen

As you can see, I'm planning on having checks in there to accommodate those who choose not to implement the Screensaver. However, that check will actually be built into the timer, which I will discuss in length in another post when I build out that functionality. For now, this is about the Screensaver, so let's dive deeper into how it's built.

## Getting Images

For the initial build, the only option available for a screensaver is going to be a slideshow of images with a nice little cross-fade effect. In the future, I might build out some fancy particle animation, but for now it's just a fancy slideshow.

The first thing to work out, was how was the screensaver going to get images. I didn't want to bake them into the component itself - that wouldn't have made for easy updates. As each module is going to be a `git submodule`, you would have to update the Screensaver module; pull the updates into the mirror project; rebuild the mirror project; deploy updated app onto the system and rerun it. It gives me a headache just thinking of that, and I would do it, because this is my pet project, and I would cut myself some slack for my laziness. However, I would never expect anyone else who might be using this as a base for their smart mirror to have to jump through all those hoops just to update some images on a screensaver.

"So what's the solution, Brandon? You're just rambling on here." Well, that's easy. I give the mirror app access to the file directory of the system it's running on and determine a location for those images to live. That way, you can `scp`, or what-have-you, images to this predetermined folder on the computer running the mirror and the screensaver component will do the rest.

For this we will need to import three packages:

    import path from 'path'
    import { remote } from 'electron'
    const fs = require('fs')

And then I am going to set a variable for the location of the images we want to pull.

    const screensaverImgs = path.join(remote.app.getPath('desktop'), 'screensaver/')

What I am doing here is saying that I am going to have a folder called "screensaver" on the desktop of the system running the mirror. Using Electron's [API][getPath] we can get the path to the desktop regardless of which OS I am running. I am then setting the absolute path of the folder on the desktop to `screensaverImgs`.

Now we want to get all the images and set it to an array to loop through.

    export default {
      name: 'Screensaver',
      ...
      data: function() {
        return {
          pictures: [],
        }
      },
      updated () {
        ...
      },
      beforeMount () {
        fs.readdir(screensaverImgs, (err, files) => {
          files.forEach((file,i) => {
            this.pictures.push({
              href: 'file://'+screensaverImgs+file,
              id: 'picture-'+i,
              })
          })
        })
      },
    }

As you can see, before the Screensaver component is mounted, I am reading the directory for images, and then looping through each image, defining the absolute path of the image and an id, and pushing them into the `pictures` array. There are two things to note here. First is that I am doing this in the `beforeMount` lifecycle event. This is because the component was getting mounted and trying to loop through the pictures array before it had enough time to read the directory for any images. The second is that I am assigning ids to each images. I am doing this in preparation for the fade animation.

Before I go into the animation, I'm going to create the template for the component.

    <template>
      <div id="wrapper">
        <main>
          ...
          <picture
            v-for="picture in pictures"
            :key="picture.id">
            <source :srcset="picture.href">
            <img
              :src="picture.href"
              :id="picture.id" />
          </picture>
        </main>
      </div>
    </template>

I have a picture element where I am looping through the pictures array and setting the id, and image src. I am collapsing some code before the picture element, which we will go into in a little bit.

Now let's prep with some styles...

    <style scoped>
      * {
        background: black;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      img {
        display: block;
        object-fit: contain;
        opacity: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
      }
    </style>

Whew! That was a lot. This is pretty straight forward, I want to keep these styles scoped to only this component. If I were to exclude that attribute, the black background would get applied to other screens, if not applied. As for the images, I went with `contain` over `cover` so that this will allow for vertical oriented images, as well as horizontal. I am setting the width and height to 100% of the viewport. This provides the most flexibility to scale the images full-screen based on the size of the screen it is running on. The opacity is also set to 0 right away.


## Animating the Images

If you haven't heard or have used [GreenSock][gsap] before, I highly suggest it. It is, as noted by the website" a library for "ultra high-performance, professional-grade animation for the modern web." It made the animations for the screensaver a breeze.

First, we need to import the necessary libraries. For the screensaver, at this time, I don't need the whole kitchen sink when it comes got GSAP, just TimelineMax.

    import { TimelineMax } from 'gsap'

Next, we want to set a few variables.

    var tl = new TimelineMax({repeat:-1})

This creates the new timeline and has it set with an infinite loop. The following are the config variables for the fadeSpeed and the displayLength of each image.

    var fadeConfig = {
      fadeSpeed: 4,
      displayLength: 4
    }

Now every time the component is updated, I am clearing out the timeline.

    ...
    updated () {
      tl.clear()
      this.pictures.forEach((picture) => {
        let el = document.querySelector('#'+picture.id)
        tl.to(el, fadeConfig.fadeSpeed, {alpha: 1}, "-="+fadeConfig.fadeSpeed)
        tl.to('#'+picture.id, fadeConfig.displayLength, {alpha: 0}, "+="+(fadeConfig.fadeSpeed+fadeConfig.displayLength))
      })
      tl.play()
    },
    ...

The animation here has an image fade in over a length of time, and sit a full opacity before beginning to fade out at the same length of time as the fade in. Meanwhile, an offset of the fadeSpeed and the displayLength triggers the next image in the array to begin its animation timeline. This causes a nice cross-fade between images, rather than a sudden jump.

That's basically it for the Screensaver component. Only one issue. Once you're in the screensaver, how do you get out?

## There's No Place Like Home

The Screensaver component is actually made up of two separate Vue components: the Screensaver itself and the "Go Home" button.

I need to create a component that will allow me to get back to the main screen and include it into the Screensaver component.

Remember earlier when I said I was collapsing code in the examples to focus on the Screensaver potion first, well here's where that part comes in. First, I'll make the Go-Home component accessible to Screensaver.

    export default {
      name: 'Screensaver',
      components: { goHome },
      ...

Then include it in the template

    ...
    <main>
      <go-home></go-home>
      ...

Now let's create the Go-Home component (go-home.vue)

    <template>
      <router-link to="landing-page" class="go-home-btn"></router-link>
    </template>

    <script>
      export default {
        name: 'go-home',
      }
    </script>

    <style>
      .go-home-btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 0;
        z-index: 10000;
      }
    </style>

The template is just a `<router-link>` that goes to the main screen, in this example I called it "landing-page". The styles make the button full-screen, with an `opacity` of 0 and I set the `z-index` really high to try and ensure that if you touch anywhere on the screen, it will exit out of the screensaver and bring you back to the main screen.

That's pretty much it for now. Later, once I get into building out the timer functionality, I will have to come back and update the `go-home` component to make sure that it emits an event to reset the timer.

You can follow the progress of the smart mirror [here][smrepo] and the screensaver component [here][ss].

  [ss]: https://github.com/morsecodemedia/morsecodemirror-screensaver "The Github repo for the screensaver component"
  [smrepo]: https://github.com/morsecodemedia/morsecodemirror "My Github repository for my smart mirror project"
  [getPath]: https://electronjs.org/docs/api/app#appgetpathname "Electronjs API Docs: app.getPath(name)"
  [gsap]: https://greensock.com/ "GreenSock"
