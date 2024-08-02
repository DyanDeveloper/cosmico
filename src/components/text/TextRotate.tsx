import { FC, Fragment } from "react";
import { Text } from "@mantine/core";

interface TextRotateProps {
  SlideText: string;
}
const TextRotate: FC<TextRotateProps> = ({ SlideText }) => {
  return (
    <Fragment>
      <div className="text-rotate-loop">
        <span className="shadow-loop sh-1"></span>
        <Text className="text-rotate" fz={22} fw={900}>
          {SlideText}
        </Text>
        <Text className="text-rotate" fz={22} fw={900}>
          {SlideText}
        </Text>
        <span className="shadow-loop sh-2"></span>
      </div>
    </Fragment>
  );
};

export default TextRotate;
