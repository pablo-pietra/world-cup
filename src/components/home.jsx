import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const response = await fetch("http://localhost:3002/games");
      const data = await response.json();
      setGames(data);
    };
    getGames();
  }, []);

  return (
    <Stack spacing={2} m={1}>
      <h2>Results</h2>
      <table style={{ maxWidth: 400 }}>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <td>{game.teamA.name}</td>
              <td>{game.teamA.score}</td>
              <td>{game.teamB.name}</td>
              <td>{game.teamB.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
}
