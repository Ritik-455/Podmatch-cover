const prevButton = document.querySelector(".prev_svg");
const nextButton = document.querySelector(".next_svg");
const navParent = document.querySelector(".nav_parent");

// Set scroll amount (in pixels)
const scrollAmount = 150;

// Move to the previous section
prevButton.addEventListener("click", () => {
  navParent.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

// Move to the next section
nextButton.addEventListener("click", () => {
  navParent.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});
function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}
