import styled from "styled-components";

export default function PlayerForm({ onCreatePlayer }) {
  function activateSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    const newPlayer = { name: name.value, score: 0 };
    onCreatePlayer(newPlayer);
    form.reset();
    window.scrollTo(0, 0);
  }
  return (
    <SubmitFormular aria-labelledby="heading" onSubmit={activateSubmit}>
      <h2 id="heading">Add player:</h2>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name"></input>
      <SubmitButton>Submit</SubmitButton>
    </SubmitFormular>
  );
}
const SubmitFormular = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #heading {
    color: white;
    margin-top: 3rem;
    font-family: "Pacifico", cursive;
    font-size: 1.7em;
  }

  #name {
    padding: 15px 50px;
    padding-bottom: 15px;
    box-shadow: 1px 1px 15px black;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    font-family: "Arvo", serif;
    font-size: 1.2rem;
    text-align: center;
  }

  #name:focus {
    outline: 4px solid #b53737;
  }
`;

const SubmitButton = styled.button`
  background-color: rgb(60, 89, 64, 0.7);
  padding: 10px 30px;
  color: white;
  font-size: 1.2em;
  font-family: "Arvo", serif;
  box-shadow: 1px 1px 15px black;
  border-radius: 6px;
  border: none;
  margin: 20px;
  width: 200px;
  margin-bottom: 40px;
  margin-top: 15px;

  &:hover {
    box-shadow: 1px 1px 25px black;
  }
`;
