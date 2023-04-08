import Logo from "../../assets/Logo.svg";

import { THeaderProps } from "./types";
import * as s from "./styles";

const Header = ({ children }: THeaderProps) => (
  <s.Header>
    <img src={Logo} alt="Logo do site" />
    {children}
  </s.Header>
);

export default Header;
