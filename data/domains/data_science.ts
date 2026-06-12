import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "data_science",
 icon: "📊",
 hue: "#06b6d4",
 category: "Technology",
 name: "Data Science",
 tagline: "Turn data into decisions, not just dashboards",

 basics: "Data science is the practice of extracting meaning from data through a combination of statistics, computation, and domain knowledge. It spans collecting and cleaning data, finding patterns through exploration and modelling, and communicating findings in ways that actually change decisions.",
 deepBasics: "India generates extraordinary amounts of data. UPI processes over 12 billion transactions per month. Aadhaar-linked systems span 1.3 billion records. MOSPI publishes national economic and survey data. The bottleneck is not data volume. It is the ability to ask the right questions, clean the data before drawing conclusions, and communicate findings without overstating what the numbers show.",
 whyItMatters: [
  "Data literacy is becoming a basic professional skill across sectors, not just a technology specialty.",
  "The difference between a good and bad business decision often comes down to whether someone understood what the data actually showed.",
  "India's digital infrastructure generates data that can inform public health, agriculture, and financial inclusion policy, but only if the analysis is sound.",
  "Correlation versus causation confusion is responsible for an enormous number of expensive mistakes in product, policy, and medicine."
 ],
 realWorldExample: "A fintech startup in Mumbai was seeing high credit card application drop-off on step three of their mobile form. The product team assumed the step was too complex. A data scientist ran exploratory analysis on session logs and found: drop-off was highest between 2pm and 4pm on weekdays, predominantly on 4G connections in certain pin codes, and the step three field was a document upload that frequently timed out on slower connections. The problem was not complexity. It was a latency bug on specific network conditions. Fixing the upload timeout reduced step-three drop-off by 34%. Dashboards said 'step 3 has high drop-off.' Analysis found the actual cause.",

 mentors: [
  { name: "Hadley Wickham", for: "tidy data principles, R for data science, data visualisation grammar", work: "R for Data Science (2017, free online)" },
  { name: "Nate Silver", for: "signal vs noise, probabilistic reasoning, communicating uncertainty", work: "The Signal and the Noise (2012)" },
  { name: "Edward Tufte", for: "data visualisation, chartjunk, data-ink ratio", work: "The Visual Display of Quantitative Information (1983)" },
  { name: "Judea Pearl", for: "causality, do-calculus, why correlation is not causation", work: "The Book of Why (2018)" }
 ],

 diagrams: [
  {
   kind: "flow",
   title: "Data Science Workflow",
   caption: "From raw data to decision. Cleaning and exploration take 70 to 80% of the time. Modelling is often the shortest step.",
   data: { steps: ["Define question", "Collect data", "Clean and validate", "Explore (EDA)", "Model", "Interpret", "Communicate"] }
  },
  {
   kind: "quadrant",
   title: "Bias-Variance Tradeoff",
   caption: "High bias means the model is too simple (underfits). High variance means the model memorises training data (overfits). The goal is the sweet spot.",
   data: {
    xAxis: ["Low complexity", "High complexity"],
    yAxis: ["Low error", "High error"],
    items: [
     { label: "Underfitting (high bias)", x: 0.1, y: 0.8 },
     { label: "Sweet spot", x: 0.5, y: 0.2 },
     { label: "Overfitting (high variance)", x: 0.9, y: 0.7 }
    ]
   }
  }
 ],

 synthesis: [
  { concept: "A/B testing", linksTo: "marketing", note: "The same statistical significance principles from A/B testing apply to marketing experiments and pricing tests." },
  { concept: "Bayes theorem", linksTo: "psychology", note: "Bayesian reasoning is the formal version of updating beliefs with evidence. The same updating errors that Kahneman identifies appear in data interpretation." },
  { concept: "Data storytelling", linksTo: "communication", note: "The best analysis is worthless if it is not communicated in a way that changes decisions. Data storytelling is a communication skill." },
  { concept: "Correlation vs causation", linksTo: "famous_laws", note: "The correlation-causation distinction is the statistical version of the same causal reasoning principles that underlie scientific laws." }
 ],

 subdomains: [
  {
   id: "eda",
   name: "Exploratory Data Analysis",
   intro: "Before any model, look at the data. EDA reveals the shape, outliers, missing values, and patterns that determine everything downstream.",
   capabilities: [
    "Produce a complete EDA summary for any tabular dataset including distributions, nulls, and outliers.",
    "Choose the right visualisation for the data type: histograms for distributions, scatter plots for relationships, bar charts for categories.",
    "Identify data quality problems before they corrupt a model."
   ]
  },
  {
   id: "statistics",
   name: "Statistical Foundations",
   intro: "Statistics is the language of data. Without it, you are pattern-matching on noise and calling it insight.",
   capabilities: [
    "Calculate mean, median, standard deviation, and explain when each is appropriate.",
    "Distinguish between correlation and causation and explain why the distinction matters.",
    "Interpret a p-value correctly and explain what statistical significance does and does not mean."
   ]
  },
  {
   id: "ml_basics",
   name: "Machine Learning Basics",
   intro: "Machine learning is a set of tools for finding patterns in data too complex for manual analysis. Understanding the basics prevents misuse.",
   capabilities: [
    "Distinguish between regression, classification, and clustering and choose the appropriate one.",
    "Explain overfitting and underfitting and name one technique to address each.",
    "Explain what feature engineering is and why it often matters more than model choice."
   ]
  },
  {
   id: "communication",
   name: "Data Communication",
   intro: "The final and most often neglected step. Analysis that does not change decisions is a hobby.",
   capabilities: [
    "Build a chart that tells one clear story without decoration that obscures it.",
    "Write a one-paragraph executive summary of an analysis that makes the decision recommendation clear.",
    "Distinguish between uncertainty that should be communicated and detail that should be omitted."
   ]
  }
 ],

 concepts: [
  {
   t: "Exploratory Data Analysis",
   subdomain: "eda",
   fullForm: "Exploratory Data Analysis",
   definition: "The practice of examining a dataset through visual and statistical summaries before modelling, to understand its structure, check quality, and find patterns.",
   short: "Look at the data before you do anything with it. EDA saves hours of analysis on wrong assumptions.",
   deep: "John Tukey coined the term in Exploratory Data Analysis (1977). The practice involves: checking the shape of distributions (histograms, box plots), understanding central tendency and spread (mean, median, standard deviation), identifying missing values and their pattern, spotting outliers that may represent errors or genuinely interesting cases, checking relationships between variables (scatter plots, correlation matrices), and understanding the data-generating process. In Indian data contexts, EDA frequently reveals that public datasets have systematic missingness by geography (rural data is underrepresented), that self-reported income data clusters on round numbers, and that dates and categories are often inconsistently formatted across sources.",
   status: "settled",
   reflect: "Think of the last dataset you worked with. How much time did you spend looking at it before building anything? What did you find that surprised you?",
   generic: "Imagine you are handed a box of mixed-up puzzle pieces. Before trying to assemble the puzzle, you would spread the pieces out, look at their shapes and colours, group similar ones, check if any are from a different puzzle, and count whether any are missing. EDA is that spread-out-and-look step for data.",
   expert: "Tukey (1977) established EDA as a distinct and foundational phase of statistical analysis, in contrast to confirmatory data analysis. The key tools he introduced or popularised include box plots, stem-and-leaf plots, and the five-number summary. Modern EDA frameworks in Python (pandas-profiling, ydata-profiling) and R (DataExplorer, skimr) automate common EDA steps. The settled status reflects that EDA as a discipline is uncontested. The specific tools evolve. The principle that you should always examine data before modelling it has no serious opponents.",
   conceptQuiz: [
    {
     q: "The primary goal of exploratory data analysis before building a model is…",
     options: [
      { text: "To understand the structure, quality, and patterns of the data before committing to any modelling approach.", correct: true },
      { text: "To confirm the hypothesis the analyst had before looking at the data.", misconception: "Confirmatory analysis tests hypotheses. EDA is deliberately hypothesis-free at the start." },
      { text: "To find the best algorithm to apply to the data.", misconception: "Algorithm selection comes after EDA, informed by what EDA reveals about the data's structure." },
      { text: "To clean the data by removing all outliers.", misconception: "Outlier removal is a potential downstream decision. EDA is about understanding, including understanding why outliers exist." }
     ],
     why: "EDA is understanding before deciding. Every modelling choice should be informed by what EDA reveals."
    },
    {
     q: "When EDA reveals that rural data is systematically missing from an Indian national dataset, the correct response is…",
     options: [
      { text: "Document the missingness and account for it when interpreting any conclusions drawn from the data.", correct: true },
      { text: "Remove rural observations to make the dataset consistent.", misconception: "Removing systematically missing groups produces analysis that is biased toward the represented group." },
      { text: "Fill in missing rural values with the national average.", misconception: "Imputing with the national average assumes the missing values are similar to the average, which is likely false if they are missing systematically." },
      { text: "Proceed with the analysis as long as the overall sample size is large.", misconception: "Sample size does not compensate for systematic missingness. A large biased sample is still biased." }
     ],
     why: "Systematic missingness is a bias problem, not a missing data problem. It must be acknowledged, not papered over."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "EDA a public dataset", d: "Download any freely available Indian dataset (MOSPI, data.gov.in, RBI Handbook). Produce five observations about its structure: shape, key distributions, missing values, and one surprising finding.", xp: 20 },
    { level: "easy", t: "Find the outliers", d: "On a dataset of your choice, identify all outliers in numerical columns. For each, determine whether it is a data error or a genuine observation. Document your reasoning.", xp: 25 },
    { level: "advanced", t: "Full EDA report", d: "Produce a complete EDA report for any tabular dataset with at least 1,000 rows and 10 columns. Include distributions, correlations, missingness analysis, and three actionable insights.", xp: 50 }
   ]
  },
  {
   t: "Correlation vs Causation",
   subdomain: "statistics",
   definition: "The distinction between two variables moving together (correlation) and one variable causing changes in another (causation). Correlation does not imply causation.",
   short: "Two things moving together does not mean one causes the other. Most data analysis mistakes happen here.",
   deep: "The classic examples: ice cream sales and drowning deaths are correlated (both rise in summer). Nicholas Cage film releases correlate with pool drownings. These are spurious correlations produced by a confounding variable (summer heat, chance). In business analysis, the distinction matters enormously. E-commerce sites that look at users who visit the homepage three times before purchasing might conclude that more homepage visits cause more purchases and design to drive repeat homepage visits. The actual causal direction is probably the reverse: high-intent users explore more. Understanding causation requires experimental design (randomisation) or careful quasi-experimental methods (instrumental variables, difference-in-differences, regression discontinuity). For Indian policy data, the correlation-causation confusion has led to well-meaning but ineffective interventions in health and education because analysis was not distinguished from experiment.",
   status: "settled",
   reflect: "Think of one business metric you track. Are you confident that the things you believe drive it are causes or just correlates? How would you test that?",
   generic: "In a city, both ice cream shops and sunscreen sales rise in summer. If you try to sell more ice cream by pushing sunscreen, you will be disappointed. They are both effects of a third thing (hot weather), not causes of each other. Correlation is two things moving together. Causation is one thing making the other happen.",
   expert: "Judea Pearl's causal hierarchy (association, intervention, counterfactual) formalises why correlation and causation are fundamentally different types of knowledge (Pearl and Mackenzie, 2018). The randomised controlled trial is the gold standard for establishing causation because randomisation eliminates confounding by design. Where experiments are impossible, causal inference methods (IV, DiD, RDD, propensity score matching) attempt to approximate experimental conditions from observational data. The fundamental identification problem (Rubin, 1974) establishes that causation is never directly observed and must always be inferred. The settled status reflects the epistemological consensus, not the practical difficulty.",
   conceptQuiz: [
    {
     q: "A company finds that users who use its mobile app more than five times per week have a 3x higher lifetime value. The correct interpretation is…",
     options: [
      { text: "High-value users may naturally use the app more, or app usage may drive value, but the data alone cannot distinguish the direction.", correct: true },
      { text: "The company should push all users to use the app more than five times per week to increase their value.", misconception: "This assumes the observed correlation is causal in the direction that usage drives value. An experiment is required to establish this." },
      { text: "There is no relationship because correlation is always spurious.", misconception: "Correlations are not always spurious. The issue is whether this one is causal and in which direction." },
      { text: "The finding is statistically invalid without a large enough sample.", misconception: "Sample size is a separate issue. The correlation-causation problem exists regardless of sample size." }
     ],
     why: "Observational correlation has multiple possible causal explanations. Only an experiment (or a causal inference method) can distinguish them."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Find three spurious correlations", d: "Search for three examples of high correlation between unrelated variables. Explain the confounding variable or the chance mechanism that produces each.", xp: 15 },
    { level: "easy", t: "Audit a business metric claim", d: "Find a metric your organisation uses to make decisions. Write down the assumed causal chain. Identify one alternative causal explanation for the same correlation.", xp: 20 },
    { level: "advanced", t: "Design a causal test", d: "For one correlation you believe is causal in your domain, design an A/B test or natural experiment that would confirm or refute the causal direction. Identify what you would randomise and what you would measure.", xp: 45 }
   ]
  },
  {
   t: "Regression Basics",
   subdomain: "ml_basics",
   definition: "A statistical method that models the relationship between one outcome variable and one or more predictor variables, producing predictions and measuring the size and direction of relationships.",
   short: "Regression fits a line (or curve) to data to predict one thing from others. It is the workhorse of data analysis.",
   deep: "Linear regression estimates the expected value of a continuous outcome (sales, weight, price) as a linear function of predictors. The output is a set of coefficients: each coefficient tells you the expected change in the outcome per unit change in the predictor, holding all others constant. Logistic regression extends this to binary outcomes (churn or not, purchased or not). Interpreting regression requires understanding: what the R-squared means (proportion of variance explained, not model quality), what the p-values on coefficients mean (evidence against the null of zero effect, not proof of effect size), and what confounding means for causal interpretation. In India's fintech and lending markets, regression models underlie most credit scoring systems. Understanding their assumptions and failure modes matters for both builders and regulators.",
   status: "settled",
   reflect: "Have you ever used a regression output without fully understanding what the coefficients mean? What was the interpretation you made and was it valid?",
   conceptQuiz: [
    {
     q: "In a linear regression, the coefficient on a predictor variable represents…",
     options: [
      { text: "The expected change in the outcome per one-unit increase in the predictor, holding all other predictors constant.", correct: true },
      { text: "The correlation between the predictor and the outcome.", misconception: "Correlation and regression coefficients are related but not the same. The coefficient also depends on the scale of the variable." },
      { text: "The probability that the predictor causes the outcome.", misconception: "Regression coefficients measure association, not causation. The probability framing requires a causal model." },
      { text: "The proportion of variance the predictor explains.", misconception: "That is R-squared, not the coefficient. Each coefficient is a marginal effect, not a variance explanation." }
     ],
     why: "The partial interpretation (holding others constant) is what makes regression useful for separating the effect of one variable from others."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Interpret a regression table", d: "Find any published regression table (academic paper, blog post). Write a plain-English interpretation of three coefficients, including their direction, size, and significance.", xp: 15 },
    { level: "easy", t: "Run a simple regression", d: "Download a dataset with a clear numeric outcome (e.g., housing prices, salary). Run a simple linear regression in Python or R. Interpret the output without copying the automated summary.", xp: 25 },
    { level: "advanced", t: "Build a credit scoring proxy", d: "Using any publicly available lending or credit dataset, build a logistic regression model to predict a binary outcome. Document the feature selection process, evaluate the model, and interpret the top three coefficients.", xp: 50 }
   ]
  },
  {
   t: "Classification vs Clustering",
   subdomain: "ml_basics",
   definition: "Classification assigns new observations to predefined categories using labelled training data (supervised). Clustering groups observations by similarity without predefined categories (unsupervised).",
   short: "Classification knows the categories and labels new data. Clustering finds the categories from the data itself.",
   deep: "Classification (supervised learning): you have a dataset with known labels (fraudulent transaction or legitimate, churned customer or retained). You train a model to learn the mapping from features to labels and then predict labels on new unlabelled data. Logistic regression, decision trees, random forests, and gradient boosting are common classification algorithms. Clustering (unsupervised learning): you have data but no predefined categories. You want to find natural groupings. K-means clustering groups observations into K groups based on similarity. Use cases include customer segmentation without predefined segments, document grouping, and anomaly detection. The choice between them depends on whether you have labels. If you have no labels and no predefined categories, classification is the wrong tool.",
   status: "settled",
   reflect: "For the last prediction problem you worked on or heard about, was it a classification problem or a regression problem? Did the team treat it the right way?",
   conceptQuiz: [
    {
     q: "A bank wants to group its customer base into behavioural segments without pre-specifying what those segments are. The appropriate method is…",
     options: [
      { text: "Clustering, because there are no predefined labels and the goal is to discover natural groupings.", correct: true },
      { text: "Classification, because the bank already knows customers fall into different types.", misconception: "Knowing that types exist is not the same as having labelled data. Classification requires pre-labelled examples." },
      { text: "Regression, because customer value is a continuous outcome.", misconception: "Regression predicts continuous outcomes. Segmentation is a grouping problem, not a prediction problem." },
      { text: "A/B testing, because the bank wants to understand what drives segment behaviour.", misconception: "A/B testing measures causal effects of interventions. Segmentation is a descriptive, not causal, task." }
     ],
     why: "Clustering is the unsupervised method for discovering natural groupings. No predefined labels means classification is not applicable."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Match the method to the problem", d: "List five real business questions. For each, identify whether it is a classification, regression, or clustering problem and why.", xp: 15 },
    { level: "easy", t: "Run a k-means clustering", d: "Take any dataset with two or more numerical features. Run k-means clustering for k=3, k=4, and k=5. Visualise the clusters and write a one-paragraph description of what each cluster represents.", xp: 25 },
    { level: "advanced", t: "Customer segmentation project", d: "Using UPI transaction data or any available Indian financial dataset, build a clustering model to identify distinct user segments. Name the segments, profile them, and recommend one product action per segment.", xp: 50 }
   ]
  },
  {
   t: "Feature Engineering",
   subdomain: "ml_basics",
   definition: "The process of using domain knowledge to create, transform, or select input variables that make a machine learning model more accurate or interpretable.",
   short: "Garbage in, garbage out. The features you feed a model matter more than the algorithm you choose.",
   deep: "Feature engineering is often the highest-leverage activity in applied machine learning. A simple model with good features consistently outperforms a complex model with raw, uninformative features. Examples of feature engineering: converting a raw timestamp to hour-of-day, day-of-week, and is-weekend flags (for e-commerce models); computing a customer's 30-day spend velocity from transaction history; taking the log of a heavily skewed variable to reduce the influence of outliers. In Indian data contexts, geographic features (state, tier classification, pin code) often carry signal that raw data does not. Aadhaar-linked demographic features, when legally permissible under DPDPA 2023, add predictive signal in lending models. Feature engineering is where domain expertise meets data, and it is why subject matter experts are as valuable as data scientists.",
   status: "settled",
   reflect: "For a model you know, what are the most important features? Were they in the raw data or were they derived from it? Who decided to create them?",
   conceptQuiz: [
    {
     q: "Why does feature engineering often matter more than algorithm choice?",
     options: [
      { text: "Algorithms can only find patterns in the information provided to them. Informative features determine how much signal is available to find.", correct: true },
      { text: "Feature engineering is easier than selecting the right algorithm.", misconception: "Feature engineering requires domain expertise and is often quite difficult. Ease is not the reason it matters more." },
      { text: "Modern algorithms like deep learning make feature engineering unnecessary.", misconception: "Deep learning reduces some manual feature engineering in perceptual tasks (images, text) but domain-specific features remain valuable in structured data problems." },
      { text: "Feature engineering improves accuracy on the training data.", misconception: "Training accuracy is not the goal. Feature engineering improves generalisation on new data by providing more informative signal." }
     ],
     why: "A model cannot discover patterns the data does not contain. Good features make implicit information explicit."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Derive three features", d: "Take any dataset with timestamps and a numerical variable. Derive three new features from the timestamp (e.g., hour, weekday, time since last event). Check whether they correlate with the outcome.", xp: 15 },
    { level: "easy", t: "Log-transform a skewed variable", d: "Find a numerical variable with a heavily right-skewed distribution. Apply a log transformation. Visualise before and after. Explain why the transformation helps a linear model.", xp: 20 },
    { level: "advanced", t: "Feature importance audit", d: "Build a model on a dataset of your choice. Run a feature importance analysis. Identify the top 5 features. For each, explain why it might be predictive based on domain knowledge.", xp: 45 }
   ]
  },
  {
   t: "Data Cleaning",
   subdomain: "eda",
   definition: "The process of identifying and correcting errors, inconsistencies, duplicates, and missing values in a dataset before analysis.",
   short: "Most data is dirty. Cleaning it is 70 to 80 percent of the real work in data science.",
   deep: "Data cleaning tasks include: handling missing values (determine whether the missingness is random or systematic before deciding to impute, drop, or flag), removing or investigating duplicates, standardising inconsistent categories (Mumbai vs Bombay, M vs Male vs male), fixing format errors (dates, phone numbers, postcodes), and detecting and handling outliers. In Indian government and survey datasets, common problems include: state names spelled differently across tables, districts renamed but old names persisting, pin codes that do not exist, and income data that clusters on round numbers in a way that suggests rounding by data collectors. Data cleaning is not just a technical task. It requires understanding why data is dirty to determine the right fix.",
   status: "settled",
   reflect: "In a dataset you have worked with, what was the most surprising data quality problem you found? How did it affect the analysis?",
   conceptQuiz: [
    {
     q: "When a dataset has missing values, the first question to ask is…",
     options: [
      { text: "Whether the missingness is random or systematic, because the answer determines what to do.", correct: true },
      { text: "What imputation method to use.", misconception: "Imputation method is a downstream decision. Understanding why data is missing is the prior question." },
      { text: "Whether to drop all rows with any missing value.", misconception: "Dropping rows with missingness is one option but it can introduce bias if the missingness is systematic." },
      { text: "Whether the sample size is still large enough after removing nulls.", misconception: "Sample size is a consequence of the decision, not the first question. Why is the data missing?" }
     ],
     why: "Random missingness and systematic missingness require different responses. Systematic missingness is a bias problem."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Profile a dataset's quality", d: "Take any dataset and produce a data quality report: count nulls per column, identify duplicates, find inconsistent categorical values, and flag obvious outliers.", xp: 15 },
    { level: "easy", t: "Standardise a messy column", d: "Find a dataset with a messy categorical column (city names, state names, income brackets). Write code to standardise it to a clean set of values. Document the decisions you made.", xp: 25 },
    { level: "advanced", t: "Missing data analysis", d: "Analyse the missing data pattern in any dataset. Distinguish between MCAR (missing completely at random), MAR (missing at random), and MNAR (missing not at random). Choose an imputation strategy and justify it.", xp: 45 }
   ]
  },
  {
   t: "A/B Testing and Statistical Significance",
   subdomain: "statistics",
   definition: "A/B testing is a controlled experiment that randomly assigns users to two conditions and measures whether an observed difference in outcomes is larger than what chance alone would produce.",
   short: "Random assignment plus a big enough sample size is the closest thing to a controlled experiment the real world offers.",
   deep: "An A/B test assigns users randomly to condition A (control) or condition B (treatment) and measures an outcome (click rate, conversion, revenue per user). The statistical test asks: if there were truly no difference, how often would we see a difference this large or larger just by chance? The p-value is this probability. p less than 0.05 means the result would occur by chance less than 5% of the time under the null hypothesis of no effect. It does not mean there is a 95% chance the treatment works. Common mistakes: running the test until significance is reached (p-hacking), testing too many variants simultaneously without correction, testing on too small a sample to detect meaningful effects (underpowered tests), and stopping early when the test looks positive. In Indian fintech and e-commerce, A/B testing is now standard practice. The discipline of running tests correctly, with pre-registered hypotheses, power calculations, and fixed stopping rules, is what separates rigorous teams from those producing spurious results.",
   status: "settled",
   reflect: "In the last A/B test you ran or heard about, was a power calculation done in advance? Was the test stopped before the predetermined sample size was reached?",
   generic: "Imagine you want to know if a new fertiliser makes plants grow taller. You plant 100 seeds, 50 get the new fertiliser (B) and 50 get the old one (A). You randomly assign which plot each seed goes to. At harvest, if the B plots are on average taller, you check: could this difference have happened just by random soil variation? Statistical significance is the answer to that question.",
   expert: "The frequentist framework for hypothesis testing derives from Fisher (p-values, 1925) and Neyman-Pearson (hypothesis testing, 1933). The Bayesian alternative uses prior distributions and produces posterior probabilities that are more interpretable but require subjective priors. In practice, industry A/B testing typically uses frequentist tests (t-tests, chi-square tests) with adjusted significance thresholds for multiple comparisons (Bonferroni, Benjamini-Hochberg). Kohavi, Tang, and Xu (2020) document common failure modes in large-scale online experiments at Microsoft and Google. The settled status of A/B testing as a method coexists with substantial ongoing debate about correct interpretation, stopping rules, and Bayesian alternatives.",
   conceptQuiz: [
    {
     q: "A p-value of 0.03 in an A/B test means…",
     options: [
      { text: "If there were truly no effect, a result this extreme would occur only 3% of the time by chance.", correct: true },
      { text: "There is a 97% probability that the treatment is truly better than the control.", misconception: "This is the most common p-value misinterpretation. The p-value is not the probability the treatment is effective." },
      { text: "The treatment effect is 3% larger than expected.", misconception: "The p-value says nothing about the size of the effect. Effect size and significance are separate." },
      { text: "The test has a 3% false positive rate.", misconception: "The false positive rate is alpha, which is set before the test. The p-value is the probability of the observed data under the null hypothesis." }
     ],
     why: "The p-value is the probability of the data (or more extreme data) under the null hypothesis. It is not the probability the treatment works."
    },
    {
     q: "Stopping an A/B test the moment it reaches p less than 0.05 (without a pre-planned sample size) inflates the false positive rate because…",
     options: [
      { text: "Multiple repeated checking of a running test increases the probability of seeing a significant result by chance.", correct: true },
      { text: "Small sample sizes always produce unreliable results.", misconception: "Sample size is related but the specific problem with early stopping is the repeated testing problem, not sample size alone." },
      { text: "The control and treatment groups are not properly randomised if testing stops early.", misconception: "Randomisation is fixed at assignment and is not affected by when the test stops." },
      { text: "Statistical significance requires a minimum of two weeks of data.", misconception: "Time duration is not the issue. The issue is repeated testing on the same accumulating data." }
     ],
     why: "Peeking at p-values repeatedly and stopping when p crosses 0.05 is p-hacking. The 5% threshold applies to a single test, not repeated tests."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Calculate a required sample size", d: "For an A/B test on a conversion rate of 5%, seeking to detect a 1 percentage point improvement with 80% power and 5% significance, calculate the required sample size per arm. Use an online calculator and explain the inputs.", xp: 20 },
    { level: "easy", t: "Interpret an A/B test result", d: "Find a published A/B test result from a tech blog or case study. Write a correct interpretation of the p-value, confidence interval, and effect size. Identify any misinterpretations in the original write-up.", xp: 25 },
    { level: "advanced", t: "Design a complete A/B test", d: "Design a full A/B test for a product change: hypothesis, metric, minimum detectable effect, power calculation, stopping rule, and analysis plan. Specify how you would handle the results in each scenario.", xp: 50 }
   ]
  },
  {
   t: "Bayes Theorem",
   subdomain: "statistics",
   definition: "A mathematical rule for updating the probability of a hypothesis given new evidence, combining a prior belief with the likelihood of the observed data.",
   short: "New evidence should update your beliefs in proportion to how much it tells you. Bayes theorem is the formula for doing that correctly.",
   deep: "Bayes theorem: P(H|E) = P(E|H) * P(H) / P(E). In words: the probability of hypothesis H given evidence E equals the probability of seeing E if H is true, multiplied by the prior probability of H, divided by the overall probability of seeing E. The classic application: a medical test with 99% accuracy is used on a disease affecting 1 in 10,000 people. Even a positive result means the probability of disease is only about 1% (most positives are false positives because the disease is rare). The insight: base rates matter enormously for interpreting evidence. In Indian public health, base rate neglect in diagnostic interpretation has real consequences. Bayes theorem is also the foundation of Bayesian statistics, machine learning classifiers like Naive Bayes, and Bayesian A/B testing.",
   status: "settled",
   reflect: "Think of a decision where you received new information and updated your beliefs. Did you update by the right amount? Did you account for how common the thing you were testing for actually is?",
   generic: "Imagine you test positive for a very rare disease. The test is 99% accurate. Should you be terrified? Not necessarily. If only 1 in 100,000 people have the disease, even a 99% accurate test produces many false positives for every true positive. Bayes theorem is the calculation that tells you how worried to actually be.",
   expert: "Bayes' original paper was posthumously published in 1763 and extended by Laplace. The theorem itself is a mathematical tautology: it follows directly from the definition of conditional probability. Its status as 'settled' refers to the mathematical result, which is incontestable. The Bayesian-frequentist debate concerns whether the Bayesian interpretation of probability (as degrees of belief) is the right epistemological framework. This debate is very much not settled. In applied machine learning, Bayesian classifiers and Bayesian optimisation are widely used practical tools with strong theoretical foundations.",
   conceptQuiz: [
    {
     q: "A diagnostic test is 95% accurate and the condition it tests for affects 1 in 1,000 people. A patient tests positive. The probability they actually have the condition is approximately…",
     options: [
      { text: "About 2 to 3%, because most positives are false positives given how rare the condition is.", correct: true },
      { text: "95%, matching the test's accuracy.", misconception: "This ignores the base rate. The 95% accuracy applies to both true positives and true negatives, but the rarity of the disease means false positives dominate." },
      { text: "1 in 1,000, the same as the base rate in the population.", misconception: "A positive test should update the probability upward from the base rate. The question is by how much." },
      { text: "99.9%, because the test is highly accurate and a positive is strong evidence.", misconception: "Intuition dramatically overestimates positive predictive value for rare conditions. The calculation requires base rate, sensitivity, and specificity." }
     ],
     why: "When a condition is rare, even an accurate test produces many false positives. Base rate neglect is one of the most common errors in diagnostic reasoning."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Calculate a posterior probability", d: "Using Bayes theorem, calculate the probability that a positive test result is a true positive for a disease with 1 in 1,000 prevalence and a test with 90% sensitivity and 90% specificity.", xp: 20 },
    { level: "easy", t: "Find a base rate neglect example", d: "Find a real example of base rate neglect in medicine, law, or business. Explain the correct Bayesian calculation and what the decision-maker got wrong.", xp: 25 },
    { level: "advanced", t: "Build a Naive Bayes classifier", d: "Build a Naive Bayes text classifier for any classification task (spam detection, sentiment, topic classification). Explain how the algorithm applies Bayes theorem to each feature.", xp: 45 }
   ]
  },
  {
   t: "Overfitting and Underfitting",
   subdomain: "ml_basics",
   definition: "Overfitting is when a model learns the training data too specifically, including noise, and generalises poorly. Underfitting is when a model is too simple to capture the real patterns in the data.",
   short: "Overfitting memorises the training data. Underfitting ignores it. Both fail on new data.",
   deep: "A model is trained on data and then deployed to make predictions on new, unseen data. Overfitting: the model fits the training data so closely that it has memorised the noise and specific examples rather than the underlying pattern. Training accuracy is high, test accuracy is low. Underfitting: the model is too simple (e.g., a straight line fitted to a clearly curved relationship). Both training and test accuracy are poor. The bias-variance tradeoff is the formal framework: high bias means underfitting (the model is wrong about the structure), high variance means overfitting (the model is too sensitive to the specific training data). Solutions: overfitting: regularisation, more training data, simpler model, dropout (for neural networks). Underfitting: more complex model, better features, remove regularisation. The standard workflow to detect both: train-validation-test split, learning curves.",
   status: "settled",
   reflect: "Have you ever built a model that performed well in testing but poorly in production? What might have caused that discrepancy?",
   conceptQuiz: [
    {
     q: "The clearest sign that a model is overfitting is…",
     options: [
      { text: "Training accuracy is much higher than validation or test accuracy.", correct: true },
      { text: "The model takes a long time to train.", misconception: "Training time reflects computational complexity, not overfitting." },
      { text: "The model has too many features.", misconception: "Many features increase the risk of overfitting but are not sufficient evidence of it. The train-validation gap is the diagnostic." },
      { text: "Validation accuracy is below 50%.", misconception: "Low validation accuracy could indicate either overfitting or underfitting. The relative gap between training and validation accuracy is the diagnostic." }
     ],
     why: "The gap between training and validation performance is the diagnostic for overfitting. High training accuracy with poor generalisation is the signature."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Draw the bias-variance curve", d: "Draw (by hand or in code) the bias-variance tradeoff curve showing training error, validation error, and total error against model complexity. Label the underfitting, sweet spot, and overfitting regions.", xp: 15 },
    { level: "easy", t: "Apply regularisation", d: "Build an overfit model on any dataset. Apply L1 or L2 regularisation. Compare training and test accuracy before and after. Explain in plain language what the regularisation is doing.", xp: 25 },
    { level: "advanced", t: "Learning curve analysis", d: "Build a learning curve for a model: plot training and validation accuracy against training set size. Diagnose whether the model suffers from high bias, high variance, or both. Recommend a fix.", xp: 45 }
   ]
  },
  {
   t: "Data Storytelling",
   subdomain: "communication",
   definition: "The practice of communicating analytical findings through a combination of accurate data, relevant visualisation, and narrative that connects insights to decisions.",
   short: "Data without narrative is noise. Narrative without data is fiction. Good data storytelling is both.",
   deep: "The gap between a technically correct analysis and a decision that gets made is usually a storytelling problem. Cole Nussbaumer Knaflic (Storytelling with Data, 2015) identifies the key elements: context (who is your audience, what decision are they making, what do they already know?), choosing the right chart type for the data structure and message, eliminating visual clutter that competes with the main message, and directing attention explicitly with annotations, callouts, and colour. The narrative arc for a data finding: here is the situation, here is what the data reveals, here is what it means for your decision, here is what I recommend. Edward Tufte's data-ink ratio principle: maximise the ink devoted to data, minimise the ink devoted to decoration. In Indian business contexts, executives often receive analysis but not the implications. Making the implication explicit is a data storytelling skill.",
   status: "framework",
   reflect: "Think of the last analysis you communicated. Did the audience know what decision to make differently after seeing it? If not, what was missing?",
   conceptQuiz: [
    {
     q: "The most important question to answer before designing a data presentation is…",
     options: [
      { text: "What decision does my audience need to make, and what do they need to see to make it?", correct: true },
      { text: "Which visualisation type looks most professional.", misconception: "Chart type should follow the data structure and the message, not aesthetic preference or professionalism signals." },
      { text: "How to show as much data as possible to demonstrate thoroughness.", misconception: "More data in a presentation typically obscures the key message rather than demonstrating rigour." },
      { text: "What statistical method was used to produce the result.", misconception: "Method transparency matters for technical audiences but is secondary to the decision-oriented framing for most business audiences." }
     ],
     why: "Data storytelling starts with the audience and their decision. Everything else is in service of that."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Reformat a bad chart", d: "Find a cluttered or misleading chart (news article, annual report, business presentation). Redraw it following Tufte's data-ink ratio principle and Knaflic's clutter removal guidelines.", xp: 15 },
    { level: "easy", t: "Write the implication", d: "Take any analysis you have done or found. Write one paragraph that moves from finding to implication to recommendation. Show it to someone outside the analysis and ask if they know what to do.", xp: 20 },
    { level: "advanced", t: "Build an executive summary deck", d: "Turn a complex analysis into a three-slide executive summary: situation, finding, recommendation. Each slide has one chart and three lines of text maximum. Test it with someone who was not involved in the analysis.", xp: 45 }
   ]
  }
 ],

 counterView: "Data science has a hype problem. The field has been marketed as objective and algorithmic, but data science is deeply shaped by the choices humans make about what to measure, how to define outcomes, and whose data is collected. Predictive models trained on historical data encode historical inequalities. Credit models trained on repayment history reflect who had access to credit, not who is creditworthy. In India, models built on urban digital footprints systematically underserve rural populations. Algorithmic decision-making is not neutral. It is a way of automating human judgements at scale. The DPDPA 2023 and evolving AI governance frameworks are beginning to address this, but technical practitioners who believe their work is objective are often the most dangerous actors in the space.",

 capabilities: [
  "Produce a complete exploratory data analysis for any tabular dataset.",
  "Explain the difference between correlation and causation with a specific example and test design.",
  "Design an A/B test with power calculation, stopping rule, and correct significance interpretation.",
  "Apply Bayes theorem to a diagnostic or classification problem and avoid base rate neglect.",
  "Distinguish between overfitting and underfitting and name one remedy for each.",
  "Build a data story that connects an analytical finding to a specific business decision.",
  "Identify systematic missingness in a dataset and explain its implications for analysis."
 ],

 cheatsheet: [
  "EDA first: always look at the data before modelling. 70 to 80% of time is cleaning and exploring.",
  "Correlation is not causation: two things moving together does not mean one causes the other.",
  "p-value: probability of the data under the null, not probability the treatment works.",
  "Overfitting: training accuracy much higher than test accuracy. Fix with regularisation or more data.",
  "Underfitting: both training and test accuracy are poor. Fix with more complexity or better features.",
  "Bayes: base rates matter. Rare conditions produce mostly false positives even with accurate tests.",
  "Features beat algorithms: a simple model with great features beats a complex model with bad ones.",
  "Data storytelling: audience, decision, one chart, three lines, implication explicit."
 ],

 roadmap: [
  { rank: "Novice",       focus: "Data literacy",             do: "Learn to read and interpret basic statistics. Understand mean, median, standard deviation, and correlation. Learn to make a basic chart.",                         milestone: "Explain a dataset's key statistics in plain language.",                  time: "2 weeks" },
  { rank: "Apprentice",   focus: "EDA and cleaning",          do: "Learn pandas (Python) or dplyr (R). Run EDA on any public dataset. Handle missing values and outliers.",                                                          milestone: "Produce a complete EDA report with actionable findings.",                time: "1 month" },
  { rank: "Practitioner", focus: "Statistical foundations",   do: "Learn hypothesis testing, p-values, confidence intervals, and A/B testing. Apply Bayes theorem to one real problem.",                                             milestone: "Design and interpret one A/B test end-to-end.",                         time: "2 months" },
  { rank: "Specialist",   focus: "Supervised learning",       do: "Learn regression and classification. Understand the bias-variance tradeoff. Apply feature engineering. Evaluate models on test sets.",                             milestone: "Build and evaluate a classification model on a real dataset.",           time: "3 months" },
  { rank: "Expert",       focus: "Causal inference",          do: "Learn the difference between observational analysis and causal inference. Study RCTs, DiD, and regression discontinuity.",                                        milestone: "Design a causal study (experiment or quasi-experiment) for a real question.", time: "6 months" },
  { rank: "Master",       focus: "Full data science project", do: "End-to-end: define question, collect and clean data, EDA, model, validate, communicate. Do this for a real business question.",                                  milestone: "A decision changes based on your analysis.",                            time: "1 year" },
  { rank: "Grandmaster",  focus: "Data leadership",           do: "Build a data team's standards: data quality norms, experiment design review, model governance, and bias audits. Work on DPDPA compliance for model use.",         milestone: "A data science function you lead produces analyses that change decisions consistently.", time: "2 years" }
 ],

 resources: {
  free: [
   { name: "R for Data Science (Wickham and Grolemund)", what: "Free online book. The definitive practical guide to data analysis in R.", url: "https://r4ds.had.co.nz", kind: "book", weight: "primary" },
   { name: "Kaggle Learn", what: "Free interactive courses in Python, data analysis, machine learning, and SQL.", url: "https://www.kaggle.com/learn", kind: "course", weight: "popular" },
   { name: "MOSPI Open Data", what: "India's Ministry of Statistics and Programme Implementation. National surveys and economic data.", url: "https://mospi.gov.in", kind: "tool", weight: "secondary" },
   { name: "data.gov.in", what: "Indian government open data portal. Covers agriculture, health, finance, and demographics.", url: "https://data.gov.in", kind: "tool", weight: "popular" }
  ],
  paid: [
   { name: "Storytelling with Data", what: "Cole Nussbaumer Knaflic 2015. The standard reference for data visualisation and communication.", url: "", kind: "book", weight: "primary", price: "approx Rs. 800 on Amazon India", verify: true },
   { name: "The Signal and the Noise", what: "Nate Silver 2012. Probabilistic reasoning, base rates, and why most predictions fail.", url: "", kind: "book", weight: "secondary", price: "approx Rs. 700 on Amazon India", verify: true },
   { name: "The Book of Why", what: "Judea Pearl and Dana Mackenzie 2018. The causal revolution and why correlation is not enough.", url: "", kind: "book", weight: "primary", price: "approx Rs. 800 on Amazon India", verify: true }
  ]
 },

 missions: [
  { t: "EDA a real Indian dataset",        d: "Download a dataset from data.gov.in or MOSPI. Run a complete EDA. Write three non-obvious findings about data quality or patterns.",                                                    xp: 60 },
  { t: "Design an A/B test",              d: "Design a complete A/B test for a product change: hypothesis, metric, power calculation, and stopping rule. Present it in two pages.",                                                   xp: 70 },
  { t: "Build a classification model",    d: "Find a dataset with a binary outcome. Build a logistic regression or decision tree model. Evaluate on a held-out test set. Report accuracy, precision, recall, and F1.",               xp: 80 },
  { t: "Data story for a business question", d: "Take any analysis you have done and reformat it into a three-slide story: situation, finding, recommendation. Test it on someone outside the analysis.", xp: 60 },
  { t: "Bayes calculation in the wild",   d: "Find a real example of probabilistic reasoning in medicine, law, or business. Apply Bayes theorem correctly and compare the result to the reported conclusion.",                        xp: 50 },
  { t: "Catch a correlation-causation error", d: "Find a real article, report, or business claim that confuses correlation with causation. Write a clear explanation of the error and what test would establish causation.",           xp: 60 }
 ],

 quiz: [
  {
   q: "A data scientist finds that users who enable push notifications have 2x higher 30-day retention. The correct conclusion is…",
   options: [
    { text: "There is a correlation between notification enablement and retention, but causation is not established from this data alone.", correct: true },
    { text: "Enabling push notifications causes higher retention, so the team should push all users to enable them.", misconception: "The observed correlation may be driven by selection: highly engaged users are both more likely to enable notifications and more likely to retain." },
    { text: "The finding is irrelevant because 30-day retention is not the right metric.", misconception: "Metric choice is a separate question. The causation concern applies regardless of the metric." },
    { text: "2x is too large a difference to be explained by confounding.", misconception: "Large observed effects can absolutely be explained by confounding. Engagement level is a strong confounder here." }
   ],
   why: "Observational data cannot establish causation. The correlation is consistent with notifications causing retention, but also with engaged users self-selecting into both."
  },
  {
   q: "The primary goal of train-test splitting in machine learning is…",
   options: [
    { text: "To estimate how well the model will perform on unseen data, which it has not been trained on.", correct: true },
    { text: "To use more data for training and improve model accuracy.", misconception: "Splitting reduces training data. The purpose is generalisation measurement, not training data maximisation." },
    { text: "To prevent the model from learning any noise in the data.", misconception: "Regularisation addresses noise. Train-test splitting measures generalisation but does not prevent memorisation during training." },
    { text: "To speed up the training process.", misconception: "Smaller training sets may train faster but speed is not the reason for train-test splitting." }
   ],
   why: "Measuring performance only on training data is misleading. The test set simulates deployment on new, unseen data."
  },
  {
   q: "In data cleaning, when a column has 30% missing values and the missingness appears to be concentrated in rural districts of a national survey, the best approach is…",
   options: [
    { text: "Document the systematic missingness, flag it as a bias source, and account for it in any conclusions that involve rural populations.", correct: true },
    { text: "Drop all rows with missing values in this column.", misconception: "Dropping rows with systematic missingness removes a specific demographic group and makes the analysis biased toward the represented group." },
    { text: "Impute missing values with the national average for this column.", misconception: "Imputing with the national average assumes missing and observed values are similar, which is violated when missingness is systematic by geography." },
    { text: "Proceed with analysis and note the sample size reduction.", misconception: "Noting reduced sample size is insufficient. Systematic missingness is a bias problem, not just a power problem." }
   ],
   why: "Systematic missingness by geography is a bias problem. Any conclusion about rural populations from this data is unreliable, and that must be stated explicitly."
  },
  {
   q: "What does a high data-ink ratio, as recommended by Edward Tufte, mean in practice?",
   options: [
    { text: "The majority of the visual space in a chart is devoted to the data itself, with minimal decoration.", correct: true },
    { text: "The chart uses many data points.", misconception: "Data density is a separate principle from the data-ink ratio. The ratio is about what percentage of the visual space encodes data versus decoration." },
    { text: "The chart should use colour to highlight all data points.", misconception: "Colour is one tool but indiscriminate use of colour can reduce the data-ink ratio by adding visual noise." },
    { text: "The chart should have a detailed legend and title.", misconception: "Legends and titles are part of the non-data ink. Tufte recommends minimising them and using direct labelling where possible." }
   ],
   why: "Tufte's principle: every element of a chart should either encode data or be removed. Decoration competes with the message."
  },
  {
   q: "Naive Bayes classification works by applying Bayes theorem to…",
   options: [
    { text: "Compute the probability of each class given the observed features, assuming features are conditionally independent given the class.", correct: true },
    { text: "Calculate the correlation between features and class labels.", misconception: "Naive Bayes uses conditional probabilities and Bayes theorem, not correlation." },
    { text: "Fit a decision boundary between classes using a linear function.", misconception: "Linear decision boundaries describe logistic regression and linear SVM, not Naive Bayes." },
    { text: "Weight features by their predictive power and sum the weighted scores.", misconception: "Weighted scoring describes linear models. Naive Bayes computes products of conditional probabilities." }
   ],
   why: "Naive Bayes applies Bayes theorem feature by feature, assuming conditional independence. The naive assumption is that features do not interact given the class."
  }
 ],

 flashcards: [
  { front: "What is EDA?", back: "Exploratory Data Analysis. Examining a dataset through visual and statistical summaries before modelling to understand structure, quality, and patterns. Tukey 1977." },
  { front: "What is the difference between correlation and causation?", back: "Correlation: two variables move together. Causation: one variable produces changes in another. Correlation does not imply causation." },
  { front: "What does a p-value of 0.04 mean?", back: "Under the null hypothesis of no effect, results this extreme would occur 4% of the time by chance. It is NOT a 96% probability the treatment works." },
  { front: "What is overfitting?", back: "When a model memorises training data including noise and generalises poorly. Diagnostic: training accuracy much higher than test accuracy." },
  { front: "What is underfitting?", back: "When a model is too simple to capture real patterns. Both training and test accuracy are poor." },
  { front: "What is feature engineering?", back: "Using domain knowledge to create, transform, or select variables that make a model more accurate. Often more impactful than algorithm choice." },
  { front: "What is Bayes theorem used for in diagnosis?", back: "To correctly update the probability of a condition given a test result, accounting for the base rate (prevalence) of the condition." },
  { front: "What is the data-ink ratio?", back: "Edward Tufte's principle: maximise the proportion of visual space devoted to data, minimise decoration. Remove everything that is not data." },
  { front: "What is a train-test split for?", back: "To estimate how well a model generalises to unseen data. Training error alone overstates performance." },
  { front: "What are the three dimensions of good data storytelling?", back: "Accurate data, relevant visualisation, and narrative that connects findings to decisions. The audience and their decision is the starting point." }
 ],

 glossary: [
  { term: "EDA", def: "Exploratory Data Analysis. Examining data structure, quality, and patterns before modelling." },
  { term: "Correlation", def: "A statistical measure of how two variables move together. Does not imply causation." },
  { term: "Causation", def: "One variable producing changes in another. Established through experiments or causal inference methods." },
  { term: "p-value", def: "The probability of observing results this extreme if the null hypothesis were true. Not the probability the alternative is true." },
  { term: "Overfitting", def: "When a model memorises training data and generalises poorly to new data." },
  { term: "Underfitting", def: "When a model is too simple to capture the real patterns in the data." },
  { term: "Bias-variance tradeoff", def: "The tension between a model being too simple (high bias) and too sensitive to training data (high variance)." },
  { term: "Feature engineering", def: "Creating or transforming input variables to make a model more accurate or interpretable." },
  { term: "Bayes theorem", def: "P(H|E) = P(E|H) * P(H) / P(E). The rule for updating beliefs given evidence." },
  { term: "A/B test", def: "A randomised experiment assigning users to control and treatment conditions to measure the causal effect of a change." },
  { term: "Regularisation", def: "A technique for reducing overfitting by penalising model complexity during training." },
  { term: "DPDPA", def: "Digital Personal Data Protection Act 2023. India's framework governing how personal data is collected, used, and processed." }
 ],

 capstone: {
  t: "End-to-end data science project on an Indian dataset",
  d: "Choose a real question relevant to India (public health, agriculture, finance, or urban planning). Collect data from public sources (MOSPI, data.gov.in, RBI). Run a complete workflow: EDA, cleaning, analysis or model, and a data story with recommendations. Present the findings as if briefing a policymaker.",
  xp: 200
 }
};

export default d;
