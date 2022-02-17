---
permalink: /index.html
---

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

Heuristic weights come from the pokemon "usage" statistics at smogon.com/stats. It is important for interpretation to understand that the "usage" statistics do not represent the probability that you see a pokemon. Rather, they represent the proportional relevancy of a given pokemon since there could be a large number of lowly weighted pokemon that make up 50% "usage" alongside a small number of highly weighted pokemon that also make up 50% "usage".

* **stabCovgH** calculates the average type effectiveness of each pokemon's STAB against each given type
* **bestStabCovgH** calculates the average type effectiveness of each pokemon's best STAB against each given type
* **offensesH** calculates the average damage output of each pokemon's attack against a mew with each given type
* **offensesHStdDev** calculates the standard deviation of offensesH
* **typeWeakH** calculates the average weakness of all the types against each pokemon
* **typeWeakHStdDevs** calculates the standard deviation of typeWeakH
* **wTypeWeakH** calculates the average weakness against each type, weighted by the viability weights and average base power of each type. 
* **defensesH** calculates the average damage taken from a 100 base power move of each given type executed by Mew with STAB as a proxy to see how well the team defends against each type
* **defensesHStdDev** calculates the standard deviation of defensesH
* **wDefensesH** calculates defensesH weighted by the the average base power of each move, and the viability weights of each type
* **wDefensesHStdDev** calculates the standard deviation of wDefensesH
* **hazardsH** calculates the average impact of each hazard on the team. 0 would represent that the hazard has no impact, and values above 1 represent that the hazard is either beneficial or have their effect reduced by given pokemon. For damaging hazards, "-1" represents that the pokemon is neutrally impacted.
