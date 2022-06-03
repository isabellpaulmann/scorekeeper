import "./Player.css";

export default function Player({ name, score, onAddScore, onReduceScore }) {
  return (
    <div className="Player__score">
      {name}
      <div className="Player__buttons">
        <button onClick={onReduceScore} className="button1">
          -
        </button>
        <p className="Player__score--number">{score}</p>
        <button onClick={onAddScore} className="button2">
          +
        </button>
      </div>
    </div>
  );
}
