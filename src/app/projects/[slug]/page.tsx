import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs, getNextProject } from "@/data/projects";
import { primaryDark } from "@/constants/colors";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Title - Centered at top */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-12 text-center"
          style={{ color: primaryDark }}
        >
          {project.title}
        </h1>

        {/* Cover Image - Rounded corners, slightly smaller than full width */}
        <div className="relative w-full max-w-full mx-auto mb-12 aspect-video rounded-2xl overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="object-cover rounded-4xl bg-(--primary-light) px-4 py-4"
          />
        </div>

        {/* Two Columns: Metadata (left) and Description (right) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
          {/* Left Side - Metadata */}
          <div className="lg:w-64 shrink-0">
            <div className="space-y-6">
              {project.role && (
                <div>
                  <p className="text-sm font-bold text-(--text) mb-1">ROLE:</p>
                  <p className="text-lg font-bold text-(--text)">
                    {project.role}
                  </p>
                </div>
              )}
              {project.techStack && (
                <div>
                  <p className="text-sm font-bold text-(--text) mb-1">TECH STACK:</p>
                  <p className="text-lg font-bold text-(--text)">
                    {project.techStack}
                  </p>
                </div>
              )}
              {project.liveUrl && (
                <div>
                  <p className="text-sm font-bold text-(--text) mb-1">VIEW:</p>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-(--primary-dark) hover:text-(--primary) transition-colors underline"
                  >
                    {project.liveName || project.title}
                  </Link>
                </div>
              )}
              {project.date && (
                <div>
                  <p className="text-sm font-bold text-(--text) mb-1">DATE:</p>
                  <p className="text-lg font-bold text-(--text)">
                    {project.date}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="flex-1">
            <div className="text-xl md:text-2xl leading-relaxed text-(--text) space-y-4">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-16">
          {project.blocks.map((block, index) => {
            const blockNumber = index + 1;
            const hasImage = !!block.image;
            const hasVideo = !!block.video;
            const hasTwoImages = !!block.images && block.images.length === 2;
            const hasThreeImages = !!block.images && block.images.length === 3;
            const isEven = blockNumber % 2 === 0;

            // Block with 2 images side by side (horizontal screenshots)
            if (hasTwoImages) {
              return (
                <div key={index} className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 rounded-2xl">
                    {block.images!.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative w-full aspect-video overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - Block ${blockNumber} - Image ${imgIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Block with 3 images side by side (vertical phone screenshots)
            if (hasThreeImages) {
              return (
                <div key={index} className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-(--primary-light) py-8 px-8 rounded-2xl">
                    {block.images!.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative w-full min-h-[600px] md:min-h-[800px] rounded-2xl overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - Block ${blockNumber} - Image ${imgIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Block with video (full width)
            if (hasVideo) {
              return (
                <div key={index} className="w-full">
                  {block.body && (
                    <p className="text-lg md:text-xl leading-relaxed text-(--text) mb-6">
                      {block.body}
                    </p>
                  )}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <video
                      src={block.video}
                      controls
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-contain"
                      style={{ transform: 'translateY(-70px)', height: 'calc(100% + 50px)' }}
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              );
            }

            if (!hasImage) {
              // Full width text block
              return (
                <div key={index} className="w-full">
                  <p className="text-lg md:text-xl leading-relaxed text-(--text)">
                    {block.body}
                  </p>
                </div>
              );
            }

            // Single image with no body text - full width
            if (hasImage && (!block.body || block.body.trim() === '')) {
              return (
                <div key={index} className="w-full">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={block.image!}
                      alt={`${project.title} - Block ${blockNumber}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              );
            }

            // Split block with single image
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-lg md:text-xl leading-relaxed text-(--text)">
                    {block.body}
                  </p>
                </div>
                {/* Image */}
                <div className="flex-1 relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={block.image!}
                    alt={`${project.title} - Block ${blockNumber}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Links */}
        <div className="mt-16 pt-8 border-t border-(--primary)">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <Link
              href="/projects"
              className="text-lg font-semibold text-(--primary-dark) hover:text-(--primary) transition-colors inline-flex items-center gap-2"
            >
              ← All Projects
            </Link>
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="text-lg font-semibold text-(--primary-dark) hover:text-(--primary) transition-colors inline-flex items-center gap-2"
              >
                {nextProject.title} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

