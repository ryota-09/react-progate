import { Top } from "../components/pages/Top";
import { TypescriptPage } from "../components/pages/TypescriptPage";

export const homeRoutes = [
  {
    path: "/",
    name: "Top",
    exact: true,
    children: <Top />
  },
  {
    path: "/typescriptPage",
    name: "TypeScriptPage",
    exact: false,
    children: <TypescriptPage />
  },
]
