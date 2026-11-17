document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const announcement = document.getElementById("announcement");
  const closeAnnouncement = document.getElementById("closeAnnouncement");
  if (closeAnnouncement && announcement) {
    closeAnnouncement.addEventListener("click", () => announcement.remove());
  }

  const notificationButton = document.getElementById("notificationButton");
  const notificationPanel = document.getElementById("notificationPanel");
  if (notificationButton && notificationPanel) {
    notificationButton.addEventListener("click", () => {
      const isOpen = notificationButton.getAttribute("aria-expanded") === "true";
      notificationButton.setAttribute("aria-expanded", String(!isOpen));
      notificationPanel.hidden = isOpen;
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".notification-wrap")) {
        notificationButton.setAttribute("aria-expanded", "false");
        notificationPanel.hidden = true;
      }
    });
  }

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mainNav = document.getElementById("mainNav");
  if (mobileMenuButton && mainNav) {
    mobileMenuButton.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      mobileMenuButton.setAttribute("aria-expanded", String(open));
    });
  }

  const searchForm = document.getElementById("searchForm");
  const siteSearch = document.getElementById("siteSearch");
  const searchFeedback = document.getElementById("searchFeedback");
  const learningCards = [...document.querySelectorAll(".learning-card")];
  function filterCards() {
    if (!siteSearch || !learningCards.length) return;
    const query = siteSearch.value.trim().toLocaleLowerCase("es");
    let visible = 0;
    learningCards.forEach(card => {
      const text = (card.innerText + " " + (card.dataset.search || "")).toLocaleLowerCase("es");
      const match = !query || text.includes(query);
      card.hidden = !match;
      if (match) visible++;
    });
    if (searchFeedback) searchFeedback.textContent = query ? (visible ? `${visible} resultado(s) encontrado(s).` : "No se encontraron temas. Prueba con otra palabra.") : "";
  }
  if (searchForm) {
    searchForm.addEventListener("submit", event => {
      event.preventDefault();
      filterCards();
      document.getElementById("aprendizaje")?.scrollIntoView({ behavior: "smooth" });
    });
  }
  if (siteSearch) siteSearch.addEventListener("input", filterCards);

  const analyzeButton = document.getElementById("analyzeButton");
  const analysis = document.getElementById("analysis");
  if (analyzeButton && analysis) {
    analyzeButton.addEventListener("click", () => {
      const willShow = analysis.hidden;
      analysis.hidden = !willShow;
      analyzeButton.innerHTML = willShow
        ? 'Ocultar análisis <span>↑</span>'
        : 'Revisar el análisis del mensaje <span>→</span>';
      if (willShow) analysis.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const helpButton = document.getElementById("helpButton");
  const toast = document.getElementById("toast");
  if (helpButton && toast) {
    helpButton.addEventListener("click", () => {
      toast.textContent = "Explora las áreas de aprendizaje o consulta la actividad de seguridad del correo.";
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3500);
    });
  }
});
