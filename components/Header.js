import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary text-secondary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Hunter Engineering Logo" className="h-10 mr-4" />
          <h1 className="text-xl font-bold">Hunter Engineering</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/services/civil-engineering" className="hover:text-accent">Civil Engineering</Link></li>
            <li><Link href="/services/land-surveying" className="hover:text-accent">Land Surveying</Link></li>
            <li><Link href="/projects/commercial" className="hover:text-accent">Commercial Projects</Link></li>
            <li><Link href="/projects/industrial" className="hover:text-accent">Industrial Projects</Link></li>
            <li><Link href="/contact-us" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;