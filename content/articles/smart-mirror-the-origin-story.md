---
title: "Smart Mirror: The Origin Story"
createdAt: 2018-05-03T10:12:53-04:00
tags:
  - smart mirror
  - morsecodemirror
draft: false
---

For some time now, I've been following a few different [smart mirror][sm] projects. I've cloned repositories, got projects running, and ultimately felt underwhelmed with every instance of open-sourced smart mirror projects I've come across. Some of the concepts were great, but at the end of the day, I wanted more. Back in March, I was gifted a [Raspberry Pi 3 Model B][pi] and figured it was a perfect time to [create my own smart mirror][smrepo].

There are a few things I wanted to take into consideration from the start. First, was that, while the initial project will be satisfying my needs of a smart mirror, I want to make this distributable for anyone interested in setting up their own. With that being said, I don't expect everyone to have the same preference in OS. I figured [Electron][ejs] would be a great wrapper for this project, that way you can run a build for whatever platform you choose.

The second thing is more of a selfish matter. I've been dabbling in [Vue.js][vue] and really wanted to build each module, or feature, of the mirror as a Vue component. Luckily for me, [Greg Holguin][greg] created a boilerplate that brings both of theses together. [This][elevue] made a great starting point for the framework that is to become the mirror. As I build each Vue component, I plan on writing a blog post around each component to explain the inner-workings, hurdles, and solutions I came across during the development of each.

For the time being, here are some initial notes/thoughts on features I plan on implementing.

## Screensaver

The screensaver is going to manage two separate concerns of mine with this project. First, is burn-in. I really hate seeing the past seared into the screen. It just screams of laziness and neglect. Secondly, is that is going to be featured/mounted just outside of the kitchen, thus being seen by guests in the home.

My idea is to adapt a "timeout" feature similar to conference booth displays I've done in the past. After 3-5mins, a 10 second prompt will ask if you are still engaged with the mirror, if not it will take you back to the screensaver. In this case, a series of family photos that it will cycle through.

## Calendar

This seems like a no-brainer. My wife and I maintain shared Google calendars that list everything from doctor's appointments for the family, pay weeks, days off, bills due, etc. All color coordinated for quick view. As I am looking to have this be a touch panel mirror as well, I will look to build some CRUD controls as well as just a view, but they will probably come in a later iteration.

## Weather

Another obvious addition. However, I feel like this feature will be something that evolves over time. Initially, it will be the basic current weather and a 5-10 day forecast. From there, it can take on more of the [windy.com](https://www.windy.com/?39.938,-74.795,11) features. In future iterations, I would like it to link up with the calendar and travel plans and provide addition weather for destinations of vacations automatically, without the manual addition.

## Traffic

There are two parts to this feature that I would like to have. Obviously, travel times to work, as I have to take I-95 to work, which is *always* under construction, and people just drive like assholes, it's basically a guarantee that there will be some kind of congestion due to construction, or an accident. I also have to cross a draw bridge. Luckily they have a text system that sends out alerts anywhere from 15-45mins in advance. Unfortunately, the service used to notify about bridge openings and other events being logged by the local police/fire/port authorities, doesn't have a public accessible API. I think that I'll probably end up setting up a Twilio account specifically for the mirror and sign up for the text message notifications under that number. Using the Twilio API, I can then send notifications to the mirror when a text comes in about bridge openings.

## News

Will probably start with a string of RSS feeds from sources like https://lobste.rs. Ultimately, I would like to have this be short audio/video clips that will play through a list. Similar to Plex News, however with better content. I might go so far as to build in an Amazon Polly module, that will just read me the news articles from the RSS feeds, if I can't find the A/V option.

## Package Tracking

I use [Slice](https://www.slice.com/) for tracking all of my online orders. They also offer a price-watch feature. If you order something and that product drops in price within a certain amount of time, they will notify you, with the proper contact information to see about getting a refund of the distance. They have an API, so of course this has been added to the feature list.

This feature is something of an internal debate for a few different reasons.

First is the security issue. For Slice to work, you need to give it access to your inbox. Which, in my opinion, the normal person would blindly accept that and have all kinds of crap in their inbox open for scraping by a company, that in today's climate, may be handling all your data in a very insecure and non-ethical matter. I however, segment things out by email addresses. So the email address I use for online orders (in this case, specifically online orders to brick and mortars for when I don't have the time or the energy to have real human interaction), is just for that - online orders. I don't have to worry about financial institutions or personal family emails being scraped - I have other email addresses for that. Even some of my online purchases, such as tech that I can ultimately write off for work/freelance have their own email address. Like I said, this is not a standard practice of most people, and I want to try to make this project less specific for me and more customizable for anyone who wants to clone it down and build their own.

The second issue, is visibility. By that I mean that this mirror is going to be the core component to my household "command center". Both myself and my wife will be using it. When special events roll around (birthdays, anniversaries, Christmas, etc.), we don't want the surprised to be ruined because a package tracking app is listing the items in said delivery. Now my original plan was to take the return from the API and parse out just the shipping company, tracking number and the expected delivery date. But given the aforementioned security issue, I might build something custom that I will have to manually feed it an array of tracking numbers. Once I begin developing this component, I'm sure more factors will come into play and I will have a completely different approach to this.

## Voice Enabled

### Alexa

I can either wire up an Echo Dot and have Alexa enable voice commands. However, Amazon has a Github repo that walks you through how to install the ASK SDK onto a Pi and you can build your own Alexa device. The only difference is that it won't always be listening for the Alexa wake work like the Echo devices would be. You would have to have a button trigger the listening. I'm not totally against that, especially if this route allows you to have custom "wake words" than the select few that are built into the manufactured Alexa-enabled devices.

The DIY route will also help force my hand into doing the Facial Recognition, as well as the Video calling functionalities as I will probably purchase the PlayStation Eye (camera and mic) online, so I'll have all the hardware.

### Google Assistant
If I'm going to make the mirror voice enabled with manufactured Alexa-enabled devices, rather than a DIY Alexa, then I'm going to make it be able to be controlled by either Alexa or Google Assistant based on what the user has.

Siri and Cortana can kick rocks, I have no intention on going down those rabbit holes.

## Facial Recognition

I am thinking about putting a webcam into the frame and set up some facial recognition. Mostly because I can, but for additional functionality, maybe using the facial recognition to do live filtering on the data being displayed on the mirror. If I decide to actually build this functionality out, it will be siloed to just my personal mirror to start and then in future iterations will I make it configurable for other users to install on their own.

## Video Calls
If I'm going to wire up the webcam/mic into the frame, then it would cool to enable video call functionalities. Not necessarily because I want the functionality, or would actually use it, but just because I would like the challenge developmentally.

## Touch Enabled
As mentioned earlier, I plan on the mirror to have touch capabilities. It will allow for me to break features out on different "pages", but allow plays into the core interaction with the screensaver.

There are many more features I would like to include, but didn't feel that they needed to be part of the initial build.  Below is a list of a few of those features. I've enabled [FeatHub][fh], a feature list suggesting/voting platform to the repository, in which I've gone into more detail with some of these features. If you have any suggestions, please feel free to add to the list.

[![Feature Requests](http://feathub.com/morsecodemedia/morsecodemirror?format=svg)](http://feathub.com/morsecodemedia/morsecodemirror)


  [sm]: https://duckduckgo.com/?q=smart+mirror&ia=web "Search DuckDuckGo for Smart Mirror"
  [pi]: https://www.raspberrypi.org/products/raspberry-pi-3-model-b/ "Raspberry Pi 3 Model B"
  [smrepo]: https://github.com/morsecodemedia/morsecodemirror "My Github repository for my smart mirror project"
  [ejs]: https://electronjs.org/ "Build cross platform desktop apps with JavaScript, HTML, and CSS"
  [vue]: https://vuejs.org/ "The Progressive JavaScript Framework"
  [elevue]: https://github.com/SimulatedGREG/electron-vue "An Electron & Vue.js quick start boilerplate with vue-cli scaffolding, common Vue plugins, electron-packager/electron-builder, unit/e2e testing, vue-devtools, and webpack."
  [greg]: https://github.com/SimulatedGREG "Greg Holguin's Github"
  [fh]: https://feathub.com/morsecodemedia/morsecodemirror "Feature list for my smart mirror"
