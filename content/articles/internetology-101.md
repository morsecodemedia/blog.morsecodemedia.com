---
title: "Internetology 101"
description: "Here I delve into the basics of the internet, including history and helpful definitions."
createdAt: 2015-04-15T14:44:32-04:00
tags:
  - terminology
  - education
draft: false
---
Welcome to the Internet! I'll be here to guide you from the very beginning all the way down to domain names and URLs.

First, lets get familiar with where the Internet came from. The **Internet** was created in 1969 by the United States Military during the height of the Cold War as a "nuke-proof" communications network. It's comprised of millions of computers throughout the world, networked together. The **World Wide Web**, commonly referred to as 'the Web', is a large collection of information, including pictures, music, videos, and more. And it's all accessible via the Internet.

>**_Fun Fact:_ If you're referring to the Internet or the World Wide Web as a noun, you should capitalize both. On the other hand, if you're using an adjective to describe it, you do not.**

>**_Example:_ "I was browsing the Internet on my new Samsung SmartTV." OR "I found a great web page talking about the upcoming Start Wars movies."**

And, just like in real life, when you move, your address changes. With computers, think of your typical street address as an **IP Address** (Internet Protocol Address). IP addresses are defined as a 32-bit number known as IPv4 - which looks like 72.32.54.132. IPv4 maxes out at 4,294,967,296. With the growth of the Internet and the predicted depletion of available addresses, a new version IPv6, using a 128-bit number for the address, was developed - maxing out at somewhere around 340,282,366,920,938,463,463,374,607,431,770,000,000.Now, let’s get a little bit more in-depth and discuss hosting. Think of your host as a community. The servers provided by your host are the neighborhoods and each website is a house in that neighborhood. Recently, allwebcafe completed a hosting migration from our former host, Rackspace, to Amazon Web Services (AWS). In other words? We moved from our studio apartment (Rackspace) into a brand new home (AWS).

![screenshot of the terminal after 'dig allwebcafe.com'](/internetology-101/dig-allwebcafe-com.png)

## What do IP Addresses have to do with a hosting migration?

When we moved the websites from one server to the other, we had to change the IP Address. But that wasn't all. We also had to change the name servers. Since our **Domain Name System** (DNS) was managed through Rackspace previously, we utilized AWS's Route 53 DNS management tool when we migrated.

Let's clarify exactly what a DNS is. A DNS is a hierarchical naming system for computers and other resources that are connected to the Internet or private network. The DNS predominantly translates domain names into a much easier format for us to remember than the numerical IP Address that they represent.

A name server is the server component of the DNS. Authoritative name servers are name servers that give answers in response to questions asked about names in a zone. An authoritative name server can either be primary or secondary. The primary server stores definitive versions of all the records in that zone, whereas the secondary uses an automatic updating process to maintain an identical copy.

![screenshot of the terminal after running 'dig ns allwebcafe.com'](/internetology-101/dig-ns-allwebcafe-com.png)

When updating the DNS records, we try to update the TTLs in advance to help speed up the propagation process. A TTL, or time to live, is the lifespan of data in a network. In regards to DNS, a name server will cache the DNS record for the time, in seconds, determined by the TTL.

## A deeper look at domain names

We talked about IP Addresses earlier. If you recall, they can get pretty large and they’re not always the easiest to remember - and that's why we have **domain names**. Basically, a domain name represents a computer's IP address. Domain names are descriptions or representations of a computer's location on the Internet. Formed by the rules put forth by the Domain Name System, any name registered in the DNS is a domain name.

When talking about domain names, you will occasionally hear the term **TLD**, or Top-Level Domain, in the conversation. This is the top level in the hierarchy of the DNS. Common top-level domains are: 'com'; 'net'; 'org'; 'gov'; 'edu'.

![screenshot of an address bar with https://google.com as the active URL](/internetology-101/google-url.png)

In the above image, you see a **URL** (Uniform Resource Locator), that is comprised of a protocol: https; the domain name: google; and the top-level domain: com. The **Hypertext Transfer Protocol** (HTTP) is an application protocol that is the foundation of data communication for the Web. You'll notice in the example above, it has **HTTPS** instead of HTTP because it is layering the HTTP protocol on top of the **SSL/TLS** protocol. SSL (Secure Socket Layer) is a standard security protocol that uses a signed certificate to encrypt data sent back and forth from your web browser to a web server.

We've covered a lot of the basics here. Be sure to check back soon for the next post in this series, where I'll take a look at the pieces that make up a website. As always, you can reach out to me on Twitter [@morsecodemedia][twacct].

  [twacct]: https://twitter.com/morsecodemedia "Follow @morsecodemedia on Twitter"
