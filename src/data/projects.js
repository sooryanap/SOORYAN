export const projects = [
  {
    id: 1,
    title: "Predictive Analytics for E-commerce CLV",
    problem: "E-commerce businesses struggle to identify high-value customers and allocate marketing resources efficiently.",
    description:
      "Developed a Customer Lifetime Value (CLV) prediction system using multi-source e-commerce data integration.",
    tools: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    category: "Machine Learning",
    metrics: [
      { label: "Model Accuracy", value: "92%", icon: "Target" },
      { label: "ROI Increase", value: "+35%", icon: "TrendingUp" },
      { label: "Data Sources", value: "4", icon: "Database" },
    ],
    insights: [
      "Integrated 4 data sources: transactions, reviews, payments, geolocation",
      "Engineered 15+ features for customer behavior modeling",
      "Achieved 92% prediction accuracy with ensemble methods",
    ],
    github: "https://github.com/sooryanap/clv-prediction",
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "Data Storage Solutions for Analysis",
    problem: "Organizations needed scalable data pipelines and real-time dashboards for better decision-making.",
    description:
      "Built end-to-end data infrastructure with ETL pipelines and interactive analytics dashboards.",
    tools: ["ETL", "Neo4j", "Tableau", "SSRS", "SQL Server"],
    category: "Data Engineering",
    metrics: [
      { label: "Query Speed", value: "-40%", icon: "Zap" },
      { label: "Dashboards", value: "12+", icon: "BarChart3" },
      { label: "Data Nodes", value: "50K+", icon: "Network" },
    ],
    insights: [
      "Reduced query latency by 40% through optimization",
      "Built 12+ Tableau dashboards for real-time insights",
      "Modeled complex relationships in Neo4j graph database",
    ],
    github: "https://github.com/sooryanap/data-storage-solutions",
    image: null,
    featured: false,
  },
  {
    id: 3,
    title: "Speech Emotion Detection System",
    problem: "Real-time emotion recognition from audio is challenging due to noise and variability in speech patterns.",
    description:
      "Developed a deep learning system for classifying emotional states from speech audio using CNN-LSTM architecture.",
    tools: ["Python", "TensorFlow", "Keras", "Librosa", "MFCC"],
    category: "Deep Learning",
    metrics: [
      { label: "Accuracy", value: "89%", icon: "TrendingUp" },
      { label: "Emotion Classes", value: "7", icon: "Layers" },
      { label: "Audio Features", value: "40+", icon: "Mic" },
    ],
    insights: [
      "Extracted 40+ MFCC features per audio sample",
      "Combined CNN feature extraction with LSTM sequence modeling",
      "Achieved 89% accuracy across 7 emotion categories",
    ],
    github: "https://github.com/sooryanap/speech-emotion",
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: "Anomaly Detection with Conformal LSTM",
    problem: "Traditional anomaly detection lacks uncertainty quantification, reducing trust in predictions.",
    description:
      "Implemented a conformal LSTM-based system for detecting outliers with statistically guaranteed error bounds.",
    tools: ["Python", "TensorFlow", "LSTM", "Conformal Prediction", "Time Series Analysis"],
    category: "Machine Learning",
    metrics: [
      { label: "Precision", value: "94%", icon: "Target" },
      { label: "Error Bound", value: "95%", icon: "Shield" },
      { label: "Sequence Length", value: "50+", icon: "Activity" },
    ],
    insights: [
      "Applied conformal prediction for uncertainty quantification",
      "Achieved 94% precision on temporal anomaly detection",
      "95% statistical guarantee on prediction coverage",
    ],
    github: "https://github.com/sooryanap/anomaly-detection",
    image: null,
    featured: false,
  },
  {
    id: 5,
    title: "MEAN Stack E-commerce Platform",
    problem: "Businesses needed a scalable, secure full-stack web solution with real-time inventory and user management.",
    description:
      "Built and deployed a production-ready e-commerce application with JWT authentication and responsive design.",
    tools: ["Angular", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full Stack",
    metrics: [
      { label: "Performance", value: "+25%", icon: "Zap" },
      { label: "Security Level", value: "JWT", icon: "Shield" },
      { label: "Users Supported", value: "10K+", icon: "Users" },
    ],
    insights: [
      "Optimized MongoDB queries, reducing response time by 25%",
      "Implemented JWT-based authentication with role-based access",
      "Built RESTful APIs handling 10K+ concurrent users",
    ],
    github: "https://github.com/sooryanap/mean-ecommerce",
    image: null,
    featured: false,
  },
  {
    id: 6,
    title: "Network Configuration Analyzer",
    problem: "Enterprises struggle with network topology analysis and configuration compliance.",
    description:
      "Developed a tool for analyzing network configurations and identifying security vulnerabilities.",
    tools: ["Cisco IOS", "Python", "VLAN", "Firewall Rules", "VPN"],
    category: "Networking",
    metrics: [
      { label: "Topologies", value: "50+", icon: "Network" },
      { label: "Vulns Found", value: "200+", icon: "AlertTriangle" },
      { label: "Compliance", value: "98%", icon: "CheckCircle" },
    ],
    insights: [
      "Analyzed 50+ network topologies and configurations",
      "Identified 200+ security vulnerabilities and misconfigurations",
      "Achieved 98% compliance with security best practices",
    ],
    github: "https://github.com/sooryanap/network-analyzer",
    image: null,
    featured: false,
  },
];

export const projectCategories = ["All", "Machine Learning", "Data Engineering", "Deep Learning", "Full Stack", "Networking"];
