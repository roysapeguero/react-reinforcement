import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--react_logo" src={logo} />
      <h3 className="nav--title">ReactFacts</h3>
      <h4 className="nav--subtitle">React Course - Project 1</h4>
    </nav>
  );
}
