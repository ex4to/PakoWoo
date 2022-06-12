import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";

import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  ScreenSpinner,
} from "@vkontakte/vkui";
import MainPanel from "./MainPanel";
import QueuePanel from "./QueuePanel";

const App = () => {
  const [user, setUser] = useState(null);
  const { viewWidth } = useAdaptivity();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [selectedPanel, setSelectedPanel] = useState("main");

  useEffect(() => {
    const fetchData = async () => {
      const userVK = await bridge.send("VKWebAppGetUserInfo");
      setUser(userVK);
      setPopout(null);
    };
    fetchData();
  }, []);

  return (
    <AppRoot>
      <SplitLayout popout={popout} header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <View activePanel={selectedPanel}>
            <Panel id="main">
              <MainPanel user={user} handler={(e) => setSelectedPanel(e)} />
            </Panel>
            <Panel id="second">
              <QueuePanel
                handler={(e) => setSelectedPanel(e)}
                userInfo={user}
              />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
