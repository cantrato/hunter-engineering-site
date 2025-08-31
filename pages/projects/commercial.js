export default function Commercial() {
  const projects = [
    { title: 'Office Building', description: 'Modern office complex design and construction.', image: '/assets/commercial1.jpg' },
    { title: 'Retail Center', description: 'Shopping mall infrastructure development.', image: '/assets/commercial2.jpg' },
    { title: 'Hotel Resort', description: 'Luxury resort engineering and planning.', image: '/assets/commercial3.jpg' },
  ];

  return (
    <div className="fade-on-scroll">
      <h1 className="text-4xl font-bold text-center mb-8">Commercial Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-accent p-6 rounded shadow-lg hover:scale-105 transition-transform">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-secondary">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}