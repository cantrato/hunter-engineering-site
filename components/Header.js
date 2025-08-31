import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <header className="bg-primary text-secondary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Hunter Engineering Logo" className="h-10" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/services/civil-engineering" className="hover:text-accent">Civil Engineering</Link></li>
            <li><Link href="/services/land-surveying" className="hover:text-accent">Land Surveying</Link></li>
            <div className="relative" onMouseEnter={() => setIsProjectsOpen(true)} onMouseLeave={() => setIsProjectsOpen(false)}>
              <Link href="/projects/commercial" className="hover:text-accent">Projects</Link>
              {isProjectsOpen && (
                <ul className="absolute top-full left-0 bg-primary text-secondary shadow-lg rounded mt-1 z-10">
                  <li><Link href="/projects/commercial" className="block px-4 py-2 hover:bg-accent">Commercial</Link></li>
                  <li><Link href="/projects/industrial" className="block px-4 py-2 hover:bg-accent">Industrial</Link></li>
                </ul>
              )}
            </div>
            <li><Link href="/contact-us" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;