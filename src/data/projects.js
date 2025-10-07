import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript, BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress,SiFlask } from "react-icons/si";

const ProjectsData = [

  {
    id: "3",
    name: "Chat Application",
    image: "./chatapp.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "This chat application provides an interface to the users to interact with their friends.",
   
    demo: "https://vchat4whisperchat.vercel.app",
  },
  {
    id: "4",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/ShreyasKS21/E-Commerce-Website.git",
    demo: "https://reactjs-ecommerce-app.vercel.app/",
  },
  {
    id: "5",
    name: "Movie Website",
    image: "./IMDB.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "This website provides information about popular , top-rated and upcoming movies.",
    github: "https://github.com/ShreyasKS21/Movie-Website.git",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "8",
    name: "Intelligent Dermatologist assistant",
    image: "./p1.png",
    icons: [BiLogoMongodb,BiLogoReact,BiLogoNodejs,SiExpress,SiFlask],
    description: "This application enables users to consult dermatologists online and receive intelligent skin analysis and treatment recommendations.",
    github: "https://github.com/ShreyasKS21/dermatologist-Assistent.git",
    
  },
];

export default ProjectsData;
