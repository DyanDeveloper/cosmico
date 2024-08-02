import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "@mantine/core";
import { PiLogo } from "@/assets/image";

const Logo: FC = () => {
  return (
    <Fragment>
      <Link to={"/"}>
        <Image className="cursor-pointer" src={PiLogo} h={64} fit="contain" />
      </Link>
    </Fragment>
  );
};

export default Logo;
