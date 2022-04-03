/* eslint-disable jsx-a11y/iframe-has-title */
import Editor from "@monaco-editor/react";
import { FC, useEffect, useState } from "react";

const defaultValue = "//sample\n{\nconst newArray = ['スイム','バイク','ラン'];\n\n}";

export const TypescriptPage: FC = () => {
  const [input, setInput] = useState<string>();
  const [code, setCode] = useState<string>();
  const [editorData, setEditorData] = useState("");
  let consoleCode = `<p id='console'></p><script>${code};const target = ${input}; const consoleElement = document.getElementById('console');consoleElement.textContent = target ?? '' ;</script>`;

  const handleEditorChange = (value : any) => {
    const prettyStr = value.split("{")[1].split("}")[0];
    setEditorData(prettyStr);
  };

  const onClick = () => {
    setCode(editorData);
    const next = editorData.split("console.log(");
    setInput(next[1].split(")")[0]);
  };
  return (
    <>
      <h1>TypeScriptページ</h1>
      <button onClick={onClick}>コンソール表示</button>
      <div style={{ display: "flex" }}>
        <Editor
          theme="vs-dark"
          height="100vh"
          width="50%"
          language="typescript"
          value={defaultValue}
          onChange={handleEditorChange}
        />
        <div>
          <p>【問題】</p>
          <p>配列のindex番号1番の要素をconsoleに出力する。</p>
          <br />
          <p>【コンソール画面】</p>
          <iframe srcDoc={consoleCode} width="100%"></iframe>
        </div>
      </div>
    </>
  );
};
