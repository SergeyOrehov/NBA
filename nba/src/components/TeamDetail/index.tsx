import React from "react";
import { IPlayerDetails } from "types/IPlayerDetails";

const TeamDetails: React.FC<IPlayerDetails> = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.first_name}
      {item.last_name}
    </div>
  );
};

export default TeamDetails;
