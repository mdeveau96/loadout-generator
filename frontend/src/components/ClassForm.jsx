import React from "react";

function ClassForm() {
  return (
    <Select
      label="Select Game"
      placeholder="Pick one"
      data={[
        { value: "World at War", label: "Game 1" },
        { value: "game2", label: "Game 2" },
        { value: "game3", label: "Game 3" },
      ]}
    />
  );
}

export default ClassForm;
