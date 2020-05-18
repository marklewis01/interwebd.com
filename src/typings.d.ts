declare module "*.png";
declare module "*.jpg";
declare module "*.json";
declare module "*.svg";

interface IExperience {
  company: string;
  date: string;
  description: string;
  highlights?: string[];
  includeInResume?: boolean;
  logo?: any;
  title: string;
  url?: string;
}

interface IProject {
  label: string;
  shortDescription?: string;
  description: string;
  keywords?: string[];
  date: number;
  codebase?: string;
  web?: string;
  images?: {
    caption?: string;
    source: {
      download?: string;
      regular: string;
      thumbnail?: string;
    };
  }[];
  includeInResume?: boolean;
}
