import { ModalCard, FormItem, Input, Button } from "@vkontakte/vkui";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

const ModalCreate = ({ formHandler }) => {
  const [roomName, setRoomName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let state = roomName.length < 4
    setIsDisabled(state);
  }, [roomName]);

  return (
    <div className="modal-container">
      <ModalCard
        actions={
          <>
            <Button
              disabled={isDisabled}
              mode="primary"
              appearance="positive"
              onClick={() => formHandler(roomName, true)}
            >
              Создать
            </Button>
            <Button
              mode="primary"
              appearance="negative"
              onClick={() => formHandler(roomName, false)}
            >
              Отменить
            </Button>
          </>
        }
        nav="modal-create"
        className="modal-card"
      >
        <FormItem top="Название комнаты">
          <Input
            type="text"
            required
            placeholder="Название комнаты"
            onChange={(e) => setRoomName(e.target.value)}
          />
        </FormItem>
      </ModalCard>
    </div>
  );
};

export { ModalCreate };
