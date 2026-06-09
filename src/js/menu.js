import "../styles/menu.css";

export function loadMenu() {
  const app = document.querySelector("#app");
  app.innerHTML = `<main class="main">
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
        </main>`;
}
