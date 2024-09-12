import {
    backend,
    desktop,
    game,
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
    carrent,
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
      title: "Desktop App Developer",
      icon: desktop,
    },
    {
      title: "Game Developer",
      icon: game,
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Summarizer",
      description:
        "An open-source article summarizer that transforms lengthy articles into clear and concise summaries",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "clientbased",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };