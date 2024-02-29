const cursorRounded = document.querySelector(".rounded");
const cursorPointed = document.querySelector(".pointed");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);

function addFlower(event) {
  const numFlowers = 6;
  const spread = 200;

  for (let i = 0; i < numFlowers; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left =
      event.clientX - 25 + spread * (Math.random() - 0.5) + "px"; // Adjust position to center flower on click
    flower.style.top =
      event.clientY - 25 + spread * (Math.random() - 0.5) + "px"; // Adjust position to center flower on click
    document.body.appendChild(flower);

    setTimeout(() => {
      flower.style.opacity = 0;
    }, Math.random() * 1000); // Fade out randomly between 0 and 1000 milliseconds
  }
}

document.body.addEventListener("click", addFlower);