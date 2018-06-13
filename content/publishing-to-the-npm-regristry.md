---
title: "Publishing to the npm Regristry"
date: 2018-06-13T09:27:07-04:00
draft: false
---

**_Note: I am going to assume that if you are reading this post you know what Node and npm are. As well as, you have both installed and have used them to some extent that I will not be covering those topics._**

In my [last post][mcm1], I spoke about how I was going to look into creating the components of the smart mirror into Node packages, or modules. Last night, I decided to sit down and actually look into what it takes to do as such - and was awestruck. _It couldn't be this easy, could it?_ As a [new publisher of two npm modules][mcm2], I can tell you, yes, yes it is that easy.

In this post, I plan to provide you some insight in what I learned while publishing to the [npm Regristry][npm1].

## The difference between a package and a module

Node.js and npm have very specific definitions of packages and modules, which are easy to mix up. The [docs on npm][npm2] do a great job explaining why certain default files are named the way they are.

### The highlight reel

A package is a file or directory that is described by a `package.json` file. Whereas, a module is any file or directory that can be loaded by Node.js' `require()`.

## Ok, so let's get to publishing!

Before you can publish to the regristry, you need make sure you have an account. You can do this one of two ways: via the browser or in the command line. For this example, let's try to keep in in the command line.

`npm adduser`

It will ask you for your username, password and email address. Ta da! You now have an account on the npm regristry. You will receive an email to verify and you can do that and fill out more details to your profile at your leisure.

Next you are going to create a package.json file. Note, that if you are trying to prep an existing project to publish and you already have a package.json, that's ok. The next command appends whatever information you are missing to the existing file.

`npm init` or `npm init --yes`

The minimal requirements that you have in your package.json to publish are the following:

    {
      "name": "my-awesome-package",
      "version": "1.0.0"
    }

Now in my case, I was taking Vue components and turning them into Node modules, so I also had to change `"main": "index.js"` to something link `"main": "index.vue"`.

You are now ready to publish.

`npm publish --access public`

That's it! You have now published your first Node package/module to the npm regristry.

  [mcm1]: https://blog.morsecodemedia.com/architectural-short-sightedness/ "Architectural Short-sightedness on the MorseCodeMedia blog."
  [mcm2]: https://www.npmjs.com/~brandonmorse "Brandon Morse on the NPM Regristry"
  [npm1]: https://www.npmjs.com/ "The npm regristry"
  [npm2]: https://docs.npmjs.com/getting-started/packages "Packages vs Modules"


