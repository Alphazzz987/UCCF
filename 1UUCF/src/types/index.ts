export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  coverImage?: string;
  sections?: {
    title: string;
    content: string;
    image?: string;
  }[];
  stats?: {
    beneficiaries: number;
    locations: number;
    yearStarted: number;
  };
  gallery?: {
    id: string;
    imageUrl: string;
    caption?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
}