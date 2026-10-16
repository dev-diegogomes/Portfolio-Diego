/* ==========================================================================
   INICIALIZAÇÃO
   Liga tudo: renderiza as seções, configura menu, animações e rotas.
   Depende de data.js e render.js (carregados antes, nessa ordem).
   ========================================================================== */

const PAGE_TITLE = "Diego Luan | Full Stack Developer & Software Engineer";

/** Faz todo elemento com [data-wa] abrir o WhatsApp com a mensagem padrão. */
function setupWhatsAppLinks() {
  document.querySelectorAll("[data-wa]").forEach((link) => {
    link.href = buildWhatsAppLink(DEFAULT_MESSAGE);
    link.target = "_blank";
    link.rel = "noopener";
  });
}

/** Menu compacto (celular): abre e fecha, mantendo aria-expanded correto. */
function setupMobileMenu() {
  const toggleButton = $("#menu-toggle");
  const menu = $("#menu");

  const setOpen = (isOpen) => {
    menu.classList.toggle("open", isOpen);
    toggleButton.setAttribute("aria-expanded", isOpen);
  };

  toggleButton.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") setOpen(false); // fecha ao escolher um link
  });
}

/** Anima os elementos .rv quando entram na tela. */
function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("on");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".rv").forEach((element) => observer.observe(element));
}

/** Alterna entre a página inicial e a página de um projeto (#/projeto/<id>). */
function handleRoute() {
  const match = location.hash.match(/^#\/projeto\/(.+)$/);
  const project = match && PROJECTS.find((item) => item.id === match[1]);

  $("#home").style.display = project ? "none" : "block";
  $("#project-page").style.display = project ? "block" : "none";

  if (project) {
    document.title = `${project.name} | Diego Luan`;
    renderProjectPage(project);
    window.scrollTo(0, 0);
  } else {
    document.title = PAGE_TITLE;
  }
}

function init() {
  renderServices();
  renderProjects();
  renderTechGroups();
  renderDifferentials();

  setupWhatsAppLinks();
  setupMobileMenu();
  setupScrollReveal();

  $("#year").textContent = new Date().getFullYear();

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}

init();
