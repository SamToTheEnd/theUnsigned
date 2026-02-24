import { useState } from "react";
import { ARTISTS, Artist } from "./data/artists";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import MenuOverlay from "./components/MenuOverlay";
import ArtistCard from "./components/ArtistCard";
import ArtistPage from "./components/ArtistPage";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";

type Page = "home" | "artist";

export default function App() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [page, setPage] = useState<Page>("home");
    const [currentArtist, setCurrentArtist] = useState<Artist | null>(null);

    const goHome = () => {
        setCurrentArtist(null);
        setPage("home");
    };

    const openArtist = (artist: Artist) => {
        setCurrentArtist(artist);
        setPage("artist");
    };

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Top nav */}
            <Nav onMenuOpen={() => setMenuOpen(true)} onHome={goHome} />

            {/* Full-screen artist menu */}
            <MenuOverlay
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                artists={ARTISTS}
                onSelectArtist={openArtist}
            />

            {/* Fixed corner links */}
            <a
                className="corner corner-bl"
                href="#artists"
                onClick={(e) => {
                    e.preventDefault();
                    goHome();
                    setTimeout(
                        () => document.getElementById("artists")?.scrollIntoView({ behavior: "smooth" }),
                        50
                    );
                }}
            >
                Artists
            </a>
            <a className="corner corner-br" href="#contact" onClick={scrollToContact}>
                Contact / Register
            </a>

            {/* Pages */}
            {page === "artist" && currentArtist ? (
                <ArtistPage artist={currentArtist} onBack={goHome} />
            ) : (
                <>
                    <Hero onTitleClick={() => setMenuOpen(true)} />

                    <Ticker />

                    <section className="section" id="artists">
                        <span className="section-label">Roster</span>
                        <div className="artists-grid">
                            {ARTISTS.map((a) => (
                                <ArtistCard key={a.id} artist={a} onClick={openArtist} />
                            ))}
                        </div>
                    </section>

                    <Gallery />

                    <ContactSection />

                    <footer className="footer">
                        <span>© 2025 The Unsigned</span>
                        <span>Unapologetically Women</span>
                        <span>Privacy Policy</span>
                    </footer>
                </>
            )}
        </>
    );
}