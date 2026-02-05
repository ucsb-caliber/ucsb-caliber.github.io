export const CONTENT = {
    nav: {
        logo: "UCSB Caliber",
        links: [
            // { label: "Instructors", href: "/instructors" },
            { label: "Research", href: "/research" },
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
                primary: "Meet the Team",
                primaryUrl: "/team",
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
        blog: [
            {
                title: "The Future of Mastery Learning",
                date: "Mar 15, 2024",
                summary: "Exploring how AI-driven feedback loops can accelerate student mastery in large-scale computer science courses.",
                readTime: "5 min read",
                slug: "#" // Placeholder
            },
            {
                title: "Bloom's Taxonomy in the Age of AI",
                date: "Feb 28, 2024",
                summary: "Revisiting educational taxonomies and how generative models can help align assessment with learning outcomes.",
                readTime: "4 min read",
                slug: "#" // Placeholder
            }
        ]
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
            // Leadership
            {
                name: "Dr. Diba Mirza",
                role: "Faculty",
                image: "/team/diba-mirza.png",
                bio: "Teaching Professor and Vice Chair"
            },
            {
                name: "Sai Vamsi Aliseti",
                role: "Graduate Student Mentor",
                image: "/team/sai-vamsi-aliseti.png",
                bio: ""
            },
            {
                name: "Nikhil Kapasi",
                role: "Team Lead",
                image: "/team/nikhil-kapasi.png",
                bio: ""
            },
            {
                name: "Derek Kirschbaum",
                role: "Development Team Lead",
                image: "/team/derek-kirschbaum.jpg",
                bio: ""
            },
            {
                name: "Aryaman Singh",
                role: "Development Team Lead",
                image: "/team/aryaman-singh.png",
                bio: ""
            },
            // R&D Team
            {
                name: "Mahasvin",
                role: "",
                image: "/team/mahasvin.jpeg",
                bio: ""
            },
            {
                name: "Mason Le",
                role: "",
                image: "/team/mason-le.png",
                bio: ""
            },
            {
                name: "Nandini Dharwadkar",
                role: "",
                image: "/team/nandini-dharwadkar.jpeg",
                bio: ""
            },
            {
                name: "Olivia He",
                role: "",
                image: "/team/olivia-he.jpg",
                bio: ""
            },
            {
                name: "Naz Oguz",
                role: "",
                image: "/team/naz-oguz.png",
                bio: ""
            },
            // Dev Team
            {
                name: "Austin Li",
                role: "",
                image: "/team/austin-li.jpg",
                bio: ""
            },
            {
                name: "Devesh Mamidi",
                role: "",
                image: "/team/devesh-mamidi.png",
                bio: ""
            },
            {
                name: "Jay Joo",
                role: "",
                image: "/team/jay-joo.jpg",
                bio: ""
            },
            {
                name: "Nathan Ngo",
                role: "",
                image: "/team/nathan-ngo.jpg",
                bio: ""
            },
            {
                name: "Nicholas Kamenica",
                role: "",
                image: "/team/nicholas-kamenica.jpeg",
                bio: ""
            },
            {
                name: "Pavani Kshirsagar",
                role: "",
                image: "/team/pavani-kshirsagar.jpg",
                bio: ""
            },
            {
                name: "Simon Yan",
                role: "",
                image: "/team/simon-yan.jpg",
                bio: ""
            },
            {
                name: "Vincent Nguyen",
                role: "",
                image: "/team/vincent-nguyen.jpg",
                bio: ""
            },
        ]
    },
    faq: [
        { question: "Is this a replacement for Canvas/Gradescope?", answer: "No. Caliber focuses on the content generation and mastery tracking. We integrate with existing LMSs for grade sync." },
        { question: "How much time does a pilot take?", answer: "We need about 1 hour of setup time and your course materials. We handle the heavy lifting of mapping." },
        { question: "Is the AI grading student work?", answer: "Caliber helps generate questions and provides preliminary feedback, but the instructor is always in the loop for final grading and review." },
    ],
    story: {
        title: "Our Story",
        subtitle: "Building the tools we wished we had.",
        content: [
            "UCSB Caliber started with a simple observation: course planning and student practice were disconnected. Instructors spent hours creating materials, and students spent hours practicing, but the link between *what was taught* and *what was practiced* was often lost in translation.",
            "Professor Diba Mirza and a team of dedicated Computer Science students came together to bridge this gap. We realized that by mapping learning outcomes directly to assignments, we could create a system where practice is always purposeful and instructors have clear visibility into student mastery.",
            "Today, Caliber is being built and tested right here at UCSB, designed by the very people who use it every day.",
        ],
    },
};
