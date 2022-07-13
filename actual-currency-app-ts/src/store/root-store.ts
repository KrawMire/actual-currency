import { createContext } from "react";
import { LoginStore } from "./login-store";

export const rootStoreContext = createContext({
    loginStore: new LoginStore()
});