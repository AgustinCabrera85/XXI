import { useEffect } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Catalog from "./components/Catalog";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!items.length) return undefined;

    const timers = new Map();
    let observer;
    let rafOne;
    let rafTwo;

    const clearTimer = (element) => {
      const timer = timers.get(element);
      if (timer) {
        window.clearTimeout(timer);
        timers.delete(element);
      }
    };

    const hideElement = (element, direction) => {
      clearTimer(element);
      element.classList.remove("is-visible", "is-above", "is-below");
      element.classList.add(direction === "up" ? "is-above" : "is-below");
    };

    // Paint one hidden frame before observing so the first reveal is visible.
    rafOne = requestAnimationFrame(() => {
      root.classList.add("reveal-enabled");

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        item.classList.add(rect.bottom < 0 ? "is-above" : "is-below");
      });

      rafTwo = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const element = entry.target;
              const isMeaningfullyVisible = entry.isIntersecting && entry.intersectionRatio >= 0.1;

              if (isMeaningfullyVisible) {
                clearTimer(element);
                element.classList.remove("is-above", "is-below");

                const delay = Number(element.dataset.revealDelay || 0);
                const timer = window.setTimeout(() => {
                  element.classList.add("is-visible");
                  timers.delete(element);
                }, delay);

                timers.set(element, timer);
                return;
              }

              // Fade out in the direction the section actually leaves the viewport.
              const rect = entry.boundingClientRect;
              const leavingUp = rect.top < 0 || rect.bottom <= window.innerHeight * 0.18;
              hideElement(element, leavingUp ? "up" : "down");
            });
          },
          {
            threshold: [0, 0.05, 0.1, 0.18, 0.35],
            rootMargin: "-5% 0px -8% 0px",
          }
        );

        items.forEach((item) => observer.observe(item));
      });
    });

    return () => {
      cancelAnimationFrame(rafOne);
      cancelAnimationFrame(rafTwo);
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
      observer?.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <div className="reveal-on-scroll" data-reveal data-reveal-delay="70">
          <Collection />
        </div>
        <div className="reveal-on-scroll reveal-soft" data-reveal data-reveal-delay="35">
          <Services />
        </div>
        <div className="reveal-on-scroll reveal-cinematic" data-reveal data-reveal-delay="50">
          <Experience />
        </div>
        <div className="reveal-on-scroll" data-reveal data-reveal-delay="35">
          <Catalog />
        </div>
        <div className="reveal-on-scroll reveal-soft" data-reveal data-reveal-delay="35">
          <Visit />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
