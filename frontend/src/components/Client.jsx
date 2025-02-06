import { clients } from '../data';

const Client = () => {
  const phoneNumber = '6282210081560';
  const message = encodeURIComponent(
    'Halo, saya tertarik dengan layanan Anda!'
  );
  return (
    <section
      className="py-8 md:py-10 bg-gray-100"
      aria-labelledby="client-heading"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white p-8 rounded-xl shadow-lg mb-10">
          <h1 className="text-center text-2xl md:text-4xl font-semibold text-[#13677A]">
            Saatnya membawa brand Anda lebih jauh dan lebih dikenal!
          </h1>
          <div className="text-center">
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#13677A] text-white font-bold text-base py-2 px-4 md:text-lg md:py-4 md:px-6 rounded-lg mt-6 hover:bg-white hover:outline-1 hover:text-[#13677A]"
            >
              Konsultasi Gratis!
            </a>
          </div>
        </div>
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-10">
          Our Clients
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-1/4 md:w-1/10 lg:w-1/14 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                width={100}
                height={100}
                className="transition-all duration-300 filter grayscale  hover:filter-none hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
