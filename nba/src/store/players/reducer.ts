import { AnyAction } from "redux";
import { IPlayers } from "types/IPlayers";
const initialState = {
  list: [],
};

const nbaReducer = (state: IPlayers = initialState, action: AnyAction) => {
  switch (action.type) {
    case "team/setTeam":
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};

export default nbaReducer;
