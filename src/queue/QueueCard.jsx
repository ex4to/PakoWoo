import React, { useState } from "react";
import {
  Group,
  Header,
  Title,
  Text,
  Separator,
  Button,
  ModalCard,
  Cell,
  PanelHeaderBack,
} from "@vkontakte/vkui";

const RQueueCard = ({
  cardInfo,
  isSubscripted,
  btnHandler,
  headerBackHandler,
}) => {
  const [modalOpen, setModalOpen] = useState(null);

  return (
    <Group style={{ marginLeft: 8, marginRight: 8 }}>
      <Group separator="hide">
        <Title
          level="1"
          style={{ display: "flex", marginBottom: 16, alignItems: "center" }}
        >
          <PanelHeaderBack onClick={() => headerBackHandler()} />{" "}
          {cardInfo.subject} ({cardInfo.date})
        </Title>
        {isSubscripted ? (
          <Button
            stretched
            appearance="negative"
            onClick={() => btnHandler(isSubscripted)}
          >
            Выйти
          </Button>
        ) : (
          <Button
            stretched
            appearance="positive"
            onClick={() => btnHandler(isSubscripted)}
          >
            Записаться
          </Button>
        )}
      </Group>
      <Group header={<Header>Участники</Header>}>
        <Separator />
        {cardInfo.participants.map((name) => {
          return (
            <Cell
              key={name}
              onClick={() => setModalOpen(name)}
              style={{ marginBottom: 16, textAlign: "center" }}
            >
              {name}
            </Cell>
          );
        })}
      </Group>
      {modalOpen ? (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
          }}
        >
          <ModalCard
            actions={
              <Button
                size="l"
                mode="secondary"
                onClick={() => setModalOpen(null)}
              >
                Закрыть
              </Button>
            }
            header={<Header>Действия</Header>}
            style={{ position: "absolute", top: "-50%" }}
            id="modal"
          >
            <Text style={{ textAlign: "center" }}>Участник: {modalOpen}</Text>
          </ModalCard>
        </div>
      ) : (
        ""
      )}
    </Group>
  );
};

export default RQueueCard;
