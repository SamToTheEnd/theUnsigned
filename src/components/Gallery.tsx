import { GALLERY_IMGS } from "../data/artists";

interface GalleryProps {
    fullPage?: boolean;
    onLightbox: (src: string) => void;
    onBack?: () => void;
}

export default function Gallery({ fullPage = false, onLightbox, onBack }: GalleryProps) {
    const imgs = fullPage ? [...GALLERY_IMGS, ...GALLERY_IMGS.map((s) => s.replace("gallery", "gal"))] : GALLERY_IMGS;

    return (
        <section className={fullPage ? "static-page" : "section"} id="gallery">
            {fullPage && onBack && (
                <button className="back-btn" onClick={onBack}>← Back</button>
            )}
            <span className="section-label">Gallery</span>
            <div className="gallery-grid">
                {imgs.map((src, i) => (
                    <div
                        className="gallery-item"
                        key={i}
                        onClick={() => onLightbox(src.replace("/600/600", "/1200/1200"))}
                    >
                        <img src={src} alt="" loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}