import { sc1, sc2, sc3, sc4, sc5, sc6 } from "@/assets/image";
import { Center, Flex, Image, Stack, Text } from "@mantine/core";
import { IconCornerLeftDown, IconCornerRightDown } from "@tabler/icons-react";
import { FC, Fragment } from "react";
import { Link } from "react-router-dom";

interface SocialHomeProps {}
const SocialHome: FC<SocialHomeProps> = () => {
  return (
    <Fragment>
      <Center py={64} mih={320} bg={"#f1e4c8"}>
        <Stack gap={32} justify="center" align="center">
          <Stack align="center">
            <Text fw={900} fz={32} tt={"uppercase"}>
              ¡No olvides seguirnos en nuestras redes!
            </Text>
            <Flex ta={"center"} align={"center"} fw={500} fz={18}>
              <IconCornerLeftDown size={16} /> Visitanos y volvete uno de
              nuestros amigos <IconCornerRightDown size={16} />{" "}
            </Flex>
          </Stack>
          <Flex gap={32} align={"center"}>
            <Link to={"https://www.instagram.com/p/C3JC_pnPMMv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="} className="rounded-md overflow-hidden">
              <Image
                src={sc1}
                w={320}
                h={320}
                fit="cover"
                className="social-card"
              />
            </Link>
            <Link to={"https://www.instagram.com/p/C6OsgOPO40D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="} className="rounded-md overflow-hidden">
              <Image
                src={sc2}
                w={320}
                h={320}
                fit="cover"
                className="social-card"
              />
            </Link>
            <Link to={"https://www.instagram.com/p/C04Dzx2uy4V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="} className="rounded-md overflow-hidden">
              <Image
                src={sc3}
                w={320}
                h={320}
                fit="cover"
                className="social-card"
              />
            </Link>
          </Flex>
          <Flex gap={32} align={"center"}>
            <Link to={"https://www.instagram.com/p/C4QJvpALQZa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="} className="rounded-md overflow-hidden">
              <Image
                src={sc5}
                w={320}
                h={320}
                fit="cover"
                className="social-card"
              />
            </Link>
						<Link to={"https://www.instagram.com/p/C2I4vu_vOQA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="} className="rounded-md overflow-hidden">
              <Image
                src={sc4}
                w={320}
                h={320}
                fit="cover"
                className="social-card"
              />
            </Link>
            <Link to={"https://www.instagram.com/p/C8pECaXOFq4/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="} className="rounded-md overflow-hidden">
              <Image
                src={sc6}
                w={320}
                h={320}
                fit="cover"
                className="social-card"
              />
            </Link>
          </Flex>
        </Stack>
      </Center>
    </Fragment>
  );
};

export default SocialHome;
