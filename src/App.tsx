import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/Hero";
import "./css/global.scss";
import { Services } from "./components/services/services";
const App = () => {
  const scrollRef = useRef<Lenis>();

  useEffect(() => {
    scrollRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    scrollRef.current.on("scroll", ScrollTrigger.update);

    const updateFunc: gsap.TickerCallback = (time) => {
      scrollRef.current?.raf(time * 1000);
    };

    gsap.ticker.add(updateFunc, false, true);

    return () => {
      gsap.ticker.remove(updateFunc);
      scrollRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <Services />
        {/* <Cards />
        <About />
        <Testimonial />
        <Download />
        <Footer />
        <Copyright />
        <SpeedInsights/> */}
      </main>
    </>
  );
};

export default App;
