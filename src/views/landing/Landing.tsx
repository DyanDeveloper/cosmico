import { FC, Fragment } from "react";
import {
  AboutHome,
  Carrusel,
  CompHome,
  EndHome,
  InfoHome,
  SocialHome,
} from "@/components";

interface LandingProps {}
const Landing: FC<LandingProps> = () => {
  return (
    <Fragment>
      <Carrusel />
      <CompHome />
      <InfoHome />
      <AboutHome />
      <SocialHome />
      <EndHome />
    </Fragment>
  );
};

export default Landing;
