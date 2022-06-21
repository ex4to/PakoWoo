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

const MainPage = ({ userInfo, switchPagesHandler }) => {
  return (
    <>
      <PanelHeader>Wolf Await</PanelHeader>
      <Group separator="hide">
        <Gradient
          style={{
            margin: "-7px -7px 0 -7px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 32,
          }}
        >
          <Avatar size={100} src={userInfo?.photo_100} />
          <Title
            style={{ marginBottom: 8, marginTop: 20 }}
            level="2"
            weight="2"
          >
            {userInfo?.first_name} {userInfo?.last_name}
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

export { MainPage };
