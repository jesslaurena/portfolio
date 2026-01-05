"use client"
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { primaryDark } from "@/constants/colors";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-12 text-center pop-up"
          style={{ color: primaryDark }}
        >
          Projects
        </h1>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
              style={{
                animation: 'popUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-(--primary)">
                {/* Cover Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Title */}
                <div className="p-6">
                  <h2 
                    className="text-2xl font-bold mb-2 group-hover:text-(--primary-dark) transition-colors"
                    style={{ color: primaryDark }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-black">
                    {project.description
                      .split(" ")
                      .slice(0, 10)
                      .join(" ") + "..."}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}



