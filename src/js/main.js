import "modern-normalize/modern-normalize.css";
import "../styles/style.css";
import { loadHome } from "./home.js";

document.addEventListener("DOMContentLoaded", () => loadHome());

const home = document.querySelector(".home");
home.addEventListener("click", () => loadHome());
