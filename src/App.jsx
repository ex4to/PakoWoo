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
import { ModalError } from "./components/ModalError";

const App = () => {
  const { viewWidth } = useAdaptivity();
  const [user, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [selectedPanel, setSelectedPanel] = useState("main");

  useEffect(async () => {
    try {
      const VKUser = await usersService.getVKUserInfo();
      const isPakoUser = await usersService.isPakoUser(VKUser);
      const PakoUser = isPakoUser
        ? await usersService.getPakoUser(VKUser)
        : await usersService.createPakoUser(VKUser);

      setUser(PakoUser);
      setPopout(null);
    } catch (err) {
      setPopout(<ModalError />);
    }
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
        <View activePanel={selectedPanel}>
          <Panel id="main">
            <MainPage userInfo={user} />
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
