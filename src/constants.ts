import { Project, Testimonial, BlogPost } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Kalkaji Residence Transformation',
    description: 'A complete residential overhaul — from bare walls to a warm, layered home with custom furniture and bespoke lighting.',
    category: 'Residential',
    location: 'Kalkaji, New Delhi',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920',
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'South Delhi Modern Villa',
    description: 'Full architectural and interior scope for a 3,200 sqft villa — structural planning, material selection, and interior execution.',
    category: 'Architecture',
    location: 'Vasant Kunj, New Delhi',
    mainImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1920',
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Gurugram Corporate Office Redesign',
    description: 'A high-performance workspace redesigned to reflect brand identity — open collaboration zones, private suites, and executive interiors.',
    category: 'Commercial',
    location: 'Gurugram, Haryana',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Noida Modular Kitchen',
    description: 'A precision-designed modular kitchen blending Italian-finish shutters, quartz countertops, and optimised storage.',
    category: 'Modular Kitchen',
    location: 'Noida, Uttar Pradesh',
    mainImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920',
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Sainik Farm Luxury Master Suite',
    description: 'An intimate master suite with custom headboard joinery, integrated wardrobe wall, and a spa-inspired en suite.',
    category: 'Residential',
    location: 'Sainik Farm, New Delhi',
    mainImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1920',
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Vasant Kunj Boutique Studio',
    description: 'A compact commercial studio transformed into a premium client-facing space — every square foot designed with intent.',
    category: 'Commercial',
    location: 'Vasant Kunj, New Delhi',
    mainImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1920',
    ],
    createdAt: new Date().toISOString(),
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Commercial Client',
    location: 'Noida',
    content:
      'Completely transformed our office space. The team was professional, cost-conscious, and delivered on time without a single compromise on quality.',
    rating: 5,
    projectType: 'Commercial',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    clientName: 'Residential Client',
    location: 'Kalkaji',
    content:
      'Turned our bare flat into a home we are genuinely proud of. Every detail was thought through — from the lighting to the last handle.',
    rating: 5,
    projectType: 'Residential',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    clientName: 'Client',
    location: 'Gurugram',
    content:
      'Worked with them on a full architectural and interior project. Seamless coordination from structural drawings all the way to final installation.',
    rating: 5,
    projectType: 'Architecture',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    clientName: 'Residential Client',
    location: 'Sainik Farm',
    content:
      'The furniture pieces they designed are unlike anything we found in the market. Truly custom — built around the exact dimensions and feel of our space.',
    rating: 5,
    projectType: 'Furniture Design',
    createdAt: new Date().toISOString(),
  },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Modular vs Traditional Kitchen — What Works for Delhi Homes',
    slug: 'modular-vs-traditional-kitchen-delhi',
    excerpt:
      'The kitchen debate every South Delhi homeowner faces. We break down the costs, timelines, and long-term value of each approach.',
    content: 'Full article content here...',
    coverImage:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920',
    author: 'Design Stupa Studio',
    published: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'How Much Does Interior Design Cost in Delhi NCR in 2026?',
    slug: 'interior-design-cost-delhi-ncr-2026',
    excerpt:
      'A transparent breakdown of what you should expect to pay — and what to watch out for when comparing quotes.',
    content: 'Full article content here...',
    coverImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920',
    author: 'Design Stupa Studio',
    published: true,
    createdAt: new Date().toISOString(),
  },
];

export const STATS = [
  { value: '8+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '5', label: 'Cities Served' },
  { value: 'Houzz', label: 'Award Winner' },
];

export const SERVICES = [
  {
    title: 'Interior Design',
    description:
      'Residential and commercial spatial planning that balances beauty with how you actually live and work. Every decision serves both aesthetics and function.',
  },
  {
    title: 'Architecture',
    description:
      'Site studies, structural drawings, and planning approvals handled end-to-end — for new builds, additions, and complete renovations.',
  },
  {
    title: 'Furniture Design',
    description:
      'Custom-crafted pieces built precisely for your space. No catalogue compromises — every piece is designed from scratch around your dimensions and lifestyle.',
  },
  {
    title: 'End-to-End Execution',
    description:
      'From the first sketch to final installation, we manage every contractor, material delivery, and quality check. You walk into a finished space.',
  },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Meet & Deal',
    description:
      'We visit your space, understand your vision, study the brief, and set a realistic budget together — no obligations.',
  },
  {
    num: '02',
    title: 'Design & Develop',
    description:
      'Detailed architectural drawings, 3D visualisations, and material boards. Nothing moves to execution without your full sign-off.',
  },
  {
    num: '03',
    title: 'Build & Install',
    description:
      'Our team manages every contractor and delivery. You walk into a finished, handover-ready space — on time.',
  },
];

export const CONTACT_INFO = {
  address: 'L2/167-B, DDA Alaknanda, Kalkaji, New Delhi — 110019',
  phone1: '+91 98103 22053',
  phone2: '+91 98106 71645',
  email: 'hello@designstupa.com',
  whatsapp: 'https://wa.me/919810671645',
  instagram: 'https://instagram.com/designstupa.av',
  facebook: 'https://facebook.com/designstupa.av',
};
