# Liela — site de présentation

Site autonome dans un nouveau dossier, sans modification de l’application ni de l’Audio Builder.

## Aperçu local

Lancer `npm run dev`, puis ouvrir http://127.0.0.1:4173. Aucune dépendance à installer. `dist/index.html` peut aussi être ouvert directement.

## Fichiers

- `dist/index.html` : contenu du site.
- `dist/styles.css` : mise en page responsive et charte graphique.
- `dist/app.js` : sélecteur de situation et aperçu interactif.
- `dist/site-config.js` : adresse de l’application et future chaîne YouTube.
- `dist/assets/` : vrais logos et polices locales issus de l’application.

Le dossier `dist` contient l’intégralité du site à héberger. Aucun service externe, tracker, formulaire ou cookie ajouté. Les polices sont servies localement.

## Avant la publication publique sur liela.fr

- Confirmer l’adresse `https://app.liela.fr`, reprise de la documentation du projet de l’application.
- Renseigner `youtubeUrl` dans `dist/site-config.js` lorsque la chaîne existe : le site active automatiquement le bouton et adapte les textes d’attente.
- Compléter les mentions légales avec les informations réelles de l’éditeur et de l’hébergeur. Aucun contenu juridique ni contact fictif n’a été créé.
- Valider les textes produit et les conditions tarifaires avant d’ajouter une promesse de gratuité.

Palette : crème `#FDF9F0`, coquille `#F8EFE4`, encre `#433528`, sauge `#919780` / `#5F6A52`, les six couleurs de situation de l’application. Polices : Poppins et Hanken Grotesk.
