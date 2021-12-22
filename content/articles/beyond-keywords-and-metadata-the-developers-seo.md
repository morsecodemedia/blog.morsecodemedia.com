---
title: "Beyond Keywords and Metadata: The Developer's SEO"
description: "In this article I discuss the role of the developer in SEO"
date: 2015-04-03T16:47:05-04:00
draft: false
---
Contrary to popular belief, search engine optimization (SEO) responsibilities do not fall solely on the marketing department. From a website's inception through its lifecycle, the developer plays just as much of a role in the site's SEO as the marketing manager. And it's more than just keywords and meta data - site architecture and presentation techniques can drastically impact rankings and traffic as well.

If you're a developer looking for some quick-hit ways to optimize your site for search, you're in the right place. I'll take you through some development techniques that are worth utilizing in the future.

## Your .htaccess File

The .htaccess, short for Hypertext Access, is a directory-level configuration file used by Apache-based web servers. It allows for decentralized management of the web server's configuration. But how does it impact SEO?

### Improving SEO With Custom Error Pages

Utilizing the .htaccess file to direct the user to your [custom error page][ERROR] will improve your site's overall SEO. By using the HTTP status messages received from the web server, you can send users to custom error pages that match each type.

Here's an example of how I would use the .htaccess file to redirect users accordingly:

    ErrorDocument 404 /custom404error.html

### Permanent 301 Redirects

Using 301 redirects in your .htaccess file will let search engines know that an old page has been replaced with a new one, also redirecting traffic to new pages. With 301 redirects, you can redirect individual files on the same domain, redirect an old domain to a new, force www in your URL and even redirect files with certain extensions.

### Redirecting Individual Pages

Say you'd like to redirect a landing page that has an expiration date after 30 days. Your best options, in terms of search, would lie in using a 301 redirect, redirecting search engines and users to an active page on your site. Inside your .htaccess file, you could achieve this with one line.

    Redirect 301 /persona-development-landing-page.html /services/persona-development.html

### Redirecting From An Old Domain To A New One

The town I grew up in had three streets named Robin: Robin Dr., E. Robin Ct., and W. Robin Ct. As you can imagine, many people got lost trying to find the Robin they were looking for. Failing to register multiple versions of your domain names can create the same problem. While .com is the dominant top-level domain, you may still want to acquire the .net, .org, or any other of the various [TLDs][TLD].

You can manage all of this with your .htaccess file:

    RewriteEngine on
    RewriteCond %{HTTP_HOST} ^yoursite.net [NC, OR]
    RewriteCond %{HTTP_HOST} ^www.yoursite.net [NC]
    RewriteRule ^(.*)$ http://www.yoursite.com/  [L,R=301,NC]

### SEO-Friendly URLs

Something we often discuss on a content and development level are keyword-rich URLs. URLs that are formatted to be more human-friendly perform much better than those URLs that utilize query strings.

    RewriteEngine on RewriteRule ^content-marketing /services.php?service_id=2

 With the above block of code in your .htaccess file, you'll be able to manipulate the URL of the services.php page. This will serve up content for the service with the id of 2, or content marketing in this example: _www.yoursite.com/services/content-marketing_

## XML SITEMAPS

Your sitemap does a few things. It's a list of pages on a website that your users can access. It's also what you use to tell Google and other search engines about each page of your site, how your content is organized, how frequently that content is updated and it may even reveal the types of content on your pages.

But how do they really impact your SEO? Sitemaps help web crawlers crawl larger sites that might overlook some new or recently updated pages. If you have isolated pages, such as landing pages, you can list them in the sitemap to ensure that search engine get the chance to see them.

### Use XML Sitemaps To Indicate Alternative Language Pages

If you have a website that's in multiple languages, utilize the rel and hreflang attributes of your sitemap to help search engines display the correct language to searchers.

The example below shows the URL block of the XML sitemap. This tells search engines that the homepage of yoursite.com is available in both English and Italian, allowing them to serve up the proper content accordingly.

    <url>
      <loc>http://www.yoursite.com/en/</loc>
      <xhtml:link rel=”alternative” hreflang=”it” href=”http://www.yoursite.com/it/” />
      <xhtml:link rel=”alternative” hreflang=”en” href=”http://www.yoursite.com/en/” />
    </url>


## Page Speeds

Google indicates that site speed is one of the many signals used by its algorithm to rank pages. As a result, this plays a big role in optimizing your website. Page speed, often confused with site speed, can be described in two ways:

* Page load time, which is the time it takes to fully display the content on a specific page, or...
* Time to first byte, which is how long it takes for your browser to receive the first byte of information from the web server.

Improve your page speed, and you'll improve your site's rankings.

## Robots.txt

The robots.txt file is a text file in the top-level directory of your web server that instructs search engine robots how to crawl and index your site. The robots.txt file is part of the Robots Exclusion Protocol (REP) - a group of standards that help regulate search engine crawlers and the way they index sites.

Need some examples of what this might look like?

A basic robots.txt file will look similar to this:

    User-agent: * Disallow:

To block all web crawlers from the content of your site, it'll look like this:

    User-agent: * Disallow: /

To block specific pages from web crawlers:

    User-agent: * Disallow: /blocked-page.html

To tell web crawlers the location of your XML sitemap, use this:

    User-agent: *
    Disallow:
    Sitemap: http://www.yoursite.com/nonstandard-loc-for-sitemap/sitemap.xml

I know - that was a lot. To sum it all up:

* Utilize your .htaccess file for custom error pages and permanent redirects
* Clean up your URLs to be user friendly
* Always have an XML sitemap
* Page speed matters
* Robots are your friends
* This is just the tip of the iceberg when it comes to SEO for developers. There are many more things you can do to help improve your site's SEO over time, so be sure to keep reading and keep learning.

Until next time, you can reach out to me on Twitter [@morsecodemedia][twacct].

  [twacct]: https://twitter.com/morsecodemedia "Follow @morsecodemedia on Twitter"
  [ERROR]: https://blog.morsecodemedia.com/why-build-a-custom-404-error-page/ "Why Build a Custom 404 Error Page"
  [TLD]: https://blog.morsecodemedia.com/internetology-101/ "Internetology 101"
