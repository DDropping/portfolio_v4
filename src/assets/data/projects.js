import boardRackv1 from "../images/boardrackv1.png";
import boardrackv2 from "../images/boardrackv2.png";
import gatorrent from "../images/gatorrent.png";
import portfoliov2 from "../images/portfoliov2.png";
import samsdesign from "../images/samsdesign.png";
import sortvis from "../images/sortvis.png";

export default [
  {
    name: "BoardRack v2",
    description:
      "New/used surfboard marketplace that allows users to buy from, sell to and chat with others locally.",
    imgSrc: boardrackv2,
    websiteURL: "https://boardrack.dev/",
    githubURL: "https://github.com/DDropping/BoardRack_v2",
    technologies: [
      "React",
      "Redux",
      "Next.js",
      "Styled Components",
      "Vercel",
      "Ant-Design",
      "Axios",
      "JWT",
    ],
  },
  {
    name: "BoardRack v1",
    description:
      "Classified Advertisement Website to buy and sell new and used surfboards, or contact a shaper to create a custom board",
    imgSrc: boardRackv1,
    websiteURL: "",
    githubURL: "https://github.com/DDropping/BoardRack",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Sass",
      "Axios",
      "JWT",
    ],
  },
  {
    name: "GatorRent",
    description:
      "University Project: Real-estate marketplace for landlords to post student housing options.",
    imgSrc: gatorrent,
    websiteURL: "",
    githubURL: "",
    technologies: [
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    name: "Portfolio",
    description:
      "Personal portfolio to display skills and past projects. Built with React, Next.js, Framer-motion, and styled-components.",
    imgSrc: portfoliov2,
    websiteURL: "",
    githubURL: "https://github.com/DDropping/portfolio-v3",
    technologies: ["React", "Framer Motion", "Styled Components"],
  },
  {
    name: "SamsDesigns",
    description:
      "Ecommerce site for selling shirts designed by friends. Built with Gatsby, React, SASS/SCSS, Node, Contentful.",
    imgSrc: samsdesign,
    websiteURL: "",
    githubURL: "https://github.com/DDropping/SamsDesigns",
    technologies: ["React", "Gatsby", "Stripe", "Contentful"],
  },
  {
    name: "SortVis",
    description:
      "Interactive sorting algorithm visualizer build with React and Ant Design.",
    imgSrc: sortvis,
    websiteURL: "",
    githubURL: "https://github.com/DDropping/SortingVisualizer",
    technologies: ["React", "Ant Design", "Styled Components"],
  },
];
