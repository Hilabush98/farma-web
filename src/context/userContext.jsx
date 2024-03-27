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
    /* const encryptedInfo = CryptoJS.AES.encrypt(
      JSON.stringify({ ...userData, isLogged: true }),
      secretKey
    ).toString();*/

    const requestOptions = {
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
        // Verifica si la respuesta es exitosa (código de estado en el rango 200-299)
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        // Convierte la respuesta a JSON
        return response.json();
      })
      .then((data) => {
        // Aquí puedes hacer algo con los datos de la respuesta
        console.log("Datos de la respuesta:", data);
      })
      .catch((error) => {
        // Captura cualquier error de red o de la API
        console.log("Error al hacer la solicitud:", error);
      });
    console.log(res);
    // Cuando res sea true y devuelva la informaci[on correcta llenara data info con los datos y la asignara a local storage]
    const dataInfo = { ...userData, isLogged: true };
    console.log(dataInfo);
    //localStorage.setItem("userInfo", JSON.stringify(dataInfo));
    return true;
  };
  /* const getUserInfo=()=>{

  }
*/
  const logout = () => {
    setUser(null);
  };

  const loaderRedirect = async () => {
    console.log("REEDIRECT", !user?.isLogged);
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
