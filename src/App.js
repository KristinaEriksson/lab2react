import { NavbarComponent } from "./components/Navbar.js";
import { HomeComponent } from "./components/Home.js";
import { InfoComponent } from "./components/Info.js";
import { CvComponent } from "./components/Cv.js";
import { PortfolioComponent } from './components/Portfolio.js';
import { ContactComponent} from './components/Contact.js';
import { EasterEggComponent } from "./components/Secret.js";
import Footer from './components/Footer.js';
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
    <HashRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/om-mig" element={<InfoComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
        <Route path="/portfolio" element={<PortfolioComponent/>} />
        <Route path="/kontakt" element={<ContactComponent/>} />
      </Routes>
    </HashRouter>
    <Footer/>
    <EasterEggComponent/>
    </div>

  );
}

export default App;
