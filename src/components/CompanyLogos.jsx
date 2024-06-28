import React, { useState, useEffect } from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateCurrentImages = () => {
      const nextIndex = (currentIndex + 5) % companyLogos.length;
      setCurrentImages(companyLogos.slice(nextIndex, nextIndex + 5));
      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(updateCurrentImages, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setCurrentImages(companyLogos.slice(0, 5));
  }, []);

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Zaupajo nam:</h5>
      <ul className="flex">
        {currentImages.map((image, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}>
            <img src={image} width={134} height={28} alt={`Logo ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
