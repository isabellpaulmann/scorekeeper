import "./PlayerForm.css";

export default function PlayerForm() {
  return (
    <form className="Formular" aria-labelledby="heading">
      <h2 id="heading">Add player:</h2>
      <label htmlFor="name"></label>
      <input type="text" id="name"></input>
    </form>
  );
}
