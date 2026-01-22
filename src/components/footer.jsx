import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2 className="footer-logo">
            PARIS <span className="red-text">SG</span>
          </h2>
          <p>
            L'application non-officielle pour suivre l'actualité, l'effectif et
            les résultats du Paris Saint-Germain. Rêvons plus grand.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/maliste">Effectif 2025</a>
            </li>
            <li>
              <a href="/ingredients">Calendrier</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 Paris Fan App. Fait avec passion pour les supporters. By
          Kelyan
        </p>
        <p className="credits">Données fournies par TheSportsDB</p>
      </div>
    </footer>
  );
}

export default Footer;
