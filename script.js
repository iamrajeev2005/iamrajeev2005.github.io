function cursorAnim() {
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

function servicePageAnim(){
const servicePage = document.querySelector(".services");
const aboutPage = document.querySelector(".about");
const projectsPage = document.querySelector(".projects");
const hoverText = document.querySelector(".services .hover-texts .hover-top");
const hoverText1 = document.querySelector(
  ".services .hover-texts1 .hover-top1"
);

const firstWord = document.querySelector(
  ".services .hover-texts .hover-top .first"
);
const secondWord = document.querySelector(
  ".services .hover-texts .hover-top .second"
);
const thirdWord = document.querySelector(
  ".services .hover-texts .hover-top .third"
);
const fourthWord = document.querySelector(
  ".services .hover-texts .hover-top .fourth"
);
const fifthWord = document.querySelector(
  ".services .hover-texts .hover-top .fifth"
);
const sixthWord = document.querySelector(
  ".services .hover-texts .hover-top .sixth"
);
const seventhWord = document.querySelector(
  ".services .hover-texts .hover-top .seventh"
);
const eightWord = document.querySelector(
  ".services .hover-texts .hover-top .eight"
);

const firstWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .first1"
);
const secondWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .second1"
);
const thirdWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .third1"
);
const fourthWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .fourth1"
);
const fifthWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .fifth1"
);
const sixthWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .sixth1"
);
const seventhWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .seventh1"
);
const eightWord1 = document.querySelector(
  ".services .hover-texts1 .hover-top1 .eight1"
);

hoverText.addEventListener("mouseenter", () => {
  servicePage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  aboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  projectsPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  hoverText.style.color = "White";
  firstWord.style.transform = "translate(-6vw,-6vw) rotate(-10deg)";
  secondWord.style.transform = "translate(-2vw,-3vw) rotate(-10deg)";
  thirdWord.style.transform = "translate(-1vw,3vw) rotate(10deg)";
  fourthWord.style.transform = "translate(0vw,0vw) rotate(-10deg)";
  fifthWord.style.transform = "translate(-1vw,5vw) rotate(10deg)";
  sixthWord.style.transform = "translate(-1vw,-1vw) rotate(6deg)";
  seventhWord.style.transform = "translate(-1vw,1vw) rotate(-8deg)";
  eightWord.style.transform = "translate(-1vw,1vw) rotate(-10deg)";
});
hoverText.addEventListener("mouseleave", () => {
  servicePage.style.backgroundColor = "white";
  aboutPage.style.backgroundColor = "white";
  projectsPage.style.backgroundColor = "white";
  hoverText.style.color = "Black";
  firstWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  secondWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  thirdWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  fourthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  fifthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  sixthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  seventhWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  eightWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
});
hoverText1.addEventListener("mouseenter", () => {
  servicePage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  aboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  projectsPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  hoverText1.style.color = "White";
  firstWord1.style.transform = "translate(-6vw,-6vw) rotate(-10deg)";
  secondWord1.style.transform = "translate(-2vw,-3vw) rotate(-10deg)";
  thirdWord1.style.transform = "translate(-1vw,3vw) rotate(10deg)";
  fourthWord1.style.transform = "translate(0vw,0vw) rotate(-10deg)";
  fifthWord1.style.transform = "translate(-1vw,5vw) rotate(10deg)";
  sixthWord1.style.transform = "translate(-1vw,-1vw) rotate(6deg)";
  seventhWord1.style.transform = "translate(-1vw,1vw) rotate(-8deg)";
  eightWord1.style.transform = "translate(-1vw,1vw) rotate(-10deg)";
});
hoverText1.addEventListener("mouseleave", () => {
  servicePage.style.backgroundColor = "white";
  aboutPage.style.backgroundColor = "white";
  projectsPage.style.backgroundColor = "white";
  hoverText1.style.color = "Black";
  firstWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  secondWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  thirdWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  fourthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  fifthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  sixthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  seventhWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  eightWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
});

}

servicePageAnim();
cursorAnim();