import { GridItem } from "@/types";
import { BiLogoPostgresql, BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io";
import { RiCodeView, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const techStack: GridItem[] = [
  {
    id: 1,
    title: "React & Next.js",
    description: "Primary frontend framework for building responsive web apps",
    icon: RiCodeView,
  },
  {
    id: 2,
    title: "Node.js",
    description: "Backend runtime for server-side logic",
    icon: IoLogoNodejs,
  },
  {
    id: 3,
    title: "TypeScript",
    description: "Typed JavaScript for safer code",
    icon: BiLogoTypescript,
  },
  {
    id: 4,
    title: "Express",
    description: "Backend web framework for Node.js to build APIs and server logic",
    icon: SiExpress,
  },
  {
    id: 5,
    title: "Supabase",
    description: "Backend as a Service (BaaS) for authentication and DB",
    icon: RiSupabaseFill,
  },
  {
    id: 6,
    title: "Redux Toolkit",
    description: "State management library",
    icon: BiLogoRedux,
  },
  {
    id: 7,
    title: "JWT",
    description: "Web Tokens for authentication",
    icon: SiJsonwebtokens,
  },
  {
    id: 8,
    title: "Framer Motion",
    description: "Animation library for interactive UIs",
    icon: TbBrandFramerMotion,
  },
  {
    id: 9,
    title: "MongoDB",
    description: "NoSQL database",
    icon: SiMongodb,
  },
  {
    id: 10,
    title: "PostgreSQL",
    description: "Relational SQL database",
    icon: BiLogoPostgresql,
  },
  {
    id: 11,
    title: "Tailwind CSS",
    description: "CSS framework for rapid development",
    icon: RiTailwindCssFill,
  },
];


export const projects = [
  {
    id: '1',
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/metaversus.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: '2',
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience witwwwwwwwwwwwwwwwwwwwwwwwwww jdowjd wj odjwo jwoidjwo jwdo ijh Yoom. Seamlessly connect with colleagues and friends.",
    img: "/noted.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: '3',
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/quiz-app.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: '4',
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/shoes-site.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
];