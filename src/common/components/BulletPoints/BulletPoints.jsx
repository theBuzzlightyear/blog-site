'use client'
import Image from 'next/image';
import './BulletPoints.css';

export default function BulletPoints(props) {
  const { Title="", Description="",bullet=[]} = props;
  return (
    <div className="bullet-section">
      <h2>{Title}</h2>
      <p>{Description}</p>
      <ul className="bullet-list">
        {bullet?.map((point) => (
          <li key={point.id} className="bullet-item">
            <Image src={point.Icon?.url} width={20} height={20}  alt='icon'/>
            {point?.Title}
          </li>
        ))}
      </ul>
    </div>
  );
}
