import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="react-logo" src={logo} />
      <h3 className="title">ReactFacts</h3>
      <h4 className="subtitle">React Course - Project 1</h4>
    </nav>
  );
}
