import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav 
      className="fixed top-3 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="w-full mx-auto px-16">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name and Social Icons */}
          <div className="flex items-center space-x-2">

            <Link
              href="/"
              className="text-2xl font-bold text-(--primary) hover:text-(--primary-dark) transition-colors">
              Jess Anderson
            </Link>
            <Link href="https://www.linkedin.com/in/jessanderrson" target="_blank">
              <FaLinkedin className="w-6 h-6 text-(--primary) hover:text-(--primary-dark) transition-colors" />
            </Link>
            <Link href="https://github.com/jesslaurena" target="_blank">
              <FaGithub className="w-6 h-6 text-(--primary) hover:text-(--primary-dark) transition-colors" />
            </Link>

          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/about"
              className="text-m text-(--primary) hover:text-(--primary-dark) transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-m text-(--primary) hover:text-(--primary-dark) transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-m text-(--primary) hover:text-(--primary-dark) transition-colors"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}



