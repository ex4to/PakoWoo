import React, { useState, useEffect } from "react";
import usersSevice from "./services/usersService";

import {
  useAdaptivity,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  ScreenSpinner,
} from "@vkontakte/vkui";
import { MainPage } from "./pages/MainPage";
import { QueuePage } from "./pages/QueuePage";

const App = () => {
  const [user, setUser] = useState(null);
  const { viewWidth } = useAdaptivity();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [selectedPanel, setSelectedPanel] = useState("main");

  useEffect(async () => {
    setUser(await usersSevice.getVKUserInfo()) ;
    setPopout(null);
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
