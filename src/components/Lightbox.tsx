import { useEffect } from "react";

interface LightboxProps {
    src: string;
    onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose}>×</button>
            <img
                src={src}
                alt=""
                className="lightbox-img"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}