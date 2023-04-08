import NetflixLogo from "../../assets/NetflixLogo.svg";
import ShopifyLogo from "../../assets/ShopifyLogo.svg";
import SpotifyLogo from "../../assets/SpotifyLogo.svg";
import WalmartLogo from "../../assets/WalmartLogo.svg";

import * as s from "./styles";

const Footer = () => (
  <s.FooterContainer>
    <s.Paragraph>Trusted by 3+ million people at companies Like</s.Paragraph>
    <div>
      <img src={NetflixLogo} alt="Netflix Logo" />
      <img src={ShopifyLogo} alt="Shopify Logo" />
      <img src={SpotifyLogo} alt="Spotify Logo" />
      <img src={WalmartLogo} alt="Walmart Logo" />
    </div>
  </s.FooterContainer>
);

export default Footer;
