import { ct, ml, py } from "@/assets/image";
import { Stack, Image, Flex, Text } from "@mantine/core";
import { FC, Fragment } from "react";

interface EndHomeProps {}
const EndHome: FC<EndHomeProps> = () => {
  return (
    <Fragment>
      <Stack className="w-full flex items-center justify-center" mih={320} bg={"#f1e4c8"}>
        <Text fw={900} fz={24} className="uppercase" mt={64}>🥳 ¡Estas marcas ya confiaron en nosotros! 🥳</Text>
				<Flex align={"center"} gap={16}>
          <Image src={ml} w={256} fit="contain" />
          <Image src={py} w={256} fit="contain" />
          <Image src={ct} w={256} fit="contain" />
        </Flex>
        <Text fw={900} fz={24} className="uppercase" mb={64}>🤗 ¿Y vos que estás esperando para probar? 🤗</Text>
      </Stack>
    </Fragment>
  );
};

export default EndHome;
