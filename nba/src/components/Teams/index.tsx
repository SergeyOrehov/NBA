import React, { Dispatch, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadTeams } from "store/teams/actions";
import { selectTeams } from "store/teams/selectors";

import TeamDetails from "components/TeamDetail";
import { IPlayer } from "types/IPlayer";
import { AnyAction } from "redux";

const Teams = () => {
  const dispatch = useDispatch<any>();
  const teamsList = useSelector(selectTeams);
  useEffect(() => {
    dispatch(loadTeams());
  }, [dispatch]);
  return (
    <section className="mainPage">
      <div className="container">
        <div className="listMoviesMainPage">
          {teamsList.length > 0
            ? teamsList.map((item: IPlayer) => (
                <TeamDetails key={item.id} item={item} />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Teams;
