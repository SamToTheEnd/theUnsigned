export interface Artist {
    id: number;
    name: string;
    genre: string;
    bio: string;
    img: string;
}

export const ARTISTS: Artist[] = [
    {
        id: 1,
        name: "Tsemi",
        genre: "Afrobeats",
        bio: "Singer/Song writer",
        img: "/themipfp.jpeg",
    },
    {
        id: 2,
        name: "Kyrah",
        genre: "RnB",
        bio: "Singer/song writer, drummer, producer",
        img: "/kyrahpfp.jpeg",
    },
    {
        id: 3,
        name: "Vamelia",
        genre: "Rock",
        bio: "Singer/song writer, producer",
        img: "/vameliapfp.jpeg",
    },
    {
        id: 4,
        name: "Tasytii",
        genre: "RnB",
        bio: "singer/song writer",
        img: "/tasypfp.jpeg",
    },
    {
        id: 5,
        name: "Yullin",
        genre: "pop",
        bio: "Singer/song writer, producer",
        img: "/yullinpfp.jpeg",
    },
    {
        id: 6,
        name: "Steph",
        genre: "RnB",
        bio: "Singer/song writer",
        img: "/stephpfp.jpeg",
    },
];

export const GALLERY_IMGS: string[] = Array.from(
    { length: 12 },
    (_, i) => `https://picsum.photos/seed/gallery${i + 1}/600/600`
);

