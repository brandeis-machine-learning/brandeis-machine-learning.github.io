export const publicationGroups = [
  {
    title: 'Foundations & Perspectives',
    papers: [
      {
        title:
          'Practical and Unified Gradient-Based Valuation across Data, Layers, and Parameters',
        description:
          'A unified gradient-based framework for understanding data, layer, and parameter valuation.',
        pdf: '/papers/gradient-based-valuation-survey.pdf',
      },
      {
        title: 'Worlds within Learning',
        description:
          'A perspective on learning processes as sources of data for further learning.',
        pdf: '/papers/worlds-within-learning.pdf',
      },
    ],
  },
  {
    title: 'Data Valuation & Influence',
    papers: [
      {
        title:
          'Outlier Gradient Analysis: Efficiently Identifying Detrimental Training Samples for Deep Learning Models',
        description:
          'Identifies detrimental training samples through Hessian-free outlier gradient analysis.',
        pdf: '/papers/outlier-gradient-analysis.pdf',
      },
      {
        title: 'Revisit, Extend, and Enhance Hessian-Free Influence Functions',
        description:
          'Revisits gradient-based influence estimation and extends it to fairness and robustness.',
        pdf: '/papers/hessian-free-influence-functions.pdf',
      },
      {
        title: 'On the Inflation of KNN-Shapley Value',
        description:
          'Calibrates KNN-Shapley values to better distinguish beneficial and detrimental samples.',
        pdf: '/papers/knn-shapley-value.pdf',
      },
      {
        title: 'Characterizing the Influence of Graph Elements',
        description:
          'Estimates how removing graph nodes and edges affects models without retraining.',
        pdf: '/papers/influence-of-graph-elements.pdf',
      },
      {
        title:
          '“What Data Benefits My Classifier?” Enhancing Model Performance and Interpretability through Influence-Based Data Selection',
        description:
          'Uses influence-based data selection to improve model utility, fairness, and robustness.',
        pdf: '/papers/what-data-benefits-my-classifier.pdf',
      },
    ],
  },
  {
    title: 'Data Intervention & Fairness',
    papers: [
      {
        title: 'Salutary Labeling with Zero Human Annotation',
        description:
          'Selects informative samples and assigns beneficial labels without human annotation.',
        pdf: '/papers/salutary-labeling.pdf',
      },
      {
        title:
          'Achieving Fairness at No Utility Cost via Data Reweighing with Influence',
        description:
          'Reweights individual training samples using their influence on fairness and predictive utility.',
        pdf: '/papers/fairness-data-reweighing.pdf',
      },
    ],
  },
];
