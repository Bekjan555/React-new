import "./_style.scss";

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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
            <a href="#" className="btn new__btn">
              your email
              &#10144;
            </a>
            
          </div>
          <div className="new__img col-6">
            <img
            src="https://st.mngbcn.com/rcs/pics/static/T7/fotos/S20/77009224_OR_D4.jpg?ts=1603814660971&imwidth=451&imdensity=1"
            alt=""
          />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default New;
