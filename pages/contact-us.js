export default function ContactUs() {
  return (
    <div className="fade-on-scroll">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <form action="mailto:info@hunterengineers.com" method="post" encType="text/plain" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 bg-accent text-primary rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 bg-accent text-primary rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full p-2 bg-accent text-primary rounded" required></textarea>
            </div>
            <button type="submit" className="bg-link text-secondary px-6 py-2 rounded hover:bg-opacity-80">Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <p className="mb-4">123 Engineering Way<br />City, State 12345</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <div className="bg-accent h-64 rounded flex items-center justify-center">
            <p className="text-accent">Google Maps Embed Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}