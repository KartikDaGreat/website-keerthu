document.documentElement.classList.add("js");

// Stagger the milestone labels with their notes.
document.querySelectorAll(".milestones li").forEach((li, i) => li.style.setProperty("--i", i));

// Certificate viewer
const viewer = document.querySelector(".viewer");
if (viewer && typeof viewer.showModal === "function") {
  const img = viewer.querySelector("img");
  const cap = viewer.querySelector(".viewer-cap");

  document.querySelectorAll(".cert").forEach((btn) => {
    btn.addEventListener("click", () => {
      img.src = btn.dataset.src;
      img.alt = btn.dataset.cap;
      cap.textContent = btn.dataset.cap;
      viewer.showModal();
    });
  });

  // Close when clicking the backdrop.
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) viewer.close();
  });
} else {
  // No <dialog> support: open the scan directly.
  document.querySelectorAll(".cert").forEach((btn) => {
    btn.addEventListener("click", () => window.open(btn.dataset.src, "_blank", "noopener"));
  });
}
