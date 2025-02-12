import {
  IconBrandFacebook,
  IconBrandInstagramFilled,
  IconWorld,
  IconBrandWhatsappFilled,
} from '@tabler/icons-react';
import { Link } from 'react-router';

const LinkMedSosPage = () => {
  const phoneNumber = '6282210081560';
  const message = encodeURIComponent(
    'Halo, saya ingin konsultasi lebih lanjut'
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F6A112] to-[#13677A] leading-[1.2]">
        Crazetive Digital
      </h1>

      <p className="text-lg max-w-md text-gray-300">
        Web Development, Branding & Design, Social Media Management,
        Photography, and Videography. Let’s bring your ideas to life!
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-sm">
        <Link
          to={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          className="flex items-center gap-2 bg-[#128C7E] px-6 py-3 rounded-full font-semibold hover:bg-[#25D366] transition shadow-lg shadow-[#128C7E]/50 w-full sm:w-auto justify-center"
        >
          <IconBrandWhatsappFilled size={20} /> WhatsApp
        </Link>
        <Link
          to="https://www.instagram.com/crazetive.id/"
          target="_blank"
          className="flex items-center gap-2 bg-[#C13584] px-6 py-3 rounded-full font-semibold hover:bg-[#E1306C] transition shadow-lg shadow-[#C13584]/50 w-full sm:w-auto justify-center"
        >
          <IconBrandInstagramFilled size={20} /> Instagram
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=61572922838758"
          target="_blank"
          className="flex items-center gap-2 bg-[#1558A5] px-6 py-3 rounded-full font-semibold hover:bg-[#1877F2] transition shadow-lg shadow-[#1558A5]/50 w-full sm:w-auto justify-center"
        >
          <IconBrandFacebook stroke={2} size={20} />
          Facebook
        </Link>
        <Link
          to="https://crazetive.vercel.app/"
          target="_blank"
          className="flex items-center gap-2 bg-[#13677A] px-6 py-3 rounded-full font-semibold hover:bg-[#0F4D56] transition shadow-lg shadow-[#13677A]/50 w-full sm:w-auto justify-center"
        >
          <IconWorld size={20} /> Website
        </Link>
      </div>
    </div>
  );
};

export default LinkMedSosPage;
