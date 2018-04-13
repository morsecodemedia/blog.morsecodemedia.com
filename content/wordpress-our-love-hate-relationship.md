---
title: "Wordpress: Our Love/Hate Relationship"
description: "WordPress is a very widely used and well liked CMS, but it also has its weaknesses. These are just a few of the things I love and hate about WordPress."
date: 2013-09-23T21:52:43-04:00
draft: false
---

As a CMS, there's a lot to love about WordPress. For the most part it's easy to use, and allows users to spend more time on the important parts of writing content. If you do need any help there are tons of resources available. One in particular, is the large community following of WordPress users. Not that it's hard to reach this status in the development community, but the WordPress community is probably the most personable out there.

On the other hand, one issue with this community is that it's virtually impossible to code without it. Not to mention this wonderful community and its endless supply of plugins and themes is a constant source of vulnerable code. Considering the numerous other viable CMS solutions available, the popularity of WordPress actually seems disproportionate. And as far as usability, the backend is structured for and uses the language of a blog, which could confuse clients when they go in to manage their other types of content.

## There's A Plugin For That

The ability to further WordPress's capabilities with an endless selection of themes and plugins is one of the main attractions to the CMS. Plugins can extend WordPress to do almost anything you can imagine. There is no doubt in my mind, plugins are truly amazing. As this is being written, there are over 25,420 available plugins with 469,858,154 downloads and counting. Although, how many of them can actually be trusted? From my experience, there are only a few that are used successfully on a regular basis.

Over 25,000 plugins. The sheer number of available plugins could tempt you to install and test a large number of them. This can quickly lead to the bloated, slow loading website that we are all trying to avoid. Many of these plugins, sadly, leave a "footprint" which takes some effort to get rid of. This includes tables, table data and code. Knowing what are the core WordPress tables makes it easy for you to scan through your database and drop any tables that have been orphaned by uninstalled plugins. Still, plugins can also leave data in the wp_options (or [whatever prefix you chose][cyrptoanalytic]) table.

Another thing to look out for when adding then removing plugins, is the code left behind. It is not uncommon for plugins to provide a block of pre-formatted content. In many cases this block of code will conflict with your template code and cause issues. Shortcodes are powerful little helpers, but if they are implemented by a plugin that is no longer active, your site will be riddled with broken code.

WordPress updates its version quite regularly, but this causes issues with plugins. Most plugins do not receive the same amount of attention as the WP core, which leads to compatibility issues that then turn into sections of sites not functioning correctly. Just basic neglect from plugin developers can cause issues. For example, Twitter recently retired the deprecated API v1.0. If you were using a plugin utilizing that version of the API, the Twitter feed of your site would no longer work.

## More Than Just A Theme

There is a large selection of premade themes out there that can have a major impact on the presentation of your WP site. More often than not, themes are more than just "skins." Although, the broad intention of themes is to alter the design of the site, plugins are packaged with the theme to add / edit functionality. This can impact the general functionality of your site.

That's great, but say that you want to switch themes but keep the functionality that came with that theme. A lot of the plugins packaged with themes, especially the premium ones, are custom built for that theme. It's not something that you can just jump over to the WP Plugin directory and download a copy. Unless the plugin giving you that great feature is packaged into the next theme you try on - you're canoeing up that ol' creek and there is not a paddle in sight. Crossover of functional elements is often unavoidable between themes and plugins, but could be better avoided under certain circumstances.

## Final Take

As with all CMS platforms, overall WordPress has it's pros and cons. It's a great tool that can provide users with a wide arsenal of capabilities. However, I wouldn't go running to it for every site that needed a CMS. WordPress is great for a simple blog site, a small website or a beginner in web design. However, for more saavy CMS users and businesses who want to have smart marketing campaigns and complex functionality I would opt for a more flexible CMS, such as ProcessWire or ExpressionEngine, or build a custom CMS to fit the needs of the site.

So, what's your relationship with WordPress like? Do you love all of the features and community resources? Or do you hate the headaches and maintenance issues that come along with it? Let me know on Twitter [@morsecodemedia][twacct].

  [twacct]: https://twitter.com/morsecodemedia "Follow @morsecodemedia on Twitter"
  [cyrptoanalytic]: https://blog.morsecodemedia.com/wordpress-security-tips-cryptanalytic-attacks/ "Here I offer some security tips for your WordPress sites"