import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Gradient,
  Avatar,
  PanelHeader,
  Group,
  Separator,
  Cell,
  CellButton,
  Title,
  Text,
  Header,
} from "@vkontakte/vkui";
import roomService from "../../services/roomService";
import { ModalEnter } from "../../components/Modals/ModalEnter";
import { ModalCreate } from "../../components/Modals/ModalCreate";

const MainPage = ({ userInfo, roomInfoHandler }) => {
  const [rooms, setRooms] = useState([]);
  const [modalCards, setModalCards] = useState(null);

  const formEnterHandler = (id, pass, userID) => {
    roomService.enterPakoRoom(id, pass, userID);
    setModalCards(null);
  };

  const formCreateHandler = () => {};

  useEffect(async () => {
    if (userInfo?.pakoId || modalCards === null) {
      const fetchedRooms = await roomService.getPakoRooms(userInfo?.pakoId);
      setRooms(fetchedRooms);
    }
  }, [userInfo?.pakoId, modalCards]);

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
      <Group
        separator="hide"
        header={<Header mode="secondary">Ваши Комнаты</Header>}
      >
        <Separator />
        {rooms.length ? (
          rooms.map((e) => (
            <Cell key={e.id} onClick={() => roomInfoHandler(e)}>
              {e.roomName}
            </Cell>
          ))
        ) : (
          <Text className="centered-alert">
            Похоже, вас нет ни в одной комнате
          </Text>
        )}
      </Group>
      <Group header={<Header mode="secondary">Меню</Header>}>
        <Separator />
        <CellButton
          onClick={() =>
            setModalCards(
              <ModalEnter
                formHandler={(id, pass) =>
                  formEnterHandler(id, pass, userInfo?.pakoId)
                }
              />
            )
          }
        >
          Присоединиться к комнате
        </CellButton>
        <CellButton
          onClick={() =>
            setModalCards(
              <ModalCreate
                formHandler={(roomName) => formCreateHandler(roomName)}
              />
            )
          }
        >
          Создать комнату
        </CellButton>
      </Group>
      {modalCards}
    </>
  );
};

export { MainPage };
