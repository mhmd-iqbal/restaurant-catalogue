/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import CONFIG from "../../globals/config";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const createRestaurantDetailTemplate = (restaurant) => {
  const output = `
  <h1 class="restaurant__name">${restaurant.name}</h1>
  <div  class="restaurant">
    <picture>
      <source class="restaurant__picture lazyload" media="(max-width: 480px)" data-srcset="${
        restaurant.pictureId
          ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
          : "https://picsum.photos/id/1/800/450?grayscale"
      }">
      <img class="restaurant__picture lazyload" data-src="${
        restaurant.pictureId
          ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
          : "https://picsum.photos/id/1/800/450?grayscale"
      }" alt="${restaurant.name}">
    </picture> 
    <div class="restaurant__info">
      <h3 style="background-color: #171717; color: white; padding: 1rem; margin-bottom: 1rem;">About Restaurant</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant__description">
      <h3 style="background-color: #171717; color: white; padding: 1rem; margin-bottom: 1rem;">Description</h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
  
  <div class="restaurant__menus">
    <h3 style="background-color: #171717; color: white; padding: 1rem; margin-bottom: 1rem;">Foods</h3>
    <div id="foods-list" style="margin-bottom: 10px;"></div>
    <h3 style="background-color: #171717; color: white; padding: 1rem; margin-bottom: 1rem;">Drinks</h3>
    <div id="drinks-list"></div>
  </div>

  <h3 style="background-color: #171717; color: white; padding: 1rem; margin-bottom: 1rem; font-size: 14pt;">Customer Reviews</h3>
  <div id="review-restaurant" style="display:flex; flex-flow: row wrap; gap: 1rem; width: 100%;">
  </div>
`;

  return output;
};

const createReviewRestaurantTemplate = (review) =>
  `
    <div id="customer-" style="min-width: 350px; max-width: 350px; width: 100%; min-height: 150px; max-height: fit-content; border-radius: 10px; padding: 1rem; background: #fff; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
    <p class="review__name">${review.name}</p>
    <p class="review__date">${review.date}</p>
    <p class="review__content">${review.review}</p>
    </div>
      `;

const createRestaurantItemTemplate = (restaurant) =>
  `
        <div class="card restaurant-item" tabindex="0">
          <div class="card-box-overlay">${restaurant.city}</div>
            <div class="card-top-image">
                  <img class="restaurant-item-image lazyload" alt="${
                    restaurant.name
                  }"
                  data-src="${
                    restaurant.pictureId
                      ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
                      : "https://picsum.photos/id/1/800/450?grayscale"
                  }">
            </div>
          <div class="card-body">
            <h1 class="card-title">${restaurant.name}</h1>
            <p class="card-text" style="margin-bottom: 20px;">⭐️ ${
              restaurant.rating
            } / 5</p>
            <p class="card-text">${restaurant.description}</p>
            <a href="/#/detail/${
              restaurant.id
            }" class="btn btn-primary btn-detail" style="margin-top: 20px;">Check More</a>
          </div>
        </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createReviewRestaurantTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
