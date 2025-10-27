document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const close = document.getElementById("close");
  const navLinks = document.querySelector(".navbar ul");

  // Show menu when burger is clicked
  burger.addEventListener("click", () => {
    navLinks.classList.add("show");
    burger.style.display = "none";
    close.style.display = "block";
  });

  // Hide menu when close icon is clicked
  close.addEventListener("click", () => {
    navLinks.classList.remove("show");
    burger.style.display = "block";
    close.style.display = "none";
  });

  // Hide close icon by default
  close.style.display = "none";
});
