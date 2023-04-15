import { useNavigate } from "react-router-dom";
import FiberIcon from "../../assets/Fiber_Icon.svg";
import GradieIcon from "../../assets/Gradie_Icon.svg";

import ButtonLogin from "../Button/ButtonLogin";
import ButtonRegistrar from "../Button/ButtonRegister";
import Tooltip from "../Tooltip";

import * as s from "./styles";
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <s.List>
          <li>
            <Tooltip label="Produtos">
              <img src={FiberIcon} alt="fiberIcon" />
              <s.Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                saepe, commodi vitae temporibus autem iure adipisci quos vel
                ullam. Inventore obcaecati porro eveniet. Nesciunt consequuntur
                iure vel neque velit cumque?
              </s.Paragraph>
              <img src={GradieIcon} alt="Gradie icon" />
              <s.Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                saepe, commodi vitae temporibus autem iure adipisci quos vel
                ullam. Inventore obcaecati porro eveniet. Nesciunt consequuntur
                iure vel neque velit cumque?
              </s.Paragraph>
            </Tooltip>
          </li>
          <li>
            <Tooltip label="Desafios">
              <img src={GradieIcon} alt="Gradie icon" />
              <s.Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                saepe, commodi vitae temporibus autem iure adipisci quos vel
                ullam. Inventore obcaecati porro eveniet. Nesciunt consequuntur
                iure vel neque velit cumque?
              </s.Paragraph>
            </Tooltip>
          </li>
          <li>
            <Tooltip label="Recursos">
              <img src={FiberIcon} alt="fiberIcon" />
              <s.Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                saepe, commodi vitae temporibus autem iure adipisci quos vel
                ullam. Inventore obcaecati porro eveniet. Nesciunt consequuntur
                iure vel neque velit cumque?
              </s.Paragraph>
              <img src={FiberIcon} alt="fiberIcon" />
              <s.Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                saepe, commodi vitae temporibus autem iure adipisci quos vel
                ullam. Inventore obcaecati porro eveniet. Nesciunt consequuntur
                iure vel neque velit cumque?
              </s.Paragraph>
            </Tooltip>
          </li>
          <li>
            <Tooltip label="Outros Links">
              <img src={FiberIcon} alt="fiberIcon" />
              <s.Paragraph>Lorem ipsum dolor, sit amet consectetur</s.Paragraph>
              <img src={FiberIcon} alt="fiberIcon" />
              <s.Paragraph>Lorem ipsum dolor, sit amet consectetur</s.Paragraph>
              <img src={FiberIcon} alt="fiberIcon" />
              <s.Paragraph>Lorem ipsum dolor, sit amet consectetur</s.Paragraph>
            </Tooltip>
          </li>
          <li></li>
        </s.List>
      </nav>
      <s.ButtonContainer>
        <ButtonLogin onClick={() => navigate("/login")} label="Logar" />
        <ButtonRegistrar label="Registre-se" />
      </s.ButtonContainer>
    </>
  );
};

export default NavBar;
