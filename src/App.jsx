import { useEffect, useState, useContext } from "react";
import { DatePicker, ConfigProvider, theme } from "antd";
import es_ES from "antd/locale/es_ES";
import en_US from "antd/locale/en_US";
import { Layaout, Login } from "./components";

function App() {
  const [userConfiguration, setuserConfiguration] = useState({
    user: null,
    password: null,
    permission: null,
    expirationDate: null,
    isLogged: false,
  });
  useEffect(() => {
    console.log(userConfiguration);
  }, [userConfiguration]);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
        locale={es_ES}
      >
        <Login setuserConfiguration={setuserConfiguration} />
      </ConfigProvider>
    </>
  );
}

export default App;
