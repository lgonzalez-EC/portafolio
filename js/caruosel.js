const track = document.getElementById("track");

// Clonamos los logos para loop infinito
const logos = [...track.children];
logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
});

// Calculamos ancho total
const trackWidth = track.scrollWidth;

// Animación infinita
const animation = gsap.to(track, {
    x: -trackWidth / 2,
    duration: 40,
    ease: "linear",
    repeat: -1,
});

track.addEventListener("mouseenter", () => animation.pause());
track.addEventListener("mouseleave", () => animation.resume());
