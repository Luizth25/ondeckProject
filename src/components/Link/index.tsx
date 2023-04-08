import { TLinkProps } from "./types";
import * as s from "./styles";

const Link = ({ label, href }: TLinkProps) => (
  <s.Link to={href}>{label}</s.Link>
);

export default Link;
