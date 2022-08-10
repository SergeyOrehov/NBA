import { Dispatch } from "redux";
import getPlayers from "services/getPlayers";
import { IPlayers } from "types/IPlayers";

export const setTeamsAction = (list: IPlayers["list"]) => {
  return {
    type: "team/setTeam",
    payload: list,
  };
};

export const loadTeams = () => async (dispatch: Dispatch) => {
  try {
    const response = await getPlayers();
    dispatch(setTeamsAction(response.data.data));
  } catch (e) {
    console.log(e, "Произошла ошибка");
  }
};
