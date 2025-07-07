
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const vehicles = [
    {
      id: 1,
      name: "Toyota Highlander",
      image: "/lovable-uploads/40223682-7718-496f-8722-b3b7ea930c9b.png"
    },
    {
      id: 2,
      name: "Mercedes-Benz C-Class",
      image: "/lovable-uploads/dbf5414e-2ff5-422f-a2bc-6e2686879594.png"
    },
    {
      id: 3,
      name: "Toyota Highlander",
      image: "/lovable-uploads/bb91a39f-b411-4b18-8a91-6d93de136864.png"
    },
    {
      id: 4,
      name: "Mercedes-Benz GLC",
      image: "/lovable-uploads/6f6cfb5f-3273-49f6-b3d5-5961292c6a1e.png"
    },
    {
      id: 5,
      name: "Toyota Venza",
      image: "/lovable-uploads/e0a50533-064c-404c-afa8-4ffdf8354dc3.png"
    },
    {
      id: 6,
      name: "Toyota Sienna",
      image: "/lovable-uploads/2185a415-815c-457a-a49c-0792b2543550.png"
    },
    {
      id: 7,
      name: "Toyota Venza",
      image: "/lovable-uploads/f895bd06-3d4e-4a7f-b179-f9fbe0543576.png"
    },
    {
      id: 8,
      name: "Mercedes-Benz ML-Class",
      image: "/lovable-uploads/9f1c7eb1-110e-4f60-b506-95ffe5c94746.png"
    },
    {
      id: 9,
      name: "Toyota Camry",
      image: "/lovable-uploads/12293e72-c439-4ad1-85c2-0c8be63ff97d.png"
    },
    {
      id: 10,
      name: "Toyota Corolla",
      image: "/lovable-uploads/ea974eac-e37d-411e-96e7-93911de01390.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Vehicle Collection
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected range of quality vehicles, each inspected and ready for the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(vehicle.image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                    <p className="text-sm text-gray-200">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Selected vehicle"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
