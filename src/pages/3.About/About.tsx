
const About = ({ summary }: { summary: string }) => {
    return (
        <section className="relative py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <h1 className="section-title">✨ About Me ✨</h1>
            <div className="glass-card p-8 md:p-12">
                <p className="text-lg md:text-xl leading-9 text-gray-300">{summary}</p>
                <p className="text-lg md:text-xl leading-9 text-gray-300 mt-4">
                    I hold a Bachelor's Degree in Statistics from{' '}
                    <a href="https://www.laikipia.ac.ke/" target="_blank" className="text-primary hover:text-primary-dark transition-colors font-medium underline decoration-primary/30 hover:decoration-primary">Laikipia University</a>, Kenya.
                </p>
                <br />
                <p className="text-lg md:text-xl leading-9 text-gray-300">
                    I'm currently a <span className="text-primary font-medium">Product Operations Associate at SunCulture</span>, where I use web and mobile app analytics
                    to monitor user behavior and product health, and look for opportunities to automate and standardize how the product team works.
                    I joined SunCulture as a Data and Operations Intern, analyzing trial and sales data and reporting on customer conversion.
                </p>
                <br />
                <p className="text-lg md:text-xl leading-9 text-gray-300">
                    My toolkit spans <span className="text-primary font-medium">Python, SQL, Excel, Tableau and Power BI</span> for analysis and visualization,
                    and <span className="text-primary font-medium">Jira, Postman and Cypress</span> from my QA/QE training at Teach2Give, where I tested APIs,
                    validated database operations, and deployed full-stack applications to Azure.
                </p>
            </div>
        </section>
    )
}

export default About
