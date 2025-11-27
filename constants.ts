import { ServiceCategoryData, Testimonial, GalleryItem, TeamMember } from './types';

export const WHATSAPP_LINK = "https://wa.me/60123456789"; // Replace with actual number

export const CONTACT_INFO = {
  phone: "+60 12-345 6789",
  email: "enquiry@makeoverstudio.com",
  address: "Kuala Lumpur, Malaysia",
  area: "Klang Valley & Nationwide",
  hours: "24/7 by Appointment"
};

export const SERVICE_CATEGORIES: ServiceCategoryData[] = [
  {
    id: 'bridal',
    title: 'Bridal Series',
    description: 'Exclusive, high-end bridal packages for your special day. Available across Klang Valley with door-to-door service.',
    services: [
      {
        id: 'bridal-1',
        title: 'Package 1',
        subtitle: 'One Session',
        price: 'RM 1088',
        description: 'Single session bridal makeup & hairdo.',
        image: 'https://picsum.photos/id/338/800/1000',
        features: [
          'One Session Bridal Makeup + Bridal Hairdo',
          'Senior Makeup Artist',
          'Customized bridal makeup & hairstyling',
          'Bridal accessories provided',
          'Face mask with basic skincare',
          'Natural fake eyelashes & Eyebrow shaping',
          'Groom touchup with compliments (same session & location with the bride)',
          'Inclusive of transport within Klang Valley'
        ]
      },
      {
        id: 'bridal-2',
        title: 'Package 2',
        subtitle: 'Two Sessions',
        price: 'RM 1688 (Same Day)',
        secondaryPrice: 'RM 1988 (Split Day)',
        description: 'Comprehensive coverage for morning and evening ceremonies.',
        image: 'https://picsum.photos/id/331/800/1000',
        features: [
          'Two Session Bridal Makeup + Two Bridal Hairdo',
          'Senior Makeup Artist',
          'Customized bridal makeup & hairstyling',
          'Bridal accessories provided',
          'Face mask with basic skincare',
          'Natural fake eyelashes & Eyebrow shaping',
          'Groom touchup with compliments (same session & location with the bride)',
          'Inclusive of transport within Klang Valley'
        ],
        addOns: [
          { title: 'Additional stayback for add on 1 hairstyle', price: 'RM 300' }
        ]
      },
      {
        id: 'bridesmaids',
        title: 'Bridesmaids Package',
        subtitle: 'Group Styling',
        price: 'RM 800 (3 pax)',
        secondaryPrice: 'RM 1000 (4 pax)',
        description: 'Professional styling for your bridal party.',
        image: 'https://picsum.photos/id/342/800/1000',
        features: [
          'Senior Makeup Artist',
          'Customized makeup & hairstyling',
          'Basic skincare',
          'Natural fake eyelashes & Eyebrow shaping',
          'Inclusive of transport within Klang Valley',
          '1.5hrs duration per pax'
        ],
        notes: ['Parking fee not included']
      }
    ]
  },
  {
    id: 'rom',
    title: 'ROM & Solemnization',
    description: 'Elegant simplicity for your official union. Natural, radiant looks for registration ceremonies.',
    services: [
      {
        id: 'rom-1',
        title: 'ROM Makeup & Hairdo',
        subtitle: 'Registration of Marriage',
        price: 'RM 480 Nett',
        description: 'A flawless look for your solemnization ceremony.',
        image: 'https://picsum.photos/id/129/800/1000',
        features: [
          'Senior Makeup Artist',
          'Customized makeup & hairstyling',
          'Basic skincare',
          'Natural fake eyelashes & Eyebrow shaping',
          'Men touchup with compliments (same session & location with fiancee)',
          'Inclusive of transport within Klang Valley'
        ],
        notes: ['Parking fee not included']
      }
    ]
  },
  {
    id: 'personal',
    title: 'Personal Makeover',
    description: 'Discover a new version of yourself. From natural elegance to dramatic glamour.',
    services: [
      {
        id: 'personal-1',
        title: 'Personal Makeover',
        subtitle: 'Natural Elegant Look',
        price: 'RM 280 ++',
        description: 'Enhance your natural beauty for any occasion.',
        image: 'https://picsum.photos/id/64/800/1000',
        features: [
          'Natural Elegant Makeup Look',
          'Senior Makeup Artist',
          'Customized makeup & hairstyling',
          'Basic skincare',
          'Natural fake eyelashes & Eyebrow shaping',
          'Inclusive of transport within Klang Valley',
          '2 hrs duration'
        ],
        notes: ['Parking fee not included', 'Contact to enquiries']
      },
      {
        id: 'glamour',
        title: 'Glamour / Formal',
        subtitle: 'Cocktail & Costume',
        price: 'RM 350 ++',
        description: 'Dramatic looks for red carpets, dinners, and events.',
        image: 'https://picsum.photos/id/447/800/1000',
        features: [
          'Glamour / Formal / Cocktail / Costume Look',
          'Senior Makeup Artist',
          'Customized makeup & hairstyling',
          'Basic skincare',
          'Natural fake eyelashes or dramatic lash',
          'Eyebrow shaping',
          'Inclusive of transport within Klang Valley',
          '2.5 hrs duration'
        ],
        notes: ['Parking fee not included', 'Contact to enquiries']
      }
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', src: 'https://picsum.photos/id/1027/900/1200', category: 'Editorial', alt: 'High Fashion Editorial' },
  { id: '2', src: 'https://picsum.photos/id/342/800/800', category: 'Details', alt: 'Makeup Texture' },
  { id: '3', src: 'https://picsum.photos/id/129/900/1200', category: 'Bridal', alt: 'Bridal Portrait' },
  { id: '4', src: 'https://picsum.photos/id/325/800/600', category: 'Hair', alt: 'Textured Waves' },
  { id: '5', src: 'https://picsum.photos/id/435/900/1200', category: 'Lifestyle', alt: 'Natural Glow' },
  { id: '6', src: 'https://picsum.photos/id/823/800/1000', category: 'Editorial', alt: 'Studio Lighting' },
  { id: '7', src: 'https://picsum.photos/id/65/800/800', category: 'Portrait', alt: 'Beauty Shot' },
  { id: '8', src: 'https://picsum.photos/id/1005/800/1200', category: 'Hair', alt: 'Sleek Updo' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    role: 'Bride',
    content: "The team made my wedding day stress-free. The makeup lasted all day despite the Malaysian heat!",
    avatar: 'https://picsum.photos/id/1011/150/150',
  },
  {
    id: '2',
    name: 'Michelle T.',
    role: 'Model',
    content: "My go-to for photoshoots in KL. Professional, punctual, and they really understand my skin.",
    avatar: 'https://picsum.photos/id/1025/150/150',
  },
  {
    id: '3',
    name: 'Priya K.',
    role: 'Event',
    content: "Loved the dinner makeup! It was elegant and not too heavy. Highly recommended for events.",
    avatar: 'https://picsum.photos/id/375/150/150',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Vivian Lim',
    role: 'Senior Makeup Artist',
    image: 'https://picsum.photos/id/338/600/800',
    bio: 'Specializing in bridal and natural aesthetics with over 8 years of experience in the Klang Valley beauty industry.',
  },
  {
    id: '2',
    name: 'Rina Ahmad',
    role: 'Hair Styling Lead',
    image: 'https://picsum.photos/id/91/600/800',
    bio: 'From classic buns to textured waves, Rina brings artistic flair to every hairstyle she creates.',
  },
];