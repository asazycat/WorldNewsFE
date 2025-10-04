export interface NewsArticle {
  id: number;
  title: string;
  text: string;
  summary: string;
  url: string;
  image: string | null;
  video: string | null;
  publish_date: string; // ISO date-time string
  authors: string[];
  category: 'politics' | 'sports' | 'business' | 'technology' | 'entertainment' | 'health' | 'science' | 'lifestyle' | 'travel' | 'culture' | 'education' | 'environment' | 'other' | string;
  language: string; 
  source_country: string; 
  sentiment: number;
}

