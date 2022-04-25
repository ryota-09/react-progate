import { useContext } from "react";
import { UserContext, UserContextType } from "../providers/userProvider";

export const useCurrentUser = (): UserContextType => {
  return useContext(UserContext);
};
