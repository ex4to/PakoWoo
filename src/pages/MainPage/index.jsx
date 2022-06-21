import React from "react";
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

const MainPage = ({ userInfo }) => {
  return (
    <>
      <PanelHeader>PakoWoo</PanelHeader>
      <Group separator="hide">
        <Gradient className="gradient">
          <Avatar size={100} src={userInfo?.photo} />
          <Title level="2" weight="2">
            {userInfo?.getFullName()}
          </Title>
        </Gradient>
      </Group>
      <Group header={<Header mode="secondary">Меню</Header>}>
        <Separator />

      </Group>
    </>
  );
};

export { MainPage };
