import { FC, Fragment, useRef } from "react";
import { TextRotate }           from "@/components";
import { Text, Image, Stack }   from "@mantine/core";
import { img10, img11, img8 }   from "@/assets/image";
import { Carousel }             from "@mantine/carousel";
import Autoplay                 from "embla-carousel-autoplay";

interface InfoHomeProps {}

const InfoHome: FC<InfoHomeProps> = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const handleMouseEnter = () => {
    autoplay.current.stop();
  };

  const handleMouseLeave = () => {
    autoplay.current.play();
  };

  return (
    <Fragment>
      <TextRotate SlideText="✓ SABOR SUAVE ✓ SIN TACC ✓ POCO PALO ✓ DURA MUCHO ✓ POCO POLVO ✓ NO DA ACIDEZ ✓ ESTACIONAMIENTO NATURAL" />
      <div className="info-home">
        <div className="info-container">
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
                src={img10}
                h={420}
                w={300}
                alt="cósmico yerba mate"
                fit="cover"
              />
            </Carousel.Slide>
						<Carousel.Slide>
              <Image
                src={img8}
                h={420}
                w={300}
                alt="cósmico yerba mate"
                fit="cover"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={img11}
                h={420}
                w={300}
                alt="cósmico yerba mate"
                fit="cover"
              />
            </Carousel.Slide>
          </Carousel>
          <Stack gap={16}>
            <Text className="text-info" c={"#f1e4c8"}>
              Conoce a Cósmico
            </Text>
            <Text c={"#f1e4c8"} fw={500} fz={18}>
              Cósmico es una yerba mate nacida y criada en Misiones, Argentina.
              Para preservar su origen único, cada paso desde el cultivo hasta
              el envasado se realiza localmente, donde seleccionamos solo las
              mejores hojas, sin atajos, aditivos ni adulteraciones.
            </Text>
            <Text c={"#f1e4c8"} fw={500} fz={18}>
              Fundada por Sam y Hernan, la yerba mate Cósmico tiene un menor
              contenido de polvo y palo, lo que le da su sabor amigable
              característico que se mantiene por más tiempo. Además, cabe
              destacar que la nuestra es una yerba mate libre de gluten, como
              debe ser.
            </Text>
          </Stack>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoHome;
