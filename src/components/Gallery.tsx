import { GALLERY_IMGS } from "../data/artists";

export default function Gallery() {
    return (
        <section className="section" id="gallery">
            <span className="section-label">Gallery</span>
            <div className="gallery-grid">
                {GALLERY_IMGS.map((src, i) => (
                    <div className="gallery-item" key={i}>
                        <img src={src} alt="" loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}