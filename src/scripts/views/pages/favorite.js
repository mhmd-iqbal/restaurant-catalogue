/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
import FavoriteRestaurant from "../../data/favorite-restaurant";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <section class="restaurant-list">
        <div class="restaurant-list__heading">
          <p tabindex="0">Your Favorited Restaurant</p>
        </div>
        <div class="restaurant-list__body"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantContainer = document.querySelector(
      ".restaurant-list__body"
    );

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML =
        "<p style='font-size: 1.2rem; font-weight: 200;' class='restaurant-item__not__found'>No restaurants have been added to your favorite restaurants list yet</p>";
    }
  },
};

export default Favorite;
