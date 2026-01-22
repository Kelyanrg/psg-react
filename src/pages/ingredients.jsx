import { useEffect, useState } from "react";
import "./ingredients.css";

function Matches() {
  const [lastMatches, setLastMatches] = useState([]);
  const [nextMatches, setNextMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchAllMatches();
  }, []);

  const fetchAllMatches = async () => {
    try {
      // On lance les deux requêtes en parallèle pour aller plus vite
      const [resLast, resNext] = await Promise.all([
        fetch(
          "https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133714",
        ),
        fetch(
          "https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=133714",
        ),
      ]);

      const dataLast = await resLast.json();
      const dataNext = await resNext.json();

      setLastMatches(dataLast.results || []);
      setNextMatches(dataNext.events || []);
      setLoading(false);
    } catch (error) {
      console.error("Erreur chargement matchs :", error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Date inconnue";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="matches-container">
      <h1 className="page-title">Calendrier & Résultats</h1>

      {loading ? (
        <p className="loading-text">Chargement des rencontres...</p>
      ) : (
        <div className="matches-grid">
          {/* COLONNE 1 : DERNIERS RÉSULTATS */}
          <section className="match-column">
            <h2 className="section-title">Derniers Résultats</h2>
            <div className="match-list">
              {lastMatches.map((match) => (
                <div key={match.idEvent} className="match-card result-card">
                  <div className="match-header">
                    <span className="league-name">{match.strLeague}</span>
                    <span className="match-date">
                      {formatDate(match.dateEvent)}
                    </span>
                  </div>

                  <div className="score-board">
                    <div className="team home">
                      <span className="team-name">{match.strHomeTeam}</span>
                    </div>

                    <div className="score-badge">
                      <span className="score">{match.intHomeScore}</span>
                      <span className="separator">-</span>
                      <span className="score">{match.intAwayScore}</span>
                    </div>

                    <div className="team away">
                      <span className="team-name">{match.strAwayTeam}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="match-column">
            <h2 className="section-title">À Venir</h2>
            {nextMatches.length > 0 ? (
              <div className="match-list">
                {nextMatches.map((match) => (
                  <div key={match.idEvent} className="match-card fixture-card">
                    <div className="match-header">
                      <span className="league-name">{match.strLeague}</span>
                      <span className="match-date">
                        {formatDate(match.dateEvent)}
                      </span>
                    </div>

                    <div className="fixture-board">
                      <div className="team home">
                        <span className="team-name">{match.strHomeTeam}</span>
                      </div>

                      <div className="vs-badge">VS</div>

                      <div className="team away">
                        <span className="team-name">{match.strAwayTeam}</span>
                      </div>
                    </div>

                    <div className="match-time">
                      Heure :{" "}
                      {match.strTime ? match.strTime.slice(0, 5) : "21:00"}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-match">Aucun match programmé pour le moment.</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default Matches;
