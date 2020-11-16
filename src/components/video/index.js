import './_styles.scss';


const Video = () => {
    return (
        <section className="video">
            <div className="video__conent">
            <iframe className="video__iframe" src="https://www.youtube.com/embed/Mrq2ora_p0o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default Video;
