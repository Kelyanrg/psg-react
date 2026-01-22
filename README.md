# 🔴🔵 PSG Fan App - React Project

Bienvenue sur l'application non-officielle dédiée aux supporters du Paris Saint-Germain. Ce projet est une Single Page Application (SPA) développée avec **React.js**, permettant de consulter l'effectif actuel, le calendrier des matchs et l'histoire du club.

## 🌟 Fonctionnalités

- **🏠 Accueil Immersif :** Présentation du club, palmarès et informations clés (Stade, Président).
- **⚽ Effectif 2025 :**
  - Liste complète des joueurs récupérée dynamiquement via API.
  - **Recherche en temps réel** (filtrage par nom).
  - **Pagination** (6 joueurs par page pour une navigation fluide).
  - Cartes joueurs interactives avec effets de survol.
- **👤 Détails Joueur :** Vue détaillée pour chaque joueur (Bio, Nationalité, Âge, Poste) sans rechargement de page.
- **📅 Matchs & Résultats :**
  - Affichage des 5 derniers résultats (scores, adversaires).
  - Affichage des 5 prochains matchs à venir (dates, heures).
- **📱 Responsive Design :** Interface adaptée aux mobiles, tablettes et ordinateurs.

## 🛠️ Stack Technique

- **Frontend :** React.js (Hooks: `useState`, `useEffect`)
- **Styles :** CSS3 Moderne (Flexbox, Grid, Variables CSS) avec respect de la charte graphique du PSG.
- **Données :** [TheSportsDB API](https://www.thesportsdb.com/) (Team ID: 133714).

## 🚀 Installation et Lancement

Pour tester le projet localement sur votre machine :

1.  **Cloner le projet :**

    ```bash
    git clone [https://github.com/ton-pseudo/nom-du-repo.git](https://github.com/ton-pseudo/nom-du-repo.git)
    cd nom-du-repo
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**

    ```bash
    npm run dev
    # ou
    npm start
    ```

4.  Ouvrez votre navigateur sur `http://localhost:5173` (ou le port indiqué).

## 📂 Structure du Projet

```text
src/
├── assets/          # Images (Logo, etc.)
├── components/      # Composants réutilisables
│   ├── footer.jsx   # Pied de page
│   └── getplayer.jsx # Vue détail d'un joueur
├── pages/           # Pages principales
│   ├── home.jsx     # Page d'accueil
│   ├── maliste.jsx  # Liste des joueurs (avec recherche/pagination)
│   └── matches.jsx  # Calendrier des matchs
├── App.jsx          # Composant racine & Navigation
└── main.jsx         # Point d'entrée React
```
