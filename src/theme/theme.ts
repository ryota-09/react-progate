import { extendTheme } from "@chakra-ui/react";
//globalなスタイル適応。全体につけるCSSを定義する。
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});
export default theme;
