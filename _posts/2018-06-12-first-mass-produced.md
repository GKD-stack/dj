---
layout: post
title: "Gender and Incumbency Advantage of Legislators"
author: sal
categories: [Gender, Politics, Research]
image: assets/images/cover_gender_incumb.jpeg
---

# Executive Summary:
Using U.S. House data from 1946 through 2010, this paper aims to answer the research question how gender affects a candidate during reelection. The dataset observations correspond to elections and provide key variables such as year, state and district, candidate names, incumbency, and vote counts. Gender and vote share were constructed. Data exploration illustrated the gender disparity in vote share by gender and party. The linear regression suggested gender and party did have a significant effect on the incumbency advantage, with women experiencing a greater incumbency advantage than men. This can potentially be explained by the phenomenon that sex discrimination by voters only allows the most ambitious and competent women to be elected. However, this significance did not hold when the year fixed effects were added to the linear regression, suggesting the unobserved values that change over time (political climate, women’s social status, etc) had a large impact on the incumbency advantage that women had. 

# Introduction:
Although women vote at a higher rate than men, they are underrepresented in Congress (Sanbonmatsu). This results in the United States being behind other developed Democratic countries in terms of women representation in the legislature. This can be attributed to the structural inadequacies of elections (e.g. one Congress member per district) and to the inequalities women have faced throughout US history; they only gained the right to vote in 1920(Sanbonmatsu). Yet, there are still barriers to women being elected arising from social norms, institutional barriers, and previous research illustrates voters do discriminate against female politicians (McGrath). More and more women are running for office (Lazarus et al) but they tend to run when they think they have a higher chance of winning. Once elected, women in Congress have been discriminated against in Congress since the first women elected in 1917 (North). This includes quips about emotions, appearance, and pay scale.After their term in Congress and it’s time to seek re-election, Women are not reelected as often as their male counterparts as well as have shorter careers in Congress (Lazarus et al). Women also perform differently in Congress compared to their male counterparts, Aniza and Barry explore why Congresswomen outperform their male counterparts in their 2011 article. In their article, they assert that women aim to perform better so that they can overcome gender biases. 
A potential explanation could be the incumbency advantage. Specifically, do female legislators experience the same incumbency advantages their male counterparts do? The null hypothesis is that there is no relationship between a legislator’s gender and the incumbency they have during election. The alternative hypothesis is that women are more likely to experience the incumbency advantage compared to their male counterparts. 


# Data Description:
We observed the U.S. House Elections dataset (1946-2010) and cleaned and manipulated certain variables. We constructed our independent gender variable, utilizing the Gender package in R, which looks at the first names of each candidate to determine the likelihood of the candidate (cleaned and parsed) being a male or female with a 0.5 proportion of certainty. This package relies on “historical datasets from the U.S. Social Security Administration, the U.S. Census Bureau” as well as the year associated with observing the popularity of the name in that time period (Mullen). We also constructed the dependent variable, vote shares for both parties, by dividing the respective parties' votes by the total votes. The independent variable, incumbency, and the control variables, party, state and congressional district, were all provided in the dataset.
We first applied the gender package, filtered the data to only include the variables of interest dropping the uncontested elections, elections where the previous election was uncontested, and elections where the district lines were redrawn, and then created the vote share variables. We did the exploration step after splitting the data frame by party. Then later recombined the data so each observation corresponded to a candidate instead of an election to allow for analysis on gender of the candidate rather than the party. 

<table border="1" style="font-size: 12px; border-collapse: collapse;">
  <caption style="font-size: 14px; padding-bottom: 10px;">Table 1 </caption>
  <thead>
    <tr>
      <th style="padding: 5px;">Variable</th>
      <th style="padding: 5px;">Var Name</th>
      <th style="padding: 5px;">Type of Variable</th>
      <th style="padding: 5px;">Method of Construction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 5px;">Gender</td>
      <td style="padding: 5px;">Gender</td>
      <td style="padding: 5px;">Independent</td>
      <td style="padding: 5px;">Constructed using Gender Package</td>
    </tr>
    <tr>
      <td style="padding: 5px;">Incumbency</td>
      <td style="padding: 5px;">Incumb</td>
      <td style="padding: 5px;">Independent</td>
      <td style="padding: 5px;">Provided</td>
    </tr>
    <tr>
      <td style="padding: 5px;">Democratic Vote Share</td>
      <td style="padding: 5px;">d_voteshare</td>
      <td style="padding: 5px;">Dependent</td>
      <td style="padding: 5px;">Constructed by dvotes/(dvotes+rvotes)</td>
    </tr>
    <tr>
      <td style="padding: 5px;">Republican Vote Share</td>
      <td style="padding: 5px;">r_voteshare</td>
      <td style="padding: 5px;">Dependent</td>
      <td style="padding: 5px;">rvotes/(dvotes+rvotes)</td>
    </tr>
    <tr>
      <td style="padding: 5px;">Party</td>
      <td style="padding: 5px;">dcand, rcand</td>
      <td style="padding: 5px;">Control</td>
      <td style="padding: 5px;">Provided</td>
    </tr>
    <tr>
      <td style="padding: 5px;">State and Congressional District</td>
      <td style="padding: 5px;">stcd</td>
      <td style="padding: 5px;">Control</td>
      <td style="padding: 5px;">Provided</td>
    </tr>
  </tbody>
</table>


**Data Exploration:**  
Initial summary statistics showcased that there were 4388 Democrats party incumbents seats and 4351 Republican incumbents. Only 16.56% of Democratic incumbents and only 11.06% of Republican incumbents were women. The average male candidate receives 78,031 votes while the average female candidate receives 77,378 votes from the vote share in general. 

 <img class="shadow-lg" src="{{site.baseurl}}/assets/images/eda_graphs.png" alt="Histograms" style="max-width: 100%; height: auto;">

# Statistical Methods:
The statistical methods used were a linear regression with control variables for descriptive analysis and a linear regression with control variables and fixed effects for the advanced analysis. The data exploration methods included summary statistics, and the distribution of vote share by party and gender. 
For the descriptive analysis, the independent variables were gender and incumbency and the dependent variable was the difference in vote share. The difference in vote share was calculated by subtracting the vote share from the previous vote share for each candidate per election within their state and district region. The control variables included were the state and district of the candidate and their party. 
For the advanced analysis, the same dependent variable, independent variables, and control variables were included. The R library “fixest” was used to incorporate the year as fixed effects. Since the same candidate can be observed across multiple years, year fixed effects were used to control for the variables that differ over the year but are constant across units. 

 <img class="shadow-lg" src="{{site.baseurl}}/assets/images/methods.png" alt="Histograms" style="max-width: 100%; height: auto;">

# Results:
In exploring the question “Do female legislators experience the same incumbency advantage as their male counterparts?,” there are two main methods used with results of varying significance. In one instance, where linear regression was used with control variables, female legislators did not experience the same incumbency advantage as men, their gender played a significant positive role in their reelection. In the second instance, using a fixed affects approach, gender no longer played a significant role in determining the incumbency advantage. 

<table border="1" style="font-size: 12px; border-collapse: collapse;">
  <caption style="font-size: 14px; padding-bottom: 10px;">Table 2</caption>
  <thead>
    <tr>
      <th style="padding: 5px;">Variable</th>
      <th style="padding: 5px;">Estimate (LR)</th>
      <th style="padding: 5px;">P Value (LR)</th>
      <th style="padding: 5px;">Estimate (FE)</th>
      <th style="padding: 5px;">P Value (FE)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 5px;">Constant</td>
      <td style="padding: 5px;">-2.22 x 10<sup>-3</sup></td>
      <td style="padding: 5px;">0.13</td>
      <td style="padding: 5px;">N/A</td>
      <td style="padding: 5px;">N/A</td>
    </tr>
    <tr>
      <td style="padding: 5px;">Gender</td>
      <td style="padding: 5px;">5.263 x 10<sup>-3</sup></td>
      <td style="padding: 5px;">0.00342</td>
      <td style="padding: 5px;">0.0053</td>
      <td style="padding: 5px;">0.11538</td>
    </tr>
    <tr>
      <td style="padding: 5px;">Incumbency</td>
      <td style="padding: 5px;">-5.925 x 10<sup>-9</sup></td>
      <td style="padding: 5px;">0.99999</td>
      <td style="padding: 5px;">-4.8 x 10<sup>-6</sup></td>
      <td style="padding: 5px;">0.75132</td>
    </tr>
    <tr>
      <td style="padding: 5px;">Party</td>
      <td style="padding: 5px;">2.629 x 10<sup>-3</sup></td>
      <td style="padding: 5px;">0.03383</td>
      <td style="padding: 5px;">0.0026</td>
      <td style="padding: 5px;">0.86663</td>
    </tr>
    <tr>
      <td style="padding: 5px;">State and Congressional District</td>
      <td style="padding: 5px;">7.081 x 10<sup>-8</sup></td>
      <td style="padding: 5px;">0.87738</td>
      <td style="padding: 5px;">7.12 x 10<sup>-8</sup></td>
      <td style="padding: 5px;">0.19110</td>
    </tr>
  </tbody>
</table>



In Figures 1 and 2, the vote share of the parties by gender are explored. A noticeable similarity in the two graphs is that men make up the majority of the vote share for both parties. Women have higher frequencies of vote share in the Democratic party. These results can be explained by the fact that there are simply more men than women in Congress, so this skews the data in favor of men in looking at the votes share for each party. Ideological differences could also account for the disparities between the two distributions. The Democratic party distribution is more favorable towards women than the Republican distribution is; this can be accounted for by party differences due to more women being a Democrat then not (Newport), as party affiliation is also significant in determining incumbency advantage as displayed in Table 2. 

Table 2 explores measuring the incumbency advantage not by party, but by each observation corresponding to a candidate instead of an election. This allows us to see which variables affect the incumbency advantage. It’s observed that two variables have a significant impact on the incumbency advantage: party and gender in the linear regression (LR) columns. Being a woman is associated with a 5.263 x 10-3 unit increase in incumbency advantage with a significance of a p value less than 0.005. Since this is lower than the standard threshold of 0.05, this means that we can accept the alternative hypothesis that women experience more of an incumbency advantage than men in the LR columns. This could be because if a woman was elected in the 1900s, they would have had strong ability as a politician, so they would have to outperform their male counterparts (Ban). This is further supported by Aniza and Barry in their article; women are more effective in Congress than men. Districts with women as their representative get 9% more federal funding then districts with male representatives. Aniza and Barry relate Congress women working harder to the “Jackie Robinson Effect”, the idea that if a minority wants something, then they have to work harder than the non-minorities to achieve it. Since women have to work harder than men to get elected, the women who are elected are often exceptionally politically ambitious and competent, supporting how being a woman leads to them having a better incumbency advantage since they are stronger politicians. The other variable that met the significance threshold is the party variable. Being a Democrat results in a 2.629 x 10-3 unit increase in incumbency advantage with a significance value of a p value less than 0.05 when looking at the LR results. This increase in incumbency advantage may also be related to gender as women are more likely to be a Democrat (Newport). Since according to the linear regression that women experience a better incumbency advantage, if more women are Democrats than Republicans, this would also translate into Democrats having a better incumbency advantage. Other variables such as incumbency and which district they run from do not have the same significant effect as gender and party in the linear regression columns.

For the advanced analysis portion, since we can observe the same candidate across multiple years, we used year fixed effects to control for variables that differ across years but are constant across units and ran the linear regression again. With these additional control variables, party and gender were no longer significant since their p values didn’t meet the standard threshold of 0.05. This suggests that the unobserved variables that change over time such as the state of the economy, the political climate, and the role of women in politics amongst other periodic trends had a large impact on the incumbency advantage that women had. This can further suggest that perhaps the significance of gender and party in the original model is due to factors that are specific to certain years. 


 <img class="shadow-lg" src="{{site.baseurl}}/assets/images/paper_results.png" alt="Histograms" style="max-width: 100%; height: auto;">

**Conclusion:**  
Overall, our research supported our null hypothesis that female legislators do not experience a greater incumbent advantage compared to male legislators.  We first observed that the majority of vote share for both Republicans and Democrats go towards male candidates rather than female candidates. However this difference is smaller for Democrats. In linear regression, we found statistically significant results that women had more of an incumbency advantage compared to men. We also found that party identification had a statistically significant impact where Democrats had greater incumbency advantage. However, when we used fixed effects year as a control, we did not find gender or any other variables to have statistically significant effects on incumbency advantage. 
While we got mixed results after our various methods of analysis, the fixed effects years would be the most accurate method of analysis as it controls for years. The variable years in this case serves as an umbrella category for various other underlying variables that may be hard to capture quantitatively. The dataset captured data across the timespan of 60 years in which a lot of societal changes in the outlook and representation of women in politics have progressed as well as various advances in women's rights. 

Going further, studying data from more recent years (2000-2022) would provide results that could be better extrapolated to the present day. Moreover, our research scope could be expanded to understand whether the progress in women’s rights influenced the incumbency advantage they held by using women’s participation in the workforce and their involvement in politics as control variables. It would also be beneficial to study the interaction between gender and party to see if women or men experienced more incumbency advantage depending on the party, Republican or Democrat. This way we could also study if the party’s ideological differences on gender roles are evident when it comes to incumbency advantage for women. 
Experimenting with the gender package could also be interesting to observe various levels of proportion of certainties and control for that as well. For example, would female candidate with more ambiguous names (0.50.1) have a greater incumbency advantage than females that have more evidently female names (0.8-0.99). If statistically significant results were found it could give more insights into voter’s perspectives.

**Works Cited:**  
- Anzia, Sarah F., and Christopher R. Berry. “The Jackie (and Jill) Robinson Effect: Why Do Congresswomen Outperform Congressmen?” American Journal of Political Science, vol. 55, no. 3, 2011, pp. 478–93. JSTOR, http://www.jstor.org/stable/23024932.
- Ban, Pamela. "More With Mixed Effects." Poli 100X, 28 Nov. 2023, UC San Diego. Lecture.
- Cameron Blevins and Lincoln Mullen, "Jane, John ... Leslie? A Historical Method for Algorithmic Gender Prediction," Digital Humanities Quarterly (forthcoming 2015).
- Lincoln Mullen (2015). gender: Predict Gender from Names Using Historical Data. R package version 0.5.0.9000. https://github.com/ropensci/gender
- Lazarus, Jeffery, et al. "Time Spent in the House: Gender and the Political Careers of U.S. House Members." Politics & Gender, vol. 19, no. 1, Mar. 2023, pp. 97 - 132, doi.org/10.1017/S1743923X21000428.
- McGrath, Mary. "Are Voters Biased Against Women Candidates?: Institute for Policy Research." Institute for Policy Research - Northwestern University, 24 Jan. 2023, www.ipr.northwestern.edu/news/2023/are-voters-biased-against-women-candidates.html.
- Newport, Frank. "Women More Likely to Be Democrats, Regardless of Age." Gallup.com, 12 June 2009, news.gallup.com/poll/120839/women-likely-democrats-regardless-age.aspx.
- Sanbonmatsu, Kira. "Women’s Underrepresentation in the U.S. Congress." Dædalus, vol. 149, no. 1, 2020, pp. 40-49, www.amacad.org/publication /womens-underrepresentation-us-congress.

