/* eslint-disable react-hooks/exhaustive-deps */
import Editor from "@monaco-editor/react";
import { useContext, useEffect, useState } from "react";

import { useAllFiles } from "../../hooks/useAllFiles";
import { EditorInfoListContext } from "../../providers/editorInfoListProvider";
import { EditorInfoList } from "../../types/editorInfoList";

const initialCode = "<!-- ここにコードを書いていく -->";
const answerCode =
  "<h1 class='title'>タイトル</h1>\n\n<style>\n.title{\ncolor:red;\n}\n</style>";

export const Multiple = () => {
  const [editorData, setEditorData] = useState("");
  const [currentLang, setCurrentLang] = useState("html");
  const [editorInfoList, setEditorInfoList] = useState<EditorInfoList>();
  const [code, setCode] = useState("");

  const { globalState, setGlobalState } = useContext(EditorInfoListContext);
  const { loadFileData } = useAllFiles();

  const changeValues = (value: any) => {
    setEditorData(value);
  };

  const onClickCSS = () => {
    setGlobalState({
      type: "PAYLOAD_CODE",
      payload: {
        currentLang: currentLang,
        currentEditorCode: editorData,
      },
    });
    setCurrentLang("css");
    console.log("③      ", editorData);
  };

  const onClickHTML = () => {
    
    setGlobalState({
      type: "PAYLOAD_CODE",
      payload: {
        currentLang: currentLang,
        currentEditorCode: editorData,
      },
    });
    setCurrentLang("html");
    console.log("④      ", editorData);
  };

  const displayCode = () => {
    console.log(currentLang);
    console.log(editorData);
    setGlobalState({
      type: "PAYLOAD_CODE",
      payload: {
        currentLang: currentLang,
        currentEditorCode: editorData,
      },
    });

    console.log("①      ", editorData);

    let newCode = "";
    for (let info of globalState.editorInfoList) {
      if (info.language === "html") {
        newCode += info.value;
      }
      if (info.language === "css") {
        newCode += `<style>${info.value}<style>`;
      }
      if (info.language === "javascript") {
        newCode += `<script>${info.value}</script>`;
      }
    }

    setCode(newCode);
  };

  useEffect(() => {
    loadFileData();
  }, []);

  useEffect(() => {
    console.log(currentLang);
    console.log("②      ", editorData);
    for (let info of globalState.editorInfoList) {
      if (info.language === currentLang) {
        setEditorInfoList(info);
      }
    }
  }, [currentLang]);

  return (
    <>
      <h1>Progate Clone with React</h1>
      <p>マルチファイル.ver</p>
      <p>答えと同じ表示を目指そう！</p>
      <button onClick={displayCode}>表示させる</button>
      <button onClick={onClickHTML}>HTML</button>
      <button onClick={onClickCSS}>CSS</button>
      <button onClick={() => setCurrentLang("javascript")}>JavaScript</button>
      <div style={{ display: "flex" }}>
        <Editor
          theme="vs-dark"
          height="100vh"
          width="50%"
          language={currentLang}
          value={editorInfoList ? editorInfoList.value : ""}
          onChange={changeValues}
        />
        <div>
          <p>【答え】</p>
          <iframe srcDoc={answerCode} width="100%"></iframe>
          <p>【自分のコードのブラウザ表示】</p>
          <iframe srcDoc={code} width="100%"></iframe>
        </div>
      </div>
    </>
  );
};
