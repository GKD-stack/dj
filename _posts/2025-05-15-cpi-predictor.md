---
layout: post
title: Nowcasting Inflation Using Google Trends and Machine Learning Methods
author: Gurman Dhaliwal
categories: [Technology]
image: assets/images/cpipred_logo.jpg
featured: true
---

This project leverages Google Trends search data as a proxy for consumer behavior indicators to anticipate changes in the Consumer Price Index (CPI). 

### Data Sources and Preprocessing

**Google Trends**
Search interest data was collected in the United States over a 5-year period for the following keywords:

* *gas prices*
* *rent*
* *food prices*
* *used cars*
* *inflation*

**Bureau of Labor Statistics (BLS)**
Monthly CPI data was obtained from the BLS to serve as the ground truth for inflation.

**Cleaning & Alignment**

* All search trend data was converted to monthly frequency by averaging weekly scores.
* Dates were standardized to "YYYY-MM" format.
* Datasets were merged on the monthly date index.
* Final dataset contained monthly Google Trends scores and corresponding CPI values from May 2020 to April 2025.

### Models and Evaluation

The following supervised learning models were applied to predict monthly CPI:

1. **Linear Regression**
   $\hat{y} = \beta_0 + \beta_1 x_1 + \cdots + \beta_p x_p$

2. **Ridge Regression**
   $\hat{y} = \beta_0 + \sum \beta_j x_j$ with L2 penalty: $\lambda \sum \beta_j^2$

3. **Lasso Regression**
   Similar to Ridge but with L1 penalty: $\lambda \sum |\beta_j|$

4. **Random Forest Regressor**
   Ensemble model that averages predictions from multiple decision trees.

**Train-Test Split:** 80/20
**Metrics Used:**

* Root Mean Squared Error (RMSE)
* Coefficient of Determination (R²)

---

###  Model Results & Visualization


#### **1. Best Models: Predicting CPI with Lagged Features**


This approach uses **one-month-lagged search trend indicators** and **lagged CPI** to predict **current CPI levels** and mimic real-world forecasting logic. 

![643f4937-0e36-4f6c-872c-177689e4ab26](https://github.com/user-attachments/assets/a6545f5a-d11a-4e2f-90c7-62affafe4ec0)

**Performance:**

* Linear Regression: RMSE = 0.72, R² = 0.894
* Random Forest: RMSE = 5.74, R² = -5.660
* Ridge: RMSE = 0.73, R² = 0.894
* Lasso: RMSE = 0.71, R² = 0.899

The low RMSE values indicate the model accuracy and the high R² value indicates a strong fit for all the regression-based methods. The random forest model's performance likely suffered from overfitting. 

This approach also accounts for the real-world lag between consumer search behavior and official CPI release and avoids assuming immediate causality. 

#### **2. Runner-Up: Predicting CPI % Change with Lagged CPI and Current Trends**

This model uses **current search trend indicators and lagged CPI** to predict **current CPI % Change**. The rationale was that transforming CPI into a % change makes the target stationary.
![be2f1977-9475-4656-ba3e-7ae43646490c](https://github.com/user-attachments/assets/41d61576-7326-46f2-8566-15c8b269c864)

**Performance**

* Linear Regression: RMSE = 0.23, R² = -0.480
* Random Forest: RMSE = 0.32, R² = -1.782
* Ridge: RMSE = 0.23, R² = -0.478
* Lasso: RMSE = 0.21, R² = -0.265

While the low RMSE signals strong accuracy, the negative R² illustrates the poor predictive power of the models. This is likely due to the real-world lag between consumer search behavior and actual immediate economic impact. 

### Key Insights

* Google Trends data can act as a leading indicator for CPI when preprocessed properly.
* Simpler regression models can provide a strong baseline but fail to adapt to sudden economic shifts.

It is important to recognize that the models don't account for macroeconomic lags or external shocks. Future work could explore:

* Incorporating additional economic indicators (e.g., unemployment, oil prices)
* Using time series methods like ARIMA or LSTM for sequence modeling
* Feature engineering from text sentiment or regional trends
