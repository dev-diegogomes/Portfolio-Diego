/* ==========================================================================
   DADOS DO SITE
   Edite este arquivo para mudar textos, serviços, projetos e contato.
   Nenhuma outra parte do código precisa ser alterada.
   ========================================================================== */

/* ---------- Contato ---------- */
const WHATSAPP_NUMBER = "5592984032167"; // código do país + DDD + número, sem símbolos
const DEFAULT_MESSAGE = "Olá, Diego! Acessei seu portfólio e gostaria de conversar sobre um projeto.";

/* ---------- Serviços ----------
   icon: nome de um ícone de ICON_PATHS (em render.js) */
const SERVICES = [
  {
    icon: "globe",
    title: "Desenvolvimento de Sites",
    items: [
      "Sites institucionais para empresas",
      "Landing pages para serviços e produtos",
      "Portfólios profissionais",
      "Sites responsivos e otimizados para celular",
    ],
  },
  {
    icon: "layers",
    title: "Desenvolvimento Full Stack",
    items: [
      "Interfaces front-end",
      "Funcionalidades back-end",
      "Integração entre interfaces, serviços e APIs",
      "Aplicações web conforme os requisitos",
    ],
  },
  {
    icon: "db",
    title: "Sistemas Personalizados",
    items: [
      "Controle financeiro",
      "Gestão de vendas e estoque",
      "Cadastro e gerenciamento de informações",
      "Relatórios e funcionalidades automatizadas",
    ],
  },
  {
    icon: "zap",
    title: "Automação e Integrações",
    items: [
      "Integração com APIs",
      "Processamento e organização de dados",
      "Automatização de tarefas por software",
      "Integração entre serviços digitais",
    ],
  },
  {
    icon: "wrench",
    title: "Manutenção e Melhorias",
    items: [
      "Correção de erros",
      "Melhorias de interface e usabilidade",
      "Atualização de funcionalidades",
      "Refatoração e organização de código",
    ],
  },
];

/* ---------- Projetos ----------
   id      : usado na URL da página do projeto (#/projeto/<id>)
   preview : tipo da prévia visual ("finance", "website", "landing", "management")
   isDemo  : true = prévia conceitual (aparece o selo "Prévia conceitual")
   liveUrl : link real da aplicação; se preenchido, o botão abre este link
   repoUrl : link do repositório no GitHub (opcional)
   notice  : aviso exibido na página do projeto */
const PROJECTS = [
  {
    id: "controle-financeiro",
    preview: "finance",
    name: "Controle Financeiro",
    isDemo: true,
    stack: ["Python", "Flet", "SQLite"],
    repoUrl: "",
    liveUrl: "",
    description:
      "Aplicação de controle financeiro desenvolvida para organizar informações financeiras e facilitar o acompanhamento de receitas e despesas por meio de uma interface gráfica intuitiva.",
    notice:
      "Projeto pessoal real. A imagem abaixo é uma prévia conceitual, não uma captura de tela da aplicação. Substitua por prints reais quando quiser.",
  },
  {
    id: "site-institucional",
    preview: "website",
    name: "Site Institucional",
    isDemo: true,
    stack: ["HTML5", "CSS3", "JavaScript"],
    repoUrl: "",
    liveUrl: "",
    description:
      "Site demonstrativo para empresas, com apresentação de serviços, seção sobre a empresa e canais de contato.",
    notice: "Projeto demonstrativo criado para o portfólio. Não é um trabalho entregue a cliente.",
  },
  {
    id: "landing-page",
    preview: "landing",
    name: "Landing Page Comercial",
    isDemo: true,
    stack: ["HTML5", "CSS3", "JavaScript"],
    repoUrl: "",
    liveUrl: "",
    description:
      "Landing page demonstrativa com apresentação de produto ou serviço, benefícios, chamadas para ação e layout responsivo.",
    notice: "Projeto demonstrativo criado para o portfólio. Não é um trabalho entregue a cliente.",
  },
  {
    id: "sistema-gestao",
    preview: "management",
    name: "Sistema de Gestão",
    isDemo: true,
    stack: ["Python", "SQLite", "APIs REST"],
    repoUrl: "",
    liveUrl: "",
    description:
      "Sistema demonstrativo de gestão de vendas e estoque, com produtos, controle de estoque, indicadores e relatórios.",
    notice:
      "Conceito demonstrativo. Os dados exibidos são fictícios e o sistema não foi entregue a cliente.",
  },
];

/* ---------- Tecnologias (grupos) ---------- */
const TECH_GROUPS = [
  { title: "Linguagens", items: ["Python", "JavaScript", "HTML5", "CSS3"] },
  {
    title: "Desenvolvimento de aplicações",
    items: ["Flet", "Desenvolvimento de interfaces", "Resolução de problemas"],
  },
  { title: "Dados e integração", items: ["SQLite", "APIs REST", "JSON"] },
  { title: "Ferramentas", items: ["Git", "GitHub", "Visual Studio Code"] },
];

/* ---------- Diferenciais ("Por que trabalhar comigo?") ---------- */
const DIFFERENTIALS = [
  {
    icon: "user",
    title: "Soluções personalizadas",
    text: "Desenvolvimento orientado às necessidades de cada projeto.",
  },
  {
    icon: "eye",
    title: "Foco na experiência do usuário",
    text: "Interfaces organizadas, intuitivas e responsivas.",
  },
  {
    icon: "code",
    title: "Organização técnica",
    text: "Preocupação com legibilidade, estrutura e manutenção do código.",
  },
  {
    icon: "chat",
    title: "Comunicação direta",
    text: "Contato próximo para entender requisitos e alinhar expectativas.",
  },
];
