import "./style.css";
import gsap from "gsap";

const timeline = gsap.timeline();

timeline
  .to(".preloader h1 span", {
    opacity: 1,
    stagger: 0.1,
    ease: "power1.inOut",
  })
  .to(".overlay", {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
    duration: 1,
    ease: "power1.out",
  })
  .from(
    ["nav .links", "nav p"],
    {
      yPercent: -100,
      ease: "power1.out",
    },
    "<"
  )
  .from(
    ".logo > *",
    {
      yPercent: -120,
      stagger: {
        each: 0.03,
        from: "end",
      },
      ease: "circ.out",
    },
    "<"
  );
