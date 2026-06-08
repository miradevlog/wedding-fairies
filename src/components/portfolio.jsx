import { useState } from "react";

const images = import.meta.glob("../assets/*.{webp,jpg,png}", {
  eager: true,
  as: "url",
});

const imageList = Object.values(images);

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-3 gap-4 px-6 py-16">
        {imageList.map((src, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={src}
              alt={`Bild ${index + 1}`}
              className="w-full h-150 object-cover cursor-pointer"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX / OVERLAY */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] object-contain"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      )}
    </>
  );
}

export default Portfolio;
