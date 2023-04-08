import * as s from "./styles";
import { TTitleProps } from "./types";

const Title = ({ title, subTitle }: TTitleProps) => (
  <s.TitleContainer>
    <s.Title>
      <s.Icon size={24} />
      {title}
    </s.Title>
    <s.SubTitle>{subTitle}</s.SubTitle>
  </s.TitleContainer>
);
export default Title;
