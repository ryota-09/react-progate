/* eslint-disable jsx-a11y/iframe-has-title */
import Editor from "@monaco-editor/react";
import { FC, useState } from "react";

const initialCode = "<!-- ここにコードを書いていく -->";
const hintCode = "<!-- ここにコードを書いていく -->\n\n\n<style>\n\n</style>";
const answerCode =
  "<h1 class='title'>タイトル</h1>\n\n<style>\n.title{\ncolor:red;\n}\n</style>";

export const Top: FC = () => {
  const [lang] = useState("html");
  const [defaultValue, setDefaultValue] = useState(initialCode);
  const [code, setCode] = useState("");
  const [editorData, setEditorData] = useState("");

  const changeValues = (value: any) => {
    setEditorData(value);
  };
  return (
    <>
        <div className="row">
          <div className="col s12 center">
            <h5>HTMLの練習</h5>
            <p>答えと同じ表示を目指そう！</p>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <span
              onClick={() => setCode(editorData)}
              className="btn teal accent-4"
            >
              表示させる
            </span>
            &nbsp;&nbsp;
            <span
              onClick={() => setDefaultValue(hintCode)}
              className="btn amber darken-1"
            >
              ヒント
            </span>
            <div></div>
            <br />
            <Editor
              theme="vs-dark"
              height="60vh"
              width="100%"
              language={lang}
              value={defaultValue}
              onMount={() => setCode(initialCode)}
              onChange={changeValues}
            />
          </div>
          <div className="col s6">
            <p>【答え】</p>
            <iframe
              srcDoc={answerCode}
              width="100%"
              height="100%"
              className="white"
            ></iframe>
            <p>【自分のコードのブラウザ表示】</p>
            <iframe srcDoc={code} width="100%" className="white"></iframe>
          </div>
        </div>
    </>
  );
};
