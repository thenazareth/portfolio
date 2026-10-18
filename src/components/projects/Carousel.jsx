import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Carousel.css';

export default function Carousel({ projects = [], itemsPerPage = 4 }) {
  const [page, setPage] = useState(0);

  // slides
  const slides = [];
  for (let i = 0; i < projects.length; i += itemsPerPage) {
    slides.push(projects.slice(i, i + itemsPerPage));
  }

  const totalPages = slides.length;
  const isFirst = page === 0;
  const isLast = page === totalPages - 1;

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <>
      {/* Controles + indicador */}
      <div className="carousel-controls">
        <div className="carousel-indicator">
          <span className="carousel-indicator-label">Page</span>
          <span className="carousel-indicator-current">{page + 1}</span>
          <span className="carousel-indicator-total">/ {totalPages}</span>
        </div>

        <div className="carousel-buttons">
          <button
            type="button"
            aria-label="Slide anterior"
            className="carousel-btn"
            onClick={goPrev}
            disabled={isFirst}
          >
            <span className="material-symbols-outlined carousel-btn-icon">
              arrow_back
            </span>
          </button>

          <button
            type="button"
            aria-label="Próximo slide"
            className="carousel-btn"
            onClick={goNext}
            disabled={isLast}
          >
            <span className="material-symbols-outlined carousel-btn-icon">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Viewport */}
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="carousel-slide" key={i}>
              {slide.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}