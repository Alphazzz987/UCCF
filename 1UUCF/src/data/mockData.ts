import { NavigationItem, Program, Testimonial, ImpactStat } from '../types';

// Navigation items
export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
  },
  {
    id: 'media',
    label: 'Media',
    href: '/media',
  },
  {
    id: 'programs',
    label: 'Our Programs',
    href: '#',
    children: [
      {
        id: 'education',
        label: 'Child Sponsorship Program',
        href: '/programs/education',
      },
      {
        id: 'women',
        label: 'Women Empowerment',
        href: '/programs/women',
      },
      {
        id: 'medical',
        label: 'Medical Camps',
        href: '/programs/medical',
      },
      {
        id: 'scholarship',
        label: 'Scholarship Program',
        href: '/programs/scholarship',
      },
    ],
  },
  {
    id: 'volunteers',
    label: 'Our Volunteers',
    href: '/volunteers',
  },
 
  {
    id: 'gallery',
    label: 'Gallery',
    href: '/gallery',
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
  },
];

// Rest of the existing exports...
export const heroSlides = [
  {
    id: 'slide1',
    imageUrl: 'https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg',
    title: 'Empowering Communities Through Education',
    description: 'Join us in our mission to create brighter futures for underprivileged children',
  },
  {
    id: 'slide2',
    imageUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    title: 'Supporting Women\'s Development',
    description: 'Providing women with skills and opportunities to become self-reliant',
  },
  {
    id: 'slide3',
    imageUrl: 'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg',
    title: 'Healthcare for the Underserved',
    description: 'Bringing essential medical services to communities in need',
  },
];

// Programs
export const programs: Program[] = [
  {
    id: 'education',
    title: 'Child Sponsorship Program',
    description: 'Supporting the education of underprivileged children with learning materials, scholarships, and digital education resources.',
    imageUrl: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
    link: '/programs/education',
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    description: 'Providing skill development training for women to help them become financially independent through tailoring, crafting, and entrepreneurship.',
    imageUrl: 'https://images.pexels.com/photos/7551755/pexels-photo-7551755.jpeg',
    link: '/programs/women',
  },
  {
    id: 'medical',
    title: 'Medical Camps',
    description: 'Organizing free health checkups, consultations, and medicine distribution to communities with limited healthcare access.',
    imageUrl: 'https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg',
    link: '/programs/medical',
  },
  {
    id: 'scholarship',
    title: 'Scholarship Program',
    description: 'Supporting talented students from disadvantaged backgrounds in pursuing higher education in medicine, engineering, and other fields.',
    imageUrl: 'https://images.pexels.com/photos/8423171/pexels-photo-8423171.jpeg',
    link: '/programs/scholarship',
  },
  {
    id: 'elearning',
    title: 'E-Learning Classes',
    description: 'Providing digital learning opportunities for children in remote areas through online classes and educational technology.',
    imageUrl: 'https://images.pexels.com/photos/7516380/pexels-photo-7516380.jpeg',
    link: '/programs/elearning',
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Working with local communities to improve infrastructure, sanitation, and access to essential services.',
    imageUrl: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
    link: '/programs/community',
  },
];

// Impact statistics
export const impactStats: ImpactStat[] = [
  {
    id: 'students',
    value: 3500,
    suffix: '+',
    label: 'Adolescents Helped',
  },
  {
    id: 'centers',
    value: 32,
    suffix: '+',
    label: 'Learning Centers',
  },
  {
    id: 'girls',
    value: 62,
    suffix: '%',
    label: 'Girl Participation',
  },
  {
    id: 'donors',
    value: 1000,
    suffix: '+',
    label: 'Total Donors',
  },
];

// Additional impact statistics
export const additionalStats: ImpactStat[] = [
  {
    id: 'staff',
    value: 30,
    suffix: '+',
    label: 'Total Staff',
  },
  {
    id: 'volunteers',
    value: 55,
    suffix: '+',
    label: 'Total Volunteers',
  },
  {
    id: 'states',
    value: 4,
    suffix: '',
    label: 'States',
  },
  {
    id: 'districts',
    value: 8,
    suffix: '',
    label: 'Districts',
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial1',
    name: 'Sridevi',
    role: 'Student, IIT Kharagpur',
    content: 'The scholarship program has given wings to my little dreams. I would like to use this amount for my further education and I wish to create a positive impact on society.\n\nOriginally from a small tribal village in Tamil Nadu, I\'ve always been determined to become an Engineer to help those living in marginalized communities. This support means the world to me.',
    imageUrl: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg',
  },
  {
    id: 'testimonial2',
    name: 'Shantha',
    role: 'Medical Student, BAMS',
    content: 'I have been exhilarated since I got to know that I was selected for the Undergraduate Scholarship. This scholarship will help fund my education; I will use this to purchase supplies required for my medical degree.\n\nMy parents are farmers and I have three siblings. I have a clear vision about my career path, and aim to enhance research capabilities in the field of Ayurveda.',
    imageUrl: 'https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg',
  },
  {
    id: 'testimonial3',
    name: 'Lakshmi',
    role: 'Women Empowerment Program Participant',
    content: 'The tailoring training I received has changed my life. Now I can earn a living from my home while taking care of my children. I\'ve started my own small business making clothes for people in my village.\n\nI\'m grateful for the skills and confidence this program has given me. I can now contribute to my family\'s income and provide a better future for my children.',
    imageUrl: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
  },
];

// Footer navigation
export const footerNavigation = [
  {
    category: 'Programs',
    links: [
      { name: 'Child Sponsorship', href: '/programs/education' },
      { name: 'Women Empowerment', href: '/programs/women' },
      { name: 'Medical Camps', href: '/programs/medical' },
      { name: 'Scholarship Program', href: '/programs/scholarship' },
      { name: 'E-Learning Classes', href: '/programs/elearning' },
    ],
  },
  {
    category: 'Get Involved',
    links: [
      { name: 'Donate', href: '/donate' },
      { name: 'Volunteer', href: '/volunteers' },
      { name: 'Corporate Partnerships', href: '/partnerships' },
      { name: 'Fundraise', href: '/fundraise' },
      { name: 'Events', href: '/events' },
    ],
  },
];

// Contact information
export const contactInfo = {
  address: '65/5 Parapanna Agrahara, Electronic City, Bengaluru, Karnataka 560100',
  email: 'info@organization.org',
  phone: '+91 9986645529',
};