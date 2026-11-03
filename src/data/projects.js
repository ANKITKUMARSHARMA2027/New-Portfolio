import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript, BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress,SiFlask } from "react-icons/si";

const ProjectsData = [

  {
    id: "3",
    name: "E-Comers Website",
    image: "./Screenshot 2026-09-12 220657.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "This chat application provides an interface to the users to connect with their friends.",
   github:"https://github.com/ANKITKUMARSHARMA2027/FOREVER.git",
    // demo: "https://vchat4whisperchat.vercel.app",
  },
  {
    id: "4",
    name: "Quara-Post Website",
    image: "./Screenshot 2026-09-12 220915.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This website provides users with all api Working Get,Post,put,Patch,Delete With the help of Quara-Post Website.",
    // github: "https://github.com/rajnish2323/codemate1",
    
  },
  {
    id: "5",
    name: "Movies booking Website",
    image: "./Screenshot 2026-09-12 221011.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "This website way to connect to professional people with Movies Booking Website.",
    // github: "https://github.com/rajnish2323/codemate1",
    // demo: "https://imdb-rho.vercel.app",
  }, 
  // {
  //   id: "8",
  //   name: "Intelligent Dermatologist assistant",
  //   image: "./p1.png",
  //   icons: [BiLogoMongodb,BiLogoReact,BiLogoNodejs,SiExpress,SiFlask],
  //   description: "This application enables users to consult dermatologists online and receive intelligent skin analysis and treatment recommendations.",
  //   github: "https://github.com/ShreyasKS21/dermatologist-Assistent.git",
    
  // },
];

export default ProjectsData;
