import { useContext, useState } from "react";
import { EditorInfoListContext } from "../providers/editorInfoListProvider";

export const useDisplayCode = () => {
  const [displayCode, setDisplayCode] = useState("");
  const { globalState } = useContext(EditorInfoListContext);

  let htmlCode = "";
  let cssCode = "";
  let jsCode = "";
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

  for (let info of globalState.editorInfoList) {
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
  setDisplayCode(initialCode);

  console.log("initialCode     ", initialCode);
  console.log("display      ", displayCode);

  return  displayCode ;
};
