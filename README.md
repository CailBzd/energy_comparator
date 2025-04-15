# Comparateur d'Offres d'Énergie

Ce projet est une application web développée avec React, TypeScript, et Ant Design pour comparer les offres d'énergie (électricité et gaz) en utilisant les API de fournisseurs d'énergie comme Octopus Energy.

## Fonctionnalités

- Sélection du type de simulation (électricité ou gaz).
- Saisie de la consommation annuelle.
- Affichage des offres disponibles avec des détails de base.
- Filtrage des offres en fonction de critères spécifiques (direction = "IMPORT", is_business = false).
- Affichage des informations supplémentaires (is_variable, is_green).
- Liste des offres pliable (collapsible) pour une meilleure navigation.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure) ou yarn

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/votre-utilisateur/comparateur-energie.git
    cd comparateur-energie
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

## Configuration

Assurez-vous d'avoir configuré les variables d'environnement nécessaires pour accéder aux API des fournisseurs d'énergie. Vous pouvez créer un fichier `.env` à la racine du projet et y ajouter vos clés API :

```env
REACT_APP_OCTOPUS_API_KEY=votre_cle_api_octopus
