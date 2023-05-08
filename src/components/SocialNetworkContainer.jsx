import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/raquelriberto/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/quel-bvr" },
  { name: "instagram", icon: <FaInstagram />, link: "https://instagram.com/_quelbr?igshid=ZGUzMzM3NWJiOQ==" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
        
      ))}
    </section>
  );
};

export default SocialNetworkContainer;