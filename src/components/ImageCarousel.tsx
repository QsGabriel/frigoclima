import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 5;
  const images = Array.from({ length: totalImages }, (_, i) =>
    `/Carrossel ${i + 1}.jpeg`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalImages]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square bg-gray-200">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carrossel ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalImages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
