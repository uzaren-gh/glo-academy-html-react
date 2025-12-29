import './SideBar.css'

export const SideBar = ({title, text, img: {src, alt}}) => {
    return (
        <div className="content-side__list-item">
            <img
                className="content-side__list-item--img"
                src={src}
                alt={alt}
            />
            <h5 className="content-side__list-item--title">{title}</h5>
            <p className="content-side__list--item--text">
               {text}
            </p>
        </div>
    )
}