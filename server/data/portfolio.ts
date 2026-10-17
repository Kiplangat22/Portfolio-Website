import type { Portfolio } from '../../shared/types.js';

// Single source of truth for the portfolio content (taken from Kevin's resume).
// Edit this file to update the site; the React client fetches it from GET /api/portfolio.
export const portfolio: Portfolio = {
    profile: {
        name: 'Kevin Kiplangat',
        shortName: 'Kevin',
        roles: ['Kevin Kiplangat', 'a Data Analyst', 'in Product Operations'],
        tagline: 'Turning data into decisions.',
        summary:
            "In today's world, industries rely on data to solve problems and improve performance. I am a dedicated Data Analyst with skills in Python, SQL, Tableau, Power BI, and QA/QE tools such as Jira and Postman. I use data to uncover insights that support better decisions, efficient operations, and sustainable growth.",
        email: 'kiplangatkevin00@gmail.com',
        phone: '+254 708 459 426',
        location: 'Nairobi, Kenya',
        linkedin: 'https://www.linkedin.com/in/kiplangatkevin/',
        github: 'https://github.com/Kiplangat22',
        resumeUrl: '/assets/files/Kevin-Kiplangat-Resume.pdf',
        photoUrl: '/assets/images/kevin.png',
    },

    experience: [
        {
            id: 1,
            title: 'Product Operations Associate',
            company: 'SunCulture LTD',
            location: 'Nairobi',
            period: 'Aug 2026 - Present',
            points: [
                'Determine where automation and standardization can be used to optimize processes.',
                'Use web and mobile app analytics platforms to monitor user behavior, app performance, and product health, and turn that data into daily product decisions and recommendations.',
                "Help manage and optimize the product team's software stack while maintaining clear documentation of processes.",
            ],
        },
        {
            id: 2,
            title: 'Data and Operations Intern',
            company: 'SunCulture LTD',
            location: 'Nairobi',
            period: 'Jan 2026 - Jul 2026',
            points: [
                'Analyzed trial and operational data to identify trends and provide real-time support for strategic decision-making.',
                'Maintained regular reports on sales, customer conversion, and trial performance to track key metrics.',
                'Ensured database accuracy by resolving discrepancies and managing routine data updates.',
                'Evaluated customer behavior and sales outlet potential to optimize reach and conversion rates.',
            ],
        },
        {
            id: 3,
            title: 'QA/QE Trainee',
            company: 'Teach2Give',
            location: 'Nyeri',
            period: 'Sep 2025 - Dec 2025',
            points: [
                'Gained experience in manual testing, writing and executing test cases, documenting defects, and applying core testing methodologies to ensure product quality.',
                'Worked across the frontend and backend: testing APIs, validating database operations, and reviewing UI functionality for smooth end-to-end performance.',
                'Deployed the backend, frontend, and database to Azure, performed system checks, and verified the application in a live cloud environment.',
            ],
        },
        {
            id: 4,
            title: 'Tableau Data Analyst Intern',
            company: 'Teach2Give',
            location: 'Nyeri',
            period: 'Jan 2025 - Mar 2025',
            points: [
                'Used Tableau Prep for data preparation and built visualizations and dashboards in Tableau.',
                'Gained experience in data analysis, reporting, and presenting findings through interactive dashboards.',
                'Collaborated in a team to develop user stories, ensuring data-driven decisions aligned with business goals.',
            ],
        },
        {
            id: 5,
            title: 'Sales Representative',
            company: 'JACE Farms and Consultancy LTD',
            location: 'Kenya',
            period: 'Sep 2023 - Jun 2024',
            points: [
                'Delivered data-driven consultancy and extension services to farmers, managed sales operations, and developed marketing strategies that improved client satisfaction and business growth.',
                'Analyzed business and agricultural data to identify trends, guide decision-making, and enhance productivity.',
            ],
        },
        {
            id: 6,
            title: 'Data Analyst Intern',
            company: 'I Choose Life-Africa',
            location: 'Laikipia County Office',
            period: 'Jul 2023 - Sep 2023',
            points: [
                'Assisted in data collection, cleaning, and analysis for health and education programs.',
                'Created reports and visualizations to inform strategic decision-making.',
                'Supported the team with actionable insights derived from statistical models and surveys.',
            ],
        },
    ],

    skills: [
        { category: 'Data Visualization', skills: ['Tableau', 'Power BI'] },
        { category: 'Data Analysis', skills: ['Excel', 'SQL'] },
        { category: 'Languages', skills: ['Python', 'TypeScript'] },
        { category: 'Statistics', skills: ['Descriptive Analysis', 'Regression Analysis', 'Time Series Analysis'] },
        { category: 'QA / Testing Tools', skills: ['Jira', 'Postman', 'Cypress'] },
        { category: 'Web Development', skills: ['HTML', 'CSS', 'Node.js', 'React', 'Azure'] },
    ],

    projects: [
        {
            id: 1,
            name: 'Titanic Survival Prediction',
            description:
                'Built predictive models to analyse survival rates based on passenger demographics, and conducted data cleaning, feature engineering, and exploratory data analysis.',
            technologies: ['Python', 'Machine Learning', 'Feature Engineering', 'EDA'],
            githubLink: 'https://github.com/Kiplangat22',
        },
        {
            id: 2,
            name: 'Real Estate Data Analysis',
            description:
                'Analysed Mexico City housing data to uncover trends in pricing and property features, applied data wrangling techniques, and developed visualizations using Python libraries.',
            technologies: ['Python', 'Data Wrangling', 'Data Visualization'],
            githubLink: 'https://github.com/Kiplangat22',
        },
    ],

    education: [
        {
            id: 1,
            institution: 'Laikipia University',
            degree: "Bachelor's Degree in Statistics",
            location: 'Laikipia, Kenya',
            period: 'Sep 2019 - Dec 2023',
        },
    ],

    certifications: [
        { id: 1, title: 'Certified Tableau Data Analyst Badge' },
        { id: 2, title: 'Data Analyst in Tableau' },
        { id: 3, title: 'Associate Data Analyst in SQL' },
        { id: 4, title: 'Associate Data Engineer in SQL' },
        { id: 5, title: 'ALX Professional Foundations' },
        { id: 6, title: 'ALX AI Career Essentials' },
        { id: 7, title: 'ALX Virtual Assistant' },
        { id: 8, title: 'Cisco CPA – Programming Essentials in C++' },
    ],
};
