import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    const fetchArt = async () => {
      const response = await fetch('https://example-apis.vercel.app/api/art');
      const data = await response.json();
      setArtPieces(data);
    };

    fetchArt();
  }, []);

  return (
    <div>
      <h1>Art Gallery</h1>
      <div className="gallery">
        {artPieces.map(art => (
          <div key={art.id}>
            <Image src={art.imageSource} alt={art.name} width={300} height={300} />
            <h2>{art.name}</h2>
            <p>{art.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};