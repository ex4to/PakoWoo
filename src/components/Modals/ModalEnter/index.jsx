import { Button, FormItem, Input, ModalCard } from "@vkontakte/vkui";
import { useState } from "react";
import "../index.css";

const ModalEnter = ({ formHandler }) => {
  const [inputID, setInputID] = useState("");
  const [inputPass, setInputPass] = useState("");

  return (
    <div className="modal-container">
      <ModalCard nav="modal-enter" className="modal-card">
        <FormItem top="ID Комнаты">
          <Input
            type="text"
            placeholder="ID"
            onChange={(e) => setInputID(e.target.value)}
          />
        </FormItem>
        <FormItem top="Пароль">
          <Input
            type="password"
            placeholder="Пароль"
            onChange={(e) => setInputPass(e.target.value)}
          />
        </FormItem>
        <Button onClick={() => formHandler(inputID, inputPass)}>Войти</Button>
      </ModalCard>
    </div>
  );
};

export { ModalEnter };
