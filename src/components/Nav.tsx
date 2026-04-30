interface NavProps {
    onMenuOpen: () => void;
    onHome: () => void;
}

export default function Nav({ onMenuOpen, onHome }: NavProps) {
    return (
        <nav className="nav">
            <button className="nav-btn" onClick={onMenuOpen}>
                Menu
            </button>
            <button className="nav-btn nav-title" onClick={onHome}>
                The Unsigned
            </button>
        </nav>
    );
}