import { FC, Fragment, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Button, Image, Center } from "@mantine/core";
import { bann1, bann2, img1, img2 } from "@/assets/image";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { IconChevronCompactDown } from "@tabler/icons-react";

interface CarruselProps {}
const Carrusel: FC<CarruselProps> = () => {
  const autoplay = useRef(Autoplay({ delay: 3500 }));

  const handleMouseEnter = () => {
    autoplay.current.stop();
  };

  const handleMouseLeave = () => {
    autoplay.current.play();
  };

  return (
    <Fragment>
      <Carousel
        className="shadow-md"
        mt={86}
        slideSize="100%"
        height={450}
        mah={450}
        mih={250}
        loop
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        withControls={true}
      >
        <Carousel.Slide className="relative overflow-hidden">
          <Image src={bann1} w={"full"} fit="cover" />
          <div className="slide-cont">
            <Button variant="transparent" className="slide-btn" fz={18}>
              <Link to={"/"} className="text-[#3B5439] font-bold">
                Bienvenidos al Sitio Web de Cósmico! 😀
              </Link>
            </Button>
          </div>
        </Carousel.Slide>
        <Carousel.Slide className="relative overflow-hidden">
          <Image src={bann2} w={"full"} fit="cover" />
        </Carousel.Slide>
        <Carousel.Slide className="relative overflow-hidden">
          <Image src={img2} w={"full"} fit="cover" />
        </Carousel.Slide>
        <Carousel.Slide className="relative overflow-hidden">
          <Image src={img1} w={"full"} fit="cover" />
        </Carousel.Slide>
      </Carousel>
      <Center bg={"#f1e4c8"} pt={16} className="cursor-pointer">
        <IconChevronCompactDown size={32} />
      </Center>
    </Fragment>
  );
};

export default Carrusel;
