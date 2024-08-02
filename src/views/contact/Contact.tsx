import { ErrorPage } from "@/components";
import { FC, Fragment } from "react";

interface ContactProps {}
const Contact: FC<ContactProps> = () => {
	return (
		<Fragment>
			<ErrorPage />
		</Fragment>
	);
};

export default Contact;