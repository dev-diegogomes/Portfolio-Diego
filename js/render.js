/* ==========================================================================
   RENDERIZAÇÃO
   Funções que transformam os dados de data.js em HTML.
   Convenção: funções "build*" devolvem texto HTML; "render*" escrevem na página.
   ========================================================================== */

/* ---------- Utilitários ---------- */

/** Monta um link do WhatsApp com mensagem pré-preenchida. */
function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Atalho para document.querySelector. */
const $ = (selector) => document.querySelector(selector);

/** Gera as etiquetas de tecnologia (ex.: Python, Flet). */
function buildTags(stack) {
  return stack.map((tech) => `<span class="tag">${tech}</span>`).join("");
}

/* ---------- Ícones (SVG inline) ---------- */

const ICON_PATHS = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
  db: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6A8 8 0 1 1 21 12z"/>',
};

function buildIcon(name) {
  return `<span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON_PATHS[name]}</svg></span>`;
}

/* ---------- Prévias visuais dos projetos (dados fictícios) ---------- */

const PREVIEWS = {
  finance: () => {
    const barHeights = [40, 65, 50, 80, 55, 90];
    const bars = barHeights.map((h) => `<i style="height:${h}%"></i>`).join("");
    return `
      <div class="r">
        <div class="b">Receitas<b class="g">R$ 5.200</b></div>
        <div class="b">Despesas<b class="rd">R$ 3.140</b></div>
        <div class="b">Saldo<b>R$ 2.060</b></div>
      </div>
      <div class="b"><div class="bars">${bars}</div></div>`;
  },

  website: () => `
    <div class="b" style="display:flex;justify-content:space-between">
      <b style="font-size:.8rem">Empresa Exemplo</b><span>Serviços · Sobre · Contato</span>
    </div>
    <div class="hb">Soluções para o seu negócio<small>Texto demonstrativo</small><span>Fale conosco</span></div>
    <div class="r"><div class="b">Serviço A</div><div class="b">Serviço B</div><div class="b">Serviço C</div></div>`,

  landing: () => `
    <div class="hb" style="padding:22px">Aumente seus resultados<small>Produto demonstrativo com benefícios claros</small><span>Quero saber mais</span></div>
    <div class="r"><div class="b">Rápido</div><div class="b">Seguro</div><div class="b">Simples</div></div>`,

  management: () => `
    <div class="r">
      <div class="b">Vendas<b class="g">128</b></div>
      <div class="b">Estoque<b>1.340</b></div>
      <div class="b">Baixo<b class="rd">7</b></div>
    </div>
    <div class="b">
      <table>
        <tr><th>Produto</th><th>Qtd</th><th>Preço</th></tr>
        <tr><td>Item A</td><td>42</td><td>R$ 19</td></tr>
        <tr><td>Item B</td><td>8</td><td>R$ 45</td></tr>
        <tr><td>Item C</td><td>120</td><td>R$ 7</td></tr>
      </table>
    </div>`,
};

/** Envolve a prévia numa "janela" com três bolinhas e um endereço. */
function buildWindowFrame(previewType, label) {
  return `
    <div class="bar"><i></i><i></i><i></i><span class="mono" style="margin-left:8px">${label}</span></div>
    <div class="mk">${PREVIEWS[previewType]()}</div>`;
}

/* ---------- Seções da página inicial ---------- */

function renderServices() {
  $("#services-grid").innerHTML = SERVICES.map((service) => {
    const quoteLink = buildWhatsAppLink(
      `Olá, Diego! Vi seu portfólio e gostaria de solicitar um orçamento para: ${service.title}.`
    );
    return `
      <article class="card rv">
        ${buildIcon(service.icon)}
        <h3>${service.title}</h3>
        <ul>${service.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        <a class="btn" href="${quoteLink}" target="_blank" rel="noopener">Solicitar orçamento</a>
      </article>`;
  }).join("");
}

function renderProjects() {
  $("#projects-grid").innerHTML = PROJECTS.map((project) => {
    const projectUrl = project.liveUrl || `#/projeto/${project.id}`;
    const demoBadge = project.isDemo ? '<span class="bd">Prévia conceitual</span>' : "";
    const repoButton = project.repoUrl
      ? `<a class="btn" href="${project.repoUrl}" target="_blank" rel="noopener">GitHub</a>`
      : "";
    return `
      <article class="card pj rv">
        <div class="th" aria-hidden="true">${buildWindowFrame(project.preview, "prévia")}</div>
        <div class="pb">
          <h3>${project.name}</h3>
          ${demoBadge}
          <p>${project.description}</p>
          <div class="tags">${buildTags(project.stack)}</div>
          <div class="row" style="margin:4px 0 0">
            <a class="btn pri" href="${projectUrl}" target="_blank" rel="noopener">Visualizar projeto</a>
            ${repoButton}
          </div>
        </div>
      </article>`;
  }).join("");
}

function renderTechGroups() {
  $("#tech-grid").innerHTML = TECH_GROUPS.map((group) => `
    <div class="card rv">
      <h3 style="margin-bottom:8px">${group.title}</h3>
      <div>${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
    </div>`).join("");
}

function renderDifferentials() {
  $("#differentials-grid").innerHTML = DIFFERENTIALS.map((item) => `
    <div class="card rv">
      ${buildIcon(item.icon)}
      <h3>${item.title}</h3>
      <p style="color:var(--mu);margin:0">${item.text}</p>
    </div>`).join("");
}

/* ---------- Página individual de um projeto ---------- */

function renderProjectPage(project) {
  const repoButton = project.repoUrl
    ? `<a class="btn" href="${project.repoUrl}" target="_blank" rel="noopener">Ver repositório</a>`
    : "";
  const similarLink = buildWhatsAppLink(
    `Olá, Diego! Vi a prévia do projeto ${project.name} e gostaria de conversar sobre algo parecido.`
  );

  $("#project-content").innerHTML = `
    <a class="back" href="#projetos">← Voltar ao portfólio</a>
    <h1 style="margin-top:16px;font-size:clamp(2rem,5vw,3rem);font-weight:800">${project.name}</h1>
    <div class="tags" style="margin:14px 0">${buildTags(project.stack)}</div>
    <p style="color:var(--mu);max-width:62ch">${project.description}</p>
    <div class="big">${buildWindowFrame(project.preview, "previa/" + project.id)}</div>
    <p class="note">${project.notice}</p>
    <div class="row">
      <a class="btn wa" style="font-size:1rem;padding:14px 24px" href="${similarLink}" target="_blank" rel="noopener">Quero algo parecido</a>
      ${repoButton}
    </div>`;
}
