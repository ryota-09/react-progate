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
  type:
    | "SET_CURRENT_USER"
    | "TOGGLE_BEGINNER_STATUS"
    | "TOGGLE_MULTIPLE_STATUS"
    | "TOGGLE_TS_STATUS";
  payload: {
    currentUser?: User;
    beginnerStatus?: boolean;
    htmlStatus?: boolean;
    tsStatus?: boolean;
  };
};

export const UserContext = createContext({} as UserContextType);

const initialUserState: State = {
  currentUser: {
    username: "",
    avatar: "",
    remarks: "",
    beginnerStatus: false,
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
    case "TOGGLE_BEGINNER_STATUS":
      return action.payload.beginnerStatus
        ? {
            currentUser: {
              ...state.currentUser,
              beginnerStatus: action.payload.beginnerStatus,
            },
          }
        : state;
    case "TOGGLE_MULTIPLE_STATUS":
      return action.payload.htmlStatus
        ? {
            currentUser: {
              ...state.currentUser,
              htmlStatus: action.payload.htmlStatus,
            },
          }
        : state;
    case "TOGGLE_TS_STATUS":
      return action.payload.tsStatus
        ? {
            currentUser: {
              ...state.currentUser,
              tsStatus: action.payload.tsStatus,
            },
          }
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
