import { useState } from "react";
import { Artist } from "../data/artists";

interface MenuOverlayProps {
    open: boolean;
    onClose: () => void;
    artists: Artist[];
    onSelectArtist: (artist: Artist) => void;
}

export default function MenuOverlay({ open, onClose, artists, onSelectArtist }: MenuOverlayProps) {
    const [hoveredArtist, setHoveredArtist] = useState<Artist | null>(null);

    return (
        <div className={`menu-overlay${open ? " open" : ""}`}>

            {hoveredArtist && (
                <div
                    className="menu-bg-image"
                    style={{ backgroundImage: `url(${hoveredArtist.img})` }}
                />
            )}

            <button className="menu-close" onClick={onClose}>Close ×</button>

            <ul className="menu-artist-list">
                {artists.map((a) => (
                    <li
                        key={a.id}
                        onMouseEnter={() => setHoveredArtist(a)}
                        onMouseLeave={() => setHoveredArtist(null)}
                        onClick={() => { onSelectArtist(a); onClose(); }}
                    >
                        {a.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}