import Image from 'next/image';
import './ImageSection.css';

export default function ImageSection(props) {
    const { Title="", Subtitle="", Media = [], Description="" } = props;

  return (
    <div className="image-section">
      <div className="image-section-image">
        <Image
          src={Media[0]?.url}
          alt={Title}
          width={300}
          height={200}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="image-section-content">
        <h3 className="image-section-title">{Title}</h3>
        <h4 className="image-section-subtitle">{Subtitle}</h4>
        <p className="image-section-desc">{Description}</p>
      </div>
    </div>
  );
}
