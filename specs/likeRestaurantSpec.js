/* eslint-disable no-undef */
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant";
import * as TestFactories from "./helpers/testFactories";

// positif
// Skenario Menyukai Restaurant
describe("Liking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });
  // positif
  // Widget untuk menyukai Restaurant ditampilkan
  it("should show the like button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  // positif
  // Widget menyukai Restaurant ditekan oleh pengguna dan
  // Restaurant ditambahkan ke daftar Restaurant yang disukai
  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({
      id: 1,
    });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // negatif
  // Ternyata restaurant sudah disukai
  // tidak perlu menyimpan kembali
  it("should not add a restaurant again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    // Tambahkan Restaurant dengan ID 1 ke daftar Restaurant yang disukai
    await FavoriteRestaurantIdb.putRestaurant({
      id: 1,
    });

    // Simulasikan pengguna menekan tombol suka Restaurant
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    // tidak ada restoran yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      {
        id: 1,
      },
    ]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // negatif
  // Data Restaurant tidak memiliki ID
  // Sistem tidak memproses penyimpanan
  // Sistem tidak gagal
  it("should not add a restaurant when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
