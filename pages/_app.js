import { createContext, useState, useEffect } from 'react';
import GlobalStyle from "../styles"; // Keep your global styles
import useSWR from 'swr';

// Create a context to manage the art pieces and favorite state
const ArtContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

// Utility function to create slugs from art piece names
function slugify(string) {
  return string.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export default function App({ Component, pageProps }) {
  // State to store the fetched art pieces
  const { data: artPieces, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState({}); // State to manage additional info (favorites)

  // Once art pieces are fetched, initialize artPiecesInfo
  useEffect(() => {
    if (artPieces) {
      // Add slugs to each art piece and initialize isFavorite flag
      const piecesWithSlugs = artPieces.map((piece) => ({
        ...piece,
        slug: slugify(piece.name),
      }));
      const initialInfo = piecesWithSlugs.reduce((info, piece) => {
        info[piece.slug] = { isFavorite: false }; // Set default favorite status to false
        return info;
      }, {});
      setArtPiecesInfo(initialInfo);
    }
  }, [artPieces]);

  // Function to toggle the favorite status for a specific art piece
  const toggleFavorite = (slug) => {
    setArtPiecesInfo((prevInfo) => ({
      ...prevInfo,
      [slug]: { isFavorite: !prevInfo[slug]?.isFavorite }, // Toggle the favorite flag
    }));
  };

  // Handle loading and error states
  if (error) return <div>Failed to load art pieces</div>;
  if (!artPieces) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle /> {/* Global styles */}

      {/* Provide art pieces and additional info globally */}
      <ArtContext.Provider value={{ artPieces, artPiecesInfo, toggleFavorite }}>
        {/* Render the actual page */}
        <Component {...pageProps} />
      </ArtContext.Provider>
    </>
  );
}
// Export ArtContext for use in other components/pages
export { ArtContext };

