import { Link } from 'react-router';
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
      <Header />
      <HomePage />
      <Link
        to={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 bg-green-500 p-4 rounded-lg flex items-center shadow-2xl justify-center hover:bg-green-600 transition duration-300 gap-1"
      >
        <IconBrandWhatsapp stroke={2} className="text-white" />
        <span className="text-white">Whatspp</span>
      </Link>
      <Footer />
    </>
  );
}

export default App;
