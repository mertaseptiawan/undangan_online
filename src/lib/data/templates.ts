export interface Template {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    route: string;
}

export const templates: Template[] = [
    {
        id: 'kancilnoning',
        title: 'Elegant Cultural',
        description: 'A beautiful blend of tradition and modern elegance, perfect for cultural weddings.',
        thumbnail: '/image/cover.jpeg', // Using existing image as placeholder
        route: '/kancilnoning'
    },
    {
        id: 'floral',
        title: 'Modern Floral',
        description: 'Clean, minimalist design with soft floral accents for a romantic touch.',
        thumbnail: 'https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2600&auto=format&fit=crop',
        route: '/design/floral'
    },
    {
        id: 'minimalist',
        title: 'Modern Minimalist',
        description: 'Sleek and contemporary design for modern couples.',
        thumbnail: 'https://images.unsplash.com/photo-1494859632785-32abaf5241f4?q=80&w=2000&auto=format&fit=crop',
        route: '/design/minimalist'
    },
    {
        id: 'luxury',
        title: 'Royal Luxury',
        description: 'Sophisticated design with gold accents for a premium feel.',
        thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop',
        route: '/design/luxury'
    },
    {
        id: 'bali',
        title: 'Balinese Culture',
        description: 'Traditional elegance with rich cultural heritage and timeless beauty.',
        thumbnail: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop',
        route: '/design/bali'
    }
];

