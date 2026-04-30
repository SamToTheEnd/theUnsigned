import { useState } from "react";
import { Artist } from "../data/artists";

interface ArtistPageProps {
    artist: Artist;
    onBack: () => void;
    onLightbox: (src: string) => void;
}

export default function ArtistPage({ artist, onBack, onLightbox }: ArtistPageProps) {
    const [hoveredImg, setHoveredImg] = useState<string | null>(null);
    const gallerySeeds = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <div className="artist-page">

            {hoveredImg && (
                <div
                    className="roster-bg-image"
                    style={{ backgroundImage: `url(${hoveredImg})` }}
                />
            )}

            <button className="back-btn" onClick={onBack}>← Back</button>


            <div className="artist-page-hero">
                <div className="artist-page-info">
                    <span className="section-label">{artist.genre}</span>
                    <h1>{artist.name}</h1>
                    <p>{artist.bio}</p>
                    <p className="artist-page-tagline">
                        Unapologetically Women — The Unsigned Roster
                    </p>
                </div>
                <div className="artist-page-img">
                    <img src={artist.img} alt={artist.name} />
                </div>
            </div>


            <div className="artist-gallery">
        <span className="section-label" style={{ display: "block", marginBottom: "24px" }}>
          Gallery
        </span>
                <div className="gallery-grid">
                    {gallerySeeds.map((n) => {
                        const thumb = `https://picsum.photos/seed/${artist.id}g${n}/400/400`;
                        const full = `https://picsum.photos/seed/${artist.id}g${n}/1200/1200`;
                        return (
                            <div
                                className="gallery-item"
                                key={n}
                                onMouseEnter={() => setHoveredImg(thumb)}
                                onMouseLeave={() => setHoveredImg(null)}
                                onClick={() => onLightbox(full)}
                            >
                                <img src={thumb} alt="" loading="lazy" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}