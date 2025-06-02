# InfoFeud 2025
## Dévelopment d'un jeu style `Familly Feud` pour la technique d'informatique du Cégep de Shawinigan

### Introduction
Dans le cadre du cour de veille technologique (420-1SH-SW) du Cégep de Shawinigan le projet suivant a pour but de développer un jeu de style télévisé (comme `La Guerre des Clans`ou `Family Feud` dans la version américaine) pour célébrer la fin du parcours scholaire de la cohorte 2025 de la technique d'informatique du cégep de shawinigan.

### Fonctionnement
Le déroullement du InfoFeud se comporte semsiblement de la même manière que les jeux dont il a été inspiré; Deux équipe s'affrontent dans le but de faire le plus de points pour accéder à la manche éclaire et avoir la possibilitée de gagner le prix final.

#### Manche Normale
L'animateur appel une personne de chaque équipe pour venir répondre à la question. Le plus rapide est celui qui à le droit de répondre et, si sa réponse fait gagner des points, fait en sorte que son équipe est celle qui répond à la question. L'équipe a trois chances de remplir le tableau de réponse et de remporter tout les points possible. Si jamais il ont échouer trois fois à donner des réponses valables, l'équipe adverse à le droit de se consulter pour essayer de donner une réponse qui figurerait sur le tableau et pourrait voler les points de l'autre équipe. Si l'équipe adverse n'arrive pas à donner une bonne réponse, les points vont à l'équipe originale.

#### Manche Éclaire
La manche éclaire se défini par deux joueur d'une même équipe qui essait de répondre les réponses les plus populaires pour essayer d'avoir le prix final. Le joueur 1 se met en place tandis que le joueurs 2 doit s'isoler le temps que le premier réponds. Chaque joueur aura 60 secondes pour répondre à toutes les questions. 

### Devellopement

#### Obtention des Données

Pour obtenir les données nescessaire au jeu et reproduire un environnement semblable à celui montré dans les émissions de télévision, nous avons créé un formulaire regroupant 36 questions qui ont attrait à la programmation et au métier de dévelloppeur et l'avons envoyé aux étudiants de la technique. C'est suivi un travail d'une journée complète pour filtrer et attribuer des points aux données recueillies et nous avions un jeu avec 36 questions et une centaines de réponses.

#### Création de Logo

Pour donner un air plus officiel et poffiné au projet, un prompt a été entré sur [Sora](https://sora.chatgpt.com/explore) pour générer un logo ayant un style semblable au jeux télévisé dont le projet s'insprire.

![InfoFeudLogo](/assets/InfoFeud.png)

#### Programmation et Nouvel Élément

Puisque le projet devait toujours respecter les charactéristiques du cour `420-1SH-SW`, le projet à dû utiliser une nouvelle technologie jamais vue dans le cadre de la technique. Pour donner un projet pofinné et incorporant des éléments déjà vue, il a été décidé que la technologie qui serait utilisé serait `Framer-Motion`, une librairie permettant l'animation de components dans Angular.

### Resultats

    TO-DO


### Bibliographie
Web animations for JavaScript, react and vue. Motion. (n.d.). https://motion.dev/ 
- Animate. Motion for JavaScript. (n.d.). https://motion.dev/docs/animate 


Basic syntax. Markdown Guide. (n.d.). https://www.markdownguide.org/basic-syntax/ 


### Prompts Utilisés

- Prompts pour le Logo: 
    ```
    Make me a gameshow logo that is reminiscent of the oldstyle gameshows. The name of the gameshow is 'InfoFeud'. The name is separated in half, 'Info' is on top and 'feud' at the bottom
    ```

### Crédits
- **Ariane Courcy** - Assistance dans la création des question | Aide à la cueillette de donnée | Aide aux Tests | Co-Animatrice

- **Marie-Christine Bélanger** - Aide à la correction