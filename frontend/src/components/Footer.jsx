import {
  IconBrandWhatsappFilled,
  IconHomeFilled,
  IconMailFilled,
} from '@tabler/icons-react';
import logoLight from '../assets/img/logo/CRAZETIVE LOGO white.png';
import { Link } from 'react-scroll';
import { navLinks } from '../data';
import { services } from '../data';

const Footer = () => {
  return (
    <footer className="bg-[#13677A] py-8 md:py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div className="text-white flex flex-col gap-4">
            <img src={logoLight} alt="Logo" className="w-36" />
            <p className="mt-2">
              Creative agency terbaik di Indonesia, siap membantu berbagai brand
              owner meningkatkan dan mengembangkan bisnis di media sosial. Kami
              memiliki berbagai layanan unggulan serta team yang berkompeten,
              profesional dan berpengalaman di dunia Creative Digital.
            </p>
          </div>

          <div className="text-white flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2 ">Company</h3>
            {navLinks.map((navLink, index) => (
              <Link to={navLink.to} className="cursor-pointer" key={index}>
                {navLink.name}
              </Link>
            ))}
          </div>
          <div className="text-white flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2 ">Our Solution</h3>
            {services.map((service, index) => (
              <p key={index} className="">
                {service.title}
              </p>
            ))}
          </div>

          <div className="text-white flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2 ">Hubungi Kami</h3>
            <p className="flex items-center gap-2">
              <span>
                <IconMailFilled />
              </span>
              crazetivedigital@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span>
                <IconBrandWhatsappFilled />
              </span>
              (+62) 822-1008-1560
            </p>
            <p className="flex items-center gap-2">
              <span>
                <IconHomeFilled />
              </span>
              Jl. Tapos Lbc, Ciderum, Kec. Caringin, Kabupaten Bogor, Jawa Barat
              16730
            </p>
          </div>
        </div>
        <div className="border-t border-white mt-6 pt-6 text-center text-white ">
          &copy; {new Date().getFullYear()} Crazetive Digital All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
