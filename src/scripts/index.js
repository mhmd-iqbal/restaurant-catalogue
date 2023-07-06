import "regenerator-runtime";
import "../styles/variable.css";
import "../styles/animation.css";
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/App";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

const allSkeleton = document.querySelectorAll(".skeleton");

window.addEventListener("hashchange", () => {
  app.renderPage();
  allSkeleton.forEach((item) => {
    item.classList.remove("skeleton");
  });
});

window.addEventListener("load", () => {
  app.renderPage();
  allSkeleton.forEach((item) => {
    item.classList.remove("skeleton");
  });
  swRegister();
});
