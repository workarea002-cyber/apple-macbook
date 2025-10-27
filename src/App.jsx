import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import ProductViewer from "./components/ProductViewer";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </>
  );
};

export default App;
