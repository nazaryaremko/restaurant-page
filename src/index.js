import createHeader from "./website";
import createHomepage from "./home";
import createMenu from "./menu";

createHeader();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if (target === "Home") createHomepage();
    if (target === "Menu") createMenu();
  });