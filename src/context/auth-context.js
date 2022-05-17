import { createContext, useState, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { setInStorage, login, signup } from "../services/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const toast = useToast();

  const userStored = localStorage.getItem("user");
  const [user, setUser] = useState(userStored ? JSON.parse(userStored) : null);

  const signin = async (data) => {
    try {
      const response = await login(data);
      const user = {
        accessToken: response.data.accessToken,
        ...response.data.user,
      };

      setInStorage("user", user);
      setUser(user);
      toast({
        title: "Login feito com êxito!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Ops! Email ou senha incorretos!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const registerAccount = async (data) => {
    try {
      await signup(data);
      toast({
        title: "Petconta criada com sucesso!",
        description: "Faça o login para começar a petwittar!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Ops! Algo deu errado!",
        description: "Verifique os campos e tente novamente!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const signout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, registerAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();

  let location = useLocation();

  if (!auth.user?.accessToken) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
