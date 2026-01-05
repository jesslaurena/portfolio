import Image from "next/image";
import Link from "next/link";
import { primaryDark } from "@/constants/colors";

export default function About() {
  return (
    <main className="relative min-h-screen flex items-start justify-center pt-8 md:pt-32 pb-16">

      <div className="relative w-full max-w-7xl flex flex-col gap-10 px-6">
        {/* top section */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16 pop-up">
          {/* left side picture */}
          <div className="flex justify-center md:justify-start">
            <div 
              className="ml-8 relative w-56 overflow-hidden shadow-md md:w-72 hover:scale-120 transition-transform"
              style={{ aspectRatio: '220/269', transform: 'rotate(-3deg)' }}
            >
              <Image
                src="/abt-pic.png"
                alt="Portrait of Jess Anderson"
                fill
                priority
                sizes="(min-width: 1024px) 18rem, 14rem"
                className="object-cover"
              />
            </div>
          </div>
          {/* right side title and bio */}
          <div className="flex-1">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 mt-8"
              style={{ color: primaryDark }}
            >
              About Me
            </h1>
            <p className="text-xl font-medium text-(--text) leading-relaxed">
                I&apos;m Jess, a creative software developer who loves turning big ideas 
                into intuitive, user-centered products. I thrive in collaborative team environments
                that encourage thinking outside the box.</p>
              <p className="text-xl font-medium text-(--text) leading-relaxed">
                Recently, I've been working on full-stack web and mobile applications, with a focus
                on clean UI, thoughtful UX, and scalability.
              </p>
          </div>
        </div>

        {/* three boxes in a row */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap mb-16">
          
          <div className="border border-(--primary) rounded-2xl px-8 py-6 flex-1 min-w-[200px] text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-(--primary-dark)">Software Engineer</h3>
          </div>

          <div className="border border-(--primary) rounded-2xl px-8 py-6 flex-1 min-w-[200px] text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-(--primary-dark)">Product Manager</h3>
          </div>

          <div className="border border-(--primary) rounded-2xl px-8 py-6 flex-1 min-w-[200px] text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-(--primary-dark)">Graphic Designer</h3>
          </div>
        </div>

        {/* Experience */}
          <div className="mb-16">
            <div className="flex items-start gap-4">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden mt-1">
                <Image
                  src="/laptop-emoji.png"
                  alt="Laptop emoji"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: primaryDark }}
                >
                  My Experience
                </h2>
                <p className="text-lg font-medium text-(--text) leading-relaxed mb-3">
                  I primarily work in full-stack development, with experience in React, React Native, 
                  Firebase, and Next.js. I&apos;ve co-founded a startup app used by over 1,000 students, led development teams of 20+ engineers, 
                  and managed websites and digital platforms for local musicians and organizations. These experiences taught 
                  me how to collaborate across design and engineering, ship real products, and adapt quickly in fast-moving environments.
                </p>
                <Link
                  href="/projects"
                  className="text-lg font-semibold text-(--primary-dark) hover:text-(--primary) transition-colors underline"
                >
                  View my projects →
                </Link>
              </div>
            </div>
          </div>

          {/* Below experience */}
          <div className="rounded-2xl border border-(--primary) px-6 py-5">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: primaryDark }}
                >
                  Outside of Coding
                </h2>
                <p className="text-lg font-medium text-(--text) leading-relaxed mb-3">
                  I also enjoy reading, journaling, cooking, and hiking!
                </p>
              </div>
            </div>
          </div>

        </div>

    </main>
  );
}



