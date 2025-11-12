import { FaTimes } from "react-icons/fa";

export default function Modal({ serie, onClose}) {
    function limpiarResumen(texto) {
        if (!texto) return "Sin descripción disponible";
        const sinEtiquetas = texto.replace(/<[^>]+>/g, "");
        return sinEtiquetas.length > 150 ? sinEtiquetas.slice(0, 150) + "..." : sinEtiquetas;
    }

    if (!serie) return null;

    return (
        <div className = "modal-overlay" onClick = {onClose}>
            <div className = "modal-content" onClick = {(e) => e.stopPropagation()}>
                <button className = "close-btn" onClick = {onClose}>
                    <FaTimes />
                </button>

                {serie.imagen ? (
                    <img src = {serie.imagen} alt = {serie.nombre} />
                ) : (
                    <div className = "no-image">Sin imagen</div>
                )}

                <h2>{serie.nombre}</h2>
                <p>{limpiarResumen(serie.resumen)}</p>
            </div>
        </div>
    )
}