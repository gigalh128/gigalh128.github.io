//functions taken from https://github.com/smogon/damage-calc/blob/master/src/js/moveset_import.js
//ported here because they can't be imported unfortunately
export function checkExeptions(poke) {
  switch (poke) {
    case "Aegislash":
      poke = "Aegislash-Blade";
      break;
    case "Basculin-Blue-Striped":
      poke = "Basculin";
      break;
    case "Gastrodon-East":
      poke = "Gastrodon";
      break;
    case "Mimikyu-Busted-Totem":
      poke = "Mimikyu-Totem";
      break;
    case "Mimikyu-Busted":
      poke = "Mimikyu";
      break;
    case "Pikachu-Belle":
    case "Pikachu-Cosplay":
    case "Pikachu-Libre":
    case "Pikachu-Original":
    case "Pikachu-Partner":
    case "Pikachu-PhD":
    case "Pikachu-Pop-Star":
    case "Pikachu-Rock-Star":
      poke = "Pikachu";
      break;
    case "Vivillon-Fancy":
    case "Vivillon-Pokeball":
      poke = "Vivillon";
      break;
    case "Florges-White":
    case "Florges-Blue":
    case "Florges-Orange":
    case "Florges-Yellow":
      poke = "Florges";
      break;
    default:
      break;
  }
  return poke;
}
