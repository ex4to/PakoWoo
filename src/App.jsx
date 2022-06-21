import React, { useState, useEffect } from "react";
import usersService from "./services/usersService";

import {
  useAdaptivity,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  ScreenSpinner,
} from "@vkontakte/vkui";
import { RoomPage } from "./pages/RoomPage";
import { QueuePage } from "./pages/QueuePage";
import { MainPage } from "./pages/MainPage";
import { Modal } from "./components/Modal";

const App = () => {
  const [user, setUser] = useState(null);
  const { viewWidth } = useAdaptivity();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [selectedPanel, setSelectedPanel] = useState("room");

  useEffect(async () => {
    try {
      const VKUser = await usersService.getVKUserInfo();
      const PakoUser = await usersService.getPakoUserInfo(VKUser);
      console.log(PakoUser, "Pako");
      setUser(VKUser);
      setPopout(null);
    } catch (err) {
      setPopout(
          <p>Whoops</p>
      );
    }
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
        <View activePanel={selectedPanel}>
          <Panel id="main">
            <MainPage
              userInfo={user}
              switchPagesHandler={(e) => setSelectedPanel(e)}
            />
          </Panel>
          <Panel id="room">
            <RoomPage
              userInfo={user}
              switchPagesHandler={(e) => setSelectedPanel(e)}
            />
          </Panel>
          <Panel id="second">
            <QueuePage
              switchPagesHandler={(e) => setSelectedPanel(e)}
              userInfo={user}
            />
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
