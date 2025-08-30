import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/my-logo.svg"
              alt="Hunter Engineering Logo"
              width={200}
              height={100}
              className="mx-auto w-48 h-auto sm:w-56 md:w-64"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hunter Engineering
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Civil Engineering Excellence in Scottsdale, Arizona
          </p>

          {/* Call-to-Action Button */}
          <a
            href="mailto:info@hunterengineers.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">
            © 2023 Hunter Engineering. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Scottsdale, Arizona | hunterengineers.com
          </p>
        </div>
      </footer>
    </div>
  );
}
