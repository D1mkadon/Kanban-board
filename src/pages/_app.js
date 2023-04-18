import { App, ConfigProvider } from "antd";
import React from "react";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
const MyApp = ({ Component, pageProps }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#00b96b",
        colorBgContainer: "#111",
        colorBorder: "#fff",
        colorText: "#fff",
        colorBorder: "#00b96b",
        colorFillAlter: "#00b96b",
        controlOutline: "#00b96b",
        colorTextPlaceholder: "#00b96b",
        controlOutlineWidth: 1,
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
      },
    }}
  >
    <RecoilRoot>
      <App>
        <Component {...pageProps} />
      </App>
    </RecoilRoot>
  </ConfigProvider>
);

export default MyApp;
