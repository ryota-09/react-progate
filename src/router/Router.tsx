import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route
        path="/"
        render={() => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
    </Switch>
  );
});
