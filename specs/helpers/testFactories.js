/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from "../../src/scripts/utils/like-button-presenter";
import FavoriteRestaurant from "../../src/scripts/data/favorite-restaurant";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
