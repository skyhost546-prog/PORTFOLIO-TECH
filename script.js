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
const langToggle = document.getElementById("langToggle");
const langWrap = document.querySelector(".lang-wrap");
langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  langWrap.classList.toggle("is-open");
});
document.addEventListener("click", (e) => {
  if (!langWrap.contains(e.target)) langWrap.classList.remove("is-open");
});

/* ---------- i18n ---------- */
const translations = {
  en: {
    "nav.about": "About", "nav.stack": "Stack", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.syrix": "SYRIX", "nav.contact": "Contact",
    "hero.eyebrow": "Maringá, Brazil",
    "hero.subtitle": "Open Source Developer • Full Stack Developer • Co-Founder of SYRIX COMPANY",
    "hero.whoami": "Dawens — building open source tools, one repo at a time.",
    "hero.cta1": "View Projects", "hero.cta2": "Contact Me",
    "about.eyebrow": "About", "about.title": "Building things that outlive the demo.",
    "about.text": "I'm Dawens, known online as Inconnu boy sensei — an open source full stack developer based in Maringá, Brazil. I care about tools people actually keep using: clean APIs, honest interfaces, and code that's easy to read six months later. Most of my work lives in the open, on GitHub, where I build web and Android apps and collaborate with other developers. I'm also the co-founder of SYRIX COMPANY, a small team shipping open source software together.",
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
    "syrix.eyebrow": "Syrix Company",
    "syrix.text": "SYRIX COMPANY is a small team building open source software and independent tools — co-founded by Inconnu boy sensei. We ship what we'd want to use ourselves.",
    "contact.eyebrow": "Contact", "contact.title": "Let's talk.",
    "contact.text": "Open to collaborating on open source, freelance work, or just a good technical conversation.",
    "contact.wa": "Follow my WhatsApp Channel",
    "contact.location": "Vila Esperança, Maringá — Brazil",
    "footer.made": "Built with plain HTML, CSS & JS.",
  },
  fr: {
    "nav.about": "À propos", "nav.stack": "Stack", "nav.experience": "Expérience",
    "nav.projects": "Projets", "nav.syrix": "SYRIX", "nav.contact": "Contact",
    "hero.eyebrow": "Maringá, Brésil",
    "hero.subtitle": "Développeur Open Source • Développeur Full Stack • Co-fondateur de SYRIX COMPANY",
    "hero.whoami": "Dawens — je construis des outils open source, un dépôt à la fois.",
    "hero.cta1": "Voir les projets", "hero.cta2": "Me contacter",
    "about.eyebrow": "À propos", "about.title": "Construire des choses qui survivent à la démo.",
    "about.text": "Je suis Dawens, connu en ligne sous le nom d'Inconnu boy sensei — développeur full stack open source basé à Maringá, au Brésil. Ce qui compte pour moi : des outils que les gens utilisent vraiment, des API propres, des interfaces honnêtes, et du code lisible six mois plus tard. La majorité de mon travail est public, sur GitHub, où je développe des applications web et Android en collaboration avec d'autres développeurs. Je suis aussi co-fondateur de SYRIX COMPANY, une petite équipe qui développe des logiciels open source ensemble.",
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
    "syrix.eyebrow": "Syrix Company",
    "syrix.text": "SYRIX COMPANY est une petite équipe qui développe des logiciels open source et des outils indépendants — co-fondée par Inconnu boy sensei. Nous créons ce que nous voudrions utiliser nous-mêmes.",
    "contact.eyebrow": "Contact", "contact.title": "Discutons.",
    "contact.text": "Ouvert à la collaboration open source, aux missions freelance, ou simplement à une bonne discussion technique.",
    "contact.wa": "Suivre ma chaîne WhatsApp",
    "contact.location": "Vila Esperança, Maringá — Brésil",
    "footer.made": "Fait en HTML, CSS & JS.",
  },
  pt: {
    "nav.about": "Sobre", "nav.stack": "Stack", "nav.experience": "Experiência",
    "nav.projects": "Projetos", "nav.syrix": "SYRIX", "nav.contact": "Contato",
    "hero.eyebrow": "Maringá, Brasil",
    "hero.subtitle": "Desenvolvedor Open Source • Desenvolvedor Full Stack • Co-fundador da SYRIX COMPANY",
    "hero.whoami": "Dawens — construindo ferramentas open source, um repositório de cada vez.",
    "hero.cta1": "Ver projetos", "hero.cta2": "Fale comigo",
    "about.eyebrow": "Sobre", "about.title": "Construindo coisas que sobrevivem à demo.",
    "about.text": "Sou o Dawens, conhecido online como Inconnu boy sensei — desenvolvedor full stack open source baseado em Maringá, Brasil. Me importo com ferramentas que as pessoas realmente continuam usando: APIs limpas, interfaces honestas e código fácil de ler seis meses depois. A maior parte do meu trabalho é pública, no GitHub, onde desenvolvo aplicações web e Android e colaboro com outros desenvolvedores. Também sou co-fundador da SYRIX COMPANY, uma pequena equipe que desenvolve software open source junto.",
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
    "syrix.eyebrow": "Syrix Company",
    "syrix.text": "A SYRIX COMPANY é uma pequena equipe que desenvolve software open source e ferramentas independentes — co-fundada pelo Inconnu boy sensei. Criamos o que nós mesmos gostaríamos de usar.",
    "contact.eyebrow": "Contato", "contact.title": "Vamos conversar.",
    "contact.text": "Aberto a colaborar em open source, trabalhos freelance, ou apenas uma boa conversa técnica.",
    "contact.wa": "Siga meu canal do WhatsApp",
    "contact.location": "Vila Esperança, Maringá — Brasil",
    "footer.made": "Feito com HTML, CSS & JS puro.",
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
const skills = [
  "JavaScript", "TypeScript", "Node.js", "React", "Express", "REST API",
  "PostgreSQL", "MongoDB", "Docker", "Android", "Capacitor", "Git & GitHub",
];
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = skills
  .map((s) => `<div class="skill-cell"><span class="skill-cell__bullet"></span>${s}</div>`)
  .join("");

/* ---------- TIMELINE ---------- */
const timelineData = [
  { date: "Ongoing", title: "Open Source Development", text: "Building and maintaining open source tools and libraries, shared publicly on GitHub." },
  { date: "Ongoing", title: "Co-Founder — SYRIX COMPANY", text: "Leading and collaborating on a small team shipping independent open source software." },
  { date: "Ongoing", title: "Full Stack Web Development", text: "Designing and building web applications end to end — from API to interface." },
  { date: "Ongoing", title: "Android Development", text: "Building cross-platform mobile apps with Capacitor on top of web technologies." },
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
            ${r.language ? `<span><span class="repo-card__lang-dot"></span>${r.language}</span>` : ""}
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
