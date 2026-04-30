export interface Artist {
    id: number;
    name: string;
    genre: string;
    bio: string;
    img: string;
}

const base = import.meta.env.BASE_URL;

export const ARTISTS: Artist[] = [
    { id: 1, name: "Tsemi", genre: "Afrobeats", bio: "Singer/Song writer", img: `${base}themipfp.jpeg` },
    { id: 2, name: "Kyrah", genre: "RnB", bio: "Singer/song writer, drummer, producer", img: `${base}kyrahpfp.jpeg` },
    { id: 3, name: "Vamelia", genre: "Rock", bio: "Singer/song writer, producer", img: `${base}vameliapfp.jpeg` },
    { id: 4, name: "Tasytii", genre: "RnB", bio: "singer/song writer", img: `${base}tasypfp.jpeg` },
    { id: 5, name: "Yullin", genre: "pop", bio: "Singer/song writer, producer", img: `${base}yullinpfp.jpeg` },
    { id: 6, name: "Steph", genre: "RnB", bio: "Singer/song writer", img: `${base}stephpfp.jpeg` },
];

export const GALLERY_IMGS: string[] = Array.from(
    { length: 12 },
    (_, i) => `https://picsum.photos/seed/gallery${i + 1}/600/600`
);

