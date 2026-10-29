# Site web de l'AJAC

Site vitrine de l'**Association Jeunesse Active et Culturelle du Guillaume** (Saint-Paul, La Réunion).

Il est construit avec [Astro](https://astro.build) en **site statique** : pas de base de
données, pas de compte à gérer, et un hébergement gratuit sur Vercel. Tous les textes se
modifient dans de simples fichiers, sans toucher au code.

---

## Sommaire

1. [Lancer le site sur votre ordinateur](#1-lancer-le-site-sur-votre-ordinateur)
2. [Modifier les textes](#2-modifier-les-textes)
3. [Ajouter les vraies photos](#3-ajouter-les-vraies-photos)
4. [Mettre le site en ligne (GitHub + Vercel)](#4-mettre-le-site-en-ligne-github--vercel)
5. [Le jour de l'ouverture au public](#5-le-jour-de-louverture-au-public)
6. [Organisation du projet](#6-organisation-du-projet)

---

## 1. Lancer le site sur votre ordinateur

### Prérequis : Node.js

Le site a besoin de **Node.js version 22.23 ou plus récente**. Pour vérifier, ouvrez le
Terminal et tapez :

```bash
node -v
```

Si la commande est introuvable, installez la version **LTS** depuis [nodejs.org](https://nodejs.org).

> Sur l'ordinateur où le site a été créé, Node est installé dans `~/.local/node`.
> Pour que le Terminal le trouve, ajoutez une fois pour toutes cette ligne à la fin du
> fichier `~/.zshrc`, puis rouvrez le Terminal :
> `export PATH="$HOME/.local/node/bin:$PATH"`

### Démarrer

```bash
cd "chemin/vers/site AJAC"
npm install        # la première fois seulement (télécharge les outils)
npm run dev        # démarre le site
```

Ouvrez ensuite **<http://localhost:4321>** dans votre navigateur. Chaque fichier modifié et
enregistré s'affiche aussitôt, sans recharger quoi que ce soit.

Avec Astro 7, le serveur tourne en arrière-plan. Pour l'arrêter : `npm run stop`.

| Commande | Rôle |
|---|---|
| `npm run dev` | Démarre le site en local (http://localhost:4321) |
| `npm run stop` | Arrête le site local |
| `npm run build` | Fabrique la version finale du site dans le dossier `dist/` |
| `npm run preview` | Affiche en local la version fabriquée par `build` |

---

## 2. Modifier les textes

**Tous les textes du site sont dans le dossier `src/data/`.** Ouvrez le fichier voulu avec
un éditeur de texte (VS Code, TextEdit en mode texte brut…), changez le texte **entre les
guillemets**, puis enregistrez.

> ⚠️ Gardez bien les guillemets `"`, les virgules `,` et les accolades `{ }`. Si le site
> affiche une erreur après une modification, c'est presque toujours une virgule ou un
> guillemet oublié à l'endroit modifié.

| Fichier | Ce qu'il contient |
|---|---|
| `site.json` | Nom, sous-titre, **coordonnées**, lien Facebook, pied de page, référencement Google, **mentions légales** |
| `activites.json` | Les **cartes d'activités** : titre, texte, icône, couleur, photo |
| `navigation.json` | Les liens du menu et du pied de page |
| `accueil.json` | Les textes des sections de la page d'accueil |
| `partenaires.json` | Les **partenaires** (accueil + pied de page) |
| `faq.json` | Les questions fréquentes (page Contact) |
| `pages.json` | Les autres pages, dont **Suivez-nous** (titre, avantages, capture Facebook) |

### Dans `site.json`

```json
"contact": {
  "email": "ajacguillaume046@gmail.com",
  "phoneDisplay": "06 93 94 64 67",      ← numéro affiché
  "phoneHref": "+262693946467",          ← même numéro, format international (pour le lien d'appel)
  "address": "Le Guillaume, 97423 Saint-Paul, La Réunion",
  "addressShort": "Le Guillaume, Saint-Paul",
  "horaires": ""                          ← à remplir, ex. "Du lundi au vendredi, 17 h – 19 h"
}
```

- **Horaires** : tant que le champ est vide (`""`), le bloc n'apparaît pas sur le site.
- **Mentions légales** : dans `mentionsLegales`, remplacez les « à compléter » (numéro RNA,
  nom du ou de la responsable de la publication).
- **Facebook** : dans `social`, le champ `url`.

### Dans `activites.json`

Chaque activité est un bloc `{ ... }` :

```json
{
  "slug": "randonnees",                    ← identifiant unique, sans accent ni espace (sert d'adresse)
  "icon": "mountain",                      ← icône (voir liste ci-dessous)
  "color": "vert",                         ← vert, bleu, orange ou rose
  "title": "Randonnées & plein air",
  "text": "Des sorties nature pour…",
  "image": "/images/activites/randonnees.jpg",  ← photo facultative de la carte
  "galerie": false,                        ← true = crée la fiche /activites/randonnees/
  "photos": []                             ← photos/vidéos de la fiche
}
```

#### Ouvrir la fiche (galerie) d'une activité

Pour l'instant, chaque carte affiche « Galerie photos bientôt disponible ». Pour publier
la fiche d'une activité :

1. Déposez les photos dans `public/images/activites/randonnees/` (un dossier par activité).
2. Dans `activites.json`, passez `"galerie": true` et listez les photos :

   ```json
   "galerie": true,
   "photos": [
     { "src": "/images/activites/randonnees/sortie-1.jpg", "alt": "Le groupe au sommet du Maïdo" },
     { "src": "/images/activites/randonnees/video-1.mp4", "alt": "Montée vers le belvédère", "video": true }
   ]
   ```

La page `/activites/randonnees/` est alors créée automatiquement, et la carte affiche
« Découvrir l'activité → » (toute la carte devient cliquable). Les textes de ces boutons
se modifient dans `activites.json` → `labels`.

- **Ajouter une activité** : copiez un bloc complet, collez-le après le dernier (avec une
  virgule entre les deux), puis modifiez-le.
- **Icônes disponibles** : `mountain`, `ball`, `users`, `book`, `home`, `megaphone`,
  `camera`, `calendar`, `heart`.

### Dans `partenaires.json` : ajouter un partenaire (ex. la CAF)

1. Préparez le logo (PNG à fond transparent ou blanc, **environ 480 px de large**,
   marges blanches recadrées) et déposez-le dans `public/images/partenaires/`.
2. Copiez le bloc existant, collez-le après lui (avec une virgule), puis adaptez-le :

   ```json
   {
     "nom": "CAF de La Réunion",
     "logo": "/images/partenaires/caf-reunion.png",
     "largeur": 480,
     "hauteur": 300,
     "role": "Partenaire financier",
     "url": ""
   }
   ```

   - `largeur` / `hauteur` : dimensions réelles de l'image en pixels, pour éviter que la
     page « saute » pendant le chargement. Sur Mac, `sips -g pixelWidth -g pixelHeight fichier.png`
     les affiche.
   - `url` : adresse du site du partenaire. Laissée vide (`""`), le logo n'est pas cliquable.

Le partenaire apparaît automatiquement sur l'accueil et dans le pied de page de
toutes les pages.

> N'affichez le logo d'une institution qu'avec son accord : il laisse entendre un
> soutien officiel.

---

## 3. Ajouter les vraies photos

Le fichier **[`IMAGES-A-FOURNIR.md`](IMAGES-A-FOURNIR.md)** donne, pour chaque photo, le
**nom exact**, l'**emplacement** et les **dimensions** attendus.

En résumé :

1. Préparez la photo aux bonnes dimensions et compressez-la sur [squoosh.app](https://squoosh.app)
   (qualité 75–80).
2. Renommez-la **exactement** comme indiqué (par ex. `hero.jpg`), en minuscules, sans
   accent ni espace.
3. Déposez-la dans `public/images/` (ou `public/images/activites/` pour les cartes).
4. Rechargez la page : la photo remplace automatiquement le fond coloré.

Les plus importantes : `hero.jpg` (grand bandeau d'accueil) et `groupe.jpg` (Qui sommes-nous).

---

## 4. Mettre le site en ligne (GitHub + Vercel)

Les deux services sont **gratuits** pour un site comme celui-ci.

- **GitHub** conserve le code et son historique.
- **Vercel** publie le site sur Internet et le met à jour à chaque modification envoyée sur GitHub.

### Étape A : envoyer le code sur GitHub (une seule fois)

1. Créez un compte sur [github.com](https://github.com), puis un **nouveau dépôt**
   (bouton « New ») nommé par exemple `site-ajac`. Laissez-le **vide** (ne cochez ni
   README ni .gitignore).
2. Dans le Terminal, depuis le dossier du projet :

   ```bash
   git init
   git add .
   git commit -m "Première version du site AJAC"
   git branch -M main
   git remote add origin https://github.com/VOTRE-COMPTE/site-ajac.git
   git push -u origin main
   ```

   Remplacez `VOTRE-COMPTE` par votre nom d'utilisateur GitHub.

> Les dossiers `inspiration/` (captures d'écran d'autres sites) et `content/` (rapport
> d'activité interne) **ne sont pas envoyés** sur GitHub : ils sont exclus par le
> fichier `.gitignore`. Ils restent sur votre ordinateur.

### Étape B : publier avec Vercel (une seule fois)

1. Créez un compte sur [vercel.com](https://vercel.com) avec **« Continue with GitHub »**.
2. Cliquez sur **« Add New… » → « Project »**, puis **« Import »** à côté de `site-ajac`.
3. Vercel reconnaît Astro tout seul. Ne changez rien et cliquez sur **« Deploy »**.
4. Au bout d'une minute environ, le site est en ligne à une adresse du type
   `https://site-ajac.vercel.app`.

### Ensuite : mettre à jour le site

Après chaque modification (texte, photo…), envoyez-la sur GitHub :

```bash
git add .
git commit -m "Mise à jour des horaires"
git push
```

Vercel republie automatiquement le site en une minute environ.

### Facultatif : un nom de domaine personnalisé

Si l'association achète un nom de domaine (par ex. `ajac-guillaume.fr`), ajoutez-le dans
Vercel (**Settings → Domains**) et suivez les instructions affichées.
Indiquez ensuite cette adresse dans `site.json` → `"url"`.

---

## 5. Le jour de l'ouverture au public

Par sécurité, le site demande pour l'instant à Google de **ne pas le référencer**
(`noindex`), le temps de finaliser le contenu.

**Check-list avant d'ouvrir le site :**

- [ ] Photos `hero.jpg` et `groupe.jpg` ajoutées (voir `IMAGES-A-FOURNIR.md`)
- [ ] Image de partage `og-image.jpg` ajoutée (sinon, le logo est utilisé)
- [ ] Mentions légales complétées (`site.json` → `mentionsLegales` : numéro RNA, responsable)
- [ ] Horaires renseignés si souhaité (`site.json` → `contact.horaires`)
- [ ] Pages provisoires relues (Qui sommes-nous, Nos activités, Contact)

**Puis, dans `src/data/site.json` :**

```json
"indexable": true,
```

Envoyez la modification (`git add . && git commit -m "Ouverture du site" && git push`).
Le site sera alors visible par Google. Le fichier `robots.txt` et le plan du site
(`sitemap.xml`) sont générés automatiquement.

> Les **préversions** de Vercel (branches de test) restent toujours en `noindex`, même
> après l'ouverture. Seul le site principal est référencé.

Pour accélérer l'apparition dans Google, déclarez ensuite le site dans
[Google Search Console](https://search.google.com/search-console) en y indiquant
l'adresse de `sitemap.xml`.

---

## 6. Organisation du projet

```
public/                 Fichiers publiés tels quels
  logo.png              Logo officiel (+ versions réduites et favicon)
  images/               ← Les photos du site (voir IMAGES-A-FOURNIR.md)
src/
  data/                 ← TOUS les textes modifiables
  layouts/Base.astro    Structure commune : <head>, référencement, Header, Footer, MobileBar
  components/           Header (+ TopBar), Hero, Activites, About, FacebookSection,
                        ContactSection, Footer, MobileBar, PhoneMockup (smartphone CSS),
                        et petits blocs partagés
  pages/                Une page = un fichier (index.astro = accueil)
                        activites/[slug].astro = modèle des fiches d'activités
                        + robots.txt et sitemap.xml générés automatiquement
  styles/global.css     Couleurs (variables), typographie, boutons
  lib/site.ts           Petites fonctions utilitaires
IMAGES-A-FOURNIR.md     Liste des photos attendues
```

### Pour aller plus loin

- **Nouvelle page** : créez `src/pages/ma-page.astro` (disponible sur `/ma-page/`) en vous
  inspirant de `activites.astro`. Ajoutez le lien dans `navigation.json` → `menu` et
  l'adresse dans `src/lib/site.ts` → `sitemapPaths`.
- **Couleurs** : elles sont toutes en haut de `src/styles/global.css`. Les contrastes
  respectent la norme d'accessibilité WCAG AA : en cas de changement, vérifiez-les sur
  [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/).
- **Logo** : si le logo change, remplacez `public/logo.png`, puis régénérez les versions
  réduites (sur Mac) :

  ```bash
  cd public
  sips -Z 240 logo.png --out logo-240.png
  sips -Z 128 logo.png --out logo-128.png
  sips -Z 32  logo.png --out favicon-32.png
  sips -Z 180 logo.png --out apple-touch-icon.png
  ```

### Qualité (mesurée avant mise en ligne)

| Lighthouse (page d'accueil) | Mobile | Ordinateur |
|---|---|---|
| Performance | 100 | 100 |
| Accessibilité | 100 | 100 |
| Bonnes pratiques | 100 | 100 |
| SEO | 66 → 100 une fois `indexable` activé | idem |

Aucune erreur d'accessibilité (axe-core, WCAG A/AA) sur toutes les pages, aucun lien cassé.
