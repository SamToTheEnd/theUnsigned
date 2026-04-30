import { Artist } from "../data/artists";

interface ArtistCardProps {
    artist: Artist;
    onHover: (artist: Artist | null) => void;
}

export default function ArtistCard({ artist, onHover }: ArtistCardProps) {
    return (
        <div
            className="artist-card"
            onMouseEnter={() => onHover(artist)}
            onMouseLeave={() => onHover(null)}
        >
            <span className="artist-card-name">{artist.name}</span>
        </div>
    );
}