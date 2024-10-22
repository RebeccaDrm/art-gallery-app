import Link from 'next/link';
import ArtPiecePreview from './ArtPiecePreview';

export default function ArtPieces({ pieces }) {
  return (
    <div className="gallery">
      {pieces.map((art) => (
        <Link href={`/art-pieces/${art.slug}`} key={art.id}>
            <ArtPiecePreview
              image={art.imageSource}
              title={art.name}
              artist={art.artist}
            />
        </Link>
      ))}
    </div>
  );
}