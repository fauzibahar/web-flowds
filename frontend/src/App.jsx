import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { IconBrandWhatsapp } from '@tabler/icons-react';

function App() {
  const phoneNumber = '6282210081560';
  const message = encodeURIComponent(
    'Halo, saya tertarik dengan layanan Anda!'
  );

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Crazetive Digital | Web Development & Jasa Digital</title>
        <meta
          name="google-site-verification"
          content="Ov3cchzvKHki7VD55OsGylo6Q4LJeXlfkyEVnu3BKpU"
        />
        <meta
          name="keywords"
          content="jasa pembuatan website, jasa web developer Bogor, branding bisnis online, social media management, jasa desain grafis, jasa foto produk, videografi bisnis, strategi pemasaran digital"
        />
        <meta
          name="description"
          content="Crazetive Digital menyediakan layanan Web Development, Visual Branding, Social Media Management, Videography, dan Photography untuk meningkatkan kehadiran digital bisnis Anda."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (Facebook & Instagram) */}
        <meta
          property="og:title"
          content="Crazetive Digital | Web Development & Jasa Digital"
        />
        <meta
          property="og:description"
          content="Tingkatkan bisnis Anda dengan layanan Web Development, Branding, Social Media Management, Videography, dan Photography dari Crazetive Digital."
        />
        <meta
          property="og:image"
          content="https://crazetive.com/crazeweb.png"
        />
        <meta property="og:url" content="https://crazetive.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Crazetive Digital" />

        {/* Meta Tags Tambahan untuk Mobile & Indexing */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Crazetive Digital" />
        <link rel="canonical" href="https://crazetive.com/" />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://crazetive.com/crazetive-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://crazetive.com/crazetive-icon.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://crazetive.com/crazetive-icon.png"
        />
      </Helmet>
      <Header />
      <HomePage />
      <Link
        to={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 bg-green-500 p-4 rounded-lg flex items-center shadow-2xl justify-center hover:bg-green-600 transition duration-300 gap-1"
      >
        <IconBrandWhatsapp stroke={2} className="text-white" />
        <span className="text-white">WhatsApp</span>
      </Link>
      <Footer />
    </>
  );
}

export default App;
