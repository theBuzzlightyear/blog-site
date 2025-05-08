import Image from 'next/image';
import './CarouselSection.css';

export default function CarouselSection(props) {

  const { Title = "", Carousel = [] } = props;
  return (
    <div className="carousel-section">
      <h2 className="carousel-heading">{Title}</h2>
      <div className="carousel-images">
        {Carousel?.map((slide, idx) => (
          <div key={slide?.createdAt} className="carousel-image-wrapper">
            <Image
              className="carousel-image"
              src={slide.Image?.url}
              alt={`carousel-${idx}`}
              width={250}
              height={160}
              layout="responsive"
              objectFit="cover"
            />
            <h3>{slide?.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}