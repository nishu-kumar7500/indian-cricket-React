export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>Incredible moments. Iconic players.</h2>
          <p>
            Dive into Indian cricket — from legendary players to recent match
            highlights. This fan hub celebrates the spirit, skill and history of
            Team India.
          </p>
          <a className="btn" href="#players">
            Explore Players
          </a>
        </div>
        <div className="hero-image">
          <img
            alt="Team India"
            src="https://i.pinimg.com/736x/2c/bd/fb/2cbdfb1a72b0c80e3f7ce618fd7297e4.jpg"
          />
        </div>
      </div>
    </section>
  );
}
