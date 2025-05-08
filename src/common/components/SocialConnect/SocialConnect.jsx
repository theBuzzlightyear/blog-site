import './SocialConnect.css';
import Link from 'next/link';

export default function SocialConnect(props) {
    const { Name = "", Social = [] } = props;
    return (

        <div className="social-section">
            <h2 className="social-heading">{Name}</h2>
            <div className="social-icons">


                {Social?.map((handle, index) => (
                    <Link
                        key={index}
                        href={handle.Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        {handle.Name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
