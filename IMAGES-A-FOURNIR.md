# Images à fournir

Toutes les photos vont dans **`public/images/`**, avec **exactement** les noms ci-dessous
(minuscules, sans accent ni espace, extension `.jpg`).

Aucune photo n'est obligatoire pour que le site fonctionne : tant qu'un fichier manque,
un fond coloré (ou l'icône, pour les activités) le remplace automatiquement.
Dès que le fichier est déposé, il s'affiche, sans rien modifier dans le code.

---

## 1. Bandeau d'accueil (Hero) – prioritaire

| Emplacement exact | Dimensions idéales | Orientation | Poids max |
|---|---|---|---|
| `public/images/hero.jpg` | **1920 × 1080 px** (16:9) | Paysage | 350 Ko |

- **Sujet conseillé** : une photo pleine d'énergie, comme un groupe en randonnée, un match
  ou une fête de quartier au Guillaume.
- **Cadrage** : le titre s'affiche **à gauche** et un voile sombre recouvre la photo.
  Placez le sujet principal plutôt à droite ou au centre.
- **Description** : la photo est décorative, son texte alternatif reste vide (`hero.imageAlt`
  dans `src/data/accueil.json`).

## 2. Qui sommes-nous (À propos) – prioritaire

| Emplacement exact | Dimensions idéales | Orientation | Poids max |
|---|---|---|---|
| `public/images/groupe.jpg` | **1200 × 1400 px** (environ 6:7) | Portrait | 300 Ko |

- **Sujet conseillé** : une photo de groupe des membres de l'association.
- **Cadrage** : la photo est rognée pour remplir la colonne de droite sur ordinateur, et
  passe en format 4:3 au-dessus du texte sur mobile. **Gardez les visages au centre.**
- **Description** : modifiable dans `src/data/accueil.json` → `apropos.imageAlt`.

## 3. Cartes « Nos activités » – facultatif

Une photo par carte. Elle apparaît en haut de la carte, au-dessus de l'icône.

| Emplacement exact | Carte concernée |
|---|---|
| `public/images/activites/randonnees.jpg` | Randonnées & plein air |
| `public/images/activites/tournois.jpg` | Tournois de foot |
| `public/images/activites/cohesion.jpg` | Cohésion & convivialité |
| `public/images/activites/jeunesse.jpg` | Actions pour les jeunes |
| `public/images/activites/quartier.jpg` | Cadre de vie au Guillaume |
| `public/images/activites/citoyennete.jpg` | Participation citoyenne |

- **Dimensions idéales** : **800 × 500 px** (16:10), paysage, **120 Ko max** chacune.
- **Conseil** : ajoutez les 6 photos en même temps, ou aucune. Sinon les cartes n'ont
  pas toutes la même hauteur.
- Le chemin de chaque photo est modifiable dans `src/data/activites.json` (champ `image`).

## 4. Page « Suivez-nous » – en place ✅

| Emplacement exact | Rôle |
|---|---|
| `public/images/facebook-app-screenshot-web.jpg` | Capture affichée dans le smartphone (601 × 1240 px, 110 Ko) |

Pour la remplacer (idéalement par une capture « neutre », prise depuis un compte qui
ne suit pas encore la page), faites une capture de la page Facebook sur téléphone, puis :

```bash
cd public/images
sips -Z 1240 -s formatOptions 55 nouvelle-capture.jpg --out facebook-app-screenshot-web.jpg
```

## 5. Logos des partenaires – en place ✅

| Emplacement exact | Partenaire |
|---|---|
| `public/images/partenaires/mairie-saint-paul-web.png` | Mairie de Saint-Paul (480 × 294 px, 38 Ko) |

Pour un nouveau partenaire : PNG à fond transparent ou blanc, **environ 480 px de large**,
marges recadrées, **60 Ko max**. Voir le README (section `partenaires.json`).

## 6. Image de partage (réseaux sociaux) – à faire avant la mise en ligne

| Emplacement exact | Dimensions idéales | Poids max |
|---|---|---|
| `public/images/og-image.jpg` | **1200 × 630 px** | 200 Ko |

C'est l'aperçu qui s'affiche quand on partage le lien du site sur Facebook ou WhatsApp.
Par exemple : le logo sur un fond vert ou bleu, avec « AJAC – Le Guillaume ».
Tant qu'elle n'est pas fournie, le logo sert d'aperçu (une fois le site en ligne sur Vercel).

---

## Conseils généraux

- **Compression** : passez chaque photo dans [squoosh.app](https://squoosh.app)
  (format MozJPEG, qualité 75–80) pour respecter les poids indiqués. C'est ce qui garde
  le site rapide sur mobile.
- **Droits à l'image** : n'utilisez que des photos de l'association, avec l'accord des
  personnes reconnaissables (et de leurs parents pour les mineurs).
- **Après l'ajout d'une photo**, rechargez la page. Si elle n'apparaît pas, relancez
  `npm run dev`.

## Déjà en place (ne pas toucher)

- `public/logo.png` : logo officiel, utilisé tel quel.
- `public/logo-240.png`, `public/favicon-32.png`, `public/apple-touch-icon.png` :
  versions réduites générées à partir du logo (voir le README pour les régénérer).
