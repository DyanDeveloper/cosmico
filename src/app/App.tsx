import { FC, Fragment }    from "react";
import { BrowserRouter }   from "react-router-dom";
import { PathRoute }       from "@/routes";
import { MantineProvider } from "@mantine/core";
import { Notifications }   from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import '@mantine/carousel/styles.css';
import "@/assets/styles/index.css";

interface AppProps{}
const App: FC<AppProps> = () => {
  return (
    <Fragment>
      <MantineProvider forceColorScheme="light">
        <Notifications position="top-right" zIndex={5000} />
        <BrowserRouter>
          <PathRoute />
        </BrowserRouter>
      </MantineProvider>
    </Fragment>
  );
};

export default App;
