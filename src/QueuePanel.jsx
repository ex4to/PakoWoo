import React, { useEffect, useState } from "react";
import {
  PanelHeader,
  PanelHeaderBack,
  Tabs,
  TabsItem,
  Group,
  Button,
} from "@vkontakte/vkui";
import RSubscripted from "./queue/Subscripted";
import RAvailable from "./queue/Available";
import RQueueCard from "./queue/QueueCard";
import RCreateNewQueue from "./queue/createNewQueue";
import "./assets/queue.css";

const QueuePanel = ({ handler, userInfo }) => {
  const [selectedTab, setSelectedTab] = useState("one");
  const [userName, setUserName] = useState("");
  const [allSubjects, setAllSubjects] = useState([]);
  const [allQueues, setAllQueus] = useState([]);
  const [availableQueues, setAvailableQueues] = useState([]);
  const [subsciptedQueues, setSubscibtedQueues] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubscripted, setIsSubscripted] = useState(false);
  const [isCreatingNewQueue, setIsCreatingNewQueue] = useState(false);

  const queueBackHandler = () => setSelectedItem(null);

  const getFromServData = async () => {
    const subjects = await fetch("http://localhost:8080/subjects/all").then(
      (res) => res.json()
    );
    setAllSubjects(JSON.parse(subjects));

    const fetchQueues = await fetch("http://localhost:8080/queues/all").then(
      (res) => res.json()
    );
    setAllQueus(JSON.parse(fetchQueues));
  };

  const createNewQueue = async (subject, date) => {
    const newQueue = { subject, date, participants: [userName] };
    await fetch("http://localhost:8080/queues/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQueue),
    });

    getFromServData();
    setIsCreatingNewQueue(false);
  };

  const queueCardHandler = async (bool) => {
    const postMeth = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedItem, userName }),
    };

    if (bool) {
      await fetch("http://localhost:8080/queues/delete", postMeth);
    } else {
      await fetch("http://localhost:8080/queues/insert", postMeth);
    }

    getFromServData();
    setSelectedItem(null);
  };

  useEffect(() => {
    setUserName(`${userInfo?.first_name} ${userInfo?.last_name}`);
    getFromServData();
  }, []);

  useEffect(() => {
    setAvailableQueues(
      allQueues.filter((val) => val.participants.indexOf(userName) === -1)
    );
    setSubscibtedQueues(
      allQueues.filter((val) => val.participants.indexOf(userName) !== -1)
    );
  }, [allQueues]);

  return (
    <>
      <PanelHeader left={<PanelHeaderBack onClick={() => handler("main")} />}>
        Очереди
      </PanelHeader>
      <Tabs hidden={selectedItem}>
        <TabsItem
          onClick={() => setSelectedTab("one")}
          selected={selectedTab === "one"}
        >
          Ваши очереди
        </TabsItem>
        <TabsItem
          onClick={() => setSelectedTab("two")}
          selected={selectedTab === "two"}
        >
          Доступные
        </TabsItem>
      </Tabs>
      {selectedTab === "one" ? (
        <Group hidden={selectedItem}>
          <RSubscripted
            subArray={subsciptedQueues}
            itemSetter={(e) => {
              setSelectedItem(e);
              setIsSubscripted(true);
            }}
          />
        </Group>
      ) : (
        <Group hidden={selectedItem}>
          <RAvailable
            subArray={availableQueues}
            itemSetter={(e) => {
              setSelectedItem(e);
              setIsSubscripted(false);
            }}
          />
        </Group>
      )}
      {!selectedItem && (
        <div className="btn-create">
          <Button
            onClick={() => setIsCreatingNewQueue(true)}
            size="l"
            style={{ margin: 10, width: "100%" }}
          >
            Создать очередь
          </Button>
        </div>
      )}
      {isCreatingNewQueue && (
        <RCreateNewQueue
          allSubjects={allSubjects}
          creationHandler={(subject, date) => createNewQueue(subject, date)}
          cancelHandler={() => setIsCreatingNewQueue(false)}
        />
      )}
      {selectedItem && (
        <RQueueCard
          cardInfo={selectedItem}
          isSubscripted={isSubscripted}
          btnHandler={(bool) => queueCardHandler(bool)}
          headerBackHandler={() => queueBackHandler()}
        />
      )}
    </>
  );
};
export default QueuePanel;
