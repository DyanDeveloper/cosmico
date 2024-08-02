import { img5, img6 } from "@/assets/image";
import { FC, Fragment } from "react";
import { Card, Image, Text, Button, Group, Grid } from "@mantine/core";
import { Link } from "react-router-dom";

interface IProduct {
  img: string;
  title: string;
  description: string;
  price: string;
  btn: string;
}

const Products: IProduct[] = [
  {
    img: img5,
    title: "Cósmico 500g",
    price: "1",
    description:
      "Disponible en COTO, PedidosYa Market, Mercado Libre y más de 200 tiendas físicas.",
    btn: "Comprar Unidad",
  },
  {
    img: img6,
    title: "Cósmico 500g",
    price: "10",
    description:
      "Disponible en COTO, PedidosYa Market, Mercado Libre y más de 200 tiendas físicas.",
    btn: "Compra Mayor",
  },
];

const getPriceText = (price: string): string => {
  const number = parseInt(price, 10);
  return `${number} ${number > 1 ? "Unidades" : "Unidad"}`;
};

interface CardBasicProps {}
const CardBasic: FC<CardBasicProps> = () => {
  return (
    <Fragment>
      <Grid align="center">
        {Products &&
          Products.length > 0 &&
          Products.map((prod, index) => (
            <Grid.Col key={index} span={6}>
              <Card className="cursor-pointer" shadow="sm" maw={400} mt={16} radius="md">
                <Card.Section>
                  <Link to={"/"}>
                    <Image src={prod.img} mah={360} maw={400} fit="cover" alt="yerba mate cósmico" />
                  </Link>
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fz={18} fw={500}>
                    {prod.title}
                  </Text>
                  <Text className="price-card">{getPriceText(prod.price)}</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  {prod.description}
                </Text>

                <Button
                  className="card-btn"
                  c={"#FFFFFF"}
                  fullWidth
                  mt="md"
                  radius="xl"
                >
                  <Link className="card-btn-cta" to={"/"}>
                    {prod.btn}
                  </Link>
                </Button>
              </Card>
            </Grid.Col>
          ))}
      </Grid>
    </Fragment>
  );
};

export default CardBasic;
