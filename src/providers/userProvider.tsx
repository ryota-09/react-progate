import { createContext, Dispatch, FC, ReactNode, useReducer } from "react";
import { User } from "../types/user";

export type UserContextType = {
  userState: State;
  setUserState: Dispatch<Action>;
};

type State = {
  currentUser: User;
};

type Action = {
  type: "SET_CURRENT_USER";
  payload: { currentUser?: User };
};

export const UserContext = createContext({} as UserContextType);

const initialUserState: State = {
  currentUser: {
    username: "Mac",
    avatar: "",
    remarks: "初めまして！！",
    beginnerStatus: true,
    htmlStatus: false,
    tsStatus: false,
  },
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload.currentUser
        ? { ...state, currentUser: action.payload.currentUser }
        : state;
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

export const UserProvider: FC<Props> = (props) => {
  const { children } = props;
  const [userState, setUserState] = useReducer(reducer, initialUserState);
  return (
    <>
      <UserContext.Provider value={{ userState, setUserState }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
