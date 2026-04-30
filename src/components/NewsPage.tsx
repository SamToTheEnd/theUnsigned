const base = import.meta.env.BASE_URL;

interface NewsPageProps {
    onBack: () => void;
    onLightbox: (src: string) => void;
}

const POSTERS = [
    `${base}posterOne.jpeg`,
    `${base}posterTwo.jpeg`,
    `${base}posterThree.jpeg`,
    `${base}posterFour.jpeg`,
    `${base}posterFive.jpeg`,
    `${base}posterSix.jpeg`,
];

export default function NewsPage({ onBack, onLightbox }: NewsPageProps) {
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