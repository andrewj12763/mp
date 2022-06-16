import "./App.scss";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Footer from "./components/footer/Footer";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(true);


  return (
    <div className="App">
        <div className="center-container">
          <Routes>
            <Route path="/" element={<Main navbarOpen={navbarOpen} />} />
          </Routes>
        </div>
        <Sidebar navbarStatus={() => setNavbarOpen(!navbarOpen)} />
        {/* <Footer navbarOpen={navbarOpen} /> */}
    </div>
  );
}

export default App;
