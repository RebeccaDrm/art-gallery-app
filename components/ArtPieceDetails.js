import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="art-piece-details">
      <Image src={image} alt={title} width={400} height={400} />
      <h2>{title}</h2>
      <p>
        <strong>Artist:</strong> {artist}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
