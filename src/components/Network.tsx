import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "reducers";

const Network: React.FC = () => {
  const { online } = useSelector((state: RootState) => state.network);

  return <h5>Network is {online ? "Online" : "Offline"}</h5>;
};

export default Network;
