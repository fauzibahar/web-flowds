const About = () => {
  return (
    <section id="tentang-kami" className="py-18 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Tentang Kami
        </h1>

        <div className="bg-gray-100 rounded-lg p-6 gap-4 flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800">
            About Our Company
          </h2>
          <p className="text-gray-600">
            We are a passionate team dedicated to delivering innovative
            solutions that transform businesses. With years of experience and a
            commitment to excellence, we strive to exceed expectations and drive
            success for our clients.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Expert team with diverse skills</li>
            <li>Cutting-edge technology solutions</li>
            <li>Customer-centric approach</li>
            <li>Proven track record of success</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
