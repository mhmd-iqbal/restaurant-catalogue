/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
import UrlParser from "../../routes/url-parser";
import APISource from "../../data/api-source";
import {
  createRestaurantDetailTemplate,
  createReviewRestaurantTemplate,
} from "../templates/template-creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import FavoriteRestaurant from "../../data/favorite-restaurant";

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
     
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await APISource.detailRestaurant(url.id);

    if (!response) {
      return;
    }

    const restaurant = response.restaurant;

    const restaurantContainer = document.querySelector("#restaurant");

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const foodsListContainer = document.getElementById("foods-list");
    const drinksListContainer = document.getElementById("drinks-list");

    restaurant.menus.foods.forEach((food) => {
      const foodItem = document.createElement("div");
      foodItem.textContent = food.name;
      foodItem.classList.add("chips");
      foodsListContainer.appendChild(foodItem);
    });

    restaurant.menus.drinks.forEach((drink) => {
      const drinkItem = document.createElement("div");
      drinkItem.textContent = drink.name;
      drinkItem.classList.add("chips");
      drinksListContainer.appendChild(drinkItem);
    });

    const reviewRestaurantContainer =
      document.querySelector("#review-restaurant");

    restaurant.customerReviews.forEach((review) => {
      reviewRestaurantContainer.innerHTML +=
        createReviewRestaurantTemplate(review);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurant: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
