import "./Player.css";

export default function Player({ playerDetails }) {
  return (
    <div className="Name__score">
      {playerDetails.name}
      <div className="Name__buttons">
        <button className="button1">-</button>
        {playerDetails.score}
        <button className="button2">-</button>
      </div>
    </div>
  );
}
