import Button from "./Button";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
import { useEffect, useState } from "react";
import { getFromLocal, setToLocal } from "./localStorage";
import styled from "styled-components";

function App() {
  const [players, setPlayers] = useState(getFromLocal("players") ?? []);
  useEffect(() => setToLocal("players", players), [players]);

  function createPlayer(player) {
    setPlayers([...players, player]);
  }

  function addScore(index) {
    const activePlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      {
        ...activePlayer,
        score: activePlayer.score + 1,
      },
      ...players.slice(index + 1),
    ]);
  }
  function reduceScore(index) {
    const activePlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      {
        ...activePlayer,
        score: activePlayer.score - 1,
      },
      ...players.slice(index + 1),
    ]);
  }

  function resetScores() {
    setPlayers(
      players.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function resetPlayers() {
    setPlayers([]);
  }

  return (
    <AppContainer>
      <h1>Scorekeeper version A</h1>
      <main>
        {players.map((player, index) => (
          <Player
            key={player.name}
            name={player.name}
            score={player.score}
            onAddScore={() => addScore(index)}
            onReduceScore={() => reduceScore(index)}
          />
        ))}
      </main>
      <Button onClick={resetScores} text="Reset scores" />
      <Button onClick={resetPlayers} text="New game" />
      <PlayerForm onCreatePlayer={createPlayer} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;
