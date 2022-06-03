import "./PlayerForm.css";

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
    <form
      className="Formular"
      aria-labelledby="heading"
      onSubmit={activateSubmit}
    >
      <h2 id="heading">Add player:</h2>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name"></input>
      <button className="submitButton">Submit</button>
    </form>
  );
}
