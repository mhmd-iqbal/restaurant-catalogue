/* eslint-disable indent */
/* eslint-disable new-cap */
import API_ENDPOINT from "../globals/api-endpoint";

class APISource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res);
        }

        return res.json();
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    return response;
  }
}

export default APISource;
