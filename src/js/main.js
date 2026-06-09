import "modern-normalize/modern-normalize.css";
import "../styles/style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => loadHome());

const home = document.querySelector(".home");
home.addEventListener("click", () => loadHome());

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => loadMenu());
