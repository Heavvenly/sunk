document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section p");
  const windowHeight = window.innerHeight;

  sections.forEach((line) => {
    const position = line.getBoundingClientRect().top;
    if (position < windowHeight * 0.8) {
      line.classList.add("visible");
    }
  });
});
document.addEventListener("scroll", () => {
  const conclusion = document.getElementById("conclusion");
  const windowHeight = window.innerHeight;

  if (conclusion.getBoundingClientRect().top < windowHeight * .5) {
    conclusion.classList.add("visible");
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('.title');
    if (title) {
        title.scrollIntoView({ behavior: "smooth" });
    }

    const reloadButton = document.getElementById("reload-button");
    if (reloadButton) {
        reloadButton.addEventListener("click", () => {
          location.reload();

            
        });
    } else {
        console.error("Reload button not found!");
    }
});
