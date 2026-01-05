import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "favorit",
    title: "FavorIt",
    description: "Mobile app hosting a a student-powered system where people help each other in real time, set their own rates, and earn money doing things they were already going to do. I focused on an optimized user experience and fast development, bringing the company from idea to execution in 3 months.\n\nWorked closely with the CEO and CTO to lead a team of 5 other developers in a fast-paced environment. We successfully launched a product that is used by 1,000+ students at UF and captured campus attention by drawing over 3M views on social media platforms.",
    coverImage: "/favorit-cover2.png",
    liveUrl: "https://favoritapp.com",
    liveName: "FavorIt",
    role: "Co-Founder & CPO",
    date: "April 2025 - December 2025",
    techStack: "React Native, Firebase, Stripe, Expo, Google Maps API, React, Next.js, GitHub",
    blocks: [
      {
        body: "",
        images: ["/favorit-img1.jpeg", "/favorit-img2.jpeg", "/favorit-img3.jpeg"]
      },
    ],
  },
  {
    slug: "swamp-records",
    title: "Swamp Records",
    description: "Swamp records is a student-run artist resource agency at the University of Florida. When I joined the organization, there was an outdated Wix site and no clear direction in terms of technical development. I quickly stepped up, independently developing the organization's official website from scratch.\n\nI am now forming a Development team with 4-6 members to assist with the day-to-day upkeep of the websites I've created, as well as to help design and develop websites for new signed musicians. I am looking forward to mentoring new members and working on more internal projects this semester.",
    coverImage: "/swamp-cover.png",
    liveUrl: "https://www.swamprecords.org/",
    liveName: "Swamp Records",
    role: "Development Director",
    date: "August 2024 - Present",
    techStack: "React, Next.js, Vercel, HTML5, CSS, Tailwind, Firebase",
    blocks: [
      {
        body: "",
        images: ["/swamp-img1.png", "/swamp-img2.png"]
      },
    ],
  },
  {
    slug: "the-nancys",
    title: "The Nancys",
    description: "The Nancys are a Gainesville-based indie rock band. When I joined their team, they weren't sure how to go about creating a website. I took on the project myself, and over the course of a few weeks I designed, developed, and published the site!\n\nI now manage the site, creating featured sections for new music and keeping the ticket page up to date. The site has drawn over 3,000 visitors and contributed to a 65% increase in ticket sales.",
    coverImage: "/the-nancys-cover.png",
    liveUrl: "https://thenancysband.com/",
    liveName: "The Nancys Band - Official Website",
    role: "Web Developer",
    date: "January 2025 - Present",
    techStack: "HTML5, CSS, Firebase",
    blocks: [
      {
        body: "",
        images: [""]
      },
    ],
  },
  {
    slug: "spam-detector",
    title: "Spam Detector",
    description: "A spam detector that uses Multinomial Naive Bayes and a K-Nearest Neighbors algorithm, both implemented from scratch.\n\nI focused on the data preprocessing and augmentation, and connecting the algorithms to a website for a smoother UX.",
    coverImage: "/spam-detector-cover.png",
    liveUrl: "https://github.com/jesslaurena/spam-detector",
    liveName: "GitHub: Spam Detector",
    role: "Developer",
    date: "November 2025",
    techStack: "Python, NumPy, Streamlit, GitHub",
    blocks: [
      {
        video: "/spam-detector-video.mp4",
        body: ""
      },
    ],
  },
  {
    slug: "chomplate",
    title: "Chomplate",
    description: "A mobile app created at UF WiNGHacks, awarded First Flight Award for being judged the best project out of 10 groups of fellow first-time hackers.\n\nDeciding what to eat can be a challenge in our busy day-to-day lives. With Chomplate, meal planning is easier than ever! We're focused on lowering stress levels and promoting healthy eating habits.",
    coverImage: "/chomplate-cover.png",
    liveUrl: "https://devpost.com/software/chomplate?_gl=1*n9sny4*_gcl_au*MTk0MjUxMjQzNi4xNzY3NDg4NTg3*_ga*NTYxNTkyNzU2LjE3Njc0ODg1ODc.*_ga_0YHJK3Y10M*czE3Njc0ODg1ODckbzEkZzEkdDE3Njc0ODk2MTYkajYwJGwwJGgw",
    liveName: "Devpost: Chomplate",
    role: "Developer",
    date: "February 2025",
    techStack: "React Native, Expo Go, Appwrite, GitHub",
    blocks: [
      {
        image: "/chomplate-img1.png",
        body: ""
      },
    ],
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    description: " Implemented object-oriented game logic in C++ for randomized mine placement, flood-fill uncovering, flagging, and win/loss detection.\n\nDesigned and rendered interactive UI using SFML, including tile states, grid layout, flag counter, and countdown timer.",
    coverImage: "/minesweeper-cvr.png",
    liveUrl: "https://github.com/jesslaurena/minesweeper",
    liveName: "GitHub: Minesweeper",
    role: "Developer",
    date: "April 2025",
    techStack: "C++, SFML",
    blocks: [
      {
        image: "",
        body: ""
      },
    ],
  }
];

// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Helper function to get all project slugs (for static generation)
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

// Helper function to get the next project
export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return undefined; // No next project
  }
  return projects[currentIndex + 1];
}

