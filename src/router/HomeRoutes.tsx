import { Multiple } from "../components/pages/Multiple";
import { Test } from "../components/pages/Test";
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
  {
    path: "/multiplePage",
    name: "MultiplePage",
    exact: false,
    children: <Multiple />
  },
  {
    path: "/test",
    name: "Test",
    exact: false,
    children: <Test />
  },
]
