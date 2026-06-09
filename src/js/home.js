import "../styles/home.css";
import view from "../assets/view.png";

export function loadHome() {
  const app = document.querySelector("#app");
  app.innerHTML = `<main class="main">
          <article class="home-article">
            <div class="home-article__info">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                et ultrices augue, vitae sollicitudin odio. Cras.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span class="highlight">Nunc sed.</span>
              </p>
            </div>
            <img
              class="home-article__image"
              src="../restaurant/src/assets/view.png"
              alt="Breathtaking view from the outer plaza."
            />
          </article>
        </main>`;
}
