gsap.to(".intro-text", { text: "SKY&SEA STUDIO", ease: "power2.inOut", opacity: 1, duration: 2.5, repeat: 1, yoyo: true }, "+=2");


gsap.set(".effect", { autoAlpha: 1 })
let tl = gsap.timeline()
  .from("h1", { scale: 0.01, duration: 4, ease: "power4.inOut" }, "+=4.75")
  .to(".blendImage, .bg", { scale: 1, duration: 3.5 }, "-=3.75")
  .to(".dark", { opacity: 0, duration: 2 }, ">-=100%")