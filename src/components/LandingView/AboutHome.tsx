import { FC, Fragment, useRef } from "react";
import { Text, Image, Stack } from "@mantine/core";
import { img3, img12 } from "@/assets/image";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

interface AboutHomeProps {}

const AboutHome: FC<AboutHomeProps> = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const handleMouseEnter = () => {
    autoplay.current.stop();
  };

  const handleMouseLeave = () => {
    autoplay.current.play();
  };

  return (
    <Fragment>
      <div className="info-home">
        <div className="info-container">
          <Stack gap={16}>
            <Text className="text-info" c={"#f1e4c8"}>
              Sobre Sam y Hernan
            </Text>
            <Text c={"#f1e4c8"} fw={500} fz={18}>
              Sam y Hernan, una pareja joven y emprendedora, crearon su propia
              marca de yerba mate para compartir su pasión por esta bebida
              tradicional. Sam, originaria de Estados Unidos, y Hernan, de
              Argentina, unieron sus culturas para ofrecer un producto auténtico
              y de alta calidad.
            </Text>

            <Text c={"#f1e4c8"} fw={500} fz={18}>
              La historia de Sam y Hernan, una pareja joven con raíces en
              Estados Unidos y Argentina, es la inspiración detrás de su marca
              de yerba mate. Juntos, crearon una yerba que combina la tradición
              argentina con la visión innovadora de Sam.
            </Text>
          </Stack>
          <Carousel
            className="image-info"
            plugins={[autoplay.current]}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            orientation="vertical"
            height={400}
            miw={300}
            loop
            withControls={false}
          >
            <Carousel.Slide>
              <Image
                src={img12}
                h={420}
                w={300}
                alt="cósmico yerba mate"
                fit="cover"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={img3}
                h={420}
                w={300}
                alt="cósmico yerba mate"
                fit="cover"
              />
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutHome;
