import hero from "../assets/hero.png";

export default function Main() {
  return (
    <main>
      <img className="airbnb--hero" src={hero} alt="" />
      <div className="airbnb--body_section">
        <h1 className="airbnb--title">Online Experiences</h1>
        <p className="airbnb--body_text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  );
}
