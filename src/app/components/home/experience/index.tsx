"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const Experience = () => {
    const experiences = [
        {
            role: "IT & Full Stack Developer Intern",
            company: "Panti Wilasa Dr. Cipto Hospital",
            location: "Semarang, Central Java",
            period: "Jul 2025 – Aug 2025",
            bullets: [
                "Developed a Laravel-based Medical Check-Up (MCU) system used by 20+ staff, improving efficiency of clinical workflows and reporting.",
                "Built 17+ controller methods and 20+ RESTful API endpoints supporting participant management, authentication systems, analytics dashboards, and bulk medical data operations.",
                "Implemented structured validation across 40+ clinical data fields including laboratory, radiology, EKG, and specialist examination records to ensure medical data consistency and reliability.",
                "Designed and implemented efficient SQL Server queries with multi-table joins to support real-time analytics dashboards for hospital management.",
            ],
            tags: ["Laravel", "RESTful API", "SQL Server", "Full Stack", "Healthcare"],
        },
    ];

    const organizations = [
        {
            role: "Chief Organizer",
            company: "Leadership Training Rohani Kristen SMAN 5 Semarang",
            location: "Semarang, Indonesia",
            period: "Nov 2021 – Jan 2022",
            bullets: [
                "Led a 10-member organizing committee to deliver a leadership training program attended by 25 participants.",
                "Coordinated recruitment, scheduling, and collaboration with external speakers to ensure successful program execution.",
            ],
        },
        {
            role: "Member",
            company: "Google Developer Student Groups — Telkom University",
            location: "Bandung, Indonesia",
            period: "Dec 2023 – May 2024",
            bullets: [
                "Participated in 10+ technical webinars and workshops related to Google technologies, UI/UX development, and software project management.",
                "Collaborated with fellow developers to expand knowledge of modern software engineering and emerging technology trends.",
            ],
        },
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col gap-10 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">

                        {/* Work Experience */}
                        <div className="flex flex-col gap-6">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Work Experience
                            </p>
                            <div className="flex flex-col gap-6">
                                {experiences.map((exp, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-4 p-5 sm:p-6 rounded-xl border border-primary/10 bg-primary/[0.02]"
                                    >
                                        <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2">
                                            <div className="flex flex-col gap-0.5">
                                                <h5 className="font-medium text-primary">{exp.role}</h5>
                                                <p className="text-sm text-secondary">
                                                    {exp.company} · {exp.location}
                                                </p>
                                            </div>
                                            <span className="text-xs text-secondary whitespace-nowrap border border-primary/10 rounded-full px-3 py-1 w-fit">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <ul className="flex flex-col gap-2 pl-4 list-disc marker:text-violet-500">
                                            {exp.bullets.map((b, bi) => (
                                                <li key={bi} className="text-sm text-secondary leading-relaxed">
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.tags && (
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {exp.tags.map((tag, ti) => (
                                                    <span
                                                        key={ti}
                                                        className="text-xs px-2.5 py-1 rounded-md border border-primary/10 text-secondary"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Organizational Experience */}
                        <div className="flex flex-col gap-6">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Organizational Experience
                            </p>
                            <div className="flex flex-col divide-y divide-primary/10 border border-primary/10 rounded-xl overflow-hidden">
                                {organizations.map((org, i) => (
                                    <div key={i} className="flex flex-col gap-3 p-5 sm:p-6">
                                        <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2">
                                            <div className="flex flex-col gap-0.5">
                                                <h5 className="font-medium text-primary text-base">{org.role}</h5>
                                                <p className="text-sm text-secondary">
                                                    {org.company} · {org.location}
                                                </p>
                                            </div>
                                            <span className="text-xs text-secondary whitespace-nowrap border border-primary/10 rounded-full px-3 py-1 w-fit">
                                                {org.period}
                                            </span>
                                        </div>
                                        <ul className="flex flex-col gap-1.5 pl-4 list-disc marker:text-violet-500">
                                            {org.bullets.map((b, bi) => (
                                                <li key={bi} className="text-sm text-secondary leading-relaxed">
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;