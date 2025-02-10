import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { projects } from '../data';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Menentukan jumlah proyek yang ditampilkan
  const displayedProjects = showAll
    ? projects
    : isMobile
    ? projects.slice(0, 3)
    : projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-18 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Image dengan efek scale saat hover */}
              <div
                className="relative overflow-hidden"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay title yang muncul saat hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {project.name}
                  </p>
                  <p className="text-white text-md font-normal">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 6 && (
          <div className="text-center mt-8">
            <button
              className="px-6 py-3 bg-[#13677A] text-white font-semibold rounded-lg hover:bg-white hover:text-[#13677A] hover:outline-1 transition cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Portfolio'}
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Tambahkan width yang tepat dan padding untuk responsive */}
          <div className="relative w-full max-w-5xl mx-auto">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg object-contain"
            />
            <button
              className="absolute top-3 right-3 text-white bg-black/60 rounded-lg p-2 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
