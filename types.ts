export type CategoryId = 'bridal' | 'rom' | 'personal';

export interface ServiceAddOn {
  title: string;
  price: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  price: string;
  secondaryPrice?: string; // For split day or range
  image: string;
  features: string[];
  notes?: string[]; // For "Parking fee not included" etc.
  addOns?: ServiceAddOn[];
}

export interface ServiceCategoryData {
  id: CategoryId;
  title: string;
  description: string;
  services: Service[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: string;
  alt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}