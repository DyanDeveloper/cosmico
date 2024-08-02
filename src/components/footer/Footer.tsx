import { FC, Fragment } from "react";
import { Image, Flex, Text } from "@mantine/core";
import { BiLogo } from "@/assets/image";
import { Navegation, Suscribe } from "@/components";

interface FooterProps {}
const Footer: FC<FooterProps> = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-container">
          <Image src={BiLogo} h={256} fit="cover" />
          <Flex align={"center"} gap={32}>
            <Navegation vertical />
            <Suscribe />
          </Flex>
        </div>
        <div className="footer-bottom">
          <Text className="footer-end">
            Todos los derechos reservados a Cósmico - Yerba Mate © 2024 - 2028
          </Text>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
