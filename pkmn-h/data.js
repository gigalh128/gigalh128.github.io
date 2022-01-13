const hazards = {
  Spikes: 2,
  "Stealth Rock": 4,
  "Toxic Spikes": 4,
  "Sticky Web": 6
};
//earliest appearance of each hazard
const gen3TypeCategorization = {
  Normal: "Physical",
  Fighting: "Physical",
  Poison: "Physical",
  Ground: "Physical",
  Flying: "Physical",
  Bug: "Physical",
  Rock: "Physical",
  Ghost: "Physical",
  Steel: "Physical",
  Fire: "Special",
  Water: "Special",
  Electric: "Special",
  Grass: "Special",
  Ice: "Special",
  Psychic: "Special",
  Dragon: "Special",
  Dark: "Special"
};
const typeWeights = [];
typeWeights.push({});
//gen 1
typeWeights.push({});
//gen 2
typeWeights.push({});
//gen 3
typeWeights.push({});
// gen 4
typeWeights.push({});
// gen 5
typeWeights.push({});
//gen 6
typeWeights.push({});
//gen 7
typeWeights.push({});
// gen 8, based on OU - ZU from 2021-11 usage stats
typeWeights.push({
  Special: {
    rlvncytotal: 0.399405044050683,
    wtotal: 0.40207450823261937,
    Normal: {
      rlvncytotal: 0.03287764160145729,
      wtotal: 0.03277433095458722,
      "Tri Attack": {
        wtotal: 0.07715739992158702,
        rlvncytotal: 0.08273652382390186
      },
      Swift: {
        wtotal: 0.014537949274103729,
        rlvncytotal: 0.020929884023353582
      },
      "Hyper Beam": {
        wtotal: 0.020215433555229256,
        rlvncytotal: 0.012238021172123234
      },
      Uproar: {
        wtotal: 0.00011177361457681459,
        rlvncytotal: 0.00008719891414422939
      },
      "Weather Ball": {
        wtotal: 0.2241132815411285,
        rlvncytotal: 0.31290042819863473
      },
      Snore: {
        wtotal: 0.005809300042138392,
        rlvncytotal: 0.010566310246014107
      },
      "Hyper Voice": {
        wtotal: 0.40690542681919034,
        rlvncytotal: 0.38370533712479077
      },
      "Echoed Voice": {
        wtotal: 0.0010100855728474517,
        rlvncytotal: 0.002336792009320375
      },
      "Terrain Pulse": {
        wtotal: 0.002612757292917306,
        rlvncytotal: 0.004648053779308906
      },
      Boomburst: {
        wtotal: 0.24713982390500483,
        rlvncytotal: 0.16948236270989428
      },
      Round: {
        wtotal: 0.0003867684612762596,
        rlvncytotal: 0.00036908799851376493
      }
    },
    Grass: {
      rlvncytotal: 0.06286162824879166,
      wtotal: 0.0638426737207078,
      "Solar Beam": {
        wtotal: 0.07546841410969726,
        rlvncytotal: 0.05454666757593192
      },
      "Giga Drain": {
        wtotal: 0.45241799847878306,
        rlvncytotal: 0.5241025842737558
      },
      Absorb: {
        wtotal: 1.2876236242232589e-9,
        rlvncytotal: 5.435529864606067e-9
      },
      "Energy Ball": {
        wtotal: 0.2226474658131296,
        rlvncytotal: 0.21923352189896494
      },
      "Mega Drain": {
        wtotal: 0.000002296649771319506,
        rlvncytotal: 0.000004802582922873246
      },
      "Leaf Storm": {
        wtotal: 0.23063352258604636,
        rlvncytotal: 0.18266248506259863
      },
      "Magical Leaf": {
        wtotal: 0.00004773389066665896,
        rlvncytotal: 0.00005198818195937614
      },
      "Petal Dance": {
        wtotal: 0.0026831812845817,
        rlvncytotal: 0.0020034050468190935
      },
      "Frenzy Plant": {
        wtotal: 0.0000054388491996484755,
        rlvncytotal: 0.0000029733253086703303
      },
      "Grass Pledge": {
        wtotal: 0.009776181180879287,
        rlvncytotal: 0.010561821149277886
      },
      "Leaf Tornado": {
        wtotal: 5.450838579051718e-7,
        rlvncytotal: 7.234433882396724e-7
      },
      "Apple Acid": {
        wtotal: 0.006317220785763305,
        rlvncytotal: 0.006829022023542956
      }
    },
    Fire: {
      rlvncytotal: 0.11553528745554774,
      wtotal: 0.12212812662983208,
      "Heat Wave": {
        wtotal: 0.10059989466706604,
        rlvncytotal: 0.10209367981884176
      },
      Flamethrower: {
        wtotal: 0.4039511693386053,
        rlvncytotal: 0.42940441340822877
      },
      "Fire Blast": {
        wtotal: 0.20461572250879811,
        rlvncytotal: 0.17804777937829588
      },
      "Fire Spin": {
        wtotal: 0.003117385103927788,
        rlvncytotal: 0.008494010765272028
      },
      "Fiery Dance": {
        wtotal: 0.0014309965039232674,
        rlvncytotal: 0.0017618912708937098
      },
      Overheat: {
        wtotal: 0.11330760961005625,
        rlvncytotal: 0.08363850358124403
      },
      "Mystical Fire": {
        wtotal: 0.0888513538952888,
        rlvncytotal: 0.11323679076413509
      },
      Incinerate: {
        wtotal: 0.000005923009824946026,
        rlvncytotal: 0.000009511916952233856
      },
      "Burning Jealousy": {
        wtotal: 0.011320048030906181,
        rlvncytotal: 0.015227887350471276
      },
      "Lava Plume": {
        wtotal: 0.021849795649705534,
        rlvncytotal: 0.02622908047435584
      },
      "Fire Pledge": {
        wtotal: 3.927048894433037e-11,
        rlvncytotal: 4.833947433418574e-11
      },
      "Blast Burn": {
        wtotal: 0.000002600067684441098,
        rlvncytotal: 0.0000017008452022371285
      },
      "Burn Up": {
        wtotal: 0.004144525007916878,
        rlvncytotal: 0.003044256252373749
      },
      "Fusion Flare": {
        wtotal: 0.000001060282436654637,
        rlvncytotal: 0.000001044364463338417
      },
      "Searing Shot": {
        wtotal: 0.000012549853888968007,
        rlvncytotal: 0.0000123614434877193
      },
      Inferno: {
        wtotal: 0.000006214877271726664,
        rlvncytotal: 0.0000058131982460927665
      },
      "Blue Flare": {
        wtotal: 0.0009425109603106188,
        rlvncytotal: 0.0007141239115067084
      },
      "Mind Blown": {
        wtotal: 0.003280212917305998,
        rlvncytotal: 0.0021539781505933954
      },
      Ember: {
        wtotal: 5.754147948665362e-11,
        rlvncytotal: 1.416940295016692e-10
      },
      "Shell Trap": {
        wtotal: 0.000500963949521331,
        rlvncytotal: 0.00032872781745053506
      },
      Eruption: {
        wtotal: 0.017370015397805784,
        rlvncytotal: 0.011275658421676629
      },
      "Magma Storm": {
        wtotal: 0.024689448270943787,
        rlvncytotal: 0.0243187866762756
      }
    },
    Water: {
      rlvncytotal: 0.10268214144623175,
      wtotal: 0.10016499909053139,
      Surf: { wtotal: 0.1824232793360971, rlvncytotal: 0.17848106724461055 },
      "Hydro Pump": {
        wtotal: 0.17284693499986165,
        rlvncytotal: 0.13811551156269938
      },
      "Water Pulse": {
        wtotal: 0.00383109726281406,
        rlvncytotal: 0.005601453111505563
      },
      Scald: { wtotal: 0.5343324685138776, rlvncytotal: 0.5893523147814373 },
      Whirlpool: {
        wtotal: 0.005861787059394701,
        rlvncytotal: 0.014720070643456193
      },
      Brine: {
        wtotal: 0.00016844246096411967,
        rlvncytotal: 0.00023078026736743013
      },
      "Muddy Water": {
        wtotal: 0.0000266689550795761,
        rlvncytotal: 0.00002700405409588809
      },
      "Water Gun": {
        wtotal: 3.4113462776383654e-8,
        rlvncytotal: 7.341991501972785e-8
      },
      "Bubble Beam": {
        wtotal: 2.222437882582382e-8,
        rlvncytotal: 2.972047236295178e-8
      },
      "Water Pledge": {
        wtotal: 1.6950196122218375e-11,
        rlvncytotal: 1.823857532827629e-11
      },
      "Hydro Cannon": {
        wtotal: 0.000003281470883617344,
        rlvncytotal: 0.0000018897082352080072
      },
      "Water Spout": {
        wtotal: 0.04533298830862639,
        rlvncytotal: 0.028100915359404392
      },
      Octazooka: {
        wtotal: 6.582833299128353e-7,
        rlvncytotal: 8.851037774840846e-7
      },
      "Sparkling Aria": {
        wtotal: 0.0020092848312042405,
        rlvncytotal: 0.0019290726367183061
      },
      "Steam Eruption": {
        wtotal: 0.050668836544909585,
        rlvncytotal: 0.040260372709645595
      },
      "Water Shuriken": {
        wtotal: 0.0004958280390588466,
        rlvncytotal: 0.0009761769646420015
      },
      "Snipe Shot": {
        wtotal: 0.0019983875791070257,
        rlvncytotal: 0.002202382693778376
      }
    },
    Electric: {
      rlvncytotal: 0.12398538926445367,
      wtotal: 0.11000391946867732,
      "Shock Wave": {
        wtotal: 0.0023502768628925353,
        rlvncytotal: 0.003177594018633726
      },
      "Charge Beam": {
        wtotal: 0.0015373203516986054,
        rlvncytotal: 0.0024403540068370067
      },
      Thunder: {
        wtotal: 0.0675365781641774,
        rlvncytotal: 0.050321960349211214
      },
      Electroweb: {
        wtotal: 0.00002521775114829682,
        rlvncytotal: 0.00003784056391246035
      },
      Thunderbolt: {
        wtotal: 0.4447887976116299,
        rlvncytotal: 0.398636856204938
      },
      "Thunder Shock": {
        wtotal: 2.8769049717927637e-9,
        rlvncytotal: 6.099298660312163e-9
      },
      Discharge: {
        wtotal: 0.037031711024288025,
        rlvncytotal: 0.0374422270037274
      },
      "Zap Cannon": {
        wtotal: 0.00008174240785928881,
        rlvncytotal: 0.00005462653997067714
      },
      "Rising Voltage": {
        wtotal: 0.012357107267627789,
        rlvncytotal: 0.014117635388702561
      },
      "Volt Switch": {
        wtotal: 0.41171261138683246,
        rlvncytotal: 0.47129411387898335
      },
      Overdrive: {
        wtotal: 0.021262100037465814,
        rlvncytotal: 0.0211194956580882
      },
      "Parabolic Charge": {
        wtotal: 0.000002943922974378723,
        rlvncytotal: 0.000003617759683584958
      },
      "Thunder Cage": {
        wtotal: 0.001313590334500413,
        rlvncytotal: 0.001353672528013122
      }
    },
    Ice: {
      rlvncytotal: 0.06789813606417532,
      wtotal: 0.06456383734180676,
      Blizzard: {
        wtotal: 0.15900081517564355,
        rlvncytotal: 0.1258891525022085
      },
      "Ice Beam": {
        wtotal: 0.618181147584575,
        rlvncytotal: 0.5892068615638202
      },
      "Icy Wind": {
        wtotal: 0.033404859204024855,
        rlvncytotal: 0.05245359044361896
      },
      "Freeze-Dry": {
        wtotal: 0.1810979435419761,
        rlvncytotal: 0.2210840908533486
      },
      "Frost Breath": {
        wtotal: 0.004811017452510457,
        rlvncytotal: 0.006874603010144624
      },
      Glaciate: {
        wtotal: 0.0034948086437662103,
        rlvncytotal: 0.004479375665181707
      },
      "Aurora Beam": {
        wtotal: 0.000009408397503688885,
        rlvncytotal: 0.000012325961677552251
      }
    },
    Flying: {
      rlvncytotal: 0.0395725717806198,
      wtotal: 0.04255219868175946,
      "Air Slash": {
        wtotal: 0.2962096031654133,
        rlvncytotal: 0.36004372028460924
      },
      Hurricane: { wtotal: 0.701515210334176, rlvncytotal: 0.636196330758486 },
      "Air Cutter": {
        wtotal: 0.002253955811111439,
        rlvncytotal: 0.0037037982142983997
      },
      Gust: {
        wtotal: 0.000021230689299120764,
        rlvncytotal: 0.00005615074260621699
      }
    },
    Bug: {
      rlvncytotal: 0.012962191165079134,
      wtotal: 0.011381418548402664,
      "Struggle Bug": {
        wtotal: 0.0004218155165496272,
        rlvncytotal: 0.0005597858119481258
      },
      "Bug Buzz": {
        wtotal: 0.7196515707661163,
        rlvncytotal: 0.5522362688412512
      },
      Infestation: {
        wtotal: 0.10989651756948544,
        rlvncytotal: 0.311274076234062
      },
      "Pollen Puff": {
        wtotal: 0.17003009614784864,
        rlvncytotal: 0.13592986911273863
      }
    },
    Poison: {
      rlvncytotal: 0.0628626130699687,
      wtotal: 0.06250801361648307,
      "Sludge Bomb": {
        wtotal: 0.7529412942018242,
        rlvncytotal: 0.7534174347664366
      },
      Belch: {
        wtotal: 0.0006376171150078778,
        rlvncytotal: 0.00047860402173600377
      },
      Sludge: {
        wtotal: 6.761810985184963e-7,
        rlvncytotal: 9.297773410882718e-7
      },
      "Clear Smog": {
        wtotal: 0.010815873459153155,
        rlvncytotal: 0.019483502655114792
      },
      Smog: {
        wtotal: 6.318016959580496e-9,
        rlvncytotal: 1.8910002393154676e-8
      },
      "Sludge Wave": {
        wtotal: 0.22940236186121546,
        rlvncytotal: 0.2182501657520932
      },
      Venoshock: {
        wtotal: 0.0004296519986120625,
        rlvncytotal: 0.000595237162472817
      },
      "Acid Spray": {
        wtotal: 0.0015650528908129646,
        rlvncytotal: 0.0035396980034809464
      },
      Acid: {
        wtotal: 6.261835868039054e-8,
        rlvncytotal: 1.3822342582159656e-7
      },
      "Shell Side Arm": {
        wtotal: 0.004207403355900197,
        rlvncytotal: 0.004234270727896325
      }
    },
    Ground: {
      rlvncytotal: 0.03759687288208577,
      wtotal: 0.03656009537678743,
      "Mud-Slap": {
        wtotal: 0.0006832905984675466,
        rlvncytotal: 0.0029835455103978566
      },
      "Earth Power": {
        wtotal: 0.921274958143716,
        rlvncytotal: 0.9013354932296881
      },
      "Scorching Sands": {
        wtotal: 0.07306850414720703,
        rlvncytotal: 0.08817239326703459
      },
      "Mud Shot": {
        wtotal: 0.004973247110609522,
        rlvncytotal: 0.007508567992879573
      }
    },
    Rock: {
      rlvncytotal: 0.01868965898932575,
      wtotal: 0.026514210645022285,
      "Meteor Beam": {
        wtotal: 0.7318928408001732,
        rlvncytotal: 0.5520282534364702
      },
      "Ancient Power": {
        wtotal: 0.08010043340596135,
        rlvncytotal: 0.17123861735150883
      },
      "Power Gem": {
        wtotal: 0.1880067257938654,
        rlvncytotal: 0.27673312921202103
      }
    },
    Fighting: {
      rlvncytotal: 0.03345178822102739,
      wtotal: 0.04172878148970395,
      "Focus Blast": {
        wtotal: 0.9239397832479866,
        rlvncytotal: 0.8855388834121316
      },
      "Vacuum Wave": {
        wtotal: 0.008007287179046977,
        rlvncytotal: 0.022622181419201748
      },
      "Aura Sphere": {
        wtotal: 0.0680529295729664,
        rlvncytotal: 0.09183893516866673
      }
    },
    Psychic: {
      rlvncytotal: 0.09038082069995766,
      wtotal: 0.0889203532577378,
      Psychic: { wtotal: 0.5099058313358367, rlvncytotal: 0.5023487311564641 },
      "Dream Eater": {
        wtotal: 0.000023441790874716582,
        rlvncytotal: 0.000020375914639093454
      },
      "Expanding Force": {
        wtotal: 0.046243614914781135,
        rlvncytotal: 0.05039342993879855
      },
      Extrasensory: {
        wtotal: 0.012698376325735887,
        rlvncytotal: 0.013604075248161027
      },
      "Future Sight": {
        wtotal: 0.3143859749221276,
        rlvncytotal: 0.23639989726909305
      },
      "Stored Power": {
        wtotal: 0.025545882635794565,
        rlvncytotal: 0.11183127249758662
      },
      Confusion: {
        wtotal: 0.0000027480335727416417,
        rlvncytotal: 0.0000044483808107697904
      },
      "Freezing Glare": {
        wtotal: 0.04123595388383902,
        rlvncytotal: 0.040707480291135335
      },
      "Mist Ball": {
        wtotal: 1.5157270328896605e-8,
        rlvncytotal: 2.0683260324723217e-8
      },
      "Luster Purge": {
        wtotal: 3.804181329567286e-8,
        rlvncytotal: 5.1910978068317985e-8
      },
      Psybeam: {
        wtotal: 0.00032518166902998014,
        rlvncytotal: 0.0004189019243116018
      },
      "Eerie Spell": {
        wtotal: 0.00006835301065761149,
        rlvncytotal: 0.00008161381946690967
      },
      "Photon Geyser": {
        wtotal: 0.049328429294404647,
        rlvncytotal: 0.04405594505534083
      },
      "Prismatic Laser": {
        wtotal: 0.00023615898426173034,
        rlvncytotal: 0.00013375590995375294
      }
    },
    Ghost: {
      rlvncytotal: 0.054502024329344985,
      wtotal: 0.04734585038733335,
      "Shadow Ball": {
        wtotal: 0.9138971364782301,
        rlvncytotal: 0.8963363088396186
      },
      Hex: { wtotal: 0.08610286352176992, rlvncytotal: 0.10366369116038171 }
    },
    Dragon: {
      rlvncytotal: 0.03217895174586316,
      wtotal: 0.043182270765001356,
      "Dragon Pulse": {
        wtotal: 0.13299513079270564,
        rlvncytotal: 0.18049686740152254
      },
      "Dragon Breath": {
        wtotal: 0.00008157286232080521,
        rlvncytotal: 0.00016873370650737998
      },
      "Draco Meteor": {
        wtotal: 0.7802844623817502,
        rlvncytotal: 0.7326339175632853
      },
      Twister: {
        wtotal: 1.2935926692170584e-7,
        rlvncytotal: 4.1323311247986684e-7
      },
      "Clanging Scales": {
        wtotal: 0.052620945990096465,
        rlvncytotal: 0.058650619124752
      },
      "Dragon Energy": {
        wtotal: 0.03401688120635177,
        rlvncytotal: 0.028048375537109267
      },
      "Core Enforcer": {
        wtotal: 8.774075081707111e-7,
        rlvncytotal: 0.0000010734337109920794
      }
    },
    Dark: {
      rlvncytotal: 0.01999357882178372,
      wtotal: 0.0179681854737145,
      "Dark Pulse": {
        wtotal: 0.7915380326630896,
        rlvncytotal: 0.8005943640718886
      },
      Snarl: { wtotal: 0.03547693171391295, rlvncytotal: 0.035689041176120276 },
      "Fiery Wrath": {
        wtotal: 0.1701942195039643,
        rlvncytotal: 0.16107177407968276
      },
      "Night Daze": {
        wtotal: 0.0027908161190329512,
        rlvncytotal: 0.002644820672308421
      }
    },
    Steel: {
      rlvncytotal: 0.01247076821757196,
      wtotal: 0.011942933165425561,
      "Steel Beam": {
        wtotal: 0.16458753423878728,
        rlvncytotal: 0.10386411884846204
      },
      "Flash Cannon": {
        wtotal: 0.8247038776606834,
        rlvncytotal: 0.8894523752355851
      },
      "Doom Desire": {
        wtotal: 0.010708588100529265,
        rlvncytotal: 0.00668350591595286
      }
    },
    Fairy: {
      rlvncytotal: 0.07949793599671498,
      wtotal: 0.0759178013864859,
      "Draining Kiss": {
        wtotal: 0.059781765203333295,
        rlvncytotal: 0.09964424134694891
      },
      "Dazzling Gleam": {
        wtotal: 0.3049091524910851,
        rlvncytotal: 0.32196292571394725
      },
      Moonblast: {
        wtotal: 0.5628785134001831,
        rlvncytotal: 0.5126393448465488
      },
      "Misty Explosion": {
        wtotal: 0.018826602530907146,
        rlvncytotal: 0.01565647024162416
      },
      "Strange Steam": {
        wtotal: 0.05358131209878742,
        rlvncytotal: 0.050048695675733085
      },
      "Disarming Voice": {
        wtotal: 0.000022654071101478346,
        rlvncytotal: 0.000048321715551844645
      },
      "Fairy Wind": {
        wtotal: 2.0460244792803132e-10,
        rlvncytotal: 4.596460325150299e-10
      }
    }
  },
  Physical: {
    rlvncytotal: 0.6005949559493167,
    wtotal: 0.5979254917673806,
    Normal: {
      rlvncytotal: 0.06479414583590237,
      wtotal: 0.06089448186263624,
      Facade: { wtotal: 0.14852232788836492, rlvncytotal: 0.09682699130994857 },
      "Last Resort": {
        wtotal: 0.0007988247692859731,
        rlvncytotal: 0.00043015594201351937
      },
      "Double-Edge": {
        wtotal: 0.03586009350937178,
        rlvncytotal: 0.02472331461685072
      },
      "Giga Impact": {
        wtotal: 0.005204287139275102,
        rlvncytotal: 0.003084433404786452
      },
      Explosion: {
        wtotal: 0.2693623503317535,
        rlvncytotal: 0.09581481847441652
      },
      "Self-Destruct": {
        wtotal: 0.0010565919429483196,
        rlvncytotal: 0.0004976604192040353
      },
      "Fake Out": {
        wtotal: 0.015237196482869402,
        rlvncytotal: 0.029993602788743773
      },
      "Extreme Speed": {
        wtotal: 0.06080290271616311,
        rlvncytotal: 0.06989742631749504
      },
      "Quick Attack": {
        wtotal: 0.014708207093231325,
        rlvncytotal: 0.028710739106445882
      },
      "Body Slam": {
        wtotal: 0.06829650991337081,
        rlvncytotal: 0.06895856329483142
      },
      "Skull Bash": {
        wtotal: 0.000002356712782108454,
        rlvncytotal: 0.0000015840989389761493
      },
      "Mega Punch": {
        wtotal: 0.0000012941907774710294,
        rlvncytotal: 0.000001507376264626251
      },
      "Mega Kick": {
        wtotal: 0.004563048526888841,
        rlvncytotal: 0.003351706481424144
      },
      Covet: {
        wtotal: 0.00019702818268153494,
        rlvncytotal: 0.0001602948030190303
      },
      Slash: {
        wtotal: 0.000038598576602990715,
        rlvncytotal: 0.000039353622549597174
      },
      Thrash: {
        wtotal: 0.001740498062692055,
        rlvncytotal: 0.0010459066258288975
      },
      "Take Down": {
        wtotal: 0.000006838433252063266,
        rlvncytotal: 0.0000062411549368355816
      },
      Retaliate: {
        wtotal: 0.005781542104263551,
        rlvncytotal: 0.0067763327678200536
      },
      Tackle: {
        wtotal: 1.395354187656046e-7,
        rlvncytotal: 3.272635725161579e-7
      },
      Bind: {
        wtotal: 0.000001428741038733085,
        rlvncytotal: 0.0000068051946482841725
      },
      Pound: {
        wtotal: 1.7112665131455546e-11,
        rlvncytotal: 4.0146920272737776e-11
      },
      "Double Hit": {
        wtotal: 6.904519573961649e-8,
        rlvncytotal: 6.230580209098924e-8
      },
      Wrap: {
        wtotal: 0.00001068526421772218,
        rlvncytotal: 0.000058006477454561456
      },
      Cut: {
        wtotal: 8.339442951039029e-10,
        rlvncytotal: 1.5651703516782682e-9
      },
      Strength: {
        wtotal: 0.0009818297006830208,
        rlvncytotal: 0.0008147684273501599
      },
      Headbutt: {
        wtotal: 0.00007904266000349952,
        rlvncytotal: 0.00007694104362556577
      },
      "Rapid Spin": {
        wtotal: 0.33855905772871236,
        rlvncytotal: 0.5486412988449234
      },
      "Tail Slap": {
        wtotal: 0.01464136940443737,
        rlvncytotal: 0.010261453494188662
      },
      Slam: {
        wtotal: 2.5604226813330864e-8,
        rlvncytotal: 3.003421280740204e-8
      },
      Feint: {
        wtotal: 0.000010396142769130562,
        rlvncytotal: 0.000015009069424389894
      },
      Stomp: {
        wtotal: 4.4200282308926875e-8,
        rlvncytotal: 5.793576935462943e-8
      },
      "Vise Grip": {
        wtotal: 8.533546911558214e-11,
        rlvncytotal: 1.4560003041670852e-10
      },
      "False Swipe": {
        wtotal: 0.00002501777393788146,
        rlvncytotal: 0.00006330251435526006
      },
      "Fury Swipes": {
        wtotal: 1.7428849722574722e-9,
        rlvncytotal: 1.5801617136061568e-9
      },
      "Fury Attack": {
        wtotal: 1.2647714431278253e-9,
        rlvncytotal: 2.803066826279276e-9
      },
      "Crush Claw": {
        wtotal: 0.00007275310044347176,
        rlvncytotal: 0.0000733190412493605
      },
      "Multi-Attack": {
        wtotal: 0.010437102646805505,
        rlvncytotal: 0.007495042987672094
      },
      Scratch: {
        wtotal: 3.0866682248310333e-10,
        rlvncytotal: 7.241433299767042e-10
      },
      "Horn Attack": {
        wtotal: 7.173988168288094e-10,
        rlvncytotal: 9.304988899409346e-10
      },
      "Head Charge": {
        wtotal: 0.003000536905138828,
        rlvncytotal: 0.0021729349714454493
      }
    },
    Grass: {
      rlvncytotal: 0.04418596800196887,
      wtotal: 0.05060749795535364,
      "Seed Bomb": {
        wtotal: 0.050225421273195195,
        rlvncytotal: 0.06406491622092805
      },
      "Leaf Blade": {
        wtotal: 0.14007559118625976,
        rlvncytotal: 0.15735035331602762
      },
      "Solar Blade": {
        wtotal: 0.052308614381752105,
        rlvncytotal: 0.04351377255110301
      },
      "Grassy Glide": {
        wtotal: 0.07220413765584785,
        rlvncytotal: 0.10120925606257591
      },
      "Wood Hammer": {
        wtotal: 0.07816068288833565,
        rlvncytotal: 0.0646743780552916
      },
      "Power Whip": {
        wtotal: 0.5194428350941399,
        rlvncytotal: 0.45653326648356224
      },
      "Bullet Seed": {
        wtotal: 0.013402770108190461,
        rlvncytotal: 0.013048800149206178
      },
      "Petal Blizzard": {
        wtotal: 0.000007632239093557087,
        rlvncytotal: 0.000008257938176673277
      },
      "Razor Leaf": {
        wtotal: 2.427807170797212e-7,
        rlvncytotal: 4.4258470314172375e-7
      },
      "Vine Whip": {
        wtotal: 1.7298411461991078e-10,
        rlvncytotal: 3.645317934520233e-10
      },
      "Horn Leech": {
        wtotal: 0.054354677253150165,
        rlvncytotal: 0.07278493182395564
      },
      "Grav Apple": {
        wtotal: 0.012649342267055124,
        rlvncytotal: 0.016815167232455044
      },
      "Drum Beating": {
        wtotal: 0.00008604024058235308,
        rlvncytotal: 0.00010112413178022476
      },
      "Branch Poke": {
        wtotal: 9.62347279723586e-10,
        rlvncytotal: 2.262116713631515e-9
      },
      Leafage: {
        wtotal: 9.873128309908687e-13,
        rlvncytotal: 2.320801340248806e-12
      },
      "Trop Kick": {
        wtotal: 0.0008673620793732278,
        rlvncytotal: 0.001328564011369187
      },
      "Snap Trap": {
        wtotal: 0.0016490882670992502,
        rlvncytotal: 0.004810595258104442
      },
      "Multi-Attack": {
        wtotal: 0.004565561148889664,
        rlvncytotal: 0.0037561715517917217
      }
    },
    Fire: {
      rlvncytotal: 0.02555181794933617,
      wtotal: 0.025460700223780684,
      "Flare Blitz": {
        wtotal: 0.5265670192098921,
        rlvncytotal: 0.40907291454128536
      },
      "Flame Charge": {
        wtotal: 0.20270670852391337,
        rlvncytotal: 0.30236626951685636
      },
      "Flame Wheel": {
        wtotal: 0.000014772741478534935,
        rlvncytotal: 0.000023240594394606446
      },
      "Fire Lash": {
        wtotal: 0.016187087094956042,
        rlvncytotal: 0.015355029917402766
      },
      "Fire Punch": {
        wtotal: 0.11202047864291376,
        rlvncytotal: 0.12951542381344558
      },
      "Blaze Kick": {
        wtotal: 0.011498450822257403,
        rlvncytotal: 0.012924886971452245
      },
      "Fire Fang": {
        wtotal: 0.052163093053242474,
        rlvncytotal: 0.07677100461496164
      },
      "V-create": {
        wtotal: 0.057982528372506704,
        rlvncytotal: 0.03279790864714243
      },
      "Sacred Fire": {
        wtotal: 0.01972572994731729,
        rlvncytotal: 0.020461021523945674
      },
      "Multi-Attack": {
        wtotal: 0.0011341315915223429,
        rlvncytotal: 0.0007122998591133971
      }
    },
    Water: {
      rlvncytotal: 0.04514143406787221,
      wtotal: 0.033823231797097036,
      "Aqua Tail": {
        wtotal: 0.030094016018523594,
        rlvncytotal: 0.02270825147529553
      },
      Liquidation: {
        wtotal: 0.36754635472214703,
        rlvncytotal: 0.3024059186530934
      },
      "Aqua Jet": {
        wtotal: 0.11619275649667132,
        rlvncytotal: 0.1902204034360275
      },
      "Flip Turn": {
        wtotal: 0.25994056898783635,
        rlvncytotal: 0.29410134848602076
      },
      Dive: {
        wtotal: 0.0001444094845039208,
        rlvncytotal: 0.00012950165488263723
      },
      Waterfall: {
        wtotal: 0.09447409991364646,
        rlvncytotal: 0.08505932380696944
      },
      "Razor Shell": {
        wtotal: 0.0005189378631226905,
        rlvncytotal: 0.0004792511381884852
      },
      Crabhammer: {
        wtotal: 0.02468720163922576,
        rlvncytotal: 0.015447881172210806
      },
      "Surging Strikes": {
        wtotal: 0.06169337270766883,
        rlvncytotal: 0.052293099047327145
      },
      "Fishious Rend": {
        wtotal: 0.04198691093820867,
        rlvncytotal: 0.035441946447764265
      },
      "Multi-Attack": {
        wtotal: 0.0027213712284455288,
        rlvncytotal: 0.0017130746822199686
      }
    },
    Electric: {
      rlvncytotal: 0.015932997366711586,
      wtotal: 0.015354146606914996,
      "Wild Charge": {
        wtotal: 0.2042355992568327,
        rlvncytotal: 0.18426168955927644
      },
      Nuzzle: { wtotal: 0.02057287980367796, rlvncytotal: 0.07283351587072091 },
      "Volt Tackle": {
        wtotal: 0.013550848923635483,
        rlvncytotal: 0.00931401846423558
      },
      "Thunder Punch": {
        wtotal: 0.26126051358472097,
        rlvncytotal: 0.2682617848444976
      },
      "Thunder Fang": {
        wtotal: 0.10489129645805818,
        rlvncytotal: 0.11762975330826338
      },
      "Zing Zap": {
        wtotal: 0.1289541309890713,
        rlvncytotal: 0.1283331214530479
      },
      "Bolt Strike": {
        wtotal: 0.021562942887254893,
        rlvncytotal: 0.014691746264899776
      },
      "Fusion Bolt": {
        wtotal: 0.00018170074990740044,
        rlvncytotal: 0.00016094054165339395
      },
      Spark: {
        wtotal: 0.00026232600805984506,
        rlvncytotal: 0.000321196622432366
      },
      "Bolt Beak": {
        wtotal: 0.0109441781776536,
        rlvncytotal: 0.011404413833058005
      },
      "Plasma Fists": {
        wtotal: 0.0606773459457317,
        rlvncytotal: 0.053744659433564025
      },
      "Multi-Attack": {
        wtotal: 0.020288047114962085,
        rlvncytotal: 0.01348799443896684
      },
      "Aura Wheel": {
        wtotal: 0.15261819010043381,
        rlvncytotal: 0.12555516536538386
      }
    },
    Ice: {
      rlvncytotal: 0.03554432716783358,
      wtotal: 0.03289988513731766,
      "Ice Punch": {
        wtotal: 0.15736084762010452,
        rlvncytotal: 0.16380208821173325
      },
      Avalanche: {
        wtotal: 0.004233934955556641,
        rlvncytotal: 0.005775910966718653
      },
      "Icicle Spear": {
        wtotal: 0.07999365788011813,
        rlvncytotal: 0.08316656913382654
      },
      "Icicle Crash": {
        wtotal: 0.22230918791915885,
        rlvncytotal: 0.2150111231895554
      },
      "Ice Shard": {
        wtotal: 0.11169456632334253,
        rlvncytotal: 0.22191623967370802
      },
      "Ice Fang": {
        wtotal: 0.0315835891438934,
        rlvncytotal: 0.038116899855562214
      },
      "Triple Axel": {
        wtotal: 0.39280980625015893,
        rlvncytotal: 0.2722008590322293
      },
      "Multi-Attack": {
        wtotal: 0.000014409907666977148,
        rlvncytotal: 0.00001030993666665314
      }
    },
    Flying: {
      rlvncytotal: 0.030533928990005232,
      wtotal: 0.03721902524507803,
      "Aerial Ace": {
        wtotal: 0.00664976005627564,
        rlvncytotal: 0.010531636991443575
      },
      "Dual Wingbeat": {
        wtotal: 0.23666693132398894,
        rlvncytotal: 0.252917219754119
      },
      Fly: {
        wtotal: 0.0008233098868158045,
        rlvncytotal: 0.0009517135905181122
      },
      "Brave Bird": {
        wtotal: 0.6329904459685413,
        rlvncytotal: 0.5815078594356782
      },
      Acrobatics: {
        wtotal: 0.02821029274299014,
        rlvncytotal: 0.05550283342133907
      },
      Bounce: {
        wtotal: 0.011743031303573927,
        rlvncytotal: 0.014329493918446273
      },
      "Sky Attack": {
        wtotal: 0.0019731296365698087,
        rlvncytotal: 0.0015355637626148365
      },
      "Drill Peck": {
        wtotal: 0.008741967163935825,
        rlvncytotal: 0.011355530838509691
      },
      Peck: {
        wtotal: 2.155730676738457e-10,
        rlvncytotal: 6.375700125946982e-10
      },
      Pluck: {
        wtotal: 0.00005887530977949797,
        rlvncytotal: 0.00011624516448776692
      },
      "Wing Attack": {
        wtotal: 0.00032297346057641425,
        rlvncytotal: 0.00039642622773840546
      },
      "Multi-Attack": {
        wtotal: 0.07181928293137975,
        rlvncytotal: 0.07085547625753505
      }
    },
    Bug: {
      rlvncytotal: 0.11436981624551973,
      wtotal: 0.09231247407002502,
      "U-turn": { wtotal: 0.8507765637406368, rlvncytotal: 0.8769930503711431 },
      "Bug Bite": {
        wtotal: 0.003509693817548257,
        rlvncytotal: 0.0032809471725381576
      },
      "Leech Life": {
        wtotal: 0.028684497620934397,
        rlvncytotal: 0.026304798705959486
      },
      "X-Scissor": {
        wtotal: 0.02534971228625501,
        rlvncytotal: 0.023023823854588964
      },
      "First Impression": {
        wtotal: 0.055930170750077605,
        rlvncytotal: 0.0466134599779229
      },
      "Fury Cutter": {
        wtotal: 0.0003208375198472108,
        rlvncytotal: 0.0005565394099461019
      },
      Megahorn: {
        wtotal: 0.03240803279199986,
        rlvncytotal: 0.02002834763594525
      },
      "Pin Missile": {
        wtotal: 0.000912125731235046,
        rlvncytotal: 0.00086909574811772
      },
      "Skitter Smack": {
        wtotal: 0.001484982665388061,
        rlvncytotal: 0.0015361834205162637
      },
      "Fell Stinger": {
        wtotal: 0.0004299811357841029,
        rlvncytotal: 0.0006155064083643937
      },
      Lunge: {
        wtotal: 0.00018954158526479845,
        rlvncytotal: 0.00017522287765164634
      },
      "Attack Order": {
        wtotal: 0.000003860355028889676,
        rlvncytotal: 0.000003024417306117777
      }
    },
    Poison: {
      rlvncytotal: 0.020001361927681365,
      wtotal: 0.021711575498418553,
      "Poison Jab": {
        wtotal: 0.5401032088665835,
        rlvncytotal: 0.5986920912764918
      },
      "Cross Poison": {
        wtotal: 0.029099895161315257,
        rlvncytotal: 0.040862659519938824
      },
      "Gunk Shot": {
        wtotal: 0.30299809140654044,
        rlvncytotal: 0.24769489494414962
      },
      "Poison Sting": {
        wtotal: 5.393060604520366e-7,
        rlvncytotal: 0.000003579227881928444
      },
      "Poison Fang": {
        wtotal: 0.004212908479884702,
        rlvncytotal: 0.008347675247830812
      },
      "Poison Tail": {
        wtotal: 0.0000012605308596636995,
        rlvncytotal: 0.000002435217063255334
      },
      "Multi-Attack": {
        wtotal: 0.12358409624875602,
        rlvncytotal: 0.1043966645666436
      }
    },
    Ground: {
      rlvncytotal: 0.11005997205165498,
      wtotal: 0.12202431686059373,
      "Bone Rush": {
        wtotal: 0.000001352839690897985,
        rlvncytotal: 0.000001801723667355348
      },
      Bulldoze: {
        wtotal: 0.0018493673658464547,
        rlvncytotal: 0.0030274535555148935
      },
      Earthquake: {
        wtotal: 0.8785008559084619,
        rlvncytotal: 0.873353876528731
      },
      Dig: {
        wtotal: 0.00015026736336369597,
        rlvncytotal: 0.00018821631383494813
      },
      "High Horsepower": {
        wtotal: 0.05609797844233429,
        rlvncytotal: 0.058137940713394
      },
      "Stomping Tantrum": {
        wtotal: 0.011467853433679549,
        rlvncytotal: 0.015341623063260337
      },
      "Drill Run": {
        wtotal: 0.002000945424420116,
        rlvncytotal: 0.002468099386537144
      },
      "Sand Tomb": {
        wtotal: 0.00035162403041961754,
        rlvncytotal: 0.0008272202148061115
      },
      Bonemerang: {
        wtotal: 0.004838499587858345,
        rlvncytotal: 0.004780599839625374
      },
      "Thousand Arrows": {
        wtotal: 0.017086484065820504,
        rlvncytotal: 0.018678986208195664
      },
      "Land's Wrath": {
        wtotal: 3.3961089972727225e-13,
        rlvncytotal: 3.756429477454226e-13
      },
      "Thousand Waves": {
        wtotal: 0.000022877347681361496,
        rlvncytotal: 0.00002501822992656331
      },
      "Multi-Attack": {
        wtotal: 0.027631894190083627,
        rlvncytotal: 0.02316916422213076
      }
    },
    Rock: {
      rlvncytotal: 0.07428285362065956,
      wtotal: 0.07391930955400847,
      "Rock Tomb": {
        wtotal: 0.03262023494758234,
        rlvncytotal: 0.04694007906025766
      },
      "Rock Slide": {
        wtotal: 0.15820962607376046,
        rlvncytotal: 0.18594240119773328
      },
      "Stone Edge": {
        wtotal: 0.5116853474022957,
        rlvncytotal: 0.4556246434010319
      },
      "Rock Throw": {
        wtotal: 2.044625688079948e-8,
        rlvncytotal: 3.343066599807218e-8
      },
      "Rock Blast": {
        wtotal: 0.1327279515473373,
        rlvncytotal: 0.15199090513518848
      },
      "Head Smash": {
        wtotal: 0.07312128516023232,
        rlvncytotal: 0.043396959726285704
      },
      Rollout: {
        wtotal: 0.0000037542317974092444,
        rlvncytotal: 0.000011249482370453314
      },
      "Smack Down": {
        wtotal: 0.024111235531210144,
        rlvncytotal: 0.04062100485177802
      },
      "Rock Wrecker": {
        wtotal: 0.000017743228922766817,
        rlvncytotal: 0.000009836523566026307
      },
      Accelerock: {
        wtotal: 0.012252647088213893,
        rlvncytotal: 0.02659079984242399
      },
      "Diamond Storm": {
        wtotal: 0.055250154342390494,
        rlvncytotal: 0.04887208734869819
      }
    },
    Fighting: {
      rlvncytotal: 0.12142409187287,
      wtotal: 0.13725373298903765,
      "Body Press": {
        wtotal: 0.18600093502352616,
        rlvncytotal: 0.23516180082685542
      },
      "Focus Punch": {
        wtotal: 0.009624933997619756,
        rlvncytotal: 0.006422314942307399
      },
      "Brick Break": {
        wtotal: 0.002031032449857749,
        rlvncytotal: 0.002746659070636619
      },
      "Hammer Arm": {
        wtotal: 0.0031945276669404863,
        rlvncytotal: 0.0033502844054162243
      },
      Superpower: {
        wtotal: 0.09671890342195788,
        rlvncytotal: 0.08171947959426543
      },
      "Low Sweep": {
        wtotal: 0.000033634071551818686,
        rlvncytotal: 0.000052734085206928644
      },
      "Power-Up Punch": {
        wtotal: 0.002000247554621767,
        rlvncytotal: 0.005011485915293615
      },
      "Cross Chop": {
        wtotal: 0.0014783987349109488,
        rlvncytotal: 0.0014823555051528758
      },
      "Dynamic Punch": {
        wtotal: 0.007083295567230268,
        rlvncytotal: 0.007278435797047019
      },
      "Drain Punch": {
        wtotal: 0.06706600674663056,
        rlvncytotal: 0.0901589351646441
      },
      "Close Combat": {
        wtotal: 0.5462421332539448,
        rlvncytotal: 0.46218479607009144
      },
      "Meteor Assault": {
        wtotal: 0.0000012208885699180105,
        rlvncytotal: 8.303425434219465e-7
      },
      "Mach Punch": {
        wtotal: 0.016187608951702084,
        rlvncytotal: 0.037047714452863374
      },
      "Circle Throw": {
        wtotal: 0.010774116853661506,
        rlvncytotal: 0.01813162222645885
      },
      Revenge: {
        wtotal: 0.000012869981378506556,
        rlvncytotal: 0.000016905173239544422
      },
      "Double Kick": {
        wtotal: 0.0000029557580199600017,
        rlvncytotal: 0.000004920448279819114
      },
      "High Jump Kick": {
        wtotal: 0.02049547727182079,
        rlvncytotal: 0.015562270508863382
      },
      "Rock Smash": {
        wtotal: 0.000009379509131866538,
        rlvncytotal: 0.00001605281906234938
      },
      "Thunderous Kick": {
        wtotal: 0.0021188507407135446,
        rlvncytotal: 0.0023925449507911254
      },
      "Force Palm": {
        wtotal: 5.1041544952584345e-8,
        rlvncytotal: 8.645195363012619e-8
      },
      Submission: {
        wtotal: 8.350137163264962e-8,
        rlvncytotal: 1.0334369602015392e-7
      },
      "Arm Thrust": {
        wtotal: 7.859670579618973e-9,
        rlvncytotal: 1.814350918394921e-8
      },
      "Storm Throw": {
        wtotal: 0.0002575803550293703,
        rlvncytotal: 0.0004286949188321608
      },
      "Sacred Sword": {
        wtotal: 0.01573206673359087,
        rlvncytotal: 0.017785845197914655
      },
      "Flying Press": {
        wtotal: 4.040030174791507e-7,
        rlvncytotal: 4.105696663294693e-7
      },
      "Secret Sword": {
        wtotal: 0.006478390171413185,
        rlvncytotal: 0.007562643319815999
      },
      "Triple Kick": {
        wtotal: 0.00006705612465916875,
        rlvncytotal: 0.00007295452817258228
      },
      "Multi-Attack": {
        wtotal: 0.006387831765912617,
        rlvncytotal: 0.005407101227420472
      }
    },
    Psychic: {
      rlvncytotal: 0.02063893757736769,
      wtotal: 0.01850125431850521,
      Psyshock: { wtotal: 0.6693205888091476, rlvncytotal: 0.6734653301754974 },
      "Zen Headbutt": {
        wtotal: 0.1747426243308923,
        rlvncytotal: 0.17602132660936215
      },
      "Psycho Cut": {
        wtotal: 0.033888628657895804,
        rlvncytotal: 0.038403421081607214
      },
      "Psychic Fangs": {
        wtotal: 0.10602750676609353,
        rlvncytotal: 0.10097381071600872
      },
      "Multi-Attack": {
        wtotal: 0.016020651435970736,
        rlvncytotal: 0.011136111417524408
      }
    },
    Ghost: {
      rlvncytotal: 0.0335134422327288,
      wtotal: 0.02857235754386666,
      "Shadow Claw": {
        wtotal: 0.11445865061745494,
        rlvncytotal: 0.10996926761561984
      },
      "Shadow Sneak": {
        wtotal: 0.18488664175493874,
        rlvncytotal: 0.3355142741412343
      },
      Poltergeist: {
        wtotal: 0.44719056144494934,
        rlvncytotal: 0.3366567071863868
      },
      "Phantom Force": {
        wtotal: 0.09924649474787205,
        rlvncytotal: 0.09130163193194743
      },
      Lick: {
        wtotal: 0.0000020895864512163716,
        rlvncytotal: 0.000005766394251610481
      },
      Astonish: {
        wtotal: 4.249487791349078e-8,
        rlvncytotal: 1.0959811500006586e-7
      },
      "Shadow Bone": {
        wtotal: 0.017394170940516172,
        rlvncytotal: 0.013730736609970585
      },
      "Multi-Attack": {
        wtotal: 0.09842965213557583,
        rlvncytotal: 0.07592148992000067
      },
      "Spirit Shackle": {
        wtotal: 0.03688283547073416,
        rlvncytotal: 0.03495714223477259
      },
      "Shadow Punch": {
        wtotal: 0.0015088608066297431,
        rlvncytotal: 0.0019428743677011987
      }
    },
    Dragon: {
      rlvncytotal: 0.019942558475082302,
      wtotal: 0.02176609943282099,
      "Dragon Claw": {
        wtotal: 0.10824486733419615,
        rlvncytotal: 0.12787535656853416
      },
      "Dragon Tail": {
        wtotal: 0.13697198580156744,
        rlvncytotal: 0.20195113227768702
      },
      "Scale Shot": {
        wtotal: 0.12520129850676448,
        rlvncytotal: 0.15143329592708765
      },
      "Dual Chop": {
        wtotal: 0.00006021449560087072,
        rlvncytotal: 0.00006596147206402731
      },
      Outrage: { wtotal: 0.5313597204569875, rlvncytotal: 0.4334707652611015 },
      "Breaking Swipe": {
        wtotal: 0.000043251365948348694,
        rlvncytotal: 0.0000665339842572783
      },
      "Dragon Rush": {
        wtotal: 0.011639442389184464,
        rlvncytotal: 0.010362231573877952
      },
      "Dragon Darts": {
        wtotal: 0.07755763009052039,
        rlvncytotal: 0.06794540230961957
      },
      "Dragon Hammer": {
        wtotal: 0.0018161459757231688,
        rlvncytotal: 0.001725467179704475
      },
      "Multi-Attack": {
        wtotal: 0.007105443583507059,
        rlvncytotal: 0.005103853446066302
      }
    },
    Dark: {
      rlvncytotal: 0.1609351659090276,
      wtotal: 0.1674132985936829,
      "Foul Play": {
        wtotal: 0.09595143483462193,
        rlvncytotal: 0.09460933037739613
      },
      Thief: {
        wtotal: 0.0025738494612774342,
        rlvncytotal: 0.0029051878406550586
      },
      "Knock Off": {
        wtotal: 0.7594530970756651,
        rlvncytotal: 0.729175575226974
      },
      "Lash Out": {
        wtotal: 0.0005194860774567188,
        rlvncytotal: 0.0006425674848763374
      },
      Payback: {
        wtotal: 0.0019869415116118673,
        rlvncytotal: 0.0036587677570707982
      },
      Crunch: {
        wtotal: 0.039378442109353706,
        rlvncytotal: 0.045673944191771204
      },
      "Throat Chop": {
        wtotal: 0.01927098652417964,
        rlvncytotal: 0.02223419367029229
      },
      Assurance: {
        wtotal: 0.001485816363575603,
        rlvncytotal: 0.0023235841784171266
      },
      "Sucker Punch": {
        wtotal: 0.048469063856331,
        rlvncytotal: 0.0641555347705513
      },
      "Darkest Lariat": {
        wtotal: 0.02500197173963527,
        rlvncytotal: 0.02763429580357444
      },
      "Night Slash": {
        wtotal: 0.0019704842481701092,
        rlvncytotal: 0.002599337084467841
      },
      "Brutal Swing": {
        wtotal: 0.00025735665475022776,
        rlvncytotal: 0.0002632211953167263
      },
      Bite: {
        wtotal: 0.0000028485083708853146,
        rlvncytotal: 0.000004293373452320537
      },
      "Power Trip": {
        wtotal: 0.00033345530516296887,
        rlvncytotal: 0.0015453512365355302
      },
      "False Surrender": {
        wtotal: 0.000004635143477010423,
        rlvncytotal: 0.0000054556787445977606
      },
      "Jaw Lock": {
        wtotal: 3.878343968653099e-9,
        rlvncytotal: 4.509929559099763e-9
      },
      "Multi-Attack": {
        wtotal: 0.0033401267080165518,
        rlvncytotal: 0.002569355619974868
      }
    },
    Steel: {
      rlvncytotal: 0.04962571926461458,
      wtotal: 0.0457818978869628,
      "Iron Tail": {
        wtotal: 0.051643972304777526,
        rlvncytotal: 0.0423964154765233
      },
      "Steel Wing": {
        wtotal: 0.022210754604527653,
        rlvncytotal: 0.02677391532795586
      },
      "Iron Head": {
        wtotal: 0.6501813973724705,
        rlvncytotal: 0.6687697164592717
      },
      "Steel Roller": {
        wtotal: 0.001722491918532266,
        rlvncytotal: 0.001078320595277849
      },
      "Smart Strike": {
        wtotal: 0.015188084566179677,
        rlvncytotal: 0.01976858744202791
      },
      "Bullet Punch": {
        wtotal: 0.031749714139061476,
        rlvncytotal: 0.054897578676563474
      },
      "Metal Claw": {
        wtotal: 0.00001931798919032494,
        rlvncytotal: 0.00003125982042404825
      },
      "Anchor Shot": {
        wtotal: 0.028405330793839327,
        rlvncytotal: 0.02773445405464154
      },
      "Meteor Mash": {
        wtotal: 0.05427576067196609,
        rlvncytotal: 0.04683827853203358
      },
      "Double Iron Bash": {
        wtotal: 0.08026011773415283,
        rlvncytotal: 0.060942284847520456
      },
      "Multi-Attack": {
        wtotal: 0.022401545953921898,
        rlvncytotal: 0.01548832794996923
      },
      "Gear Grind": {
        wtotal: 0.041941511951380385,
        rlvncytotal: 0.03528086081779095
      }
    },
    Fairy: {
      rlvncytotal: 0.013521461443162894,
      wtotal: 0.014484714423899692,
      "Play Rough": {
        wtotal: 0.7688573794781778,
        rlvncytotal: 0.7848739938974234
      },
      "Spirit Break": {
        wtotal: 0.020853021460676503,
        rlvncytotal: 0.02479030890012259
      },
      "Multi-Attack": {
        wtotal: 0.2102895990611457,
        rlvncytotal: 0.19033569720245394
      }
    }
  },
  rlvncytotal: 1,
  wtotal: 1
});
export { typeWeights, gen3TypeCategorization, hazards };
