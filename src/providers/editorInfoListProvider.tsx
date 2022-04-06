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
  type: "CHANGE_VALUE" | "SET_EDITORINFOLIST" | "PAYLOAD_CODE";
  payload: {
    editorInforList?: Array<EditorInfoList>;
    currentLang?: string;
    currentEditorCode?: string;
  };
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
      return state;
    case "SET_EDITORINFOLIST":
      return action.payload.editorInforList
        ? { ...state, editorInfoList: [...action.payload.editorInforList] }
        : state;
    case "PAYLOAD_CODE":
      if (action.payload.currentEditorCode) {
        for (let info of state.editorInfoList) {
          if (info.language === action.payload.currentLang) {
            info.value = action.payload.currentEditorCode;
          }
        }
      }
      return state;
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
