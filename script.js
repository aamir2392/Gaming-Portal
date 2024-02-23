const menu = document.querySelector(".bx");
const menuLinks = document.querySelector(".links");
let count = 0;
menu.addEventListener("click", () => {
  count++;
  menu.classList.toggle("bx-x");
  if (count % 2 === 0) {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "flex";
  }
});

const showLinks = () => {
  if (window.innerWidth >= 768) {
    menuLinks.style.display = "flex";
  } else {
    menuLinks.style.display = "none";
  }
};

window.addEventListener("resize", showLinks);

/* Collapse */
const collapseItems = document.querySelectorAll(".collapse_item");

collapseItems.forEach((item) => {
  const button = item.querySelector(".collapse_title");
  const content = item.querySelector(".collapse_content");

  button.addEventListener("click", () => {
    item.classList.toggle("active");

    // Hide all other open content (optional)
    collapseItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });
  });
});
