import githubIcon from "../assets/github.png";

export default function Footer() {
  return (
    <div className="footer">
      <a target="_blank" href="https://www.github.com/roysapeguero">
        <img className="footer--github_icon" src={githubIcon} />
      </a>
    </div>
  );
}
