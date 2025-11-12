import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function FavouriteButton({ serie, onToggle}) {
    const [isFavourite, setIsFavourite] = useState(false);
    
    // useEffect para recordar los favoritos aunque recargue la página
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favoritos")) || [];
        const yaGuardada = stored.some((s) => s.id === serie.id);
        setIsFavourite(yaGuardada);
    }, [serie.id]);

    const handleClick = () => {
        let guardadas = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (isFavourite) {
            guardadas = guardadas.filter((s) => s.id !== serie.id);
        } else{
            guardadas.push(serie);
        }

        localStorage.setItem("favoritos", JSON.stringify(guardadas));
        setIsFavourite(!isFavourite);

        if (onToggle) onToggle(serie);
    }

    return (
        <button className = "favorite-btn" onClick = {handleClick}>
            <FaHeart size = {20} color = {isFavourite ? "red" : "gray"} />
        </button>
    )
}