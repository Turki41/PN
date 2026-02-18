import { GridItem } from "@/types";
import { BiLogoPostgresql, BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io";
import { RiCodeView, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Technologies", link: "#technologies" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
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
    title: "PostrgeSQL",
    description: "Relational SQL database for structured data",
    icon: BiLogoPostgresql,
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
    title: "Express",
    description: "backend framework",
    icon: SiExpress,
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
    id: 1,
    title: "ClipRoom",
    des: "ClipRoom is a video recording and sharing platform for capturing, uploading, and managing screen recordings and video clips.",
    img: "/cliproom.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase.svg", "/postgresql.svg"],
    link: "https://cliproom.portfo.app/",
  },
  {
    id: 2,
    title: "Resumate",
    des: "Resumate is an AI-powered resume analysis platform that helps job seekers optimize their resumes for ATS and recruiter screening.",
    img: "/resumate.png",
    iconLists: ["/next.svg", "/postgresql.svg", "/ts.svg", "/supabase.svg", "/tail.svg"],
    link: "https://resumate.portfo.app/",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
];