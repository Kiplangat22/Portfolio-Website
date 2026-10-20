import type { Portfolio } from './types.js';

// Single source of truth for the portfolio content (taken from Kevin's resume).
// Edit this file to update the site; the React client imports it directly (it's also served at GET /api/portfolio).
export const portfolio: Portfolio = {
    profile: {
        name: 'Kevin Kiplangat',
        shortName: 'Kevin',
        role: 'Data Analyst · Product Operations',
        heroPhrases: ['decisions.', 'clear stories.', 'better products.', 'calmer Mondays.'],
        tagline: 'Turning data into decisions.',
        summary:
            "I'm a data analyst working in product operations at SunCulture, where solar-powered irrigation meets a lot of data. I studied statistics, spent time in the field with farmers, and now I help a product team make choices backed by real numbers.",
        story: [
            "I fell for numbers while studying **Statistics at Laikipia University**, mostly because they kept answering questions I didn't know how to ask yet.",
            "My first real dataset came from **I Choose Life-Africa**, cleaning survey data for health and education programs in Laikipia. Later, at **JACE Farms**, I swapped the desk for the field: selling, advising farmers and learning that the best insight is useless if nobody on the ground can act on it.",
            "At **Teach2Give** I sharpened the craft, building Tableau dashboards and then learning QA: testing APIs, validating databases and shipping a full-stack app to Azure. It taught me to ask \"how could this break?\" before anyone else does.",
            "Today I'm a **Product Operations Associate at SunCulture**. I watch how people use our web and mobile apps, keep an eye on product health, and look for the boring, repeatable work we can automate so the team can focus on the interesting problems.",
            "What ties it together: I care about numbers that someone can actually use.",
        ],
        now: [
            { label: 'Working at', value: 'SunCulture, Product Operations' },
            { label: 'Based in', value: 'Nairobi, Kenya' },
            { label: 'Studied', value: 'Statistics, Laikipia University' },
            { label: 'Happy to talk', value: 'Dashboards, product analytics, agri-tech' },
        ],
        timeZone: 'Africa/Nairobi',
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
            logo: '/assets/images/experience/sunculture.png',
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
            logo: '/assets/images/experience/sunculture.png',
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
            logo: '/assets/images/experience/teach2give.jpeg',
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
            logo: '/assets/images/experience/teach2give.jpeg',
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
            logo: '/assets/images/experience/ichooselife.png',
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
        { id: 1, title: 'Certified Tableau Data Analyst Badge', logo: 'tableau' },
        { id: 2, title: 'Data Analyst in Tableau', logo: 'tableau' },
        { id: 3, title: 'Associate Data Analyst in SQL', logo: 'sql' },
        { id: 4, title: 'Associate Data Engineer in SQL', logo: 'sql' },
        { id: 5, title: 'Professional Foundations', issuer: 'ALX', logo: 'alx' },
        { id: 6, title: 'AI Career Essentials', issuer: 'ALX', logo: 'alx' },
        { id: 7, title: 'Virtual Assistant', issuer: 'ALX', logo: 'alx' },
        { id: 8, title: 'CPA – Programming Essentials in C++', issuer: 'Cisco Networking Academy', logo: 'cisco' },
    ],
};
