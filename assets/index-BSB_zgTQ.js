(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.querySelector(`#app`);e.innerHTML=`<main class="main">
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
        </main>`}function t(){let e=document.querySelector(`#app`);e.innerHTML=`<main class="main">
          <article class="menu-article">
            <div class="menu-section">
              <h2>Appetizers</h2>
              <ul>
                <li>Onion Rings</li>
                <li>Garlic Bread</li>
                <li>Caesar Salad</li>
              </ul>
            </div>
            <div class="menu-section">
              <h2>Entrees</h2>
              <ul>
                <li>Steak</li>
                <li>Chicken</li>
                <li>Seafood</li>
              </ul>
            </div>
            <div class="menu-section">
              <h2>Desserts</h2>
              <ul>
                <li>Ice Cream</li>
                <li>Cake</li>
                <li>Pie</li>
              </ul>
            </div>
            <div class="menu-section">
              <h2>Drinks</h2>
              <ul>
                <li>Water</li>
                <li>Coffee</li>
                <li>Tea</li>
              </ul>
            </div>
            <div class="menu-section">
              <h2>Salads</h2>
              <ul>
                <li>Greek Salad</li>
                <li>Caprese Salad</li>
                <li>Wedge Salad</li>
              </ul>
            </div>
            <div class="menu-section">
              <h2>Sides</h2>
              <ul>
                <li>French Fries</li>
                <li>Roasted Vegetables</li>
                <li>Corn on the Cob</li>
              </ul>
            </div>
          </article>
        </main>`}function n(){let e=document.querySelector(`#app`);e.innerHTML=`<main class="main">
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
        </main>`}document.addEventListener(`DOMContentLoaded`,()=>e()),document.querySelector(`.home`).addEventListener(`click`,()=>e()),document.querySelector(`.menu`).addEventListener(`click`,()=>t()),document.querySelector(`.about`).addEventListener(`click`,()=>n());