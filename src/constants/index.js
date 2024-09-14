import {
    backend,
    web,
    net,
    reactjs,
    html,
    css,
    javascript,
    typescript,
    tailwind,
    mssql,
    git,
    figma,
    docker,
    visplus,
    telekom,
    carhub,
    cashflare,
    pulse,
    sumsnap,
    software,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: software,
    },
  ];
  
  const technologies = [
    {
      name: ".NET",
      icon: net,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "MS SQL",
      icon: mssql,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software developer",
      company_name: "VIS Plus s.r.o.",
      icon: visplus,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Developing software solutions using .NET (C#, VB.NET) and WinForms for desktop applications",
        "Focusing on MS SQL for effective data management",
        "Experience with developing ERP system",
        "Communication with a customer",
      ]
    },
    {
      title: "React.js Developer",
      company_name: "DEUTSCHE TELEKOM",
      icon: telekom,
      iconBg: "#383E56",
      date: "August 2022 - September 2023",
      points: [
        "Developing and maintaining web cloud applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Pulse",
      description:"Pulse is an experimental Next.js project styled with Tailwind CSS, exploring modern web development techniques and next-gen web elements.",
      tags: [
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: pulse,
      source_code_link: "https://github.com/KuroiHikari/Pulse",
    },
    {
      name: "CashFlare",
      description:"Financial web app that lets users search companies, add them to a portfolio, and view detailed financial data like profiles, income statements, and balance sheets.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "cyan-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "mssql",
          color: "orange-text-gradient",
        },
      ],
      image: cashflare,
      source_code_link: "https://github.com/KuroiHikari/CashFlare",
    },
    {
      name: "CarHub",
      description: "This Next.js web app lets users search and explore car models, view detailed specs, and generate images from different angles, using data from various RapidAPI sources.",
      tags: [
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "cyan-text-gradient",
        },
      ],
      image: carhub,
      source_code_link: "https://github.com/KuroiHikari/CarHub",
    },
    {
      name: "SumSnap",
      description:"Sumz is a web app that generates concise article summaries from a URL, helping users quickly grasp key info. Built with Vite.js and React for fast performance.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "cyan-text-gradient",
        },
      ],
      image: sumsnap,
      source_code_link: "https://github.com/KuroiHikari/SumSnap",
    },
  ];
  
  export { services, technologies, experiences, projects };