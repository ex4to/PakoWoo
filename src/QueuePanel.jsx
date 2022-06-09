import { useEffect, useState } from "react"
import { PanelHeader, PanelHeaderBack, Tabs, TabsItem, Group } from "@vkontakte/vkui"
import RSubscripted from "./queue/Subscripted";
import RAvailable from "./queue/Available";
import RQueueCard from "./queue/QueueCard";

const servData = [{
  id: 1,
  subject: 'Моделирование',
  date: '20/05',
  participants: ['Andrew', 'Loyal'],
},
{
  id: 2,
  subject: 'Английский',
  date: '21/05',
  participants: ['Andrew', 'Loyal', 'Party Maker'],
},
{
  id: 3,
  subject: 'Английский',
  date: '15/05',
  participants: ['Loyal', 'Павел Попов'],
}];

const QueuePanel = ({ handler, userInfo }) => {
  const [selectedTab, setSelectedTab] = useState('one');
  const [userName, setUserName] = useState('');
  const [allQueues, setAllQueus] = useState([]);
  const [availableQueues, setAvailableQueues] = useState([]);
  const [subsciptedQueues, setSubscibtedQueues] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubscripted, setIsSubscripted] = useState(false);

  const queueCardHandler = (bool) => {
    if (bool) {
      let arr = allQueues;
      let idx = allQueues.findIndex((e) => e.id === selectedItem.id);
      arr[idx].participants = arr[idx].participants.filter((e) => e !== userName);
      setAllQueus([...arr]);
    } else {
      let arr = allQueues;
      let idx = allQueues.findIndex((e) => e.id === selectedItem.id);
      arr[idx].participants.push(userName);
      setAllQueus([...arr]);
    }
    setSelectedItem(null);
  }

  useEffect(() => {
    setAllQueus(servData);
    setUserName(userInfo?.first_name + " " + userInfo?.last_name);
  }, []);

  useEffect(() => {
    setAvailableQueues(allQueues.filter((val) => val.participants.indexOf(userName) === -1));
    setSubscibtedQueues(allQueues.filter((val) => val.participants.indexOf(userName) !== -1));
  }, [userName, allQueues]);

  return (
    <>
      <PanelHeader left={<PanelHeaderBack onClick={() => handler('main')} />}>Очереди</PanelHeader>
      <Tabs hidden={selectedItem}>
        <TabsItem onClick={() => setSelectedTab('one')} selected={selectedTab === 'one'}>Ваши очереди</TabsItem>
        <TabsItem onClick={() => setSelectedTab('two')} selected={selectedTab === 'two'}>Доступные</TabsItem>
      </Tabs>
      {selectedItem ? '' : selectedTab === 'one' ?
        <Group>
          <RSubscripted subArray={subsciptedQueues} itemSetter={(e) => { setSelectedItem(e); setIsSubscripted(true) }} />
        </Group>
        :
        <Group>
          <RAvailable subArray={availableQueues} itemSetter={(e) => { setSelectedItem(e); setIsSubscripted(false) }} />
        </Group>
      }
      {selectedItem ?
        <RQueueCard cardInfo={selectedItem} isSubscripted={isSubscripted} btnHandler={(bool) => queueCardHandler(bool)} />
        : ''
      }
    </>
  )
}

export default QueuePanel;
