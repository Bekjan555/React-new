import "./styles.scss";

const New = () => {
  return (
    <section className="new">
      <div className="container">
        <div className="new__conent row">
          <div className="new__item col-6">
            <h2 className="new__title title">Subscribe to our newsletter</h2>
            <h3 className="new__subtitle subtitle">
              Send me your email address
            </h3>
            <p className="new__description description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d
            </p>
            <a href="#" className="new__btn btn">
              your email
            </a>
          </div>
          <div className="col-6">
            <img
            src="https://seo-studio.pro/assets/cache_image/upload/img/news/mnemonika_html_01_1280x720_dec.webp"
            alt=""
          />
          </div>
          
        </div>
      </div>
    </section>
  );
};
console.log(New);
export default New;
