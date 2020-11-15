import playButton from "../../assets/Ellipse 1.svg";
import './style.scss';
const Video = () => {
    return (
        <section className="video">
            <div className="video__btn">
                <img className="playButton" src={playButton} />
            </div>
        </section>
    )
}

export default Video;
