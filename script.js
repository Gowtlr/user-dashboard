const users = [
  {
    name: "Ana Souza",
    company: "Nubank",
    email: "ana.souza@gmail.com",
    city: "São Paulo",
    username: "ana.souza",
    phone: "+55 11 99876-1122",
    role: { pt: "Analista de Produto", en: "Product Analyst" },
    department: { pt: "Produto", en: "Product" },
    status: "active",
    joinedAt: { pt: "Março de 2024", en: "March 2024" }
  },
  {
    name: "Bruno Oliveira",
    company: "iFood",
    email: "bruno.oliveira@gmail.com",
    city: "Rio de Janeiro",
    username: "bruno.oliveira",
    phone: "+55 21 99741-2231",
    role: { pt: "Desenvolvedor Front-end", en: "Front-end Developer" },
    department: { pt: "Tecnologia", en: "Technology" },
    status: "active",
    joinedAt: { pt: "Janeiro de 2023", en: "January 2023" }
  },
  {
    name: "Carla Mendes",
    company: "Stone",
    email: "carla.mendes@gmail.com",
    city: "Belo Horizonte",
    username: "carla.mendes",
    phone: "+55 31 99633-4410",
    role: { pt: "Analista Financeira", en: "Financial Analyst" },
    department: { pt: "Financeiro", en: "Finance" },
    status: "pending",
    joinedAt: { pt: "Julho de 2024", en: "July 2024" }
  },
  {
    name: "Diego Santos",
    company: "Totvs",
    email: "diego.santos@gmail.com",
    city: "Curitiba",
    username: "diego.santos",
    phone: "+55 41 99811-3390",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    department: { pt: "Engenharia", en: "Engineering" },
    status: "active",
    joinedAt: { pt: "Novembro de 2022", en: "November 2022" }
  },
  {
    name: "Eduarda Lima",
    company: "XP Inc",
    email: "eduarda.lima@gmail.com",
    city: "Porto Alegre",
    username: "eduarda.lima",
    phone: "+55 51 99722-7812",
    role: { pt: "Especialista em Atendimento", en: "Customer Success Specialist" },
    department: { pt: "Customer Success", en: "Customer Success" },
    status: "inactive",
    joinedAt: { pt: "Fevereiro de 2022", en: "February 2022" }
  },
  {
    name: "Felipe Costa",
    company: "Conta Azul",
    email: "felipe.costa@gmail.com",
    city: "Florianópolis",
    username: "felipe.costa",
    phone: "+55 48 99855-2266",
    role: { pt: "Designer de Produto", en: "Product Designer" },
    department: { pt: "Design", en: "Design" },
    status: "active",
    joinedAt: { pt: "Agosto de 2023", en: "August 2023" }
  },
  {
    name: "Gabriela Rocha",
    company: "QuintoAndar",
    email: "gabriela.rocha@gmail.com",
    city: "Campinas",
    username: "gabriela.rocha",
    phone: "+55 19 99775-1458",
    role: { pt: "Coordenadora de Operações", en: "Operations Coordinator" },
    department: { pt: "Operações", en: "Operations" },
    status: "pending",
    joinedAt: { pt: "Maio de 2024", en: "May 2024" }
  },
  {
    name: "Henrique Alves",
    company: "Mercado Livre",
    email: "henrique.alves@gmail.com",
    city: "São Paulo",
    username: "henrique.alves",
    phone: "+55 11 99618-8834",
    role: { pt: "Analista de Dados", en: "Data Analyst" },
    department: { pt: "Dados", en: "Data" },
    status: "active",
    joinedAt: { pt: "Setembro de 2021", en: "September 2021" }
  },
  {
    name: "Isabela Martins",
    company: "PicPay",
    email: "isabela.martins@gmail.com",
    city: "Vitória",
    username: "isabela.martins",
    phone: "+55 27 99843-3377",
    role: { pt: "Gerente de Marketing", en: "Marketing Manager" },
    department: { pt: "Marketing", en: "Marketing" },
    status: "inactive",
    joinedAt: { pt: "Dezembro de 2022", en: "December 2022" }
  },
  {
    name: "João Pedro",
    company: "VTEX",
    email: "joao.pedro@gmail.com",
    city: "Recife",
    username: "joao.pedro",
    phone: "+55 81 99790-5521",
    role: { pt: "Analista de Suporte", en: "Support Analyst" },
    department: { pt: "Suporte", en: "Support" },
    status: "active",
    joinedAt: { pt: "Abril de 2023", en: "April 2023" }
  }
];

const translations = {
  en: {
    pageTitle: "User Dashboard",
    panelLabel: "Admin panel",
    title: "User Dashboard",
    description: "View users, search by name, filter by city, and check details.",
    totalUsers: "Total users",
    cities: "Cities",
    companies: "Companies",
    searchLabel: "Search user",
    searchPlaceholder: "Type a name",
    cityLabel: "City",
    userList: "User list",
    allCities: "All cities",
    email: "Email",
    phone: "Phone",
    city: "City",
    username: "Username",
    role: "Role",
    department: "Department",
    joinedAt: "Joined at",
    details: "View details",
    detailsTitle: "User details",
    noUsers: "No users found.",
    active: "Active",
    pending: "Pending",
    inactive: "Inactive",
    usersLoaded: (count) => `${count} users loaded.`
  },
  pt: {
    pageTitle: "Dashboard de Usuários",
    panelLabel: "Painel administrativo",
    title: "Dashboard de Usuários",
    description: "Visualize usuários, pesquise por nome, filtre por cidade e consulte detalhes.",
    totalUsers: "Total de usuários",
    cities: "Cidades",
    companies: "Empresas",
    searchLabel: "Buscar usuário",
    searchPlaceholder: "Digite um nome",
    cityLabel: "Cidade",
    userList: "Lista de usuários",
    allCities: "Todas as cidades",
    email: "Email",
    phone: "Telefone",
    city: "Cidade",
    username: "Usuário",
    role: "Cargo",
    department: "Departamento",
    joinedAt: "Entrou em",
    details: "Ver detalhes",
    detailsTitle: "Detalhes do usuário",
    noUsers: "Nenhum usuário encontrado.",
    active: "Ativo",
    pending: "Pendente",
    inactive: "Inativo",
    usersLoaded: (count) => `${count} usuários carregados.`
  }
};

let currentLanguage = localStorage.getItem("dashboard-language") || "en";
let activeModalUsername = null;

const searchInput = document.getElementById("searchInput");
const cityFilter = document.getElementById("cityFilter");
const usersContainer = document.getElementById("usersContainer");
const loadedUsersText = document.getElementById("loadedUsersText");
const totalUsersValue = document.getElementById("totalUsersValue");
const totalCitiesValue = document.getElementById("totalCitiesValue");
const totalCompaniesValue = document.getElementById("totalCompaniesValue");
const langButtons = document.querySelectorAll(".lang-btn");

const userModal = document.getElementById("userModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverline = document.getElementById("modalOverline");
const modalName = document.getElementById("modalName");
const modalCompany = document.getElementById("modalCompany");
const modalStatus = document.getElementById("modalStatus");

const modalEmailLabel = document.getElementById("modalEmailLabel");
const modalPhoneLabel = document.getElementById("modalPhoneLabel");
const modalCityLabel = document.getElementById("modalCityLabel");
const modalUsernameLabel = document.getElementById("modalUsernameLabel");
const modalRoleLabel = document.getElementById("modalRoleLabel");
const modalDepartmentLabel = document.getElementById("modalDepartmentLabel");
const modalJoinedAtLabel = document.getElementById("modalJoinedAtLabel");

const modalEmail = document.getElementById("modalEmail");
const modalPhone = document.getElementById("modalPhone");
const modalCity = document.getElementById("modalCity");
const modalUsername = document.getElementById("modalUsername");
const modalRole = document.getElementById("modalRole");
const modalDepartment = document.getElementById("modalDepartment");
const modalJoinedAt = document.getElementById("modalJoinedAt");

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function getFilteredUsers() {
  const searchTerm = normalizeText(searchInput.value.trim());
  const selectedCity = cityFilter.value;

  return users.filter((user) => {
    const matchesName = normalizeText(user.name).includes(searchTerm);
    const matchesCity = !selectedCity || user.city === selectedCity;
    return matchesName && matchesCity;
  });
}

function updateStaticTexts() {
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = t.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.placeholder = t[key];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });
}

function renderCityOptions() {
  const t = translations[currentLanguage];
  const previousValue = cityFilter.value;

  const uniqueCities = [...new Set(users.map((user) => user.city))]
    .sort((a, b) => a.localeCompare(b, "pt-BR"));

  cityFilter.innerHTML = `
    <option value="">${t.allCities}</option>
    ${uniqueCities.map((city) => `<option value="${city}">${city}</option>`).join("")}
  `;

  cityFilter.value = uniqueCities.includes(previousValue) ? previousValue : "";
}

function renderSummary() {
  const uniqueCities = new Set(users.map((user) => user.city)).size;
  const uniqueCompanies = new Set(users.map((user) => user.company)).size;

  totalUsersValue.textContent = users.length;
  totalCitiesValue.textContent = uniqueCities;
  totalCompaniesValue.textContent = uniqueCompanies;
}

function renderUsers() {
  const t = translations[currentLanguage];
  const filteredUsers = getFilteredUsers();

  loadedUsersText.textContent = t.usersLoaded(filteredUsers.length);

  if (!filteredUsers.length) {
    usersContainer.innerHTML = `<div class="empty-state">${t.noUsers}</div>`;
    return;
  }

  usersContainer.innerHTML = filteredUsers
    .map((user) => {
      const initials = getInitials(user.name);

      return `
        <article class="user-card">
          <div class="user-card-header">
            <div class="avatar">${initials}</div>
            <div>
              <h3>${user.name}</h3>
              <span class="company">${user.company}</span>
            </div>
          </div>

          <div class="user-card-body">
            <p><strong>${t.email}:</strong> ${user.email}</p>
            <p><strong>${t.city}:</strong> ${user.city}</p>
            <p><strong>${t.username}:</strong> ${user.username}</p>
          </div>

          <button class="details-btn" type="button" data-username="${user.username}">
            ${t.details}
          </button>
        </article>
      `;
    })
    .join("");
}

function fillModal(user) {
  const t = translations[currentLanguage];

  modalOverline.textContent = t.detailsTitle;
  modalName.textContent = user.name;
  modalCompany.textContent = user.company;

  modalStatus.textContent = t[user.status];
  modalStatus.className = `status-badge status-${user.status}`;

  modalEmailLabel.textContent = t.email;
  modalPhoneLabel.textContent = t.phone;
  modalCityLabel.textContent = t.city;
  modalUsernameLabel.textContent = t.username;
  modalRoleLabel.textContent = t.role;
  modalDepartmentLabel.textContent = t.department;
  modalJoinedAtLabel.textContent = t.joinedAt;

  modalEmail.textContent = user.email;
  modalPhone.textContent = user.phone;
  modalCity.textContent = user.city;
  modalUsername.textContent = user.username;
  modalRole.textContent = user.role[currentLanguage];
  modalDepartment.textContent = user.department[currentLanguage];
  modalJoinedAt.textContent = user.joinedAt[currentLanguage];
}

function openUserModal(username) {
  const user = users.find((item) => item.username === username);
  if (!user) return;

  activeModalUsername = username;
  fillModal(user);
  userModal.classList.remove("hidden");
}

function closeUserModal() {
  activeModalUsername = null;
  userModal.classList.add("hidden");
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("dashboard-language", lang);

  updateStaticTexts();
  renderCityOptions();
  renderSummary();
  renderUsers();

  if (activeModalUsername) {
    const activeUser = users.find((user) => user.username === activeModalUsername);
    if (activeUser) {
      fillModal(activeUser);
    }
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

searchInput.addEventListener("input", renderUsers);
cityFilter.addEventListener("change", renderUsers);

usersContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".details-btn");
  if (!button) return;

  openUserModal(button.dataset.username);
});

closeModalBtn.addEventListener("click", closeUserModal);

userModal.addEventListener("click", (event) => {
  if (event.target === userModal) {
    closeUserModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !userModal.classList.contains("hidden")) {
    closeUserModal();
  }
});

setLanguage(currentLanguage);