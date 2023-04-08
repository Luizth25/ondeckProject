import styled from "styled-components";
import { CiLogin } from "react-icons/ci";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 7px;
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.corTitulo};
`;

export const SubTitle = styled.h3`
  font-family: "Roboto";
  font-weight: 500;
  size: 16px;
  color: ${({ theme }) => theme.colors.corDeTexto};
`;

export const Icon = styled(CiLogin)`
  fill: ${({ theme }) => theme.colors.corPrimaria};
`;
