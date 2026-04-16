import qkartImg from "../assets/Qkart.png";
import qtripImg from "../assets/QTrip.png";
import qtifyImg from "../assets/Qtify.png";
import ttsImg from "../assets/Text to speech.png";

export const personal = {
  name: "Sandhya D",
  role: "Frontend Developer",
  tagline: "Building data-driven UIs that turn complexity into clarity.",
  summary:
    "Full-Stack Developer with 3+ years of experience in React.js, building scalable dashboards and data-driven applications, with strong hands-on expertise in backend development, API integration, and end-to-end feature delivery. Currently developing AI-powered multi-agent systems using ADK to enable intelligent automation, while leveraging tools like Looker and Kibana to deliver real-time insights, improve reporting accuracy, and enhance overall user experience and operational efficiency.",
  email: "dhanpalsandhya7@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandhya",
  github: "https://github.com/sandhya0430",
  phone: "+91 6379067235",
};

export const skills = {
  Frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Python", "REST APIs", "PostgreSQL", "SQL"],
  Tools: ["GitHub Actions", "GitLab", "JIRA", "Kibana", "Elasticsearch"],
  "AI Tools & Frameworks": ["Google ADK", "RAG", "Cursor IDE", "Claude", "Lovable"],
};

export const projects = [
  // ── WORK ──
  {
    title: "LLM Observability 🔭",
    description: "React.js dashboards to monitor LLM usage, cost, and performance across multiple AI tools in real time.",
    tech: ["React.js", "Kibana", "REST APIs", "Python"],
    features: [
      "Real-time LLM cost & usage monitoring",
      "Per-user aggregation logic in Python",
      "Kibana-powered data consistency views",
    ],
    github: null, live: null, image: null, type: "work",
  },
  {
    title: "Banking Loan Automation UI",
    description: "Bank loan automation UI to approve or reject loan applications based on salary and expenses.",
    tech: ["React.js", "Node.js", "PostgreSQL", "REST APIs"],
    features: [
      "Approve or reject loans based on salary & expenses",
      "React.js frontend for smooth, responsive UX",
      "API integration for automated loan decision-making",
    ],
    github: null, live: null, image: null, type: "work",
  },
  {
    title: "Eureka AI — Multi-Agent Platform",
    description: "Responsive landing page and secure login interface for an AI multi-agent platform built with Google ADK.",
    tech: ["React.js", "Google ADK", "HTML", "CSS"],
    features: [
      "Responsive landing page with clean UI patterns",
      "Secure login with component-based design",
      "Enhanced data security & user experience",
    ],
    github: null, live: null, image: null, type: "work",
  },
  {
    title: "EVA — AI Assistant",
    description: "AI assistant system built with Google's Agent Development Kit (ADK). Acts as an executive assistant managing calendar, email, and productivity tasks.",
    tech: ["Python", "Google ADK", "REST APIs"],
    features: [
      "Executive assistant for calendar & email management",
      "Multi-agent pipeline for task automation",
      "Built on Google ADK framework",
    ],
    github: null, live: null, image: null, type: "work",
  },
  {
    title: "Conversational BI",
    description: "Multi-agent Conversational BI system using a Google ADK-powered orchestrator, integrated with Looker via MCP for structured data access.",
    tech: ["Python", "Google ADK", "Looker", "MCP"],
    features: [
      "Interprets natural language queries via Looker's semantic layer",
      "Delegates to specialized agents: Report, Trend, Insight",
      "Generates scalable, context-aware analytical insights",
      "Exposes insights via API powering a chatbot interface",
    ],
    github: null, live: null, image: null, type: "work",
  },
  // ── PERSONAL ──
  {
    title: "QKart — E-Commerce Platform",
    description: "Full-featured e-commerce platform with product listing, cart management, and checkout flow.",
    tech: ["React.js", "REST APIs", "Material UI", "JavaScript"],
    features: [
      "Product search & filter with debounced API calls",
      "Persistent cart with local storage sync",
      "Checkout flow with address management",
    ],
    github: "https://github.com/sandhya0430/dhanpalsandhya7-ME_QKART_FRONTEND_V2",
    live: "https://qkart-hazel.vercel.app",
    image: qkartImg,
    type: "personal",
  },
  {
    title: "QTrip Dynamic — Travel Booking App",
    description: "Dynamic travel adventures booking app with city exploration, multi-filter, and reservation flow.",
    tech: ["React.js", "REST APIs", "Bootstrap", "JavaScript"],
    features: [
      "City-based adventure discovery",
      "Multi-filter: category, duration, price",
      "Dynamic reservation with date picker",
    ],
    github: "https://github.com/sandhya0430/dhanpalsandhya7-ME_QTRIP_DYNAMIC",
    live: "https://qtrip-dynamic-1234.vercel.app",
    image: qtripImg,
    type: "personal",
  },
  {
    title: "QTify — Music Streaming UI",
    description: "Spotify-inspired music streaming frontend with album browsing, carousels, and genre-based filtering.",
    tech: ["React.js", "MUI", "REST APIs", "CSS3"],
    features: [
      "Horizontal song/album carousel with swipe",
      "Genre-based song filtering tabs",
      "Reusable Card & Slider components",
    ],
    github: "https://github.com/sandhya0430/Qtify",
    live: "https://qtify-pi-six.vercel.app",
    image: qtifyImg,
    type: "personal",
  },
  {
    title: "Text-to-Speech Converter",
    description: "Browser-based TTS tool using the Web Speech API with voice, speed, and pitch controls.",
    tech: ["React.js", "Web Speech API", "CSS3"],
    features: [
      "Voice selection from system voices",
      "Adjustable speed & pitch controls",
      "Play / Pause / Stop controls",
    ],
    github: "https://github.com/sandhya0430/text-to-speech",
    live: "https://text-to-speech-orcin.vercel.app",
    image: ttsImg,
    type: "personal",
  },
];

export const experience = [
  {
    company: "SquareShift",
    role: "Software Developer",
    period: "Jan 2024 – Present",
    location: "Chennai, IN",
    projects: [
      {
        name: "LLM Observability Platform",
        points: [
          "Elevated performance & cost visibility by deploying React.js dashboards to monitor LLM usage & expenditures.",
          "Transformed real-time data visualization using React, REST APIs & Elasticsearch, driving enhanced decision-making.",
          "Refined per-user usage & cost aggregation logic using Python across multiple AI tools, improving reporting accuracy.",
          "Elevated user experience using Kibana dashboards & JavaScript frameworks to validate frontend data consistency.",
        ],
      },
      {
        name: "Eureka AI — Multi-Agent Platform (Google ADK)",
        points: [
          "Developed a responsive landing page using React.js, HTML, and CSS with clean UI patterns.",
          "Revamped secure login interface using React.js & component-based design to enhance data security & UX.",
        ],
      },
      {
        name: "Tableau to Looker Migration",
        points: [
          "Optimized data visualization by recreating Tableau dashboards in Looker, streamlining decision-making.",
          "Enhanced dashboard accuracy using Tableau for in-depth data validation & filter logic verification.",
        ],
      },
      {
        name: "Banking Report Automation UI",
        points: [
          "Built a React.js frontend for bank operations teams to schedule, preview, and download SQL-generated reports.",
          "Connected to Node.js + PostgreSQL backend to run parameterized queries based on date range, account type, region.",
          "Reduced report turnaround from 2 days to on-demand, improving operational efficiency for trade settlement teams.",
        ],
      },
    ],
  },
  {
    company: "Concentrix Catalyst",
    role: "Software Developer",
    period: "Mar 2022 – May 2023",
    location: "Chennai, IN",
    projects: [
      {
        name: "Enterprise Banking Trade Platform",
        points: [
          "Developed production-grade frontend features for an enterprise banking trade platform using React.js.",
          "Crafted responsive UI components using HTML, CSS & JavaScript Bootstrap to enhance layout readability.",
          "Strengthened system reliability by engaging backend & QA teams through SQL databases & JIRA.",
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science Engineering",
    institution: "Sathyabama Institute of Science and Technology",
    period: "Jun 2018 – May 2022",
    location: "Chennai, IN",
    cgpa: "9.1",
  },
];

export const certifications = [
  "Google Data Analytics Associate Practitioner",
  "Crio.Do MERN Stack Developer Certification",
];
