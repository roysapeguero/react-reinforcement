import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div className="app--card_container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
