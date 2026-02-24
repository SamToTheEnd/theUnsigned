import { Artist } from "../data/artists";

interface MenuOverlayProps {
    open: boolean;
    onClose: () => void;
    artists: Artist[];
    onSelectArtist: (artist: Artist) => void;
}

export default function MenuOverlay({
                                        open,
                                        onClose,
                                        artists,
                                        onSelectArtist,
                                    }: MenuOverlayProps) {
    return (
        <div className={`menu-overlay${open ? " open" : ""}`}>
            <button className="menu-close" onClick={onClose}>
                Close ×
            </button>
            <span className="section-label">Roster</span>
            <ul className="menu-artist-list">
                {artists.map((a) => (
                    <li
                        key={a.id}
                        onClick={() => {
                            onSelectArtist(a);
                            onClose();
                        }}
                    >
                        {a.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}