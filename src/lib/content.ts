export const CONTENT = {
    nav: {
        logo: "UCSB Caliber",
        links: [
            // { label: "Instructors", href: "/instructors" },
            { label: "Product", href: "/product" },
            // { label: "Research", href: "/research" }, // Optional
            { label: "Team", href: "/team" },
        ],
        cta: "Request a Pilot",
    },
    common: {
        links: {
            github: "https://github.com/ucsb-caliber", // Placeholder
            contactEmail: "nkapasi@ucsb.edu",
            // pilotFormUrl removed
            joinTeamFormUrl: "https://forms.gle/YOUR_TEAM_FORM_ID", // Placeholder
        },
    },
    home: {
        hero: {
            headline: "Bringing Intelligence to the Lecture Hall",
            subheadline: "Outcome mapping, assignment generation, and mastery tracking in one workflow",
            ctas: {
                primary: "View Product",
                primaryUrl: "/product",
            },
        },
        credibility: [
            "Built at UCSB",
            "Designed with Course Staff",
            "Evidence-Informed Assessment",
        ],
        features: [
            {
                title: "Course Planning Workspace",
                description: "Upload your syllabus and materials. We'll help you map learning outcomes to every lecture and assignment.",
                icon: "Map",
            },
            {
                title: "Assignment Generation",
                description: "Turn lecture notes into practice problems and exam questions, automatically tagged by Bloom's level.",
                icon: "FileText",
            },
            {
                title: "Mastery Tracking",
                description: "Give students targeted reps based on what they've mastered, not just what's due next.",
                icon: "Target",
            },
        ],
        timeline: {
            title: "How it works",
            steps: [
                { title: "Upload & Collected", description: "Bring your syllabus, slides, and lecture notes." },
                { title: "Map Outcomes", description: "Tag content with skills and Bloom's taxonomy levels." },
                { title: "Generate & Review", description: "Create assignment sets and verify quality with AI assistance." },
                { title: "Deliver Practice", description: "Students get a clean interface for targeted practice." },
                { title: "Track & Iterate", description: "See mastery data in real-time and adjust your teaching." },
            ],
        },
        mvpBanner: {
            title: "Current Status: MVP Development",
            description: "Our end-of-quarter goal is a fully scoped instructor frontend and a minimal student frontend for pilots.",
        },
    },
    instructors: {
        title: "For Instructors",
        painPoints: [
            { title: "Content Overload", description: "Turning weeks of lecture content into consistent practice is time-consuming." },
            { title: "Misaligned Outcomes", description: "It's hard to ensure every exam question relies only on taught skills." },
            { title: "Black Box Progress", description: "Grades don't tell you exactly which concepts students are struggling with." },
        ],
        outputs: [
            "Structured Course Plan & Outcome Map",
            "Question Bank tagged by Skill/Bloom's",
            "Ready-to-deploy Assignment Sets",
            "Real-time Mastery Insights Dashboard",
        ],
    },
    students: {
        title: "For Students",
        subtitle: "Clear, targeted practice without the busywork.",
        features: [
            { title: "Targeted Reps", description: "Practice problems selected based on what you need to master." },
            { title: "Clear Progress", description: "See exactly which skills you've mastered and what's left." },
            { title: "No Clutter", description: "A minimal interface focused purely on learning." },
        ],
    },
    team: {
        title: "Our Team",
        expectations: "We build fast, ship often, and care deeply about academic integrity and user experience.",
        members: [
            {
                name: "Dr. Diba Mirza",
                role: "Faculty",
                image: "/Dr,DibaMirza.png",
                bio: "Associate Professor of Teaching, UCSB Computer Science."
            },
            {
                name: "Nikhil Kapasi",
                role: "Student",
                image: "/Nikhil Kapasi.png", // Note: Filename has space, handled in src/public? Check copy
                bio: "UCSB Computer Science."
            },
            {
                name: "Derek Kirschbaum",
                role: "Student",
                image: "/DerekKirschbaum.png",
                bio: "UCSB Computer Science."
            },
            {
                name: "Aryaman Singh",
                role: "Student",
                image: "/AryamanSingh.png",
                bio: "UCSB Computer Science."
            },
            {
                name: "Sai Vamsi Aliseti",
                role: "Student",
                image: "/SaiVamsiAliseti.png",
                bio: "UCSB Computer Science."
            },
        ]
    },
    faq: [
        { question: "Is this a replacement for Canvas/Gradescope?", answer: "No. Caliber focuses on the content generation and mastery tracking. We integrate with existing LMSs for grade sync." },
        { question: "How much time does a pilot take?", answer: "We need about 1 hour of setup time and your course materials. We handle the heavy lifting of mapping." },
        { question: "Is the AI grading student work?", answer: "Caliber helps generate questions and provides preliminary feedback, but the instructor is always in the loop for final grading and review." },
    ],
};
