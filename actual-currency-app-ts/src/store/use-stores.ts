import { useContext } from "react";
import { rootStoreContext } from "./root-store";

export const useStores = () => useContext(rootStoreContext);