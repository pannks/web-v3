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
    SiBun,
    SiDocker,
    SiKubernetes,
    SiAmazon,
    SiAwslambda,
    SiGooglecloud,
    SiGithub,
    SiReactquery,
    SiStripe,
    SiPostgresql,
    SiMariadb,
    SiFlutter,
    SiExpo,
    SiIonic,
    SiPwa,
    SiPrisma
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
            icon: SiReact
        },
        {
            name: "NextJs",
            desc: "",
            color: "#43474d",
            time: "",
            icon: SiNextdotjs
        },
        {
            name: "Typescript",
            desc: "",
            color: "#196ecf",
            time: "",
            icon: SiTypescript
        },
        {
            name: "Javascript",
            desc: "",
            color: "#ffd500",
            time: "",
            icon: SiJavascript
        },
        {
            name: "Sass",
            desc: "",
            color: "#ff30cb",
            time: "",
            icon: SiSass
        },
        {
            name: "Styled Components",
            desc: "",
            color: "#ff8ada",
            time: "",
            icon: SiStyledcomponents
        },
        {
            name: "Redux",
            desc: "",
            color: "#ab57ff",
            time: "",
            icon: SiRedux
        },
        {
            name: "React Query",
            desc: "",
            color: "#ff8080",
            time: "",
            icon: SiReactquery
        }
    ],
    backend: [
        {
            name: "PHP",
            desc: "",
            color: "#567199",
            time: "",
            icon: SiPhp
        },
        {
            name: "Node.js",
            desc: "",
            color: "#41a132",
            time: "",
            icon: SiNodedotjs
        },
        {
            name: "Python",
            desc: "",
            color: "#6eafff",
            time: "",
            icon: SiPython
        },
        {
            name: "Golang",
            desc: "",
            color: "#6eccff",
            time: "",
            icon: SiGo
        },
        {
            name: "Deno",
            desc: "",
            color: "#ffec6e",
            time: "",
            icon: SiDeno
        },
        {
            name: "Bun",
            desc: "",
            color: "#edd4a8",
            time: "",
            icon: SiBun
        },

        {
            name: "Supabase",
            desc: "",
            color: "#50d989",
            time: "",
            icon: SiSupabase
        },
        {
            name: "MySql",
            desc: "",
            color: "#5089d9",
            time: "",
            icon: SiMysql
        },
        {
            name: "Postgres",
            desc: "",
            color: "#3b88ed",
            time: "",
            icon: SiPostgresql
        },
        {
            name: "Stripe",
            desc: "",
            color: "#b366ff",
            time: "",
            icon: SiStripe
        },
        {
            name: "Prisma",
            desc: "",
            color: "#595959",
            time: "",
            icon: SiPrisma
        }
    ],
    devOps: [
        {
            name: "Github",
            desc: "",
            color: "#171717",
            time: "",
            icon: SiGithub
        },
        {
            name: "Github Actions",
            desc: "",
            color: "#cc3737",
            time: "",
            icon: SiGithubactions
        },
        {
            name: "Docker",
            desc: "",
            color: "#36b2ff",
            time: "",
            icon: SiDocker
        },
        {
            name: "Kubernetes",
            desc: "",
            color: "#236ee8",
            time: "",
            icon: SiKubernetes
        },
        {
            name: "AWS",
            desc: "",
            color: "#ff8b2b",
            time: "",
            icon: SiAwslambda
        },
        {
            name: "Google Cloud",
            desc: "",
            color: "#a8deff",
            time: "",
            icon: SiGooglecloud
        },
        {
            name: "Firebase",
            desc: "",
            color: "#ffa600",
            time: "",
            icon: SiFirebase
        }
    ],
    mobile: [
        {
            name: "Flutter",
            desc: "",
            color: "#17c5ff",
            time: "",
            icon: SiFlutter
        },
        {
            name: "React Native",
            desc: "",
            color: "#17dcff",
            time: "",
            icon: SiReact
        },
        {
            name: "Expo",
            desc: "",
            color: "#ab4aff",
            time: "",
            icon: SiExpo
        },
        {
            name: "Ionic",
            desc: "",
            color: "#4aa1ff",
            time: "",
            icon: SiIonic
        },
        {
            name: "PWA",
            desc: "",
            color: "#5930e3",
            time: "",
            icon: SiPwa
        }
    ],
    design: [
        {
            name: "Figma",
            desc: "",
            color: "#d9506e",
            time: "",
            icon: SiFigma
        },
        {
            name: "Photoshop",
            desc: "",
            color: "#0a9fc4",
            time: "",
            icon: SiAdobephotoshop
        },
        {
            name: "Illustrator",
            desc: "",
            color: "#f28e1b",
            time: "",
            icon: SiAdobeillustrator
        },
        {
            name: "Premiere Pro",
            desc: "",
            color: "#a61fcc",
            time: "",
            icon: SiAdobepremierepro
        },
        {
            name: "After Effect",
            desc: "",
            color: "#6a1fcc",
            time: "",
            icon: SiAdobeaftereffects
        }
    ]
};
