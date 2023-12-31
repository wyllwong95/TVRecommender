import axios from "axios";
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { POPULAR_URL, BASE_URL } from "../../config";

export class TVShowAPI {
  static async fetchPopulars(){
    const response = await axios.get(`${BASE_URL}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&${POPULAR_URL}`);
    return response.data.results;

    //return FAKE_POPULARS;
  }
  static async fetchRecommendations(tvShowId){
    const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&${POPULAR_URL}`);
    return response.data.results;

    //return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`)
    return response.data.results;
  }
}