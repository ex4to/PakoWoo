import React from "react";
import "./index.css";
import {
  Gradient,
  Avatar,
  PanelHeader,
  Group,
  Separator,
  CellButton,
  Title,
  Header,
} from "@vkontakte/vkui";

const RoomPage = ({ userInfo, roomInfo, switchPagesHandler }) => {
  return (
    <>
      <PanelHeader>{roomInfo?.roomName}</PanelHeader>
      <Group separator="hide">
        <Gradient className="gradient">
          <Avatar size={100} src={userInfo?.photo} />
          <Title level="2" weight="2">
            {userInfo?.firstName + " " + userInfo?.lastName}
          </Title>
        </Gradient>
      </Group>
      <Group header={<Header mode="secondary">Меню</Header>}>
        <Separator />
        <CellButton centered onClick={() => switchPagesHandler("second")}>
          Очереди
        </CellButton>
      </Group>
    </>
  );
};

export { RoomPage };
