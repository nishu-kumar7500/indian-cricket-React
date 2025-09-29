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
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/India_cricket_team_2018.jpg"
          />
        </div>
      </div>
    </section>
  );
}
