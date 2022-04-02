import { Top } from "../components/pages/Top";

export const homeRoutes = [
  {
    path: "/",
    name: "Top",
    exact: true,
    children: <Top />
  },
]
