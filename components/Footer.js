const Footer = () => {
  return (
    <footer className="bg-primary text-secondary p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Hunter Engineering. All rights reserved.</p>
        <div className="mt-2">
          <a href="mailto:info@hunterengineers.com" className="text-link hover:underline">info@hunterengineers.com</a>
          <span className="mx-2">|</span>
          <span>Phone: (123) 456-7890</span>
        </div>
        <div className="mt-2">
          <a href="#" className="text-link hover:underline mx-2">Facebook</a>
          <a href="#" className="text-link hover:underline mx-2">LinkedIn</a>
          <a href="#" className="text-link hover:underline mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;