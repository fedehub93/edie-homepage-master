const arrBtnNav = document.querySelectorAll(".nav__links");
const arrBtnMobileNav = document.querySelectorAll(".nav__mobile-link");

// FUNCTIONS

const goToSection = function (sectionId, mobile = 0) {
  if (mobile) document.getElementById("navi-toggle").checked = false;
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

// EVENT LISTENERS

arrBtnNav.forEach((btn) =>
  btn.addEventListener("click", (e) => goToSection(e.target.dataset.section))
);
arrBtnMobileNav.forEach((btn) =>
  btn.addEventListener("click", (e) => goToSection(e.target.dataset.section, 1))
);
