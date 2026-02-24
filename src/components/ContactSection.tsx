import { useState } from "react";

export default function ContactSection() {
    const [email, setEmail] = useState<string>("");
    const [sent, setSent] = useState<boolean>(false);

    const handleSubmit = () => {
        if (email.trim()) setSent(true);
    };

    return (
        <div className="contact-section" id="contact">
            <span className="section-label">Register / Contact</span>
            <h2>Stay in the loop</h2>
            <p>
                We're building something for women who make music without permission.
                <br />
                Register your interest, submit your project, or just say hello.
            </p>

            {sent ? (
                <p className="contact-thanks">Thank you. We'll be in touch.</p>
            ) : (
                <div className="email-form">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    />
                    <button onClick={handleSubmit}>Register</button>
                </div>
            )}
        </div>
    );
}