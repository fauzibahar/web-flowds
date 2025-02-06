import { services } from '../data';

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg hover:scale-105 transition-transform duration-300 w-full mx-auto"
        >
          <div className="text-[#13677A] mb-6">
            {<service.icon size={50} />}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
