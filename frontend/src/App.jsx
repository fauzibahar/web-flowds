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
          name="keywords"
          content="
    jasa pembuatan website profesional, jasa web developer Bogor, jasa website murah dan berkualitas, 
    bikin website toko online, pembuatan website perusahaan, jasa desain logo profesional, 
    branding bisnis online, jasa desain grafis murah, desain identitas brand, 
    pembuatan kartu nama & brosur, jasa kelola Instagram bisnis, jasa social media marketing, 
    cara meningkatkan engagement Instagram, strategi pemasaran digital, jasa content creator Instagram, 
    jasa video promosi bisnis, jasa editing video profesional, jasa video company profile, 
    produksi video marketing, jasa pembuatan iklan video, jasa foto produk profesional, 
    fotografer produk UMKM, jasa foto katalog bisnis, jasa fotografi untuk branding, 
    foto produk untuk marketplace
  "
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
          content="https://crazetive.vercel.app/public/crazeweb.png"
        />
        <meta property="og:url" content="https://crazetive.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Meta Tags Tambahan untuk Mobile & Indexing */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Crazetive Digital" />
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
