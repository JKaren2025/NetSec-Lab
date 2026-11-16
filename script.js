
// ==========================================
// NETSEC LAB - INTERACCIONES
// ==========================================

const notificationButton = document.getElementById(
    "notificationButton"
);

const announcement = document.getElementById(
    "announcement"
);

const readMoreBtn = document.getElementById(
    "readMoreBtn"
);

const closeAnnouncement = document.getElementById(
    "closeAnnouncement"
);

const securityModal = document.getElementById(
    "securityModal"
);

const closeModal = document.getElementById(
    "closeModal"
);

const dismissModal = document.getElementById(
    "dismissModal"
);

const reviewActivity = document.getElementById(
    "reviewActivity"
);


// ==========================================
// ABRIR NOTIFICACIONES
// ==========================================

notificationButton.addEventListener("click", () => {

    announcement.classList.toggle("active");

    if (announcement.classList.contains("active")) {
        announcement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

});


// ==========================================
// CERRAR BARRA DE ACTUALIZACIONES
// ==========================================

closeAnnouncement.addEventListener("click", () => {

    announcement.classList.remove("active");

});


// ==========================================
// ABRIR AVISO DE SEGURIDAD
// ==========================================

readMoreBtn.addEventListener("click", () => {

    securityModal.classList.add("active");

});


// ==========================================
// CERRAR VENTANA
// ==========================================

function closeSecurityModal() {

    securityModal.classList.remove("active");

}

closeModal.addEventListener("click", closeSecurityModal);

dismissModal.addEventListener("click", closeSecurityModal);


// Cerrar al pulsar fuera de la ventana

securityModal.addEventListener("click", (event) => {

    if (event.target === securityModal) {
        closeSecurityModal();
    }

});


// ==========================================
// CONTINUAR A LA REVISIÓN EDUCATIVA
// ==========================================

reviewActivity.addEventListener("click", () => {

    window.location.href = "correo.html";

});


// ==========================================
// CERRAR CON ESCAPE
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeSecurityModal();
        announcement.classList.remove("active");
    }

});

