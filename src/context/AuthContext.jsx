import { createContext, useCallback, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";
import { response } from "express";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null)
  const [isRegisterLoad, setIsRegisterLoading] = useState(false)
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  })

  console.log("registerInfo", registerInfo)

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info)
  }, [])

  const registerUser = useCallback( async () = {
    setIsRegisterLoading(true)
    setRegisterError(null)

    const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo))

    setIsRegisterLoading(false)

    if(response.error){
      return setRegisterError(response)
    }

    localStorage.setItem("User", JSON.stringify(response))
    setUser(response)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,

      }}
    >
      { children }
    </AuthContext.Provider>
  );
};
