import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// Font Awesome
const { FaReact } = FaIcons;

// Simple Icons (v5-compatible)
const {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,      // Replacement for SiJava
  SiSpring,       // Replacement for SiSpringboot
  SiPostgresql,
  SiMongodb,
  SiAmazon,       // Replacement for SiAmazonaws
  SiDocker,
  SiGraphql,
  SiJest,
  SiJavascript,
  SiPython,
  SiJenkins,
  SiGithub,
  SiMysql,
  SiCypress,
  SiTailwindcss
} = SiIcons;

const skillIcons = [
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "Java",
    icon: <SiOpenjdk />,
  },
  {
    name: "Spring",
    icon: <SiSpring />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "AWS",
    icon: <SiAmazon />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "Jenkins",
    icon: <SiJenkins />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
  },
  {
    name: "Jest",
    icon: <SiJest />,
  },
  {
    name: "Cypress",
    icon: <SiCypress />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
];

export default skillIcons;
