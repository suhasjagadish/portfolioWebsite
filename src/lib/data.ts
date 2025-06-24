
import { Home, User, Briefcase, Star, Mail, Layers, TrendingUp, Github, Linkedin, FileText, Lightbulb, Zap, ArrowRight, Award, ExternalLink, GitBranch, Users, Clock, Rocket, Target, Heart } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';

export const navLinks = [
  { id: 'home', title: 'Home', icon: Home },
  { id: 'about', title: 'About', icon: User },
  { id: 'skills', title: 'Skills', icon: Lightbulb },
  { id: 'projects', title: 'Projects', icon: Briefcase },
  { id: 'experience', title: 'Experience', icon: Layers },
  { id: 'contact', title: 'Contact', icon: Mail },
];

export const heroData = {
  mainTitle: 'Turning Data Into',
  highlightedTitle: ['Decisions', 'Insights', 'Growth', 'Stories'],
  card: {
    title: "Hi, I'm Suhas",
    imageUrl: '/Images/me.jpg', // Placeholder for your image
    description: "My passion lies in bridging data and decision-making, crafting solutions that unlock business potential and deliver measurable impact with data-driven insights using Python and SQL and other Analytical and Business Intelligence tools"
  },
  resumeUrl: 'https://drive.google.com/file/d/1-K8N5X99sCFIRTRwuFQe7hZ39_Jhr04k/view?usp=sharing', // Placeholder
};

export const aboutData = {
  title: "About Me",
  subtitle: "Discover the story behind me.",
  paragraphs: [
    "I'm Suhas, <strong>aspiring data analyst</strong> with 2.5 years of experience in backend development. My journey started with a deep curiosity about how data shapes business decisions in today's fast-paced world.",
    "Through a strong technical foundation and self-directed learning, I've honed my skills in <strong>statistical analysis, data manipulation, data visualization, and business intelligence tools</strong>. I believe data has the power to tell compelling stories and drive meaningful change. My passion lies in transforming complex datasets into actionable insights, optimizing workflows, and automating processes to build efficient, data-driven solutions.",
    "With expertise in <strong>SQL, Python, Tableau, and Power BI</strong>, I thrive on problem-solving and am eager to apply my skills in a role that enhances data-driven decision-making."
  ],
  tags: [
    { text: "Problem Solver", color: "blue" },
    { text: "Critical Thinker", color: "green" },
    { text: "Continuous Learner", color: "purple" },
    { text: "Innovation Focused", color: "orange" },
  ],
  cards: [
    { icon: User, title: "Background", description: "Backend Developer with 2+ years of experience with strong technical skills.", color: "blue", bgColorClass: 'bg-about-bg-blue' },
    { icon: Target, title: "Goals", description: "Leveraging technical expertise and analytical skills to solve business problems and drive decisions effectively.", color: "green", bgColorClass: 'bg-about-bg-green' },
    { icon: Heart, title: "Passion", description: "Enjoy discovering data patterns, building visuals and turning insights into actionable business decisions.", color: "red", bgColorClass: 'bg-about-bg-red' },
    { icon: Zap, title: "Action", description: "Exploring new technologies and innovative methods to turn complex data into strategic business solutions.", color: "purple", bgColorClass: 'bg-about-bg-purple' }
  ]
};

export const socialLinks = [
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/suhasjagadish', color: '#181717', tooltip: 'View My Repositories' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/suhas-j-39950b1b8/', color: '#0A66C2', tooltip: 'Connect with me' },
  { name: 'Email', icon: Mail, url: 'mailto:jsuhas2204@gmail.com', color: '#EA4335', tooltip: 'Send Mail' },
];

export const skills = [
  { name: 'Python', rating: 5, image: '/Images/python.1024x1018.png', description: "Programming with Pandas, NumPy, Matplotlib, Seaborn, Data preprocessing & Data Cleaning.", color: 'text-blue-500' },
  { name: 'SQL', rating: 5, image: '/Images/sql.png', description: "Expert in complex queries, Data manipulation, MySQL, PostgreSQL, SQLite, Query optimization, Stored procedures, Complex joins, Data warehousin  g.", color: 'text-green-500' },
  { name: 'MS Excel', rating: 4, image: '/Images/ms-excel.png', description: "Advanced formulas, Lookup formulas, Index Match, Pivot tables, Conditional Formatting, Data validation, Advanced charts.", color: 'text-emerald-500' },
  { name: 'Power BI', rating: 4, image: '/Images/power-bi.png', description: "Creating interactive dashboards, DAX calculations, Custom Visuals and enterprise-level BI solutions.", color: 'text-yellow-500' },
  { name: 'Tableau', rating: 4, image: '/Images/Tableau-Symbol.png', description: "Calculated fields, Parameters, Story points, Advanced filters, Dashboard actions, Data blending.", color: 'text-orange-500' },
  { name: 'Product Analytics', rating: 4, image: '/Images/product_analytics.png', description: "User behavior analysis, Product performance metrics, RCA, CRM, Customer segmentation, A/B testing, Funnel analysis, Guesstimation.", color: 'text-purple-500' },
  { name: 'Statistical Analytics', rating: 4, image: '/Images/histogram.png', description: "Sampling, Distributions, Hypothesis testing, ANOVA, Chi-square tests, T-tests, Correlation analysis.", color: 'text-pink-500' },
  { name: 'AWS', rating: 3, image: '/Images/aws.png', description: "Cloud data services including S3, Redshift, and Lambda for scalable analytics solutions.", color: 'text-indigo-500' },
];

export const projects = [
  {
    title: 'Customer Churn Prediction',
    image: 'https://placehold.co/600x400.png',
    description: 'Developed a machine learning model to predict customer churn, enabling proactive retention strategies.',
    challenges: ['Handling imbalanced data', 'Feature engineering from raw data', 'Real-time prediction serving'],
    impact: ['Improved customer retention by 15%', 'Enabled proactive retention strategies', 'Optimized marketing spend'],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    category: 'Machine Learning',
    problemStatement: 'Businesses face significant revenue loss due to customer churn. This project aimed to proactively identify customers at high risk of churning to enable targeted retention efforts.',
    solutionApproach: 'A machine learning model was built using Python and Scikit-learn to analyze historical customer data and predict churn. The solution involved feature engineering, model training (logistic regression and random forests), and deploying the model as a service that scored customers daily, integrating with a marketing platform for automated, personalized outreach.'
  },
  {
    title: 'Sales Performance Dashboard',
    image: 'https://placehold.co/600x400.png',
    description: 'Created an interactive dashboard to monitor sales performance and identify growth opportunities.',
    challenges: ['Integrating data from multiple sources (CRM, ERP)', 'Ensuring data consistency and accuracy', 'Creating intuitive drill-down functionality'],
    impact: ['Provided a unified view of sales data', 'Led to a 10% increase in cross-sell revenue', 'Reduced report generation time by 90%'],
    tech: ['Tableau', 'SQL', 'Data Warehousing'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    category: 'Dashboarding',
    problemStatement: 'The sales team lacked a centralized, real-time view of performance metrics, making it difficult to track progress, identify opportunities, and make data-driven decisions quickly.',
    solutionApproach: 'An interactive dashboard was developed in Tableau, connected to a SQL data warehouse. It consolidated data from CRM and ERP systems to provide a unified view of sales KPIs. The dashboard featured drill-down capabilities for regional, product, and individual performance analysis, empowering the sales team with actionable insights.'
  },
  {
    title: 'Product Recommendation Engine',
    image: 'https://placehold.co/600x400.png',
    description: 'Built a collaborative filtering-based recommendation engine for an e-commerce platform.',
    challenges: ['Scalability for large user base & catalog', 'Addressing the "cold start" problem for new users', 'Minimizing prediction latency'],
    impact: ['Increased average order value by 20%', 'Boosted user engagement significantly', 'Personalized user experience'],
    tech: ['Python', 'AWS', 'Spark', 'SQL'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    category: 'Machine Learning',
    problemStatement: 'The e-commerce platform needed to increase user engagement and average order value by providing personalized product suggestions to customers.',
    solutionApproach: 'A collaborative filtering recommendation engine was built using Python and Apache Spark on AWS. The system processes large volumes of user interaction data to generate real-time product recommendations, addressing scalability and the "cold start" problem for new users, thereby personalizing the shopping experience.'
  },
  {
    title: 'Market Basket Analysis',
    image: 'https://placehold.co/600x400.png',
    description: 'Analyzed purchasing patterns to identify frequently co-purchased products.',
    challenges: ['Processing massive volumes of transaction data', 'Identifying meaningful associations from noise', 'Visualizing complex rule sets effectively'],
    impact: ['Informed product placement strategies', 'Increased sales of targeted items by 25%', 'Enhanced cross-promotional campaigns'],
    tech: ['SQL', 'Python', 'Power BI'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    category: 'Analysis (EDA)',
    problemStatement: 'Retailers need to understand customer purchasing behavior to optimize product placement, promotions, and inventory. This project aimed to uncover hidden purchasing patterns from transaction data.',
    solutionApproach: 'Market Basket Analysis was performed using the Apriori algorithm in Python to identify frequently co-purchased items. The resulting association rules were visualized in an interactive Power BI dashboard, providing actionable insights for store layout optimization and targeted marketing campaigns.'
  },
  {
    title: 'Inventory Optimization Model',
    image: 'https://placehold.co/600x400.png',
    description: 'A model to forecast demand and optimize stock levels to reduce holding costs.',
    challenges: ['Accurately forecasting demand with seasonality', 'Handling demand volatility for various SKUs', 'Balancing holding costs vs. stockout costs'],
    impact: ['Reduced stockouts by 30%', 'Lowered inventory holding costs by 18%', 'Improved supply chain efficiency'],
    tech: ['Python', 'Pandas', 'StatsModels'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    category: 'Analysis (EDA)',
    problemStatement: 'High inventory holding costs and stockouts were impacting profitability. The goal was to optimize inventory levels by accurately forecasting demand and balancing supply with customer needs.',
    solutionApproach: 'A time-series forecasting model (SARIMA) was developed in Python to predict product demand, accounting for seasonality. The forecasts fed into an optimization model that calculated optimal reorder points and quantities for each SKU, significantly reducing both holding costs and stockout incidents.'
  },
  {
    title: 'HR Analytics Dashboard',
    image: 'https://placehold.co/600x400.png',
    description: 'An interactive dashboard to visualize key HR metrics like employee turnover, satisfaction, and performance.',
    challenges: ['Ensuring data privacy and anonymization', 'Combining data from disparate HR systems', 'Defining meaningful KPIs for employee satisfaction'],
    impact: ['Helped identify key drivers of attrition', 'Reduced employee turnover by 10%', 'Improved effectiveness of retention policies'],
    tech: ['Power BI', 'SQL', 'Excel'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    category: 'Dashboarding',
    problemStatement: 'The HR department required a consolidated view of workforce data to understand key trends in employee turnover, satisfaction, and performance, which were previously siloed across different systems.',
    solutionApproach: 'A comprehensive HR analytics dashboard was created in Power BI. It integrated data from various HR systems, ensuring anonymization, to visualize KPIs. The dashboard included turnover trend analysis, satisfaction survey sentiment, and performance metrics, helping leadership identify and address causes of attrition.'
  }
];

export const experience = [
    {
        role: 'System Engineer',
        company: 'Infosys Ltd.',
        period: 'March 2022 - July 2024',
        keyResponsibilities: [
            'Designed and optimized complex SQL queries for relational database (Oracle XE 11g).',
            'Developed and maintained robust server-side applications using Java and Spring Boot, ensuring high performance and responsiveness to requests from the front-end.',
            'Implemented Stored Procedures and optimization strategies to improve query performance and reduce latency.',
        ],
        impactMetrics: [
            'Improved application speed and reliability by 20% through optimized SQL queries and application logic.',
            'Improved query performance and reduce latency by 30%.',
        ],
        technologiesUsed: [
            'Java',
            'Oracle xe-11g',
            'Spring Boot',
            'MS Visual Studio',
            'Software Development Lifecycle',
            'Jira',
        ],
    }
];

export const certifications = [
    { 
        name: 'AWS Certified Data Analytics', 
        issuer: 'Amazon Web Services', 
        date: '2023', 
        id: 'AWS-DA-2023-001',
        description: 'Specialized certification covering data lake architecture, analytics services, and machine learning on AWS.',
        image: 'https://placehold.co/400x300.png', 
        credentialUrl: '#',
    },
    { 
        name: 'Certified Analytics Professional', 
        issuer: 'INFORMS', 
        date: '2023', 
        id: 'CAP-2023-002',
        description: 'A vendor-neutral certification that validates understanding of the end-to-end analytics process.',
        image: 'https://placehold.co/400x300.png',
        credentialUrl: '#',
    },
    { 
        name: 'Tableau Desktop Specialist', 
        issuer: 'Tableau', 
        date: '2022', 
        id: 'TDS-2022-003',
        description: 'Demonstrates foundational skills and understanding of Tableau Desktop and data visualization best practices.',
        image: 'https://placehold.co/400x300.png', 
        credentialUrl: '#',
    },
    { 
        name: 'Power BI Data Analyst Associate', 
        issuer: 'Microsoft', 
        date: '2022', 
        id: 'PL-300-2022-004',
        description: 'Validates skills required to enable data-driven insights by using Power BI for data modeling and visualization.',
        image: 'https://placehold.co/400x300.png', 
        credentialUrl: '#',
    },
];

export const contactData = {
    title: "Let's Connect",
    subtitle: "Ready to collaborate on your next data analytics project? Let's discuss how we can turn your data into actionable insights.",
    cards: [
      { 
        ...socialLinks[0],
        name: 'GitHub', 
        stat: '20+ repositories',
        cta: 'View my repositories',
        statIcon: GitBranch,
      },
      { 
        ...socialLinks[1],
        name: 'LinkedIn', 
        stat: '500+ Connections',
        cta: 'Connect with me professionally',
        statIcon: Users,
      },
      { 
        ...socialLinks[2], 
        name: 'Email', 
        stat: '24h Response Rate',
        cta: 'Get in touch directly via email :\njsuhas2204@gmail.com',
        statIcon: Clock,
      },
    ],
    closing: {
        icon: Rocket,
        title: 'Ready to start a project?',
        subtitle: "Let's transform your data into competitive advantage",
    }
};
