---
title: "Is It Time to Drop Support for IE8? - Part 2"
description: "In this article I revisit my take on Internet Explorer 8 and why it needs to be left in the rearview mirror."
createdAt: 2015-03-18T08:57:00-04:00
tags:
  - Internet Explorer
draft: false
---

Today marks the sixth year anniversary of Internet Explorer 8. With that, I thought it would be good to revisit [an article I wrote last year][part1] about dropping support for IE8, and take a look at what has changed in the last twelve months.

This time last year, according to [StatCounter][stats]. IE8 held 6.13% of the Internet's users. Today, that number has significantly dropped to 3.63%. So - what could have contributed to this? It may be a few things, starting with Microsoft discontinuing support for Internet Explorer 8 back in April 2014. Other big brands quickly followed suit. As I mentioned in the last post, Google Analytics and ZURB Foundation 5 both dropped IE8 support at the end of 2013. Marketing automation platform, HubSpot, takes it a step further. It does not support IE8, and only partially supports IE9. Come May 2015, SalesForce also plans to drop support for Internet Explorer 8.

It's also important to note the shift in responsive design over the past year. App-like designs and functionality have become the norm - which, of course, are not supported by IE8. With 80% of Internet users owning a smartphone and using it to browse the Internet, even e-commerce sites have seen big spikes in consumers accessing their site via mobile.

## What's Changed?
When I spoke about this issue last year, I discussed three ways to approach the IE8 conversation when taking on a web project. Let's revisit them for a second…

* Avoid using techniques IE8 doesn't understand, like CSS3 and Media Queries. Mobile devices are such a prominent part of everyday life and how we all communicate with one another - making Media Queries feel antiquated. The same goes with CSS3 techniques.
* Serve up IE8-specific stylesheets. This is not as cost-effective as it once was. In recent months, the only time we bother with this is to serve up an Internet Explorer 8 compatibility page prompting users to upgrade their browser. This forces us to spend a bit of development time serving up a page that helps guide users to a different browser solution.
* Ignore the existence of Internet Explorer 8 altogether. With less headaches and more cookies, this is still my favorite of the three options. IE8 isn't making a big enough blip on the radar, especially with browsers that are auto-updating. The truth of the matter is, even IE9 is showing signs of ending up in the rearview in the near future.
* If you're still holding on to IE8, hopefully this will convince you to move on to greener pastures. I don't want to revisit this in another year with the third part of the series - "Internet Explorer 8 is Dead and You're not a Necromancer".

I'll leave you with a neat little site that promotes severing ties with IE8: [http://breakupwithie8.com][breakup].

  [part1]: https://blog.morsecodemedia.com/is-it-time-to-dropf-support-for-ie8/ "Is It Time to Drop Support for IE89? - PART 1"
  [stats]: http://gs.statcounter.com/ "Global Stats"
  [breakup]: http://breakupwithie8.com "Are you ready to breakup with IE8?"
