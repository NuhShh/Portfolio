"use client";
import Image from "next/image"
import Link from "next/link"
import { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LockIcon } from "lucide-react";

type Project = {
    title: string;
    description: string;
    highlights: string[];
    tags: string[];
    images: string[];
    githubUrl: string;
    demoUrl?: string;
    category: string;
    paperUrl?: string;
    classifiedNote?: string;
};

const featuredProjects: Project[] = [
    {
        title: "LightGCN — Deep Learning Based Recommendation System",
        description:
            "Applied Light Graph Convolutional Network (LightGCN) to model user–item interactions on the Amazon Reviews dataset across multiple product categories.",
        highlights: [
            "Achieved an average improvement of +116% in Recall@20 and +101% in NDCG@20 compared to Item-Based Collaborative Filtering.",
            "Analyzed trade-offs between recommendation accuracy and diversity in large-scale e-commerce environments.",
        ],
        tags: [
            "Python", 
            "PyTorch", 
            "LightGCN", 
            "Graph Neural Networks", 
            "Recommendation System", 
            "Amazon Reviews", 
            "Machine Learning", 
            "Deep Learning", 
            "Collaborative Filtering", 
            "E-commerce", 
            "Research Paper"
        ],
        images: [
            "/images/feature-work/lightgcn1.png",
            "/images/feature-work/lightgcn2.png", 
            "/images/feature-work/lightgcn3.png",
            "/images/feature-work/lightgcn4.png",
        ],
        githubUrl: "https://github.com/NuhShh/LightGCN-Amazon-Product-Recommendation",
        paperUrl: "https://ieeexplore.ieee.org/document/11399522",
        category: "Recommender System",
    },
    {
        title: "Breast Cancer Classification with Stacking Ensemble and Streamlit UI",
        description:
            "This project applies machine learning to classify breast cancer cases (benign vs malignant) using a stacking ensemble method and provides an interactive web app via Streamlit..",
        highlights: [
            "Developed a web-based breast cancer classification system using a stacking ensemble model, achieving 97.36% accuracy on a public Kaggle dataset.",
            "Implemented a full ML pipeline including data preprocessing, model training, evaluation, and deployment using Python and Streamlit Cloud.",
        ],
        tags: [
            "Python",
            "Stacking Ensemble",
            "Machine Learning",
            "Classification",
            "Breast Cancer",
            "Streamlit",
            "Web App",
            "Model Deployment",
            "Kaggle Dataset",
            "ML Pipeline",
            "Healthcare AI",
            "Data Preprocessing",
            "Medical Data"
        ],
        images: [
            "/images/feature-work/breast4.png",
            "/images/feature-work/breast1.png",
            "/images/feature-work/breast2.png",
            "/images/feature-work/breast3.png",
        ],
        githubUrl: "https://github.com/NuhShh/breast-cancer-classification",
        demoUrl: "https://breast-cancer-classification-nuhshh.streamlit.app/",
        category: "Classification Project",
    },
    {
        title: "Olympic Participation Analysis",
        description:
            "This project analyzes over 120 years of Olympic history using the “120 Years of Olympic History: Athletes and Results” dataset from Kaggle, covering around 270,000 athlete records from 1896 to 2016.",
        highlights: [
            "Designed and developed the study case for data visualization, transforming raw Olympic data into clear, structured, and insightful visual narratives to support the team’s analytical findings.",
            "Conducted Exploratory Data Analysis (EDA) to identify patterns, trends, and key insights related to athlete demographics, participation growth, and medal distribution in the Summer Olympic Games.",
        ],
        tags: [
            "Data Visualization",
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Jupyter Notebook",
            "Olympic Data",
            "Interactive Charts",
            "Exploratory Data Analysis (EDA)",
            "Historical Analysis",
            "Demographics",
            "Sports Analytics",
            "Statistics",
            "Kaggle Dataset",
            "Github Pages"
        ],
        images: [
            "/images/feature-work/olympic1.png",
            "/images/feature-work/olympic2.png",
            "/images/feature-work/olympic3.png",
            "/images/feature-work/olympic4.png",
            "/images/feature-work/olympic5.png",
        ],
        githubUrl: "https://github.com/yayaaay/Tugas-Besar-Visualisasi-data-Stream-lit-",
        demoUrl: "https://yayaaay.github.io/The-120-Year-Olympic-Journey/",
        category: "Data Visualization",
    },
    {
        title: "Diabetes Classification",
        description:
            "This project focused on building predictive models for diabetes diagnosis using multiple machine learning algorithms. It involved data preprocessing, model training, evaluation, and performance comparison to identify the most effective approach for accurate prediction.",
        highlights: [
            "Built and evaluated multiple machine learning models (Decision Tree, Random Forest, Logistic Regression) to predict diabetes risk using health-related data.",
            "Achieved 89% accuracy with Random Forest through EDA, missing value handling, and dataset balancing using oversampling techniques.",
        ],
        tags: [
            "Python",
            "Machine Learning",
            "Random Forest",
            "Decision Tree",
            "Logistic Regression",
            "Classification",
            "Diabetes Prediction",
            "Health Data",
            "Data Preprocessing",
            "Missing Value Handling",
            "Oversampling",
            "Model Evaluation",
            "Model Comparison",
            "Exploratory Data Analysis (EDA)"
        ],
        images: [
            "/images/feature-work/diabetes1.png",
            "/images/feature-work/diabetes2.png",
            "/images/feature-work/diabetes3.png",
        ],
        githubUrl: "https://github.com/NuhShh/diabetes-prediction",
        category: "Classification Project",
    },
    {
        title: "IoT Network Attacks Classification",
        description:
            "This project focused on anomaly and attack detection in IoT network environments using the RT-IoT2022 dataset from the UCI Machine Learning Repository. The study classified network traffic into normal patterns and multiple attack types, then implemented and compared three metaheuristic-optimized neural network models.",
        highlights: [
            "Conducted EDA, preprocessing, feature engineering, and class balancing on IoT network traffic data to prepare a robust multi-class classification dataset.",
            "Implemented and compared MLP models optimized using PSO, GA, and GWO to evaluate their performance in detecting IoT attack patterns.",
            "Performed in-depth attack pattern analysis to interpret model results, identify discriminative features, and explain classification performance through statistical and confusion matrix evaluation.",
        ],
        tags: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Metaheuristics",
            "Neural Networks",
            "Multi-class Classification",
            "EDA",
            "Feature Engineering",
            "PSO",
            "GA",
            "GWO",
            "IoT Security",
            "Network Traffic Analysis",
            "Anomaly Detection",
        ],
        images: [
            "/images/feature-work/iot4.png",
            "/images/feature-work/iot1.png",
            "/images/feature-work/iot2.png",
            "/images/feature-work/iot3.png",
            "/images/feature-work/iot5.png",
        ],
        githubUrl: "https://github.com/NuhShh/IoT-Network-Attacks-Classification",
        category: "Classification Project",
    },
    {
        title: "Swanlake - Tech Review Platform",
        description:
            "Swanlake is a web and mobile-based application designed to help users explore and review the latest technologies. With so many products on the market, this platform aims to guide users in making informed decisions through community-driven insights.",
        highlights: [
            "Led the development process as Lead Developer, coordinating technical decisions and ensuring smooth collaboration between frontend and backend teams.",
            "Developed and maintained the backend using Laravel 12 (MVC), built RESTful APIs, and handled MySQL database design and optimization.",
            "Implemented core features such as search and filter functionality, dynamic product comparison, user comments, authentication, and admin management tools.",
            "Ensured seamless integration between Flutter (mobile) and React.js (web) with backend services, maintaining consistent performance and functionality across both platforms.",
        ],
        tags: [
            "Full Stack Development",
            "Laravel",
            "RESTful API",
            "MySQL",
            "Flutter",
            "React.js",
            "Mobile App",
            "Web App",
            "Authentication",
            "Admin Tools",
            "Product Comparison",
            "Community Platform"
        ],
        images: [
            "/images/feature-work/swanlake3.png",
            "/images/feature-work/swanlake1.png",
            "/images/feature-work/swanlake2.png",
        ],
        githubUrl: "https://github.com/NuhShh/SwanlakeABP",
        category: "Full Stack Development",
    },
    {
        title: "Medical Check Up System",
        description:
            "MCU System is a web application specifically developed to manage the Medical Check-Up (MCU) process at RS Panti Wilasa Dr. Cipto. The system enables medical staff to record, manage, and generate printable health examination reports for MCU participants from various companies.",
        highlights: [
            "Independently designed and developed a Laravel-based Medical Check-Up (MCU) management system intended for use by 20+ medical staff and administrative users, covering end-to-end clinical and reporting workflows.",
            "Built 17+ controller methods and 20+ RESTful API endpoints supporting participant management, analytics dashboards, authentication, and bulk data operations.",
            "Implemented complex medical data handling (laboratory, radiology, EKG, specialist examinations) with data validation across 40+ clinical fields, ensuring data consistency and integrity.",
            "Optimized SQL Server queries and joins across multiple tables to support real-time analytics dashboards and reporting for hospital management.",
        ],
        tags: [
            "Laravel",
            "Full Stack Development",
            "RESTful API",
            "SQL Server",
            "Medical System",
            "Data Validation",
            "Healthcare",
            "Admin Dashboard",
            "Clinical Data",
            "Authentication",
            "Reporting"
        ],
        images: [
            "/images/feature-work/mcu1.png",
            "/images/feature-work/mcu2.png",
            "/images/feature-work/mcu3.png",
            "/images/feature-work/mcu4.png",
            "/images/feature-work/mcu5.png",
        ],
        githubUrl: "https://github.com/NuhShh/mcu-web",
        category: "Full Stack Development",
        classifiedNote: "Source code is classified for institutional use."
    },
    // ── Add more projects below by copying the object above ──────────────────
];

// ── Carousel component (no external library needed) ──────────────────────────
const ImageCarousel = ({
    images,
    title,
    githubUrl,
}: {
    images: string[];
    title: string;
    githubUrl: string;
}) => {
    const [current, setCurrent] = useState(0);

    const prev = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    }, [images.length]);

    const next = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, [images.length]);

    // Single image — render tanpa chrome carousel
    if (images.length <= 1) {
        return (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg block">
                <Image
                    src={images[0]}
                    alt={title}
                    width={720}
                    height={400}
                    className="w-full h-72 sm:h-96 object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                />
            </Link>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-lg select-none">
            {/* Slides */}
            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                        <Image
                            src={src}
                            alt={`${title} — image ${i + 1}`}
                            width={720}
                            height={400}
                            className="w-full h-72 sm:h-96 object-scale-down"
                        />
                    </div>
                ))}
            </div>

            {/* Prev button */}
            <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white border border-primary/10 shadow-sm transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            {/* Next button */}
            <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white border border-primary/10 shadow-sm transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                        aria-label={`Go to image ${i + 1}`}
                        className={`rounded-full transition-all duration-200 ${
                            i === current
                                ? "w-4 h-1.5 bg-white"
                                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>

            {/* Counter */}
            <span className="absolute top-2.5 right-3 text-xs text-white/80 font-medium bg-black/30 rounded-full px-2 py-0.5">
                {current + 1} / {images.length}
            </span>
        </div>
    );
};

// ── Icons ─────────────────────────────────────────────────────────────────────
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const PaperIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

// ── Main component ────────────────────────────────────────────────────────────
const FeaturedWork = () => {
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    {/* Section header */}
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                        </div>
                    </div>

                    {/* Project cards */}
                    <div className="flex flex-col border-t border-primary/10 max-w-3xl mx-auto divide-y divide-primary/10">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group flex flex-col gap-5 p-4 sm:p-7 transition-colors hover:bg-primary/[0.02]"
                            >
                                {/* Carousel or single image */}
                                <ImageCarousel
                                    images={project.images}
                                    title={project.title}
                                    githubUrl={project.githubUrl}
                                />

                                {/* Content */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-xs tracking-widest text-violet-600 uppercase font-medium">
                                            {project.category}
                                        </span>
                                        <h4 className="leading-snug">{project.title}</h4>
                                    </div>

                                    <p className="text-secondary text-sm sm:text-base">{project.description}</p>

                                    {project.highlights.length > 0 && (
                                        <ul className="flex flex-col gap-1.5 pl-4 list-disc marker:text-violet-500">
                                            {project.highlights.map((point, i) => (
                                                <li key={i} className="text-secondary text-sm sm:text-base">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {project.tags.map((tag, i) => (
                                            <Badge key={i} variant="outline" className="py-1 px-2.5 rounded-md">
                                                <p className="text-xs font-medium text-primary">{tag}</p>
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 mt-1">
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm text-primary hover:text-violet-600 transition-colors border border-primary/10 rounded-full py-1.5 px-3.5 hover:border-violet-300"
                                        >
                                            <GitHubIcon />
                                            GitHub
                                        </Link>

                                        {project.demoUrl && (
                                            <Link
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-sm text-primary hover:text-violet-600 transition-colors border border-primary/10 rounded-full py-1.5 px-3.5 hover:border-violet-300"
                                            >
                                                <ExternalLinkIcon />
                                                Live Demo
                                            </Link>
                                        )}

                                        {project.paperUrl && (
                                            <Link
                                                href={project.paperUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-sm text-primary hover:text-violet-600 transition-colors border border-primary/10 rounded-full py-1.5 px-3.5 hover:border-violet-300"
                                            >
                                                <PaperIcon />
                                                Paper
                                            </Link>
                                        )}

                                        {project.classifiedNote && (
                                            <p className="text-xs text-secondary flex items-center gap-1.5 mt-1">
                                                <LockIcon />
                                                {project.classifiedNote}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;