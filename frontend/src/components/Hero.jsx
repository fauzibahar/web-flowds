import { Link } from 'react-router';
import heroImage from '../assets/img/crazeweb.png';
const Hero = () => {
  const phoneNumber = '6282210081560';
  const message = encodeURIComponent(
    'Halo, saya tertarik dengan layanan Anda!'
  );
  return (
    <section id="home" className="bg-[#13677A] py-24 lg:py-0">
      <div className="container mx-auto px-6 md:min-h-screen  md:px-12 w-full flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="text-white text-center lg:text-left lg:w-[40%] w-full md:space-y-6 space-y-4">
          <h1 className="text-xl md:text-xl font-bold">Crazetive Digital</h1>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Because Digital <br /> Presence Matters
          </h1>
          <p className="text-lg font-medium text-gray-200">
            Setiap brand punya cerita. Kami mengubahnya menjadi pengalaman
            digital yang berkesan, relevan, dan berpengaruh. Crazetive hadir
            untuk memastikan brand Anda bukan sekadar terlihat tetapi diingat.
          </p>
          <Link
            to={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#13677A] font-bold text-base py-2 px-4 md:text-lg md:py-4 md:px-6 rounded-lg hover:bg-[#13677A] hover:text-white hover:outline-1"
          >
            Konsultasi Sekarang
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex justify-end lg:w-[60%] w-full">
          <img
            src={heroImage}
            alt="Team Meeting"
            className="w-full"
            style={{ filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.20))' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
