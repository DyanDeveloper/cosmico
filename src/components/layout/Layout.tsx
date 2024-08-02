import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components";

const Layout: FC = () => {
  return (
    <Fragment>
      <div className="web-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
