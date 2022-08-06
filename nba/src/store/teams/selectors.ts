import { ITeam } from "types/ITeam";
export const selectTeams = (state: { nbaReducer: ITeam }): ITeam["list"] =>
  state.nbaReducer.list;
