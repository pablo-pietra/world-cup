import { useState } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const newGame = {
  teamA: { name: "", score: 0 },
  teamB: { name: "", score: 0 },
};

export default function Game() {
  const [game, setGame] = useState(newGame);

  const addGame = async () => {
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      };
      await fetch(`http://localhost:3002/games`, config);
      setGame(newGame);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Stack spacing={2} m={1}>
      <h2>Game</h2>
      <Stack direction="row" spacing={2}>
        <label>Team A:</label>
        <input
          type="text"
          value={game.teamA.name}
          onChange={(e) =>
            setGame({ ...game, teamA: { ...game.teamA, name: e.target.value } })
          }
        />
        <label>Score:</label>
        <input
          type="number"
          value={game.teamA.score}
          onChange={(e) =>
            setGame({
              ...game,
              teamA: { ...game.teamA, score: e.target.value },
            })
          }
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <label>Team B:</label>
        <input
          type="text"
          value={game.teamB.name}
          onChange={(e) =>
            setGame({ ...game, teamB: { ...game.teamB, name: e.target.value } })
          }
        />
        <label>Score:</label>
        <input
          type="number"
          value={game.teamB.score}
          onChange={(e) =>
            setGame({
              ...game,
              teamB: { ...game.teamB, score: e.target.value },
            })
          }
        />
      </Stack>
      <div>
        <Button variant="contained" onClick={addGame}>
          Add
        </Button>
      </div>
    </Stack>
  );
}
