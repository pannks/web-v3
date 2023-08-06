import { IconType } from "react-icons";
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiSass,
    SiStyledcomponents,
    SiRedux,
    SiPhp,
    SiNodedotjs,
    SiFirebase,
    SiSupabase,
    SiMysql,
    SiGithubactions,
    SiDeno,
    SiPython,
    SiGo,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobepremierepro,
    SiAdobeaftereffects,
} from "react-icons/si";

export type Skill = {
    name: string;
    desc: string;
    color: string;
    time: string;
    icon: () => JSX.Element;
};

export const skillData = {
    frontend: [
        {
            name: "React",
            desc: "",
            color: "#59d8ff",
            time: "",
            icon: SiReact,
        },
        {
            name: "NextJs",
            desc: "",
            color: "#43474d",
            time: "",
            icon: SiNextdotjs,
        },
        {
            name: "Typescript",
            desc: "",
            color: "#196ecf",
            time: "",
            icon: SiTypescript,
        },
        {
            name: "Javascript",
            desc: "",
            color: "#ffd500",
            time: "",
            icon: SiJavascript,
        },
        {
            name: "Sass",
            desc: "",
            color: "#ff30cb",
            time: "",
            icon: SiSass,
        },
        {
            name: "Styled Components",
            desc: "",
            color: "#ff8ada",
            time: "",
            icon: SiStyledcomponents,
        },
        {
            name: "Redux",
            desc: "",
            color: "#ab57ff",
            time: "",
            icon: SiRedux,
        },
    ],
    backend: [
        {
            name: "PHP",
            desc: "",
            color: "#567199",
            time: "",
            icon: SiPhp,
        },
        {
            name: "Node.js",
            desc: "",
            color: "#41a132",
            time: "",
            icon: SiNodedotjs,
        },
        {
            name: "Python",
            desc: "",
            color: "#6eafff",
            time: "",
            icon: SiPython,
        },
        {
            name: "Golang",
            desc: "",
            color: "#6eccff",
            time: "",
            icon: SiGo,
        },
        {
            name: "Deno",
            desc: "",
            color: "#ffec6e",
            time: "",
            icon: SiDeno,
        },
        {
            name: "Firebase",
            desc: "",
            color: "#ffa600",
            time: "",
            icon: SiFirebase,
        },
        {
            name: "Supabase",
            desc: "",
            color: "#50d989",
            time: "",
            icon: SiSupabase,
        },
        {
            name: "MySql",
            desc: "",
            color: "#5089d9",
            time: "",
            icon: SiMysql,
        },
        {
            name: "Github Action",
            desc: "",
            color: "#d95750",
            time: "",
            icon: SiGithubactions,
        },
    ],
    design: [
        {
            name: "Figma",
            desc: "",
            color: "#d9506e",
            time: "",
            icon: SiFigma,
        },
        {
            name: "Photoshop",
            desc: "",
            color: "#0a9fc4",
            time: "",
            icon: SiAdobephotoshop,
        },
        {
            name: "Illustrator",
            desc: "",
            color: "#f28e1b",
            time: "",
            icon: SiAdobeillustrator,
        },
        {
            name: "Premiere Pro",
            desc: "",
            color: "#a61fcc",
            time: "",
            icon: SiAdobepremierepro,
        },
        {
            name: "After Effect",
            desc: "",
            color: "#6a1fcc",
            time: "",
            icon: SiAdobeaftereffects,
        },
    ],
};
