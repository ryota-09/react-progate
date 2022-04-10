import { DiffEditor } from "@monaco-editor/react";
import { FC } from "react";


type Props = {
  originalValue: string;
  modifiedValue: string;
}

export const DiffArea: FC<Props> = (props) => {
  const { originalValue, modifiedValue } = props;
  return (
    <>
      <div className="row">
        <div className="col s12">
          <DiffEditor
            theme="vs-dark"
            height="100vh"
            width="100%"
            language="typescript"
            modified={ "{" + modifiedValue + "}"}
            original={originalValue}
          />
        </div>
      </div>
    </>
  );
};
