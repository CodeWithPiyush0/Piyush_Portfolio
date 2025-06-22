const portfolioData = {
  personal: {
    name: "Piyush",
    email: "piyush0codes@gmail.com",
    phone: "+91-7764822206",
    location: "Mohali, India",
    linkedin: "piyush-kumar-9b9618289",
    github: "CodeWithPiyush0",
    title: "Frontend Developer & UI/UX Designer",
    summary: "Frontend Developer and UI/UX Designer skilled in React, JavaScript, PHP, Tailwind CSS, and Figma. Experienced in developing responsive web interfaces and full-stack applications using the MERN stack, with a strong focus on performance, accessibility, and user-centric design."
  },
  education: [
    {
      institution: "Chandigarh University",
      degree: "MCA (AIML)",
      score: "7.2 CGPA",
      period: "2023 - 2025"
    },
    {
      institution: "Nitishwar College, MuzaffarPur, Bihar",
      degree: "BCA",
      score: "80.78%",
      period: "2019 - 2022"
    }
  ],
  skills: {
    frontend: ["React", "Redux", "Angular", "Bootstrap", "Tailwind CSS", "WordPress],
    design: ["Figma", "User Research", "Wireframing", "Prototyping"],
    backend: ["Node.js", "Express.js", "PHP"],
    programming: ["Python", "JavaScript", "Java"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "Figma", "Tableau"]
  },
  projects: [
    {
      title: "AI-Powered YouTube Video Summarizer",
      subtitle: "Browser Extension",
      period: "May 2025 - Present",
      description: "Developed a cross-browser AI-powered YouTube extension using HTML, CSS, and JavaScript to summarize video content via ChatGPT, Gemini, and Claude.",
      features: [
        "Implemented dynamic UI components and user settings persistence using Chrome Extensions API",
        "Integrated transcript extraction and built scalable, modular code structure",
        "Support multi-platform AI summarization features"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Chrome API", "AI APIs"],
      status: "active"
    },
    {
      title: "SOLLO",
      subtitle: "Dynamic Shoes E-commerce Website",
      period: "May 2025 - Present",
      description: "Designed and developed a feature-rich shoe e-commerce platform inspired by Puma, implementing core functionalities like product listing, shopping cart, and user login.",
      features: [
        "Built responsive UI components ensuring mobile-friendly experience",
        "Integrated backend with dynamic content management",
        "Product filtering capabilities for real-time shopping interactions"
      ],
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      status: "active"
    },
    {
      title: "Employee Management System",
      subtitle: "MERN Stack Application",
      period: "January 2025 - March 2025",
      description: "Built a full-stack employee management platform with real-time task tracking and secure role-based access.",
      features: [
        "Integrated dynamic dashboards for admin insights and live status updates",
        "Added JWT-based authentication and user feedback prompts",
        "OpenAI integration for smart task suggestions"
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "OpenAI"],
      status: "completed"
    },
    {
      title: "TuneWave",
      subtitle: "Music Streaming Web App",
      period: "August 2024 - November 2024",
      description: "Designed a responsive, single-page music streaming platform with custom JS audio player.",
      features: [
        "Integrated AI-based song suggestion feature using track metadata",
        "Optimized load times and user experience",
        "Increased engagement and time-on-site by 30%"
      ],
      tech: ["HTML", "CSS", "JavaScript", "OpenAI"],
      status: "completed"
    }
  ]
};

export default portfolioData;
