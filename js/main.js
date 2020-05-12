var footer = document.querySelector("footer");
var settingButtoms = document.querySelectorAll(".time-icon");

console.log("logged\n");

document.querySelectorAll(".container").forEach((container) => {
  container.addEventListener("click", () => {
    footer.style.height = "30px";
  });
});

footer.addEventListener("click", () => {
  footer.style.height = "120px";
});

settingButtoms.forEach((btn) => {
  if (btn.id == "focus-icon") {
    console.log(btn);
    btn.classList.toggle("active");
  }
  btn.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      e.path[1].querySelector(".active").classList.toggle("active");
      e.target.classList.add("active");
    }
  });
});
