import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadTeams } from "store/players/actions";
import { selectTeams } from "store/players/selectors";

import TeamDetails from "components/PlayerDetail";
import { IPlayer } from "types/IPlayer";

const Player = () => {
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

export default Player;
