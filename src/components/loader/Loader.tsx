import { FC, Fragment }      from "react";
import { Loader, Container } from "@mantine/core";

interface LoadingProps{}
const Loading: FC<LoadingProps> = () => {
  return (
    <Fragment>
      <Container className="min-h-screen flex items-center justify-center">
        <Loader color="cyan" size="lg" />
      </Container>
    </Fragment>
  );
};

export default Loading;