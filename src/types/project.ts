export interface ProjectBlock {
  body: string;
  image?: string; // Optional single image path
  images?: string[]; // Optional array of images (for 3 images side by side)
  video?: string; // Optional video path (mp4)
}

export interface Project {
  slug: string; // URL-friendly identifier
  title: string;
  description: string;
  coverImage: string; // Path to cover image
  liveUrl?: string; // Optional URL to live project
  liveName?: string; // Optional name for the live link (defaults to project title)
  role?: string; // Optional role description
  date?: string; // Optional date
  techStack?: string; // Optional tech stack
  blocks: ProjectBlock[]; // Up to 5 blocks
}

