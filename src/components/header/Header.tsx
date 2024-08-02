import { FC, Fragment }     from "react";
import { Navegation, Logo } from "@/components";

interface HeaderProps{}
const Header: FC<HeaderProps> = () => {
	return (
		<Fragment>
			<header className="header">
				<div className="header-container">
					<Logo />
					<Navegation />
				</div>
			</header>
		</Fragment>
	)
}

export default Header;
