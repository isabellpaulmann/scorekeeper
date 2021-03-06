import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <ResetButton onClick={onClick}>{text}</ResetButton>;
}

const ResetButton = styled.button`
  background-color: rgb(60, 89, 64, 0.7);
  padding: 10px 30px;
  color: white;
  font-size: 1.3em;
  font-family: "Arvo", serif;
  box-shadow: 1px 1px 15px black;
  border-radius: 6px;
  border: none;
  margin: 20px;
  margin-top: 40px;
  margin-bottom: 0;
  width: 249px;

  &:hover {
    box-shadow: 1px 1px 25px black;
  }
`;
