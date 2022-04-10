import { DiffEditor } from "@monaco-editor/react";

export const Test = () => {
  return (
    <>
      <div className="row">
        <div className="col s12">
          <DiffEditor
            theme="vs-dark"
            height="100vh"
            width="100%"
            language="javascript"
            original="// the original code"
            modified="// the modified code"
          />
        </div>
      </div>
    </>
  );
};
