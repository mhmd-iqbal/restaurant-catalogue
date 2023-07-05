/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
import APISource from "../../data/api-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const List = {
  async render() {
    return `
      <section class="restaurant-list" id="restaurant-list">
        <div class="restaurant-list__heading">
          <p>Explore Restaurants</p>
        </div>
        <div class="restaurant-list__body"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await APISource.listRestaurants();
    const restaurantsContainer = document.querySelector(
      ".restaurant-list__body"
    );
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
