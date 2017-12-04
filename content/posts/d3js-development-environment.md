+++
draft = false
image = ""
showonlyimage = false
date = "2015-05-05T19:50:47+05:30"
title = "The D3.js Development Environment"
weight = 4
+++

Mike Bostock’s D3.js is the hot, new (2011) tool on the web. More and more people are deciding they want to work with data visualizations, either as a full-blown career or a side project once they reach candidacy... or whatever. It definitely has some added benefits over using ggplot2, but the R packages still have way more resources to learn from.

<!--more-->

First, D3 is meant to be used on the web. So you need to know web development to use it. If you’re interested in making beautiful print graphics– D3 does have those capabilities– but, you’re not really using the right tool. You don’t need to be a server-side expert or a senior front-end developer, but it won’t help. You do need to know the basic principles of how it works.

D3 is meant to be open and that principle plays a big role in how the development process works. In typical javascript fashion, all of the code is run on the client machine. All the server is doing is providing all of the necessary files to populate the page. Most of the time this includes an HTML document, CSS, your D3 scripts (separately or in the HTML page), and your data (typically JSON format). Your main size restraints are the initial `GET` request.

So, to get started you need a text editor (Sublime Text 2), a web browser good for testing (Chrome Dev Tools), and a way to “host” your current directory, which emulates a live web server. W/L/MAMP is a good free option to use if you need Apache or PHP for your page, otherwise I just use python:

`python -m SimpleHTTPServer 8000`

This hosts your current directory at localhost. That’s a D3 environment, no different than the standard environment for web development.