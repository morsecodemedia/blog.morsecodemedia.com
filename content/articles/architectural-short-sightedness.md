---
title: "Architectural Short-Sightedness"
date: 2018-06-08T13:05:32-04:00
draft: false
---

Usually, I am the team member looking pass the current update. Rather than treating the tasks in the pipeline as check boxes to tick off, I look at the bigger picture. How will this affect the greater project? Is this scalable. Will this hold value in 6, 12, 18 months from now?

  I take pride in this.

  But, I can be short-sighted. This was the case recently with the [smart mirror project][sm] I have been working on in my spare time. My original plan was to have the core framework be its own standalone project. With that, all the features to boast its functionality would be their own projects as well. The thought was that a user would clone down the main project and then include any of the   features they'd want as a `git submodule`.

  There were a few problems with this plan. First, I wasn't developing in the same manner I expected users to build their project. I had a sandbox of the main project that I was building each feature inside of. Once the core functionality of each module was complete, I would extract it out into its own project. Being that they are Vue.js components, they were able to run without being a part of the   bigger project. Not once did I attempt to them install it as a git submodule into the project. `git blame Brandon`.

  The second problem that arose with this approach was dependency management. When building the components inside of the sandbox, any npm package installed was added to the package.json in the main project. When extracted to their own projects, the same thing. However, once they were installed as a git submodule, there would be a nested directory structure with multiple package.json files. Running `npm install` would not traverse into the submodules and install their respective dependencies. Nor would properly manage versioning of said dependencies if multiple components used the same dependency of different versions. Head, meet Desk.

  Luckily, I came across a few articles recently on how to turn Vue components into npm packages. Score! Admittedly, I am prematurely celebrating this new information, as I have yet to actually attempt in doing such. I also don't know if it will actually solve my current issues rather than trading them in for new ones. So keep an eye out, there might be a sequel to this post about how I've fallen victim to committing to a development path wholeheartedly without doing all of my research.

. With that being said, on the surface it does seem like it will solve my dependency management issues. I still need to do some research into the configuration files of each component and how I am going to handle that. My hope is that I can keep the empty structure for each as the default, and if any of those settings are set in the main project's config file, it will use those values instead. Also, I need to see how navigation between components will work. At the moment they were going to be treated like their own "pages" inside of the app, but now it ,ight be a single "page" with the content dynamically loaded, as needed.

  If you want to follow along with the progress of the smart mirror, I will be documenting my progress, pitfalls and other random thoughts on this blog. You can read the start of the project [here][sm]. You can check out the code on [Github][ghsm] or [GitLab][glsm]

  [sm]: https://blog.morsecodemedia.com/smart-mirror-the-origin-story/ "The origin story of my smart mirror projecct"
  [ghsm]: https://github.com/morsecodemedia/morsecodemirror "My Github repository for my smart mirror project"
  [glsm]: https://gitlab.com/morsecodemedia/morsecodemirror "My GitLab repository for my smart mirror project"