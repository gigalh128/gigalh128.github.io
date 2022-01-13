# Pokemon Team Heuristics Site

This repository contains the code for both the website and the heuristics library. The library can be found in `pkmn-h`. It has its own `package.json`.

## Setting up this site yourself

Simply run `npm install` and then `npm run build`

## Heuristic methods

**Average** - Take the average of heuristic values calculated for each pokemon

**Log** - Take the log of each heuristic value and them sum them all up

## Heuristic Interpretations/Explanations

The heuristics would be useless if you couldn't understand them, so these interpretations are here to lay out exactly how they work.

Remember that HIGHER is BETTER in all cases. 

* **stabCovgH** calculates the average type effectiveness of each pokemon's best STAB against each given type
* **naiveStabCovgH** calculates the average type effectiveness of each pokemon's STAB against each given type
* **typeWeakH** calculates the average weakness of all the types against each pokemon
* **typeWeakHStdDevs** calculates the standard deviation of typeWeakH
* **wTypeWeakH** calculates the average weakness against each type, weighted by the viability weights and average base power of each type. 
* **defensesH** calculates the average damage taken from a 100 base power move of each given type executed by Mew without STAB as a proxy to see how well the team defends against each type
* **defensesHStdDev** calculates the standard deviation of defensesH
* **wDefensesH** calculates defensesH weighted by the the average base power of each move, and the viability weights of each type
* **wDefensesHStdDev** calculates the standard deviation of wDefensesH
* **hazardsH** calculates the average impact of each hazard on the team. 0 would represent that the hazard has no impact, and values above 1 represent that the hazard is either beneficial or have their effect reduced by given pokemon. For damaging hazards, "-1" represents that the pokemon is neutrally impacted.
