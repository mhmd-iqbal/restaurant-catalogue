/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable new-cap */
const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked movies", ({ I }) => {
  I.see(
    "No restaurants have been added to your favorite restaurants list yet",
    ".restaurant-item__not__found"
  );
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see(
    "No restaurants have been added to your favorite restaurants list yet",
    ".restaurant-item__not__found"
  );

  I.amOnPage("/");

  I.seeElement(".card");

  const firstRestaurant = locate(".card-title").first();
  const firstRestaurantBtn = locate(".card-body a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantBtn);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
  const favoriteRestaurantTitle = await I.grabTextFrom(".card-title");

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.see(
    "No restaurants have been added to your favorite restaurants list yet",
    ".restaurant-item__not__found"
  );

  I.amOnPage("/");

  I.seeElement(".restaurant-item");

  const firstRestaurant = locate(".card-title").first();
  const firstRestaurantBtn = locate(".card-body a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantBtn);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");
  const favoriteRestaurantTitle = await I.grabTextFrom(".card-title");

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  const firstFavoriteRestaurantBtn = locate(".card-body a").first();

  I.click(firstFavoriteRestaurantBtn);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  I.see(
    "No restaurants have been added to your favorite restaurants list yet",
    ".restaurant-item__not__found"
  );
});
