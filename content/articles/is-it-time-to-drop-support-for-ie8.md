---
title: "Is It Time to Drop Support for IE8? - Part 1"
description: "Deciding which browsers and versions you are going to support for a new website or application is an important step in the web development process."
createdAt: 2014-02-21T09:46:53-04:00
tags:
  - internet explorer
draft: false
---

**UPDATE:** Read the follow-up to this article [here][part2].

Deciding which browsers and versions you're going to support for a new website or application is an important step in the web development process. These days, our conversations usually revolve around Internet Explorer 8.

Does the project / client have a good reason for needing to support IE8, or can we rejoice with our team and leave IE8 testing out this time around? The argument around whether or not to support IE8 has a lot of valid points on both sides, but in the end who’s coming out on top?

Even though there are websites dedicated to [counting down to the end of IE 8][countdown], we wanted to explore the topic (in fact if you're using IE right now, you might be seeing a nice little message from that site right now). Let’s take a closer look at both sides and let you decide:

![Internet Explorer Versions by Month (May 2007 - Nov 2013)](/is-it-time-to-drop-support-for-ie8/ie-versions-graph.jpg)

## SEE YOU LATER IE8! TIME TO JOIN THE ISLAND OF MISFIT TOYS.
**The year is 2014, not 2009.** Internet Explorer 8 is the latest version supported on Windows XP, an operating system that Microsoft is officially going to [stop supporting in April 2014][stopSupport]. These days, all the popular browsers have adopted the automatic update - including IE 9. This will force most users to upgrade sooner, thus cutting down the shelf life of older browsers. A few short years ago, designers had to consider multiple versions of browsers, because the unreliable nature of the end user would not always rush to update to a newer version.

**Time spent on legacy code and outdated browsers could be better spent on more important things**, like designing and developing mobile-friendly sites. On Thanksgiving week of 2013, ZURB released it’s latest version of their popular mobile-first framework, [Foundation 5][foundation]. With this release they ditched support for IE8 with browser statistics showing that only 8.65% of users still use IE8. As of February of 2014 the numbers have dropped to 6.13%, and the numbers are continually decreasing.

**Even the big players are leaving IE8 behind.** Google Analytics stopped supporting Internet Explorer 8 at the end of 2013. That’s right, Skynet… er I mean, Google, even says it’s time to move along. Their reasoning:

>“We decided to do this to both accelerate the pace at which we can innovate new product features, and to facilitate adoption of newer web technologies in the design of the Google Analytics product. Our ultimate goal is to provide a superior user experience for every GA user. As a note, we’ll of course continue to measure traffic from IE8 browsers to your website.”

## STOP BEING LAZY. IE8 ISN’T GOING ANYWHERE FOR A WHILE.

![January 2014 - Web Browser Market Share Graph](/is-it-time-to-drop-support-for-ie8/current-browsers-graph.jpg)

**6.13% of users still use IE8, which still equates to a lot of people.** And that’s only in North America. In Europe 4.08% of users still use IE8 and in Asia the percentage is a whopping 9.22% (numbers all from http://gs.statcounter.com/). So are we going to abandon users because we are too lazy, stubborn, and blinded by the shiny new things to support a “dying” browser? Not likely. And yes, I said dying, not dead. As long as there is a pulse there’s still a need for support.

**Some industries and large enterprise businesses are still stuck with IE8.** Industries like healthcare, or finance where IT departments need to be extremely security conscious may still be catching up to ditch IE8. It’s pretty common for IT departments to lock down the ability for every user to be able to update software whenever they please, leaving many users with no other choice on what browser to use.

In fact, we work with some large, international, B2B companies with offices all over the world who experience this first hand. Thousands of employees and computers that all have to be in sync. A decision like that requires time and money - so when an upgrade rolls out, companies aren’t quick to jump on the bandwagon just to have the newest version, just because it’s available. When we are faced with the need to support IE8 we will design an IE specific version and make sure that the all the bells and whistles degrade gracefully.

**E-Commerce sites can’t just abandon support of older browsers.** The ROI for supporting IE8 is diminishing, but until it drops to zero, there is still an opportunity to make a profit. Businesses can’t just leave money on the table for the fact they don’t want to support IE8.

## WRAPPING IT UP IN A NICE, NEAT PACKAGE.
So when starting a new web project there are usually three options when it comes to IE8:

1. **Don’t use anything that IE8 doesn’t understand (CSS3 and Media Queries).** Where is the fun in that? In a mobile world, not using media queries puts you behind the times. Also, who wants to live in a world where you have to ditch all the beautiful new CSS3 properties to support people who can’t get with the times? Not I!
1. **Serve up a tailored stylesheet specifically for IE8.** This seems to be the common course of action, but now designers and developers have to do double the work. A beautiful, cutting-edge site with all the bells and whistles and then a toned down, boring, version for those still caught in the dark ages.
1. **Just ignore the existence of IE8.** This is what we would all like to do. Give in to the temptation. Join the dark side... we have cookies.

Personally, I would love to stop supporting IE8. Professionally, it’s just not realistic, nor will it be anytime soon. As a business, we consider as many factors as possible for each project when deciding, including budget, client priorities, user demographics, devices and context, and overall browser marketshare.

This article only scratches the surface of pros and cons so what are your thoughts? Choose a side, or play both. Let me know on Twitter [@morsecodemedia][twacct].

  [twacct]: https://twitter.com/morsecodemedia "Follow @morsecodemedia on Twitter"
  [part2]: https://blog.morsecodemedia.com/is-it-time-to-drop-support-for-ie8-part-2/ "Is It Time To Drop Support For IE8? - Part 2"
  [countdown]: http://theie8countdown.com/ "The IE8 Countdown"
  [foundation]: https://foundation.zurb.com/ "ZURB's Foundation"
  [stopSupport]: http://www.microsoft.com/en-us/windows/enterprise/endofsupport.aspx "Microsoft to stop supporting IE8"
