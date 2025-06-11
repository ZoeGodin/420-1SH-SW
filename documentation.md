# Cegep de Shawinigan

### Documentation InfoFeud

### Travail présenté à Monsieur Nicolas Bourrée

### 420-1SH-SW

### 10 Juin 2025

### Présenté par Zoé Godin

---

# Table des matières
1. [Introduction](#Introduction)
2. [Animation](#Animation)
3. [Bruitage](#Bruitage)

## Introduction
Ce document sert de référence pour les multiples problèmes et concepts avec lesquels j'ai dû expérimenter pour créer le projet.
## Animation
Avec la librairie `motion`, il est possible d'animer des composantes du DOM pour délivrer un résultat plus polis et dynamique. La composante `animate` est ce que nous utilisont pour créer les movements sur ces éléments.

Il est à savoir que lorsqu'une animation est en cour, il ne peux pas avoir en avoir d'autres qui démarre puisque les éléments du DOM sont en plein changement.

Voici à quoi une composante basique d'animation ressemble:

```
animate(this.pointsTextRef.nativeElement, {
    opacity: [0, 1],
    y: [-5, 0],
    scale: [0.8, 1]
}, {
    duration: 0.5,
    ease: 'easeOut',
    delay: 0.1
});
```

Nous voyons que nus voulons animer l'élément natif de notre référence au points et que nous voulons lui changer ses propriétés de base dans la première accolade. 

Nous pouvons changer son opacité (la faire passer de 0 (donc invisible au début de l'animation) à 1 (donc visible à la fin de celle-ci)), changer sa position et induire un movement (la faire passer de -5y au début de l'animation jusqu'à sa position originale dans le DOM (0)), et pouvons aussi changer sa taille (la faire passer de 0.8 fois sa taille à son originelle). 


Dans la deuxième accolade, nous réglons les paramètre de notre animation. Nous réglons sa duré (en seconde), si il y a un délai ou non et le type d'animation. Le type le plus courant est le `easing` voulant dire qu'il y a un movement. Les paramètres qui peuvent être pris par le `ease` sont les différent type; `easeOut`, `easeIn`, `easeInOut`.

## Bruitage

Dans le but d'ajouter une ambiance au jeu, des bruitages ont été incorporés.