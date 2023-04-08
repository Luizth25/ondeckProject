import { TTooltipProps } from "./types";
import * as s from "./styles";

const Tooltip = ({ children, label }: TTooltipProps) => (
  <>
    <s.TooltipCard>
      <s.TooltipText>
        <s.TooltipLabel>{label}</s.TooltipLabel>
      </s.TooltipText>
      <s.TooltipBox>{children}</s.TooltipBox>
    </s.TooltipCard>
  </>
);

export default Tooltip;
