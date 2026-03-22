export interface Project {
  id: string;
  title: string;
  description?: string;
  category: 'Residential' | 'Commercial' | 'Modular Kitchen' | 'Office';
  location?: string;
  mainImage: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  createdAt: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType?: string;
  propertySize?: string;
  message?: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  content: string;
  rating: number;
  projectType: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  published: boolean;
  createdAt: string;
}
