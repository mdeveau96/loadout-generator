import { useState } from "react";
import { Button } from "@mantine/core";
import loadoutData from "./all_cod_loadouts.json";

import LoadoutTable from "./components/LoadoutTable";
import ClassForm from "./components/ClassForm";
import "./App.css";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [generate, setGenerate] = useState(false);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  return (
    <>
      <ClassForm
        selectedGame={selectedGame}
        onGameSelect={handleGameSelect}
        loadoutData={loadoutData}
      />
      {selectedGame && (
        <Button onClick={() => setGenerate(true)}>
          Generate Random Loadout
        </Button>
      )}
      {generate && (
        <LoadoutTable selectedGame={selectedGame} loadoutData={loadoutData} />
      )}
    </>
  );
}

export default App;
