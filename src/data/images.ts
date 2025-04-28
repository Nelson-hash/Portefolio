export interface ImageData {
  id: string;
  title: string;
  description: string;
  url: string;
}

export const images: ImageData[] = [
  {
    id: '1',
    title: 'Mountain Vista',
    description: 'Serene mountain landscape at sunset',
    url: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg'
  },
  {
    id: '2',
    title: 'Urban Abstract',
    description: 'Modern architectural patterns',
    url: 'https://images.pexels.com/photos/2148830/pexels-photo-2148830.jpeg'
  },
  {
    id: '3',
    title: 'Ocean Waves',
    description: 'Dynamic seascape in motion',
    url: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg'
  },
  {
    id: '4',
    title: 'Light Study',
    description: 'Abstract patterns of light and shadow',
    url: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg'
  }
];