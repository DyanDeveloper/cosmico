import { Fragment, Suspense } from "react";
import { useRoutes }          from "react-router-dom";
import { Layout, Loading }    from "@/components";
import { Landing, Mayor, WhereBuy, Contact }  from "@/views";

const PathRoute: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Fragment>
        {useRoutes([
          {
            path: "/",
            element: <Layout />,
            children: [
              {
                index: true,
                element: <Landing />,
              },
              {
                path: "/donde-comprar",
                element: <WhereBuy />,
              },
              {
                path: "/mayorista",
                element: <Mayor />,
              },
              {
                path: "/contacto",
                element: <Contact />,
              }
            ],
          },
        ])}
      </Fragment>
    </Suspense>
  );
};

export default PathRoute;
