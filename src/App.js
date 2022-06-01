import "./App.css";
import Button from "./Button";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
import { players } from "./playerData";

function App() {
  return (
    <div className="App">
      <h1>Scorekeeper version A</h1>
      <main className="playerContainer">
        {players.map((player) => (
          <Player
            key={player.id}
            playerDetails={player}
            playerScore={player.score}
          />
        ))}
      </main>
      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm />
    </div>
  );
}

export default App;
