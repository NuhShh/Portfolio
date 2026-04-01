"use client";
import { useEffect, useState } from "react";

const Education = () => {
    const educations = [
        {
            institution: "Universitas Telkom",
            degree: "Bachelor of Informatics",
            location: "Bandung, Indonesia",
            period: "Sep 2022 – Jan 2026",
            gpa: "3.85 / 4.00",
            coursework: [
                "Data Analysis",
                "Machine Learning",
                "Data Mining",
                "Artificial Intelligence",
                "Database Systems",
                "Statistics for Data Science",
                "Data Structures and Algorithms",
            ],
        },
        {
            institution: "SMAN 5 Semarang",
            degree: "Natural Sciences (Science Track)",
            location: "Semarang, Indonesia",
            period: "Jun 2019 – May 2022",
            gpa: null,
            coursework: [],
        },
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col gap-6 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Education</p>

                        <div className="flex flex-col divide-y divide-primary/10 border border-primary/10 rounded-xl overflow-hidden">
                            {educations.map((edu, i) => (
                                <div key={i} className="flex flex-col gap-3 p-5 sm:p-6">
                                    <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2">
                                        <div className="flex flex-col gap-0.5">
                                            <h5 className="font-medium text-primary">{edu.institution}</h5>
                                            <p className="text-sm text-secondary">
                                                {edu.degree} · {edu.location}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start xs:items-end gap-1.5 shrink-0">
                                            <span className="text-xs text-secondary whitespace-nowrap border border-primary/10 rounded-full px-3 py-1">
                                                {edu.period}
                                            </span>
                                            {edu.gpa && (
                                                <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 whitespace-nowrap">
                                                    GPA {edu.gpa}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {edu.coursework.length > 0 && (
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xs text-secondary uppercase tracking-widest">
                                                Relevant Coursework
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.coursework.map((course, ci) => (
                                                    <span
                                                        key={ci}
                                                        className="text-xs px-2.5 py-1 rounded-md border border-primary/10 text-secondary"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;