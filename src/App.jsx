import { useEffect, useState } from "react";
import { DatePicker, ConfigProvider, theme } from "antd";
import es_ES from "antd/locale/es_ES";
import en_US from "antd/locale/en_US";
import { Layaout } from "./components/Layaout.jsx";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
        locale={es_ES}
      >
        <Layaout />
      </ConfigProvider>
    </>
  );
}

export default App;
