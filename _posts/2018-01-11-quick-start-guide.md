---
layout: post
title: "A Policy Outlook on Mitigating Bias in Algorithm Design"
author: Gurman
categories: [ ]
image: assets/images/bias.jpg
featured: false
hidden: false
---

### Not Accounting for Sensitive Factors Doesn’t Mean Your Algorithm Won’t be Biased

Being colorblind doesn’t mean that color doesn’t exist. Similarly, not including sensitive factors such as race and sex into algorithms doesn’t mean the algorithms won’t carry biases formed on race or sex. Those biases are ingrained into society, hence the data. Most algorithms are literal, their outputs are a function of the patterns they observe. 

Nonetheless, a common technique that developers have applied is straight omission, despite its continuous failure. [Kwok](https://insights.som.yale.edu/insights/can-bias-be-eliminated-from-algorithms) from Yale’s School of Management explains when race is removed from racially biased algorithms, a subtler biased “latent discrimination” is introduced where other factors, such as income or location that are correlated with race, essentially serve as proxies for race. The Harvard Business Review also investigated an employment recruitment scenario and found that proxies could predict gender with [91%](https://hbr.org/2023/03/removing-demographic-data-can-make-ai-discrimination-worse) accuracy in data. 

The omission strategy extends beyond just individual scenarios though. During a recent conference on AI Regulation at California Western School of Law, a French panelist noted that France doesn’t have to deal with the racial bias issue since they simply do not collect race as a factor. This is due to the [GDPR](https://gdpr-info.eu/) which prohibits use of ‘special categories of data’ (Article 9). This includes sensitive factors as well as proxies that may reveal them. It is phrased as follows: 

> Processing of personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person’s sex life or sexual orientation shall be prohibited.

Countries subject to the GDPR, such as France, still have racial biases. They are just [unable to be measured since the data is never collected] (https://www.sciencedirect.com/science/article/pii/S0267364922001133?ref=pdf_download&fr=RR-2&rr=873615fbdabf7ba4).

However, one could argue that perhaps biases don’t need to be “fixed” since our algorithm should reflect real life. When ProPublica criticized the maker of COMPAS, a recidivism algorithm that found [black defendants to be nearly twice as likely to be classified as high risk compared to their white counterparts ](https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm), the algorithm maker and researchers responded that it was [mathematically impossible](https://www.propublica.org/article/bias-in-criminal-risk-scores-is-mathematically-inevitable-researchers-say) to have an algorithm that didn’t result in such racial gaps due to the impact of race on the recidivism. 

This reasoning is problematic since algorithms can amplify and perpetuate biases. For example, predictive policing tends to drive law enforcement to black and brown areas based on past data. However, the past data is biased off of heightened racial tensions and increased law enforcement in such areas increases arrests, skewing future data and increasing the racial disparity among arrestees. 

We need a solution to prevent algorithms from perpetuating cycles of existing biases and simply ignoring sensitive factors only masks the issue. The U.S. lacks a regulatory framework and allows organizations to measure and mitigate their own bias. The White House Office of Science and Technology’s [AI Blueprint](https://www.whitehouse.gov/ostp/ai-bill-of-rights/) outlines thorough recommendations for best practices. However, the lack of enforcement undermines the Blueprint’s effectiveness as evidenced by the harmful impact of biased algorithms being deployed. 

Since introducing sweeping bans such as the GDPR Article 9 will do little to actually mitigate bias. I argue that the policymakers’ role shouldn’t be to tell developers how to minimize bias, but rather do its part as a regulator to strictly hold them accountable through audits. 

Here is a sample auditing framework for which draws heavily from the The National Institute of Standards and Technology’s [(NIST)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf) identification of three primary categories for AI bias: systemic, computational, and human. 

I. Assessment of AI System Objectives
   A. Purpose of System
   B. Assumptions Regarding Fairness and Bias
      1. Definitions of Fairness Model Attempted
      2. Sensitive Factors Accounted For
   C. Organizational Norms (e.g. Implicit Bias Training)
   D. Diversity of Team

II. Data Management and Analysis
   A. Data Collection Oversight
      1. Representation of Groups in Data
      2. Context of Data
   B. Proxy Identification

III. Algorithm Development and Model Training
   A. Transparent Design
      1. Documentation of Development with Justifications (Particularly Relevant for Models Used in High Risk Situations (Courts, Healthcare, etc))
   B. Bias Mitigation Techniques Used

IV. Testing and Evaluation
   A. Independent Validation
   B. Continuous Monitoring
   C. Disclose Bias Audit Findings
   D. Engage Stakeholders


