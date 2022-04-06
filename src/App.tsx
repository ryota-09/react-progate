import React from "react";
import { BrowserRouter } from "react-router-dom";
import { EditorInfoListProvider } from "./providers/editorInfoListProvider";
import { Router } from "./router/Router";
function App() {
  return (
    <div className="App">
      <EditorInfoListProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </EditorInfoListProvider>
    </div>
  );
}

export default App;
