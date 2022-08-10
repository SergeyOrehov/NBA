import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadTeams } from "store/players/actions";
import { selectTeams } from "store/players/selectors";

import PlayerDetails from "components/PlayerDetails";
import { IPlayer } from "types/IPlayer";

import "./styles.scss";

const Players = () => {
  const dispatch = useDispatch<any>();
  const teamsList = useSelector(selectTeams);
  useEffect(() => {
    dispatch(loadTeams());
  }, [dispatch]);
  return (
    <section className="mainPage">
      <div className="container">
        <div className="listPlayers">
          {teamsList.length > 0
            ? teamsList.map((item: IPlayer) => (
                <PlayerDetails key={item.id} item={item} />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Players;
