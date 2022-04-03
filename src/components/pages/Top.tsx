/* eslint-disable jsx-a11y/iframe-has-title */
import Editor from "@monaco-editor/react";
import { FC, useState, useRef, ChangeEvent } from "react";

const initialCode = "<!-- ここにコードを書いていく -->";
const hintCode = "<!-- ここにコードを書いていく -->\n\n\n<style>\n\n</style>"
const answerCode = "<h1 class='title'>タイトル</h1>\n\n<style>\n.title{\ncolor:red;\n}\n</style>";

export const Top: FC = () => {
  const [lang, setLang] = useState("html");
  const [defaultValue, setDefaultValue] = useState(initialCode);
  const [code, setCode] = useState("");
  const [ editorData, setEditorData ] = useState("")
  
  const handleEditorChange = (event: any) => {
    console.log(event);
    setEditorData(event);
  };
  return (
    <>
      <h1>Progate Clone</h1>
      <p>【HTMLの練習】</p>
      <p>答えと同じ表示を目指そう！</p>
      <button onClick={() => setCode(editorData)}>表示させる</button>
      <button onClick={() => setDefaultValue(hintCode)}>ヒント</button>
      <div style={{ display: "flex" }}>
        <Editor
        theme="vs-dark"
          height="100vh"
          width="50%"
          language={lang}
          value={defaultValue}
          onMount={() => setCode(initialCode)}
          onChange={handleEditorChange}
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
