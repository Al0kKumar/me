import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alok Kumar",
  initials: "ak",
  url: "https://dillion.io",
  location: "Delhi,India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
  "Software Engineer.",
  summary:
"I'm a software developer driven by curiosity and a relentless grind. I love building, experimenting, and pushing limits to create impactful products. Always learning, always improving—it's all about the process. 🚀",
  avatarUrl: "/me.png",
  skills: [
    "C",
    "C++",
    "Python",
    "Go",
    "Typescript",
    "React",
    "Tailwind CSS",
    "ShadCN",
    "Next.js",
    "Node.js",
    "Postgres",
    "Prisma",
    "MongoDB",
    "Docker",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "mishraalok189381@gmail.com",
    tel: "+8700629012",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Al0kKumar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alok-kumar09/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Al0k_Mishra_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mishraalok189381@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
  ],
  education: [
    {
      school: "Maharishi Dayanand University",
      href: "https://mdu.ac.in/default.aspx",
      degree: "B.Tech (CSE)",
      logoUrl: "/buildspace.jpg",
      start: "2021",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "DSA Problem Agregator",
      href: "https://dsa-project-ten.vercel.app/",
      active: true,
      description:
        "DSA Problem Aggregator is a web application designed to streamline coding interview preparation with structured problem filtering.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://dsa-project-ten.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Al0kKumar/dsa-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/1.png",
    },
    {
      title: "Opti-Xcel",
      href: "https://opti-xcel.vercel.app/",
      active: true,
      description:
        "Opti-Xcel is an advanced image conversion and compression tool, allowing users to convert images effortlessly while maintaining quality.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Cloudinary",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://opti-xcel.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Al0kKumar/OptiXcel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/2.png",
    },
    {
      title: "Real-Time Location Tracker",
      href: "https://real-time-location-b1kg.onrender.com/",
      active: true,
      description:
        "Built a Real-Time Location Tracker using Socket.io, enabling seamless live location updates with minimal latency.",
      technologies: [
        "Javascript",
        "EJS",
        "Socket.io",
        "Nodejs",
        "Express",
        "Render"
      ],
      links: [
        {
          type: "Website",
          href: "https://real-time-location-b1kg.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Al0kKumar/Real-Time-location",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/3.png",
    },
    {
      title: "LinkedIn Post Generator",
      href: "https://llm-smoky.vercel.app/",
      active: true,
      description:
        "Developed an AI-powered LinkedIn Post Generator with LLMs, allowing users to create engaging posts in various tones",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI API",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://llm-smoky.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Al0kKumar/llm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/4.png",
    },
  ],
  hackathons: [
  
  ],
} as const;
