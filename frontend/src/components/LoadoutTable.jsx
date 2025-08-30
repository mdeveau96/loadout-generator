import { Table } from "@mantine/core";

const generateRandomLoadout = (selectedGame, loadoutData) => {
  const gameData = loadoutData[selectedGame];

  const primaryWeaponTypes = Object.keys(gameData.primary_weapons);
  const randomWeaponType =
    primaryWeaponTypes[Math.floor(Math.random() * primaryWeaponTypes.length)];
  const weaponsOfType = gameData.primary_weapons[randomWeaponType];

  // If the weapons are in array of objects format (as in your current structure)
  // Select a random weapon object from the array
  const randomWeaponObj =
    weaponsOfType[Math.floor(Math.random() * weaponsOfType.length)];

  // Get the name of the weapon (first key in the weapon object)
  const weaponName = Object.keys(randomWeaponObj)[0];

  // Get the attachments for this weapon
  const attachments = randomWeaponObj[weaponName].attachments;

  // Select a random attachment
  const randomAttachment =
    attachments.length > 0
      ? attachments[Math.floor(Math.random() * attachments.length)]
      : "No attachment";

  return {
    weaponName: weaponName,
    attachment: randomAttachment,
  };
};

function LoadoutTable({ loadoutData, selectedGame }) {
  return (
    <h1>
      {JSON.stringify(
        generateRandomLoadout(selectedGame, loadoutData),
        null,
        2
      )}
    </h1>
  );
}

export default LoadoutTable;
