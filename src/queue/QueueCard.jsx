import { Group, Header, Title, Text, Separator, Button } from "@vkontakte/vkui";

const RQueueCard = ({ cardInfo, isSubscripted, btnHandler }) => {
  return (
    <Group style={{ marginLeft: 8, marginRight: 8 }}>
      <Group separator="hide">
        <Title level="1" style={{ marginBottom: 16, textAlign: "center" }}>{cardInfo.subject} ({cardInfo.date})</Title>
        {
          isSubscripted ?
            <Button stretched={true} appearance="negative" onClick={() => btnHandler(isSubscripted)}>Выйти</Button>
            :
            <Button stretched={true} appearance="positive" onClick={() => btnHandler(isSubscripted)}>Записаться</Button>

        }
      </Group>
      <Group header={<Header>Участники</Header>}>
        <Separator />
        {cardInfo.participants.map((name) => {
          return (
            <Text key={name} style={{ marginBottom: 16, textAlign: "center" }}>{name}</Text>
          )
        })}
      </Group>
    </Group>

  )
}

export default RQueueCard;
