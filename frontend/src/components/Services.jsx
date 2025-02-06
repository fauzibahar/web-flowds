import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-18 md:py-24 bg-[#13677A]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-4xl font-bold text-white mb-10">
          Our Services
        </h2>
        <div>
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
