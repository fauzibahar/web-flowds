import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandFacebook } from '@tabler/icons-react';
import { Bounce, toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ikytgmd',
        'template_4cm7mh8',
        form.current,
        '5y_UFaCAU3ZBs0Xjk'
      )
      .then(
        () => {
          setFormData({
            name: '',
            phone: '',
            subject: '',
            message: '',
          });
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        },
        (error) => {
          toast.error('Error sending message, please try again!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        }
      );
  };

  return (
    <section id="contact" className="bg-[#13677A] py-18 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold text-white mb-10">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hubungi Kami
            </h3>
            <p className="text-gray-600 mb-4">
              Kami akan sangat senang berkomunikasi untuk mengetahui dan
              merencanakan solusi terbaik untuk setiap permasalahan Anda.
            </p>
            <div className="text-gray-700 space-y-3 mb-6">
              <p className="font-semibold text-lg text-gray-900">
                Kantor - Billa Creative
              </p>
              <p className="text-gray-700">
                Jl. Cendrawasih No.28A, Dayakan, Sardonoharjo, Kec. Ngaglik,
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
              </p>
            </div>

            {/* Social Media */}
            <h4 className="font-semibold text-lg text-gray-900">
              Social Media
            </h4>
            <div className="flex gap-5 mt-3">
              <div className="bg-[#13677A] p-3 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-white text-white hover:text-[#13677A] flex items-center justify-center shadow-lg hover:shadow-xl hover:outline-1">
                <a href="https://www.instagram.com/flowds.id/" target="_blank">
                  <IconBrandInstagram stroke={2} width={32} height={32} />
                </a>
              </div>
              <div className="bg-[#13677A] p-3 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-white text-white hover:text-[#13677A] flex items-center justify-center shadow-lg hover:shadow-xl hover:outline-1">
                <a href="https://www.facebook.com/flowds.id" target="_blank">
                  <IconBrandFacebook stroke={2} width={32} height={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulir Kontak */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
              General Enquiries
            </h2>
            <form ref={form} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-500 rounded-lg focus:border-transparent focus:ring focus:ring-[#13677A] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  No HP / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="No HP / WhatsApp"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-500 rounded-lg focus:border-transparent focus:ring focus:ring-[#13677A] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-500 rounded-lg focus:border-transparent focus:ring focus:ring-[#13677A] outline-none"
                >
                  <option value="">Pilih kategori</option>
                  <option value="Layanan">Layanan</option>
                  <option value="Kolaborasi">Kolaborasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Pesan
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-500 rounded-lg focus:border-transparent focus:ring focus:ring-[#13677A] outline-none"
                  rows="4"
                  placeholder="Halo Flowds! Kami ingin berdiskusi lebih lanjut tentang ..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#13677A] text-white py-3 rounded-lg hover:bg-white hover:text-[#13677A] hover:outline-1 transition font-semibold"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
