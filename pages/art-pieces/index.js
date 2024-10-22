import { useContext } from 'react';
import { ArtContext } from '../_app';
import ArtPieces from '../../components/ArtPieces';

export default function ArtPiecesPage() {
  const { pieces, artPiecesInfo, toggleFavorite } = useContext(ArtContext);

  return (
    <div>
      <ArtPieces
        pieces={pieces.map((piece) => ({
          ...piece,
          isFavorite: artPiecesInfo[piece.slug]?.isFavorite, // Pass favorite status
          onToggleFavorite: () => toggleFavorite(piece.slug), // Pass toggle function
        }))}
      />
    </div>
  );
}