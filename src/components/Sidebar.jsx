import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Raquel Bitar Riberto" />
      <p className="title">Desenvolvedora</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;