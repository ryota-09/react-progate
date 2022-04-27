/* eslint-disable jsx-a11y/iframe-has-title */
import Editor from "@monaco-editor/react";
import axios from "axios";
import { FC, useState } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const initialCode = "<!-- ここにコードを書いていく -->";
const hintCode = "<!-- ここにコードを書いていく -->\n\n\n<style>\n\n</style>";
const answerCode =
  "<h1 class='title'>タイトル</h1>\n\n<style>\n.title{\ncolor:red;\n}\n</style>";

export const Top: FC = () => {
  const { userState, setUserState } = useCurrentUser();

  const [lang] = useState("html");
  const [defaultValue, setDefaultValue] = useState(initialCode);
  const [code, setCode] = useState("");
  const [editorData, setEditorData] = useState("");

  const [loadingStr, setLoadingStr] = useState("");
  const [canShow, setCanShow] = useState(false);

  const changeValues = (value: any) => {
    setEditorData(value);
  };

  const check = () => {
    setLoadingStr("コードを確認中.....");
    const isOk = (): boolean => {
      let frag = false;
      console.log("1     ", editorData.trim());
      console.log("2     ", editorData.trim().includes("<h1 class="));
      console.log("3     ", editorData.trim().includes("color:"));
      console.log("4     ", editorData.trim().includes("."));
      if (
        editorData.trim().includes("<h1 class=") &&
        editorData.trim().includes("color:") &&
        editorData.trim().includes(".")
      ) {
        frag = true;
      }
      return frag;
    };
    setTimeout(async () => {
      if (isOk()) {
        const response = await axios.patch(
          "http://localhost:3000/users/beginnerstatus/" +
            userState.currentUser.username,
          {
            beginnerStatus: true,
          }
        );
        setUserState({
          type: "TOGGLE_BEGINNER_STATUS",
          payload: {
            beginnerStatus: response.data.beginnerStatus,
          },
        });
        setLoadingStr("");
        setCanShow(true);
      } else {
        setLoadingStr("もう一度考えてみよう！");
      }
    }, 1000);
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
          <button className="btn blue" onClick={check}>
            コードをチェックする
          </button>
          &nbsp; &nbsp;&nbsp;&nbsp;<span>{loadingStr}</span>
          {canShow ? (
            <span className="amber-text amber-darken-4">
              Beginnerステージ クリア！🎉
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
