interface NewsPageProps {
    onBack: () => void;
}

const POSTERS = [
    "/posterOne.jpeg",
    "/posterTwo.jpeg",
    "/posterThree.jpeg",
    "/posterFour.jpeg",
    "/posterFive.jpeg",
    "/posterSix.jpeg",
];

export default function NewsPage({ onBack, onLightbox }: NewsPageProps & { onLightbox: (src: string) => void }) {
    return (
        <div className="static-page">
            <button className="back-btn" onClick={onBack}>← Back</button>
            <span className="section-label">News</span>
            <div className="products-grid">
                {POSTERS.map((src, i) => (
                    <div className="product-card" key={i} onClick={() => onLightbox(src)} style={{ cursor: "pointer" }}>
                        <div className="product-img">
                            <img src={src} alt={`Poster ${i + 1}`} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}