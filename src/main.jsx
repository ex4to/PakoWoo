import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import App from "./App";

import "@vkontakte/vkui/dist/vkui.css";

bridge.send("VKWebAppInit", {});

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
