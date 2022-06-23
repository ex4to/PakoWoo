import React from "react";
import {
  Gradient,
  Avatar,
  PanelHeader,
  Group,
  Separator,
  Cell,
  CellButton,
  Title,
  Header,
} from "@vkontakte/vkui";

const MainPage = ({ userInfo }) => {
  return (
    <>
      <PanelHeader>PakoWoo</PanelHeader>
      <Group separator="hide">
        <Gradient className="gradient">
          <Avatar size={100} src={userInfo?.photo} />
          <Title level="2" weight="2">
            Привет, {userInfo?.firstName}!
          </Title>
        </Gradient>
      </Group>
      <Group header={<Header mode="secondary">Ваши Комнаты</Header>}>
        <Cell>One</Cell>
      </Group>
      <Group header={<Header mode="secondary">Меню</Header>}>
        <Separator />
        <CellButton>Присоединиться к комнате</CellButton>
        <CellButton>Создать комнату</CellButton>
      </Group>
    </>
  );
};

export { MainPage };
