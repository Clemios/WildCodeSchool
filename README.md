# Déploiement

Détaillez au maximum toutes les étapes pour installer votre projet. Voici un [repo Git d'exemple](https://github.com/Clemios/angular4-refrigerator) d'un projet que j'ai réalisé lors de mes études.

## Base de données

Spécifiez les utilisateurs à créer et transmettez un export de votre base de données afin de pouvoir l'installer chez le client.

# Liens utiles

## Jeux pédagogiques

[Leek Wars](https://leekwars.com/) : Permet d'apprendre les boucles, les tests et différents aspect du code en vous fesait coder des IA de combatants. Utilise la syntaxe du `javascript`.

[CSS Diner](https://flukeout.github.io/) : Pour découvrir le CSS

[Flexbox Froggy](https://flexboxfroggy.com/) : Pour aprendre les `flexbox` CSS

[Flexbox Defense](http://www.flexboxdefense.com/) : Pour aprendre les `flexbox` CSS

[Grid Garden](https://cssgridgarden.com/) : Pour apprendre les `grid` CSS

BONUS :
[Ouverture Facile... Quoique.](http://www.ouverture-facile.com/index1.htm) : Site d'enigme necessitant de la recherche et une bonne conaissance du monde de l'iformatique (vous devrez par exemple traiter des fichiers audio par moment)

## Ressources

[CSS-Tricks](https://css-tricks.com/) : Un super site pour découvrir ou redécouvrir des choses sur le CSS

[CodePen](https://codepen.io/) : Plein d'exemples de petit modules front `HTML`, `CSS`, `JS`

[SlidesCarnival](https://www.slidescarnival.com/) : Templates de slides. **Attention, veillez bien à personaliser un minimum le template afin de ne pas de retrouver avec exactement la meme présentation qu'un collègue !!!**

## Librairies
### Pour le front de vos applications web

:warning: Pour la plus part des librairies javascript, il y a deux approches pour l'utilisation.

**L'approche NodeJs**
>Il suffit de faire :
>```
> npm install lalibrairie
>```

**L'approche classique**
>Il faut télécharger et insérer le Javascript et le CSS dans le `index.html` de votre projet
>```html
><script src="lalibrairie.js"></script>
><link rel="stylesheet" href="lalibrairie.css">
>```
> Ainsi vous pouvez modifier a votre convenance le CSS de la librairie

[SweetAlert2](https://sweetalert2.github.io/) : Permet d'afficher de plus jolies alertes customisables pour remplacer le `alert` de javascript.

[NOTY](https://ned.im/noty/#/) : Permet d'afficher facilement des notifications pour vos applications web

### Pour gérer vos modules Node et les dépendances de votre projet

**Packages Node utiles**
[npm-check](https://www.npmjs.com/package/npm-check) : Package Node permettant facilement de maintenir a jour les différents modules utilisés dans un projet *(front ou back)*

**Commandes npm**
Commande permettant de lister les failles de sécutité connues présentes dans les packages Node que vous utilisez
>```sh
>npm audit
>```

Cette commande est disponible avec l'option `--fix` qui permet de résoudre automatiquement la plupart des failles
>```sh
>npm audit --fix
>```

Avec de nombreux modules, il peut être utile de "nettoyer" le fichier `package-lock.json` qui est généré à l'installation de modules, pour ce faire npm dispose de la commande
>```sh
>npm dedupe
>```

## Tips and Tricks pour VSCode

### Astuces
**Utilisation**
> - Plus vous personaliserais et adapterais votre IDE à vos besoins, plus vous serez productifs !
> - N'hésitez pas à abuser de la fonction recherche *(`ctrl` + `F`)* pour rapidement accéder à la portion de code qui vous interesse

**Raccourcis clavier** *(Remplacez `ctrl` par `cmd` sous Mac)*
> - `ctrl` + `P` => Pour ouvrir un fichier rapidement, vous pouvez taper un `>` dans le champ pour passer en mode invite de commande
> - `ctrl` + `shift` + `P` => Pour afficher l'invite de commande (utilse pour activer/désactiver des plugins, éxécuter des commandes...)
> - `ctrl` + `K` + `W` => Permet de fermer tous les onglets ouverts

### Plugins sympas

`bracket-pair-colorizer` : Permet de colorer les paires de parenthèses et accolades afin de faciliter la lecture

`vscode-icons` : Ajoute des incones correspondant au type de fichier dans l'arborescence de votre projet

`project-manager` : Très pratique pour naviguer entre plusieurs projets

`Sublime Text Keymap` : Vos raccourcis Sublime Text vous manquent ? Ajoutez les à VSCode avec ce plugin