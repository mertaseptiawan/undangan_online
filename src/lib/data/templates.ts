export interface Template {
    id: string;
    title: string;
    // description: string;
    thumbnail: string;
    route: string;
}

export const templates: Template[] = [
    {
        id: 'elegant',
        title: 'Elegant Cultural',
        // description: 'A beautiful blend of tradition and modern elegance, perfect for cultural weddings.',
        thumbnail: '/image/elegant/cover.jpeg', // Using existing image as placeholder
        route: '/design/elegant/?to=nama tamu'
    },
    {
        id: 'Artistic',
        title: 'Artistic',
        // description: 'Clean, minimalist design with soft floral accents for a romantic touch.',
        thumbnail: '/image/artistic/2.png',
        route: '/design/artistic/?to=nama tamu'
    },
    {
        id: 'modern',
        title: 'Modern Minimalist',
        // description: 'Sleek and contemporary design for modern couples.',
        thumbnail: '/image/modern/2.png',
        route: '/design/modern/?to=nama tamu'
    },
    // {
    //     id: 'Artistic',
    //     title: 'Artistic Elegance',
    //     description: 'Creative and artistic design with unique visual elements.',
    //     thumbnail: 'https://images.unsplash.com/photo-1494859632785-32abaf5241f4?q=80&w=2000&auto=format&fit=crop',
    //     route: '/design/artistic'
    // },
    // {
    //     id: 'luxury',
    //     title: 'Royal Luxury',
    //     description: 'Sophisticated design with gold accents for a premium feel.',
    //     thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop',
    //     route: '/design/luxury'
    // },
    // 8
]