import { Cell } from "@vkontakte/vkui";

const RAvailable = ({ subArray, itemSetter }) => {
    return subArray.map((val, index) => <Cell key={index} onClick={() => itemSetter(val)}>{val.subject} - {val.date}</Cell>);
}

export default RAvailable;
