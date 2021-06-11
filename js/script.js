
// ELEMENTS

const navEl = document.querySelector(".nav");
const navigationEl = document.querySelector(".navigation");

// FUNCTIONS

const goToSection = function (sectionId, mobile = 0) {
  if (mobile) document.getElementById("navi-toggle").checked = false;
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

// EVENT LISTENER

navEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__links")) {
    e.preventDefault();
    return goToSection(e.target.dataset.section);
  }

  if (e.target.classList.contains("nav__mobile-link")) {
    e.preventDefault();
    return goToSection(e.target.dataset.section, 1);
  }
});

navigationEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains("navigation__link")) {
    return goToSection(e.target.dataset.section);
  }
})