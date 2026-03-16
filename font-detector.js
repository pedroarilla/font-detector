(function() {
    // Evitar múltiples instancias
    if (window.fontDetectorLoaded) return;
    window.fontDetectorLoaded = true;

    let tooltip = document.getElementById("font-detector-tooltip");
    let active = true;

    // Crear y configurar el tooltip
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "font-detector-tooltip";
        Object.assign(tooltip.style, {
            position: "fixed",
            padding: "10px 14px",
            background: "rgba(26, 26, 26, 0.95)",
            color: "#ffffff",
            borderRadius: "8px",
            fontSize: "13px",
            lineHeight: "1.4",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            zIndex: "1000000",
            pointerEvents: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
            display: "none",
            transition: "opacity 0.1s ease"
        });
        document.body.appendChild(tooltip);
    }

    const onMouseMove = (e) => {
        if (!active) return;
        
        let element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
            let style = window.getComputedStyle(element);
            let rawFont = style.fontFamily.split(',')[0].replace(/['"]/g, '');
            
            // Estructura de dos líneas: Datos | Instrucciones
            tooltip.innerHTML = `
                <div style="font-weight: 600; white-space: nowrap;">
                    ${rawFont} | ${style.fontWeight} | ${style.fontSize}
                </div>
                <div style="font-size: 10px; color: #aaa; margin-top: 4px; font-weight: 400;">
                    [Click: Search | Esc: Exit]
                </div>
            `;
            
            tooltip.style.left = (e.clientX + 15) + "px";
            tooltip.style.top = (e.clientY + 15) + "px";
            tooltip.style.display = "block";
            tooltip.style.opacity = "1";
        }
    };

    const onClick = (e) => {
        if (!active) return;
        
        // Evitamos que el click active enlaces o botones de la web
        e.preventDefault();
        e.stopPropagation();

        let element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
            let style = window.getComputedStyle(element);
            let fontName = style.fontFamily.split(',')[0].replace(/['"]/g, '');
            // Abrir búsqueda en Google en pestaña nueva
            window.open(`https://www.google.com/search?q=${encodeURIComponent(fontName + " font")}`, '_blank');
        }
    };

    const onKeyDown = (e) => {
        if (e.key === "Escape") {
            active = false;
            if (tooltip) tooltip.remove();
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("click", onClick, true);
            document.removeEventListener("keydown", onKeyDown);
            window.fontDetectorLoaded = false;
            console.log("Font Detector: Desactivado.");
        }
    };

    // Registrar eventos
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("click", onClick, true); // Usamos 'true' para capturar el click antes que la web
    document.addEventListener("keydown", onKeyDown);

    console.log("Font Detector: Activo. Clic para buscar, Esc para cerrar.");
})();