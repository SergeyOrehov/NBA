import React from "react";
import { IPlayerDetails } from "types/IPlayerDetails";

import "./styles.scss";

const PlayerDetails: React.FC<IPlayerDetails> = ({ item }) => {
  return (
    <div className="playerDetails">
      <p>
        <span>Name:</span> {item.first_name}
      </p>
      <p>
        <span>Lastname:</span> {item.last_name}
      </p>
    </div>
  );
};

export default PlayerDetails;
