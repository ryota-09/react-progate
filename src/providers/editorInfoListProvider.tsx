import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { EditorInfoList } from "../types/editorInfoList";

export type EditorInfoListContextType = {
  globalState: State;
  setGlobalState: Dispatch<Action>;
};

export const EditorInfoListContext = createContext(
  {} as EditorInfoListContextType
);

type State = {
  currentUser: null;
  editorInfoList: Array<EditorInfoList>;
};

type Action = {
  type: "CHANGE_VALUE" | "SET_EDITORINFOLIST";
  payload: {};
};

type Props = {
  children: ReactNode;
};

const initialState: State = {
  currentUser: null,
  editorInfoList: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
    default:
      return state;
  }
};

export const EditorInfoListProvider = (props: Props) => {
  const { children } = props;
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <>
      <EditorInfoListContext.Provider value={{ globalState, setGlobalState }}>
        {children}
      </EditorInfoListContext.Provider>
    </>
  );
};
