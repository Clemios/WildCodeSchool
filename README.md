# Pour vos REAMDME

Je vous propose ce [Template](https://github.com/Clemios/WildCodeSchool/blob/master/READMETEMPLATE.md), à vous de l'améliorer/le compléter afin qu'il colle parfaitement à votre projet

# Déploiement

Détaillez au maximum toutes les étapes pour installer votre projet. Voici un [repo Git d'exemple](https://github.com/Clemios/angular4-refrigerator) d'un projet que j'ai réalisé lors de mes études.

## Base de données

Spécifiez les utilisateurs à créer et transmettez un export de votre base de données afin de pouvoir l'installer chez le client.

### Pour travailler en local

Afin de facilement avoir un serveur `MySQL` pour travailler sur vos machines :

[MAMP](https://www.mamp.info/en/downloads/) : La version MAMP (et non MAMP PRO) est gratuite et très simple d'utilisation.

### Pour déployer chez le client

1. Faites un export de votre base de données locale
2. Installez `MySQL` et `phpMyAdmin` sur le serveur du client
3. Créez la base de donnée et les utilisateurs via `phpMyAdmin`
4. Importez vos données exportées à l'étape 1

#### Préparer le serveur du client

Pour déployer votre application, vous allez avoir besoin de `MySQL`, de `Nginx` et de `NodeJS`.

Vous pouvez vous appuyer sur ces tutos : 

[Nginx, MySQL et PhP sur debian](https://www.kanjian.fr/comment-installer-nginx-mysql-php7-debian.html#.XL75AJMzYWo) : Tuto en Francais, ils installent `PhP`, il faudra ajouter `NodeJS`.

[Configurer Nginx pour plusieurs sites](https://smalldata.tech/blog/2015/04/04/setting-up-multiple-websites-with-nginx-nodejs-mysql) : Configurer plusieurs sites sur le meme serveur.

# Liens utiles

## Packages npm utiles

[npm-check](https://www.npmjs.com/package/npm-check) : Permet de vérifier si vos dépendances sont utilisées et à jour.

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