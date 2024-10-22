import Image from 'next/image';
import FavoriteButton from './FavoriteButton';

export default function ArtPiecePreview({ image, title, artist, slug, isFavorite, onToggleFavorite }) {
  return (
    <div className="art-piece">
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}