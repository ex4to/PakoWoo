import React from "react";
import { Cell } from "@vkontakte/vkui";

const ListOfQ = ({ subArray, itemSetter }) => {
  return subArray.map((val) => (
    <Cell key={val.id} onClick={() => itemSetter(val)}>
      {val.subject} - {val.date}
    </Cell>
  ));
};

export { ListOfQ };
