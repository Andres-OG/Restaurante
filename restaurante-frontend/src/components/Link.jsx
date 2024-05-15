import React from "react";

// Maneja la navegación entre páginas
const NAVIGATION_EVENT = 'pushstate';

/* Función para navegar entre páginas */
function navigate(href) {
    window.history.pushState({}, "", href); // Se cambia la url
    const navigationEvent = new Event(NAVIGATION_EVENT); // Se crea un evento de navegación
    window.dispatchEvent(navigationEvent); // Se dispara el evento
}

/* Componente Link para manejar la navegación entre páginas
recibe target (el evento), to (a donde se dirige), classN (clase css) 
*/
export function Link( {target, to, classN,  ...props }) {
    const handleClick = (event) => { // Función para manejar el click
        const isMainEvent = event.button === 0; // Si el evento es el principal
        const isModifiedEvent = !event.metaKey || event.ctrlKey || event.shiftKey || event.altKey; // Si el evento es modificado
        const isManageableEvent = target === undefined || target === "_self"; // Si el evento es manejable

        if (isMainEvent && isModifiedEvent && !isManageableEvent) { // Si el evento es manejable
            event.preventDefault(); // Se previene el comportamiento por defecto
            navigate(to); // Se navega a la url
        }
    };
    return <a className={classN} onClick={handleClick} href={to} target={target} {...props} />; // Se retorna el link
}