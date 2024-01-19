function cursorAnim(){
  const crsr = document.querySelector(".cursor");
  const main = document.querySelector(".main");
  const nav = document.querySelector("nav");
  const h1s = document.querySelectorAll(".hero h1");

  h1s.forEach((h1) => {
    h1.addEventListener("mouseenter", () => {
      gsap.to(crsr, {
        scale: 4,
      });
    });
    h1.addEventListener("mouseleave", () => {
      gsap.to(crsr, {
        scale: 1,
      });
    });
  });

  main.addEventListener("mousemove", (e) => {
    gsap.to(crsr, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
  nav.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      opacity: 0,
      scale: 0,
    });
  });
  nav.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      opacity: 1,
      scale: 1,
    });
  });
  main.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      opacity: 1,
      scale: 1,
    });
  });
  main.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      opacity: 0,
      scale: 0,
    });
  });

}
cursorAnim();
