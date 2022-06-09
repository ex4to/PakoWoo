import { Cell } from "@vkontakte/vkui";


const RSubscripted = ({ subArray, itemSetter }) => {
  return subArray.map((val, index) => <Cell onClick={() => itemSetter(val)} key={index}>{val.subject} - {val.date}</Cell>);
}

export default RSubscripted;
