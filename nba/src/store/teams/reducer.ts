import { AnyAction } from "redux";
import { ITeam } from "types/ITeam";
const initialState = {
  list: [],
};

const nbaReducer = (state: ITeam = initialState, action: AnyAction) => {
  switch (action.type) {
    case "team/setTeam":
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};

export default nbaReducer;
