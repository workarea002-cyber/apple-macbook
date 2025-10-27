import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Highlights />
      <Features />
      <Footer />
    </>
  );
};

export default App;
