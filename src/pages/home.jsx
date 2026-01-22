import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <span className="tagline">Rêvons Plus Grand</span>
          <h1>
            ICI C'EST <span className="text-outline">PARIS</span>
          </h1>
          <p>
            Bienvenue sur l'application officielle non-officielle du Paris
            Saint-Germain. Retrouvez l'effectif, les stats et l'histoire du club
            de la capitale.
          </p>
          <a href="/maliste" className="cta-button">
            Voir l'effectif 2025
          </a>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* SECTION INFOS CLÉS */}
      <section className="info-grid">
        <div className="info-card">
          <h3>🏟️ Le Stade</h3>
          <p className="big-text">Parc des Princes</p>
          <p className="sub-text">47 929 places</p>
        </div>
        <div className="info-card">
          <h3>📅 Fondation</h3>
          <p className="big-text">1970</p>
          <p className="sub-text">12 août</p>
        </div>
        <div className="info-card">
          <h3>👔 Président</h3>
          <p className="big-text">Nasser Al-Khelaïfi</p>
          <p className="sub-text">Depuis 2011</p>
        </div>
      </section>

      <section className="trophy-section">
        <h2>Un Palmarès Historique</h2>
        <div className="trophy-list">
          <div className="trophy-item">
            <span className="trophy-count">12</span>
            <span className="trophy-name">Championnats de France</span>
          </div>
          <div className="trophy-item">
            <span className="trophy-count">14</span>
            <span className="trophy-name">Coupes de France</span>
          </div>
          <div className="trophy-item">
            <span className="trophy-count">9</span>
            <span className="trophy-name">Coupes de la Ligue</span>
          </div>
          <div className="trophy-item">
            <span className="trophy-count">1</span>
            <span className="trophy-name">Coupe des Coupes (1996)</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
