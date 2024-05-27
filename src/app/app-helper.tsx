import { FC, ReactNode } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { DefaultLayout } from "../layout";

interface RequireAuthProps {
  children: ReactNode;
}

interface RequireNoAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const isLogin = true;
  const location = useLocation();

  if (isLogin) {
    return <>{children}</>;
  } else {
    return <Redirect to={`/login?callbackUrl=${location.pathname}`} />;
  }
};

const RequireNoAuth: FC<RequireNoAuthProps> = ({ children }) => {
  const isLogin = false;

  if (!isLogin) {
    return <>{children}</>;
  } else {
    return <Redirect to="/" />;
  }
};

const RoutesLayoutHandler = (props: any) => {
  let layout = props.layout;

  if (layout === null) {
    return props.children;
  } else {
    return layout === "default" ? (
      <DefaultLayout {...layout.props}>{props.children}</DefaultLayout>
    ) : null;
  }
};

export { RequireAuth, RequireNoAuth, RoutesLayoutHandler };
