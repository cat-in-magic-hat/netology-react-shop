export default function MainBanner({ image, imageDescription, text }) {
    if (!image) return null;
    return (
        <div className="banner">
            <img src={image} className="img-fluid" alt={imageDescription} />
            { text && <h2 className="banner-header">{text}</h2> }
        </div>
    );
}