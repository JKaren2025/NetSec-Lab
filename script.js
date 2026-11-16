
document.addEventListener("DOMContentLoaded", function () {

    // Actualizar año automáticamente
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mostrar u ocultar análisis del correo
    const analyzeButton = document.getElementById("analyzeButton");
    const analysis = document.getElementById("analysis");

    if (analyzeButton && analysis) {

        analyzeButton.addEventListener("click", function () {

            analysis.classList.toggle("visible");

            if (analysis.classList.contains("visible")) {
                analyzeButton.textContent = "Ocultar análisis ↑";
                analysis.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            } else {
                analyzeButton.textContent = "Revisar señales de seguridad →";
            }

        });

    }

});
