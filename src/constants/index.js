import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "JavaScript",
      icon: web,
    },
    {
      title: "React",
      icon: mobile,
    },
    {
      title: "Node.Js",
      icon: backend,
    },
    {
      title: "TypeScript",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "JavaScript Developer",
      company_name: "Freelance/Upwork",
      icon: git,
      iconBg: "#383E56",
      date: " April 2022 - November 2022",
      points: [
        "Developing and maintaining web applications using React.js/Vue.js/PostgreSQL/MongoDB/Node.js/Express",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Beads",
      icon: git,
      iconBg: "#E6DEDD",
      date: "December 2022 - Mart 2023",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Maintenance of existing projects",
        "development of new solutions(using Vue, Vuex, TypeScript)",
        "bug fixing, code review",
      ],
    },
    {
      title: "JavaScript Developer",
      company_name: "StartUp",
      icon: git,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        "Developing and maintaining web applications",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Ivan knows his business well and always tries to learn better.",
      name: "Sara Lee",

      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Ivan is a very diligent and hardworking guy.",
      name: "Chris Brown",

      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Ivan, well done, keep up the good work! I'd love to see your next projects!",
      name: "Lisa Wang",

      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My work in git",
      description:
        "Click on the top right corner to view the profile",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

      ],
      image: carrent,
      source_code_link: "https://github.com/panifedov",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };
