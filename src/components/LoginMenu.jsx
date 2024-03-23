import { useEffect, useState } from "react";
import { Login } from ".";

function LoginMenu() {
  const [userConfiguration, setuserConfiguration] = useState();
  useEffect(() => {
    console.log(userConfiguration);
  }, [userConfiguration]);

  return (
    <>
      <Login setuserConfiguration={setuserConfiguration} />
    </>
  );
}

export default LoginMenu;
