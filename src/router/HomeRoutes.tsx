import { Login } from "../components/pages/Login";
import { Multiple } from "../components/pages/Multiple";
import { MyPage } from "../components/pages/MyPage";
import { RegisterUser } from "../components/pages/RegisterUser";
import { Top } from "../components/pages/Top";
import { TypescriptPage } from "../components/pages/TypescriptPage";

export const homeRoutes = [
  {
    path: "/",
    name: "Top",
    exact: true,
    children: <Top />,
  },
  {
    path: "/typescriptPage",
    name: "TypeScriptPage",
    exact: false,
    children: <TypescriptPage />,
  },
  {
    path: "/multiplePage",
    name: "MultiplePage",
    exact: false,
    children: <Multiple />,
  },
  {
    path: "/myPage",
    name: "MyPage",
    exact: false,
    children: <MyPage />,
  },
  {
    path: "/registerUser",
    name: "RegisterUser",
    exact: false,
    children: <RegisterUser />,
  },
  {
    path: "/login",
    name: "Login",
    exact: false,
    children: <Login />,
  },
];
