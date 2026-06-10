import "../styles/about.css";

export function loadAbout() {
  const app = document.querySelector("#app");
  app.innerHTML = `<main class="main">
          <article class="about-article">
            <div class="about-section">
              <h2 class="about-section__title">Our story</h2>
              <p class="about-section__text">
                Aliquam erat volutpat. Suspendisse potenti. Morbi pharetra magna
                eu elit interdum sollicitudin. In a quam justo. Ut porttitor,
                metus nec pulvinar finibus, libero quam sollicitudin justo, id
                sodales sem justo sit amet ipsum. Nulla tristique, turpis eu
                iaculis interdum, sem tellus sollicitudin elit, quis luctus
                massa velit at mauris. Nulla facilisi. Aenean dapibus ornare ex
                et rutrum. Sed egestas ut nibh nec porta.
              </p>
              <p class="about-section__text">
                In tincidunt ultrices felis, sit amet ultrices erat laoreet in.
                Nam ut nibh lobortis, viverra justo et, auctor est. Maecenas
                posuere auctor mauris. Nullam tempor enim quam, in semper ante
                blandit quis. Lorem ipsum dolor sit amet efficitur.
              </p>
            </div>
            <div class="about-section">
              <h2 class="about-section__title">Location & Hours</h2>
              <p class="about-section__text">
                Address: 4213 South Way, Anytown, CA 400286.
              </p>
              <p class="about-section__text">Sunday: Closed</p>
              <p class="about-section__text">
                Monday - Friday: 11:00 AM - 9:00 PM
              </p>
              <p class="about-section__text">Saturday: 12:00 PM - 10:00 PM</p>
            </div>
          </article>
        </main>`;
}
