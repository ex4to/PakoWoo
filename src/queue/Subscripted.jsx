import React from "react";
import { Cell } from "@vkontakte/vkui";

const RSubscripted = ({ subArray, itemSetter }) => {
  return subArray.map((val) => (
    <Cell onClick={() => itemSetter(val)} key={val.id}>
      {val.subject} - {val.date}
    </Cell>
  ));
};

export default RSubscripted;
