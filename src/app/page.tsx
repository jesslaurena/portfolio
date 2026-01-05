import Image from "next/image";
import { primaryDark } from "@/constants/colors";
import BackgroundLines from "@/components/BackgroundLines";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-start justify-center pt-14 md:pt-44 pb-16">

      <BackgroundLines />

      <div className="relative w-full max-w-7xl flex flex-col gap-10 px-6 md:flex-row md:items-center md:gap-16">
        {/* Left: Headshot */}
        <div className="flex justify-center md:justify-start">
          <div className="ml-8 relative aspect-square w-72 overflow-hidden md:w-96">

            {/* Headshot (base layer) */}
            <Image
              src="/headshot-1.png"
              alt="Portrait of Jess Anderson"
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 18rem"
              className="object-cover pop-up"
            />

            {/* Top-left tape */}
            <Image
              src="/headshot-2.png"
              alt=""
              width={300}
              height={300}
              className="absolute top-0 left-0 z-10 tape-swipe opacity-0"
            />

            {/* Bottom-right tape */}
            <Image
              src="/headshot-3.png"
              alt=""
              width={300}
              height={300}
              className="absolute bottom-0 right-0 z-10 tape-swipe tape-delay opacity-0"
            />


          </div>
        </div>



        {/* Right: Text content */}
        <div className="flex-1 mr-16 pop-up">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: primaryDark }}
          >
            Hi, I&apos;m Jess!
          </h1>

          <div className="mt-8 space-y-4">
            {/* Item 1 */}
            <div className="flex items-center gap-2 rounded-2xl border border-(--primary) bg-(--primary-light)/40 px-5 py-4 shadow-sm backdrop-blur">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden">
                <Image
                  src="/gator-emoji.png"
                  alt="Gator emoji"
                  fill
                  sizes="36px"
                  className="object-contain p-1"
                />
              </div>
              <p className="text-2xl font-medium text-(--text)">
                UF Computer Science, Dec. 2027
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-2 rounded-2xl border border-(--primary) bg-(--primary-light)/40 px-5 py-4 shadow-sm backdrop-blur">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden">
                <Image
                  src="/laptop-emoji.png"
                  alt="Laptop emoji"
                  fill
                  sizes="36px"
                  className="object-contain p-1"
                />
              </div>
              <p className="text-2xl font-medium text-(--text)">
                Full Stack Web &amp; App Developer
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-2 rounded-2xl border border-(--primary) bg-(--primary-light)/40 px-5 py-4 shadow-sm backdrop-blur">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden">
                <Image
                  src="/paint-emoji.png"
                  alt="Paint palette emoji"
                  fill
                  sizes="36px"
                  className="object-contain p-1"
                />
              </div>
              <p className="text-2xl font-medium text-(--text)">
                UI/UX Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
