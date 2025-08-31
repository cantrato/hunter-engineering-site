import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Header />
      <main className="container mx-auto p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MyApp;