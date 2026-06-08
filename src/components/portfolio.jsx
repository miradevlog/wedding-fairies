import { useState } from "react";

import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/7.webp";
import img8 from "../assets/8.webp";
import img9 from "../assets/9.webp";
import img10 from "../assets/10.webp";
import img11 from "../assets/11.webp";
import img12 from "../assets/12.webp";
import img13 from "../assets/13.webp";
import img14 from "../assets/14.webp";
import img15 from "../assets/15.webp";
import img16 from "../assets/16.webp";
import img17 from "../assets/17.webp";
import img18 from "../assets/18.webp";
import img19 from "../assets/19.webp";
import img20 from "../assets/20.webp";
import img21 from "../assets/21.webp";
import img22 from "../assets/22.webp";
import img23 from "../assets/23.webp";
import img24 from "../assets/24.webp";
import img25 from "../assets/25.webp";
import img26 from "../assets/26.webp";
import img27 from "../assets/27.webp";
import img28 from "../assets/28.webp";
import img29 from "../assets/29.webp";
import img30 from "../assets/30.webp";
import img31 from "../assets/31.webp";
import img32 from "../assets/32.webp";
import img33 from "../assets/33.webp";
import img34 from "../assets/34.webp";
import img35 from "../assets/35.webp";
import img36 from "../assets/36.webp";
import img37 from "../assets/37.webp";
import img38 from "../assets/38.webp";
import img39 from "../assets/39.webp";
import img40 from "../assets/40.webp";

const imageList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
];

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