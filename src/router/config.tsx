import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home"));
const CategoryPage = lazy(() => import("../pages/category"));

type routesProps = {
  path: string[] | string;
  exact: boolean;
  component: React.FC;
  layout: "default";
  authType: "no-auth" | "auth";
  showFooter?: boolean;
}[];

const routes: routesProps = [
  {
    path: ["/", "/home"],
    exact: true,
    component: HomePage,
    layout: "default",
    authType: "no-auth",
  },
  {
    path: "/category",
    exact: true,
    component: CategoryPage,
    layout: "default",
    authType: "no-auth",
  },
];

export default routes;
