import { Back, gsap } from "gsap";

export function heroAnimation({ heroImg, heroContent }) {
  // HERO SECTION
  gsap.from(heroImg.current, {
    duration: 3,
    x: 75,
    opacity: 0,
    ease: Back.easeInOut,
  });

  gsap.from(heroContent.current, {
    duration: 3,
    delay: 1.5,
    y: 50,
    opacity: 0,
    ease: Back.easeInOut,
  });
}

export function phoneMobileAnimation(phoneMobileContainer, phoneMobileModel) {
  gsap.from(phoneMobileModel.current, {
    x: 50,
  });
  gsap.to(phoneMobileModel.current, {
    opacity: 1,
    x: 0,
    duration: 5,
    scrollTrigger: {
      trigger: phoneMobileContainer.current,
      start: "5% center",
      end: "55% 40%",
      toggleActions: "reset pause reverse none",
      scrub: true,
    },
  });
}

export function phoneDesktopAnimation(
  phoneContainer,
  phoneContent,
  phoneModel
) {
  gsap.to(phoneContent.current, {
    x: 125,
    opacity: 1,
    scrollTrigger: {
      trigger: phoneContainer.current,
      start: "45% center",
      end: "100% 40%",
      toggleActions: "play pause reverse none",
      scrub: 2,
    },
  });
  gsap.to(phoneModel.current, {
    x: -125,
    opacity: 1,
    scrollTrigger: {
      trigger: phoneContainer.current,
      start: "45% center",
      end: "100% 40%",
      toggleActions: "reset pause reverse none",
      scrub: 2,
    },
  });
}
