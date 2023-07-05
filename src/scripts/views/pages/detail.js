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
      <div id="restaurant" class="restaurant"></div>
      <div class="restaurant__menus">
        <h1>Foods</h1>
        <div id="foods-list" style="margin-bottom: 10px;"></div>
        <h1>Drinks</h1>
        <div id="drinks-list"></div>
      </div>
      <p style="font-size: 18pt; margin-bottom: 10px; font-weight: bold; text-align: center;">Customer Reviews</p>
      <div id="review-restaurant" style="display:flex; flex-flow: row wrap; gap: 1rem; width: 100%; justify-content: center;">
      </div>
     
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await APISource.detailRestaurant(url.id);

    const restaurant = response.restaurant;

    const restaurantContainer = document.querySelector("#restaurant");
    const reviewRestaurantContainer =
      document.getElementById("review-restaurant");

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

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
