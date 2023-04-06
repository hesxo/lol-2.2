gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

gsap.to(".img-container", {
  scale: 20, ////meken zoom karanne
  scrollTrigger: {
    trigger: ".video-section",
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true,
  },
});
const tl = gsap.timeline();
tl.from(".left-side div", {
  y: 150,
  opacity: 0,
  stagger: {
    amount: 0.4,//
  },
  delay: 0.5,
}).from(".right-side", { duration: 2 }, 0.5);
ScrollTrigger.create({
  animation: tl,
  trigger: ".wrapper",
  scrub: 1,
  pin: true,
});

gsap.to(".txt-bottom", {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2,
  },
});

const timeline = gsap.timeline();
timeline.from(".span1", {
  x: -100,
  duration: 0.4,
});
timeline.from(".span2", {
  x: -200,
  duration: 0.4,
});
timeline.from(".span3", {
  x: -300,
  duration: 0.4,
});
gsap.to(".left1", {
  autoAlpha: 0,
  x: -650,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to(".left2", {
  autoAlpha: 0,
  x: -600,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to(".left3", {
  autoAlpha: 0,
  x: -500,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

const scrollButton = document.getElementById("scroll-button");
const content = document.querySelector(".content");

scrollButton.addEventListener("click", () => {
  var mainView = document.getElementById("main_container");
  var About = document.getElementById("main_container2");

  mainView.classList.toggle("d");
  About.classList.toggle("d");

  const targetPosition = 330;
  const duration = 1700; // 1 second duration for the animation


  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function step() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const scrollProgress = Math.min(elapsed / duration, 1);
    const scrollPosition = startPosition + distance * scrollProgress;
    window.scrollTo(0, scrollPosition);
    if (scrollProgress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
});