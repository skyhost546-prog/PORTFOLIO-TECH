/* ==========================================================
   INCONNU BOY — PORTFOLIO SCRIPT
   Theme toggle · i18n (auto browser detect) · GitHub live data
   ========================================================== */

const GITHUB_USER = "INCONNU-BOY";

/* ---------- THEME ---------- */
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  iconMoon.style.display = theme === "dark" ? "none" : "block";
  iconSun.style.display = theme === "dark" ? "block" : "none";
}

const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

/* ---------- MOBILE NAV ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("is-open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("is-open"))
);

/* ---------- GOOGLE TRANSLATE (toutes les langues) ---------- */
/* Chargé uniquement si l'utilisateur a accepté les cookies tiers — voir le bloc COOKIE CONSENT plus bas. */
const langToggle = document.getElementById("langToggle");
const langWrap = document.querySelector(".lang-wrap");
langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!hasThirdPartyConsent()) {
    openCookieModal();
    return;
  }
  langWrap.classList.toggle("is-open");
});
document.addEventListener("click", (e) => {
  if (!langWrap.contains(e.target)) langWrap.classList.remove("is-open");
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en", autoDisplay: false },
    "google_translate_element"
  );
}
let translateScriptLoaded = false;
function loadGoogleTranslate() {
  if (translateScriptLoaded) return;
  translateScriptLoaded = true;
  const s = document.createElement("script");
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(s);
}

/* ---------- i18n ---------- */
const translations = {
  en: {
    "nav.about": "About", "nav.stack": "Stack", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.syrix": "SYRIX VISION", "nav.contact": "Contact",
    "hero.eyebrow": "Maringá, Brazil",
    "hero.subtitle": "Open Source Developer • Full Stack Developer • CEO & Co-Founder of SYRIX VISION COMPANY",
    "hero.whoami": "Dawens — building open source tools, one repo at a time.",
    "hero.cta1": "View Projects", "hero.cta2": "Contact Me",
    "about.eyebrow": "About", "about.title": "Building things that outlive the demo.",
    "about.text": "I'm Dawens, known online as Inconnu boy sensei — an open source full stack developer based in Maringá, Brazil. I care about tools people actually keep using: clean APIs, honest interfaces, and code that's easy to read six months later. Most of my work lives in the open, on GitHub, where I build web and Android apps and collaborate with other developers. I'm also the CEO & co-founder of SYRIX VISION COMPANY, a small team shipping open source software together.",
    "stack.eyebrow": "Stack", "stack.title": "Tools I reach for.",
    "exp.eyebrow": "Experience", "exp.title": "Where the work has gone.",
    "projects.eyebrow": "Projects", "projects.title": "Pulled straight from GitHub.",
    "projects.text": "Live data from github.com/INCONNU-BOY — a look at the stats, plus the most influential repositories.",
    "projects.statRepos": "Repositories", "projects.statStars": "Total Stars",
    "projects.statFollowers": "Followers", "projects.statLang": "Top Language",
    "projects.featuredBadge": "Featured Project",
    "projects.featuredTitle": "Web &amp; HTML to APK",
    "projects.featuredDesc": "A tool that converts websites and HTML projects directly into installable Android APKs.",
    "projects.featuredCta": "Live demo — inconnu.zone.id",
    "projects.moreEyebrow": "More on GitHub",
    "projects.loading": "Fetching repositories…",
    "oss.eyebrow": "Open Source", "oss.title": "Public by default.",
    "oss.text": "Nearly everything I build ships in the open. I believe in code that anyone can read, fork, question and improve — and in giving back to the ecosystem of tools I rely on every day. Issues, pull requests and discussions on my repositories are always welcome.",
    "oss.follow": "Follow on GitHub",
    "syrix.eyebrow": "Syrix Vision Company",
    "syrix.text": "SYRIX VISION COMPANY is a small team building open source software and independent tools — founded and led by Inconnu boy sensei, CEO & Co-Founder. We ship what we'd want to use ourselves.",
    "contact.eyebrow": "Contact", "contact.title": "Let's talk.",
    "contact.text": "Open to collaborating on open source, freelance work, or just a good technical conversation.",
    "contact.wa": "Follow my WhatsApp Channel",
    "contact.location": "Vila Esperança, Maringá — Brazil",
    "footer.made": "",
    "cookies.title": "We value your privacy",
    "cookies.desc": "This site uses essential cookies to remember your preferences (theme, language) and third-party cookies (Google Maps, Google Translate) to power some embedded features. You choose what to allow.",
    "cookies.customize": "Customize",
    "cookies.reject": "Reject non-essential",
    "cookies.acceptAll": "Accept all",
    "cookies.manage": "Cookie settings",
    "cookies.eyebrow": "Privacy",
    "cookies.modalTitle": "Cookie preferences",
    "cookies.modalIntro": "Choose which cookies this site is allowed to use. Necessary cookies are always active because the site can't function properly without them.",
    "cookies.catNecessaryTitle": "Necessary",
    "cookies.catNecessaryDesc": "Required for core functionality: theme, language, and remembering your cookie choice. Cannot be disabled.",
    "cookies.catPrefTitle": "Preferences",
    "cookies.catPrefDesc": "Remembers non-essential display choices to make future visits smoother.",
    "cookies.catThirdTitle": "Third-party services",
    "cookies.catThirdDesc": "Loads the Google Maps embed and the Google Translate widget. These services may set their own cookies.",
    "cookies.save": "Save preferences",
    "cookies.policyLink": "Full cookie policy",
    "cookies.mapConsentText": "This map is provided by Google Maps and requires third-party cookies to load.",
    "cookies.mapConsentAccept": "Load the map",
    "cookies.mapConsentOpen": "Open in Google Maps",
    "cookies.fullPolicy": `
      <h3>What are cookies?</h3>
      <p>Cookies are small text files stored on your device that help a website remember information about your visit. This policy also covers similar technologies such as <code>localStorage</code>, used on this site the same way.</p>
      <h3>How we use them</h3>
      <ul>
        <li><strong>Necessary</strong> — stores your theme (dark/light), your interface language, and your cookie choice itself. Stored locally in your browser via <code>localStorage</code>. Never expires until you clear your browser data.</li>
        <li><strong>Preferences</strong> — reserved for non-essential display preferences that may be added in the future.</li>
        <li><strong>Third-party services</strong> — enables the Google Maps embed in the Contact section and the Google Translate widget. When enabled, Google may set its own cookies on your device, governed by Google's own privacy policy.</li>
      </ul>
      <h3>Third-party providers</h3>
      <p>Google LLC operates Google Maps and Google Translate. Learn more in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy</a>.</p>
      <h3>Managing your choice</h3>
      <p>You can accept, reject, or customize cookies at any time using the "Cookie settings" link in the footer. Rejecting third-party cookies disables the embedded map and the translation widget, but the rest of the site keeps working normally.</p>
      <h3>Contact</h3>
      <p>Questions about this policy can be sent to <a href="mailto:inconnuboytech@gmail.com">inconnuboytech@gmail.com</a>.</p>
    `,
  },
  fr: {
    "nav.about": "À propos", "nav.stack": "Stack", "nav.experience": "Expérience",
    "nav.projects": "Projets", "nav.syrix": "SYRIX VISION", "nav.contact": "Contact",
    "hero.eyebrow": "Maringá, Brésil",
    "hero.subtitle": "Développeur Open Source • Développeur Full Stack • CEO & Co-fondateur de SYRIX VISION COMPANY",
    "hero.whoami": "Dawens — je construis des outils open source, un dépôt à la fois.",
    "hero.cta1": "Voir les projets", "hero.cta2": "Me contacter",
    "about.eyebrow": "À propos", "about.title": "Construire des choses qui survivent à la démo.",
    "about.text": "Je suis Dawens, connu en ligne sous le nom d'Inconnu boy sensei — développeur full stack open source basé à Maringá, au Brésil. Ce qui compte pour moi : des outils que les gens utilisent vraiment, des API propres, des interfaces honnêtes, et du code lisible six mois plus tard. La majorité de mon travail est public, sur GitHub, où je développe des applications web et Android en collaboration avec d'autres développeurs. Je suis aussi CEO & co-fondateur de SYRIX VISION COMPANY, une petite équipe qui développe des logiciels open source ensemble.",
    "stack.eyebrow": "Stack", "stack.title": "Les outils que j'utilise.",
    "exp.eyebrow": "Expérience", "exp.title": "Là où le travail m'a mené.",
    "projects.eyebrow": "Projets", "projects.title": "Directement depuis GitHub.",
    "projects.text": "Données en direct depuis github.com/INCONNU-BOY — un aperçu des statistiques, plus les dépôts les plus influents.",
    "projects.statRepos": "Dépôts", "projects.statStars": "Stars au total",
    "projects.statFollowers": "Abonnés", "projects.statLang": "Langage principal",
    "projects.featuredBadge": "Projet phare",
    "projects.featuredTitle": "Web &amp; HTML vers APK",
    "projects.featuredDesc": "Un outil qui convertit des sites web et projets HTML directement en APK Android installables.",
    "projects.featuredCta": "Démo en ligne — inconnu.zone.id",
    "projects.moreEyebrow": "Plus sur GitHub",
    "projects.loading": "Récupération des dépôts…",
    "oss.eyebrow": "Open Source", "oss.title": "Public par défaut.",
    "oss.text": "Presque tout ce que je construis est publié en open source. Je crois en un code que chacun peut lire, forker, questionner et améliorer — et je tiens à contribuer à l'écosystème d'outils que j'utilise chaque jour. Issues, pull requests et discussions sont toujours les bienvenues.",
    "oss.follow": "Suivre sur GitHub",
    "syrix.eyebrow": "Syrix Vision Company",
    "syrix.text": "SYRIX VISION COMPANY est une petite équipe qui développe des logiciels open source et des outils indépendants — fondée et dirigée par Inconnu boy sensei, CEO & Co-fondateur. Nous créons ce que nous voudrions utiliser nous-mêmes.",
    "contact.eyebrow": "Contact", "contact.title": "Discutons.",
    "contact.text": "Ouvert à la collaboration open source, aux missions freelance, ou simplement à une bonne discussion technique.",
    "contact.wa": "Suivre ma chaîne WhatsApp",
    "contact.location": "Vila Esperança, Maringá — Brésil",
    "footer.made": "",
    "cookies.title": "Nous respectons votre vie privée",
    "cookies.desc": "Ce site utilise des cookies essentiels pour mémoriser vos préférences (thème, langue) et des cookies tiers (Google Maps, Google Translate) pour faire fonctionner certaines fonctionnalités intégrées. Vous choisissez ce que vous autorisez.",
    "cookies.customize": "Personnaliser",
    "cookies.reject": "Refuser les non-essentiels",
    "cookies.acceptAll": "Tout accepter",
    "cookies.manage": "Gérer les cookies",
    "cookies.eyebrow": "Confidentialité",
    "cookies.modalTitle": "Préférences des cookies",
    "cookies.modalIntro": "Choisissez les cookies que ce site est autorisé à utiliser. Les cookies nécessaires sont toujours actifs, car le site ne peut pas fonctionner correctement sans eux.",
    "cookies.catNecessaryTitle": "Nécessaires",
    "cookies.catNecessaryDesc": "Indispensables au fonctionnement de base : thème, langue, et mémorisation de votre choix de cookies. Ne peuvent pas être désactivés.",
    "cookies.catPrefTitle": "Préférences",
    "cookies.catPrefDesc": "Réservés à d'éventuelles préférences d'affichage non essentielles ajoutées ultérieurement.",
    "cookies.catThirdTitle": "Services tiers",
    "cookies.catThirdDesc": "Active l'intégration Google Maps ainsi que le widget Google Translate. Une fois activés, ces services peuvent déposer leurs propres cookies.",
    "cookies.save": "Enregistrer mes préférences",
    "cookies.policyLink": "Politique de cookies complète",
    "cookies.mapConsentText": "Cette carte est fournie par Google Maps et nécessite des cookies tiers pour s'afficher.",
    "cookies.mapConsentAccept": "Charger la carte",
    "cookies.mapConsentOpen": "Ouvrir dans Google Maps",
    "cookies.fullPolicy": `
      <h3>Qu'est-ce qu'un cookie ?</h3>
      <p>Un cookie est un petit fichier texte stocké sur votre appareil, qui permet à un site de se souvenir d'informations sur votre visite. Cette politique couvre aussi les technologies similaires comme le <code>localStorage</code>, utilisé de la même façon sur ce site.</p>
      <h3>Comment nous les utilisons</h3>
      <ul>
        <li><strong>Nécessaires</strong> — mémorisent votre thème (sombre/clair), votre langue d'interface, ainsi que votre choix de cookies. Stockés localement dans votre navigateur via <code>localStorage</code>. Conservés jusqu'à ce que vous videz les données de votre navigateur.</li>
        <li><strong>Préférences</strong> — réservés à d'éventuelles préférences d'affichage non essentielles qui pourraient être ajoutées ultérieurement.</li>
        <li><strong>Services tiers</strong> — permettent d'afficher la carte Google Maps dans la section Contact et le widget Google Translate. Une fois activés, Google peut déposer ses propres cookies sur votre appareil, régis par sa propre politique de confidentialité.</li>
      </ul>
      <h3>Fournisseurs tiers</h3>
      <p>Google LLC exploite Google Maps et Google Translate. Pour en savoir plus, consultez la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">politique de confidentialité de Google</a>.</p>
      <h3>Gérer votre choix</h3>
      <p>Vous pouvez accepter, refuser ou personnaliser les cookies à tout moment via le lien « Gérer les cookies » dans le pied de page. Refuser les cookies tiers désactive la carte intégrée et le widget de traduction, mais le reste du site continue de fonctionner normalement.</p>
      <h3>Contact</h3>
      <p>Pour toute question concernant cette politique, écrivez à <a href="mailto:inconnuboytech@gmail.com">inconnuboytech@gmail.com</a>.</p>
    `,
  },
  pt: {
    "nav.about": "Sobre", "nav.stack": "Stack", "nav.experience": "Experiência",
    "nav.projects": "Projetos", "nav.syrix": "SYRIX VISION", "nav.contact": "Contato",
    "hero.eyebrow": "Maringá, Brasil",
    "hero.subtitle": "Desenvolvedor Open Source • Desenvolvedor Full Stack • CEO & Co-fundador da SYRIX VISION COMPANY",
    "hero.whoami": "Dawens — construindo ferramentas open source, um repositório de cada vez.",
    "hero.cta1": "Ver projetos", "hero.cta2": "Fale comigo",
    "about.eyebrow": "Sobre", "about.title": "Construindo coisas que sobrevivem à demo.",
    "about.text": "Sou o Dawens, conhecido online como Inconnu boy sensei — desenvolvedor full stack open source baseado em Maringá, Brasil. Me importo com ferramentas que as pessoas realmente continuam usando: APIs limpas, interfaces honestas e código fácil de ler seis meses depois. A maior parte do meu trabalho é pública, no GitHub, onde desenvolvo aplicações web e Android e colaboro com outros desenvolvedores. Também sou CEO & co-fundador da SYRIX VISION COMPANY, uma pequena equipe que desenvolve software open source junto.",
    "stack.eyebrow": "Stack", "stack.title": "Ferramentas que uso.",
    "exp.eyebrow": "Experiência", "exp.title": "Para onde o trabalho foi.",
    "projects.eyebrow": "Projetos", "projects.title": "Direto do GitHub.",
    "projects.text": "Dados em tempo real de github.com/INCONNU-BOY — um panorama das estatísticas, além dos repositórios mais relevantes.",
    "projects.statRepos": "Repositórios", "projects.statStars": "Stars totais",
    "projects.statFollowers": "Seguidores", "projects.statLang": "Linguagem principal",
    "projects.featuredBadge": "Projeto em destaque",
    "projects.featuredTitle": "Web &amp; HTML para APK",
    "projects.featuredDesc": "Uma ferramenta que converte sites e projetos HTML diretamente em APKs Android instaláveis.",
    "projects.featuredCta": "Demo ao vivo — inconnu.zone.id",
    "projects.moreEyebrow": "Mais no GitHub",
    "projects.loading": "Buscando repositórios…",
    "oss.eyebrow": "Open Source", "oss.title": "Público por padrão.",
    "oss.text": "Quase tudo que eu construo é publicado em open source. Acredito em código que qualquer pessoa possa ler, fazer fork, questionar e melhorar — e em retribuir ao ecossistema de ferramentas que uso todos os dias. Issues, pull requests e discussões são sempre bem-vindas.",
    "oss.follow": "Seguir no GitHub",
    "syrix.eyebrow": "Syrix Vision Company",
    "syrix.text": "A SYRIX VISION COMPANY é uma pequena equipe que desenvolve software open source e ferramentas independentes — fundada e liderada pelo Inconnu boy sensei, CEO & Co-fundador. Criamos o que nós mesmos gostaríamos de usar.",
    "contact.eyebrow": "Contato", "contact.title": "Vamos conversar.",
    "contact.text": "Aberto a colaborar em open source, trabalhos freelance, ou apenas uma boa conversa técnica.",
    "contact.wa": "Siga meu canal do WhatsApp",
    "contact.location": "Vila Esperança, Maringá — Brasil",
    "footer.made": "",
    "cookies.title": "Valorizamos sua privacidade",
    "cookies.desc": "Este site usa cookies essenciais para lembrar suas preferências (tema, idioma) e cookies de terceiros (Google Maps, Google Translate) para viabilizar alguns recursos incorporados. Você escolhe o que permitir.",
    "cookies.customize": "Personalizar",
    "cookies.reject": "Rejeitar não essenciais",
    "cookies.acceptAll": "Aceitar tudo",
    "cookies.manage": "Preferências de cookies",
    "cookies.eyebrow": "Privacidade",
    "cookies.modalTitle": "Preferências de cookies",
    "cookies.modalIntro": "Escolha quais cookies este site pode usar. Os cookies necessários estão sempre ativos, pois o site não funciona corretamente sem eles.",
    "cookies.catNecessaryTitle": "Necessários",
    "cookies.catNecessaryDesc": "Necessários para o funcionamento básico: tema, idioma e memorização da sua escolha de cookies. Não podem ser desativados.",
    "cookies.catPrefTitle": "Preferências",
    "cookies.catPrefDesc": "Reservados para futuras preferências de exibição não essenciais.",
    "cookies.catThirdTitle": "Serviços de terceiros",
    "cookies.catThirdDesc": "Ativa a incorporação do Google Maps e o widget do Google Translate. Uma vez ativados, esses serviços podem definir seus próprios cookies.",
    "cookies.save": "Salvar preferências",
    "cookies.policyLink": "Política de cookies completa",
    "cookies.mapConsentText": "Este mapa é fornecido pelo Google Maps e requer cookies de terceiros para carregar.",
    "cookies.mapConsentAccept": "Carregar o mapa",
    "cookies.mapConsentOpen": "Abrir no Google Maps",
    "cookies.fullPolicy": `
      <h3>O que são cookies?</h3>
      <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam um site a lembrar informações sobre sua visita. Esta política também cobre tecnologias semelhantes, como o <code>localStorage</code>, usado da mesma forma neste site.</p>
      <h3>Como usamos</h3>
      <ul>
        <li><strong>Necessários</strong> — armazenam seu tema (escuro/claro), o idioma da interface e sua escolha de cookies. Armazenados localmente no navegador via <code>localStorage</code>. Mantidos até que você limpe os dados do navegador.</li>
        <li><strong>Preferências</strong> — reservados para futuras preferências de exibição não essenciais.</li>
        <li><strong>Serviços de terceiros</strong> — habilitam a incorporação do Google Maps na seção de Contato e o widget do Google Translate. Quando ativados, o Google pode definir seus próprios cookies no seu dispositivo, regidos pela política de privacidade do Google.</li>
      </ul>
      <h3>Fornecedores terceiros</h3>
      <p>A Google LLC opera o Google Maps e o Google Translate. Saiba mais na <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacidade do Google</a>.</p>
      <h3>Gerenciando sua escolha</h3>
      <p>Você pode aceitar, rejeitar ou personalizar os cookies a qualquer momento pelo link "Preferências de cookies" no rodapé. Rejeitar os cookies de terceiros desativa o mapa incorporado e o widget de tradução, mas o restante do site continua funcionando normalmente.</p>
      <h3>Contato</h3>
      <p>Dúvidas sobre esta política podem ser enviadas para <a href="mailto:inconnuboytech@gmail.com">inconnuboytech@gmail.com</a>.</p>
    `,
  },
};

function detectLang() {
  const supported = Object.keys(translations);
  const nav = (navigator.language || "en").toLowerCase();
  const short = nav.split("-")[0];
  return supported.includes(short) ? short : "en";
}

function applyI18n(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

applyI18n(detectLang());

/* ---------- SKILLS ---------- */
/* Real technology logos via Devicon. "mono" = brand mark is black/monochrome,
   so it needs to be inverted to stay visible on the dark theme. */
const skills = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Express", icon: "devicon-express-original", mono: true },
  { name: "REST API", icon: null },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Android", icon: "devicon-android-plain colored" },
  { name: "Capacitor", icon: "devicon-capacitor-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original", mono: true },
];
const restApiIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12a8 8 0 1 0 8-8"/><path d="M4 12h4M4 12l3-3M4 12l3 3"/></svg>`;
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = skills
  .map(
    (s) => `
    <div class="skill-cell">
      <span class="skill-cell__icon${s.mono ? " skill-cell__icon--mono" : ""}">
        ${s.icon ? `<i class="${s.icon}"></i>` : restApiIcon}
      </span>
      <span>${s.name}</span>
    </div>`
  )
  .join("");

/* ---------- TIMELINE ---------- */
const timelineData = [
  { date: "Since 2024", title: "Open Source Development", text: "Building and maintaining open source tools and libraries, shared publicly on GitHub." },
  { date: "Since 2026", title: "CEO & Co-Founder — SYRIX VISION COMPANY", text: "Leading a small team shipping independent open source software." },
  { date: "Since 2024", title: "Full Stack Web Development", text: "Designing and building web applications end to end — from API to interface." },
  { date: "Since 2024", title: "Android Development", text: "Building cross-platform mobile apps with Capacitor on top of web technologies." },
];
document.getElementById("timeline").innerHTML = timelineData
  .map(
    (t) => `
    <div class="timeline-item reveal">
      <div class="timeline-item__date">${t.date}</div>
      <h3 class="timeline-item__title">${t.title}</h3>
      <p class="timeline-item__text">${t.text}</p>
    </div>`
  )
  .join("");

/* ---------- LANGUAGE LOGOS (Devicon) ---------- */
const LANG_ICON_MAP = {
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  Python: "devicon-python-plain colored",
  Java: "devicon-java-plain colored",
  Kotlin: "devicon-kotlin-plain colored",
  Dart: "devicon-dart-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  C: "devicon-c-plain colored",
  "C#": "devicon-csharp-plain colored",
  PHP: "devicon-php-plain colored",
  Ruby: "devicon-ruby-plain colored",
  Go: "devicon-go-plain colored",
  Rust: "devicon-rust-plain colored",
  Shell: "devicon-bash-plain colored",
  Swift: "devicon-swift-plain colored",
  Vue: "devicon-vuejs-plain colored",
  Dockerfile: "devicon-docker-plain colored",
  EJS: "devicon-html5-plain colored",
};
function langIcon(lang) {
  const cls = LANG_ICON_MAP[lang];
  return cls ? `<i class="${cls}"></i>` : `<span class="repo-card__lang-dot"></span>`;
}

/* ---------- GITHUB DATA ---------- */
async function loadGitHub() {
  const repoGrid = document.getElementById("repoGrid");
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`),
    ]);
    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    const langCount = {};
    repos.forEach((r) => {
      if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
    });
    const topLang = Object.entries(langCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

    document.getElementById("statRepos").textContent = user.public_repos ?? repos.length;
    document.getElementById("statStars").textContent = totalStars;
    document.getElementById("statFollowers").textContent = user.followers ?? "—";
    document.getElementById("statLang").textContent = topLang;

    const top = repos
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 3);

    if (top.length === 0) {
      repoGrid.innerHTML = `<p class="repo-loading">No public repositories yet.</p>`;
      return;
    }

    repoGrid.innerHTML = top
      .map(
        (r) => `
        <a class="repo-card reveal" href="${r.html_url}" target="_blank" rel="noopener">
          <div class="repo-card__top">
            <span class="repo-card__name">${r.name}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </div>
          <p class="repo-card__desc">${r.description ? escapeHtml(r.description) : "No description provided."}</p>
          <div class="repo-card__meta">
            <span>★ ${r.stargazers_count}</span>
            <span>⑂ ${r.forks_count}</span>
            ${r.language ? `<span class="repo-card__lang">${langIcon(r.language)}${r.language}</span>` : ""}
          </div>
        </a>`
      )
      .join("");

    observeReveals();
  } catch (err) {
    repoGrid.innerHTML = `<p class="repo-loading">Couldn't load repositories right now — visit github.com/${GITHUB_USER} directly.</p>`;
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

loadGitHub();

/* ---------- SCROLL REVEAL ---------- */
function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.is-visible)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
}
observeReveals();

/* ---------- LIVE CLOCK ---------- */
const liveClock = document.getElementById("liveClock");
function updateClock() {
  liveClock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
updateClock();
setInterval(updateClock, 1000 * 10);

/* ---------- BATTERY STATUS ---------- */
const batteryPill = document.getElementById("batteryPill");
const batteryLevel = document.getElementById("batteryLevel");
const batteryFill = document.getElementById("batteryFill");

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    function renderBattery() {
      const pct = Math.round(battery.level * 100);
      batteryLevel.textContent = `${pct}%${battery.charging ? " ⚡" : ""}`;
      batteryFill.setAttribute("width", Math.max(1, (pct / 100) * 15));
      batteryPill.hidden = false;
    }
    renderBattery();
    battery.addEventListener("levelchange", renderBattery);
    battery.addEventListener("chargingchange", renderBattery);
  }).catch(() => { batteryPill.hidden = true; });
} else {
  batteryPill.hidden = true;
}

/* ---------- FOOTER YEAR ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ==========================================================
   COOKIE CONSENT
   Bannière + modal de préférences + politique complète (FR/EN/PT).
   Catégories : necessary (toujours actif), preferences, thirdparty
   (Google Maps + Google Translate, chargés uniquement si acceptés).
   ========================================================== */
const COOKIE_KEY = "cookie_consent_v1";

function readConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeConsent({ preferences, thirdparty }) {
  const consent = {
    necessary: true,
    preferences: !!preferences,
    thirdparty: !!thirdparty,
    ts: Date.now(),
  };
  try {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
  } catch {}
  return consent;
}

function hasThirdPartyConsent() {
  const c = readConsent();
  return !!(c && c.thirdparty);
}

const cookieBanner = document.getElementById("cookieBanner");
const cookieModal = document.getElementById("cookieModal");
const mapConsent = document.getElementById("mapConsent");
const mapIframe = document.getElementById("mapIframe");

function applyConsent(consent) {
  if (consent.thirdparty) {
    loadGoogleTranslate();
    if (mapIframe && !mapIframe.src) mapIframe.src = mapIframe.dataset.src;
    if (mapConsent) mapConsent.hidden = true;
  } else {
    if (mapIframe) mapIframe.removeAttribute("src");
    if (mapConsent) mapConsent.hidden = false;
  }
}

function hideBanner() {
  cookieBanner.hidden = true;
}
function showBanner() {
  cookieBanner.hidden = false;
}
function openCookieModal() {
  const c = readConsent();
  document.getElementById("cookieCatPrefs").checked = c ? c.preferences : true;
  document.getElementById("cookieCatThird").checked = c ? c.thirdparty : true;
  cookieModal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeCookieModal() {
  cookieModal.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("cookieAcceptAll").addEventListener("click", () => {
  const c = writeConsent({ preferences: true, thirdparty: true });
  applyConsent(c);
  hideBanner();
});
document.getElementById("cookieReject").addEventListener("click", () => {
  const c = writeConsent({ preferences: false, thirdparty: false });
  applyConsent(c);
  hideBanner();
});
document.getElementById("cookieCustomize").addEventListener("click", openCookieModal);
document.getElementById("footerCookieLink").addEventListener("click", openCookieModal);
document.getElementById("cookieModalClose").addEventListener("click", closeCookieModal);
document.getElementById("cookieModalBackdrop").addEventListener("click", closeCookieModal);
document.getElementById("cookieModalReject").addEventListener("click", () => {
  const c = writeConsent({ preferences: false, thirdparty: false });
  applyConsent(c);
  hideBanner();
  closeCookieModal();
});
document.getElementById("cookieModalSave").addEventListener("click", () => {
  const preferences = document.getElementById("cookieCatPrefs").checked;
  const thirdparty = document.getElementById("cookieCatThird").checked;
  const c = writeConsent({ preferences, thirdparty });
  applyConsent(c);
  hideBanner();
  closeCookieModal();
});
if (mapConsent) {
  document.getElementById("mapConsentAccept").addEventListener("click", () => {
    const existing = readConsent();
    const c = writeConsent({ preferences: existing ? existing.preferences : true, thirdparty: true });
    applyConsent(c);
    hideBanner();
  });
}

(function initConsent() {
  const existing = readConsent();
  if (existing) {
    applyConsent(existing);
  } else {
    showBanner();
  }
})();
