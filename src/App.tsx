import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/pages/organisms/Header";
import { LangList } from "./components/pages/organisms/LangList";
import { EditorInfoListProvider } from "./providers/editorInfoListProvider";
import { UserProvider } from "./providers/userProvider";
import { Router } from "./router/Router";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <EditorInfoListProvider>
          <BrowserRouter>
            <Header />
            <br />
            <LangList />
            <Router />
          </BrowserRouter>
        </EditorInfoListProvider>
      </UserProvider>
    </div>
  );
}

export default App;
