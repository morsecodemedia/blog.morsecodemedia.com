---
title: "Project Spotlight: UTM Generator"
description: "In the post, I talk about one of my side projects, the UTM Generator."
createdAt: 2021-06-29T10:55:32-04:00
tags:
  - analytics
  - vue.js
draft: true
---

Over the years I would have an account person ask about UTM parameters or more vaguely, how to track vanity URLs or QR codes. I usually address their questions with a littl education and then after awhile, I get the follow-up question, "Can you generate UTMs for me?"

"Yes, I can," I would say, "however you should really be reaching out to the team that is pulling analytics and putting together the monthly reports." This would oof course go into more back and forth on why, an explaination about tracking manifests, and how cutting corners to make your life easier usually results in making someone else's life more difficult.

For awhile I was working with teams that didn't have a budget for an analytics team or someone who would be doing in-depth reports on the website's analytics. So in those instances, the account manager had just enough knowledge to pull basic information from Google Analytics and report back to the client. So taking that into consideration, I decided it would be good to create a tool that would allow them to [create their own UTMs](https://utm-generator.morsecodemedia.com/?utm_source=blog.morsecodemedia.com&utm_medium=post), with some suggested information about where to set certain parameters.

As the user fills out the form, a URL would dynamitcally be created. When they are ready they are able to copy the full URL with UTM parameters to their clipboard. This tool also works the opposite way. You can add the UTMs to the tool's URL and it will parse them into the form &mdash; allowing you to use it to double check validation and make adjustments accordingly.

I tried not to make this tool opinionated, such as I personally like URLs to be all lowercase with dashes instead of underscores or spaces, but I don't stop users from going against that here. I just provide passive notifications about consistency for the long term. However, if you have any suggestions, feel free to log an issue in the [project's Github](https://github.com/morsecodemedia/utm-generator.morsecodemedia.com/issues).
