import Image from "next/image";
import favoriteIcon from "../assets/heart.svg"; // Use your regular SVG import

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // Set the color based on whether it's a favorite
  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: isFavorite ? "red" : "blue", // Control color here
  };

  return (
    <button
      onClick={onToggleFavorite}
      aria-label="Toggle Favorite"
      style={buttonStyle}
    >
      <Image src={favoriteIcon} alt="Favorite Icon" width={24} height={24} />
    </button>
  );
}
