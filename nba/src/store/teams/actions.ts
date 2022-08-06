import { Dispatch } from "redux";

import getTeams from "services/getTeams";
import { ITeam } from "types/ITeam";

export const setTeamsAction = (list: ITeam["list"]) => {
  return {
    type: "team/setTeam",
    payload: list,
  };
};

export const loadTeams = () => async (dispatch: Dispatch) => {
  try {
    const response = await getTeams();
    dispatch(setTeamsAction(response.data.data));
  } catch (e) {
    console.log(e, "Произошла ошибка");
  }
};
