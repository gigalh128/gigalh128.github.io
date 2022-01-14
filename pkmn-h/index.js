import { Field, Generations, TYPE_CHART } from "@smogon/calc";
import { Move } from "@smogon/calc/dist/move.js";
import { calculate } from "@smogon/calc/dist/calc.js";
import { Pokemon } from "@smogon/calc/dist/pokemon.js";
import { Sets } from "@pkmn/sets";
import { checkExeptions } from "./moveset_import.js";
import { getTypeEffectiveness, applyWeightsTypeDictList } from "./util.js";
import { hazards, gen3TypeCategorization, typeWeights } from "./data.js";
export class Team {
  constructor(gennum, tier) {
    this.pkmnlist = [];
    this.gen = Generations.get(gennum);
    this.tier = tier;
  }

  stabCovgH(sIndx, eIndx, method = 0) {
    //returns a dictionary of how good a team's STAB covg moves are against other types
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }

    const dict = {};

    for (let type in TYPE_CHART[this.gen.num]) {
      dict[type] = 0;

      for (let i = sIndx; i < eIndx; i++) {
        for (let j in this.pkmnlist[i].types) {
          let x = TYPE_CHART[this.gen.num][this.pkmnlist[i].types[j]][type];
          switch (method) {
            case 0: //average weight
              x /= eIndx - sIndx;
              x /= this.pkmnlist[i].types.length;
              break;

            case 1: //log base 2 of type matchup
              x = x === 0 ? -3 : Math.log(x) / Math.log(2);
              break;

            default:
              break;
          }
          dict[type] += x;
        }
      }
    }
    return dict;
  }

  bestStabCovgH(sIndx, eIndx, method = 0) {
    //takes the most effective STAB from each pokemon on a team and returns a dictionary of how their best STAB moves do against each type
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }

    const dict = {};
    for (let type in TYPE_CHART[this.gen.num]) {
      dict[type] = 0;
      for (let i = sIndx; i < eIndx; i++) {
        let x = Number.MIN_SAFE_INTEGER;
        for (let j in this.pkmnlist[i].types) {
          const effectiveness =
            TYPE_CHART[this.gen.num][this.pkmnlist[i].types[j]][type];
          x = Math.max(x, effectiveness);
        }
        switch (method) {
          case 0: //average weight
            x /= eIndx - sIndx;
            break;

          case 1: //log base 2 of type matchup
            x = x === 0 ? -3 : Math.log(x) / Math.log(2);
            break;

          default:
            break;
        }
        dict[type] += x;
      }
    }
    return dict;
  }

  offensesH(sIndx, eIndx, method = 0) {
    //calculate the average potency of each attack on the team
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }
    const hVals = [{}, {}, {}];
    for (let type in TYPE_CHART[this.gen.num]) {
      if (type === "???") {
        continue;
      }
      const testDefender = new Pokemon(this.gen, "Mew", {
        overrides: { types: [type] }
      });

      const moveCategories = [0, 0]; //Special, Physical
      hVals[0][type] = 0;
      hVals[1][type] = 0;
      hVals[2][type] = 0;

      for (let i = sIndx; i < eIndx; i++) {
        //loop through pkmn on the team
        for (let j in this.pkmnlist[i].moves) {
          const tempMove = new Move(this.gen, this.pkmnlist[i].moves[j]);
          if (tempMove.category === "Status") {
            continue;
          }
          let x = calculate(
            this.gen,
            this.pkmnlist[i],
            testDefender,
            tempMove,
            new Field()
          );
          x =
            (typeof x.damage === "number" ? x.damage : x.damage[0]) /
            testDefender.stats.hp;

          const moveCategory = tempMove.category === "Special" ? 0 : 1;
          hVals[moveCategory][type] += x;
          moveCategories[moveCategory]++;
        }
      }

      switch (method) {
        case 0: //average
          hVals[0][type] /= moveCategories[0];
          hVals[1][type] /= moveCategories[1];
          break;
        default:
          break;
      }

      if (moveCategories[0] === 0) {
        delete hVals[0][type];
      } else {
        hVals[2][type] += hVals[0][type];
      }
      if (moveCategories[1] === 0) {
        delete hVals[1][type];
      } else {
        hVals[2][type] += hVals[1][type];
      }

      if (moveCategories[0] > 0 && moveCategories[1] > 0) {
        hVals[2][type] *= 0.5;
      }
    }
    return hVals;
  }

  offensesHStdDev(sIndx, eIndx, method = 0) {
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }
    const hVals = this.offensesH(sIndx, eIndx, method);
    const stdDevs = [{}, {}, {}];

    for (let type in TYPE_CHART[this.gen.num]) {
      if (type === "???") {
        continue;
      }
      const testDefender = new Pokemon(this.gen, "Mew", {
        overrides: { types: [type] }
      });

      const moveCategories = [0, 0]; //Special, Physical
      stdDevs[0][type] = 0;
      stdDevs[1][type] = 0;
      stdDevs[2][type] = 0;

      for (let i = sIndx; i < eIndx; i++) {
        //loop through pkmn on the team
        for (let j in this.pkmnlist[i].moves) {
          const tempMove = new Move(this.gen, this.pkmnlist[i].moves[j]);
          if (tempMove.category === "Status") {
            continue;
          }
          let x = calculate(
            this.gen,
            this.pkmnlist[i],
            testDefender,
            tempMove,
            new Field()
          );
          x =
            (typeof x.damage === "number" ? x.damage : x.damage[0]) /
            testDefender.stats.hp;

          const moveCategory = tempMove.category === "Special" ? 0 : 1;
          stdDevs[moveCategory][type] += (x - hVals[moveCategory][type]) ** 2;
          stdDevs[2][type] += (x - hVals[moveCategory][type]) ** 2;
          moveCategories[moveCategory]++;
        }
      }

      switch (method) {
        case 0: //average
          break;
        default:
          break;
      }
      stdDevs[0][type] = (stdDevs[0][type] / moveCategories[0]) ** 0.5;
      stdDevs[1][type] = (stdDevs[1][type] / moveCategories[1]) ** 0.5;
      stdDevs[2][type] =
        (stdDevs[2][type] / (moveCategories[0] + moveCategories[1])) ** 0.5;

      if (moveCategories[0] === 0) {
        delete stdDevs[0][type];
      }
      if (moveCategories[1] === 0) {
        delete stdDevs[1][type];
      }
    }
    return stdDevs;
  }

  typeWeakH(sIndx, eIndx, method = 0) {
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }
    const dict = {};
    for (let type in TYPE_CHART[this.gen.num]) {
      dict[type] = 0;
      for (let i = sIndx; i < eIndx; i++) {
        let x = getTypeEffectiveness(type, this.pkmnlist[i]);
        switch (method) {
          case 0: //average weight
            x = -x / (eIndx - sIndx);
            break;

          case 1: //negative log base 2 of type matchup
            x = x === 0 ? 3 : -Math.log(x) / Math.log(2);
            break;

          default:
            break;
        }
        dict[type] += x;
      }
    }
    return dict;
  }

  typeWeakHStDevs(sIndx, eIndx, method = 0) {
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }
    const dict = {};
    const weakHVals = this.typeWeakH(sIndx, eIndx, method);
    for (let type in TYPE_CHART[this.gen.num]) {
      dict[type] = 0;
      for (let i = sIndx; i < eIndx; i++) {
        let x = getTypeEffectiveness(type, this.pkmnlist[i]);
        switch (method) {
          case 0: //average weight
            x = -x;
            break;

          case 1: //negative log base 2 of type matchup
            x = x === 0 ? 3 : -Math.log(x) / Math.log(2);
            break;

          default:
            break;
        }
        dict[type] += (weakHVals[type] - x) ** 2;
      }
      dict[type] = Math.sqrt(dict[type]);
    }
    return dict;
  }

  wTypeWeakH(sIndx, eIndx, method = 0) {
    //returns a dictionary of how weak a team is to each type on the special side, physical side, and all-around
    //weights are calculated from the typeWeights script
    const hValClone = this.typeWeakH(sIndx, eIndx, method);
    delete hValClone["???"];
    const hVals = [
      JSON.parse(JSON.stringify(hValClone)),
      JSON.parse(JSON.stringify(hValClone)),
      JSON.parse(JSON.stringify(hValClone))
    ]; //special, physical, all-around
    const numTypes = Object.keys(TYPE_CHART[this.gen.num]).length - 1;
    const numSpecial = this.gen.num > 3 ? numTypes : Math.floor(numTypes / 2);
    const numPhysical = this.gen.num > 3 ? numTypes : numSpecial + 1;
    for (let type in TYPE_CHART[this.gen.num]) {
      if (type === "???") {
        continue;
      }
      if (this.gen.num > 3) {
        hVals[0][type] *=
          typeWeights[this.gen.num].Special[type].wtotal * numTypes;
        hVals[1][type] *=
          typeWeights[this.gen.num].Physical[type].wtotal * numTypes;
        hVals[2][type] =
          hVals[0][type] * typeWeights[this.gen.num].Special.wtotal +
          hVals[1][type] * typeWeights[this.gen.num].Physical.wtotal;
      } else {
        if (type in typeWeights[this.gen.num].Special) {
          hVals[0][type] *=
            typeWeights[this.gen.num].Special[type].wtotal * numSpecial;
          delete hVals[1][type];
          hVals[2][type] =
            hVals[0][type] * typeWeights[this.gen.num].Special.wtotal;
        } else {
          delete hVals[0][type];
          hVals[1][type] *=
            typeWeights[this.gen.num].Physical[type].wtotal * numPhysical;
          hVals[2][type] =
            hVals[1][type] * typeWeights[this.gen.num].Physical.wtotal;
        }
      }
    }
    return hVals;
  }

  defensesH(sIndx, eIndx, method = 0) {
    //returns a list of 3 dictionaries of how well a team can defend against each given type
    //1st is special, 2nd is physical, 3rd is overall
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }
    const hVals = [{}, {}, {}];
    for (let type in TYPE_CHART[this.gen.num]) {
      if (type === "???") {
        continue;
      }
      const testAttacker = new Pokemon(this.gen, "Mew", {
        overrides: { types: [type] }
      });
      if (this.gen.num > 3 || gen3TypeCategorization[type] === "Special") {
        hVals[0][type] = 0;
      }
      if (this.gen.num > 3 || gen3TypeCategorization[type] === "Physical") {
        hVals[1][type] = 0;
      }

      for (let i = sIndx; i < eIndx; i++) {
        let v1 = undefined;
        let v2 = undefined;
        if (type in hVals[0]) {
          const testMove = new Move(this.gen, "Egg Bomb", {
            overrides: { type: type, category: "Special" }
          });
          const calc = calculate(
            this.gen,
            testAttacker,
            this.pkmnlist[i],
            testMove,
            new Field()
          );
          v1 =
            (typeof calc.damage === "number"
              ? calc.damage
              : calc.damage[calc.damage.length - 1]) /
            this.pkmnlist[i].stats.hp;
        }
        if (type in hVals[1]) {
          const testMove = new Move(this.gen, "Egg Bomb", {
            overrides: { type: type, category: "Physical" }
          });
          const calc = calculate(
            this.gen,
            testAttacker,
            this.pkmnlist[i],
            testMove,
            new Field()
          );
          v2 =
            (typeof calc.damage === "number"
              ? calc.damage
              : calc.damage[calc.damage.length - 1]) /
            this.pkmnlist[i].stats.hp;
        }
        switch (method) {
          case 0:
            v1 = -v1 / (eIndx - sIndx);
            v2 = -v2 / (eIndx - sIndx);
            break;

          default:
            break;
        }
        if (!isNaN(v1)) {
          hVals[0][type] += v1;
        }
        if (!isNaN(v2)) {
          hVals[1][type] += v2;
        }
      }

      if (!(type in hVals[1])) {
        hVals[2][type] = hVals[0][type];
      } else if (!(type in hVals[0])) {
        hVals[2][type] = hVals[1][type];
      } else {
        hVals[2][type] = 0.5 * (hVals[0][type] + hVals[1][type]);
      }
    }
    return hVals;
  }

  defensesHStdDev(sIndx, eIndx, method = 0) {
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }
    const hVals = this.defensesH(sIndx, eIndx, method);
    const stdDevs = [{}, {}, {}];
    for (let type in TYPE_CHART[this.gen.num]) {
      if (type === "???") {
        continue;
      }
      if (this.gen.num > 3 || gen3TypeCategorization[type] === "Special") {
        stdDevs[0][type] = 0;
      }
      if (this.gen.num > 3 || gen3TypeCategorization[type] === "Physical") {
        stdDevs[1][type] = 0;
      }
      stdDevs[2][type] = 0;
      const testAttacker = new Pokemon(this.gen, "Mew", {
        overrides: { types: [type] }
      });

      for (let i = sIndx; i < eIndx; i++) {
        let v1 = undefined;
        let v2 = undefined;
        if (type in hVals[0]) {
          const testMove = new Move(this.gen, "Egg Bomb", {
            overrides: { type: type, category: "Special" }
          });
          const calc = calculate(
            this.gen,
            testAttacker,
            this.pkmnlist[i],
            testMove,
            new Field()
          );
          v1 =
            (typeof calc.damage === "number"
              ? calc.damage
              : calc.damage[calc.damage.length - 1]) /
            this.pkmnlist[i].stats.hp;
        }
        if (type in hVals[1]) {
          const testMove = new Move(this.gen, "Egg Bomb", {
            overrides: { type: type, category: "Physical" }
          });
          const calc = calculate(
            this.gen,
            testAttacker,
            this.pkmnlist[i],
            testMove,
            new Field()
          );
          v2 =
            (typeof calc.damage === "number"
              ? calc.damage
              : calc.damage[calc.damage.length - 1]) /
            this.pkmnlist[i].stats.hp;
        }
        switch (method) {
          case 0:
            //std dev
            v1 = -v1;
            v2 = -v2;
            break;

          default:
            break;
        }
        if (!isNaN(v1)) {
          stdDevs[0][type] += (hVals[0][type] - v1) ** 2;
        }
        if (!isNaN(v2)) {
          stdDevs[1][type] += (hVals[1][type] - v2) ** 2;
        }

        if (!(type in hVals[1])) {
          stdDevs[2][type] += (hVals[0][type] - v1) ** 2;
        } else if (!(type in hVals[0])) {
          stdDevs[2][type] += (hVals[1][type] - v2) ** 2;
        } else {
          stdDevs[2][type] += (hVals[2][type] - 0.5 * (v1 + v2)) ** 2;
        }
      }
      if (type in stdDevs[0]) {
        stdDevs[0][type] = stdDevs[0][type] ** 0.5;
      }
      if (type in stdDevs[1]) {
        stdDevs[1][type] = stdDevs[1][type] ** 0.5;
      }
      stdDevs[2][type] = stdDevs[2][type] ** 0.5;
    }
    return stdDevs;
  }

  wDefensesH(sIndx, eIndx, method = 0) {
    const hVals = this.defensesH(sIndx, eIndx, method);
    applyWeightsTypeDictList(hVals, this.gen, method);
    return hVals;
  }

  wDefensesHStdDev(sIndx, eIndx, method = 0) {
    const stdDevs = this.defensesHStdDev(sIndx, eIndx, method);
    applyWeightsTypeDictList(stdDevs, this.gen, method);
    return stdDevs;
  }

  hazardsH(sIndx, eIndx) {
    //for damaging hazards, a value of 1 represents 1/8 dmg
    // for non damaging, it represents being affected, and a negative value represents gaining a benefit from the hazard
    if (sIndx === undefined) {
      sIndx = 0;
    }

    if (eIndx === undefined) {
      eIndx = this.pkmnlist.length;
    }
    const hVals = {};
    for (let hazard in hazards) {
      if (this.gen.num >= hazards[hazard]) {
        hVals[hazard] = 0;
      }
    }

    for (let i = sIndx; i < eIndx; i++) {
      let grounded = !(
        this.pkmnlist[i].types.includes("Flying") ||
        this.pkmnlist[i].hasAbility("Levitate")
      );
      let unaffected = this.pkmnlist[i].item === "Heavy-Duty Boots";
      for (let hazard in hVals) {
        let v = 0;
        switch (hazard) {
          case "Stealth Rock":
            v = -getTypeEffectiveness("Rock", this.pkmnlist[i]);
            break;
          case "Spikes":
            console.log(grounded, this.pkmnlist[i].name);
            if (grounded) {
              v = -1;
            }
            break;
          case "Toxic Spikes":
            if (this.pkmnlist[i].types.includes("Poison") && grounded) {
              v = 1;
            } else if (this.pkmnlist[i].hasAbility("Poison Heal", "Guts")) {
              v = 0.5;
            } else if (
              grounded &&
              !this.pkmnlist[i].hasAbility("Immunity") &&
              getTypeEffectiveness("Poison", this.pkmnlist[i]) !== 0
            ) {
              v = -1;
            }
            break;
          case "Sticky Web":
            if (grounded) {
              v = -1;
              if (
                this.pkmnlist[i].hasAbility(
                  "Contrary",
                  "Competitive",
                  "Defiant"
                )
              ) {
                v = 0.5;
              }
            }
            break;
          default:
            break;
        }
        if (unaffected) {
          v = Math.max(v, 0);
        }
        v /= eIndx - sIndx;
        hVals[hazard] += v;
      }
    }
    return hVals;
  }
}

export function parseTeamTxt(text, gen, tier) {
  const inlist = text.trim().split(/\n *\n/);
  const t = new Team(gen, tier);
  for (let i in inlist) {
    const pkmndata = Sets.importSet(inlist[i]);
    t.pkmnlist.push(
      new Pokemon(t.gen, checkExeptions(pkmndata.species), pkmndata)
    );
  }
  return t;
}

/*
const t = parseTeamTxt(
  `



  `,
  8,
  "gen8ou"
);
*/
//console.log(t.stabCovgH());
//console.log(t.naiveStabCovgH());

/*
console.log(t.typeWeakH());
console.log(t.typeWeakHStDevs());
console.log(t.typeWeakH(undefined, undefined, 1));
console.log(t.typeWeakH());
console.log(t.typeWeakHStDevs());
console.log(t.wTypeWeakH(undefined, undefined, 1));
*/

/*
console.log("defensesH");
console.log("stdDevsH");
console.log("defensesH");
console.log(t.defensesH());
console.log(t.defensesHStdDev());
console.log("defensesH");
console.log(t.defensesH());
console.log("stdDevsH");
console.log(t.defensesHStdDev());
console.log("wDefensesH");
console.log(t.wDefensesH());
console.log("wStdDevsH");
console.log(t.wDefensesHStdDev());
console.log(t.hazardsH());
console.log(t.offensesH());
console.log(t.offensesHStdDev());
*/
