import { Box, Center, Stack, Text, Title } from "@mantine/core";
import { FC, Fragment } from "react";
import { Link } from "react-router-dom";

interface ErrorPageProps {}
const ErrorPage: FC<ErrorPageProps> = () => {
  return (
    <Fragment>
      <Box mt={88} mih={16} bg={"#3B5439"}></Box>
      <Center mih={420} bg={"#f1e4c8"}>
        <Stack ta={"center"} mt={64} justify="center" align="center">
          <Title order={1}>Oops! Creo que hay un problema! 🥺</Title>
          <Text fz={18} fw={500}>
            Pero seguro tiene solución, quedate tranquilo que estaremos
            trabajando para resolverlo!
          </Text>
          <Link to={"/"} className="uppercase mt-8 bg-[#3b5439] hover:bg-[#4b6a48] w-fit text-[#FFFFFF] px-4 min-h-10 flex items-center rounded-full outline outline-2 outline-[#4b6a48]">
            Volver a Inicio
          </Link>
        </Stack>
      </Center>
      <Box mih={16} bg={"#3B5439"}></Box>
    </Fragment>
  );
};

export default ErrorPage;
