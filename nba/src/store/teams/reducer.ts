import { Action, AnyAction } from "redux";
const initialState = {
  list: [],
};

const nbaReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "team/setTeam":
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};

export default nbaReducer;
