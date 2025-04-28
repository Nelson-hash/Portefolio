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
    title: 'Mountain Vista',
    description: 'Serene mountain landscape at sunset',
    filename: 'landscape-mountain-vista.jpg',
    category: 'landscape'
  },
  {
    id: '2',
    title: 'Urban Abstract',
    description: 'Modern architectural patterns',
    filename: 'architecture-urban-abstract.jpg',
    category: 'architecture'
  },
  {
    id: '3',
    title: 'Ocean Waves',
    description: 'Dynamic seascape in motion',
    filename: 'nature-ocean-waves.jpg',
    category: 'nature'
  },
  {
    id: '4',
    title: 'Light Study',
    description: 'Abstract patterns of light and shadow',
    filename: 'abstract-light-study.jpg',
    category: 'abstract'
  }
];

export const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Vibe Coding',
    description: 'A collection of coding projects focused on creating immersive digital experiences through creative programming and interactive design.',
    filename: 'project-vibe-coding.jpg',
    link: 'https://example.com/vibe-coding',
    category: 'development'
  },
  {
    id: '2',
    title: 'Video Projects',
    description: 'Exploring storytelling through motion, featuring a diverse range of video productions from short films to experimental pieces.',
    filename: 'project-video-projects.jpg',
    link: 'https://example.com/video-projects',
    category: 'video'
  },
  {
    id: '3',
    title: 'Miscellaneous',
    description: 'A curated collection of various creative endeavors, including experimental projects, collaborations, and personal works.',
    filename: 'project-miscellaneous.jpg',
    link: 'https://example.com/miscellaneous',
    category: 'misc'
  }
];