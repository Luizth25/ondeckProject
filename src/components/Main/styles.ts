import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

export const imageContainer = styled.div`
  display: flex;
  height: 60vh;
  align-self: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.corTitulo};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.corDeTexto};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
