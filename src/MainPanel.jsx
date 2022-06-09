import { Panel, Gradient, Avatar, PanelHeader, Group, Separator, CellButton, Title, Header } from '@vkontakte/vkui';

const MainPanel = ({ user, handler }) => {
  return (
    <>
      <PanelHeader>Wolf Await</PanelHeader>
      <Group>
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
          <Avatar size={100} src={user?.photo_100} />
          <Title
            style={{ marginBottom: 8, marginTop: 20 }}
            level="2"
            weight="2"
          >
            {user?.first_name} {user?.last_name}
          </Title>
        </Gradient>
      </Group>
      <Group header={<Header mode="secondary">Меню</Header>}>
        <Separator />
        <CellButton centered onClick={() => handler('second')}>Очереди</CellButton>
      </Group>
    </>
  )
}

export default MainPanel;