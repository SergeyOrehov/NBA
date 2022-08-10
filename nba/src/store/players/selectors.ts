import { IPlayers } from "types/IPlayers";
export const selectTeams = (state: {
  nbaReducer: IPlayers;
}): IPlayers["list"] => state.nbaReducer.list;
