import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold">Billa Creative</h3>
              <p className="mt-2 text-gray-400">
                Creative agency terbaik di Indonesia, siap membantu brand owner
                mengembangkan bisnis di media sosial.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Hubungi Kami</h3>
              <p className="mt-2 text-gray-400">
                Informasi lengkap mengenai rate card dan promo:
              </p>
              <p className="text-gray-400">
                Marketing Billa: marketing@billa.co.id
              </p>
              <p className="text-gray-400">Email: billacreative@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Kontak</h3>
              <p className="mt-2 text-gray-400">WhatsApp / Call:</p>
              <p className="text-gray-400">Winky: +62 821-3768-6727</p>
              <p className="text-gray-400">Dilla: +62 813-8301-6898</p>
              <p className="text-gray-400">Viana: +62 858-6952-9923</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#13677A]">
        <div className="text-center bg-[#13677A] text-white ">
          © 2024 Billa Creative - PT. Billa Corp Indonesia
        </div>
      </div>
    </>
  );
};

export default Footer;
