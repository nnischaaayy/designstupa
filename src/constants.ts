import { Project, Testimonial, BlogPost } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    description: 'A clean, sophisticated residential space in the heart of South Delhi.',
    category: 'Residential',
    location: 'Vasant Vihar',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Luxury Corporate Office',
    description: 'A high-end workspace designed for productivity and brand prestige.',
    category: 'Office',
    location: 'Gurugram',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Elegant Modular Kitchen',
    description: 'Functionality meets aesthetics in this bespoke kitchen design.',
    category: 'Modular Kitchen',
    location: 'Greater Kailash',
    mainImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920'
    ],
    createdAt: new Date().toISOString()
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Aditya Sharma',
    content: 'Design Stupa transformed our house into a home. Their attention to detail is unmatched.',
    rating: 5,
    projectType: 'Residential',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    clientName: 'Priya Kapoor',
    content: 'The team is professional and highly creative. They delivered exactly what we envisioned.',
    rating: 5,
    projectType: 'Office',
    createdAt: new Date().toISOString()
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Trends in Luxury Interior Design 2026',
    slug: 'luxury-trends-2026',
    excerpt: 'Discover the latest trends that are shaping high-end interiors this year.',
    content: 'Luxury interior design is evolving...',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920',
    author: 'Nischay Rehal',
    published: true,
    createdAt: new Date().toISOString()
  }
];
