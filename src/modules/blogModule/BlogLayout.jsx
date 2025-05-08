import "./BlogLayout.css";
import CarouselSection from "@/common/components/CarouselSection/CarouselSection";
import BulletPoints from "@/common/components/BulletPoints/BulletPoints";
import ImageSection from "@/common/components/ImageSection/ImageSection";
import SocialConnect from "@/common/components/SocialConnect/SocialConnect";

const componentMap = {
  hero_section: ImageSection,
  bullet_section: BulletPoints,
  feature_section: CarouselSection,
  social_section: SocialConnect,
};

export default function BlogLayout({ data }) {
  const { Title="", Author="", PublishDate="", Content = [] } = data;

  return (
    <div className="blog-wrapper">
      <h1 className="blog-title">{Title}</h1>
      <p className="blog-meta">

        By {Author} on {new Date(PublishDate).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })}

      </p>

      {Content.map((section, index) => {
        const Component = componentMap[section.UniqueComponentId];
        return Component ? <Component key={index} {...section} /> : null;
      })}
    </div>
  );
}
