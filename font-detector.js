(function() {
    if (window.fontDetectorLoaded) return;
    window.fontDetectorLoaded = true;

    let tooltip = document.getElementById("font-detector-tooltip");
    let active = true;

    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "font-detector-tooltip";
        Object.assign(tooltip.style, {
            position: "fixed", // Cambiado a fixed para evitar saltos de scroll
            padding: "10px 14px",
            background: "#1a1a1a",
            color: "#ffffff",
            borderRadius: "8px",
            fontSize: "13px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            zIndex: "1000000",
            pointerEvents: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.1)",
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
            let info = `🔍 ${rawFont} • ${style.fontWeight} • ${style.fontSize}`;
            
            tooltip.textContent = info;
            tooltip.style.left = (e.clientX + 15) + "px";
            tooltip.style.top = (e.clientY + 15) + "px";
            tooltip.style.display = "block";
            tooltip.style.opacity = "1";
        }
    };

    const onClick = (e) => {
        if (!active) return;
        e.preventDefault();
        e.stopPropagation();

        let element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
            let style = window.getComputedStyle(element);
            let fontName = style.fontFamily.split(',')[0].replace(/['"]/g, '');
            // Abrir búsqueda en Google
            window.open(`https://www.google.com/search?q=${encodeURIComponent(fontName + " font")}`, '_blank');
        }
    };

    const onKeyDown = (e) => {
        if (e.key === "Escape") {
            active = false;
            tooltip.remove();
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("click", onClick, true);
            window.fontDetectorLoaded = false;
            console.log("Font Detector desactivado.");
        }
    };

    // Eventos (usamos captura en el click para "robar" el evento antes que la web)
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("click", onClick, true); 
    document.addEventListener("keydown", onKeyDown);

    console.log("Font Detector activo. Clic para buscar en Google. Esc para salir.");
})();