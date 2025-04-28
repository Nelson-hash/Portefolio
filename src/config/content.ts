export interface ImageData {
  id: string;
  title: string;
  description: string;
  filename: string;  // Changed from url to filename
  category?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  filename: string;  // Changed from imageUrl to filename
  link: string;
  category: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  social: {
    instagram?: string;
    twitter?: string;
    email?: string;
  };
}

export const siteConfig: SiteConfig = {
  title: "Nelson's Portfolio",
  description: "A curated collection of photographic works showcasing the beauty of our world through a unique lens",
  author: "Nelson",
  social: {
    instagram: "https://instagram.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "contact@example.com"
  }
};

export const images: ImageData[] = [
  {
    id: '1',
    title: 'Galop',
    description: 'Mémé ride',
    filename: 'galop.jpg',
    category: 'landscape'
  },
  {
    id: '2',
    title: 'Arbre',
    description: 'La ville et la nature',
    filename: 'arbre.jpg',
    category: 'architecture'
  },
  {
    id: '3',
    title: 'Serveurs',
    description: 'Ils font jeunes',
    filename: 'serveurs.jpg',
    category: 'nature'
  },
  {
    id: '4',
    title: 'Velib',
    description: 'Petite balade matinale',
    filename: 'velib.jpg',
    category: 'landscape'
  },
  {
    id: '5',
    title: 'Magas1',
    description: 'On shoppe',
    filename: 'magas.jpg',
    category: 'landscape'
  },
  {
    id: '6',
    title: 'Pigeon',
    description: 'Compagnon parisien bien aimable',
    filename: 'pigeon.jpg',
    category: 'landscape'
  },
  {
    id: '7',
    title: 'Possion',
    description: 'On aura tout vu',
    filename: 'possion.jpg',
    category: 'landscape'
  },
  {
    id: '8',
    title: 'Boulange',
    description: 'Rêve près de chez moi',
    filename: 'boulange.jpg',
    category: 'abstract'
  }
];

export const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Quiz IA',
    description: 'Evaluez votre capacité à reconnaître des vidéos générées par IA',
    filename: 'quizzia.jpg',
    link: 'https://quizzia.studiotf1.com',
    category: 'development'
  },
  {
    id: '2',
    title: 'Projets vidéos',
    description: 'Quelques projets vidéos IA',
    filename: 'project-video-projects.jpg',
    link: 'https://example.com/video-projects',
    category: 'video'
  },
  {
    id: '3',
    title: 'Site web',
    description: 'Site web de notre société de production cinématographique',
    filename: 'horus.jpg',
    link: 'https://horusprod.com',
    category: 'misc'
  }
];
