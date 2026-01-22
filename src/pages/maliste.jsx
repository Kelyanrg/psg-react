import { useEffect, useState } from "react";
import React from "react";
import "./maliste.css";
import GetPlayer from "../components/getplayer.jsx";

function Maliste() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 8;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getAllPlayers();
  }, []);

  const getAllPlayers = async () => {
    try {
      const response = await fetch(
        "https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133714",
      );
      const data = await response.json();
      setPlayers(data.player || []);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors du chargement des joueurs :", error);
      setLoading(false);
    }
  };

  const filteredPlayers = players.filter((player) =>
    player.strPlayer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  const currentPlayers = filteredPlayers.slice(
    indexOfFirstPlayer,
    indexOfLastPlayer,
  );

  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (selectedPlayer) {
    return (
      <GetPlayer
        player={selectedPlayer}
        onBack={() => setSelectedPlayer(null)}
      />
    );
  }

  return (
    <div className="container">
      <h1>Effectif 2025/2026</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un joueur..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {loading ? (
        <p>Chargement des joueurs...</p>
      ) : (
        <>
          <div className="player-list">
            {currentPlayers.length > 0 ? (
              currentPlayers.map((player) => (
                <div
                  key={player.idPlayer}
                  onClick={() => setSelectedPlayer(player)}
                  className="player-card"
                >
                  <img
                    src={player.strCutout || player.strThumb}
                    alt={player.strPlayer}
                  />
                  <h3>{player.strPlayer}</h3>
                </div>
              ))
            ) : (
              <p className="no-result">Aucun joueur trouvé.</p>
            )}
          </div>

          {filteredPlayers.length > playersPerPage && (
            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                &laquo; Précédent
              </button>

              <span className="page-info">
                Page {currentPage} sur {totalPages}
              </span>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                Suivant &raquo;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Maliste;
