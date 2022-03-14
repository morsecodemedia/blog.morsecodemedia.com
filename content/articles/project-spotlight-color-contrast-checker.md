---
title: "Project Spotlight: Color Contrast Checker"
description: "In the post, I talk about one of my side projects, the Color Contrast Checker."
createdAt: 2021-07-01T13:05:32-04:00
tags:
  - accessibility
  - vue.js
draft: true
---

Ever since I acheived my CPACC certification in 2020, I have been pulled into more and more accessibility conversations. At first they began as high level conversations about basline things to look at: image alt text; focusable elements; proper H1-H6 heirarchy; and color contrast. As time went on, color contrast became a topic of conversation, more often than not. I would point designers to tools like the [WebAIM color contrast checker](https://webaim.org/resources/contrastchecker/), but I noticed that was only convering the base level of requirements. But to truly create an inclusive web, you can't just meet the bare minimum requirements. So I decided to build my own tool to compensate for more - the [Color Contrast Checker](https://ccc.morsecodemedia.com/?utm_source=blog.morsecodemedia.com&utm_medium=post).

This tool allows you to use a coor picker to select a background and text color. It then proceeds to check the AA and AAA contrast ratios for both normal and large text options, against the WCAG 2.1 standards. However, that's the base line of what every color contrast checker does.

## So what makes this tool different?

After checking contrast ratios for Trichromatic vision (regular vision), it then proceeds to check the contrast ratios against the following vision impairments: Protanomaly; Protanopia; Deuteranomaly; Deuteranopia; Tritanomaly; Tritanopia; Achromatomaly; and Achromatopsia. The tool also shows visual representations of the color combinations for each of the vision impairments so that you are able to see the colors how other might.

Since I built this tool using Vue.js, I have all the simulations and contrast ratios update live as you adjust the colors.

Over the last few months, the amount of accessibility audits I would conduct has greatly increased. Around 15-20% of my work week is now dedicated to performing or presenting audits. After awhile, I realized that it would be great if I could link to the tool from audits to show visual representations of the colors getting flagged for low contrast. So I added the ability to set the background and text colors via query parameters. This was a good first step, but that feature is only accessibile to users that know that the feature exists, and know how to manually set query parameters. Since then, I have created an "easy button." This will now allow users to one-click copy the URL of the page with the query parameters set to the currently set colors.

That's where I am today with the Color Contrast Checker. I feel like it's a solid tool, but always open to suggestions. If you would like to suggest a new feature, or notice something broken, feel free to log an issue on [project's GitHub](https://github.com/morsecodemedia/ccc.morsecodemedia.com/issues).
