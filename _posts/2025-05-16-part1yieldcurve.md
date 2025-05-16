---
layout: post
title:  Part 1 Yield Curve Inversion and Recession Signals
author: sal
categories: ['Quantitative Economic Analysis]
image: assets/images/yield.jpg
featured: True
---

### Yield Curve Inversion

When short term interest rates (2 year) are higher than long term (10 year), it is often a recession signal. So you would expect stocks to underperform when the curve is inverted. 

#### Data
* **Yield Curve Data:** This was obtained from FRED for 10Y and 2Y. It was resampled monthly. Curve spread was created as an inversion signal.
* **Market Return Data:** SPY returns were downloaded from Yahoo Finance. 

#### Analysis
![fc376bde-eb51-4dea-ac27-b35b9f0dd691](https://github.com/user-attachments/assets/262ddaf5-e06f-4d36-92b9-bdda25f31b9c)

The average monthly return when the curve is inverted is 1.15%. The average monthly return when the curve is not inverted is 0.89%.

The histogram visualizes how the SPY monthly return differs on whether the yield curve is inverted on not. There is a noticeable drop in SPY's average monthly return when the yield is inverted - a 0.44% lower return per month. Over a year, it is a meaningful difference due to compounding. 

The approximate annualized return when the curve is normal is 12.4% and 6.7% when the curve is inverted. 

![16f48b97-fce0-4309-88f9-4372dc2487bc](https://github.com/user-attachments/assets/872ed1f7-ead6-4197-a36b-822b8a3f07bb)

Cumulative returns during normal yield curves are substantially higher than during inversions, but this is expected since the market spends much more time in normal conditions.

#### **Other Key Statistics**

##### **Volatility**
* Volatility (Inverted): 4.16%
* Volatility (Normal): 4.37%

This indicates markets are slightly more volatile during yield curve inversions, which makes sense as inversions often signal economic uncertainty.

##### **Max Drawdown**
* Max Drawdown (Inverted): -14.94%
* Max Drawdown (Normal): -51.35%

The maximum loss during inverted periods is significantly less severe than during normal periods. However, this needs context, such as major market crashes like 2008.

#### **Downturn Return**
* Avg SPY Return 3 Months After Inversion: 1.20%
* Count: 51

Despite inversions being recession indicators, the immediate market reaction in the following quarter tends to be modestly positive.

#### Next Steps

This analysis was an exploration of yield curve inversion and market return. Part 2 of this analysis will expand the starter dataset with more economic indicators such as the federal funds rate, housing starts, and VIX volatility index to use as features in predictive models to estimate forward return. 
