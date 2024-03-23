/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
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
  useEffect(() => {
    const info = localStorage.getItem("userInfo");
    if (info !== null) {
      setUser(JSON.parse(info));
    }
  }, []);

  const [user, setUser] = useState(null);

  const login = (userData) => {
    /* const encryptedInfo = CryptoJS.AES.encrypt(
      JSON.stringify({ ...userData, isLogged: true }),
      secretKey
    ).toString();*/
    const dataInfo = { ...userData, isLogged: true };
    console.log(dataInfo);
    localStorage.setItem("userInfo", JSON.stringify(dataInfo));
  };
  /* const getUserInfo=()=>{

  }
*/
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
// Hook para consumir el contexto de inicio de sesión
