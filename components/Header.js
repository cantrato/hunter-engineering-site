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
            <li><Link href="/" className="hover:text-accent font-helvetica lowercase">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-accent font-helvetica lowercase">About Us</Link></li>
            <li><Link href="/services/civil-engineering" className="hover:text-accent font-helvetica lowercase">Civil Engineering</Link></li>
            <li><Link href="/services/land-surveying" className="hover:text-accent font-helvetica lowercase">Land Surveying</Link></li>
            <li><Link href="/projects/commercial" className="hover:text-accent font-helvetica lowercase">Commercial Projects</Link></li>
            <li><Link href="/projects/industrial" className="hover:text-accent font-helvetica lowercase">Industrial Projects</Link></li>
            <li><Link href="/contact-us" className="hover:text-accent font-helvetica lowercase">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;