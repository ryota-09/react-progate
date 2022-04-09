/* eslint-disable react-hooks/exhaustive-deps */
import Editor from "@monaco-editor/react";
import { useContext, useEffect, useState } from "react";

import { useAllFiles } from "../../hooks/useAllFiles";
import { EditorInfoListContext } from "../../providers/editorInfoListProvider";
import { EditorInfoList } from "../../types/editorInfoList";

// const initialCode = "<!-- ここにコードを書いていく -->";
const answerCode =
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>.title{color:red;}</style>
    <title>Document</title>
  </head>
  <body>
  <h1 class="title">タイトル</h1>
  <button type="button" id="button">ボタン</button>
  <p>ボタンを押すとアラートが出る！</p>  
    <script>const buttonElement = document.getElementById("button");
    buttonElement.addEventListener("click", () => {
      alert("クリックされました！");
    });</script>
  </body>
  </html>`


  const makeDisplayCode = (infoList: Array<EditorInfoList>) => {
    let displayCode = "";
    let htmlCode = "";
    let cssCode = "";
    let jsCode = "";
    
  
    for (let info of infoList) {
      if (info.language === "html") {
        htmlCode += info.value;
      }
      if (info.language === "css") {
        cssCode += info.value;
      }
      if (info.language === "javascript") {
        jsCode += info.value;
      }
    }

    let initialCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${cssCode}</style>
      <title>Document</title>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}</script>
    </body>
    </html>`;
    displayCode = initialCode;
  
    console.log("initialCode     ", initialCode);
    console.log("display      ", displayCode);
  
    return  displayCode ;
  };

export const Multiple = () => {
  const [editorData, setEditorData] = useState("");
  const [currentLang, setCurrentLang] = useState("html");
  const [editorInfoList, setEditorInfoList] = useState<EditorInfoList>();
  const [ code, setCode ] = useState("")
  
  const { globalState, setGlobalState } = useContext(EditorInfoListContext);
  const { loadFileData } = useAllFiles();

  

  const changeValues = (value: any) => {
    setEditorData(value);
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
  };

  const onClickJavascript = () => {
    setGlobalState({
      type: "PAYLOAD_CODE",
      payload: {
        currentLang: currentLang,
        currentEditorCode: editorData,
      },
    });
    setCurrentLang("javascript");
  };

  const displayCode = () => {
    setGlobalState({
      type: "PAYLOAD_CODE",
      payload: {
        currentLang: currentLang,
        currentEditorCode: editorData,
      },
    });
    let targetCode = makeDisplayCode(globalState.editorInfoList);
    setCode(targetCode);
  };

  const reload = () => {
    window.location.reload()
  }

  useEffect(() => {
    loadFileData();
  }, []);

  useEffect(() => {
    for (let info of globalState.editorInfoList) {
      if (info.language === currentLang) {
        setEditorInfoList(info);
      }
    }
  }, [currentLang]);

  return (
    <>
      <p>マルチファイル.ver</p>
      <p>答えと同じ表示を目指そう！</p>
      <button onClick={displayCode}>表示させる</button>
      <button onClick={onClickHTML}>HTML</button>
      <button onClick={onClickCSS}>CSS</button>
      <button onClick={onClickJavascript}>JavaScript</button>
      <div style={{ display: "flex" }}>
        <Editor
          theme="vs-dark"
          height="100vh"
          width="50%"
          language={currentLang}
          onMount={() => setCurrentLang("html")}
          value={editorInfoList ? editorInfoList.value : ""}
          onChange={changeValues}
        />
        <div>
          <p>【答え】</p>
          <iframe srcDoc={answerCode} width="100%"></iframe>
          <p>【自分のコードのブラウザ表示】</p>
          <iframe srcDoc={code} width="100%"></iframe>
          <button onClick={reload} >リセット</button>
        </div>
      </div>
    </>
  );
};
