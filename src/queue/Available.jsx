import React from "react";
import { Cell } from "@vkontakte/vkui";

const RAvailable = ({ subArray, itemSetter }) => {
  return subArray.map((val) => (
    <Cell key={subArray.id} onClick={() => itemSetter(val)}>
      {val.subject} - {val.date}
    </Cell>
  ));
};

export default RAvailable;
