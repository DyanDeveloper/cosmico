import { FC, Fragment } from "react";
import { Text, Flex, Stack, Image } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { igIcon, img4, twIcon } from "@/assets/image";

interface SuscribeProps {}
const Suscribe: FC<SuscribeProps> = () => {
  return (
    <Fragment>
      <Stack maw={420} mih={275} mah={275} align="center" justify="flex-start">
        <Text ta={"center"} c={"#3B5439"} fw={700} fz={18}>
          ¡Suscribite para recibir{" "}
          <span className="font-bold underline">novedades</span> y{" "}
          <span className="font-bold underline">descuentos</span> secretos! 😀
        </Text>
        <Stack gap={6}>
          <span className="ml-2.5 flex items-center gap-1">
            <IconAt size={16} /> Correo Electrónico
          </span>
          <input
            id="emailInput"
            className="input-suscribe"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Ejemplo: correo@hotmail.com"
          />
          <input
            id="submitBtn"
            className="input-submit"
            name="submit"
            type="submit"
            value="Enviar"
          />
        </Stack>
        <Flex
          w={"80%"}
          justify={"space-between"}
          mt={16}
          align={"center"}
          gap={16}
        >
          <Flex align={"center"} gap={8}>
            <Link
              to={"/"}
              className="social-footer bg-[#3B5439] p-3 rounded-full"
            >
              <Image src={igIcon} w={24} h={24} fit="cover" />
            </Link>
            <Link
              to={"/"}
              className="social-footer bg-[#3B5439] p-3 rounded-full"
            >
              <Image src={twIcon} w={24} h={24} fit="cover" />
            </Link>
          </Flex>
          <Image src={img4} w={128} fit="cover" />
        </Flex>
      </Stack>
    </Fragment>
  );
};

export default Suscribe;
