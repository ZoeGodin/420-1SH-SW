# InfoFeud 2025
## Développement d’un jeu style `Family Feud` pour la Technique d’informatique du Cégep de Shawinigan

### Introduction
Dans le cadre du cours de veille technologique (420-1SH-SW) du Cégep de Shawinigan, le projet suivant a pour but de développer un jeu de style télévisé (comme `La Guerre des Clans` ou `Family Feud` dans la version américaine) pour célébrer la fin du parcours scolaire de la cohorte 2025 de la Technique d’informatique du Cégep de Shawinigan.

### Fonctionnement
Le déroulement d’InfoFeud est semblable à celui des jeux dont il s’inspire : deux équipes s’affrontent dans le but de faire le plus de points pour accéder à la manche éclair et avoir la possibilité de gagner le prix final.

#### Manche normale
L’animateur appelle une personne de chaque équipe pour venir répondre à la question. Le plus rapide a le droit de répondre et, si sa réponse donne des points, permet à son équipe de prendre la main. L’équipe a trois chances de remplir le tableau de réponses et de remporter tous les points possibles. Si elle échoue trois fois à donner des réponses valides, l’équipe adverse a le droit de se consulter pour essayer de donner une réponse figurant sur le tableau et ainsi voler les points. Si l’équipe adverse échoue également, les points vont à l’équipe initiale.

#### Manche éclair
La manche éclair met en scène deux joueurs de la même équipe qui tentent de donner les réponses les plus populaires pour remporter le prix final. Le joueur 1 se met en place, tandis que le joueur 2 doit s’isoler le temps que le premier réponde. Chaque joueur dispose de 60 secondes pour répondre à toutes les questions.

### Développement

#### Obtention des données
Pour obtenir les données nécessaires au jeu et reproduire un environnement semblable à celui des émissions télévisées, nous avons créé un formulaire regroupant 36 questions portant sur la programmation et le métier de développeur, que nous avons envoyé aux étudiants de la Technique. S’en est suivi un travail d’une journée complète pour filtrer et attribuer des points aux réponses recueillies. Le résultat : un jeu comportant 36 questions et une centaine de réponses.

#### Création du logo
Pour donner un air plus officiel et soigné au projet, un prompt a été saisi sur [Sora](https://sora.chatgpt.com/explore) afin de générer un logo dans un style inspiré des jeux télévisés.

![InfoFeudLogo](info-feud/public/assets/InfoFeud.png)

#### Programmation et nouvel élément
Puisque le projet devait respecter les caractéristiques du cours `420-1SH-SW`, il devait inclure une technologie jamais utilisée auparavant dans la Technique. Pour créer un projet soigné incorporant des éléments déjà vus, la technologie choisie fut `Framer Motion`, une librairie permettant l’animation de composants dans Angular.

### Résultats

> TO-DO

### Bibliographie
- Animate. Motion for JavaScript. (n.d.). https://motion.dev/docs/animate 
- Basic syntax. Markdown Guide. (n.d.). https://www.markdownguide.org/basic-syntax/ 
- Web animations for JavaScript, react and vue. Motion. (n.d.). https://motion.dev/ 
### Prompts utilisés

- Prompt pour le logo :  
    ```
    Make me a gameshow logo that is reminiscent of the oldstyle gameshows. The name of the gameshow is 'InfoFeud'. The name is separated in half, 'Info' is on top and 'feud' at the bottom
    ```

### Crédits
- **Ariane Courcy** — Aide à la création des questions | Cueillette de données | Aide aux tests | Co-animatrice  
- **Marie-Christine Bélanger** — Aide à la correction
