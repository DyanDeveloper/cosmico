import { ErrorPage } from "@/components";
import { FC, Fragment } from "react";

interface MayorProps {}
const Mayor: FC<MayorProps> = () => {
	return (
		<Fragment>
			<ErrorPage />
		</Fragment>
	);
};

export default Mayor;