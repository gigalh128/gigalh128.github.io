import { TYPE_CHART } from "@smogon/calc";
import { gen3TypeCategorization, typeWeights } from "./data.js";
function getTypeEffectiveness(type, pkmn) {
  let effectiveness = 1;
  for (let t in pkmn.types) {
    let currVal = TYPE_CHART[pkmn.gen.num][type][pkmn.types[t]];
    if (
      (pkmn.hasAbility("Levitate") && type === "Ground") ||
      ((pkmn.hasAbility("Water Absorb") ||
        (pkmn.gen.num >= 5 && pkmn.hasAbility("Storm Drain"))) &&
        type === "Water") ||
      ((pkmn.hasAbility("Volt Absorb") ||
        (pkmn.gen.num >= 5 && pkmn.hasAbility("Lightning Rod"))) &&
        type === "Electric")
    ) {
      currVal = 0;
    }
    effectiveness *= currVal;
  }
  return effectiveness;
}

function applyWeightsTypeDictList(hVals, gen, method = 0) {
  const numTypes = Object.keys(TYPE_CHART[gen.num]).length - 1;
  const numSpecial = gen.num > 3 ? numTypes : Math.floor(numTypes / 2);
  const numPhysical = gen.num > 3 ? numTypes : numSpecial + 1;
  for (let type in TYPE_CHART[gen.num]) {
    if (type === "???") {
      continue;
    }
    if (gen.num > 3) {
      hVals[0][type] *= typeWeights[gen.num].Special[type].wtotal * numTypes;
      hVals[1][type] *= typeWeights[gen.num].Physical[type].wtotal * numTypes;
      hVals[2][type] =
        hVals[0][type] * typeWeights[gen.num].Special.wtotal +
        hVals[1][type] * typeWeights[gen.num].Physical.wtotal;
    } else {
      if (type in typeWeights[gen.num].Special) {
        hVals[0][type] *=
          typeWeights[gen.num].Special[type].wtotal * numSpecial;
        delete hVals[1][type];
        hVals[2][type] = hVals[0][type] * typeWeights[gen.num].Special.wtotal;
      } else {
        delete hVals[0][type];
        hVals[1][type] *=
          typeWeights[gen.num].Physical[type].wtotal * numPhysical;
        hVals[2][type] = hVals[1][type] * typeWeights[gen.num].Physical.wtotal;
      }
    }
  }
}

export { getTypeEffectiveness, applyWeightsTypeDictList };
