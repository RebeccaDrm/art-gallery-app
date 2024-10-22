import useSWR from 'swr';
import ArtPieces from '../components/ArtPieces';
import Spotlight from '../components/Spotlight';

const fetcher = (url) => fetch(url).then((res) => res.json());

function getRandomArtPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function HomePage() {
  // Fetch art pieces using SWR
  const { data: artPieces, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);

  if (error) return <div>Failed to load art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;

   // Pick a random art piece for spotlight
   const spotlightPiece = getRandomArtPiece(artPieces);

  return (
    <div>
      <h1>Art Gallery</h1>

      <Spotlight image={spotlightPiece.imageSource} artist={spotlightPiece.artist} />
      <ArtPieces pieces={artPieces} />
    </div>
  );
}