import { Artist } from "../data/artists";

interface ArtistCardProps {
    artist: Artist;
    onClick: (artist: Artist) => void;
}

export default function ArtistCard({ artist, onClick }: ArtistCardProps) {
    return (
        <div className="artist-card" onClick={() => onClick(artist)}>
            <img src={artist.img} alt={artist.name} loading="lazy" />
            <div className="artist-card-name">{artist.name}</div>
        </div>
    );
}