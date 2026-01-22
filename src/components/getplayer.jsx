import React from "react";

function GetPlayer({ player, onBack }) {
  return (
    <div className="container">
      <div className="container-back">
        <button className="back-button" onClick={onBack}>
          ← Retour à l'effectif
        </button>
      </div>

      <div className="container-card">
        <div className="player-img">
          {/* On essaie d'abord l'image détourée (Cutout), sinon l'image normale */}
          <img
            src={player.strCutout || player.strThumb || player.strRender}
            alt={player.strPlayer}
          />
        </div>

        <div className="player-info">
          <h2>{player.strPlayer}</h2>
          <span className="position">{player.strPosition}</span>

          <p className="desc">
            {/* Si pas de description EN, message par défaut */}
            {player.strDescriptionFR ||
              player.strDescriptionEN ||
              "Aucune description disponible pour ce joueur."}
          </p>

          <div className="meta">
            <strong>Nationalité :</strong> {player.strNationality} <br />
            <strong>Taille :</strong> {player.strHeight} <br />
            {player.strNumber && (
              <>
                <strong>Numéro :</strong> {player.strNumber}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetPlayer;
