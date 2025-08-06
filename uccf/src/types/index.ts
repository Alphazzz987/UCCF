export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
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