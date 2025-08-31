export default function LandSurveying() {
  return (
    <div className="fade-on-scroll">
      <h1 className="text-4xl font-bold text-center mb-8">Land Surveying Services</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8">Accurate land surveying for property boundaries, construction, and mapping.</p>
        <ul className="list-disc list-inside space-y-4">
          <li><i className="fas fa-map-marked-alt mr-2"></i>Boundary surveys</li>
          <li><i className="fas fa-compass mr-2"></i>Topographic mapping</li>
          <li><i className="fas fa-ruler mr-2"></i>Construction staking</li>
          <li><i className="fas fa-globe mr-2"></i>GIS and mapping services</li>
          <li><i className="fas fa-home mr-2"></i>Subdivision planning</li>
          <li><i className="fas fa-tools mr-2"></i>ALTA/NSPS surveys</li>
        </ul>
      </div>
    </div>
  );
}