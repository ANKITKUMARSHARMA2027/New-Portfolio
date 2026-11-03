// import { FaDiscord, FaGithub, FaLinkedin,  } from "react-icons/fa";

import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";  // ✅ yeh add karo



const ContactData = {
  phone: "+91 9006698071",
  email: "ankitsharmamanjhgayan@gmail.com",
  address: "Banka, Bihar, India",
  links: [
    {
      url: "https://github.com/",
      icon: FaGithub,
    },
    {
      url: "https://www.linkedin.com/feed/",
      icon: FaLinkedin,
    },
    {
      url: "https://leetcode.com/u/ANKITKUMARSHARMA/",
      icon: SiLeetcode,
    },
    // {
    //   url: "https://wa.me/9334199521",
    //   icon: FaGfg,
    // },
  ],
};

export default ContactData;
