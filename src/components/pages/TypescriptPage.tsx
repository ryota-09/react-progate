/* eslint-disable jsx-a11y/iframe-has-title */
import Editor from "@monaco-editor/react";
import { FC, useState } from "react";

import { DiffArea } from "./organisms/DiffArea";

const defaultValue =
  "//ここにコードを書いていく\n{\nconst newArray = ['スイム','バイク','ラン'];\n\n}";

const answerValue =
  "{\nconst newArray = ['スイム','バイク','ラン'];\nconsole.log(newArray[0])\n}";

export const TypescriptPage: FC = () => {
  const [input, setInput] = useState<string>();
  const [code, setCode] = useState<string>();
  const [editorData, setEditorData] = useState("");
  const [canShow, setCanShow] = useState(false);

  let consoleCode = `<p id='console'></p><script>${code};const target = ${input}; const consoleElement = document.getElementById('console');consoleElement.textContent = target ?? '' ;</script>`;

  const handleEditorChange = (value: any) => {
    const prettyStr = value.split("{")[1].split("}")[0];
    setEditorData(prettyStr);
  };

  const onClick = () => {
    setCode(editorData);
    const next = editorData.split("console.log(");
    setInput(next[1].split(")")[0]);
  };

  const showAnswer = () => {
    setCode( "{" + editorData + "}");
    setCanShow(!canShow);
  };

  const reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="row">
        <div className="col s12 center">
          <h5>TypeScriptの練習</h5>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <span className="btn teal accent-4" onClick={onClick}>
            コンソール表示
          </span>
          <div></div>
          <br />
          <Editor
            theme="vs-dark"
            height="45vh"
            width="100%"
            language="typescript"
            value={defaultValue}
            onChange={handleEditorChange}
          />
        </div>
        <div className="col s6">
          <p>【問題】</p>
          <h5>配列のindex番号1番の要素をコンソールに出力する。</h5>
          <br />
          <p>【コンソール画面】</p>
          <iframe
            srcDoc={consoleCode}
            width="100%"
            height="100%"
            className="white"
          ></iframe>
          <span className="btn blue-grey lighten-3" onClick={reload}>
            リセット
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col s12 center">
          <span className="btn teal accent-4" onClick={showAnswer}>
            {canShow ? "正解を閉じる" : "正解を確認する"}
          </span>
          <br />
        </div>
        {canShow ? (
          <>
            <div className="col s6 center">
              <h5>正解コード</h5>
            </div>
            <div className="col s6 center">
              <h5>解答したコード</h5>
            </div>
            <div className="col s12">
              <br />
              <DiffArea
                originalValue={answerValue}
                modifiedValue={editorData}
              />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
