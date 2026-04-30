interface HeroProps {
    onTitleClick: () => void;
}

export default function Hero({ onTitleClick }: HeroProps) {
    return (
        <section className="hero">
            <h1 className="hero-title" onClick={onTitleClick}>
                THE UNSIGNED
            </h1>
            <p className="hero-slogan">Only Her Sound</p>
        </section>
    );
}