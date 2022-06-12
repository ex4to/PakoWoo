import React, { useState } from "react";
import {
  Button,
  ModalCard,
  Header,
  FormItem,
  Select,
  FormLayout,
  Input,
} from "@vkontakte/vkui";

const RCreateNewQueue = ({ allSubjects, cancelHandler, creationHandler }) => {
  const [pickedSubject, setPickedSubject] = useState("");
  const [pickedDate, setPickedDate] = useState("");

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100vh",
        top: 0,
      }}
    >
      <ModalCard
        actions={
          <>
            <Button
              size="l"
              mode="secondary"
              appearance="positive"
              onClick={() => creationHandler(pickedSubject, pickedDate)}
            >
              Создать
            </Button>
            <Button
              size="l"
              mode="secondary"
              appearance="negative"
              onClick={() => cancelHandler(false)}
            >
              Отменить
            </Button>
          </>
        }
        header={<Header>Давааай, создаваай</Header>}
        style={{ position: "absolute", top: "-75%" }}
        id="modal"
      >
        <FormLayout>
          <FormItem top="Предмет">
            <Select
              placeholder="Выберите предмет"
              options={allSubjects}
              onChange={(e) => setPickedSubject(e.target.value)}
            />
          </FormItem>
          <FormItem top="Дата">
            <Input
              placeholder="Введите дату (День/Месяц)"
              onChange={(e) => setPickedDate(e.target.value)}
            />
          </FormItem>
        </FormLayout>
      </ModalCard>
    </div>
  );
};

export default RCreateNewQueue;
