import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });
    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroVideo = document.querySelector('.hero-video');
      if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          src="/assets/hero.webm"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover hero-video"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hunter Engineering</h1>
          <p className="text-xl md:text-2xl mb-8">Civil Engineering & Land Surveying Experts</p>
          <Link href="/contact-us" className="bg-link text-secondary px-6 py-3 rounded hover:bg-opacity-80">
            Get Started
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 fade-on-scroll">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-accent p-6 rounded shadow-lg hover:scale-105 transition-transform">
            <img src="/assets/project1.jpg" alt="Commercial Project" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">Commercial Development</h3>
            <p className="text-secondary">Innovative solutions for commercial infrastructure.</p>
          </div>
          <div className="bg-accent p-6 rounded shadow-lg hover:scale-105 transition-transform">
            <img src="/assets/project2.jpg" alt="Industrial Project" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">Industrial Facilities</h3>
            <p className="text-secondary">Expert engineering for industrial projects.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-primary text-center fade-on-scroll">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-8">Contact us today for expert civil engineering and land surveying services.</p>
        <Link href="/services/civil-engineering" className="bg-link text-secondary px-6 py-3 rounded hover:bg-opacity-80">
          View Services
        </Link>
      </section>
    </div>
  );
}