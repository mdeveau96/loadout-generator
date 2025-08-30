import { Select } from "@mantine/core";

function ClassForm({ selectedGame, onGameSelect, loadoutData }) {
  return (
    <>
      <Select
        className="game-select"
        label="Select Game"
        placeholder="Pick one"
        classNames={{
          label: "game-select-label",
        }}
        data={Object.entries(loadoutData).map(([key, value]) => ({
          value: key,
          label: value.title,
        }))}
        clearable
        value={selectedGame}
        onChange={onGameSelect}
      />
    </>
  );
}

export default ClassForm;
