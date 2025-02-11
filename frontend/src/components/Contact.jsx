import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import { Bounce, toast } from 'react-toastify';
import { LoaderCircle } from 'lucide-react';

// Konstanta dari environment variable
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const validatePhone = (phone) => {
    const phoneRegex = /^([0-9]{10,15})$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      toast.error('Format nomor telepon tidak valid!');
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });

      toast.success('Pesan berhasil terkirim!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    } catch (error) {
      toast.error('Gagal mengirim pesan, silakan coba lagi!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <header>
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
            Contact Us
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <article className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <header>
              <h2 className="text-2xl font-semibold text-[#13677A] mb-4">
                Hubungi Kami
              </h2>
            </header>

            <div className="text-gray-900 mb-4">
              <p>
                Kami akan sangat senang berkomunikasi untuk mengetahui dan
                merencanakan solusi terbaik untuk setiap permasalahan Anda.
              </p>
            </div>

            <address className="space-y-3 mb-6 not-italic">
              <h3 className="font-semibold text-lg text-[#13677A]">
                Kantor - Flowds
              </h3>
              <p className="text-gray-900">
                Jl. Tapos Lbc, Ciderum, Kec. Caringin, Kabupaten Bogor, Jawa
                Barat 16730
              </p>
            </address>

            {/* Social Media Navigation */}
            <nav aria-label="Social Media Links">
              <h3 className="font-semibold text-lg text-[#13677A]">
                Social Media
              </h3>
              <ul className="flex gap-5 mt-3">
                <li>
                  <SocialMediaButton
                    href="https://www.instagram.com/flowds.id/"
                    icon={<IconBrandInstagram width={32} height={32} />}
                    label="Instagram"
                  />
                </li>
                <li>
                  <SocialMediaButton
                    href="https://www.facebook.com/flowds.id"
                    icon={<IconBrandFacebook width={32} height={32} />}
                    label="Facebook"
                  />
                </li>
              </ul>
            </nav>
          </article>

          {/* Contact Form Section */}
          <article className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <header>
              <h2 className="text-2xl font-bold mb-6 text-center text-[#13677A]">
                General Enquiries
              </h2>
            </header>

            <form
              ref={form}
              className="space-y-5"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <FormField
                label="Nama"
                name="name"
                type="text"
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                aria-required="true"
              />
              <FormField
                label="No HP / WhatsApp"
                name="phone"
                type="phone"
                placeholder="Contoh: 081234567890"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                required
                aria-required="true"
                pattern="[0-9]{10,15}"
                aria-describedby="phone-hint"
              />
              <div id="phone-hint" className="sr-only">
                Masukkan nomor telepon antara 10-15 digit
              </div>

              <FormField
                label="Email"
                name="Email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={100}
                required
                aria-required="true"
              />

              <div role="group" aria-labelledby="subject-label">
                <label
                  id="subject-label"
                  className="block text-[#13677A] font-medium mb-1"
                >
                  Subject
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-700 rounded-lg focus:border-transparent placeholder-gray-900 focus:ring focus:ring-[#13677A] outline-none"
                  aria-required="true"
                >
                  <option value="">Pilih kategori</option>
                  <option value="Layanan">Layanan</option>
                  <option value="Kolaborasi">Kolaborasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div role="group" aria-labelledby="message-label">
                <label
                  id="message-label"
                  className="block text-[#13677A] font-medium mb-1"
                >
                  Pesan
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-700 rounded-lg focus:border-transparent placeholder-gray-900 focus:ring focus:ring-[#13677A] outline-none"
                  rows="4"
                  maxLength={1000}
                  placeholder="Halo Flowds! Kami ingin berdiskusi lebih lanjut tentang ..."
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#13677A] text-gray-100 py-3 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-[#13677A] hover:outline-1 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <LoaderCircle className="w-6 h-6 animate-spin" />
                ) : (
                  'Kirim Pesan'
                )}
              </button>
            </form>
          </article>
        </div>
      </div>
    </main>
  );
};

// Components
const SocialMediaButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="bg-[#13677A] p-3 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-gray-100 text-gray-100 hover:text-[#13677A] flex items-center justify-center shadow-lg hover:shadow-xl hover:outline-1"
  >
    {icon}
  </a>
);

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  maxLength,
  required,
  ...props
}) => (
  <div role="group" aria-labelledby={`${name}-label`}>
    <label
      id={`${name}-label`}
      htmlFor={name}
      className="block text-[#13677A] font-medium mb-1"
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className="w-full p-3 border border-gray-700 rounded-lg focus:border-transparent placeholder-gray-900 focus:ring focus:ring-[#13677A] outline-none"
      {...props}
    />
  </div>
);

export default Contact;
