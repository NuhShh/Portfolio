import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const skillGroups = [
        {
            label: "Data & Analytics",
            skills: [
                "Python (Pandas, NumPy)",
                "SQL",
                "Power BI",
                "EDA & Data Cleaning",
                "Tableau",
                "Matplotlib / Seaborn",
                "Excel",
            ],
        },
        {
            label: "Machine Learning",
            skills: [
                "scikit-learn",
                "Feature Engineering",
                "Model Evaluation",
                "Recommendation Systems",
                "Stacking Ensemble",
                "Model Deployment (Streamlit)",
            ],
        },
        {
            label: "Web & Database",
            skills: [
                "Laravel",
                "RESTful API Development",
                "SQL Server",
                "MySQL",
                "Vue.js",
                "Git / GitHub",
            ],
        },
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                Informatics graduate with a strong foundation in Data Science, Machine Learning, and statistical analysis. Experienced in building end-to-end machine learning pipelines, analyzing structured datasets, and developing data-driven systems for real-world applications.
                            </h2>
                            <h5 className="text-secondary font-normal">
                                Proficient in Python, SQL, and data visualization, with hands-on experience in recommendation systems, predictive modeling, and classification. Demonstrated research results with measurable improvements in recommendation performance and experience developing healthcare information systems used by 20+ staff. Focused on transforming data into actionable insights through analytical problem-solving and machine learning solutions.
                            </h5>
                        </div>

                        <div className="flex flex-col gap-6">
                            <p className="text-sm text-primary uppercase font-medium">Expertise</p>
                            {skillGroups.map((group, gi) => (
                                <div key={gi} className="flex flex-col gap-2.5">
                                    <p className="text-xs text-secondary uppercase tracking-widest">{group.label}</p>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {group.skills.map((skill, si) => (
                                            <Badge
                                                variant={"outline"}
                                                key={si}
                                                className="py-1.5 px-3 rounded-lg"
                                            >
                                                <p className="text-xs sm:text-sm font-medium text-primary">{skill}</p>
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;