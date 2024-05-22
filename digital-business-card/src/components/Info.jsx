import profilePicture from "../assets/me.jpg";
import mailIcon from "../assets/mail.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Info() {
  return (
    <header>
      <img className="info--profile_picture" src={profilePicture} />
      <div className="info--personal_info">
        <h1 className="info--name">Roysa Peguero Martinez</h1>
        <h3 className="info--position">Full Stack Developer</h3>
        <p className="info--website">roysapeguero.com</p>
      </div>
      <div className="info--contact">
        <button className="info--contact_button email">
          {" "}
          <img className="info--button_icon" src={mailIcon} /> Email
        </button>
        <button className="info--contact_button linkedin">
          <img className="info--button_icon" src={linkedinIcon} />
          LinkedIn
        </button>
      </div>
    </header>
  );
}
