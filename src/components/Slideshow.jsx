import React, { useState, useEffect } from "react";

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Slideshow mounted with slides:', slides);
    setIsLoading(false);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (isLoading) {
    return <div className="slideshow-loading">Yükleniyor...</div>;
  }

  if (!slides || slides.length === 0) {
    return <div className="slideshow-error">Görüntülenecek resim bulunamadı.</div>;
  }

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            onError={(e) => {
              console.error(`Error loading image: ${slide.image}`);
              e.target.src = 'https://via.placeholder.com/800x500?text=Resim+Yüklenemedi';
            }}
          />
        </div>
      ))}

      <button className="slide-arrow slide-arrow-left" onClick={prevSlide} aria-label="Önceki">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="slide-arrow slide-arrow-right" onClick={nextSlide} aria-label="Sonraki">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="slide-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
