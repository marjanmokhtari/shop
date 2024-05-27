import React, { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import routes from "./config";
import {
  RequireAuth,
  RequireNoAuth,
  RoutesLayoutHandler,
} from "../app/app-helper";
import { ScrollToTop } from "../utils";

const NotFound = lazy(() => import("../pages/not-found"));
const Router: React.FC = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ScrollToTop />
      <Switch>
        {routes.map((routeItem, index) => {
          if (routeItem.authType === "auth") {
            return (
              <Route
                key={index}
                path={routeItem.path}
                exact={routeItem.exact}
                component={() => (
                  <RequireAuth>
                    <RoutesLayoutHandler layout={routeItem.layout}>
                      <routeItem.component />
                    </RoutesLayoutHandler>
                  </RequireAuth>
                )}
              />
            );
          } else if (routeItem.authType === "no-auth") {
            return (
              <Route
                key={index}
                path={routeItem.path}
                exact={routeItem.exact}
                component={() => (
                  <RequireNoAuth>
                    <RoutesLayoutHandler layout={routeItem.layout}>
                      <routeItem.component />
                    </RoutesLayoutHandler>
                  </RequireNoAuth>
                )}
              />
            );
          }
        })}

        <Route
          path="*"
          component={NotFound}
          render={() => <Redirect to="/notfound" />}
        />
      </Switch>
    </Suspense>
  );
};

export default Router;
