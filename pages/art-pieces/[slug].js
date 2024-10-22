import { useRouter } from 'next/router';
import { useContext } from 'react';
import ArtPieceDetails from '../../components/ArtPieceDetails';
import { ArtContext } from '../_app';

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { artPieces, artPiecesInfo, toggleFavorite } = useContext(ArtContext);

  const artPiece = artPieces.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <div>Art piece not found</div>;
  }

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      isFavorite={artPiecesInfo[artPiece.slug]?.isFavorite} // Pass favorite status
      onToggleFavorite={() => toggleFavorite(artPiece.slug)} // Pass toggle function
    />
  );
}
