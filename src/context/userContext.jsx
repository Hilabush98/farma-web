/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import CryptoJS from "crypto-js";

// Crear el contexto de inicio de sesión
const AuthContext = createContext();
const secretKey = "#$3l03!";
function decrypt(text, secretKey) {
  const decipher = crypto.createDecipher("aes-256-cbc", secretKey);
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const AuthProvider = ({ children }) => {
  const info = localStorage.getItem("userInfo");
  const [user, setUser] = useState(JSON.parse(info));

  console.log(user);

  useEffect(() => {
    const info = localStorage.getItem("userInfo");
    if (info !== null) {
      setUser(JSON.parse(info));
    }
  }, []);

  const login = async (userData) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    /* const encryptedInfo = CryptoJS.AES.encrypt(
      JSON.stringify({ ...userData, isLogged: true }),
      secretKey
    ).toString();*/

    /* const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: userData.username,
        client_secret: userData.password,
        scope: "*",
      }),
    };
    const res = await fetch(
      "https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx/oauth2/ldap/jwt",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de la respuesta:", data);
      })
      .catch((error) => {
        console.log("Error al hacer la solicitud:", error);
      });*/
    // console.log(res);
    const dataInfo = { ...userData, isLogged: true };
    console.log(dataInfo);
    localStorage.setItem("userInfo", JSON.stringify(dataInfo));
    return true;
  };
  /* const getUserInfo=()=>{

  }
*/
  const logout = () => {
    setUser(null);
  };

  const loaderRedirect = async () => {
    if (!user?.isLogged) {
      return redirect("/login");
    } else {
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loaderRedirect }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
// Hook para consumir el contexto de inicio de sesión
