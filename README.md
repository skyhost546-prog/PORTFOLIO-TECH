# Portfolio — Inconnu boy

Site statique pur HTML/CSS/JS (aucun build nécessaire), prêt pour Vercel.

## Fichiers
- `index.html` — structure + balises SEO (title, description, Open Graph, Twitter Card, JSON-LD Schema.org)
- `styles.css` — design (dark/light mode, responsive)
- `script.js` — thème, i18n auto (FR/EN/PT selon la langue du navigateur), données GitHub en direct
- `manifest.json`, `robots.txt`, `sitemap.xml` — SEO / PWA

## Déployer sur Vercel
1. Crée un repo GitHub avec ces fichiers (ou dépose-les tels quels).
2. Sur vercel.com → "Add New Project" → importe le repo.
3. Framework Preset : **Other** (site statique, aucune commande de build nécessaire).
4. Deploy.

## Avant de déployer
Remplace `https://ton-domaine.vercel.app` par ton vrai domaine Vercel dans :
- `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD)
- `robots.txt`
- `sitemap.xml`

Ajoute aussi tes propres fichiers `favicon.png` et `apple-touch-icon.png` (et idéalement une image `og-image.png` 1200×630 pour l'aperçu sur les réseaux sociaux) à la racine du projet.

## Indexation Google (Search Console)
Colle la balise `<meta name="google-site-verification" content="...">` que Google Search Console te donne
directement dans `index.html`, à l'endroit indiqué par le commentaire :

```html
<!-- 🔽 COLLE ICI la balise meta de vérification Google Search Console -->
```

Puis, une fois le site déployé et vérifié, soumets `sitemap.xml` dans Search Console pour accélérer l'indexation.
