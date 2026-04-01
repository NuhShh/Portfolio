const Certifications = () => {
    const certifications = [
        {
            name: "Data Analysis and Visualization Foundations Specialization",
            issuer: "IBM",
            year: "2026",
            type: "Data",
        },
        {
            name: "Power BI Masterclass",
            issuer: "Packt",
            year: "2026",
            type: "Data",
        },
        {
            name: "Data Analysis and Visualization with Microsoft Excel Specialization",
            issuer: "Logical Operation",
            year: "2026",
            type: "Data",
        },
        {
            name: "Google AI Professional Certificate",
            issuer: "Google",
            year: "2026",
            type: "AI/ML",
        },
        {
            name: "Google Analytics Certification",
            issuer: "Google",
            year: "2026",
            type: "Data",
        },
        {
            name: "Azure AI Fundamentals",
            issuer: "Microsoft",
            year: "2025",
            type: "AI/ML",
        },
        {
            name: "Building Gen AI Applications with Microsoft Azure",
            issuer: "Dicoding",
            year: "2026",
            type: "AI/ML",
        },
        {
            name: "Introduction to Tableau",
            issuer: "Simplilearn",
            year: "2026",
            type: "Data",
        },
        {
            name: "English Proficiency Test (B2)",
            issuer: "Telkom University Language Center",
            year: "2025",
            type: "Language",
        },
    ];

    const typeBadgeStyle: Record<string, string> = {
        Data: "bg-violet-50 text-violet-700 border-violet-200",
        "AI/ML": "bg-blue-50 text-blue-700 border-blue-200",
        Language: "bg-amber-50 text-amber-700 border-amber-200",
    };

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col gap-6 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                            Certifications
                        </p>

                        <div className="flex flex-col divide-y divide-primary/10 border border-primary/10 rounded-xl overflow-hidden">
                            {certifications.map((cert, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-primary/[0.02] transition-colors"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                            <p className="text-sm font-medium text-primary leading-snug">
                                                {cert.name}
                                            </p>
                                            <p className="text-xs text-secondary">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span
                                            className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                                                typeBadgeStyle[cert.type] ?? "bg-primary/5 text-secondary border-primary/10"
                                            }`}
                                        >
                                            {cert.type}
                                        </span>
                                        <span className="text-xs text-secondary border border-primary/10 rounded-full px-3 py-1">
                                            {cert.year}
                                        </span>
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

export default Certifications;