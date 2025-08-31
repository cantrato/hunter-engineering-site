export default function AboutUs() {
  return (
    <div className="fade-on-scroll">
      <h1 className="text-4xl font-bold text-center mb-8">About Hunter Engineering</h1>
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our History</h2>
          <p className="text-lg">Founded in 2000, Hunter Engineering has been a leader in civil engineering and land surveying for over two decades.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <img src="/assets/team1.jpg" alt="John Doe" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-accent">Lead Engineer</p>
            </div>
            <div className="text-center">
              <img src="/assets/team2.jpg" alt="Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-accent">Surveying Specialist</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">To deliver innovative and sustainable engineering solutions that exceed client expectations and contribute to community development.</p>
        </section>
      </div>
    </div>
  );
}