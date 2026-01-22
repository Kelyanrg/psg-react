import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo_psg.png";
import Home from "./pages/home.jsx";
import Ingredients from "./pages/ingredients.jsx";
import MaListe from "./pages/maliste.jsx";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} className="img" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/ingredients">Calendrier</Link>
          </li>
          <li>
            <Link to="/maliste">Effectif</Link>
          </li>
        </ul>
      </nav>
      <div className="div-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/maliste" element={<MaListe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
