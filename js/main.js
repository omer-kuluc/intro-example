// Sayfa yüklendikten sonra başlangıçta görünürlük ve opaklık ayarlarını yapıyoruz
gsap.set(".effect", { opacity: 0, visibility: 'hidden' });

// Hızlıca intro metni animasyonu yapıyoruz
gsap.to(".intro-text", {
  text: "SKY&SEA STUDIO",
  ease: "power2.inOut",
  opacity: 1,
  duration: 2.5,
  repeat: 1,
  yoyo: true
});

// Zaman çizelgesi oluşturuyoruz
let tl = gsap.timeline()
  .from("h1", {
    scale: 0.01,
    duration: 4,
    ease: "power4.inOut"
  }, "+=2.75")
  .to(".blendImage, .bg", {
    scale: 1,
    duration: 3.5
  }, "-=3.75")
  .to(".dark", {
    opacity: 0,
    duration: 2
  }, ">-=100%");

// .effect öğesinin görünürlük ve opaklık animasyonu
gsap.to(".effect", {
  opacity: 1,
  visibility: 'visible',
  duration: 1
});
