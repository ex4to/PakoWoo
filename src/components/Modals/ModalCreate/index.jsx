import { ModalCard, FormItem, Input, Button } from "@vkontakte/vkui";
import { useState } from "react";
import "../index.css";

const ModalCreate = ({ formHandler }) => {
  const [roomName, setRoomName] = useState("");

  return (
    <div className="modal-container">
      <ModalCard nav="modal-create" className="modal-card">
        <FormItem top="Название комнаты">
          <Input
            type="text"
            placeholder="Название комнаты"
            onChange={(e) => setRoomName(e.target.value)}
          />
        </FormItem>
        <Button onClick={() => formHandler(roomName)}>Создать</Button>
      </ModalCard>
    </div>
  );
};

export { ModalCreate };
