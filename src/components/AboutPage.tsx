interface AboutPageProps {
    onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
    return (
        <div className="static-page">
            <button className="back-btn" onClick={onBack}>← Back</button>
            <div className="static-page-inner">
                <span className="section-label">About</span>
                <h1 className="static-page-title">The Unsigned</h1>
                <p className="static-page-slogan">Only Her Sound</p>
                <div className="static-page-body">
                    <p>
                        We are an indie label, focusing on female R&B, Rap, Pop and Neo soul artists.
                    </p>
                    <p>
                        Any additional music professionals working within our label will be female, this could be producers or audio engineers.
                    </p>
                    <p>
                        We are very big on supporting and giving visibility to emerging artists and opportunities within the music industry.
                    </p>

                </div>

                <div className="about-cities">
                    {["London, Fulham", ].map((city) => (
                        <span key={city} className="about-city">{city}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}