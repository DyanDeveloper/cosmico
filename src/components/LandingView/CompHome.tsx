import { FC, Fragment } from "react";
import { img7 } from "@/assets/image";
import { Stack, Title, Flex, List, Text, Image, Button } from "@mantine/core";
import { CardBasic } from "@/components";
import { Link } from "react-router-dom";

interface CompHomeProps {}
const CompHome: FC<CompHomeProps> = () => {
	return (
		<Fragment>
      <div className="home-content">
        <div className="home-container">
          <Stack gap={16} align="top" className="home-list-items">
            <Title order={1} fz={42}>
              Conoce Nuestra Yerba 
            </Title>
            <Text fz={22}>
              Una yerba suave y deliciosa hecha en Misiones, Argentina.
            </Text>
            <Text fz={16} className="home-texts">
              Para preservar su origen único, cada paso desde el cultivo hasta
              el envasado se realiza localmente, donde seleccionamos solo las
              mejores hojas, sin atajos, aditivos ni adulteraciones.
            </Text>
            <Text fz={16} className="home-texts">
              La yerba mate Cósmico tiene un menor contenido de polvo y palo, lo
              que le da su sabor amigable característico que se mantiene por más
              tiempo.
            </Text>
            <Flex className="home-list" align={"center"} gap={6} justify={"space-between"}>
              <List type="ordered" size="md">
                <List.Item>✔️ Libre de Gluten</List.Item>
                <List.Item>✔️ Estacionamiento Natural</List.Item>
                <List.Item>✔️ Tipo: Tradicional</List.Item>
                <List.Item>✔️ Sabor: Suave y Delicioso</List.Item>
              </List>
              <Image src={img7} w={128} fit="cover" />
            </Flex>
						<Button variant="transparent" className="home-btn" fz={18} radius={"xl"}>
							<Link to={"/"} className="text-[#FFFFFF] font-medium min-h-8 flex items-center">¿Dónde Comprar?</Link>
						</Button>
          </Stack>
          <Flex align={"center"}>
            <CardBasic />
          </Flex>
        </div>
      </div>
		</Fragment>
	);
};

export default CompHome;