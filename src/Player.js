import styled from "styled-components";

export default function Player({ name, score, onAddScore, onReduceScore }) {
  return (
    <ScoreForm>
      {name}
      <PlayerButtonContainer>
        <Button onClick={onReduceScore}>-</Button>
        <p className="Player__score--number">{score}</p>
        <Button onClick={onAddScore}>+</Button>
      </PlayerButtonContainer>
    </ScoreForm>
  );
}

const ScoreForm = styled.div`
  display: grid;
  grid-template-areas: "a b ";
  align-items: center;
  justify-self: left;
  gap: 15px;
  background-color: rgb(73, 94, 53, 0.7);
  margin: 2rem;
  box-shadow: 1px 1px 15px black;
  padding: 20px;
  font-size: 1.4rem;
  font-family: "Arvo", serif;
  color: white;
  flex-wrap: wrap;
  border-radius: 10px;
`;
const PlayerButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-right: 7px;

  p {
    width: 25px;
    margin: 0;
  }
`;
const Button = styled.button`
  background-color: #60703b;
  border: 2px solid white;
  padding: 10px 15px;
  box-shadow: 1px 1px 15px black;
  border-radius: 5px;

  &:hover {
    box-shadow: 1px 1px 25px black;
  }
`;
