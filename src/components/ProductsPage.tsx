const base = import.meta.env.BASE_URL;


interface ProductsPageProps {
    onBack: () => void;
}
const PRODUCTS = [
    { id: 1,  name: "KYRAH — TEE",      price: "£20", img: `${base}KyraShirt.jpeg`,    tag: "Apparel" },
    { id: 2,  name: "STEPH — TEE",      price: "£20", img: `${base}stephShirt.jpeg`,   tag: "Apparel" },
    { id: 3,  name: "TASYTII — TEE",    price: "£20", img: `${base}tasyShirt.jpeg`,    tag: "Apparel" },
    { id: 4,  name: "TSEMI — TEE",      price: "£20", img: `${base}tsemiShirt.jpeg`,   tag: "Apparel" },
    { id: 5,  name: "VAMELIA — TEE",    price: "£20", img: `${base}vmeliaShirt.jpeg`,  tag: "Apparel" },
    { id: 6,  name: "YULLIN — TEE",     price: "£20", img: `${base}yullinShirt.jpeg`,  tag: "Apparel" },
    { id: 7,  name: "KYRAH — TOTE",     price: "£25", img: `${base}kyraTote.jpeg`,     tag: "Accessories" },
    { id: 8,  name: "STEPH — TOTE",     price: "£25", img: `${base}stephTote.jpeg`,    tag: "Accessories" },
    { id: 9,  name: "TASYTII — TOTE",   price: "£25", img: `${base}tasyTote.jpeg`,     tag: "Accessories" },
    { id: 10, name: "TSEMI — TOTE",     price: "£25", img: `${base}tsemiTote.jpeg`,    tag: "Accessories" },
    { id: 11, name: "VAMELIA — TOTE",   price: "£25", img: `${base}vameliaTote.jpeg`,  tag: "Accessories" },
    { id: 12, name: "YULLIN — TOTE",    price: "£25", img: `${base}yullinTote.jpeg`,   tag: "Accessories" },
    { id: 13, name: "KYRAH — CD",       price: "£12", img: `${base}kyraCD.jpeg`,       tag: "Music" },
    { id: 14, name: "STEPH — CD",       price: "£12", img: `${base}stephCD.jpeg`,      tag: "Music" },
    { id: 15, name: "TASYTII — CD",     price: "£12", img: `${base}tasyCD.jpeg`,       tag: "Music" },
    { id: 16, name: "TSEMI — CD",       price: "£12", img: `${base}tsemiCD.jpeg`,      tag: "Music" },
    { id: 17, name: "VAMELIA — CD",     price: "£12", img: `${base}vameliaCD.jpeg`,    tag: "Music" },
    { id: 18, name: "YULLIN — CD",      price: "£12", img: `${base}yullinCD.jpeg`,     tag: "Music" },
    { id: 19, name: "KYRAH — VINYL",    price: "£25", img: `${base}kyraVinyl.jpeg`,    tag: "Music" },
    { id: 20, name: "STEPH — VINYL",    price: "£25", img: `${base}stephVinyl.jpeg`,   tag: "Music" },
    { id: 21, name: "TASYTII — VINYL",  price: "£25", img: `${base}tasyVinyl.jpeg`,    tag: "Music" },
    { id: 22, name: "TSEMI — VINYL",    price: "£25", img: `${base}tesmiVinyl.jpeg`,   tag: "Music" },
    { id: 23, name: "VAMELIA — VINYL",  price: "£25", img: `${base}vameliaVinyl.jpeg`, tag: "Music" },
    { id: 24, name: "YULLIN — VINYL",   price: "£25", img: `${base}yullinVinyl.jpeg`,  tag: "Music" },
];


export default function ProductsPage({ onBack }: ProductsPageProps) {
    return (
        <div className="static-page">
            <button className="back-btn" onClick={onBack}>← Back</button>
            <span className="section-label">Products</span>
            <div className="products-grid">
                {PRODUCTS.map((p) => (
                    <div className="product-card" key={p.id}>
                        <div className="product-img">
                            <img src={p.img} alt={p.name} loading="lazy" />
                            <span className="product-tag">{p.tag}</span>
                        </div>
                        <div className="product-info">
                            <p className="product-name">{p.name}</p>
                            <p className="product-price">{p.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}