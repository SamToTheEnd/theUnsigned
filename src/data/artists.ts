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
        name: "Damon Albarn",
        genre: "Britpop",
        bio: "blur",
        img: "https://picsum.photos/seed/nova/400/530",
    },
    {
        id: 2,
        name: "Graham Coxton",
        genre: "britpop",
        bio: "blur",
        img: "https://picsum.photos/seed/scarlett/400/530",
    },
    {
        id: 3,
        name: "Dave rowtree",
        genre: "britpop",
        bio: "blur",
        img: "https://picsum.photos/seed/luna/400/530",
    },
    {
        id: 4,
        name: "Alex James",
        genre: "britpopk",
        bio: "blur",
        img: "https://picsum.photos/seed/zara/400/530",
    },
    {
        id: 5,
        name: "Mark Knowfler",
        genre: "70s",
        bio: "dire straits",
        img: "https://picsum.photos/seed/maya/400/530",
    },
    {
        id: 6,
        name: "Thom Yorke",
        genre: "alt indie ",
        bio: "Radiohead",
        img: "https://picsum.photos/seed/elise/400/530",
    },
    {
        id: 7,
        name: "Paul Mcartney",
        genre: "classic Rock",
        bio: "The Beatles",
        img: "https://picsum.photos/seed/calla/400/530",
    },
    {
        id: 8,
        name: "Jimmy Page",
        genre: "Classic Rock",
        bio: "Led Zeppelin",
        img: "https://picsum.photos/seed/rei/400/530",
    },
    {
        id: 9,
        name: "David Bowie",
        genre: "Glam Rock",
        bio: "Bowie",
        img: "https://picsum.photos/seed/iris/400/530",
    },
    {
        id: 10,
        name: "Debbie Harris",
        genre: "rock",
        bio: "Blondie",
        img: "https://picsum.photos/seed/sol/400/530",
    },
];

export const GALLERY_IMGS: string[] = Array.from(
    { length: 12 },
    (_, i) => `https://picsum.photos/seed/gallery${i + 1}/600/600`
);