import { useContext } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import { Ball } from "../components/Ball";
import styled from "styled-components";

const createStyledComponents = () => {
  const Container = styled.div`
    border: 2px solid ${({ theme }) => theme.borderColor};
    padding: 2rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;

  const Numbers = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  `;

  return { Container, Numbers };
};

function useMegasenaData() {
  const { megasena } = useContext(LotteryContext);
  return megasena;
}

export function Megasena() {
  const { Container, Numbers } = createStyledComponents();
  const megasena = useMegasenaData();

  const isLoading = !megasena;
  if (isLoading) return <p>Carregando...</p>;

  return (
    <Container>
      <h1>MEGA-SENA</h1>
      <Numbers>
        {megasena.dezenas.map((dezena, idx) => (
          <Ball key={idx} number={dezena} />
        ))}
      </Numbers>
      <p>{megasena.dataPorExtenso}</p>
    </Container>
  );
}
