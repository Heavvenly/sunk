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
document.addEventListener("DOMContentLoaded", () => {
    const reloadButton = document.getElementById("reload-button");
    if (reloadButton) {
        reloadButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
            setTimeout(() => {
                console.log("Page is about to reload"); // Log before reload
                location.reload();
            }, 800);
        });
    } else {
        console.error("Reload button not found!");
    }
});
