import Maincontent from "./components/Maincontent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {

  return (
    <div id="portfolio">
      <h1>Raquel Bitar Riberto</h1>
      <Sidebar />
      <Maincontent />
    </div>
  );
}

export default App
