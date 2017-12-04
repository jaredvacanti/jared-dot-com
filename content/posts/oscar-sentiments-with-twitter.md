+++
image = "img/portfolio/hollywood.jpeg"
showonlyimage = false
draft = false
date = "2015-02-06T19:53:42+05:30"
title = "Visualizing Oscar Sentiments with Twitter Data"
weight = 5
+++

Even though it's already Thursday, sometimes these things are better late than never (4 days is too long-- I'm already focused on Oscars 2016). I crunched some data on the Oscars to see what people thought about the winners and how they reacted to the losers.

<!--more-->

A few things we can take from this: it looks like people really wanted "American Sniper" to win. There was a huge spike right at the announcement for Best Picture (around 11 PM CST- but the Oscars ran a little late).  The Theory of Everything noticed some action around the same time that Eddie Redmayne won the award for Best Actor. Selma noticed a spike leading up to the announcement, but dropped off as soon as the announcement happened -- a lot of "I hope Selma wins :)", etc.

Methodology: I used an Azure virtual machine to stream the Twitter Firehose during the Oscars. My local machine kept timing out because of the bandwidth and processing speed of the stream. I found that at the A4 8-core level I didn't have any problems. I filtered the stream for tweets containing any of the nominees (people or films, this post is only for the best picture nominations). I used MongoDB to store them and filtered the tweets with text processing (NLTK). I did make a mistake and closed my connection out for a while until the data starts on this page (just about 20 minutes before the announcement of Best Picture), but I noticed it in time to get it started up again for the 11PM announcement.

{{< d3js >}}

The visualization is done in D3.js, the best way to interact with data, and it's stored in a .csv file. I'm not completely sure about the twitter rates, but I collected ~150k tweets in 45 minutes. Twitter logs told me that I missed out on ~10k tweets, so there were roughly 160,000 tweets. It's a big number, but that seems low. I'll try to refine the process more in the future.

