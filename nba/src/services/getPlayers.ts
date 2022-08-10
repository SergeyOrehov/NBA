import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const getPlayers = (): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    params: { page: "0", per_page: "25" },
    headers: {
      "X-RapidAPI-Key": "f3292add65msh6acdd02c4c34798p1d615fjsnf1c078374426",
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };
  return axios.request(options);
};

export default getPlayers;
