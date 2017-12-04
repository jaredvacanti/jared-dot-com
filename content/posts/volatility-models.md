+++
image = "img/portfolio/trading.jpeg"
showonlyimage = false
date = "2016-11-05T19:57:40+05:30"
title = "What's a local volatility model?"
draft = false
weight = 1
+++

What other volatility models are there?

<!--more-->

This question comes up a lot. What's the difference of a local volatility model vs a regular volatility model (if there even is a *regular* vol model)?
Really, what's a volatility model?

The majority of my trading and research involves using a local volatility model. This probably makes sense to a trader after hearing I mostly am *selling*
options because most of this research originated from sell-side quants at big banks who were making prices for products to sell.

#### The types of volatility models
I think the popular models today can be classified as three types. They're separated by the philosophy that underpins them. 
They all begin with assumptions, and those assumptions are how I'm most comfortable differentiating them.

1. Stochastic Volatility
2. Local Volatility
3. Parameterized Volatility

**Parameterized volatility models** are also known as **historical volatility models**. 
These are essentially taking data points from the past to characterize the current
market. These typically don't make a prediction, but you can use them to make some straightforward ones (like volatility will revert). It would
then be fair to say volatility is "higher" or "lower" than it normally is. It's
easy to find trade entries from these models, but I've personally not had success with them. This could very well be to the (lack of) sophistication of the
models that I used. But I've found that most stocks and indices become volatile *for a reason*, and just relying on what happened in the past
is never near enough to trade profitably.

**Stochastic volatility** is still used to great effect today, and make a lot of sense in theory. The great financial discovery of the last
fifty years was that most of finance is best modelled as a completely random process. Stochastic volatility is a great extension of this and assumes
that volatility is also random. Contrast this to the Black-Scholes framework which says it will be the same for the whole trade. We know that's not
true, so adding a random component to volatility was a positive step.

A **local volatility** model takes the prices to be correct for options. So if volatility is high it's supposed to be high, if it's low the market knows 
its low for a reason. They're mostly used to extrapolate to other assets or positions assuming that the market really knows what it's doing.
I'm comfortable with this assumption (in general) and then can find small inconsistencies with pricing on an index, even if that only means identifying
where to position wings on a butterfly or short strikes on strangles.
