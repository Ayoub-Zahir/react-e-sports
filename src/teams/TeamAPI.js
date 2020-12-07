import { setUpURL } from '../utils/Helper';

const endPoint = '/teams';
const params = {
  token: process.env.REACT_APP_NOT_API_KEY,
  page: 1,
  per_page: 5,
};

class TeamAPI {
  static async getTeams(page) {
    // Set the page
    params.page = page;

    // Sent the request
    const response = await fetch(setUpURL(`/pubg/${endPoint}`, params));
    const resData = await response.json();

    // Check for errors
    if (!response.ok) {
      const error = {
        message: resData.error,
        status: response.status,
      };

      throw error;
    }

    const headers = {
      total: response.headers.get('x-total'),
    };

    console.log(resData);

    return { data: resData, headers };
  }

  static async getSingleTeam(slug) {
    // Sent the request
    const response = await fetch(setUpURL(`${endPoint}/${slug}`, params));
    const resData = await response.json();

    // Check for errors
    if (!response.ok) {
      const error = {
        message: resData.error,
        status: response.status,
      };

      throw error;
    }

    console.log(resData);

    return resData;
  }
}
export default TeamAPI;
