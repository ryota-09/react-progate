/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext } from "react";
import axios from "axios";
import { EditorInfoListContext } from "../providers/editorInfoListProvider";
import { EditorInfoList } from "../types/editorInfoList";

export const useAllFiles = () => {
  const { globalState, setGlobalState } = useContext(EditorInfoListContext);
  const urlList = [
    "/template/main.html",
    "/template/main.css",
    "/template/main.js",
  ];
  const langList = ["html", "css", "js"];

  const loadFileData = useCallback(async () => {
    let newArray = new Array<EditorInfoList>();
    let targetLang = "";
    for (let url of urlList) {
      for (let lang of langList) {
        if (url.includes(lang)) {
          targetLang = lang;
        }
      }
      const response = await axios.get<string>(url);
      newArray.push({
        name: url,
        language: targetLang,
        value: response.data,
      });
    }
    setGlobalState({
      type: "SET_EDITORINFOLIST",
      payload: {
        editorInforList: newArray,
      },
    });
  }, [globalState]);
  return { loadFileData };
};
