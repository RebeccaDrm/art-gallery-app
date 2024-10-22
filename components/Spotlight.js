import Image from 'next/image';

export default function Spotlight({ image, artist }) {
  return (
    <div className="spotlight">
      <h2>Spotlight Art Piece</h2>
      <Image src={image} alt={`Art by ${artist}`} width={400} height={400} />
      <p>Artist: {artist}</p>
    </div>
  );
}