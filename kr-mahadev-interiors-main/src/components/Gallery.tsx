import { useState } from "react";
import kitchenModern from "@/assets/kitchen-modern.jpg";
import wardrobeBedroom from "@/assets/wardrobe-bedroom.jpg";
import ceilingLighting from "@/assets/ceiling-lighting.jpg";
import kitchenIsland from "@/assets/kitchen-island.jpg";
import bedroomLuxury from "@/assets/bedroom-luxury.jpg";
import livingCeiling from "@/assets/living-ceiling.jpg";
import kitchenGlass from "@/assets/kitchen-glass.jpg";
import heroImage from "@/assets/hero-bedroom.jpg";

const galleryImages = [
  { src: heroImage, alt: "Luxury bedroom with wardrobe" },
  { src: kitchenModern, alt: "Modern modular kitchen" },
  { src: wardrobeBedroom, alt: "Custom bedroom wardrobe" },
  { src: ceilingLighting, alt: "False ceiling with LED lighting" },
  { src: kitchenIsland, alt: "Kitchen with island" },
  { src: bedroomLuxury, alt: "Luxury master bedroom" },
  { src: livingCeiling, alt: "Living room designer ceiling" },
  { src: kitchenGlass, alt: "Modern kitchen with glass cabinets" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#9da993]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of beautifully crafted interiors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Full Size
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery image full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
