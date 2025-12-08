import Link from "next/link";

export default function Navigation() {
  return (
    <nav 
      className="fixed top-3 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-2xl font-bold text-(--primary) hover:text-(--primary-dark) transition-colors"
          >
            Jess Anderson
          </Link>

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
              className="text-m text-(--primary) hover:var(--primary-dark) transition-colors"
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



