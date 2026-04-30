import { useState } from "react";
import { ARTISTS, Artist } from "./data/artists";

import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import MenuOverlay from "./components/MenuOverlay";
import ArtistCard from "./components/ArtistCard";
import ContactSection from "./components/ContactSection";
import AboutPage from "./components/AboutPage";
import ProductsPage from "./components/ProductsPage";
import NewsPage from "./components/NewsPage";
import Lightbox from "./components/Lightbox";

type Page = "home" | "about" | "products" | "news";

export default function App() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [page, setPage] = useState<Page>("home");
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const [hoveredArtist, setHoveredArtist] = useState<Artist | null>(null);

    const goHome = () => {
        setPage("home");
        window.scrollTo({ top: 0 });
    };

    const navigate = (p: Page) => {
        setPage(p);
        window.scrollTo({ top: 0 });
    };

    const scrollToContact = () => {
        if (page !== "home") {
            setPage("home");
            setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        } else {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderPage = () => {
        switch (page) {
            case "about":
                return <AboutPage onBack={goHome} />;
            case "products":
                return <ProductsPage onBack={goHome} />;
            case "news":
                return <NewsPage onBack={goHome} onLightbox={setLightboxImg} />;
            default:
                return (
                    <>
                        {hoveredArtist && (
                            <div
                                className="roster-bg-image"
                                style={{ backgroundImage: `url(${hoveredArtist.img})` }}
                            />
                        )}

                        <Hero onTitleClick={() => setMenuOpen(true)} />
                        <Ticker />

                        <section className="section" id="artists">
                            <span className="section-label">Roster</span>
                            <ul className="roster-list">
                                {ARTISTS.map((a) => (
                                    <ArtistCard
                                        key={a.id}
                                        artist={a}
                                        onHover={setHoveredArtist}
                                    />
                                ))}
                            </ul>
                        </section>

                        <ContactSection />
                    </>
                );
        }
    };

    return (
        <>
            <MenuOverlay
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                artists={ARTISTS}
                onSelectArtist={() => setMenuOpen(false)}
            />

            <button className="corner corner-tl" onClick={() => navigate("about")}>About</button>
            <button className="corner corner-tr" onClick={() => navigate("news")}>News</button>
            <button className="corner corner-bl" onClick={() => navigate("products")}>Products</button>
            <button className="corner corner-br" onClick={scrollToContact}>Register your interest</button>

            {renderPage()}

            {lightboxImg && (
                <Lightbox src={lightboxImg} onClose={() => setLightboxImg(null)} />
            )}
        </>
    );
}