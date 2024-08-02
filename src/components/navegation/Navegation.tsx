import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { Text } from "@mantine/core";

interface NavProps {
  vertical?: boolean;
}
const Navegation: FC<NavProps> = ({ vertical }) => {
  return (
    <Fragment>
      <nav className="navegation">
        <ul
          role="list"
          className={`nav-list ${vertical ? "nav-list-vertical" : ""}`}
        >
          {vertical && (
            <Text c={"#3B5439"} fw={700} fz={18}>
              Historia
            </Text>
          )}
          {vertical && (
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Acerca de Nosotros
              </Link>
            </li>
          )}
          {vertical && (
            <Text c={"#3B5439"} fw={700} fz={18}>
              Menu
            </Text>
          )}
          {!vertical && (
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                "Nuestra Historia"
              </Link>
            </li>
          )}
          {!vertical && <span className="nav-span"></span>}
          <li className="nav-item">
            <Link to={"/donde-comprar"} className="nav-link">
              ¿Dónde Comprar?
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/mayorista"} className="nav-link">
              Mayorista
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contacto"} className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>
        {!vertical && (
          <Link
            to={
              "https://www.mercadolibre.com.ar/yerba-mate-cosmico-500g/p/MLA34077331?product_trigger_id=MLA34166638&quantity=1"
            }
            className="btn-buy-header"
          >
            <span className="text-[#FFFFFF] font-medium">Comprar Ya!</span>
          </Link>
        )}
      </nav>
    </Fragment>
  );
};

export default Navegation;
