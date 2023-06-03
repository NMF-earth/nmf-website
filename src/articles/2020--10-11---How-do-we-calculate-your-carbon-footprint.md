---
title: How do we calculate your carbon footprint? 🐾
date: 2020-10-11
categories:
  [
    "Climate Change",
    "Climate action",
    "Carbon footprint",
    "Calculation",
    "Streaming",
    "Transport",
    "Food",
  ]
description: "Some explanation on how do we calculate your carbon footprint"
slug: "calculation-carbon-footprint"
---

![plane](/assets/images/blog/2020/plane.png)

# How do we calculate your carbon footprint? 🐾

It’s important to say that there is no perfect calculation method because there are too many parameters to take into account, such as the weather which can drastically influence plane fuel consumption and some parameters, that we can’t predict like the lifespan of a car for example.

However, what is important is the order of magnitude in order to compare and reduce our carbon footprint. All coefficients used [in our app](https://nmf.earth/) are from [Ducky](https://static.ducky.eco/calculator_documentation.pdf) and [Ademe](https://www.bilans-ges.ademe.fr/).

_NMF.earth is an_ [_open-source_](https://github.com/NMF-earth/nmf-app) _mobile application for_ [_iOS_](https://apps.apple.com/us/app/nmf-earth/id1494561829) _and_ [_Android_](https://play.google.com/store/apps/details?id=nmf.earth)_. It’s a carbon diary, where you can track and analyze your CO2 emissions in order to reduce your carbon footprint._

## **Transport**

Very simple, knowing the amount of kilometres you have travelled, you simply multiply it by the coefficient of your vehicle. For example, fossil fuelled cars coefficient is 257 gCO2/eq per km which means that you emit around 2,6 kg of CO2 every 10 kilometres.

**For planes**

Knowing the length of the flight allow us to know what kind of flight you had: small, medium or long haul. Knowing the average speed on these flights we deduct the distance and therefore the emission by multiplying by the corresponding coefficient.

## **Food**

We simply multiply the weight by the corresponding food ingredient coefficient.

## **Electricity**

We know thanks to [Electricity Map](https://www.electricitymap.org/map) the carbon intensity of electricity of your country. Since we know how much watt hour you have consumed, you do a simple multiplication with your local carbon intensity to know your electricity emission.

## **Streaming**

This is tricky. We use an improved version of the 1-byte model made by [The Shift Project](https://theshiftproject.org/).

Knowing the duration and the type of streaming service you have consumed (high definition film, music…) we deduct the quantity of data (dataWeight) you have downloaded on your device.

The total amount of CO2 emitted is the following (_GHG : greenhouse gases)_ :

**GHGdataCenter + GHGnetwork + GHGdevice**

And these elements are defined in these terms :

**GHGdataCenter** = dataWeight x FactorDataCenter x electricity.world;

**GHGnetwork** = dataWeight x FactorNetwork x electricity.world;

**GHGdevice** = duration x FactorDevice x electricity[carbonElectricityIntensity];

![streaming-carbon-footprint](/assets/images/blog/2020/streaming-carbon-footprint.png)

On the picture above, you can see in detail the calculation, step by step, of the pollution due to the streaming of a film in average in the world (70 gCO2/eq).

This methodology can also be found in detail on our [Github](https://github.com/NMF-earth/nmf-app).
