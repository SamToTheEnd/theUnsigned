import { Artist } from "../data/artists";

interface ArtistPageProps {
    artist: Artist;
    onBack: () => void;
}

export default function ArtistPage({ artist, onBack }: ArtistPageProps) {
    const gallerySeeds = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <div className="artist-page">
            <button className="back-btn" onClick={onBack}>
                ← Back
            </button>

            <div className="artist-page-hero">
                <div className="artist-page-img">
                    <img src={artist.img} alt={artist.name} />
                </div>
                <div className="artist-page-info">
                    <span className="section-label">{artist.genre}</span>
                    <h1>{artist.name}</h1>
                    <p>{artist.bio}</p>
                    <p className="artist-page-tagline">
                        Unapologetically Women — The Unsigned Roster
                    </p>
                </div>
            </div>

            <div>
        <span className="section-label" style={{ display: "block", marginBottom: "24px" }}>
          Gallery
        </span>
                <div className="gallery-grid">
                    {gallerySeeds.map((n) => (
                        <div className="gallery-item" key={n}>
                            <img
                                src={`https://picsum.photos/seed/${artist.id}g${n}/400/400`}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}