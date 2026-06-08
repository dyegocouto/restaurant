import view from "../assets/view.png";

export function loadHome() {
  const app = document.querySelector("#app");
  app.innerHTML = `<main class="main">
          <article class="article">
            <div class="article-info">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                et ultrices augue, vitae sollicitudin odio. Cras.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span class="highlight">Nunc sed.</span>
              </p>
            </div>
            <img class="article-image" src="${view}" alt="Breathtaking view from the outer plaza." />
          </article>
        </main>`;
}
