import { ErrorPage } from "@/components";
import { FC, Fragment } from "react";

interface WhereBuyProps {}
const WhereBuy: FC<WhereBuyProps> = () => {
	return (
		<Fragment>
			<ErrorPage />
		</Fragment>
	);
};

export default WhereBuy;