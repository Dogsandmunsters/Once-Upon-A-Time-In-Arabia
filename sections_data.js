const SECTIONS = {
  "1": {
    "id": "1",
    "text": "<img src=\"./images/filler_start.jpg\" alt=\"\"><p> Each character starts with 10 Life Points. Life Points are lost each time you're wounded, and if they are ever reduced to zero then the adventure is over - you're dead.</p><p>You begin the adventure with 12 dinars. That's all the money you have. Spend it wisely.</p><p>Each character also has four skills. These are your special strengths and will guide your choices during the adventure.</p><p>Your choice of skills will be filled in on your Character Sheet along with your money, current Life Points and any possessions.</p><p>Ready to choose your character?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Warrior.",
        "target": "1a"
      },
      {
        "id": 1,
        "text": "Wizard.",
        "target": "1b"
      },
      {
        "id": 2,
        "text": "Thief.",
        "target": "1c"
      },
      {
        "id": 3,
        "text": "Ranger.",
        "target": "1d"
      },
      {
        "id": 4,
        "text": "Merchant.",
        "target": "1e"
      },
      {
        "id": 5,
        "text": "Nomad.",
        "target": "1f"
      },
      {
        "id": 6,
        "text": "Beggar.",
        "target": "1g"
      },
      {
        "id": 7,
        "text": "Customize a character.",
        "target": "445"
      }
    ],
    "state_changes": [
      {
        "var": "agility",
        "op": "set",
        "value": 0
      },
      {
        "var": "archery",
        "op": "set",
        "value": 0
      },
      {
        "var": "cunning",
        "op": "set",
        "value": 0
      },
      {
        "var": "folklore",
        "op": "set",
        "value": 0
      },
      {
        "var": "luck",
        "op": "set",
        "value": 0
      },
      {
        "var": "magic",
        "op": "set",
        "value": 0
      },
      {
        "var": "roguery",
        "op": "set",
        "value": 0
      },
      {
        "var": "seafaring",
        "op": "set",
        "value": 0
      },
      {
        "var": "streetwise",
        "op": "set",
        "value": 0
      },
      {
        "var": "swordplay",
        "op": "set",
        "value": 0
      },
      {
        "var": "wilderness_lore",
        "op": "set",
        "value": 0
      },
      {
        "var": "wrestling",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "set",
        "value": 0
      }
    ]
  },
  "1a": {
    "id": "1a",
    "text": "<p> <div class=\"s4\">THE WARRIOR</div></p><p>You must live your life by the high ideals of the military code. You accept wounds to your body without flinching, but never a wound to your honour.</p><p><div class=\"s5\"><em>Skills:</em></div> ARCHERY is a long-range attack skill useful in both hunting and combat. You must possess a bow.</p><p>FOLKLORE comprises extensive knowledge of myth and legend. You know the best way of dealing with any supernatural menace.</p><p>SWORDPLAY is the best fighting skill, but to use it you must possess a sword.</p><p>WRESTLING comprises arm-locks, holds, leg sweeps, forearm jabs and other brawling techniques.</p><p><div class=\"s5\"><em>Possessions:</em></div> Bow, sword</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose this character.",
        "target": "445a"
      },
      {
        "id": 1,
        "text": "Go back and choose again.",
        "target": "1"
      }
    ]
  },
  "1b": {
    "id": "1b",
    "text": "<p> <div class=\"s4\">THE WIZARD</div></p><p>You are a student of sorcery and mystery. The stars of your birth guarantee you a charmed life.</p><p><div class=\"s5\"><em>Skills: </em></div> CUNNING is the ability to think on your feet and devise clever ploys for getting out of trouble.</p><p>FOLKLORE comprises extensive knowledge of myth and legend. You know the best way of dealing with any supernatural menace.</p><p>LUCK is the general ability to come out on top. Your natural good fortune will help you in all sorts of situations.</p><p>MAGIC is the ability to summon a jinni to do your bidding. You must possess a magic ring to use this skill.</p><p><div class=\"s5\"><em>Possessions:</em></div> Magic ring</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose this character.",
        "target": "445b"
      },
      {
        "id": 1,
        "text": "Go back and choose again.",
        "target": "1"
      }
    ]
  },
  "1c": {
    "id": "1c",
    "text": "<p> <div class=\"s4\">THE THIEF</div></p><p>Born and bred in the dark crannies of Baghdad's slums, you believe your knavish skills are equal to any challenge.</p><p><div class=\"s5\"><em>Skills:</em></div> AGILITY is the skill of performing acrobatic feats, running, climbing, balancing and leaping.</p><p>CUNNING is the ability to think on your feet and devise clever ploys for getting out of trouble.</p><p>ROGUERY comprises the traditional repertoire of thief's tricks: picking pockets, opening locks, and skulking unseen in the shadows.</p><p>STREETWISE means that you are never at a loss in towns and cities. What others see as the squalor and menace of narrow alleys is home to you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose this character.",
        "target": "445c"
      },
      {
        "id": 1,
        "text": "Go back and choose again.",
        "target": "1"
      }
    ]
  },
  "1d": {
    "id": "1d",
    "text": "<p> <div class=\"s4\">THE RANGER</div></p><p>You have no fear of any peril that nature can throw at you. The only true evil in this world resides in the hearts of selfish men.</p><p><div class=\"s5\"><em>Skills:</em></div> ARCHERY is a long-range attack skill useful in both hunting and combat. You must possess a bow.</p><p>SEAFARING is the ability to handle anything from a rowboat right up to a large sailing ship.</p><p>STREETWISE means that you are never at a loss in towns and cities. What others see as the squalor and menace of narrow alleys is home to you.</p><p>WILDERNESS LORE is a talent for survival in the wild - whether forest, desert, swamp or mountain peak.</p><p><div class=\"s5\"><em>Possessions:</em></div> Bow</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose this character.",
        "target": "445d"
      },
      {
        "id": 1,
        "text": "Go back and choose again.",
        "target": "1"
      }
    ]
  },
  "1e": {
    "id": "1e",
    "text": "<p> <div class=\"s4\">THE MERCHANT</div></p><p>In your youth you were fascinated by the strange journeys of Sindbad. Now you have the chance to outdo them.</p><p><div class=\"s5\"><em>Skills: </em></div> LUCK is the general ability to come out on top. Your natural good fortune will help you in all sorts of situations.</p><p>ROGUERY comprises the traditional repertoire of thief's tricks: picking pockets, opening locks, and skulking unseen in the shadows.</p><p>SEAFARING is the ability to handle anything from a rowboat right up to a large sailing ship.</p><p>SWORDPLAY is the best fighting skill, but to use it you must possess a sword.</p><p><div class=\"s5\"><em>Possessions:</em></div> Sword</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose this character.",
        "target": "445e"
      },
      {
        "id": 1,
        "text": "Go back and choose again.",
        "target": "1"
      }
    ]
  },
  "1f": {
    "id": "1f",
    "text": "<p> <div class=\"s4\">THE NOMAD</div></p><p>Your true home is among the desert dunes. You know that city dwellers are not to be trusted.</p><p><div class=\"s5\"><em>Skills:</em></div> AGILITY is the skill of performing acrobatic feats, running, climbing, balancing and leaping.</p><p>FOLKLORE comprises extensive knowledge of myth and legend. You know the best way of dealing with any supernatural menace.</p><p>MAGIC is the ability to summon a jinni to do your bidding. You must possess a magic ring to use this skill.</p><p>WILDERNESS LORE is a talent for survival in the wild - whether forest, desert, swamp or mountain peak.</p><p><div class=\"s5\"><em>Possessions:</em></div> Magic ring</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose this character.",
        "target": "445f"
      },
      {
        "id": 1,
        "text": "Go back and choose again.",
        "target": "1"
      }
    ]
  },
  "1g": {
    "id": "1g",
    "text": "<p> <div class=\"s4\">THE BEGGAR</div></p><p>All pious men should give generously to the poor, but in your experience many disregard this. No matter. If you aren't offered charity, you'll simply take it.</p><p><div class=\"s5\"><em>Skills:</em></div> CUNNING is the ability to think on your feet and devise clever ploys for getting out of trouble.</p><p>LUCK is the general ability to come out on top. Your natural good fortune will help you in all sorts of situations.</p><p>STREETWISE means that you are never at a loss in towns and cities. What others see as the squalor and menace of narrow alleys is home to you.</p><p>WRESTLING comprises arm-locks, holds, leg sweeps, forearm jabs and other brawling techniques.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose this character.",
        "target": "445g"
      },
      {
        "id": 1,
        "text": "Go back and choose again.",
        "target": "1"
      }
    ]
  },
  "1h": {
    "id": "1h",
    "text": "<p> <div class=\"s4\">THE SKILLS</div></p><p><em>AGILITY</em></p><p>The ability to perform acrobatic feats, run, climb, balance and leap. A character with this skill is nimble and dexterous.</p><p><em>ARCHERY</em></p><p>A long-range attack for both hunting and combat. You must possess a bow to use this skill.</p><p><em>CUNNING</em></p><p>The ability to think on your feet and devise clever ploys for getting out of trouble. Useful in countless situations.</p><p><em>FOLKLORE</em></p><p>Knowledge of myth and legend. Such knowledge is power, and you know the best way of dealing with any supernatural menace.</p><p><em>LUCK</em></p><p>The general ability to come out on top. Your natural good fortune will help you in all sorts of situations.</p><p><em>MAGIC</em></p><p>The ability to summon a jinni to do your bidding. You must possess a magic ring to use this skill.</p><p><em>ROGUERY</em></p><p>The traditional repertoire of thief's tricks: picking pockets, opening locks, and skulking unseen in the shadows.</p><p><em>SEAFARING</em></p><p>Knowing all about life at sea, including the ability to handle anything from a rowboat right up to a large sailing boat.</p><p><em>STREETWISE</em></p><p>With this skill you are never at a loss in towns and cities. What others see as the squalor and menace of narrow alleys is home to you.</p><p><em>SWORDPLAY</em></p><p>The best fighting skill, but to use it you must possess a sword.</p><p><em>WILDERNESS LORE</em>A talent for survival in the wild - whether forest, desert, swamp or mountain peak.</p><p><em>WRESTLING</em></p><p>You know how to handle yourself in a brawl, winning victory with arm-locks, holds, leg sweeps and forearm jabs. You need no weapons - your own body is the weapon.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Choose the Warrior.",
        "target": "1a"
      },
      {
        "id": 1,
        "text": "Choose the Wizard.",
        "target": "1b"
      },
      {
        "id": 2,
        "text": "Choose the Thief.",
        "target": "1c"
      },
      {
        "id": 3,
        "text": "Choose the Ranger.",
        "target": "1d"
      },
      {
        "id": 4,
        "text": "Choose the Merchant.",
        "target": "1e"
      },
      {
        "id": 5,
        "text": "Choose the Nomad.",
        "target": "1f"
      },
      {
        "id": 6,
        "text": "Choose the Beggar.",
        "target": "1g"
      },
      {
        "id": 7,
        "text": "Customize a character.",
        "target": "445"
      }
    ]
  },
  "1i": {
    "id": "1i",
    "text": "<img src=\"./images/filler_prologue.jpg\" alt=\"\"><p class=\"section-title\">PROLOGUE</p><p>After many days on the road, it is with a quickening of the blood that you breathe in and catch the ripe, enticing scent of Baghdad's canal-irrigated orchards in the distance. Cresting a hill, you rein in your horse and gaze down on the city of your birth. There is a haze in the air that, filtering the shafts of morning sunlight, makes the gardens and marble palaces seem as though flecked with gold. Beyond the city walls, the River Tigris laces between the green fields and the woodland of the hunting parks like a vein of liquid fire.</p><p>The horse whinnies and tugs at the reins.</p><p>'You like the look of that fresh grass, eh, Antar?'</p><p>You pat his mane and dismount, leading him to a spot where he can graze in the shade. Then you lie back to bask in the warm sun. Bees drone lazily amid the flowers. You set out early this morning and have made good speed. Why not enjoy a nap before riding on into the city?</p><p>Yet sleep does not come. You are too excited. When you set out a month ago to attend your uncle's funeral, you were contented but poor, with few prospects for the future. You never dreamt that your uncle, whom you hardly knew, had made you his heir. He left you his fine stallion Antar, who has already become a firm friend. And in your saddlebags are bars of gold that will allow you to set yourself up in whatever enterprise you wish.</p><p>As you muse on what you will do with your new-found fortune, you become aware of voices on the other side of the hill. Antar is still contentedly chewing the grass. Moved by curiosity, you make your way through the bushes and look down to see a group of servants laying out a picnic. Nearby stand soldiers, obviously the guards of a plump nobleman in elegant robes who has a hawk that he sends swooping down the hill. Each time the bird falls on a field mouse, the nobleman's ample belly quakes with cruel laughter.</p><p>One of the soldiers comes up to the nobleman and salutes him. You are close enough to hear him say, 'Lord Jafar, shall we set up your pavilion?'</p><p>You know that name. Jafar is the Grand Vizier of Baghdad, who advises the Caliph on every detail of state policy. You decide to remain out of sight. It is not prudent to attract the attention of one so rich and powerful. He could easily decide you are trespassing and have you flogged or enslaved.</p><p>Jafar nods, then waves the soldier away and beckons over a thin servant clad in black who had been standing aloof from the others. The servant hovers beside Jafar with a fixed grin on his face, like a worshipper waiting to hear the word of his god.</p><p>Jafar sends the hawk aloft and watches it. Then he says thoughtfully, as though to himself, 'Every night, the Caliph puts on ordinary clothes and has me lead him by means of secret passages to explore the streets outside the palace walls. In this way, he hopes to learn the true will of the people.'</p><p>'It's all too easy for a ruler to get out of touch,' puts in the black-clad servant.</p><p>Jafar nods. 'Precisely. Lately I have been leading the Caliph to very select venues - inns and houses where I have previously planted my own agents. They talk of rebellion, and the Caliph hears their talk, and gradually he begins to believe that his subjects hate him.'</p><p>'Oh, a scheme of rare cunning, if I may say so, your excellency,' says the servant. 'But where's it leading, may I ask?'</p><p>'The Caliph, fearing rebellion, each day grows more cautious, more paranoid. He intensifies the rule of law and deals harshly with those whose loyalty is in question. And so, by fearing rebellion, each day he brings it closer.'</p><p>The servant claps his hands in delight. 'You are the Prince of Guile, my lord! So the populace will come to hate the noble Caliph...'</p><p>'And then, when the time is ripe, I'll overthrow him. How the people will cheer! Despite my humble protests, they'll insist that I take the place of the despot. Can you see it, Natar?'</p><p>'I can, excellency!' cries the servant. 'And when you are Caliph, what then?' </p><p>He waits with an expectant smile which fades as he sees the dark look in Jafar's eyes.</p><p>'And then?' says Jafar grimly. 'Then the whole world shall tremble.'</p><p>You've heard more than enough. This many secrets can get a person killed. You are edging back into the bushes when one of Jafar's guards comes around the hill. Outrage leaps like fire into your blood. The guard is leading your horse.</p><p>'See what I found, excellency,' he says, taking the horse over to Jafar.</p><p>'Thank you,' purrs Jafar, patting Antar's neck. 'A fine gift.'</p><p>This is too much to bear. Striding down the hill, you raise your hand and call out. 'Wait! That's my horse.'</p><p>Jafar flicks his gaze vaguely in your direction, looking through you as though you are nothing. 'I believe the horse is mine, and yet I seemed to hear a voice raised in protest. How can the Grand Vizier of Baghdad be mistaken?'</p><p>You are almost choking with emotion. You lunge, seizing Antar's reins. 'This is outright theft!'</p><p>Now Jafar glares. His eyes, like tiny crystals of ice, focus on yours. You shudder at the sudden palpable wave of evil. 'Justice is not for the likes of you,' he spits. 'I make the law here.'</p><p>The servant, Natar, peers at you and then speaks anxiously to his master: 'This wretch may have overheard us, lord. Shall I..?' </p><p>He draws his knife half out of its sheath.</p><p>Jafar nods. Before you can react, one of the guards clubs you across the back of the neck. Your legs give way and they catch you under the arms. Natar pushes the knife towards you.</p><p>'Not here,' snaps Jafar. 'You'll get blood over the picnic things. Do it by the river, then throw the body in.'</p><p>You are half-led, half-dragged towards the riverbank. You're groggy but you fight to stay conscious, knowing that if you black out now you will never awaken. The river surges past below. Natar's face swims close through waves of nausea. The knife approaches your throat.</p><p>You muster a burst of strength and break free of the guards holding you. Natar only laughs. 'So, you still have some fight left in you. Good.'</p><p>You seize his wrist, but you know you don't have the strength to disarm him. Instead you let your legs give way, using your dead weight to drag you both over the side of the bank.</p><p>Icy cold water engulfs you. Natar's grin has become a mask of hatred and alarm. By luck you twist the knife around, and you think you managed to cut him. He is swept away and you tumble with the current, spinning down and down into a black sink of oblivion.</p><p>You are revived by the last rays of the sun. You are lying in river mud near to some fishermen's hovels on the outskirts of the city. Ignoring the throb in your skull, you drag yourself to your feet and stumble along the warren of streets, your only thought being to stay hidden. Jafar's agents may already be looking for you. With what you have learned, your days are numbered. Unless you can expose Jafar as the villain he is.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Start your adventure.",
        "target": "1j"
      }
    ],
    "state_changes": [
      {
        "var": "char_chosen",
        "op": "set",
        "value": 1
      },
      {
        "var": "bow",
        "op": "set",
        "value": 1
      }
    ]
  },
  "1j": {
    "id": "1j",
    "text": "<img src=\"./images/filler_begins.jpg\" alt=\"\"><p> Nightfall finds you walking aimlessly through the narrow back streets of the city. From off in the main plaza you can hear the hubbub of street entertainers and night-time revellers. Torchlight flares from braziers set up for the festival. Here the street is hushed and dimly lit. You shrink back into the shadows, preferring to be alone with your bitter thoughts.</p><p>A beggar sits in a doorway, unnoticed by the few passers-by. He is an old dervish with a streaked grey beard. He reaches out his tin cup, startling you, and you flinch at the sight of his scabrous hands. Then you see the green turban that marks him as a hajji - one who has made the arduous pilgrimage to Mecca.</p><p>'Alms for the love of God,' he mutters.</p><p>Ashamed at the feeling of loathing that swept across your face at first, you fish in your pocket and give him a dinar. It rattles in his cup and for a moment he peers at it as though it were a wondrous vision. He gestures up at the heavens and says, 'You have only to lift your head: there is a sight to banish misfortune. Under the wide sky, God sees all and guides the worthy to a just reward.'</p><p>The remark seems filled with portent. You gaze up past the rooftops at the stars: a thousand lights sharp as jewels on the cloth of the night. A feeling of awe at their beauty takes the breath from your body. By the time you look back, the dervish is shuffling away.</p><p>You follow him to the end of the alley, but lose sight of him as he slips through a crowd of people who are gathered to hear a storyteller. As the storyteller finishes his tale, the crowd begins to break up. Some move off towards a troupe of acrobats from distant Cathay whose oiled flesh gleams like amber in the flaring torchlight. Others go to buy sweetmeats from stalls around the plaza. The storyteller sits back on his mat, beaming at the mound of coins he has earned.</p><p>You are standing outside an astrologer's shop. A man emerges, brushing past you, nodding with a smile as he catches your eye. The tattoo on his chest suggests he is a sailor.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Enter the astrologer's shop.",
        "target": "69"
      },
      {
        "id": 1,
        "text": "Talk to the sailor.",
        "target": "475"
      },
      {
        "id": 2,
        "text": "Go over to the storyteller.",
        "target": "23"
      },
      {
        "id": 3,
        "text": "Go in search of the elusive dervish.",
        "target": "92"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": -1
      }
    ]
  },
  "2": {
    "id": "2",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "money",
        "op": "set",
        "value": 0
      },
      {
        "var": "ring",
        "op": "set",
        "value": 0
      },
      {
        "var": "sword",
        "op": "set",
        "value": 0
      },
      {
        "var": "bow",
        "op": "set",
        "value": 0
      },
      {
        "var": "jewelled_sword",
        "op": "set",
        "value": 0
      },
      {
        "var": "hawk",
        "op": "set",
        "value": 0
      },
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ],
    "auto_redirect": "2a"
  },
  "2a": {
    "id": "2a",
    "text": "<p> There is a clang as your sword strikes the floor, followed by an ominous hush as Masrur steps forward smiling and pins your arms behind your back. You are taken to the dungeons, stripped of everything you own, then hung in chains and tortured for several days.</p><p>You are finally released and half-dragged to the docks by a captain of the Palace Guard. 'As you value your life, wretch, take ship from Baghdad on this very hour,' he snarls. 'Jafar won't be so lenient the next time.' </p><p>He turns on his heel and walks away, leaving you clutching a stanchion for support. He is right. You must leave Baghdad - at least until your regain your strength. Then you can come back for revenge.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head to the docks.",
        "target": "160"
      }
    ]
  },
  "2b": {
    "id": "2b",
    "text": "<p> You have withstood a lot in your adventure, but finally the pain is too much and you succumb to your injuries. Your life and your quest are over.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 0
      }
    ]
  },
  "2c": {
    "id": "2c",
    "text": "<p> There is a clang as your sword strikes the floor, followed by an ominous hush as Masrur steps forward smiling and pins your arms behind your back. You are taken to the dungeons, stripped of everything you own, then hung in chains and tortured for several days. You have withstood a lot in your adventure, but finally the pain is too much and you succumb to your injuries. Your life and your quest are over.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "3": {
    "id": "3",
    "text": "<p> 'Perhaps this tale is true, perhaps not. Only God knows all,' begins the old storyteller. 'It concerns a young prince who, while travelling in the wilderness, came to a hut of mud bricks. Drawing water from the well, he was taken unawares by two strong brothers who came upon him from behind. They carried him to their mother, an aged crone with a face as withered as a rotten gourd. Her teeth were like broken pebbles, her eyes filmy with rheum. And the prince knew from their white skin that these were not mortals, but a family of ghouls. Then he feared for his life, but even in his terror his wits did not entirely desert him. \"Am I to die without a chance to save myself?\" he asked as they stoked the fire. </p><p>'The ancient she-ghoul leered as she sprinkled the seasoning. \"What chance would you have?\" she asked. \"In any contest, my sons are superior to a mortal man.\"</p><p>' \"I have no skill with weapons,\" replied the prince. \"But in my own land I am famous as an athlete. Why not set me free with a head start? Then, if your sons are fleet of foot, they can try to hunt me down. They will return with good appetites, and no scraps at the table will go to waste.\" '</p><p>The captain has come over and heard part of this tale. Butting in, he turns to you and says, 'Why waste your time on this foolishness? This is a tale for the witless. Does this old man think us as credulous as any village peasant?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Agree with the captain.",
        "target": "375"
      },
      {
        "id": 1,
        "text": "Hear the rest of the story.",
        "target": "74"
      }
    ]
  },
  "4": {
    "id": "4",
    "text": "<p> If not for Ayisha's magic, Jafar would have achieved a last act of villainy from beyond the grave, for the venom on his knife was lethal and even an antidote would not save any ordinary man. But, weaving her fingers over the wound, she calls the poison out in the form of green vapour which the Caliph's servants catch in a bottle.</p><p>The Caliph sits up, amazed to be alive. </p><p>'As long as the bottle remains stoppered, father, you are safe.'</p><p>'Then place it in our deepest vaults,' he commands the captain of the guard. 'God is merciful to return my daughter to me, and surely it is by His hand that she saved my life.'</p><p>Ayisha glances at you. 'I had help, O my father.'</p><p>The Caliph nods and beckons you over.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Approach.",
        "target": "120"
      }
    ]
  },
  "5": {
    "id": "5",
    "text": "<p> The creatures swoop down. They are like giant moths with the faces of dead men, and their wings have the smell of grave shrouds. The first of them reaches you. You can see lice writhing in its coarse dusty fur. It lands on your shoulder and bites, tearing your flesh.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "5a"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "5a": {
    "id": "5a",
    "text": "<p> You give a cry of disgust and swat the moth-creature away, your punch shattering the sequin-like facets of its eye. It spirals down into the depths, but the others are not far away.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back up the steps.",
        "target": "408"
      },
      {
        "id": 1,
        "text": "Extinguish the taper.",
        "target": "449"
      },
      {
        "id": 2,
        "text": "Run to the bottom of the steps.",
        "target": "73"
      }
    ]
  },
  "6": {
    "id": "6",
    "text": "<p> Yussuf finds you wandering along the harbour front. 'I thought you must have set sail without me,' you say, grinning with relief.</p><p>'Not at all!' he declares. 'But I must confess, I am surprised to see you here in the north docks. Did you forget that we are moored over yonder, in the south docks?'</p><p>You rub your face to hide a rueful grimace. Your career as a sailor has not got off to a very promising start.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back to the ship with Yussuf.",
        "target": "431"
      },
      {
        "id": 1,
        "text": "Maybe a life at sea is not for you after all.",
        "target": "81"
      }
    ]
  },
  "7": {
    "id": "7",
    "text": "<p> You give a gasp of pain as the gryphon rips out your left eye.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "7a"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "7a": {
    "id": "7a",
    "text": "<p> Suddenly filled with renewed strength, the gryphon goes bounding across the hall and claws the monstrous goat to the floor. When its foe stops twitching, it looks up and seems about to speak, only to look around as a third foe emerges from the inner recesses of the palace. This is a great snake as long as a ship, with venom running like stagnant water from its fangs. Its eyes burn red as the fires of Iblis the Despairer, lord of all evil spirits.</p><p>You look at the wounded gryphon. 'What now?' you ask with a groan.</p><p>'Now,' it says wearily, 'the only way I can hope for victory is to drink the marrow of a human thigh-bone.'</p><p>Horror of horrors!</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Agree.",
        "target": "53"
      },
      {
        "id": 1,
        "text": "Run for your life.",
        "target": "30"
      },
      {
        "id": 2,
        "text": "Run for your life.",
        "target": "30a"
      }
    ]
  },
  "8": {
    "id": "8",
    "text": "<p> You step into the next room. The shutters are all closed and the only light comes from resinous torches. The haze of pungent smoke makes your eyes water. Blinking as your vision adjusts to the shadows, you see the natives crouching with heads bowed towards the far end of this long room. Your captain stands there as though on trial - his judges, two rows of silent figures draped in rugs, which they wear like heavy robes.</p><p>'What's this farce?' you thunder. 'Release my captain or suffer the consequences, you worthless heathen dogs.'</p><p>That seems to goad them into action. They leap up with flashing eyes and bear down on you armed with spears and knives. You back into the doorway and get ready for a fight. </p><p>The islanders launch themselves on you with shrieks of fury. 'Kill the foreign devil!' you hear the headman cry. 'It is not permitted for an outsider to gaze upon the Council of Retired Elders and live!'</p><p>Their rage works in your favour. They are all so anxious to kill you that their attacks are too fast and too wildly aimed. Weapons clash together, or lodge in the wooden pillars, more often than they find their mark in your flesh. Even so, you cannot avoid injury altogether.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you prevail?",
        "target": "8a"
      },
      {
        "id": 1,
        "text": "Can you prevail?",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "8a": {
    "id": "8a",
    "text": "<p> You glance up past the throng of angry faces to see your captain standing dumbstruck against the wall. The haze of blue resin-scented smoke makes him look like a ghost in his white tunic.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fight on and try to rescue him.",
        "target": "122"
      },
      {
        "id": 1,
        "text": "Flee while you still can.",
        "target": "145"
      }
    ]
  },
  "9": {
    "id": "9",
    "text": "<p> There is indeed a tingle of recuperative energy as you taste the delicious crisp fruit on your tongue. </p><p>The merchant was as good as his word - almost as great a miracle in itself as the magic healing. You gaze longingly at his stock of apples. These are a prize worth more than gold to a daring adventurer like yourself. </p><p>'You'd like to buy more?' he asks.</p><p>You try not to appear too eager. 'At five dinars each? Recovery from one serious sword-blow would pauper me!'</p><p>'Perhaps we can barter,' he suggests.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You show him what you have.",
        "target": "55"
      },
      {
        "id": 1,
        "text": "You have nothing that interests him.",
        "target": "9a"
      }
    ],
    "state_changes": [
      {
        "var": "golden_apple",
        "op": "add",
        "value": -1
      },
      {
        "var": "life_points",
        "op": "add",
        "value": 1
      }
    ]
  },
  "9a": {
    "id": "9a",
    "text": "<p> You can buy golden apples if you can afford 5 dinars for each one:</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Buy a golden apple for 5 dinars",
        "shop_id": 1,
        "item": "golden_apple",
        "price": 5
      },
      {
        "id": 2,
        "text": "Finished here.",
        "target": "32"
      }
    ]
  },
  "10": {
    "id": "10",
    "text": "<p> You have not forgotten the tale you heard from the old storyteller in the village. Looking along the trail, you say, 'I think you ought to give me a head start.'</p><p>'Pah!' retorts one of the brothers. 'You're all full of bluster after all.'</p><p>'It's not that. It's just that we mortals don't see so well in the dark. You want the race to be fair, don't you?'</p><p>'Fair?' The two ghouls look at each other, mouths sagging like sheep. 'What does that mean?'</p><p>'Or maybe you're afraid I'll beat you.'</p><p>With their witless pride at stake, they agree to give you a minute's head start. You race off and conceal yourself behind some rocks. Much less than a minute later, you see the two ghouls go hurtling past on strong thudding feet. Once they are out of sight, you emerge from the rocks.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back and deal with the she-ghoul.",
        "target": "34"
      },
      {
        "id": 1,
        "text": "Return to the merchant caravan.",
        "target": "57"
      }
    ],
    "state_changes": [
      {
        "var": "conch",
        "op": "set",
        "value": 0
      }
    ]
  },
  "11": {
    "id": "11",
    "text": "<p> You fall in with a merchant caravan that is heading north along the coast of the Red Sea. The owner is pleased to have a fellow traveller who can help guard his camels. </p><p>'Pirates are the main threat to trade,' he says, 'but even on the pilgrim routes close to Mecca there is still the danger of bandits. They ride out of the desert to prey on honest traders like myself.'</p><p>Despite his fears, the first couple of weeks pass without incident. You get used to the disdainful snorting of the camels as they are roused each morning, struggling resentfully to their feet and slowly filing out along the coast road. To the right lies a range of mountains of dull velvet hue, to the left is the glassy glint of the sea. </p><p>On the sixteenth day you come in sight of the walls of Mecca, the holy city, birthplace of the Prophet. Pilgrims flock from all over the civilized world as a sign of their devotion. But the merchant, Hakim, is reluctant to stop here. </p><p>'On another time I will show my respect,' he says. 'Indeed, perhaps I will visit Mecca on my return journey. But for now, look at my camels - they are heavily laden with goods that I am anxious to sell in Cairo. I cannot afford the ten days it would take to complete all the proper rituals here.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Urge him to stop at Mecca.",
        "target": "101"
      },
      {
        "id": 1,
        "text": "He has a point.",
        "target": "123"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 2
      }
    ]
  },
  "12": {
    "id": "12",
    "text": "<p> The braziers burn low while you see to your silent work. At last, with everything ready, you summon your marines ashore and together you set up a great shout which reverberates off the roof of the dome. The pirates rouse themselves to find that you have bound them all tightly with torn strips of silk.</p><p>'What devil's work's this?' demands the pirate chief. 'How did you truss us like so many geese without waking us up?'</p><p>'Too much wine made you sleep as quiet as babies,' you reply, 'and I am a skilful thief. But in all honesty, I'll admit to one mistake.' You tilt your head towards a single pirate who lies stretched out stiffly with a jewelled dagger in his chest. 'He had the bad luck to wake up. Now he sleeps the soundest sleep of all.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Collect your spoils.",
        "target": "372"
      }
    ]
  },
  "13": {
    "id": "13",
    "text": "<p> The being you face is a daemon who, in ancient times, was worshipped as a god. But there is only one God.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Lunge at him with all your strength.",
        "target": "148"
      },
      {
        "id": 1,
        "text": "Dodge and then counter-attack.",
        "target": "37"
      },
      {
        "id": 2,
        "text": "Concentrate on parrying.",
        "target": "60"
      }
    ]
  },
  "14": {
    "id": "14",
    "text": "<p> Fate smiles on you. An old acquaintance from Baghdad recognizes you among the crowd of pilgrims and hastens to greet you. Hakim is astonished and not a little put out when he learns that you are a devout believer. It means that he will have to free you from bondage. Also, it means that you too can enter the holy city for the ceremonies.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Begin your pilgrimage.",
        "target": "146"
      }
    ],
    "state_changes": [
      {
        "var": "mordant",
        "op": "set",
        "value": 0
      }
    ]
  },
  "15": {
    "id": "15",
    "text": "<p> Another few days brings you to Zeila, a medium-sized port on the west coast of the Gulf of Adan. The journey is arduous, and it has been a long time since you had a drink of water.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "15a"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "15a": {
    "id": "15a",
    "text": "<p> Refreshing yourself at a fountain by the city gates, you hear a sublimely beautiful song wafting through the dusk. It is the call to prayer from the high minaret you can see above the rooftops. Kneeling where you are, you give thanks to heaven for seeing you safely through the desert.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Explore Zeila.",
        "target": "149"
      }
    ]
  },
  "16": {
    "id": "16",
    "text": "<p> The storm hits like a black fist, stretching the sails to bursting point. Rain lances down in a suffocating icy torrent. Waves surge up over the rail until you could almost believe it was the world's end, and you had plunged into unending watery oblivion.</p><p>By dint of every trick and ploy you've learned in your long career at sea, you weather the storm. The next morning finds you drifting on water as flat as a silver mirror. The silence of extreme fatigue hangs over the whole ship's company. The sails hang in ragged tatters and the mizzen has split, but at least no one was lost during the night.</p><p>You report to the captain that there is a chance of hitting more squalls if you continue on your present course.</p><p>'You're recommending we turn back?' he asks listlessly.</p><p>You shrug. 'That may or may not be safer. You're the captain.'</p><p>He laughs bitterly. His pride has taken a knock. 'Compared to you, I'm as green as any street urchin! You decide our course.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head on to the Indies.",
        "target": "197"
      },
      {
        "id": 1,
        "text": "Turn west towards Egypt.",
        "target": "176"
      },
      {
        "id": 2,
        "text": "Go south in search of the Scarlet Isle.",
        "target": "234"
      }
    ]
  },
  "17": {
    "id": "17",
    "text": "<p> You vow that you will kill them if they do not leave you in peace.</p><p>'You have the claws of a cat, youngster,' says the Sultan, his voice half-mocking, 'but the voice of a lion. Choose: will you fight my three Arab knights, or face me alone?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Accept a duel with the Sultan himself.",
        "target": "222"
      },
      {
        "id": 1,
        "text": "Square off against his knights.",
        "target": "245"
      }
    ]
  },
  "18": {
    "id": "18",
    "text": "<p> The old man studies your slippers intently. 'Such intricate embroidery,' he says. 'I don't think I have ever seen finer workmanship. Surely these slippers are no ordinary footwear?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him about the magic slippers.",
        "target": "87"
      },
      {
        "id": 1,
        "text": "Keep those a secret.",
        "target": "61"
      }
    ]
  },
  "19": {
    "id": "19",
    "text": "<p> You return to the throne room to find a scene of deep sorrow. The Caliph's wives are weeping over his body. Even from beyond the grave, Jafar managed a last act of treachery when the poison on his knife reached the Caliph's heart.</p><p>The royal court is in chaos. No one knows who is in charge. In circumstances like this people often look for a scapegoat, so you do not wait around in the hope of a reward. Slipping off in the confusion, you fetch your horse and leave Baghdad that very night. No doubt there are other adventures awaiting you in the far corners of the world.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "20": {
    "id": "20",
    "text": "<p> Now that the danger is over, you find you are trembling in shock. You sit on the end of Ayisha's couch while you recover. 'Where did you learn sorcery?'</p><p>'My old nurse taught me,' she replies, smiling. 'Alas, she never told me any spell to undo these enchanted chains.'</p><p>'There must be a key.'</p><p>Ayisha nods. 'There is. It is in the nest of the giant bird known as the rokh. If you'd agree to try and get it, I could send you there with another spell I know.' She pauses and adds hesitantly, 'It would be dangerous, of course.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Agree.",
        "target": "114"
      },
      {
        "id": 1,
        "text": "Decline and bid her farewell.",
        "target": "66"
      }
    ]
  },
  "21": {
    "id": "21",
    "text": "<p> The Isle of Palms is a wild windswept place off the southern tip of India. Putting into a cove, you wade ashore. 'We'll wait here,' says Umar, the sailor in charge of the boat. 'If you're not back by daybreak tomorrow then, er, well...'</p><p>You nod. 'I'll be back.'</p><p>The interior of the island consists of grassy slopes surrounding a high pinnacle of rock whose peak is hidden in the clouds. Seeing sheep grazing in a valley nearby, you saunter over and find a shepherd who tells you, 'Yes, the rokh's nest is atop that pinnacle. Have you come to slay it?'</p><p>You give an astonished laugh. 'Hardly. From what I've heard, that would take an army.'</p><p>The shepherd shrugs. 'Pity. It's forever stealing my sheep - swoops down, grabs one, then carries it back to its nest.'</p><p>'Maybe you should go and live elsewhere.'</p><p>'Preposterous! The grass here is the richest to be found in all the world. See how plump my sheep are, the quality of their wool...'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head towards the pinnacle.",
        "target": "136"
      }
    ]
  },
  "22": {
    "id": "22",
    "text": "<p> The chamberlain receives you with an unctuous smile. 'You wish to see the Caliph?' he says. 'Naturally it is not quite as simple as that. There are many complicated arrangements in the running of a palace. When the Caliph gives an audience, a hundred officials are sent into a flurry of activity. I myself am only one cog in the wheel.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "He wants a bribe.",
        "target": "22a"
      },
      {
        "id": 1,
        "text": "He wants a bribe.",
        "target": "22b"
      },
      {
        "id": 2,
        "text": "He wants a bribe.",
        "target": "22c"
      }
    ]
  },
  "22a": {
    "id": "22a",
    "text": "<p> You know what is expected: a lavish gift of gold. The chamberlain takes it and leads you down a long corridor to the throne room. Here the Caliph is sprawled on thick cushions, occasionally plucking a sweetmeat from the tray at his elbow. </p><p>Jafar is also here, and you sense his glare of hatred out of the corner of your eye, but you ignore him. Bowing to the Caliph, you say, 'O Prince of the Faith, I have travelled far and endured many hardships in order to warn you of the danger that threatens you.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him the whole story.",
        "target": "477"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": -1000
      }
    ]
  },
  "22b": {
    "id": "22b",
    "text": "<p> You know what is expected: a lavish gift of gold. You give everything you can in the hope that it is enough.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The chamberlain considers your request.",
        "target": "22d"
      },
      {
        "id": 1,
        "text": "The chamberlain considers your request.",
        "target": "22e"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "set",
        "value": 0
      }
    ]
  },
  "22c": {
    "id": "22c",
    "text": "<p> Having no money to give, you are ejected from the palace at once - and promptly arrested for breaking the curfew.</p><p>You are thrown into prison. This time there will be no escape. A stake is already being sharpened. Tomorrow at dawn you will be impaled, and your warnings against Jafar will just be put down to the frantic last gambit of a convicted criminal.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "22d": {
    "id": "22d",
    "text": "<p> He is moved by your piety and leads you to the throne room where the Caliph, waving asides Jafar's protests, beckons you forward.</p><p>Bowing to the Caliph, you say, 'O Protector of the Faith, I have travelled far and endured many hardships in order to warn you of the danger that threatens you.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him everything.",
        "target": "477"
      }
    ]
  },
  "22e": {
    "id": "22e",
    "text": "<p> The chamberlain is offended by your offer and summons the guards. You are thrown into prison. </p><p>This time there will be no escape. A stake is already being sharpened. Tomorrow at dawn you will be impaled, and your warnings against Jafar will just be put down to the frantic last gambit of a convicted criminal.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "23": {
    "id": "23",
    "text": "<p> The storyteller invites you to sit with him and take a cup of tea. Soon you find yourself blurting out the whole day's sorry tale, ending with your encounter with the dervish. </p><p>He listens with a sympathetic smile. 'Truly, there is wisdom in the words of a holy man.'</p><p>You shrug. 'If so, I lack the wisdom to discern it. What can he have meant? It seemed from his tone that he was issuing a prophecy.'</p><p>'He spoke of the rokh,' says the storyteller, raising a finger to the sky. 'It is a bird as large as a whale. The beating of the rokh's wings moves the clouds above our heads. Its eyrie pierces the vault of heaven, and elephants are its prey.'</p><p>'What is that to me? The mere stuff of idle yarns.'</p><p>He shakes his head. 'This is a story that has its basis in truth. It is said - though only God is all-knowing - that the egg laid by the rokh is of pure diamond. One fragment would make a man as rich as a prince. If you seek wealth, find the rokh's nest.'</p><p>The storyteller is ready to entertain another audience, so you thank him for the tea and say goodbye. The sailor you saw earlier is standing nearby, watching a street magician pull coloured ribbons from a young girl's ears.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stroll over and introduce yourself.",
        "target": "475"
      },
      {
        "id": 1,
        "text": "Go off to ponder your next move.",
        "target": "92"
      }
    ]
  },
  "24": {
    "id": "24",
    "text": "<p> You start to stoop as if you're going for the sword, then roll forward and rush past Masrur as he lunges at you. Taken by surprise, he lashes out clumsily. Even so the tip of the blade bites deep into your shoulder, causing a flare of pain.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "24a"
      },
      {
        "id": 1,
        "text": "Can you fight on?",
        "target": "2b"
      }
    ]
  },
  "24a": {
    "id": "24a",
    "text": "<p> Masrur thunders with rage at not having killed you with one blow. You don't wait around to give him another chance. Clutching your bleeding shoulder, you dash out onto the landing. You are halfway along it when you hear a voice ring out behind you. 'What have we here? A skulking thief.'</p><p>You whirl around, but you know it is Jafar even before you set eyes on his round hateful face. There is no mistaking those vicious tones, like the squawk of a vulture as it spies a carcass. </p><p>A smile creases his fat lips. 'Well, well. You again. You must have more lives than a cat.'</p><p>'You smirking villain. And you call me a thief...' You take a step towards him. </p><p>A glimmer of alarm shows in his tiny eyes. Clapping his hands, he calls in a quavering voice for the guards. Moments later, a band of swordsmen in the Caliph's livery come bursting from an archway at the end of the landing. </p><p>'Seize this cur!' screeches Jafar.</p><p>The guards rush towards you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rely on your marksmanship.",
        "target": "230"
      },
      {
        "id": 1,
        "text": "Stand and fight.",
        "target": "47"
      },
      {
        "id": 2,
        "text": "Beat a hasty retreat.",
        "target": "253"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "25": {
    "id": "25",
    "text": "<img src=\"./images/025_illo.jpg\" alt=\"\"> The man who stands before you is as lean and muscular as a leopard. He wears the garb of a splendid Bedouin chieftain. His burnoose is clasped by a golden scorpion sting, and his silver belt is patterned like snakeskin. The pommel of his long curved sword is an ivory vulture's head. He looks down at you with a thunderhead gaze and says, 'Direct your prayers to me, mortal. Not that I care a whit for them.'</p><p>Despite your chattering teeth, you manage to ask his name.</p><p>'I am the Lord of the Desert. I have ruled this desolate region since the beginning of time. I am as merciful as the sun and as comforting as the rocks, as truthful as a mirage and as temperate as a sandstorm.'</p><p>While he proudly declaims all this, you are careful to avert your eyes so that you can look around the chamber. It is a grand treasure-hall, with tall jars of spices and perfumed oils, rugs and drapes of lushly coloured silk, as well as gold and silver coins that shimmer like rain droplets in the lamplight.</p><p>There are only two possible exits. One is a flight of steps leading up to a locked door banded with iron. The other is a curtained alcove with a strange glyph stamped into the keystone above it.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You can decipher it.",
        "target": "287"
      },
      {
        "id": 1,
        "text": "The glyph means nothing to you.",
        "target": "309"
      }
    ]
  },
  "26": {
    "id": "26",
    "text": "<p> The captain is grumpy at being woken. 'Why does God ordain that the sun shall set at dusk and rise again at dawn?' he says sarcastically. 'It is because He wishes the same for us. It reminds me of the parable of the holy man who was so tormented by the screech of owls outside his window at night that he gave up his vows and became a drunkard.'</p><p>'Would you rather I let you snore like a contented camel while river pirates steal upon us in the night-time? Or perhaps while wizards cast a spell on us?' You take him by the arm. 'Come and see what I have to show you.'</p><p>When you lead him to the rail, however, there is no sign of the silent barque. </p><p>'All you saw was the reflection of moonlight on the water,' snaps the captain. 'Go back to your mattress and let us all get some sleep.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The ship sails on.",
        "target": "375"
      }
    ]
  },
  "27": {
    "id": "27",
    "text": "<p> In his hurry to get away, Yussuf stumbles into you and the taper falls to the floor. You try to shove him away so that you can retrieve it, but it gets trodden underfoot. Darkness descends like a raven's wing. </p><p>Out of the dreadful heart-stopping silence, the only sound to be heard is the ragged rasp of Yussuf's sobbing. 'Merciful God, spare your unworthy servant,' he pleads. 'Never will I thieve nor cheat at dice again. No drop of wine will touch my lips-'</p><p>'Yussuf, listen!' You reach out a hand and shake him until he gathers his wits.</p><p>'There's nothing . . .' he says in a voice of budding hope. 'What happened to the monsters?'</p><p>Stepping forward to look for the taper, you tread on something which squelches under your heel. As Yussuf picks up and relights the taper, you see that you have crushed a swarm of beetles. </p><p>'There are the monsters.'</p><p>Yussuf gasps in wonder. 'Tiny insects! But the things we saw were huge.'</p><p>'Magical mirages. The terrors of our own minds were almost turned against us.' You peer into the gloom ahead. 'We must be on our guard, my friend. This is a place of dark sorcery.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Look around.",
        "target": "186"
      }
    ]
  },
  "28": {
    "id": "28",
    "text": "<p> You have the cool nerve of a born acrobat. The precarious descent holds no terrors for you. With surefooted agility you continue to the bottom of the staircase.</p><p>'Come on,' you call back to Yussuf. 'It isn't far.'</p><p>'Even less so if I fall,' he whines. 'Let me make the descent at my own speed.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Wait for him to catch up.",
        "target": "96"
      }
    ]
  },
  "29": {
    "id": "29",
    "text": "<p> After a few days you have to accept that the ship has sailed without you. You consider signing on aboard another ship, but by now you are so well known around the docks for having lost your ship that people there have given you the nickname Faramush - meaning dimwit. The best job you could hope for would be swabbing the decks. You decide instead to join a camel train.</p><p>You find a merchant called Hakim who is heading across the desert to Cairo. He will pay you three dinars to come along and guard his wares. Another merchant, by the name of Abdullah, wishes to travel east through the Peaks of the Slayers and is prepared to pay five dinars. The rates of pay give you a clue as to how dangerous the respective journeys are likely to be.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Join Hakim's expedition.",
        "target": "400a"
      },
      {
        "id": 1,
        "text": "Go with Abdullah.",
        "target": "296a"
      }
    ]
  },
  "30": {
    "id": "30",
    "text": "<p> You could never judge your aim now that you have only one eye, so you lose your archery skill. You must console yourself with the thought that you are still alive. And once you get an eyepatch you will at least look the part of a true sailor.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hurry back to the others.",
        "target": "402"
      }
    ],
    "state_changes": [
      {
        "var": "archery",
        "op": "set",
        "value": 0
      }
    ]
  },
  "30a": {
    "id": "30a",
    "text": "<p> You've lost an eye. But it could be worse. And once you get an eyepatch you will at least look the part of a true sailor.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hurry back to the others.",
        "target": "402"
      }
    ]
  },
  "31": {
    "id": "31",
    "text": "<p> Hurriedly tipping the grisly remains out of into the street, you roll yourself up inside the rug. The slimy residue left on the fabric has a sepulchral stench, but you try not to think about it. As the two men pick you up, you hear one of them whisper, 'The one in here must be Remorak, Lord of the Razana. Better not drop him!'</p><p>You are carried into the next room and sat on a wooden bench. The flap of the rug falls open like a cowl, allowing you to see with one eye as the men who brought you in go scurrying over to join the other islanders cringing on the floor. The room is heady with the aromatic smoke of sputtering resin torches.</p><p>You look along the bench. Other figures, also wrapped in rugs, sit along the wall. You catch a glimpse of a thin dirt-caked hand, a skeletal gleam of a face within the cowl beside you. It is a council of the dead.</p><p>Captain Ibrahim steps forward. 'Why have I been treated like this?' he demands as he looks along the row of silent rug-draped forms. He is pale despite his show of bravado.</p><p>Is it your imagination, or does one of the forms stir slightly? You barely hear a whispering crackle of a voice: <em>'You came to steal the rokh's diamond egg from its nest above the Nile.'</em></p><p>The captain jerks back his head in denial. 'The rokh? The giant bird of legend? Stuff and nonsense. How can I feed my family on imaginary wealth? I came here for honest trade.'</p><p>Some of the cowled figures sway together like long stalks of grass after the rain. You cannot tell if they are really moving or whether it is a trick of the shimmering smoke-hazed light. Nor do you want to know if you really can hear that soft susurration of tomb-cold voices. The villagers are still prostrate on the floor with their faces pressed to the wooden boards. It's time you did something.</p><p><em>'The foreign sailor is lying,'</em> you say in your best attempt at a corpse's voice. <em>'I, Remorak, will prove it will my magic. All avert your eyes! Raise your voices in prayer to your ancestors!'</em></p><p>They commence a chant that drowns out any other sounds as you shrug off the musty rug and hurriedly lead your amazed captain to the door.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Get back to the others.",
        "target": "145"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      }
    ]
  },
  "32": {
    "id": "32",
    "text": "<p> Each of the golden apples will heal 1 lost life point when eaten. You can eat an apple by selecting it on your Character Sheet.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head back to the ship.",
        "target": "78"
      }
    ]
  },
  "33": {
    "id": "33",
    "text": "<p> Your blow splits the ghoul's head like a gourd. Whatever spills out is not like any human brain: a quivering black mass that reminds you of a dead octopus. Retching, you cast the wooden stick aside and hastily search the hut for anything worth taking. You find fifteen dinars in a jar over the hearth - money no doubt stolen from the poor souls the ghouls waylaid and ate.</p><p>You also take a thick woollen cloak. You have no desire to spend the night here, and you will need something to keep warm while sheltering amid the rocks. The cloak is crawling with lice, but you hold it over the fire for a few minutes so that the smoke drives most of them out.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You'll be sleeping rough tonight.",
        "target": "35"
      }
    ],
    "state_changes": [
      {
        "var": "cloak",
        "op": "set",
        "value": 1
      },
      {
        "var": "money",
        "op": "add",
        "value": 15
      }
    ]
  },
  "34": {
    "id": "34",
    "text": "<p> The ghoul dam looks up with bulging eyes as the door splinters under your kick. 'What have you done to my sons?' she screeches before lunging towards a meat cleaver hanging on the wall. A worm-eaten old stick rests beside the door.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Grab the stick and attack her.",
        "target": "435"
      },
      {
        "id": 1,
        "text": "Use a sword.",
        "target": "391"
      },
      {
        "id": 2,
        "text": "Rely on your bare hands.",
        "target": "413"
      }
    ]
  },
  "35": {
    "id": "35",
    "text": "<p> You go and shelter in a cave, after first checking that it isn't already occupied. A raw wind howls outside, but you are snug inside your woollen cloak. Even so, you get very little sleep after your horrific experience. Rising with the first silver light of the predawn, you head down out of the hills to join the others.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Resume your journey.",
        "target": "289"
      }
    ]
  },
  "36": {
    "id": "36",
    "text": "<p> It feels as though the wind is blasting your skin dry. You wrap your turban across your face and stumble on, barely able to see. There is no way you could hear the others even if they shouted. The tug of the other camels on the ropes is the only reassurance that you are not entirely alone in this ordeal.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head straight into the storm.",
        "target": "105"
      },
      {
        "id": 1,
        "text": "Veer off to the left.",
        "target": "82"
      },
      {
        "id": 2,
        "text": "Go to the right.",
        "target": "59"
      },
      {
        "id": 3,
        "text": "You can't go another step.",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "37": {
    "id": "37",
    "text": "<p> His blade whips around, carving a livid streak across your breastbone. Your own blow had no effect on him.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Get close for a full-strength attack.",
        "target": "148"
      },
      {
        "id": 1,
        "text": "Lunge at him from arm's length.",
        "target": "106"
      },
      {
        "id": 2,
        "text": "Retreat while parrying.",
        "target": "60"
      },
      {
        "id": 3,
        "text": "You can't fight on.",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "38": {
    "id": "38",
    "text": "<p> You explain to the old man that there has been a mistake. You are not the one who stole the Sultan's ruby.</p><p>Surprisingly, his answer to this is a thin wheeze of laughter. 'Not the Shadow, eh? I thought not. I doubt they'll ever catch that one.'</p><p>'Who is the Shadow?'</p><p>'The most daring of knaves. The rogue who purloined the jinn ring of Ala al-Din and the flying rug once owned by the Emir of Cordoba, as well as the crown of the infidel ruler Shah al Ma'in. He - or she, for the Shadow is a figure veiled in mystery - has vowed next to steal the diamond egg of the rokh.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You know where the rokh nests.",
        "target": "64"
      },
      {
        "id": 1,
        "text": "Humour him.",
        "target": "470"
      }
    ]
  },
  "39": {
    "id": "39",
    "text": "<p> You drank the poisoned water soon after coming aboard. Assuming the hawser was cut soon after, and judging the time now to be midmorning, you have been drifting for about fourteen hours. Allowing for the breeze and ocean current, you quickly estimate how far the ship has covered in that period.</p><p>It is hard work raising the sails on your own, but you have the advantage of long nautical experience. Bringing the ship around, you steer towards your best guess of where the other ship would have reached by dawn. You know that your friends will sail back looking for you once they find you've been set adrift. Not out of sentiment, of course. It's just that nothing would stop Captain Ibrahim from retrieving a free cargo of glass and porcelain.</p><p>Unless he and the crew have already been poisoned themselves, that is. </p><p>You keep on searching the horizon as the sun reaches its zenith, then sinks down the sky. Finally your persistence is rewarded by the sight of your own ship plunging through the waves towards you. As she comes alongside, you leap across to a great cheer from the crew.</p><p>Once you've warned the captain that he probably has a stowaway on board, he orders the ship thoroughly searched. Soon there are shouts from the hold, and a small plump man in a long robe is dragged on deck. 'He was hiding behind one of the crates,' says the first mate.</p><p>The stowaway fixes you with a resentful stare. 'Curse you! How did you sail that ship back on your own? If not for you, I'd have poisoned the water tonight and made myself master of the vessel.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Interrogate him.",
        "target": "174"
      }
    ]
  },
  "40": {
    "id": "40",
    "text": "<p> The riders are close behind. You scramble up a bank of loose earth, buying yourself a little time. Pushing through a thicket of mauve ferns, you arrive at a deep ravine whose depths are filled with haze. The ravine is spanned by a great glass column. You place a foot down to test it, finding it very slippery.</p><p>The thunder of hoofbeats warns you that the riders are searching for a way to follow.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Risk crossing the glass column.",
        "target": "63"
      },
      {
        "id": 1,
        "text": "Wait to confront them with your back to the sheer drop.",
        "target": "86"
      }
    ]
  },
  "41": {
    "id": "41",
    "text": "<p> His eyes widen as he notices the bundle of rope over your shoulder. 'I travelled far and wide in my youth,' he says. 'Now, don't tell me - let me guess. That's Indian hemp, isn't it? I saw some bizarre little conjuring tricks that used a coil of rope just like that, during my time in the east.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him about the Indian rope trick.",
        "target": "110"
      },
      {
        "id": 1,
        "text": "Keep it secret.",
        "target": "61"
      }
    ]
  },
  "42": {
    "id": "42",
    "text": "<p> You travel on until you come to the sea. Walking along the shore, you approach a fishing village where men squat on the sand mending their nets. You are about to go up and greet them when you notice a slender young fellow crouching beside an overturned boat. He has only one hand, the other arm ending in a bandaged stump, and he is crying.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stop to talk to him.",
        "target": "135"
      },
      {
        "id": 1,
        "text": "Walk past.",
        "target": "492"
      }
    ]
  },
  "43": {
    "id": "43",
    "text": "<p> Your jinni utters a last forlorn cry which echoes in the air as he fades into wisps of torn vapour. The ring is useless to you now the jinni has been destroyed.</p><p>Azenomei leans back gasping against the wall. Now, while he is still stunned from the fight with the jinni, you have a chance to act.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Attack him.",
        "target": "423"
      },
      {
        "id": 1,
        "text": "Run for it.",
        "target": "97"
      },
      {
        "id": 2,
        "text": "Run for it.",
        "target": "126"
      }
    ],
    "state_changes": [
      {
        "var": "ring",
        "op": "set",
        "value": 0
      }
    ]
  },
  "44": {
    "id": "44",
    "text": "<p> This far down the slope, you are in no immediate danger from lava. The deadly hot gases spewed out of the volcano are another matter. They move faster than a cheetah can run, and that dark cloud you can see would bake the flesh off your bones in seconds. </p><p>You dive into the stream, forcing yourself deep under the clear cool water while the cloud of lethal hot gas rolls past overhead. At last you can hold your breath no longer. Rising with a gasp, you discover that the first wave of gas has passed. The air is filled with a reek like the fires of Hell. You hurry back down the mountain before the advancing ooze of lava cuts you off.</p><p>After several more days of searching, you are certain that the legends are wrong. If the rokh really does exist, its nest is not in this part of the world.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Journey to the east.",
        "target": "180"
      },
      {
        "id": 1,
        "text": "Abandon the search and go home.",
        "target": "113"
      }
    ]
  },
  "45": {
    "id": "45",
    "text": "<p> Using the magic lamp to turn invisible, you sneak right under the noses of the sentries, along a gallery lined with officials and slaves, past the Caliph's bodyguard, and into the throne room where Harun al-Rashid sits dining on delicate morsels of food. Nearby stands Jafar, an attentive smile masking his thoughts of treachery.</p><p>Extinguishing the light, you suddenly become visible. Harun leaps up with a start. 'God protect me from evil magic!' he cries.</p><p>'Wait, O Prince of the Faith,' you say, bowing to kiss the floor in front of him. 'I am no jinni, but your loyal subject. Hear my words.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Make them count.",
        "target": "477"
      }
    ]
  },
  "46": {
    "id": "46",
    "text": "<p> The demon pursues you into the covered passage. It realizes its mistake when you leap on it. Here it cannot retreat into the air every few seconds to recuperate from its wounds. 'Bad move, devil,' you snarl as you pound it with heavy blows, 'now you've got to fight fair.'</p><p>The demon's talons scrape you to the bone, but you give two blows for every one that it inflicts.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You're winning.",
        "target": "275"
      },
      {
        "id": 1,
        "text": "Even so, you're too badly injured.",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "47": {
    "id": "47",
    "text": "<p> The palace guards are upon you like a pack of wolves. Their standard trick is to get in close and buffet a foe with their shields, using their swords only when there is no danger of striking one another. Knowing this, you drop low and let the first guard sweep his shield over your head, immediately straightening up and using the force of your legs to propel him off the balcony. He gives a shriek as he tumbles to the floor of the hall below. But now the next two guards have reached you - and you cannot fool them all with the same trick.</p><p>Jafar stands behind the guards with his flabby hands balled into fists. He is spitting with fury as he orders them to rush you, but they are in no hurry to throw their lives away. </p><p>You beat a retreat along the landing, fighting for your life every step of the way. You take several nasty wounds.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight your way through?",
        "target": "47a"
      },
      {
        "id": 1,
        "text": "Can you survive such punishment?",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "47a": {
    "id": "47a",
    "text": "<p> It seems to take for ever, but at last you reach the stairway and rush off into the safety of the night. Your heart is thudding at the thought of your bold escapade - but it is still a bitter heart, for you have achieved next to nothing. Jafar remains free to plague the realm with his wickedness, and your own personal grievance remains unpunished. </p><p>You know now that you cannot expect to right all wrongs in a single night. First you must make your fortune. Once you are rich, you will be able to get an audience with the Caliph and tell him everything. But how will you earn fame and fortune?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Join a merchant caravan.",
        "target": "183"
      },
      {
        "id": 1,
        "text": "Sail in search of exotic lands.",
        "target": "160"
      }
    ]
  },
  "48": {
    "id": "48",
    "text": "<p> The barque takes shape out of the darkness. You feel like one who, sunk in slumber, witnesses the vivid colours of a dream. The sails of the barque have a satin sheen as though woven of silver. Jewels sparkle around the lamps set at her prow, and her rail is decorated with inlays of polished ivory. At the stern is a small pavilion curtained with sequined silks. As the breeze stirs the drapes and gutters the lantern-light inside, you see a woman reclining there on a cushioned divan.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Swim out to the barque.",
        "target": "94"
      },
      {
        "id": 1,
        "text": "Go to fetch the captain.",
        "target": "26"
      }
    ]
  },
  "49": {
    "id": "49",
    "text": "<p> The guards burst into the room, only to find a dead body slumped on the cold marble floor. Shrugging, they sheathe their swords. Jafar pushes his way to the front and demands to know what is going on.</p><p>'The intruder committed suicide, it seems, lord,' says the captain of the guard, indicating the trickle of poison on your lips.</p><p>Jafar hisses between his teeth. 'A pity. I'd have liked to oversee the interrogation of this one.'</p><p>The captain hides a flicker of disgust at Jafar's open cruelty. Turning away sharply, he says to the guards, 'Take this corpse to the burial-ground.'</p><p>You are taken to the edge of the city and left in a small brick building beside the cemetery, there to await burial in the morning. When the guards have left, the jinni breathes the gust of life back into your lungs. Rubbing your stiff limbs, you get up and fix him with a sour frown. 'Why did you make them think I was dead?'</p><p>He smiles - at least, you think it's a smile. 'They're not going to kill you twice, are they?'</p><p>'But why didn't you turn their swords to snakes? Or fill the room with choking fog? Or whisk me away to safety on a flying cloud?'</p><p>'Oh, what are you complaining about?' snaps the jinni. 'I got you out safely, didn't I?' He becomes a twist of vapour that slowly flows back into your ring.</p><p>As you walk back from the graveyard, you consider that it might be wise to quit Baghdad for a while. The wild corners of the world are full of mystery and promise, and adventurers of olden times often returned from their travels laden with riches. If you could do the same, then you would be a better position to bring Jafar to justice. It only remains to decide your route:</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "By sea.",
        "target": "160"
      },
      {
        "id": 1,
        "text": "By land.",
        "target": "183"
      }
    ]
  },
  "50": {
    "id": "50",
    "text": "<img src=\"./images/050_illo.jpg\" alt=\"\"> 'Come,' says the gryphon. It leads you to a vestibule where you see a table of platinum that glints with a liquid sheen. On the table rest two objects: a sapphire the size of an eye, and a whole leg of burnished gold. Pressing the sapphire to your empty socket, you discover that you can see as well through it as you could with the eye you lost. The leg, too, knits to your flesh. It is as strong as your former limb.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "And you have new skills too.",
        "target": "50a"
      },
      {
        "id": 1,
        "text": "And you have new a skill too.",
        "target": "50b"
      },
      {
        "id": 2,
        "text": "And you have a new skill too.",
        "target": "50c"
      },
      {
        "id": 3,
        "text": "You're whole again.",
        "target": "50d"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 5
      }
    ]
  },
  "50a": {
    "id": "50a",
    "text": "<p> You have acquired Luck and Agility. These are in addition to the skills you began the adventure with - that is, you now have six skills instead of the usual limit of four.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rejoin your companions.",
        "target": "98"
      },
      {
        "id": 1,
        "text": "Ask how you were able to walk on thin air.",
        "target": "76"
      }
    ],
    "state_changes": [
      {
        "var": "luck",
        "op": "set",
        "value": 1
      },
      {
        "var": "agility",
        "op": "set",
        "value": 1
      }
    ]
  },
  "50b": {
    "id": "50b",
    "text": "<p> You have acquired Agility. This is in addition to the skills you began the adventure with - that is, you now have five skills instead of the usual limit of four.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rejoin your companions.",
        "target": "98"
      },
      {
        "id": 1,
        "text": "Ask how you were able to walk on thin air.",
        "target": "76"
      }
    ],
    "state_changes": [
      {
        "var": "agility",
        "op": "set",
        "value": 1
      }
    ]
  },
  "50c": {
    "id": "50c",
    "text": "<p> You have acquired Luck. This is in addition to the skills you began the adventure with - that is, you now have five skills instead of the usual limit of four.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rejoin your companions.",
        "target": "98"
      },
      {
        "id": 1,
        "text": "Ask how you were able to walk on thin air.",
        "target": "76"
      }
    ],
    "state_changes": [
      {
        "var": "luck",
        "op": "set",
        "value": 1
      }
    ]
  },
  "50d": {
    "id": "50d",
    "text": "<p> 'You are stronger than you have ever been,' the gryphon assures you. 'Having been tested in the white heat of adversity, the blade of your soul is now reforged.' </p><p>You flex your gold leg, tap a fingernail against the hard blue orb of your crystal eye. 'It will take some getting used to.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rejoin your companions.",
        "target": "98"
      },
      {
        "id": 1,
        "text": "How were you able to walk on thin air?",
        "target": "76"
      }
    ],
    "state_changes": [
      {
        "var": "life_points_max",
        "op": "add",
        "value": 1
      }
    ]
  },
  "51": {
    "id": "51",
    "text": "<p> You have crept, clambered and crawled through many places that were danker and darker than this. Your sharpened senses do not need light. You turn around to face the steps and continue the descent backwards, like a climber, moving sure-footedly until you feel the firm expanse of rock that marks the bottom of the staircase.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Wait for Yussef to catch up.",
        "target": "96"
      }
    ]
  },
  "52": {
    "id": "52",
    "text": "<p> You press on along the tunnel. The taper gives only a smouldering glow which is barely enough to see beyond arm's length. After several minutes, you begin to feel a slight breeze. 'It might be the way out,' says Yussuf hopefully, quickening his step. </p><p>You doubt it. The air still has a stale subterranean reek. Yussuf stops abruptly with a small groan, and you hurry to join him. The tunnel has emerged at the top of a narrow stone staircase, barely two feet wide. The steps look dank and slippery. On either side is a sheer drop into darkness. You can sense an immense cavern, but the walls and ceiling and floor are too far away for the feeble light of the taper to reach. All you can see is that alarmingly narrow staircase stretching into the unseen depths below.</p><p>Yussuf finds a pebble and drops it off the side of the top step. Seven heartbeats later you hear it hit the floor of the cavern. He looks at you. 'We have to go down?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Turn back.",
        "target": "408"
      },
      {
        "id": 1,
        "text": "Start down the staircase.",
        "target": "430"
      }
    ]
  },
  "53": {
    "id": "53",
    "text": "<p> The great beak descends, cracking open your leg. You give a great shriek of agony and sink back with a groan.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "53a"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "53a": {
    "id": "53a",
    "text": "<p> You are barely conscious enough to witness the battle. It seems to your watery gaze as though the two monstrous adversaries are submerged in a red mist. With thundering howls and hissing war-cries, they twine and writhe in a battle that shakes the very walls around you. At last the gryphon is victorious. It comes padding across the golden tiles to your side.</p><p>'That was the last,' it says. 'They slew my masters, who once dwelt here, but now I have avenged them.'</p><p>'At what a cost!' you wail. 'See me - blinded, disfigured and crippled. Oh, merciful God, what have I done to merit such a fate?'</p><p>Instead of answering, the gryphon turns and walks away.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Crawl after it.",
        "target": "50"
      }
    ]
  },
  "54": {
    "id": "54",
    "text": "<p> You rouse yourself to see a city on the river ahead. With your last reserves of strength, you paddle your little raft to the bank and crawl ashore.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Enter the city.",
        "target": "442"
      }
    ]
  },
  "55": {
    "id": "55",
    "text": "<p> The fruit seller will give you golden apples in exchange for each of the following items:</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Swap your jewelled sword for 2 golden apples.",
        "shop_id": 2,
        "give_item": "jewelled_sword",
        "get_item": "golden_apple",
        "get_amount": 2
      },
      {
        "id": 2,
        "text": "Swap your cloak for 1 golden apple.",
        "shop_id": 3,
        "give_item": "cloak",
        "get_item": "golden_apple",
        "get_amount": 1
      },
      {
        "id": 4,
        "text": "Swap your hawk for 1 golden apple.",
        "shop_id": 4,
        "give_item": "hawk",
        "get_item": "golden_apple",
        "get_amount": 1
      },
      {
        "id": 6,
        "text": "Swap a black jewel for 2 golden apples.",
        "shop_id": 5,
        "give_item": "black_jewel",
        "get_item": "golden_apple",
        "get_amount": 2
      },
      {
        "id": 8,
        "text": "Buy more apples for cash.",
        "target": "9a"
      },
      {
        "id": 9,
        "text": "Continue on your way.",
        "target": "32"
      }
    ]
  },
  "56": {
    "id": "56",
    "text": "<p> You remember the tale of a man who was captured by a family of ghouls. To save his life, he challenged the two sons to a race. </p><p>Securing a head start, he hid himself in a thorn bush until they ran past and then doubled back to the hut where their mother was preparing supper. He knew he had to kill her, otherwise her sorcery would find him wherever he ran. Luckily he also knew that steel cannot kill a ghoul witch; only a wooden weapon will do. Taking up a stick, he gave her a single good clout that dashed out her brains. And it was good for him that his first blow was decisive, because although a ghoul can be hurt with one blow, a second blow will only heal its wounds.</p><p>You look along the trail. 'I think I should get a head start.'</p><p>'Pah!' retorts one of the brothers. 'You're all full of bluster after all.'</p><p>'It's not that. It's just that we mortals don't see so well in the dark. You want the race to be fair, don't you?'</p><p>'Fair?' The ghouls look at each other, as clueless as a couple of sheep.</p><p>'Or maybe you're afraid I'll beat you.'</p><p>That does the trick. With pride at stake, they agree to give you a minute's head start. You race off and conceal yourself behind some rocks. Much less than a minute later, you see the two ghouls go hurtling past on strong thudding feet. Once they are out of sight, you emerge from the rocks.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back to the hut to face the she-ghoul.",
        "target": "34"
      },
      {
        "id": 1,
        "text": "Try to get back to the merchant caravan.",
        "target": "57"
      }
    ]
  },
  "57": {
    "id": "57",
    "text": "<p> An ominous cough breaks the silence of the night. You whirl around. Your heart sinks when you see the ghoulish witch and her sons standing right behind you. She is pointing a divining rod in your direction, saying through gritted teeth: 'There's your supper. Don't lose it again!'</p><p>She clouts you across the face with the rod.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You sink to the ground.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "What now?",
        "target": "57a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "57a": {
    "id": "57a",
    "text": "<p> Dazed from the ghoul dam's blow, you are gripped firmly by each arm and led back to the hut. The ghouls shove you into the pantry and the mother starts looking at the jars along the shelves. 'Let's see... a bit of pepper and some garlic ought to set off the flavours nicely.'</p><p>This is your last chance.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Trust your jinni to save you.",
        "target": "327"
      },
      {
        "id": 1,
        "text": "Size up your chances in a straight fight.",
        "target": "370"
      },
      {
        "id": 2,
        "text": "At least go down fighting.",
        "target": "305"
      }
    ]
  },
  "58": {
    "id": "58",
    "text": "<p> You pick your way between the sleeping pirates, open-mouthed at the wealth carelessly scattered all around. In your amazement you fail to notice their ship's cat curled up on a pile of velvet cushions. You tread on its tail and there is a howl that rises to the high domed roof. In seconds the pirates are on their feet, staring around in shock and fury.</p><p>Before you have a chance to call out to your marines, one of the pirates raises an earthenware jug and sloshes its oily contents all over you. On contact with the air, the oil bursts into flame. You are engulfed in Greek fire, the sticky chemical used in sea battles. If you can't put it out quickly, you'll be burned alive.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Think fast.",
        "target": "488"
      },
      {
        "id": 1,
        "text": "Dive into the water.",
        "target": "58a"
      }
    ]
  },
  "58a": {
    "id": "58a",
    "text": "<p> That will not save you. Greek fire burns even underwater. You are charred to a blackened crisp in seconds, and that is the end of your adventure.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "59": {
    "id": "59",
    "text": "<p> Weak, deafened by the shriek of the wind and blinded by the driven sand, you stumble onwards. Desperation drives you to keep going. If you fall now, you know that you would soon be buried beneath the dunes.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You don't have the strength to go on.",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "Go straight into the teeth of the storm.",
        "target": "105"
      },
      {
        "id": 2,
        "text": "Head right.",
        "target": "128"
      },
      {
        "id": 3,
        "text": "Strike off to the left.",
        "target": "82"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "60": {
    "id": "60",
    "text": "<p> Your blades clash with a deathly knell that resounds off the marble walls. His strength is incredible. Your parry is knocked aside and you are nicked painfully on the shoulder.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You can't fight on.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Parry his next blow.",
        "target": "129"
      },
      {
        "id": 2,
        "text": "Try for a long-reach stab at his wrist.",
        "target": "37"
      },
      {
        "id": 3,
        "text": "Drive in close for a desperate attack.",
        "target": "83"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "61": {
    "id": "61",
    "text": "<p> The oubliette is a bell-shaped chamber lined with muck and straw. There are several other prisoners here. Seeing you pacing around, one of them sighs and points to the grille in the middle of the ceiling. 'Some of us have been here for years,' he says. 'Food is thrown down every day or so, if we're lucky. Other than that we're forgotten here. There's no escape.'</p><p>'What about water?'</p><p>'You must lick what you can off the walls.' He shows you his tongue - black and covered with sores.</p><p>You position yourself directly below the grille and stare up. A distance of almost twenty feet. The walls funnel in towards it, so there is no chance of climbing up.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Use magic slippers.",
        "target": "133"
      },
      {
        "id": 1,
        "text": "Use Indian rope.",
        "target": "133"
      },
      {
        "id": 2,
        "text": "Bide your time and see what happens.",
        "target": "155"
      }
    ]
  },
  "62": {
    "id": "62",
    "text": "<p> The discovery of a small keg of date wine in the hold saves you from the threat of dehydration, but you are still in desperate straits. You cannot sail the ship alone. Borne on by the current, you drift for days until you see a hazy stretch of land. On getting closer, it turns out to be a region of mangrove swamps: gnarled trees with their roots surrounded by swirling salt water. You peer inland. The swamps continue as far as the eye can see.</p><p>As the ship drifts sluggishly along the shoreline, a host of hairless little monkeys come gibbering through the mangrove roots. Their skins are as smooth and blotchy as old bananas. They leap and splash through the waves towards the ship. Scrambling over the side in a crash of surf, they pilfer the lockers. You rush around trying to stop them but they are too quick. Clutching their plunder, they drop overboard and swim rapidly away.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stop them with sorcery.",
        "target": "220"
      },
      {
        "id": 1,
        "text": "Better see what they took.",
        "target": "243"
      }
    ]
  },
  "63": {
    "id": "63",
    "text": "<p> The glass has been ground and polished until it is almost frictionless. Crossing will be tricky.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Not for one as agile as you.",
        "target": "109"
      },
      {
        "id": 1,
        "text": "Maybe there's another way.",
        "target": "132"
      },
      {
        "id": 2,
        "text": "Careful…",
        "target": "63a"
      }
    ]
  },
  "63a": {
    "id": "63a",
    "text": "<p> You have taken only a few paces across when your foot slips on the glass surface and you plunge to your doom in the chasm far below.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "64": {
    "id": "64",
    "text": "<p> The egg of the rokh!' you say with a far-away look in your eye. 'I've heard its nest lies just below the clouds, atop a pinnacle overlooking the headwaters of the Nile.'</p><p>'No doubt it is high above the ground,' retorts the old man, 'but as for being at the head of the Nile - nonsense! I myself was born in a village at the head of the Nile. If there had been any high peak nearby on which the rokh nested, I would surely know about it. The truth is that the rokh is to be found on the Isle of Palms, far to the east.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Perhaps he's right.",
        "target": "470"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 0
      },
      {
        "var": "fabric",
        "op": "set",
        "value": 1
      }
    ]
  },
  "65": {
    "id": "65",
    "text": "<p> Drawing a deep breath just before the smoke cloud reaches you, you stumble blindly forward to the middle of the room. The hubble-bubble pipe is still there. Pushing the tube into your mouth, you draw air into your lungs. You guessed right. The noxious smoke, in passing through the water of the pipe, is rendered harmless. </p><p>The three sorcerers are calling to each other, but they cannot see what's happening because of the cloud of smoke. You scoop up the chart they were looking at, then grope your way to the back of the room. There you find a doorway that leads out of the citadel, and you make your escape.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue on your way.",
        "target": "42"
      }
    ],
    "state_changes": [
      {
        "var": "chart",
        "op": "set",
        "value": 1
      }
    ]
  },
  "66": {
    "id": "66",
    "text": "<p> You start back across the baking desert sands. Billows of heat rise off the ground, making the horizon tremble. Rocks and dust lie in all directions as far as the eye can see.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on.",
        "target": "454"
      },
      {
        "id": 1,
        "text": "Can you make it?",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "harem",
        "op": "set",
        "value": 0
      },
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "67": {
    "id": "67",
    "text": "<p> Hakim spends the next few hours sunk in silence as you travel on. He seems to be weighing something in his conscience. At last he comes to you and, with a solemn expression, produces a key with which he unlocks your slave collar. 'God would not forgive me if I kept in bondage one to whom I owe my life,' he says.</p><p>'Cheer up,' you say, enjoying the feel of the dry desert air against skin chafed for so long by the iron collar. 'Don't think of it as losing a slave, more as gaining a friend.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Onwards.",
        "target": "218"
      }
    ],
    "state_changes": [
      {
        "var": "mordant",
        "op": "set",
        "value": 0
      }
    ]
  },
  "68": {
    "id": "68",
    "text": "<p> You come up with several plans.</p><p>First, you could try to get to see the Caliph. You know that this would involve giving the chamberlain a gift - preferably worth more than one thousand dinars to prove you're a person of high rank. </p><p>Second, you could approach someone who works at the palace and get them to take you to the Caliph in person. You know several palace employees, but you cannot be sure which of them are loyal to the Caliph himself and which are in the pay of Jafar the Vizier. </p><p>Third, you know that the Caliph sometimes travels around the city in disguise at night. It ought to be possible for you to tail him and perhaps get close enough to tell him your story - as long as his bodyguard, Masrur, doesn't kill you first.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Bribe the chamberlain.",
        "target": "22"
      },
      {
        "id": 1,
        "text": "Find an intermediary.",
        "target": "361"
      },
      {
        "id": 2,
        "text": "Approach the Caliph when he's in disguise.",
        "target": "182"
      }
    ]
  },
  "69": {
    "id": "69",
    "text": "<p> The astrologer emerges from his shop and stands gazing out across the plaza. The festival seems not to interest him. The crowds of merry-makers might as well be the flitting shadows of puppets. His gaze is fixed firmly on the sky, where the moon shows as a thin sliver of ivory above the spires of the city.</p><p>You step up beside him. 'Barely moments ago, a dervish spoke significantly to me of the sky's portents,' you say. 'What can you see amid the stars?'</p><p>He turns to look at you. His gaze is misty with secret lore. He sweeps his arm up, taking in the constellations spread out above, then ends the gesture by pointing at the door of his shop. 'The stars are the key to all mysteries, but yonder is the portal,' he tells you. 'One dinar will oil the lock, and then you may step into your future.'</p><p>The sudden talk of money banishes all fancies. 'Are you a sage, old man, or are you the father of all merchants? Have you so little heart for the beauty of the night that you must sully it with talk of money?'</p><p>He strokes his beard. 'A dinar only! Will you balk at such a paltry price, when you have the chance to learn what the future holds?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Pay him a dinar.",
        "target": "115"
      },
      {
        "id": 1,
        "text": "Talk to the sailor who just left.",
        "target": "475"
      },
      {
        "id": 2,
        "text": "Approach the storyteller in the plaza.",
        "target": "23"
      },
      {
        "id": 3,
        "text": "Go on your way.",
        "target": "92"
      }
    ]
  },
  "70": {
    "id": "70",
    "text": "<p> You weave to one side, then jump back as Masrur's mighty blade comes chopping down. The blow misses you by inches, striking the floor where you were standing just a second ago. There is a harsh ringing sound as the tip of the blade snaps off, followed by Masrur's scream of scarlet rage.</p><p>If he wasn't in a killing mood before, he is now. Dodging past, you race out onto the landing. Jafar follows, clapping his hands to summon the guards. Sure enough, a band of swordsmen come pouring through an arch at the end of the landing and rush towards you. You will have to act fast.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Use your archery skill.",
        "target": "230"
      },
      {
        "id": 1,
        "text": "Fight.",
        "target": "47"
      },
      {
        "id": 2,
        "text": "Make a run for it.",
        "target": "253"
      }
    ]
  },
  "71": {
    "id": "71",
    "text": "<p> It feels as though you have no strength left in your body. You are simply stumbling on, each step a miracle in itself. Sometimes you half faint, tumbling down a dune only to pick yourself up and somehow find the will to carry on.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's no use.",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "The end is in sight.",
        "target": "71b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "71b": {
    "id": "71b",
    "text": "<p> You eventually see a swaying patch of greenery ahead and give a parched croak of joy when you realize it is the edge of the desert.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Praise be to the Most High!",
        "target": "113"
      }
    ]
  },
  "72": {
    "id": "72",
    "text": "<p> The guards burst into the room. You jump up onto the parapet and leap, landing with bent knees and rolling to absorb the impact. Even so, the wind is knocked out of your lungs and for a moment you lie motionless while taking stock of your injuries from the fall.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you get up?",
        "target": "72a"
      },
      {
        "id": 1,
        "text": "You've broken something.",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "72a": {
    "id": "72a",
    "text": "<p> You look up to see the guards glaring from the balcony. You drag yourself to your feet despite the pain, as it will not take them long to raise the alarm. Hobbling off towards the gate, you are met by a sentry who has heard the commotion. Peering past your shoulder, he demands: 'What's going on?'</p><p>'A thief broke into the Caliph's bedchamber and stole his fruit bowl,' you say, adopting a hangdog expression. 'Don't suppose I'll be getting any handouts now, what with all the fuss. Got any alms for a poor cripple, guv'nor?'</p><p>He gives you a contemptuous glance and shoves you aside. 'Begone, you wretch,' he cries, drawing his sword and running past you into the palace.</p><p>You smile as you watch him go. 'Thanks, I will,' you say under your breath.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A narrow escape.",
        "target": "383"
      }
    ]
  },
  "73": {
    "id": "73",
    "text": "<p> The steps have been made slimy by dripping water. Your foot skids out from under you and the next moment you are plummeting through space.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Maybe luck is with you.",
        "target": "119"
      },
      {
        "id": 1,
        "text": "It's a long way down.",
        "target": "491"
      }
    ]
  },
  "74": {
    "id": "74",
    "text": "<p> The storyteller continues, ignoring the captain's derisive scowl. 'The she-ghoul was not impressed by the prince's proposal, but her sons' pride was pricked. They insisted on proving they could outrun any mortal. \"As babes we were suckled on blood, and human flesh has always been our meat,\" they said to the prince. \"Go. You'll have five minutes' head start.\"</p><p>'The prince raced away, but as soon as he was out of sight of the ghouls he hid himself in a thorn bush. Soon - much sooner than they'd promised - the brothers came looking for him. \"He's got further than I thought,\" he heard one say. \"It's true,\" said the other, peering into the distance, \"but we'll catch him.\"</p><p>'Once they had run off, the prince doubled back to the hut. Now, in infancy his nurse had told him many old stories like this one. He knew that steel is of no use in killing a ghoul. Only strong wood will do the trick. He crept in to see the crone stirring the cooking-pot, and taking up a stick from beside the door he clouted her smartly!' The storyteller slaps his hands together, producing such a loud noise that several small children jump back in alarm.</p><p>Then he grins and shakes his head sadly. 'Ah, if only he'd listened more carefully to his old nurse. For you see, he forgot that one hard blow can kill a ghoul, but a second blow will only bring it back to life stronger than before. He gave the old crone two blows for good measure - and up she leapt, full of terrible vigour, and, seizing the prince, stuffed him into the cooking-pot.'</p><p>He stops and looks around. 'And that is the end of the prince's tale.'</p><p>'What drivel,' storms the captain. 'And not even a happy ending! Come, it's time to set sail.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Onwards.",
        "target": "375"
      }
    ],
    "state_changes": [
      {
        "var": "conch",
        "op": "set",
        "value": 1
      }
    ]
  },
  "75": {
    "id": "75",
    "text": "<img src=\"./images/075_illo.jpg\" alt=\"\"> Venturing ashore, you find a flat grass-covered plain almost devoid of trees. Captain Ibrahim points out a white tower near the middle of the island. Facing it at a distance of three hundred paces or so is a large mound of white stones. 'People must have lived here once,' infers the captain.</p><p>'Perhaps not people,' says a voice.</p><p>Startled, you whirl around to see a strange group standing just beside you. There are seven strong warriors with grey skin, whose long snouts and serried teeth make them look like sharks. In their midst is a dwarf with a rotund belly and small plump features. He wears a copper crown stamped with a mask-like face, and so tall is this crown that at first you did not realize he was a dwarf at all - you thought the face on the crown was his real face.</p><p>Captain Ibrahim soon recovers from his surprise. 'You have a weird look about you,' he blusters. 'I warn you not to molest us. We carry swords!'</p><p>Most of the sailors are white with fear. The dwarf smiles and says, 'Be calm. The only matter I must decide is how long you'll stay here as my guests. You see the tower there? It may interest you to know that I built it myself in a single night. Now, if you can duplicate the feat, building a second tower from that heap of white stones, I'll let you sail away in the morning.'</p><p>'And if not?' you ask.</p><p>He yawns as if the question is too obvious to merit an answer. With a magic gesture, he causes a large satin cushion to appear. 'I'll take a nap,' he says, removing his crown and lying down. To the seven shark-like warriors he says: 'Do not let them depart. Wake me in the morning.'</p><p>With that, he closes his pudgy little eyes and immediately begins to snore.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You have heard the story of this island.",
        "target": "283"
      },
      {
        "id": 1,
        "text": "You need a plan.",
        "target": "311"
      }
    ]
  },
  "76": {
    "id": "76",
    "text": "<p> 'At first I was amazed that any mortal could reach this city,' says the gryphon, 'but now I see that you bear the magic bloom that allows you to walk across the clouds.'</p><p>You glance down at the flower the captain handed to you. You had forgotten you were still holding it. </p><p>The gryphon returns with you to where the ship is still stuck in the boughs of the violet-blossomed tree. The sailors loosen their swords and one man brings out a bow and arrow, but you call out to them that the creature is your friend.</p><p>'What harm can you do us now?' says the captain in a despairing voice. 'Has your devilish sorcery not brought us enough misfortune?'</p><p>The gryphon assures him that it intends no harm. 'Let me take the mast of your vessel in my beak. I am strong enough to bear both ship and crew safely down to the waves.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Urge the captain to accept its help.",
        "target": "121"
      },
      {
        "id": 1,
        "text": "Try and come up with a better plan.",
        "target": "144"
      }
    ],
    "state_changes": [
      {
        "var": "jasmine_flower",
        "op": "set",
        "value": 1
      }
    ]
  },
  "77": {
    "id": "77",
    "text": "<p> As the echo of that ghastly whispering voice dies on the air, the cowled figures sag like puppets left to dangle on a hook. This appears to signal the end of the meeting. The islanders rise from the floor and stalk forward to bind your poor captain. He is too numb with shock to resist.</p><p>You sneak off before anyone spots you. Back at the ship, the crew listen with mounting horror as you tell your tale. 'These islanders are said to worship the corpses of their ancestors,' mutters Sayid the helmsman. 'By heaven, it seems they are ruled by them as well.'</p><p>The looks of fear are plain on all their faces, but one man at least has the courage to speak out on behalf of loyalty. Jumail the cook says, 'We can't leave Captain Ibrahim to die at the hands of infidels.' He turns to you. 'If you want to try to rescue him, you can count me in.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Mount a rescue attempt.",
        "target": "167"
      },
      {
        "id": 1,
        "text": "Wait for the tide and then sail without Ibrahim.",
        "target": "258"
      }
    ]
  },
  "78": {
    "id": "78",
    "text": "<p> The captain emerges from his cabin in a sour mood and announces to the assembled crew that you will not be sailing on into the Red Sea. 'I cannot risk it,' he says. 'Instead, we'll sell our cargo here and then return to Suhar.'</p><p>Several of the sailors give a groan. They had been promised a share of the voyage's profits. The rest are quite cheered by the news, since it means they will be home again sooner than they thought.</p><p>You cannot go back yet. When you set sail it was to seek adventure, and you have yet to find it. Old Madan, the ship's carpenter, sees you packing your belongings. 'So, you're disembarking here?'</p><p>You pull the strings of your pack tight. 'What choice is there?'</p><p>He scratches his beard and says, 'Well, I have heard tales of the Scarlet Isle to the far south. It is said to be a place of fabulous riches in gold and ivory. Why not suggest that the captain tries his luck there?'</p><p>'Why should he listen to me?' you ask.</p><p>'You have hidden talents. He values your opinion.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Suggest sailing for the Scarlet Isle.",
        "target": "456"
      },
      {
        "id": 1,
        "text": "Make your own way from here on.",
        "target": "11"
      }
    ]
  },
  "79": {
    "id": "79",
    "text": "<p> You are found, dragged from behind the bush, and thrown on your face in front of the Sultan. 'I'll slay this coward, too!' snarls one of the knights, raising his spear.</p><p>'Hold,' says the Sultan simply. The knight waits as though frozen, spear poised above you.</p><p>You scrabble to your feet. 'Why spare me, when you slaughtered all these others?'</p><p>Perhaps he smiles behind his mask. 'I have not spared you, only suspended your sentence of death. You intrigue me. I see with the eye that has looked on Paradise, and I see that destiny swirls about you like smoke.'</p><p>Your mind is racing. Plainly you will not get another chance.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rely on your wits.",
        "target": "379"
      },
      {
        "id": 1,
        "text": "Fight them.",
        "target": "17"
      },
      {
        "id": 2,
        "text": "Make a break for it.",
        "target": "40"
      }
    ]
  },
  "80": {
    "id": "80",
    "text": "<p> The temperature is dropping fast. It can get very cold in these hills after nightfall.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You'll be sleeping rough tonight.",
        "target": "35"
      },
      {
        "id": 1,
        "text": "You'll be sleeping rough tonight.",
        "target": "260"
      }
    ]
  },
  "81": {
    "id": "81",
    "text": "<p> After bidding Yussuf a tearful farewell, you make your way to the caravanserai. There you find a merchant called Hakim who is heading across the desert to Cairo. He will pay you three dinars to come along and guard his wares. Another merchant, by the name of Abdullah, wishes to travel east through the Peaks of the Slayers and is prepared to pay five dinars. The rates of pay give you an idea as to how dangerous the respective journeys are likely to be.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Join Hakim's expedition.",
        "target": "400a"
      },
      {
        "id": 1,
        "text": "Go with Abdullah.",
        "target": "296a"
      }
    ]
  },
  "82": {
    "id": "82",
    "text": "<p> The wind carries choking clouds of sand as fine as mill-dust. It clogs your throat and scours your eyes raw.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "82a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "82a": {
    "id": "82a",
    "text": "<p> Coughing, half-blinded, deafened by the dreary shriek of the wind, you trudge doggedly on towards your destiny.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go straight ahead.",
        "target": "151"
      },
      {
        "id": 1,
        "text": "Strike off to the left.",
        "target": "36"
      },
      {
        "id": 2,
        "text": "Head to the right.",
        "target": "59"
      }
    ]
  },
  "83": {
    "id": "83",
    "text": "<p> Your blow is perfectly judged, but you may as well have struck him with a stalk of grass for all the effect it has. Laughing wildly, he dives forward and slices deep into your flesh.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "83a"
      }
    ]
  },
  "83a": {
    "id": "83a",
    "text": "<p> He gives you no time to recover. Quickly choose your next manoeuvre.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try the same tactic again.",
        "target": "148"
      },
      {
        "id": 1,
        "text": "Dodge and attempt a less decisive blow.",
        "target": "37"
      },
      {
        "id": 2,
        "text": "Concentrate on parrying his attacks.",
        "target": "60"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -4
      }
    ]
  },
  "84": {
    "id": "84",
    "text": "<p> The mysterious island drops astern and is lost to sight. For a day or so afterwards, the captain takes to stamping around the deck fretfully. 'I should have surveyed the isle, at least,' he admits to you. 'It might have been one of those places spoken of in the old tales.'</p><p>'Which tales are those?'</p><p>'You know the ones! I've heard tell of islands where the fruit is solid gold, where the streams give eternal life and the womenfolk are - '</p><p>'Ah, I thought you meant the other tales.' You take a sip of water from the barrel to conceal a smile. 'Stories of Sindbad's voyages - islands inhabited by murderous cannibals, insane wizards, bloated giants and the like.'</p><p>'Yes...' says the captain thoughtfully. 'I expect I made the right decision, after all.'</p><p>A sailor breaks in on your conversation to point out a ship drifting ahead. Her sails are furled and there is no reply to your shouts. As you come alongside, you see the reason. The deck is strewn with corpses.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go aboard and investigate.",
        "target": "356"
      }
    ]
  },
  "85": {
    "id": "85",
    "text": "<p> The tangled morass of waterlogged vegetation makes for hard going. You might wade for a few minutes, but there are long stretches where the only way on is to haul yourself up and climb between the trees. You are constantly plucking leeches off your legs, and more than once you hide in the treetops when you see a crocodile lazily drifting past. There is nothing you can do about the blinding swarms of insects.</p><p>At low tide you gather a few shellfish off the mangrove roots and eat them raw. After a few days you manage to collect enough wood to make a simple raft, and on this you travel swiftly until you reach a river channel. By now you are limp with fever and so thirsty that you happily lap up the stinking river water.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's no use.",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "54"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 1
      }
    ]
  },
  "86": {
    "id": "86",
    "text": "<p> The riders are almost upon you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Prepare a surprise for them.",
        "target": "199"
      },
      {
        "id": 1,
        "text": "Wait until they ride into view.",
        "target": "17"
      }
    ]
  },
  "87": {
    "id": "87",
    "text": "<p> You decide to get some rest. Your opportunity to escape will come later. Pulling together a mattress of grimy straw, you doze off as the last streamers of daylight fade from the sky above the grille.</p><p>You wake up abruptly in the dead of night. A dream fades into wisps at the back of your memory. You recall being carried to the graveyard outside Baghdad. In the dream, you were alive and aware, but unable to move. Cold sweat soaks your clothing.</p><p>You reach out a hand towards your belongings. The slippers are gone! The dim moonlight lets you see well enough to tell that the old man is not here. You notice that he left his long-tailed cat behind, but it's a poor substitute for what he stole.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You need to find a way out.",
        "target": "61"
      }
    ],
    "state_changes": [
      {
        "var": "magic_slippers",
        "op": "set",
        "value": 0
      },
      {
        "var": "long_tailed_cat",
        "op": "set",
        "value": 1
      }
    ]
  },
  "88": {
    "id": "88",
    "text": "<p> A bank of green vapour conceals you from the three sorcerers. Darting forward, you snatch up the chart they were discussing. Your eyes begin to sting, but you grope your way to one wall and climb up one of the long tapestries until you reach the balcony above. You glance down to see the sorcerers standing in the midst of the green murk. It does not have any effect on them, although you are in no doubt that it would have poisoned you in seconds.</p><p>They don't think to look up. You make your way to the end of the balcony and find a window to the outside.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hurry off down the hillside to safety.",
        "target": "42"
      }
    ],
    "state_changes": [
      {
        "var": "chart",
        "op": "set",
        "value": 1
      }
    ]
  },
  "89": {
    "id": "89",
    "text": "<p> Azenomei lies motionless at your feet. Slowly he begins to dissolve into a thick black miasma. A stench like burning sulphur fills the room. When his body has completely vanished, the only thing left is his sword.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Talk to Ayisha.",
        "target": "20"
      },
      {
        "id": 1,
        "text": "Head back to civilization.",
        "target": "66"
      }
    ],
    "state_changes": [
      {
        "var": "sword",
        "op": "set",
        "value": 1
      }
    ]
  },
  "90": {
    "id": "90",
    "text": "<p> You dive into the stream, forcing yourself deep under the clear cool water while the cloud of lethal hot gas rolls past overhead. At last you can hold your breath no longer. Rising with a gasp, you discover that the first wave of gas has passed. The air is filled with a reek like the fires of Hell. You hurry back down the mountain before the advancing ooze of lava cuts you off.</p><p>After several more days of searching, you are certain that the legends are wrong. If the rokh really does exist, its nest is not in this part of the world.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try travelling to the east.",
        "target": "180"
      },
      {
        "id": 1,
        "text": "Abandon the search and go home to Baghdad.",
        "target": "113"
      }
    ]
  },
  "91": {
    "id": "91",
    "text": "<p> You show her the fragment of diamond. 'Sorry,' you say, abashed. 'I got this instead.'</p><p>She looks at you as though she suspects you are a blockhead. At least she doesn't accuse you of deliberate treachery. 'Well,' she says after drawing several deep breaths, 'at least tell my father where I am, will you?'</p><p>'If I see him,' you assure her. 'I don't exactly rub shoulders with the Caliph every day, you know.'</p><p>You bow and retreat from the room before she decides to turn you into a worm.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head back across the desert.",
        "target": "66"
      }
    ]
  },
  "92": {
    "id": "92",
    "text": "<p> You walk down by the river, where the moon's reflection lies like a sunken scimitar in the black depths. Some distance off, whispering couples glide between the trees. Blinkered by love, they take no notice of the brooding figure on the river bank.</p><p>You contemplate your future. The life of a beggar promises nothing but misery, hardship, sickness and an early death. You burn with outrage at the way Jafar treated you as beneath contempt because of your humble birth. The Caliph himself, you believe, is a good man who should be warned of his Vizier's evil plot. But an ordinary subject like yourself can hardly demand an audience with the ruler of the civilized world. It would be different if you were wealthy. 'The scales of justice are balanced by a little gold,' as the saying goes.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go straight to the Caliph's palace.",
        "target": "206"
      },
      {
        "id": 1,
        "text": "Set off to sea in search of adventure and riches.",
        "target": "160"
      },
      {
        "id": 2,
        "text": "Join a merchant caravan heading overland.",
        "target": "183"
      }
    ]
  },
  "93": {
    "id": "93",
    "text": "<p> Tiptoeing to the further doorway, you see Jafar talking to a slave girl. You jump back out of sight just in time to avoid being seen as he turns. </p><p>'Tonight you seem radiant with satisfaction, my lord,' purrs the slave girl, handing him a goblet of wine. 'Might it be that my company pleases you?'</p><p>Jafar sneers and lifts the cup to his lips. 'You? You're a bony milk-skinned snippet I bought off a Christian. I'd get more pleasure from the company of the lice that inhabit a poor man's clothes!' As the slave starts to weep, Jafar grins unpleasantly and says, 'I'm pleased for two reasons. The first is because today I duped a fool out of a great prize - a stallion of unsurpassed beauty which I presented as a gift to the Caliph. Now he has given me this Robe of Honour and a palace of my own on the banks of the Tigris.'</p><p>'And what, O mighty master, is the other reason?' asks the slave, intrigued despite herself.</p><p>You have little hope of retrieving the stallion now that Jafar has given it to the Caliph.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stay to eavesdrop on Jafar.",
        "target": "362"
      },
      {
        "id": 1,
        "text": "Leave now rather than press your luck.",
        "target": "383"
      }
    ]
  },
  "94": {
    "id": "94",
    "text": "<p> Sliding into the oil-black water, you swim over to the barque. As you draw level with the rail, you see a half-dozen guards crouched around a dice game on the foredeck. Inside her curtained kiosk, the woman sighs forlornly as she gazes at the moths skittering in the light of the lamps.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw on your local knowledge.",
        "target": "162"
      },
      {
        "id": 1,
        "text": "Show yourself to the guards.",
        "target": "117"
      },
      {
        "id": 2,
        "text": "Approach the woman stealthily.",
        "target": "140"
      }
    ]
  },
  "95": {
    "id": "95",
    "text": "<p> The guards burst into the room in time to see you lowering yourself gingerly over the balcony. Running forward, they start to shower all manner of missiles down on your head: lamps, helmets, shields, even the splintered door-frame. </p><p>Something heavy hits your shoulder. You don't see what it is, but your grip is torn from the vine and you are falling. There is a split-second of sickening terror as the air rushes past. Then you hit the ground and a jolt of pain stabs up your body.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you take it?",
        "target": "95a"
      },
      {
        "id": 1,
        "text": "Can you get up?",
        "target": "2b"
      }
    ]
  },
  "95a": {
    "id": "95a",
    "text": "<p> You hear the guards' shouts from above. You cannot lie flopping in agony on the ground. You must rise and flee for your life before they catch you.</p><p>Limping painfully towards the gate you are intercepted by a sentry. Your heart sinks, but then you realise that he does not know what the commotion is all about. He stares past you at the soldiers rushing across the courtyard. 'What's going on?' he asks.</p><p>'There's an assassin in the palace,' you gasp through gritted teeth.</p><p>The sentry rushes off across the courtyard. Moving with all the speed your twisted ankle will allow, you slip out of the gate and duck into the shadows of a side street. Glancing back, you see the soldiers who were chasing you run out of the gate. They look around, confused, but none saw where you went.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You've given them the slip.",
        "target": "383"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -6
      }
    ]
  },
  "96": {
    "id": "96",
    "text": "<p> Sparkling light appears from no obvious source. You see crystal pillars forming an alcove in the wall ahead of you. The old man whom you met on the ledge is here, dressed now in the white robes of a king of Old Persia. A black jewel shimmers at his throat. You stand in awe of the unknown as Yussuf slowly pads down the steps to join you.</p><p>'You have done well to come this far, and now you shall claim your reward,' says the old man. 'Here are four treasures.' He reaches into a gold-banded treasure chest and brings out a copper lamp. 'This is the enchanted lamp used by the hero Antar when he crept unseen through the harem of Sakhur the Jinni.'</p><p>'How does it work?' asks Yussuf.</p><p>'Merely light it, and while you hold it in your hands no-one can see you. But there is only a little of the magic oil left. Enough for a few minutes of invisibility at best.' He puts the lamp down and produces a coil of rope. 'This second treasure is a rope of distant India. On command it will rise straight into the air of its own accord - a marvellous treasure for a rogue!' He puts the rope aside and draws a trumpet out of the chest. 'And this is the horn which levelled the walls of Jericho in ancient times. Be warned, however, that to unleash its destructive force is perilous.'</p><p>He stands with folded arms while you gaze on the treasures. 'How many can we take?' asks Yussuf. 'Just one?'</p><p>'One each!' declares the old man.</p><p>Yussuf leaves it to you to decide.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The lamp and the rope.",
        "target": "164"
      },
      {
        "id": 1,
        "text": "The rope and the trumpet.",
        "target": "187"
      },
      {
        "id": 2,
        "text": "The lamp and the trumpet.",
        "target": "210"
      },
      {
        "id": 3,
        "text": "Reject all those choices.",
        "target": "233"
      }
    ]
  },
  "97": {
    "id": "97",
    "text": "<p> Azenomei lunges forward, starting to utter the syllables of a new spell, but his foot catches on a rug and he stumbles. A wave of unearthly energy flows past your shoulder and crumples a bronze shield on the wall as though it were made of parchment.</p><p>You don't hang around to give him another chance. Racing pell-mell along the winding, maze-like corridors of the palace, you emerge at last in open air.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Set off back to civilization.",
        "target": "66"
      }
    ]
  },
  "98": {
    "id": "98",
    "text": "<p> The gryphon returns with you to where the ship is still stuck in the boughs of the violet-blossomed tree. The sailors loosen their swords and one man brings out a bow and arrow, but you call out to them that the creature is your friend.</p><p>'What harm can you do us now?' says the captain in a despairing voice. 'Has your devilish sorcery not brought us enough misfortune?'</p><p>The gryphon assures him that it intends no harm. 'Let me take the mast of your vessel in my beak. I am strong enough to bear both ship and crew safely down to the waves.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Urge the captain to accept its help.",
        "target": "121"
      },
      {
        "id": 1,
        "text": "Try and come up with a better plan.",
        "target": "144"
      }
    ]
  },
  "99": {
    "id": "99",
    "text": "<p> The heads of the cowled figures slump wearily to their chests. It is the signal that the meeting is over. The cowering islanders rise to their feet, and several dart forward along the room to seize Captain Ibrahim.</p><p>You realize it is time to get out of here, but shock at what you've witnessed makes you hesitate just a moment too long. As you tiptoe towards the door, an islander turns and spots you. A great shriek rings out, and the others are on you in an instant.</p><p>'Kill the foreign devil!' you hear the headman cry. 'It is not permitted for an outsider to gaze upon the Council of Retired Elders and live!'</p><p>Their rage works in your favour. They are all so anxious to kill you that their attacks are too fast and too wildly aimed. Weapons clash together, or lodge in the wooden pillars, more often than they find their mark in your flesh. Even so, you cannot avoid injury.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Just a scratch.",
        "target": "99a"
      },
      {
        "id": 1,
        "text": "Can you take it?",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "99a": {
    "id": "99a",
    "text": "<p> You glance up past the throng of angry faces to see your captain standing dumbstruck against the wall. The haze of blue resin-scented smoke makes him look like a ghost in his white tunic.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fight on and try to rescue him.",
        "target": "122"
      },
      {
        "id": 1,
        "text": "Flee while you still can.",
        "target": "145"
      }
    ]
  },
  "100": {
    "id": "100",
    "text": "<img src=\"./images/100_illo.jpg\" alt=\"\"> You give orders for the merchantman's sailors to take your ship back to port, while your own crew come aboard and man their vessel. Along with a hand-picked band of your best marines, you hide inside some empty barrels in the hold. You do not have to wait long before the cry goes out from the look-out, warning of black sails on the horizon.</p><p>Grappling hooks wrench the ships together and there is the desultory clash of steel. Your sailors put up a token resistance just to prevent the pirates getting suspicious, surrendering before anyone is killed. Listening from inside the barrel, you hear the tramp of feet on the deck above. Harsh commands are given and the barrels are loaded aboard the pirate ship. The slow rolling of the heavy merchantman gives way to the swift grace of the pirates' warship.</p><p>Hours pass before you feel the ship jolt against the side of a dock. The pirates start to unload the barrels. You get ready to spring out on them, but then someone says, 'Let's broach this keg and have a party. We can unload the rest tomorrow.'</p><p>Even better. You wait until the noise of drunken carousing settles down into rhythmic snores, then you ease the top off your barrel and climb out. You emerge from the hold to find yourself in an underground lagoon covered by a vast stone dome. There are bronze braziers all along the shore of the lagoon, and the scene they illuminate is one of opulent luxury. The shore is covered with scattered gold, gems, ivory, pearls - along with jars of oil and perfume, flasks of cool green wine and bolts of rich red cloth. The pirates lie asleep, limbs flung out like starfish in their wine-soaked contentment. Here you see a scar-faced villain clutching a necklace of dripping sapphires. Beside him lies a snoring red-faced ruffian hugging a blanket of lustrous silk.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rely on stealth and guile.",
        "target": "12"
      },
      {
        "id": 1,
        "text": "Use the lamp of Antar.",
        "target": "485"
      },
      {
        "id": 2,
        "text": "Sneak in among them.",
        "target": "58"
      }
    ]
  },
  "101": {
    "id": "101",
    "text": "<p> 'What you say is full of pragmatic wisdom,' you say to Hakim. He nods and smiles, thinking you agree, but then you go on, 'However, it reminds me of the sad story of the man who passed Mecca every year with his camels. Each time he would pause, and bow, and say, \"Next year I will make the pilgrimage.\" '</p><p>'And what happened to him?'</p><p>'His excuses outlasted the years God had allotted to him. Whether or not he entered the gates of Paradise, I cannot say. God alone is all-knowing. But what do you think?'</p><p>Hakim turns from you to the holy city with a look of concern. 'Even the most foolish of men knows the value of prudence,' he mutters at last. 'And surely I can spare ten days of my life for He who has given me everything I possess.'</p><p>He gives the orders for the caravan to halt.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Wait to hear your owner's orders.",
        "target": "493"
      },
      {
        "id": 1,
        "text": "Begin your pilgrimage.",
        "target": "146"
      }
    ]
  },
  "102": {
    "id": "102",
    "text": "<p> You give the signal. The ghoul brothers go racing off without a backward glance, chortling because they think they will soon leave you far behind. So they do, but you are not worried. Instead of racing along the path, which curves around the hillside, you climb straight up and over the ridge, dropping back onto the path before they come around the bend. The two brothers give croaks of dismay when they see your heels kicking up dust in the moonlight far in front of them. They put on a burst of desperate speed, charging like a couple of enraged bull elephants, but you still manage to just beat them back to the hut.</p><p>The old she-ghoul is dumbfounded when she learns that her sons mean to honour their agreement with you. 'Then I've been slaving away over this pot for nothing!' she grumbles. 'Why couldn't you just cheat like your old father used to?'</p><p>'But we lost fair and square, Ma,' protests the elder brother, putting his hand across your shoulder. You try not to squirm.</p><p>You spend the night with the ghoul family - as bizarre a group of hosts as you've ever known. This is a story to enthral the passers-by in the bazaar in Baghdad. Unfortunately you are still no closer to fame and riches. Or are you? The next morning you bid farewell to the ghouls and set off out of the hills.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rejoin your companions.",
        "target": "289"
      }
    ]
  },
  "103": {
    "id": "103",
    "text": "<p> All your plotting comes to nothing. The ship sets sail the next day before you have time to formulate a plan, let alone put it into action. You are chained to the oars, and you have nothing to look forward to but the short harsh life of a galley slave.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "104": {
    "id": "104",
    "text": "<p> The law of hospitality means that you must accept. The Bedouin would rather starve than lose face by failing to feed you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Thank them for their gracious hospitality.",
        "target": "127"
      }
    ]
  },
  "105": {
    "id": "105",
    "text": "<p> The outline of ruins shows as a darker blot against the charcoal-coloured sky. You have arrived at a place of basalt columns that have been uncovered by the storm. You lean against them, gasping raggedly for breath in the suffocating dry dust.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "105a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "105a": {
    "id": "105a",
    "text": "<p> You see a feeble splinter of sunlight find a crack in the swirling sand-clouds. It lasts long enough to bathe the columns in the purple colours of dream. Then the storm eclipses it again.</p><p>The place seems draped in mystery.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Enter the circle of columns.",
        "target": "172"
      },
      {
        "id": 1,
        "text": "Turn away.",
        "target": "82"
      }
    ]
  },
  "106": {
    "id": "106",
    "text": "<p> His sword cuts a bloody gash across your neck.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "It's nothing.",
        "target": "106a"
      }
    ]
  },
  "106a": {
    "id": "106a",
    "text": "<p> Blinded for an instant by tears of pain, you fail to strike him in return.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Get close and attack with all your might.",
        "target": "148"
      },
      {
        "id": 1,
        "text": "Make a well-aimed but weaker strike.",
        "target": "37"
      },
      {
        "id": 2,
        "text": "Back away while parrying.",
        "target": "60"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "107": {
    "id": "107",
    "text": "<p> In the dead of night, the rocking of the ship rouses you from a light doze. You have a raging thirst. As you stumble sleepily towards the freshwater barrel in the middle of the deck, you almost tread on your ship's cat. It must have been brought across by one of the others when they first explored this ship, only to get left behind in the hurry to leave. It mews piteously and rubs against your legs, so you give it a saucer of water.</p><p>You are just on the point of draining your own cup when you hear a soft thud. The ship's cat has keeled over. It wheezes a last breath and then lies still. The water... it must be poisoned! Flinging the cup away, you softly pace across the deck, giving each corpse a kick in the guts. The sixth 'corpse' you do this to gives a yelp of pain and jumps up. You have found the poisoner. </p><p>Hearing your shouts, the crew come across from the other ship.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Interrogate your captive.",
        "target": "174"
      }
    ]
  },
  "108": {
    "id": "108",
    "text": "<p> The seven warriors give barracuda grins and silently launch themselves into battle. You see the captain sliced instantly in two. Another of your companions turns to run, but one of the warriors grabs him by the shoulders and sinks his wide fang-rimmed mouth entirely around his head. A single bite ends the poor wretch's life.</p><p>You groan as you are chopped across the thighs, then sent flying by an arm that felt stronger than a swinging jib. You've never faced tougher opponents than this.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Neither have they!",
        "target": "108a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -4
      }
    ]
  },
  "108a": {
    "id": "108a",
    "text": "<p> You hold your own - just - but soon see that you have no chance of defeating the shark men. You cannot even save your friends. Hating yourself, but knowing you have no choice, you crawl away while the shark men are distracted by the carnage. Splashing back to the ship, you raise the anchor and let the current carry you away from the island. No one else got away.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You are alone.",
        "target": "266"
      }
    ]
  },
  "109": {
    "id": "109",
    "text": "<p> Holding your arms out to either side, you stride along the glass column at a rapid but measured pace. Shouts from behind tell you that the Sultan and his knights have reached the brink. You ignore them. The Sultan's marvellous voice booms off the walls of the chasm, but you disregard his words. After a moment a spear whistles past your ear. You do not let it distract you.</p><p>You reach the far side. They do not dare come after you. Taunting them by bowing, you disappear into the undergrowth.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Travel onwards.",
        "target": "177"
      }
    ]
  },
  "110": {
    "id": "110",
    "text": "<p> You can escape at any time, so there seems no need for haste. Making a mattress out of handfuls of grimy straw, you lie down to get some rest. At the top of the oubliette, beyond the grille, the last silvery gleam of daylight is fading from the sky. You yawn, dimly aware of your eyelids fluttering closed...</p><p>You wake up abruptly in a cold sweat. It is pitch dark. You were dreaming of being carried to the graveyard outside Baghdad. In the dream, you were alive but unable to move. You could not tell anyone you were still alive.</p><p>You reach out a hand towards your belongings. The Indian rope is gone! As your eyes adjust to the gloom, you see the old man is no longer beside you. He stole your rope and used it to escape. All he left you was his long-tailed cat.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You must find a way to escape.",
        "target": "61"
      }
    ],
    "state_changes": [
      {
        "var": "indian_rope",
        "op": "set",
        "value": 0
      },
      {
        "var": "long_tailed_cat",
        "op": "set",
        "value": 1
      }
    ]
  },
  "111": {
    "id": "111",
    "text": "<p> A rope drops from the balcony above and a figure comes sliding down to land beside you. It is Azenomei. 'Put this across your mouth,' he urges, handing you a piece of silk soaked in vinegar.</p><p>You are in no position to argue. While you wind the silk around your face, Azenomei daringly rushes forward into the bank of green fog. One of the sorcerers tries to grab him, but only gets a hard buffet across the chin for his trouble. Snatching up the chart, Azenomei throws it to you and then leads the way back up the rope to the balcony. At the end is a window, and another rope takes you to safety outside the citadel.</p><p>'You see,' says Azenomei as the two of you race off down the hillside, 'you do need me.'</p><p>He wants you to help him rescue his sister.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Agree to help.",
        "target": "270"
      },
      {
        "id": 1,
        "text": "Refuse.",
        "target": "179"
      }
    ],
    "state_changes": [
      {
        "var": "noose",
        "op": "set",
        "value": 0
      },
      {
        "var": "chart",
        "op": "set",
        "value": 1
      }
    ]
  },
  "112": {
    "id": "112",
    "text": "<p> Azenomei's golden eyes flash with eagerness for the kill. Pulling his sword from his belt, he leaps forward to match you blow for blow. Both of you suffer dreadful wounds, and red human blood soon mingles underfoot with the black ichor of jinni's veins. You feel yourself weakening, but you are determined to make this a fight to the bitter end.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you prevail?",
        "target": "89"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "113": {
    "id": "113",
    "text": "<p> Falling in with a group of travellers, you return at last to Baghdad. Almost a year has passed since you left, and a lot has changed in that time. Soldiers patrol the streets and a curfew forces everyone off the streets after evening prayers. The City of Peace has become a city of fear. Whenever you ask the reason, people compress their lips and warn you to keep silent, until finally a blind old woman tells you: 'The Caliph believes the city is on the brink of revolt.'</p><p>'And is it?'</p><p>She shakes her head. 'Not to start with - but the more he tightens his grip, the more likely it becomes.'</p><p>'This is Jafar's doing.'</p><p>'Perhaps.' She tilts her head at the sound of the muezzin's echoing chant. 'The curfew. I must find a place to shelter for the night.'</p><p>As she hobbles off, you consider your options.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Trick your way in to see Jafar.",
        "target": "205"
      },
      {
        "id": 1,
        "text": "Use the lamp to make yourself invisible.",
        "target": "45"
      },
      {
        "id": 2,
        "text": "Sell your diamond.",
        "target": "194"
      },
      {
        "id": 3,
        "text": "The Caliph must be told what's going on.",
        "target": "251"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 4
      }
    ]
  },
  "114": {
    "id": "114",
    "text": "<p> Ayisha first casts a spell of healing. She follows this with another, more powerful enchantment. A dark whirlwind springs up around you. You feel yourself being flung across vast distances. For a moment you taste rain, and see the flash of lightning behind a leaden cloud. Then there is sun on your face, and you are dropping towards a verdant island set in a sparkling blue sea.</p><p>You land with a thump and the whirlwind swirls away. Picking yourself up, you look around. You are beside a sheer pinnacle of rock that rises from the centre of the island. You cannot see the top because of the clouds above.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Something is up there.",
        "target": "136"
      }
    ]
  },
  "115": {
    "id": "115",
    "text": "<p> The astrologer leads you up a winding staircase to a tower room at the top of his house. An archway opens onto the night, giving a crystal-clear view of the sky. While you settle yourself down on a pile of velvet cushions, he brings a wooden table on which he sets up a brass astrolabe. For several minutes he takes sightings of the stars, every so often giving a grunt and jotting something down on the chart at his elbow. At last he turns and says, 'I see a thief among thieves, a most daring knave, bold and lucky as an alley cat.'</p><p>'Is it me? Or is this someone I shall meet? Where will it happen?'</p><p>He holds up a hand to stem your flood of questions. 'The future is like a page from a book seen in a dream. The words are not written in the clearest hand, nor in the sharpest of inks. All I know is that a great journey lies ahead. Beware, then, as a journey can mean death! Treachery awaits you with a plain mark on his face. Sages and sorcerers may help or hinder you. In a place of many doors you will find your destiny...'</p><p>His voice trails off. In a less ominous tone he adds, 'These things I have described are but the myriad possibilities of your future. You stand as at a crossroads. Choose your destiny.'</p><p>Thanking him, you leave more baffled than when you came in.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What now?",
        "target": "92"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": -1
      }
    ]
  },
  "116": {
    "id": "116",
    "text": "<p> Masrur's sword slices the air, only to catch in the drapes just above your head. There is a ripping of velvet fabric as he yanks it free and stares around. But by this time you have already dodged past and run to the doorway.</p><p>Uttering a scornful oath, Jafar pushes the burly warrior aside and takes a step forward. 'Guards!' he yells as he claps his hands imperiously. 'Guards! A thief is at large in the palace!'</p><p>You turn your head in time to see a band of swordsmen come rushing towards you through an arch at the end of the landing. You will have to act fast.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Use your bow.",
        "target": "230"
      },
      {
        "id": 1,
        "text": "Fight.",
        "target": "47"
      },
      {
        "id": 2,
        "text": "Make a run for it.",
        "target": "253"
      }
    ]
  },
  "117": {
    "id": "117",
    "text": "<p> You seize the rail and haul yourself dripping onto the deck. The guards leap up with angry expressions. Lamplight flares on naked steel as they draw their swords. 'Begone!' cries the nearest guard. 'We'll slay anyone who tries to take the lady from us.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Meekly return to your own ship.",
        "target": "375"
      },
      {
        "id": 1,
        "text": "Fight them",
        "target": "185"
      }
    ]
  },
  "118": {
    "id": "118",
    "text": "<p> You turn to run, but behind you there is only a slab of unyielding rock. You join Yussuf in hammering against it, shouting for help as the monstrous horde draws closer. Their noxious breath makes you choke. Turning, you look straight into the pitiless cyclopean faces. </p><p>A taloned limb rises, throwing a jag-edged shadow on the cave roof. </p><p>You open your mouth to scream.</p><p>The talon falls, silencing you for ever.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "119": {
    "id": "119",
    "text": "<p> You drop only a few feet, hitting the floor of the cavern with a painful thud. You were almost at the bottom of the staircase already, only you didn't realise it. You will have a nasty bruise to show for it, but at least you are alive - for now.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Let Yussuf catch up.",
        "target": "96"
      }
    ]
  },
  "120": {
    "id": "120",
    "text": "<p> The Caliph lavishes gifts on you: gold, jewels and splendid robes of honour. 'This is not all,' he says. 'Now I need a new Grand Vizier.'</p><p>'Me, lord?' You bow to keep him from seeing the look of shock on your face. 'But I am not wise or worthy enough.'</p><p>He laughs. 'What you mean to say is, you're not a fat, spoiled court popinjay.'</p><p>'Prince of Princes, I would never say such - '</p><p>'Then you are diplomatic enough for the job. Also, you have proved wise where it matters, which is not in academic affairs but in affairs of the human heart. Moreover, you have seen much of the world. I shall enjoy hearing your tales.'</p><p>And so, from humble origins, you suddenly find yourself the Grand Vizier to the Caliph of Baghdad. You are rich and respected. Nobles and courtiers flock to hear your advice. The Prophet Muhammad warned against intoxication, but you had always thought that referred only to wine. Now you know that destiny, too, can be a heady draught.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Happy ever after?",
        "target": "496"
      }
    ]
  },
  "121": {
    "id": "121",
    "text": "<p> The gryphon is as good as its word. Beating its wings with hurricane force, it pulls the ship clear of the branches and swoops down, bearing you off the edge of the cloud and down towards the azure water far below.</p><p>'By the blessed Creator of All!' gasps Captain Ibrahim, his face as white as the fluttering sails. 'This is no voyage for a sailor.'</p><p>'Cheer up,' you tell him. 'When you return to Baghdad, this will be a tale to match any that has ever been told.'</p><p>As the ship touches the waves, his look of drawn horror slowly gives way to a broad smile. 'That's true...'</p><p>The gryphon circles once and soars off into the sky. As one man, the crew fall to their knees and bow towards Mecca, thanking God for their safe deliverance.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail on.",
        "target": "234"
      }
    ]
  },
  "122": {
    "id": "122",
    "text": "<p> Grabbing the rafters, you swing yourself up and drive a hard kick into the midriff of the man right in front of you. He goes flailing back and collides with Captain Ibrahim, who gives him a hefty clout across the chin and snatches up his sword. Ibrahim's bewildered expression gives way to a joyous lusty roar as he leaps forward to help you.</p><p>Standing back to back, the two of you fight your way against heavy odds to the door. Blows rain down on you from all sides.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you make it?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "You've been in tougher scrapes.",
        "target": "122a"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      },
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "122a": {
    "id": "122a",
    "text": "<p> You race off with the islanders in close pursuit. The jetty comes in sight. Encouraged by the crew's yells, you ignore the stones and spears that are whistling past your heads. Leaping aboard, the captain gives the immediate order to cast off. The ship lurches out from the jetty and swirls on the river currents. You watch from the rail as the angry mob comes charging onto the jetty. Some career into the water in their haste, and now it is the turn of your crew to pelt them with missiles.</p><p>As he gets his breath back, Captain Ibrahim tells you that the islanders kept asking him about the nest of the rokh, the giant bird said to prey on elephants. 'I told them I wanted only to trade, but they were having none of it,' he pants. 'They accused me of being after the rokh's diamond eggs.'</p><p>'Its nest must be somewhere in these parts, then.'</p><p>'They said it was somewhere to the west,' he says with as much interest as if he were speaking about the shape of a bee's backside. 'But I think it's just so much poppycock.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A narrow escape.",
        "target": "346"
      }
    ]
  },
  "123": {
    "id": "123",
    "text": "<p> You journey on for several days. The road turns away from the coast and rises towards some hills which present an outline of dull grey-brown against the clear indigo hues of the sky. Hakim eyes the pass through the hills with a worried frown. He fears an ambush by bandits.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "There are some benefits to being a slave.",
        "target": "191"
      },
      {
        "id": 1,
        "text": "Hakim wants a volunteer.",
        "target": "214"
      }
    ]
  },
  "124": {
    "id": "124",
    "text": "<p> One of the ghoul brothers gives the signal and they go charging off down the path like a pair of stampeding elephants. You stand watching them in the moonlight. After fifty metres or so, one of them glances back and laughs, saying, 'Haw! You forgot to start at the signal. You don't have a chance of catching us now!'</p><p>'You're right,' you reply, 'I don't.' And you shoot him through the heart.</p><p>The other ghoul skids to a halt, stares at his brother's corpse in shock, then glowers at you. He takes a step back along the trail, sees you nocking another arrow, and starts to back away. </p><p>You release the second arrow and watch it streak to find its mark. You give a sad shake of the head as you turn away. They were almost too easy. Now to deal with the vile monster that spawned them.</p><p>She looks up from tasting a ladle of stew as you kick the door in. Her slack blue-lipped mouth starts to frame a quizzical frown. The expression turns to a death grimace as your arrow splits her throat. Stepping over the body, you make a quick search of the hut, finding fifteen dinars in a jar. </p><p>You also take a warm woollen cloak. You have no desire to spend the night here, and you will need something to keep warm while sheltering amid the rocks. The cloak is crawling with lice, but you hold it over the fire for a few minutes so that the smoke drives most of them out.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Find a place to bed down.",
        "target": "80"
      }
    ],
    "state_changes": [
      {
        "var": "cloak",
        "op": "set",
        "value": 1
      },
      {
        "var": "money",
        "op": "add",
        "value": 15
      }
    ]
  },
  "125": {
    "id": "125",
    "text": "<img src=\"./images/125_illo.jpg\" alt=\"\"> The four riders are garbed all in white, with silver filigree around the borders of their robes. Three look down with fierce eyes. The emotions of the fourth remain a mystery, for he wears a mask of carved ivory. All carry bristling lances. Knives and long swords hang at their belts.</p><p>The masked rider points to the fallen gazelle. 'This was our game, which we'd pursued since before sunrise. You've stolen it.' His voice sounds as sweet as the melody of a harp, as sweet as a fresh brook, as sweet as poisoned syrup.</p><p>Abdullah becomes truculent. 'Who are you, to lay such accusations on us?'</p><p>The masked stranger leans forward in his saddle. 'I am the Sultan of Nishapur.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You've heard of him.",
        "target": "378"
      },
      {
        "id": 1,
        "text": "That means nothing to you.",
        "target": "398"
      }
    ]
  },
  "126": {
    "id": "126",
    "text": "<p> He casts another spell as you flee.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your black jewel begins to glow.",
        "target": "126a"
      },
      {
        "id": 1,
        "text": "You have no defence.",
        "target": "126b"
      }
    ]
  },
  "126a": {
    "id": "126a",
    "text": "<p> The jewel absorbs the spell into itself, crumbling to powder as it does.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Run for your life.",
        "target": "66"
      }
    ],
    "state_changes": [
      {
        "var": "black_jewel",
        "op": "add",
        "value": -1
      }
    ]
  },
  "126b": {
    "id": "126b",
    "text": "<p> The spell takes effect and you are aged a hundred years in the space of a single heartbeat, falling to gasp your last feeble breaths on the cold hard floor.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "127": {
    "id": "127",
    "text": "<p> The meagre meal is surprisingly good. The Bedouin watch with empty stomachs as you enjoy the only food they have to spare. The children of the tribe begin to cry, so the chief starts a song to distract them from their hunger. The meal over, you recline on soft cushions. Night rushes across the sky, unfolding a multitude of stars while the stirring strains of the desert song resound off the looming dunes around you.</p><p>Hakim makes a gift of salt to the tribe. The chief tries to hide his almost pathetic gratitude at this kindness. 'Beware when you cross the sands,' he warns you. 'The tribes of the remote interior show no shame in stealing from others.'</p><p>Thanking the Bedouin for their hospitality, you spend the night with them and head on at first light.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on across the desert.",
        "target": "168"
      },
      {
        "id": 1,
        "text": "Press on across the desert.",
        "target": "217"
      }
    ]
  },
  "128": {
    "id": "128",
    "text": "<p> You stumble into a patch of quicksand. As it sucks you down, you twist around and try to pull yourself out using the halter of the camel you were leading. But the camel tugs away in fright, jerking the halter out of your hand. You see the horror-stricken looks on your companions' faces as they watch you sink inexorably into the ground. Hakim calls out something, but you cannot hear him over the howl of the storm. Then the quicksand closes over your head and you are plunged into silence and darkness.</p><p>You drift weightlessly down. Your pulse pounds in your ears and your chest is close to bursting, but you cannot bring yourself to give up your last breath. Just as it seems the cloud of oblivion is descending across your mind for ever, you fall out of the fluid sand and into an underground chamber.</p><p>You have never been so grateful for the simple taste of fresh air. Falling on your face, you give thanks to God for sparing you. But then you hear a voice that makes every muscle shake with fear.</p><p>'I am the only god here,' it says.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Look up.",
        "target": "25"
      }
    ]
  },
  "129": {
    "id": "129",
    "text": "<p> Falling into an easy rhythm, you manage to sweep blow after blow aside, parrying as though in a trance. A mystical sense of tranquillity comes over you. You seem to be sunk in a dream. The sight of your foe's glaring gaze no longer fills you with terror. The scene is one of unearthly beauty - the shimmering colours of the silk tapestries, like streams of spring water... the heady odour of perfume and incense... the lustrous sheen of gold and jewels...</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's like a dream.",
        "target": "152"
      }
    ]
  },
  "130": {
    "id": "130",
    "text": "<p> Only poison could have killed these people so quickly. The obvious source would have to be the freshwater barrel in the middle of the deck. It might have become tainted by accident, but you doubt it. More likely that one of these bodies lying around the vessel is rather friskier than anyone suspects.</p><p>There is an easy way to find out. You pretend to take a drink of water and then fall back limp on the deck. Watching with squinted eyes, you see one of the 'corpses' rise to its feet and creep over to search your belongings. Giving vent to a fierce yell that would curdle the blood of a cannibal, you leap up and seize the crafty poisoner. </p><p>Jubilantly you hail your fellow sailors on the other ship.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell them to come across at once.",
        "target": "174"
      }
    ]
  },
  "131": {
    "id": "131",
    "text": "<p> The ship is tossed far out to sea. You can hardly see the others through the deluge of black bone-chilling rain. You hear a scream, drowned out by the storm's roar, as the helmsman is pinned against the rail and crushed by the tiller.</p><p>'She's breaking apart!' you hear someone screech as the mainmast splits and falls ponderously like a great tree. It brings the ragged sails with it. You are flung back as the ship gives a lurch, plunged into water which seems strangely warm after the icy rails of rain. It is like being submerged in blood. The muffled sounds of the undersea thunder in your ears. Your fingers find a plank of broken wood. You break to the surface with a gasp and look around, but there is nothing to see but the crashing waves.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The ship has gone.",
        "target": "280"
      }
    ]
  },
  "132": {
    "id": "132",
    "text": "<p> Tapping the glass column, you discover it is hollow. Perhaps a bizarre aqueduct left by an ancient civilization? You dig madly at the earth of the bank into which it is set until you clear a space large enough to squeeze through. Inside the pipe, suspended above a dizzying drop, you crawl on hands and knees to the far end, where you dig up to the surface.</p><p>You look back to see the Sultan and his horsemen milling about on the lip of the chasm. They saw how you got across, but cannot follow for fear of being picked off as they emerge.</p><p>The Sultan's laughter rolls like a waterfall off the high rocks. 'Clever rogue, you've won your freedom. Return, and I'll reward you for amusing me.'</p><p>'Keep your reward, I prefer a long life,' you reply before turning and vanishing into the undergrowth.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on.",
        "target": "177"
      }
    ]
  },
  "133": {
    "id": "133",
    "text": "<p> When everyone is asleep, you ascend to the grille. It is fastened shut by a large bronze padlock.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Pick the lock.",
        "target": "178"
      },
      {
        "id": 1,
        "text": "Call on your jinni.",
        "target": "246"
      },
      {
        "id": 2,
        "text": "See if your hawk can help.",
        "target": "201"
      },
      {
        "id": 3,
        "text": "Give up any thought of escaping for now.",
        "target": "155"
      }
    ]
  },
  "134": {
    "id": "134",
    "text": "<p> The cloud of poisonous fog spreads rapidly to fill the room.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rely on quick wits to save you.",
        "target": "65"
      },
      {
        "id": 1,
        "text": "Trust your agility.",
        "target": "88"
      },
      {
        "id": 2,
        "text": "Try using your black jewel.",
        "target": "156"
      },
      {
        "id": 3,
        "text": "There's nothing to be done.",
        "target": "134a"
      }
    ]
  },
  "134a": {
    "id": "134a",
    "text": "<p> The smoke envelops you and you fall senseless to the floor, never to recover.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "135": {
    "id": "135",
    "text": "<p> You ask him the cause of his sorrow. 'Is it because you lost your hand?'</p><p>He nods, still weeping. 'What irony! What a vicious twist of fate! I am Shazir, and only a week ago I was the greatest thief in the world. Jafar of Baghdad hired me to steal a fragment of the rokh's diamond egg for him.'</p><p>'What happened?' you ask. 'Did the rokh bite off your hand?'</p><p>He gives a bitter scowl. 'I never got that far. The first stage was to acquire a boat, so I came to this very village, which is the place where I was born. It amused me to think that here was I, the renowned Shazir, returning to the village where I had last been seen fifteen years ago. When I left I was just a scrawny young ragamuffin with a mop of unruly hair, so how could I imagine anyone would recognize me?'</p><p>'But someone did?'</p><p>'Old Muluk, from whom I once stole two fishes,' replies Shazir, nodding. 'He had me seized, they summoned the local judge, and my hand was cut off. Oh, to cut off my hand just for two fishes! I, who have stolen from the treasuries of kings!'</p><p>'Certainly the loss of your hand will handicap your illustrious career.'</p><p>'More than that: my life is forfeit! I have already spent the money Jafar gave me. When I fail to turn up with the eggshell, he'll have his spies hunt me down.'</p><p>'Possibly not.' His story has given you an idea. 'Why not swap clothes with me? I'll sail off and get the eggshell and take it to Jafar, pretending to be you.'</p><p>Shazir shakes his head. 'Absurd. You look nothing like me.'</p><p>'In dim light I might pass. If he questions me, I'll say I'm your cousin.' Seeing Shazir hesitate, you add, 'Isn't it better than certain death?'</p><p>Finally he agrees. He gives you his clothes and introduces you to the fishermen who were going to take him to the rokh's island.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Now you will go in his place.",
        "target": "203"
      }
    ],
    "state_changes": [
      {
        "var": "zebra",
        "op": "set",
        "value": 1
      }
    ]
  },
  "136": {
    "id": "136",
    "text": "<p> As you stand gazing up the daunting pinnacle, a great black blot comes dropping through the cloud towards you. At first you feel a stab of terror because you think it is a dislodged boulder. You step back, fearing you'll be crushed, but then the shape opens its wings and goes swooping out across the island. </p><p>You can only stand dumbstruck. It is the rokh. None of the tales prepared you for the true sight of it: a great soaring raptor whose shrieks rattle the rocks around you, and whose claws are big enough to carry off an elephant.</p><p>The rokh settles on a sheep, pressing the terrified animal down with a lazy sweep of its talons. One peck is enough to end the sheep's life. The bloody flesh drips from the rokh's beak - no more than a morsel for such a giant creature.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sneak up and hitch a ride.",
        "target": "158"
      },
      {
        "id": 1,
        "text": "Sneak up and hitch a ride.",
        "target": "136a"
      },
      {
        "id": 2,
        "text": "Start climbing.",
        "target": "181"
      },
      {
        "id": 3,
        "text": "Look in your backpack.",
        "target": "204"
      },
      {
        "id": 4,
        "text": "Give up and go home.",
        "target": "159"
      },
      {
        "id": 5,
        "text": "Give up and go home.",
        "target": "113"
      }
    ]
  },
  "136a": {
    "id": "136a",
    "text": "<p> The rokh's beady gaze scours the land all around, but it does not see you creeping over and taking hold of its tail feathers. With a sharp caw it launches itself into the sky and you are carried up and up until finally you reach the nest on the top of the pinnacle.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Look around.",
        "target": "325"
      }
    ],
    "state_changes": [
      {
        "var": "lamp_of_antar",
        "op": "set",
        "value": 0
      }
    ]
  },
  "137": {
    "id": "137",
    "text": "<p> There are many stories about where the rokh has its nest and the diamond shell fragments to be found there. Most of the stories must be lies, or half of mankind would be rich.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "But you know the true location.",
        "target": "203"
      },
      {
        "id": 1,
        "text": "Where do you believe it can be found?",
        "target": "226"
      },
      {
        "id": 2,
        "text": "Where do you believe it can be found?",
        "target": "271"
      },
      {
        "id": 3,
        "text": "You can only trust to luck.",
        "target": "248"
      }
    ]
  },
  "138": {
    "id": "138",
    "text": "<p> The sailor speaks with rapture of the joys of seafaring. 'The salt spray has a scent more lovely than the spices of Ceylon,' he says. 'And what jewel ever shone as bright as the setting sun, smouldering like a ruby above the languid gold of the ocean?'</p><p>As you approach the docks, however, his mood becomes more practical. 'You'll first sail downriver to Basra,' he says. 'From Basra on to the open sea of the Gulf. Once past the Straits of Hormuz, I'd counsel you to stay close to shore if you wish to avoid a hazardous adventure. Somewhere in the Indian Ocean lies the island of a malevolent dwarf. He has deep knowledge of dire sorcery. It's said that he does not welcome visitors, but nor does he hurry to see them leave again once they've found his isle. His seven sentinels have as much mercy as sharks.'</p><p>You nod, glancing away to hide your sceptical smile. 'I'm grateful for this advice. Are there other dangers of the deep I should watch out for?'</p><p>He spreads his hands as if at an embarrassment of riches. 'The giant fish called the dendan, which swallows ships. The people of the Scarlet Isle, who are ruled by dead kings. The evil fire wizards whom the Prophet cast out from this land two centuries ago. And sundry ghosts, ifrits and cannibal pirates, of course...'</p><p>You raise your eyebrows. 'Are you sure that going to sea is a good idea?'</p><p>'Now I come to think,' says the sailor, pulling thoughtfully at his beard, 'it is a perilous life at best. But consider the great rewards, my friend, if you should survive to reach one of those fabulous ports where silks and spices are as plentiful as the plums of the Caliph's garden.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Seek adventure at sea.",
        "target": "160"
      },
      {
        "id": 1,
        "text": "Join a merchant expedition heading overland.",
        "target": "183"
      }
    ]
  },
  "139": {
    "id": "139",
    "text": "<p> Pulling off the hawk's hood, you thrust the bird into Masrur's face. It is just as surprised as he is, beating the air with its wings and thrusting its talons out by instinct. You see a livid red weal appear across Masrur's heavy jowels and he flings his sword aside, clutching at the painful gash. The hawk flutters over to settle on Jafar's arm.</p><p>You run back to the doorway. But the Palace guards have heard the commotion, and even now a band of swordsmen are rushing at you from one end of the landing. Glancing back, you see Jafar stroll unhurriedly forward with a look of triumph on his pudgy face.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Use your bow.",
        "target": "230"
      },
      {
        "id": 1,
        "text": "Stand your ground and fight.",
        "target": "47"
      },
      {
        "id": 2,
        "text": "Run for your life.",
        "target": "253"
      }
    ],
    "state_changes": [
      {
        "var": "hawk",
        "op": "set",
        "value": 0
      }
    ]
  },
  "140": {
    "id": "140",
    "text": "<p> Moving noiselessly between the softly swaying drapes, you put your finger to the woman's lips. Though startled, she nods to signal that she will not cry out for the guards. </p><p>'Who are you?' she whispers. 'Have you come to answer my prayers? To rescue me from my fate?'</p><p>'What fate is that?' you reply quietly, keeping one eye on the hunched silhouettes of the guards at the front of the barque.</p><p>'I was the Caliph's slave, but I displeased his vizier, who arranged to have me sent as a gift to the Governor of Basra. I would sooner die than join his harem.'</p><p>'I too have a grudge against Jafar.'</p><p>'Then help me escape. When I do not arrive in Basra, Jafar himself will have to pay for another concubine.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Are you female?",
        "target": "298"
      },
      {
        "id": 1,
        "text": "Or male?",
        "target": "140a"
      }
    ]
  },
  "140a": {
    "id": "140a",
    "text": "<p> You have to decide whether to help the woman or not. Perhaps her beauty sways your decision?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Leap out and attack the guards.",
        "target": "320"
      },
      {
        "id": 1,
        "text": "Use your wits.",
        "target": "342"
      },
      {
        "id": 2,
        "text": "Summon a jinni.",
        "target": "364"
      },
      {
        "id": 3,
        "text": "Return to your ship.",
        "target": "375"
      }
    ]
  },
  "141": {
    "id": "141",
    "text": "<p> Pushing Yussuf back, you launch yourself into the thick of the devilish horde with a defiant cry of battle-fury. Chittering madly, they rip at your flesh with their hard axe-like talons and razor-edged jaws. One reaches past you for your cringing friend, who fends it away with a feeble blow and then falls to his knees and buries his head in his hands.</p><p>You have no time to worry about Yussuf. You push one of the monsters away, but another closes its jaws on your wrist and you feel the crunch of sinew as your blood spurts across its moist leathery orb of an eye.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "142"
      },
      {
        "id": 1,
        "text": "Can you prevail?",
        "target": "209"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -5
      }
    ]
  },
  "142": {
    "id": "142",
    "text": "<p> The odds are hopeless, and you go down fighting under a hail of blows.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "143": {
    "id": "143",
    "text": "<p> Your vessel is becalmed.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Kneel in prayer.",
        "target": "165"
      },
      {
        "id": 1,
        "text": "Summon your jinni.",
        "target": "188"
      },
      {
        "id": 2,
        "text": "Wait to see what fate has in store.",
        "target": "211"
      }
    ]
  },
  "144": {
    "id": "144",
    "text": "<p> The captain orders the rigging stripped and spliced together, making a long rope which is lowered over the edge of the cloud. </p><p>'As the cause of all this trouble, you shall go first,' he says.</p><p>Weak with fear, you slither down the rope. When you reach the bottom there is still a drop of forty feet to the sea. You let go and fall, hitting the water with stunning force. Drenching darkness closes over your head.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "280"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "144a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "144a": {
    "id": "144a",
    "text": "<p> So this is how it ends. After all your adventures, your body will drift to a resting place on the sea bed, where your bones will become food for coral.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "145": {
    "id": "145",
    "text": "<p> Racing through the streets back to the ship, you scramble aboard and gasp out the order to cast off. As the ship pulls away from the dock, you raise yourself breathlessly and lean on the rail to watch a mob of angry islanders come chasing after you. They are too late. The front runners race to the edge of the jetty intending to jump aboard, but they see the distance is too far and stand suspended with flailing arms and comical alarmed stares before plunging over into the water. Your relief at escaping from such peril spills over into laughter, and the rest of the crew join in.</p><p>Suddenly a grim old man pushes through the throng. Something about the look of him chokes off your merriment. He raises a staff topped by a human skull and begins a low howling chant that reverberates off the hills. You feel a prickling in the hair of your scalp. You are sure it is a curse.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Deflect the curse with magic of your own.",
        "target": "324"
      },
      {
        "id": 1,
        "text": "Let's hope you're wrong.",
        "target": "346"
      }
    ]
  },
  "146": {
    "id": "146",
    "text": "<p> This is no carefree jaunt for the half-hearted. The rituals are rigorous and take many days. First you visit the Great Mosque, where the looming black block of the sacred Kaaba stands like the very fingerprint of God against the sky. Circling this seven times, as tradition demands, is wearying in the intense desert heat. You are soon soaked in sweat and coughing because of the dust thrown up by hundreds of feet.</p><p>After kissing the black stone, you drink and wash in the sacred well, Zamzam. Then there is an arduous run to and fro between two mountains just outside the city walls. You see an old man falter and drop to his knees. By now you are suffused with understanding of the Prophet's teachings and you stop to help him even though you, too, are close to fainting.</p><p>Your kindness is repaid. The old man helps you with your prayers in the days that follow. On the eighth day, you listen to a sermon preached at the same spot where the Prophet last spoke to his people in this life. Then, as the sun pulls streamers of red fire out of the sky to the west, you must walk to the Pillars of Mena where you spend the next day collecting pebbles. When you wonder at the meaning of this, the old man is on hand to instruct you. It seems that when Ismail was tempted by the Devil to disobey his father, Abraham, he drove the Devil away by throwing stones at him. </p><p>On the last day you sacrifice a sheep and distribute the meat to the poor. This symbolizes the sheep that Abraham sacrificed to God in place of his son Ismail.</p><p>The rituals are over. You are now a hajji, a pilgrim, and may wear a green turban to show this. You enjoy your first good restful sleep in many days.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You awaken invigorated.",
        "target": "123"
      }
    ],
    "state_changes": [
      {
        "var": "hajji",
        "op": "set",
        "value": 1
      },
      {
        "var": "life_points",
        "op": "add",
        "value": 2
      }
    ]
  },
  "147": {
    "id": "147",
    "text": "<p> The two ghouls race off ahead and are soon out of sight. Gasping for breath, you realize you cannot hope to keep up with them. No doubt they have benefitted from their high-protein diet. You decide that it would be better to simply slink away. You are clambering down through the rocks when you hear an ominous cough just behind you. Whirling, your heart sinks to see the ghoulish witch and her sons standing right behind you. She is holding a divining rod which she points towards you, saying through gritted teeth: 'There's your supper. Don't lose it again.'</p><p>They club you brutally to the ground. You struggle to stay conscious.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's no use.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "You're not finished yet.",
        "target": "147a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "147a": {
    "id": "147a",
    "text": "<p> You are gripped firmly by the arms and led back to the hut. As they shove you inside, the mother starts looking at the jars along the shelves. 'Let's see, a bit of pepper and some garlic ought to set off the flavours nicely.'</p><p>You must do something.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Make a wish.",
        "target": "327"
      },
      {
        "id": 1,
        "text": "Fight for your life.",
        "target": "370"
      },
      {
        "id": 2,
        "text": "Fight for your life.",
        "target": "305"
      }
    ]
  },
  "148": {
    "id": "148",
    "text": "<p> You cut him deeply across the chest, but his skin is hard like wind-dried leather and he only smiles at your efforts. Striking back, he inflicts a wicked gash to your thigh.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you fight on?",
        "target": "148a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -4
      }
    ]
  },
  "148a": {
    "id": "148a",
    "text": "<p> It's just a flesh wound.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try the same tactic again.",
        "target": "83"
      },
      {
        "id": 1,
        "text": "Weave back and go for a lighter blow.",
        "target": "37"
      },
      {
        "id": 2,
        "text": "Just try to parry.",
        "target": "60"
      }
    ]
  },
  "149": {
    "id": "149",
    "text": "<p> The streets of the city are tiered thoroughfares that snake up between the clustered houses to the palace at the top of the hill. As you ascend the steps of one such street, you are shouldered aside by a patrol of stern-faced soldiers. Affronted at their rudeness, you give them a glowering look as they descend towards the docks.</p><p>A passing barber notices the incident and says to you: 'The palace guards are looking for a thief who stole a ruby from the treasury. The Sultan is furious, and he has decreed that if the thief is not caught by the time the moon rises tonight, the captain of the palace guard will be crucified.'</p><p>Your pride is still ruffled. 'I can understand their urgency, then. All the same, there is no excuse for manhandling an honest traveller in that way.'</p><p>He peers at you in the dusk. 'Ah, you are a stranger to the city?'</p><p>'Yes,' you say, nodding. 'What of it?'</p><p>He suddenly leaps back and cries: 'Here is the thief! Here!'</p><p>Before you can react, the soldiers turn and race back up the street. As you start to raise your hands, the barber leaps on your back, bearing you to the ground. </p><p>The soldiers grab you. 'Well done, friend,' their officer says to the barber. 'You'll be rewarded for this.'</p><p>'My reward awaits me in heaven,' he says.</p><p>'I'll give it to you myself,' you growl at him, 'once I've explained there's been a mistake.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Another setback.",
        "target": "250"
      }
    ]
  },
  "150": {
    "id": "150",
    "text": "<img src=\"./images/150_illo.jpg\" alt=\"\"> You draw back further out of sight, but in your anxiety to avoid being spotted you fail to notice a shield fixed to the wall behind you. It falls with a clang. The three sorcerers whirl.</p><p>'Stop!' cries the leader. 'You have been chosen for a glorious destiny!'</p><p>You don't intend to wait and see what that 'glorious destiny' entails. However, as you turn to flee, the three raise their hands and begin an eerie magical chant.</p><p>Smoke as thick and green as pond scum billows out of their sleeves and rolls across the room towards you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Look for a way out.",
        "target": "111"
      },
      {
        "id": 1,
        "text": "Look for a way out.",
        "target": "134"
      }
    ]
  },
  "151": {
    "id": "151",
    "text": "<p> The storm passes at last. You watch it swirl off into the north, a smudge of dust against the sharp line of the horizon. </p><p>Hakim gathers everyone together. After so many hours with the wind's roar filling your ears, you have to strain to make out his words. 'We have lost two camels...' he is saying.</p><p>You glance around, finding one face missing. The young lad who gave the camels their fodder each evening. 'What about Hasib?'</p><p>A search is mounted, but there is no sign of Hasib. He is lost beneath the dunes that the storm left piled up in its wake. After stopping to pray, you head on until you see an oasis whose cool green shadows defy the desert's harsh golden dusk. Among the palm trees there are tents and even the turrets of an old fort. 'Do we dare approach?' says Hakim. 'They might be hostile.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Counsel him to enter the oasis.",
        "target": "416"
      },
      {
        "id": 1,
        "text": "It would be wiser to pass by.",
        "target": "438"
      }
    ]
  },
  "152": {
    "id": "152",
    "text": "<p> Your next sensation is of being shaken awake. Your clothing is filled with sand and the others are leaning over you. 'You're alive!' gasps Hakim. 'It's a miracle. You were under the quicksand for minutes on end, then you bobbed up to the surface.'</p><p>You start to tell him about your strange adventure, then think better of it. It would sound as if you were raving mad. Passing your hand in front of your face, you realize that the experience has changed you. You have conquered the dread spirit of death that dwells in the desert's fastnesses. Now you can deal confidently with any threat the desert can throw at you. </p><p>Giving the quicksand a wide berth, you travel on until you see an oasis glittering like a green jewel in the hot golden haze of dusk. Among the trees you see people camped, and behind them is the outline of an old stone fort.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Approach the oasis.",
        "target": "416"
      },
      {
        "id": 1,
        "text": "Pass by.",
        "target": "438"
      }
    ],
    "state_changes": [
      {
        "var": "wilderness_lore",
        "op": "set",
        "value": 1
      }
    ]
  },
  "153": {
    "id": "153",
    "text": "<p> You wake up feeling sick and lethargic. The sun is beating down on the planks of the deck, and the stink of festering corpses hangs heavy in the air.</p><p>You sit up, wincing, and look around. Your heart sinks as you realize that your own ship has gone. You are alone on a ship of dead men, drifting on the open ocean. Staggering over to inspect the hawser, you find it has been cut. Did your friends cast you adrift? It seems unbelievable - but, if not, then who did?</p><p>You tip the corpses over the side. It is hard, unpleasant work that makes the thudding behind your eyes feel even worse. You are just dipping a cup into the freshwater barrel to slake your thirst when you remember that you did the same thing last night. In fact, it is the last thing you remember doing. You sniff the water, and now you can detect a faint flowery scent. It is poisoned. You are lucky to be alive.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fall back on your seafaring skills.",
        "target": "39"
      },
      {
        "id": 1,
        "text": "Your life is in God's hands.",
        "target": "62"
      }
    ]
  },
  "154": {
    "id": "154",
    "text": "<p> You retreat slowly, pulling the foliage around you like a cloak. The eye-slits of the mask turn in your direction, pause, then scan the rest of the glade. 'None remain,' declares the noble voice.</p><p>The Sultan rides off, followed by his horsemen. You emerge from hiding, taking a last sad glance at your dead friends before moving off alone.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on alone.",
        "target": "177"
      }
    ]
  },
  "155": {
    "id": "155",
    "text": "<p> A week later, the grille is hauled up and another prisoner is lowered into the oubliette. 'Here is the real Shadow!' calls down a guard. 'Now you worthless wretches have got some distinguished company for a change.'</p><p>The grille drops back into place with a clang. 'What about me?' you shout up. 'If you've got the real Shadow, you must know I'm innocent!'</p><p>The guard's face reappears at the top. He has a broad smirk as he says, 'Innocent? You can't be innocent if you're in gaol, can you? So maybe you didn't steal the Sultan's ruby - who cares? No doubt there's some other crime we can mark down to you.'</p><p>'This is rank injustice!' you call back, but he has gone. </p><p>The newcomer places a hand on your shoulder. 'I too am the victim of injustice, my friend, for I am not the Shadow. I thought you were. In fact, I got myself caught in order to meet you. My name is Azenomei.'</p><p>You turn and look at him: a handsome beardless young man with sparkling gaze. He has a small scar across the bridge of his nose. </p><p>'In that case, you're in for a big disappointment. And why are you smiling? Don't you know we'll probably stay here till we die?'</p><p>His grin grows all the wider as he brings out a huge bunch of keys. 'Here I have the answer to nine hundred and ninety-nine locks. All we need is a way to reach the grille.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Put on your magic slippers.",
        "target": "336"
      },
      {
        "id": 1,
        "text": "Use the coil of Indian rope.",
        "target": "292"
      },
      {
        "id": 2,
        "text": "Where's that long tailed cat?",
        "target": "314"
      },
      {
        "id": 3,
        "text": "It's impossible.",
        "target": "155a"
      }
    ]
  },
  "155a": {
    "id": "155a",
    "text": "<p> With no way of reaching the grille, you will end your days in this miserable pit.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "156": {
    "id": "156",
    "text": "<p> To your own amazement as much as that of the evil sorcerers, the cloud of green gas is absorbed by the black jewel you are carrying. You waste no time wondering about it, but launch yourself forward and snatch up the chart before racing from the room. </p><p>The sorcerers come tottering after you, but they are old and you soon outdistance them. Retrieving your belongings (now including the chart), you find the door and hurry down the hillside away from the fearful citadel.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Make for the coast.",
        "target": "42"
      }
    ],
    "state_changes": [
      {
        "var": "chart",
        "op": "set",
        "value": 1
      },
      {
        "var": "black_jewel",
        "op": "add",
        "value": -1
      }
    ]
  },
  "157": {
    "id": "157",
    "text": "<p> Losing your grip, you fall with a scream only for your shirt to catch on a spur of rock that juts out from the rock face. You are suspended above a sheer drop and you can hear the fabric starting to tear, but in front of you is a crevice that was previously hidden by the overhang.</p><p>Scrambling inside, you find a narrow fissure up through the pinnacle. It is a tight squeeze but, by bracing yourself against the sides, you are able to ascend all the way to the top.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Search the nest.",
        "target": "325"
      }
    ]
  },
  "158": {
    "id": "158",
    "text": "<p> The rokh's beady gaze scours the land all around, but it does not notice you creeping over and taking hold of its tail feathers. With a sharp caw it launches itself into the sky and you are carried up and up until finally you reach the nest on the top of the pinnacle.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Look around.",
        "target": "325"
      }
    ]
  },
  "159": {
    "id": "159",
    "text": "<p> There is a sudden gust of occult wind, and you are sucked back in a dark spiral which conveys you to the Citadel of Bronze. Ayisha awaits you. She is still chained to the gold couch, but whereas before her pose was languid and resigned, now she is sitting forward eagerly.</p><p>'Did you get it?' she asks. 'Did you get the key?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "'Yes.'",
        "target": "424"
      },
      {
        "id": 1,
        "text": "'No.'",
        "target": "91"
      }
    ]
  },
  "160": {
    "id": "160",
    "text": "<p> Seen from the docks, the towers of Baghdad are like a carving of pale wood against the sky. Ships bob up and down at the quayside, sails wrapped tight around their high slender masts. You pass groups of sailors drinking wine and playing at dice, carousing now that the rigours of Ramadan are behind them.</p><p>Several captains are hiring crew members. If you have sailing experience they will pay you eight dinars. If not you will only be trusted with menial tasks and your pay is just three dinars.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail east to the Indies.",
        "target": "229"
      },
      {
        "id": 1,
        "text": "Head west towards Egypt.",
        "target": "252"
      },
      {
        "id": 2,
        "text": "Go south in search of the Scarlet Isle.",
        "target": "274"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 8
      }
    ]
  },
  "161": {
    "id": "161",
    "text": "<p> Masrur's sword flashes like a lightning bolt in the lamplight. You do not even feel it cleave through your neck, and your eyes are already darkened by death when your head hits the floor at Jafar's feet. Your adventure has come to a grisly end.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 0
      }
    ]
  },
  "162": {
    "id": "162",
    "text": "<p> The flag at the prow identifies this vessel as belonging to the Governor of Basra. Those are his elite guards, each of them more than a match for any common swordsman. Even if you are skilled in fighting, you do not relish a confrontation with six such doughty warriors.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Return to your ship.",
        "target": "375"
      },
      {
        "id": 1,
        "text": "Approach the woman quietly.",
        "target": "140"
      }
    ]
  },
  "163": {
    "id": "163",
    "text": "<p> You snuff out the taper just before the monsters get within striking distance. Yussuf gives a long despairing wail of dread as darkness closes its robe around you.</p><p>Moments trickle by. In the nerve-jangling silence, the only sound to be heard is the ragged rasp of Yussuf's desperate prayers: 'Merciful God, spare your unworthy servant. Never will I thieve nor cheat at dice again. No drop of wine will touch my lips - '</p><p>'Yussuf, listen!' You reach out a hand in the dark and shake him until he regains his wits. </p><p>'There's nothing...' he says in a wanly hopeful voice. 'What happened to the monsters?'</p><p>Stepping back to find a rock to strike sparks with, you tread on something which squelches under your heel. Relighting the taper, you see that you have crushed a swarm of beetles. 'There are the monsters.'</p><p>Yussuf gapes at them. 'Tiny insects! But those things we saw were huge.'</p><p>'Illusions. The shape of our own fears.' You peer into the gloom ahead. 'We must be on our guard, my friend. This is a place of dark sorcery.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on.",
        "target": "186"
      }
    ]
  },
  "164": {
    "id": "164",
    "text": "<p> As you make your choice, the old man claps his hands and the mysterious light flares up, dazzling you. As your eyes clear, you find yourselves back on the ledge overlooking the river. There is no sign of the old man, nor any trace that his charcoal fire was ever here.</p><p>'How very strange,' says Yussuf. 'I would think it all a dream, if not for the treasures we have with us. Who was the old man, I wonder?'</p><p>'A ghost or jinni. Let's hope the treasures are not cursed.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back to the ship.",
        "target": "256"
      }
    ],
    "state_changes": [
      {
        "var": "lamp_of_antar",
        "op": "set",
        "value": 1
      },
      {
        "var": "indian_rope",
        "op": "set",
        "value": 1
      }
    ]
  },
  "165": {
    "id": "165",
    "text": "<p> The captain glowers as you kneel on the deck and unroll the mat. 'Save your prayers for later,' he snarls. 'God is compassionate, but we cannot look to Him to guide us from this fog bank.'</p><p>The mat falls with its gold fringe towards Mecca. You scan the charts, pointing to a jagged line that the map-maker has labelled with a warning. 'See this coral reef?' you say to the captain. 'If I'm right as to our heading, it lies just a few leagues to starboard. I counsel you to steer well clear, or we'll run aground.'</p><p>He stares at your prayer-mat, then tries it for himself. No matter how he unrolls it, it always falls the same way. 'It must be magical,' he grumbles suspiciously.</p><p>'It is pious magic, at least. As reliable as any compass.'</p><p>Finally he agrees to steer the course you set. Slowly the current carries you clear of the dismal fog, and when the crew see the sun again they raise you on their shoulders with a cheer.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail on.",
        "target": "234"
      }
    ]
  },
  "166": {
    "id": "166",
    "text": "<p> You take a stroll through the dusty streets of red earth. Children follow you in silence. The adults have all gone with your captain to the headman's house. You see no wares to buy. When you pass the window of a house, you catch a brief glimpse on an old woman inside before the shutters are banged shut. A dog watches you without barking, then slinks off to lie in the shade beside an old well.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Look in the well.",
        "target": "212"
      },
      {
        "id": 1,
        "text": "Go to the headman's house.",
        "target": "235"
      },
      {
        "id": 2,
        "text": "Return to the ship.",
        "target": "189"
      }
    ]
  },
  "167": {
    "id": "167",
    "text": "<p> With Jumail nervously following a few steps behind, you thread your way along the narrow empty streets until you reach an ox cart not far from the headman's house. Barely have you hidden yourselves behind this when you see the islanders emerging from the building, dragging your captain whom they have bound with thick ropes. Despite the danger he is in, he is wrothly red and hurling eye-popping obscenities with his usual gusto.</p><p>'Swear and call upon your god all you like,' you hear the headman say as the procession passes your hiding place. 'Tomorrow you will become a sacrifice to ours.'</p><p>They take him and lock him inside a hut built of closely spliced hardwood logs. Two islanders are left to guard him while the others see to the grisly business of returning their dead ancestors to the cliffside tombs above the town.</p><p>Jumail is beginning to get cold feet. 'Poor old Captain Ibrahim,' he whispers. 'It doesn't look like we've much chance of rescuing him, does it? I suppose we ought to get back before they catch us, too.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Return to the ship.",
        "target": "346"
      },
      {
        "id": 1,
        "text": "Continue with the rescue attempt.",
        "target": "190"
      },
      {
        "id": 2,
        "text": "Continue with the rescue attempt.",
        "target": "213"
      }
    ]
  },
  "168": {
    "id": "168",
    "text": "<p> By noon of the following day your nostrils are thickly clogged with dusty sand stirred up by the wind. The sky resembles a plate of molten lead; the ground is hotter than a kiln.</p><p>One of your scouts returns and leads you and Hakim, the merchant, to a blue flag set on a long cane in the sand. 'What can it mean?' Hakim wonders aloud. 'Is it a Bedouin grave?'</p><p>Falling to your knees, you begin to dig. 'God preserve us!' cries the scout. 'Do you mean to loot the corpse?'</p><p>You only laugh. 'There is no corpse here,' you tell him. 'Quite the opposite.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Show them.",
        "target": "263"
      }
    ]
  },
  "169": {
    "id": "169",
    "text": "<p> Drawing inspiration from the Lord of the Desert's taunts, your jinni uses his magic to transform you into a mouse. You scurry out of the alcove, but the enraged lord pays no notice. Seeing the jinni's shadow beyond the curtain, he thinks he still has you trapped.</p><p>You run across the floor and up the steps, squeezing under the frame of the giant iron door just seconds before the spell wears off and you return to your normal form.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Find your way back to the others.",
        "target": "459"
      }
    ],
    "state_changes": [
      {
        "var": "ring",
        "op": "set",
        "value": 0
      }
    ]
  },
  "170": {
    "id": "170",
    "text": "<p> You wait ten days until your owner and his camel-drivers return from Mecca. During that time, your thoughts were often of escape, but you know that running away would do you no good. You would soon be recaptured by the soldiers who patrol the pilgrim routes. The fate of a runaway slave does not bear thinking about.</p><p>As Hakim checks the straps of his camel's harness, he looks at you askance. Perhaps he has guessed what was in your mind, because he says: 'Wiser to stay with me. I treat you well enough. You're better off than most slaves, eh?'</p><p>You return his gaze without expression. 'But still I am a slave,' you say flatly. </p><p>At least you have had the opportunity to rest and regain your strength.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Journey on.",
        "target": "123"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 1
      }
    ]
  },
  "171": {
    "id": "171",
    "text": "<p> They are direly offended that you should spurn their hospitality. 'We offer you our only food, and you repay us by taking our pride instead!' rages the chief. 'Begone! Perish in the wilderness, you ungrateful dogs!'</p><p>They take up stones and start to pelt you. Seizing the halters of your camels, you retreat towards the dunes as the barrage of missiles cut into your flesh.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "171a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "171a": {
    "id": "171a",
    "text": "<p> You manage to reach the dunes and your pursuers give up the chase. You can only nod when Hakim, the owner of the camel train, says: 'I am chastened. We are civilized men, yet we have had a lesson in honour from those who are almost too poor to afford the luxury of it.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on.",
        "target": "217"
      }
    ]
  },
  "172": {
    "id": "172",
    "text": "<p> The wind wraps a cloak of sand around you and pulls you off your feet. The camel's halter slips through your fingers. You give a startled cry, but it is torn from your lips and flung into the fury of the storm. You have a single glimpse of your companions' faces in the swirling gritty gloom. They stare in dismay to see you sucked into the air by the whirlwind. Then they drop away at dizzying speed and are lost to sight.</p><p>You hurtle through the heavens, flung between the dim gulfs of the clouds by the force of the storm. A leaden knell echoes inside your skull, sounding like the surge of waves heard from the ocean floor. You draw breath, but instead of sand you get a mouthful of salt water.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "172a"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "280"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "172a": {
    "id": "172a",
    "text": "<p> You have no strength to keep going. Your last thought is that you are drowning beneath the sea - surely the only traveller to do so while crossing the Arabian Desert!</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "173": {
    "id": "173",
    "text": "<p> You jump aside as the Lord of the Desert charges forward. He careers past, robes fluttering, slashing madly with his sword, and rebounds from the wall full of fury. Holding his sword straight out in front of him, he thrusts towards your heart.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try to dodge.",
        "target": "265"
      },
      {
        "id": 1,
        "text": "Punch him as he comes in close.",
        "target": "468"
      },
      {
        "id": 2,
        "text": "Kick at his legs.",
        "target": "242"
      }
    ]
  },
  "174": {
    "id": "174",
    "text": "<p> The man you have caught gives his name as Jumal of Serendib. He admits to poisoning all of the crew of his own ship, but maintains that it was justified because they were unbelievers.</p><p>The captain, a perceptive man whose brother is a judge, soon sees the flaw in Jumal's argument. 'Obviously you were lying in wait till you could poison our water also!' he cries. 'You unmitigated villain.'</p><p>'You call me a villain,' says Jumal, raising his finger, 'but I counter this with the charge that you are the villains. If you had learned of my quest for the diamond egg of the giant rokh, you would happily have murdered me for the secret.'</p><p>'Sheer supposition!' retorts the captain. 'Because you yourself are a treacherous pustule with the ethics of a starving hyena, you impute the same motives to others. Where is the rokh's nest, incidentally?'</p><p>Under close interrogation, Jumal reveals that it is at the head of the Nile river. He also hands over a vial containing an all-purpose antidote, which is given to you for safekeeping.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail on.",
        "target": "197"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      },
      {
        "var": "antidote",
        "op": "set",
        "value": 1
      }
    ]
  },
  "175": {
    "id": "175",
    "text": "<img src=\"./images/175_illo.jpg\" alt=\"\"> You take stock of your surroundings with growing astonishment. The ship is caught in the branches of a large tree whose roots lie in the clouds. Cliffs like puffs of foam loom above a sheer drop of hundreds of feet to the sea below.</p><p>Slowly, like a sleepwalker, Captain Ibrahim reaches out and plucks a violet flower from the bough of the tree. He sniffs at it, then drops it into your hand. 'It is real,' he says, his gruff voice softened by awe.</p><p>'Look!' cries one of the sailors. He is pointing at gleaming towers that are visible on the other side of a hillock of cloud.</p><p>'It is a city,' says Captain Ibrahim, gradually recovering his wits. He turns to you. 'Go and investigate. The city's inhabitants may know of a way for us to reach the ground.'</p><p>You cannot argue. It was you who got everyone into this mess. You dangle your legs over the side, surprised to find the cloud surface is solid and springy. It reminds you of moss. With a last forlorn look at the others, you trudge off towards the mysterious city. </p><p>You have gone only a few hundred yards when you hear the sound of a child crying. It seems to come from beyond a fleecy white bank.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go looking for the child.",
        "target": "257"
      },
      {
        "id": 1,
        "text": "Continue on to the city.",
        "target": "302"
      }
    ]
  },
  "176": {
    "id": "176",
    "text": "<p> Days pass without mishap, and at last a good following wind brings you to the port of Raysut. By now Captain Ibrahim is his old blustering self. Striding down the gangplank, he accosts a merchant on the seafront and asks the latest news. </p><p>'The Red Sea is unsafe for shipping by reason of pirates,' announces the merchant. 'I myself lost a cargo of rugs that was bound for Cairo only last month.'</p><p>The captain glowers like an angry old wolf. 'Pirates? Pah! Surely the Sultan's fleets can deal with them?'</p><p>An old sailor who is passing by overhears this and stops to join in. 'These are no ordinary pirates. After each raid, they vanish like the dew in the gardens of Baghdad with the coming of dawn. I know, for I encountered them myself.'</p><p>'And you survived?' asks Yussuf the helmsman. 'How was that?'</p><p>'Ah!' declares the old sailor, raising his finger to the heavens. 'Now I shall tell you a tale of great wonder...'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hang around and hear his story.",
        "target": "453"
      },
      {
        "id": 1,
        "text": "Visit the market to do some shopping.",
        "target": "350"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 2
      }
    ]
  },
  "177": {
    "id": "177",
    "text": "<p> You wander for days in the hills until you find a trail that leads down into a region of steaming swampland. Skirting this, you travel on until you see a city of tall towers and eggshell domes straddling both sides of a great river. When you arrive at the gates, you enquire where you are.</p><p>The sentries give you an unwelcoming look. 'This is Daibul,' they say. 'Be warned, we give short shrift here to penniless vagabonds.'</p><p>'Perhaps I am no vagabond, but heir to a kingdom,' you reply, sauntering between them into the teeming city streets. Seeing their curious looks, you laugh, adding, 'Or perhaps not. God alone is all-knowing!'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Explore the city.",
        "target": "442"
      }
    ]
  },
  "178": {
    "id": "178",
    "text": "<p> You dig at the interior of the lock using a thin metal sliver that you keep tucked in your boot. After a few seconds there is a heavy click and the lock springs open. Noiselessly raising the grille, you lope across the courtyard and make your getaway.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Get well away from here.",
        "target": "223"
      }
    ]
  },
  "179": {
    "id": "179",
    "text": "<p> Without warning, he rounds on you and utters a spell.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your black jewel may protect you.",
        "target": "202"
      },
      {
        "id": 1,
        "text": "You are defenceless against his magic.",
        "target": "179a"
      }
    ]
  },
  "179a": {
    "id": "179a",
    "text": "<p> As the spell takes effect, you find yourself falling on all fours - or rather hoofs - and you will spend the rest of your life as a jackass.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "180": {
    "id": "180",
    "text": "<p> It takes months, but at last, while sitting in a fisherman's shack on the fringe of the mangrove swamps outside Daibul, you hear confirmation of the legend.</p><p>'Indeed, I have seen the rokh,' claims the fisherman. 'Its wingspan is so wide as to blot out the sun, and each claw could enfold a ship. Its beak is longer and sharper than - '</p><p>You give a cough. 'The important thing is, does it really lay diamond eggs?'</p><p>He cackles wildly. 'I don't know, do I? I never visited the Isle of Palms myself, much less climbed to the rokh's eyrie.'</p><p>'The Isle of Palms?' you enquire. Suddenly, success seems within your reach. </p><p>'That's where it nests. If you want, I'll take you there tomorrow.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Set out at dawn.",
        "target": "21"
      }
    ]
  },
  "181": {
    "id": "181",
    "text": "<p> At first the rocks are rough enough for you to climb quickly. As you get higher, though, you have to search more carefully for each handhold. Also the cliff is covered with patches of slippery moss, and twice you nearly lose your grip.</p><p>You look up. You don't seem to have got more than a third of the way, if that. You have no particular wish to look down and check.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on.",
        "target": "227"
      },
      {
        "id": 1,
        "text": "Give up and return to the ground.",
        "target": "249"
      }
    ]
  },
  "182": {
    "id": "182",
    "text": "<p> Few people dare to venture outside after dark because of the curfew, so it is easy to spot the Caliph. He is wrapped in a dark cloak and accompanied by his hulking bodyguard, Masrur. You shadow them until they return to the palace, which they enter by means of a concealed tunnel. Following, you emerge from the darkness of the tunnel just as the Caliph is throwing off his disguise. </p><p>'An assassin!' roars Masrur, stepping forward and raising his sword. </p><p>'Wait!' you say to the Caliph, raising your hands to show they are empty. 'I have not come to harm you, O Prince of the Faith, but to warn you against treachery.'</p><p>The Caliph considers for a moment, then nods and leads you to the end of the corridor. 'I'll hear what you have to say.'</p><p>You follow him into the throne room, where you come face to face with your enemy Jafar. You see hatred blaze behind his eyes, but he quickly masks it with a laugh and says, 'Why, O Caliph, do you waste your time on the prattle of this guttersnipe?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Now's your chance. Make it count.",
        "target": "477"
      }
    ]
  },
  "183": {
    "id": "183",
    "text": "<p> Arriving at the market in early morning, you see two teams of camels loaded for long journeys. Porters rush along the line, checking the wares are securely strapped. The camels growl like consumptive old men and glower disdainfully at their handlers, rising to their feet reluctantly as the first caravan moves off.</p><p>A merchant approaches you and asks if you will hire on as a caravan guard. 'I will pay you ten dinars. Come, be quick about your answer - those are my camels you see traipsing towards the eastern gate.'</p><p>'Ten dinars to brave the blades of a thousand bandits!' scoffs another man who has overheard this. He takes your arm and points to the other caravan, now making ready to set off. 'Why weigh your lifeblood against a pouch of gold? Come with us to Egypt. It's a safer route by far than this slave-driver takes.'</p><p>The first merchant stares at him in express amazement. 'Safe, you claim? Your tongue is more wretched than a dog's tail! Is it safe to fling one's life at the mercy of the desert sun?' He turns to you. 'Let this rogue pay you in water. You will need it more than my gold, if you take the route to Egypt.'</p><p>The first, who plans to head east through the Peaks of the Slayers, is offering ten dinars. The other, going across the desert to Egypt, offers six dinars. Decide.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Join the first caravan.",
        "target": "296"
      },
      {
        "id": 1,
        "text": "Join the second caravan.",
        "target": "400"
      }
    ]
  },
  "184": {
    "id": "184",
    "text": "<p> You can hear murmuring and the rustling of silks as Jafar changes his robe in the next room. Since he is boasting loudly to the timid slave about his plans, it's unlikely he will hear you. Even so, you are careful to pad as quietly as a cat over to the table where the chart lies. Scanning it quickly, you see that the rokh's nest is marked close to the source of the Nile river. </p><p>'These green slippers will not do!' you hear Jafar hissing at his slave. 'Have you no sense at all, you curd-faced girl? Fetch the red pair from the other room.'</p><p>You glance down. The red slippers are beside the table. You see the slave girl's swaying silhouette as she approaches the curtained archway. You must get away fast, or she will raise the alarm. Hastily you retrace your steps.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stick to the shadows.",
        "target": "383"
      },
      {
        "id": 1,
        "text": "You're spotted!",
        "target": "207"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      }
    ]
  },
  "185": {
    "id": "185",
    "text": "<p> You draw back to the stern, where the posts supporting the kiosk roof prevent the guards from coming at you all at once. Hearing the affray, the woman peeks out from behind the silk drapes and gives a shriek of dismay. </p><p>'Fear not, my lady!' calls one of the guards. 'We'll soon despatch this rogue.'</p><p>They might at that. You duck as the nearest guard swings his blade towards you. The steel hisses over your head and strikes the wooden rail with a dull thunk. As your opponent swears and twists at the sword to free it, you stamp on his foot and follow through with a desperate blow to his stomach. The others crowd in behind him, keen to try their mettle against you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw the jewelled sword you stole.",
        "target": "208"
      },
      {
        "id": 1,
        "text": "Fight.",
        "target": "231"
      }
    ]
  },
  "186": {
    "id": "186",
    "text": "<p> A single narrow passage slopes off from this cavern. You descend, steadying yourselves against the rock walls, until the flickering light of your taper reveals a room of worked stone just ahead. You see faded murals which show warriors in battle, fighting and dying to protect the idols of their false gods. </p><p>'These are scenes from a time before the light of truth was brought to mankind by the Prophet - may all blessings be upon him,' says Yussuf. He points to part of the mural. 'See these cloaked swordsmen with masks of iron. They are the fanatics of the god Mithra, who gave his followers great strength and courage in battle. Or so I have heard, but God alone is all knowing.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The legend sounds familiar.",
        "target": "232"
      },
      {
        "id": 1,
        "text": "Stay alert.",
        "target": "255"
      }
    ]
  },
  "187": {
    "id": "187",
    "text": "<p> No sooner have you made your choice than the old man claps his hands. At once the mysterious light flares up, dazzling you. When your eyes clear, you are back on the ledge overlooking the river. There is no sign of the old man, nor any trace that his charcoal fire was ever here.</p><p>'How very strange it all was,' says Yussuf. 'A dream? Surely not, for how then can we account for these two treasures?'</p><p>'Best we say nothing of this to the others. They would think us mad.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back to the ship.",
        "target": "256"
      }
    ],
    "state_changes": [
      {
        "var": "indian_rope",
        "op": "set",
        "value": 1
      },
      {
        "var": "jericho_horn",
        "op": "set",
        "value": 1
      }
    ]
  },
  "188": {
    "id": "188",
    "text": "<p> A thick vapour, darker than the mist, pours from your ring and congeals into a broad figure with eyes like hissing coals. The sailors fall flat on the deck in terror. Captain Ibrahim draws his sword and takes a step forward, but you place your hand on his wrist. 'Be calm. This grotesque ogre is my servant.'</p><p>The jinni eyes you blackly. 'What service may I perform for you, O fount of one thousand virtues?' he grates. </p><p>'Fill our sails with wind,' you tell him. 'Carry us far out of this fog bank.'</p><p>'I exist only to do your bidding,' he replies, but you do not like the vicious smile on his gnarled features as he says this. Your worries are confirmed a moment later when, blowing hard into the lank sails, he propels the ship directly upwards out of the water. The sailors cling on to the rail for dear life. It is a miracle that no one falls to his death. </p><p>Coming to rest with a soft jolt, you think that the ordeal is over. You have landed, indeed - but not back on the waves. Beneath you is a swirling mass of white. Your ship is suspended in the clouds!</p><p>The jinni swirls back into your ring. You exert your magic, brandishing the ring and sternly crying out, 'Jinni! I summon you to reappear!'</p><p>'There is no jinni here,' says a sullen voice from the ring. 'Just a grotesque ogre.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Look around.",
        "target": "175"
      }
    ]
  },
  "189": {
    "id": "189",
    "text": "<p> The sun buries itself in a dry red haze over the western hills. Velvet darkness slides down to cover the landscape. From the headman's house you see a blaze of lights, but elsewhere the town is shrouded in darkness.</p><p>The stars emerge. As a chill breeze gusts along the river, Jumail the cook pulls his jerkin around his shoulders and says, 'I don't like it. What's happened to the captain? He ought to have got back by now.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go ashore to look for him.",
        "target": "235"
      },
      {
        "id": 1,
        "text": "Stay aboard.",
        "target": "258"
      }
    ]
  },
  "190": {
    "id": "190",
    "text": "<p> You wait until the dead of night, when both guards are deep in contented slumber. A glance to right and left confirms the streets are deserted. Sliding through the darkness, you creep up to the door of the hut. It only takes you seconds to spring the lock. </p><p>The captain looks up as the bar of moonlight strikes his face. Though startled, he has the sense to keep quiet as you lead him silently back towards the jetty.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Set sail.",
        "target": "346"
      }
    ]
  },
  "191": {
    "id": "191",
    "text": "<p> Hakim selects a man to scout ahead. This is Al-Shammar, a rangy Bedouin who carries an ivory bow with which you have seen him bring down wheeling gulls above the coastal road. He must be afraid to be sent on alone, but he counts it a point of pride to laugh and say, 'I shall see if there are indeed bandits in the pass - and if there are, by my ancestors, I'll spit them each with an arrow.'</p><p>Despite these brave words, you never see Al-Shammar again. By the middle of the following morning, Hakim decides to risk pressing on. The cliffs rise up on each side and you all have the feeling of walking into the gates of a cursed city. The camels seem to sense the unease of their drivers. They lower their heads and growl at the ground like beaten dogs. </p><p>You scan the hills for bandits, but there is nothing. In the timid silence, the only sound to be heard is the desolate sigh of the wind in the rocks.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Travel on.",
        "target": "289"
      }
    ]
  },
  "192": {
    "id": "192",
    "text": "<p> Hakim sells you to a Frankish captain who is sailing with a hold full of lions and elephants to the court of an infidel king called Shah al-Ma'in. You adopt a surly scowl as you are led aboard his ship, but the truth is that your heart is brimming with hope. If you had run off before, your owner being a true believer, your only destiny would have been a painful death. But there is no penalty for slaves who run away from infidel owners. All you have to do, then, is come up with a plan of escape.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go over the side.",
        "target": "238"
      },
      {
        "id": 1,
        "text": "Sneak off in the night.",
        "target": "261"
      },
      {
        "id": 2,
        "text": "Trick the captain into freeing you.",
        "target": "482"
      },
      {
        "id": 3,
        "text": "You can't think of anything.",
        "target": "103"
      }
    ]
  },
  "193": {
    "id": "193",
    "text": "<p> The Sultan decides to let you try your luck in catching the pirates. He has nothing to lose, after all. You are taken to a small port at the foot of Mount Sinai where you are entrusted with a vessel and a crew of thirty marines.</p><p>You put out to sea and sail around the coast for several days without seeing so much as a fishing boat. Your patience is finally rewarded one morning when the lookout calls out, 'Sails on the horizon!'</p><p>The other vessel hoves into view. It turns out not to be the pirates, but a cumbrous merchant ship laden with wine barrels. Its captain obviously decided to risk passage across the Red Sea. You have a feeling his ship will make a choice target for the pirates.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Move in and hail the merchant ship.",
        "target": "239"
      },
      {
        "id": 1,
        "text": "Keep it in sight without getting close.",
        "target": "476"
      }
    ]
  },
  "194": {
    "id": "194",
    "text": "<p> You find a jeweller who is willing to pay you thirty thousand dinars for the diamond.</p><p>'I thought it would be worth more.'</p><p>He leans back, stroking his beard. 'Another may pay you twice as much, but such a one is not here. I offer a king's ransom that you can have today. Let wisdom guide you rather than greed, my friend.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Now to approach the Caliph.",
        "target": "251"
      }
    ],
    "state_changes": [
      {
        "var": "diamond",
        "op": "set",
        "value": 0
      },
      {
        "var": "money",
        "op": "add",
        "value": 30000
      }
    ]
  },
  "195": {
    "id": "195",
    "text": "<p> The scout insists you should head south-west. Hakim is unsure what to do, and turns to you for advice.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on in spite of the flag.",
        "target": "240"
      },
      {
        "id": 1,
        "text": "Dig to see what it is marking.",
        "target": "263"
      },
      {
        "id": 2,
        "text": "Agree with the scout.",
        "target": "286"
      }
    ]
  },
  "196": {
    "id": "196",
    "text": "<p> The jinni lays a finger along his nose and gives a sly wink. 'Remember the story of Mount Safa and the Prophet? When commanded to come to him, the mountain did not move. But the Prophet knew that if it had it would have brought disaster, so he set out to go to it.'</p><p>'Your parable is too oblique for me,' you say, shaking your head.</p><p>He booms out a laugh that sends blue sparks flying through the rigging. 'Then watch and learn!'</p><p>Dissolving into a cloud of pungent gas, the jinni floats down into the water. A thick dark patch of bubbling miasma goes snaking through the depths. A faint tinge of ammonia pervades the air.</p><p>Minutes pass. Suddenly the stone door grates open and the pirates come swimming out, gasping and coughing. A strong stench billows after them. Even at this distance it is enough to make you dizzy. As the pirates are taken aboard and put in irons, the jinni leaps back into your ring in the form of a black fish.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Search for spoils.",
        "target": "372"
      }
    ]
  },
  "197": {
    "id": "197",
    "text": "<p> The remainder of the voyage is uneventful, and at last you reach the port of Daibul, which straddles a wide dun-coloured river beyond a region of mangrove swamps. </p><p>The captain goes ashore, returning quite soon with a broad smile on his face. 'I have sold all the cargo to a wealthy nobleman from Nishapur,' he announces. 'Make ready. We sail on the tide.'</p><p>The crew are surprised to be returning so quickly. They had expected that the captain's business would take at least a week. As the ship hoves out of port, you feel a sense of disappointment. 'Where is the adventure I longed for?' you say with a sigh.</p><p>'Beware of wishing, so they say, lest you get what you wish for!' replies the helmsman. 'See that dark scudding cloud across our bows? We're running into a storm.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Shipwreck!",
        "target": "131"
      }
    ]
  },
  "198": {
    "id": "198",
    "text": "<p> The jinni labours all night, piling stone on stone until he has built a tower as tall as the first. He slides the last block in place on the dome of the roof just as the sun thrusts up a splash of gold in the east. </p><p>Flitting back to you, he wipes away the sweat covering his broad brow. 'I've done my part of the bargain, now do yours. Give me my freedom.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Do as he asks.",
        "target": "198a"
      },
      {
        "id": 1,
        "text": "Refuse.",
        "target": "198b"
      }
    ]
  },
  "198a": {
    "id": "198a",
    "text": "<p> Keeping your promise to release the jinni, you throw the ring into the sea so that you will never be tempted to call on him again.</p><p>Sunlight streaks the grass. One of the shark men steps forward and shakes his master awake. Opening his eyes, the dwarf gives a sour grunt of disappointment. 'So you did it.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "But will he let you go?",
        "target": "441"
      }
    ],
    "state_changes": [
      {
        "var": "ring",
        "op": "set",
        "value": 0
      }
    ]
  },
  "198b": {
    "id": "198b",
    "text": "<p> You call the jinni back into the ring. 'Does your word mean nothing?' he protests.</p><p>'Not when given to an ungodly creature.' Yet, although you feel no guilt, you have a nasty feeling the decision will come back to haunt you.</p><p>Sunlight streaks the grass. One of the shark men steps forward and shakes his master awake. Opening his eyes, the dwarf gives a sour grunt of disappointment. 'So you did it.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "But will he let you go?",
        "target": "441"
      }
    ],
    "state_changes": [
      {
        "var": "truce",
        "op": "set",
        "value": 1
      }
    ]
  },
  "199": {
    "id": "199",
    "text": "<p> The horses pound up the path, rearing to a halt at the brink of the glass bridge. The four riders do not see you hiding in a thicket nearby because their attention is focussed on the jinni who, having taken your appearance, is standing in the middle of the bridge.</p><p>'Come and face me, dogs, if you dare!' he screams. 'I yearn to spill your blood and crack the bones of your limbs between my teeth!'</p><p>You wince. You might suggest he makes his performance a little less intense next time. But it seems to have done the trick. The first of the knights, goaded by his comrades, advances out onto the bridge. He slips and falls to his doom almost at once. The second knight fares better, getting halfway to the jinni before he too tumbles off. The third must be quite nimble - he actually reaches the jinni and only slips because his sword-stroke costs him his balance.</p><p>From your hiding-place, you hear the masked Sultan breathe a curse. His sword slithers from its sheath and he starts out along the bridge. Seven swift steps bring him to the jinni, who waits until the sword is in motion before dissolving into a cloud of vapour. The Sultan's lunge sweeps through empty air, and he spends an instant poised on the brink of eternity before following his knights down into the chasm.</p><p>The jinni returns to the ring beaming with satisfaction. 'I enjoyed that!'</p><p>'All very well, but how am I going to get across?' you ask.</p><p>'Just walk along the clifftop,' he says, pointing. 'There's a perfectly safe footbridge after a mile or so.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue on your way.",
        "target": "177"
      }
    ]
  },
  "200": {
    "id": "200",
    "text": "<img src=\"./images/200_illo.jpg\" alt=\"\"> The creatures facing you each have a single eye that rolls like a blister of pus in the centre of a face covered with bristles and scales. Their arms are raised like executioners' axes, each ending in a long curved blade of chitin. As they draw nearer you catch their breath, as fetid as an open drain. Slimy spittle runs from the writhing mandibles at the base of those repulsive insectoid heads.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fate lends a hand.",
        "target": "27"
      },
      {
        "id": 1,
        "text": "Try to escape.",
        "target": "118"
      },
      {
        "id": 2,
        "text": "Fight your way through them.",
        "target": "141"
      },
      {
        "id": 3,
        "text": "Douse the light.",
        "target": "163"
      }
    ]
  },
  "201": {
    "id": "201",
    "text": "<p> Squeezing through the bars of the grille, the hawk soars off into the night. You watch it go with a sense of misery. You cannot blame the bird for abandoning you - it deserves its freedom - but now you feel even more trapped.</p><p>Barely a minute later, while you are still examining the lock, the hawk returns and settles on the ground. Hearing a metallic chink, you peer through the gloom. It has brought the keys from the guardhouse! Fingers trembling with anxious joy, you test each key in turn. One of them fits, and the padlock springs open.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Free!",
        "target": "223"
      }
    ]
  },
  "202": {
    "id": "202",
    "text": "<p> The black jewel clouds and cracks as it absorbs the force of the spell. Azenomei shouts an obscene oath and draws his sword, flying at you in a fury. Strangely, it is only now that you notice his eyes. They are golden.</p><p>The battle is hard-fought and bloody. Soon you are gasping in the chill mountain air as you circle your foe looking for an opening. Blood streams from both of you. Azenomei's is black.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you prevail?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you beat him?",
        "target": "202a"
      }
    ],
    "state_changes": [
      {
        "var": "sword",
        "op": "set",
        "value": 1
      },
      {
        "var": "black_jewel",
        "op": "add",
        "value": -1
      },
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "202a": {
    "id": "202a",
    "text": "<p> You finally succeed in clubbing Azenomei to the ground, where he gives a last gasp before dissolving into a thick tarry vapour.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on.",
        "target": "42"
      }
    ]
  },
  "203": {
    "id": "203",
    "text": "<p> The rokh's nest lies in the east, on the Isle of Palms. You manage to convince the fishermen to take you there in exchange for a share of the spoils. It turns out to be a wild windswept place off the southern tip of India. Putting into a cove, you wade ashore. 'We'll wait here,' says Umar, the sailor in charge of the boat. 'If you're not back by daybreak tomorrow then, er, well...'</p><p>You nod. 'I'll be back.'</p><p>The interior of the island consists of grassy slopes surrounding a high pinnacle of rock whose peak is hidden in the clouds. Seeing sheep grazing in a valley nearby, you saunter over and find a shepherd who tells you, 'Yes, the rokh's nest is atop that pinnacle. Have you come to slay it?'</p><p>You give an astonished laugh. 'Hardly. From what I've heard, that would take an army.'</p><p>The shepherd shrugs. 'Pity. It's forever stealing my sheep - swoops down, grabs one, then carries it back to its nest.'</p><p>'Maybe you should go and live elsewhere.'</p><p>'Preposterous! The grass here is the richest to be found in all the world. See how plump my sheep are, the fine quality of their wool.'</p><p>You thank the shepherd for his help.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head towards the pinnacle.",
        "target": "136"
      }
    ]
  },
  "204": {
    "id": "204",
    "text": "<p> You need to find a way to scale the cliff.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The long-tailed cat could be useful.",
        "target": "316"
      },
      {
        "id": 1,
        "text": "Put on your magic slippers.",
        "target": "338"
      },
      {
        "id": 2,
        "text": "Use the Indian rope.",
        "target": "360"
      },
      {
        "id": 3,
        "text": "Try climbing up.",
        "target": "181"
      },
      {
        "id": 4,
        "text": "Abandon the whole quest.",
        "target": "159"
      },
      {
        "id": 5,
        "text": "Abandon the whole quest.",
        "target": "113"
      }
    ]
  },
  "205": {
    "id": "205",
    "text": "<p> You approach a richly-dressed slave outside the palace gates and explain that you have come to see Jafar. 'Tell him it is Shazir.'</p><p>He peers at you in the dusk. 'Shazir? But I thought - Well, never mind. Wait here while I find Jafar.'</p><p>You catch his sleeve before he can move away. 'Jafar told me to come straight to him,' you say, adding an undercurrent of menace to your tone. 'Things might go badly for you if there's any delay.'</p><p>'Follow me,' he says after a moment's thought.</p><p>He leads you to the throne room, where you see Jafar talking to the Caliph. The slave goes over, whispers something into Jafar's ear, and brings him over to the doorway where you're waiting. </p><p>'Have you brought the diamond?' says Jafar. His voice trails off as he gets a good look at you. 'You're not Shazir!'</p><p>'No, and what I bring is something more precious than diamond. I bring the truth!'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You have the Caliph's attention.",
        "target": "477"
      }
    ]
  },
  "206": {
    "id": "206",
    "text": "<p> You steal into the palace pretending to be a servant. The guards hardly glance at you, intent as they are on the festivities in the street outside. You pass under the great arch that is emblazoned with the Caliph's insignia, past a group of slaves bearing empty platters back to the kitchens, and duck into an open doorway. You have no clear idea what you can achieve here. Perhaps you can bluff your way into the Caliph's apartments and warn him about Jafar.</p><p>Following a corridor, you make your way up a flight of stairs. You emerge onto a landing overlooking a torchlit hall. The marble walls shine with a colour like moonlight. There are rich tapestries of black, ruby-red and the blue of dusk, and the balustrade of the balcony is inlaid with gold and limpid mother of-pearl.</p><p>Advancing to the end of the balcony, you peer into a chamber beyond. Swords in jewelled scabbards hang along the walls, below murals that show the Caliph's ancestors in all the glorious panoply of war. As you cross the room, you notice an alcove where a hooded hawk sits on a perch.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take the hawk.",
        "target": "318"
      },
      {
        "id": 1,
        "text": "Arm yourself with one of the swords.",
        "target": "450"
      },
      {
        "id": 2,
        "text": "Take nothing.",
        "target": "93"
      }
    ]
  },
  "207": {
    "id": "207",
    "text": "<p> You are halfway along the landing when you hear a voice ring out behind you. 'What have we here? A skulking thief.'</p><p>You whirl around, but you know it is Jafar even before you set eyes on his round hateful face. There is no mistaking those vicious tones, like the squawk of a vulture as it spies a carcass. </p><p>A smile creases his fat lips. 'Well, well. You again. You must have more lives than a cat.'</p><p>'You smirking villain. And you call me a thief...' You take a step towards him. </p><p>A glimmer of alarm shows in his tiny eyes. Clapping his hands, he calls in a quavering voice for the guards. Moments later, a band of swordsmen in the Caliph's livery come bursting from an archway at the end of the landing.</p><p>'Seize this cur!' screeches Jafar.</p><p>The guards rush towards you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw your bow.",
        "target": "230"
      },
      {
        "id": 1,
        "text": "Stand and fight.",
        "target": "47"
      },
      {
        "id": 2,
        "text": "Beat a hasty retreat.",
        "target": "253"
      }
    ]
  },
  "208": {
    "id": "208",
    "text": "<p> The first guard slumps across the rail with a groan, his belly laid open by your sword-swipe. You are about to tip him over the rail and advance to meet the next guard when the lamplight flashes on the gems encrusting your weapon's pommel. The remaining guards stare at you wide-eyed and their leader holds up his hand. </p><p>'Wait,' he says. 'In the night-time we mistook you for a river pirate, or some other knave with mischief in mind. Now I see you are a servant of our great lord the Caliph.'</p><p>You lower your blade guardedly. This is a happy stroke of luck. 'Yes, the Caliph,' you reply. 'May the blessing of God be upon him!'</p><p>Before you can say more, the woman rises and ventures nervously out of the curtained kiosk. 'Tell me the Caliph has sent you to bring me back,' she pleads. 'For if I am forced to enter the harem of the Governor of Basra, I shall take my own life.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell the guards you have come to take the woman.",
        "target": "254"
      },
      {
        "id": 1,
        "text": "Bid them goodnight and return to your own ship.",
        "target": "375"
      }
    ]
  },
  "209": {
    "id": "209",
    "text": "<p> At last you manage to drive the loathsome creatures away. Those you have not killed go shuffling off into the recesses of the cavern. All around you are piled the cracked carapaces of their fellows, dripping dark ichor across the rocks. You pick your way through the carnage with a shiver of revulsion. Your own wounds are merging into a single throb of pain now, and your fervent prayer is that the other monsters do not return. You doubt if you could survive a second assault. </p><p>When you go to help Yussuf to his feet, you are astonished to find him totally unscathed. 'They left me alone once I hid my face,' he says, as surprised as you are at his lucky escape.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue deeper underground.",
        "target": "186"
      }
    ]
  },
  "210": {
    "id": "210",
    "text": "<p> Once you have picked up the items you want, the old man claps his hands. The mysterious light flares up to fill the cavern, dazzling you. As your eyes clear, you find yourselves back on the ledge overlooking the river. There is no sign of the old man, nor any trace that his charcoal fire was ever here.</p><p>'How sweet the night air is,' says Yussuf. 'I swear I never valued life half so much as I do now. We are lucky to be alive.'</p><p>You nod in heartfelt agreement. 'God is compassionate and merciful. Let's go back to the ship, my friend.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue.",
        "target": "256"
      }
    ],
    "state_changes": [
      {
        "var": "lamp_of_antar",
        "op": "set",
        "value": 1
      },
      {
        "var": "jericho_horn",
        "op": "set",
        "value": 1
      }
    ]
  },
  "211": {
    "id": "211",
    "text": "<p> A dismal grey pall of fog hangs around the ship. Condensation drips from the rigging, making a soft whispering sound like fine rain on the decks. You are carried on blindly by the ocean current. There is no sign of the sun to help you steer a course, and in any case no wind to fill the sails.</p><p>Without warning, the ship lurches to one side. The stitched planks rip apart with the sound that every sailor dreads. You have time to glimpse hard jutting blocks of coral protruding through the broken hull. Then the mainmast snaps and the sail falls, enveloping you.</p><p>You hear the screams of the others as the ship goes down. Your fingers close on a spar of broken wood. Salt water fills your mouth and nose. You barely manage to struggle free of the wet sheet before it drags you under. Soaked through and buffeted by waves, you cling to the spar, drifting until at last you faint from grief and cold.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue.",
        "target": "280"
      }
    ]
  },
  "212": {
    "id": "212",
    "text": "<p> At the bottom of the well, a glint of afternoon sunlight catches on something smooth and metallic. You are about to climb down when a stab of superstitious fear makes you hesitate. You know the old tales that say that wells and cisterns are the homes of demons.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Descend to see what the object is.",
        "target": "303"
      },
      {
        "id": 1,
        "text": "Go back to the ship.",
        "target": "189"
      },
      {
        "id": 2,
        "text": "Go to the house where the captain was taken.",
        "target": "235"
      }
    ]
  },
  "213": {
    "id": "213",
    "text": "<p> An open assault is your best chance. You have to free the captain quickly, before the other islanders return from the tombs. Jumail is not certain he agrees, but he backs you up as you emerge from the cover of the ox cart.</p><p>The two guards leap up as they see you approaching. They have sharp hunting-knives almost as long as swords. You keep to a steady confident pace, neither hurrying nor hesitating, to show them you are a foe to be feared. As you draw near, you have the chance to size them up. The one on your left is small and wiry, and looks as though he is a nimble fighter best dealt with at close quarters. The other is huge and lumbering, with rock-hard knuckles that you'd do well to stay clear of.</p><p>You step up onto the porch. The two men are on either side of you. The look in their eyes is a turbid mixture of surprise, amusement, uncertainty and fear.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Deal with the smaller one first.",
        "target": "236"
      },
      {
        "id": 1,
        "text": "Attack the larger one.",
        "target": "259"
      },
      {
        "id": 2,
        "text": "Tackle both at once.",
        "target": "282"
      },
      {
        "id": 3,
        "text": "Tackle both at once.",
        "target": "369"
      }
    ]
  },
  "214": {
    "id": "214",
    "text": "<p> Hakim asks if you will go ahead of the main group and see if there are bandits lying in wait. 'It is a dangerous job,' he admits, 'and I will pay you two dinars.'</p><p>'Two dinars for my life? That is hardly fair.'</p><p>He nods. 'Three, then.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Accept.",
        "target": "478"
      },
      {
        "id": 1,
        "text": "Refuse.",
        "target": "191"
      }
    ]
  },
  "215": {
    "id": "215",
    "text": "<p> The talk on the streets of Cairo is mostly of the Red Sea pirates. Small children are enthralled by the stories, but none of the adults of the city has a good word for the pirates. 'Prices have doubled in the last two months,' complains a shopkeeper. 'No one dares to travel by sea, and perishable goods cannot survive the slow journey by camel. I have not had a properly spiced meal since the end of Ramadan.'</p><p>You soon learn that the Sultan of Cairo has promised a reward for the one who puts a stop to these pirates. One thousand dinars. That would make you as rich and respected a citizen as any in Baghdad.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Offer to help catch the pirates.",
        "target": "306"
      },
      {
        "id": 1,
        "text": "Visit the bazaar.",
        "target": "328"
      },
      {
        "id": 2,
        "text": "Leave the city.",
        "target": "349"
      }
    ]
  },
  "216": {
    "id": "216",
    "text": "<p> The demon descends and flails at you with its thin claws. Most horrible of all is the soft hissing cry, which sounds like the dying gasps of a thousand souls, as it rakes at your flesh.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you fight on?",
        "target": "216a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "216a": {
    "id": "216a",
    "text": "<p> The demon breaks off the fight and rises on humming wings to hover just above your head. You managed to deal it a couple of strong blows, breaking its hard exoskeleton, but now you see that it is regenerating. In front of your eyes, its wounds are disappearing.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stand your ground.",
        "target": "332"
      },
      {
        "id": 1,
        "text": "Retreat.",
        "target": "46"
      }
    ]
  },
  "217": {
    "id": "217",
    "text": "<p> By noon of the following day your nostrils and eyes are raw with the fine gritty sand stirred up by the wind. The sky is a plate of molten lead, the ground hotter than a kiln.</p><p>One of your scouts returns and leads you and Hakim, the merchant, to a blue flag set on a long cane in the sand. 'What can it mean?' Hakim wonders aloud. 'Is it a Bedouin grave?'</p><p>'More likely a warning that the region ahead is off limits to travellers,' suggests the scout. 'We should turn south-west, master.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "No one cares what a slave thinks.",
        "target": "286"
      },
      {
        "id": 1,
        "text": "What now?",
        "target": "195"
      }
    ]
  },
  "218": {
    "id": "218",
    "text": "<p> The days crawl by. The sun, a boulder of light rolling relentlessly across the sky, plummets each evening beyond the edge of the world, draining all heat behind it so that you are left shivering in the chill of night. Even with strict rationing, you soon have barely enough water to moisten your lips, and barely food enough to make one mouthful at supper.</p><p>You have almost lost hope when, in the long shadows of dusk, you see an olive-green splash of colour against the dusty ochre landscape. You blink, rubbing your eyes to make sure, then call back to the others: 'An oasis!'</p><p>Hakim stumbles forward. Barely able to stand, he leans on your shoulder and peers into the middle distance. 'Yes, but look. See those tents? That smoke from campfires? Do we dare risk provoking the inhabitants? If they're hostile, we're too weak to put up a fight.'</p><p>What will you advise?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stop at the oasis.",
        "target": "416"
      },
      {
        "id": 1,
        "text": "Go on and hope to find water elsewhere.",
        "target": "438"
      }
    ]
  },
  "219": {
    "id": "219",
    "text": "<p> You jump aside as the Lord of the Desert charges forward. He careers past, robes fluttering, slashing madly with his sword, and rebounds from the wall full of fury. Holding his sword straight out in front of him, he thrusts towards your heart.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try to dodge.",
        "target": "265"
      },
      {
        "id": 1,
        "text": "Punch him as he comes in close.",
        "target": "468"
      },
      {
        "id": 2,
        "text": "Kick at his legs.",
        "target": "242"
      }
    ]
  },
  "220": {
    "id": "220",
    "text": "<p> When the jinni sees what is happening, he unleashes a freezing gust of air from his lungs that turns the waves around the ship to ice. Some of the monkeys escape into the trees, but many are trapped by the frozen water. Swirling out on a column of blue-grey gas, the jinni retrieves what they filched, returning it to you. </p><p>You must now decide whether to abandon ship and see if you can survive in the swamp, or stay aboard and let the ocean current carry you onwards.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go ashore.",
        "target": "85"
      },
      {
        "id": 1,
        "text": "Remain on the ship.",
        "target": "266"
      }
    ]
  },
  "221": {
    "id": "221",
    "text": "<p> Collecting the turbans of everyone in the crew, you knot them together to make a long cloth. You stretch this right around the circumference of the tower. It gives you the purchase you need to slowly ascend to the top.</p><p>Surmounting the balcony, you drop to a wary crouch and survey the chamber under the dome. It is bare of any decoration or feature except for a podium in the middle, where a large grey egg rests on a velvet cushion.</p><p>You step forward. The whole tower must have been built for the single purpose of keeping this egg safe.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Touch the egg.",
        "target": "290"
      },
      {
        "id": 1,
        "text": "Climb back down to the ground.",
        "target": "267"
      }
    ]
  },
  "222": {
    "id": "222",
    "text": "<p> The sultan leaps down from his horse. His sword leaves its scabbard with a hard ringing sound. He waits like a statue, sword-tip touching the ground. The mask remains inscrutable, but his stance conveys absolute certainty. He believes you are no threat.</p><p>You take a wary half-step forward. His left hand hovers ready to lift the mask.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw your bow.",
        "target": "268"
      },
      {
        "id": 1,
        "text": "Ready a mirror.",
        "target": "291"
      },
      {
        "id": 2,
        "text": "Whip off your cloak.",
        "target": "313"
      },
      {
        "id": 3,
        "text": "He uncovers his face.",
        "target": "335"
      }
    ]
  },
  "223": {
    "id": "223",
    "text": "<p> You lose no time putting a good distance between you and the city where you were imprisoned. Your journey takes you up into high crags. The sky looks dark and storm-laden. The white sheen of snow lies on the tallest peaks above you.</p><p>Days pass without any sign of habitation. You eke out your food under the rocks - mostly grubs, insects and berries.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your skills are equal to the challenge.",
        "target": "223a"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "223a"
      },
      {
        "id": 2,
        "text": "Can you survive?",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "223a": {
    "id": "223a",
    "text": "<p> At last, hungry and cold, you stumble on a palace of ash-grey stone that seems to loom like a bank of cloud against the ominous sky. You climb the path towards it. Bronze gates swing open at your approach, and servants emerge to help you inside. Too weary to question them, you allow yourself to be led to a table where you are presented with dishes of honey-cake, roast fowl, mutton stew, plums and figs, spiced bread and sharp clean meltwater.</p><p>You eat so ravenously that at first you do not notice three dignified old men in scarlet robes who have quietly entered the room. As you look up, one of them raises his hand and smiles. 'Please, eat your meal,' he says. 'Later we'll have a chance to talk.'</p><p>You rise and bow. 'I must thank you for your hospitality.'</p><p>'Later. We have something to attend to first.' </p><p>They turn and glide out of the room, long robes rustling on the marble floor.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go on with your meal.",
        "target": "463"
      },
      {
        "id": 1,
        "text": "Follow them.",
        "target": "471"
      }
    ]
  },
  "223b": {
    "id": "223b",
    "text": "<p> The ordeal is more than you can endure. As the last of your strength ebbs away, you sink to the ground. The sun will bleach your bones and your story of your adventures will be written on the wind.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "224": {
    "id": "224",
    "text": "<p> You find Azenomei reclining on a divan in one of the citadel's many rooms. 'I thought you said we had to hurry,' you say. 'Come on - what if the jinni should return and find us here?'</p><p>He rises languidly to his feet. 'He has returned. I am the jinni whose palace this is.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Oops.",
        "target": "247"
      }
    ]
  },
  "225": {
    "id": "225",
    "text": "<img src=\"./images/225_illo.jpg\" alt=\"\"> Pulling your arms close to your sides to avoid touching the muck and grime of the tunnel walls, you tread carefully forward through the darkness until you see a flicker of torchlight ahead. You emerge in the crawl space below a large low-raftered house. Through a crack in the floorboards over your head, you see a strange scene. The islanders are bowing in homage to a group of rug-cloaked figures sitting on carved teak benches. Your captain stands between the two rows of seated figures as though he were on trial.</p><p>You hear him speak: 'What is this? Why have I been brought here?'</p><p>The voice that replies sounds like the rustling of dead grass. It seems to come from one of the cloaked figures. Through the smoke-filled air of the room you catch sight of a lidless gaze. A hand like old clay clutches at the folds of the rug as it says, <em>'You came to steal the egg of the rokh, the giant bird that has its nests in the mountains above the Nile. Do not deny it.'</em></p><p>'Preposterous!' retorts Captain Ibrahim. 'I do not even believe the rokh truly exists.'</p><p>His interrogator is not deterred. <em>'Tonight you will be imprisoned. Tomorrow our living descendents will put you to death.'</em></p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "That's not good.",
        "target": "77"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      }
    ]
  },
  "226": {
    "id": "226",
    "text": "<p> You remember hearing a tale about the rokh, which is said to swoop through the skies near to the Isle of Palms. It is so big that sometimes it seizes ships out of the water. The Isle of Palms lies in the far east, so that is where your destiny must take you. You manage to convince the fishermen to take you there in exchange for a share of the spoils.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Travel to the island.",
        "target": "21"
      }
    ]
  },
  "227": {
    "id": "227",
    "text": "<p> By the time you are halfway, and the ground is no more distant than the wisps of cloud above, you are beginning to wonder what you've let yourself in for. You are not even sure if you could get back down now. Equally, the cliff is so smooth and sheer that your fingers and legs are aching with the strain. If you go on, you might easily drop from fatigue.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You have a plan.",
        "target": "272"
      },
      {
        "id": 1,
        "text": "You'd better get back down.",
        "target": "249"
      },
      {
        "id": 2,
        "text": "You could be in trouble.",
        "target": "294"
      }
    ]
  },
  "228": {
    "id": "228",
    "text": "<p> Jafar utters a mad laugh as he throws the knife. Rolling forward in a somersault, you pluck it out of the air before it can strike the Caliph, who is rooted to the spot in shock. As Jafar runs off, the Caliph recovers enough to call for his guards.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Get the traitor.",
        "target": "339"
      }
    ]
  },
  "229": {
    "id": "229",
    "text": "<p> The sails bulge as they catch the wind, putting you in mind of overfull waterskins. Slowly your vessel edges out from the dock and glides gracefully downriver towards Basra. The sun rises, turning the bowl of the sky to flaring azure. Long banners of white cloud hang across the heavens, while below the river swirls with rich green darkness.</p><p>At dusk on the sixth day out of Baghdad, as the ship is moored for the night, a sailor whose name is Yussuf suggests taking a swim. 'Toiling in the rigging all day is hot work,' he says, grinning wearily as he wipes his brow. 'As the Prophet has warned us against the perils of wine, perhaps a plunge in the cool river water would refresh us just as well.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Join him for a swim.",
        "target": "474"
      },
      {
        "id": 1,
        "text": "Decline.",
        "target": "375"
      }
    ]
  },
  "230": {
    "id": "230",
    "text": "<p> Seeing you nock an arrow, the foremost guard skids to a halt on the marble floor. The others tumble into him from behind and they stand there silently for a moment, glowering at you.</p><p>'Fools! What are you waiting for?' screeches Jafar. 'The arrow can only kill one of you.'</p><p>You smoothly swing the arrow around to point at him. 'Then tell them to charge now,' you say with a sly smile.</p><p>He holds up a fat jade-ringed hand. 'Wait! Hold your ground,' he blusters at the guards. A trickle of sweat escapes the confines of his satin turban and rolls down into the plump clefts between his narrow eyes.</p><p>'That's better.' You back away carefully and start to descend the stairs. Your arrow remains trained on Jafar's heart. 'I'm leaving now, Jafar, but I just want you to know that I'll be back. And I'll bring proof of your treachery before the Caliph.'</p><p>As you reach the door, you release the arrow. It whips through the air, pinning Jafar's turban to the door behind him. Startled for a moment, he gives a sigh of relief and then points a trembling finger at you. 'Get the assassin!'</p><p>He deserves to die, certainly, but that must wait until another day. You desire justice as much as revenge. Turning, you run back out of the palace.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Lose yourself in the side streets.",
        "target": "383"
      }
    ]
  },
  "231": {
    "id": "231",
    "text": "<p> You have rarely faced a more desperate test of your courage. Blows rain down on you, and it is all you can do to duck and weave fast enough to avoid being cut to bloody tatters.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "You can beat them.",
        "target": "277"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "232": {
    "id": "232",
    "text": "<p> You have also heard myths of the old days, when men worshipped a profusion of strange deities. Mithra was said to bestow invulnerability on his most devout followers, so that no weapon had the power to harm them. When they needed to settle duels among themselves, as honour would sometimes dictate, they had to resort to boxing and wrestling because these skills involve no weapons.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Someone is coming.",
        "target": "255"
      }
    ]
  },
  "233": {
    "id": "233",
    "text": "<p> 'You mentioned four treasures. There are no more in the chest. Is the last that black jewel you wear?'</p><p>He takes the jewel from around his neck and hands it to you. 'This little trinket? A charm against baneful magic. Take it if you wish.'</p><p>Yussuf selects the Indian rope, which he gives to you for safe keeping. Smiling, the old man brings his hands together. There is a noise like a thunderclap and a blaze of white light, and then you are standing in the open air again. You are on the ledge above the river, with no sign now of the cavern or the old man.</p><p>'Strange magic,' whispers Yussuf. 'If we tell the others about this, they'll think us mad.'</p><p>'So we won't tell them.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Return to the ship.",
        "target": "256"
      }
    ],
    "state_changes": [
      {
        "var": "indian_rope",
        "op": "set",
        "value": 1
      },
      {
        "var": "black_jewel",
        "op": "add",
        "value": 1
      }
    ]
  },
  "234": {
    "id": "234",
    "text": "<p> The days stream by and you lose yourself completely in the tranquil pleasure of the sea's rhythms. At night the stars look down upon your progress, blistering beacons placed in their courses by divine providence as a guide for seafarers. By day the sun shimmers from a sky of eggshell blue. You listen to the slow gentle creak of the rigging, the slosh of the waves, and the murmur of the ship's boards. Gulls follow your course, hunting the fish that your passage stirs up to the surface. </p><p>Driven by north-east monsoon winds, you make good speed and in three weeks the peaks of the Scarlet Isle can be seen thrusting up from the horizon. Here you see the reddish tinge to the water that gives the island its name. 'Some say it is the blood of the warlike tribes who live there,' says one man in a voice hushed with fear of the unknown.</p><p>'Bah!' says the captain, hearing this. 'It is nothing more than the minerals carried out to sea by the rivers.'</p><p>Finding an estuary, you cruise upstream until you see the roofs of a town. Buildings of mud-brick squat dustily amid the crags, fields laid out in front of them like rolling carpets of emerald and golden thread. As you tie up at the dock, a crowd of natives come down from the houses to meet you. They are garbed in long robes of beige cloth, belted at the waist, and each wears a long gold-hilted knife at his side.</p><p>Captain Ibrahim leaps ashore. 'Stay with the ship,' he tells the rest of you. 'I'm going to speak with their headman.' So saying, he strides off and is escorted by the natives back to a large building in the centre of the town.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Disembark.",
        "target": "166"
      },
      {
        "id": 1,
        "text": "Stay on board as ordered.",
        "target": "189"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 2
      }
    ]
  },
  "235": {
    "id": "235",
    "text": "<p> The other sailors are too frightened to come with you. Alone, you make your way through the empty streets to the headman's house. Now you can see that beyond it, lining the cliffs, are rows of tombs. The boulders that normally seal them have been rolled back, and emerging from them are a group of islanders bearing smoking torches. Each carries something across his shoulders - something long, wrapped in thick rugs like shrouds. You have the sudden conviction that they are dead bodies.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back to the ship.",
        "target": "258"
      },
      {
        "id": 1,
        "text": "Sneak into the building.",
        "target": "281"
      }
    ]
  },
  "236": {
    "id": "236",
    "text": "<p> You close with your two opponents.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw your sword.",
        "target": "304"
      },
      {
        "id": 1,
        "text": "Fight bare-handed.",
        "target": "326"
      },
      {
        "id": 2,
        "text": "Wade in swinging.",
        "target": "326"
      }
    ]
  },
  "237": {
    "id": "237",
    "text": "<p> It drops on you with a voiceless shriek of glee. The talons dig deep into your neck, and you cannot stifle a scream of unendurable pain.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "237a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "237a": {
    "id": "237a",
    "text": "<p> You feel the demon release you and retreat into the air. You must have managed to hurt it. Through red waves of pain, you see its carapace reknitting, the wounds you struggled so hard to inflict vanishing in seconds.</p><p>How can you win against such a creature?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Run forward across the parade ground.",
        "target": "216"
      },
      {
        "id": 1,
        "text": "Stand firm.",
        "target": "332"
      },
      {
        "id": 2,
        "text": "Retreat.",
        "target": "46"
      }
    ]
  },
  "238": {
    "id": "238",
    "text": "<p> The ship puts out of harbour and begins the journey downriver to the Mediterranean. You soon show that you are too useful to waste at the oars, and various minor deck duties are assigned to you.</p><p>Once clear of Alexandria and onto the open sea, the captain has your shackles removed. 'Ten leagues of empty ocean,' he says with a laugh, sweeping his hand astern of the ship. 'That ought to make you think twice about running away.'</p><p>That night you slip over the side. The captain thinks no one could swim all the way back to land, but you were brought up on a river boat that plied the stretch from Basra to Baghdad. A fish is no more at home in the water than you.</p><p>You reach the shore with aching limbs, shivering from the cold, but you are alive. No doubt when you're discovered missing they will assume you fell overboard and drowned. Few Frankish sailors can swim.</p><p>You find employment on a barge bound for Cairo, arriving there a few days later. The barge owner rewards you with two dinars for helping him unload his cargo.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Explore the city.",
        "target": "215"
      }
    ],
    "state_changes": [
      {
        "var": "mordant",
        "op": "set",
        "value": 0
      },
      {
        "var": "money",
        "op": "add",
        "value": 2
      }
    ]
  },
  "239": {
    "id": "239",
    "text": "<p> The captain of the merchant ship loudly dismisses your suggestion that he might be attacked by pirates. 'We are only one vessel!' he retorts.</p><p>'You are almost the only vessel on the Red Sea,' replies the officer in charge of your marines. 'They'll take you as surely as wild dogs would help themselves to a fat goose.'</p><p>The captain takes umbrage at this comparison, but you see a look of unease on his sailors' faces. 'Er, Captain,' suggests his first mate, 'why don't we let those marines hide themselves in some of the barrels? That way, if the pirates do attack, they'll be in for a surprise.'</p><p>The alternative is to let the merchant ship get a little way ahead as bait for the pirates.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Put your marines aboard the merchantman.",
        "target": "100"
      },
      {
        "id": 1,
        "text": "Just keep the merchantman in sight.",
        "target": "476"
      }
    ]
  },
  "240": {
    "id": "240",
    "text": "<p> The sun pours down a ceaseless stream of blistering heat. By mid afternoon you are reeling with heat exhaustion. The landscape looks like the barren plains of Hell. When you say as much to one of the camel drivers, he replies, 'Except that to enter Hell a man must die. In the case of the desert, death is the only escape.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "240a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "240a": {
    "id": "240a",
    "text": "<p> With the last breath in your body, you press on across the hard rocky terrain. Dust rises from your footsteps and hangs like smoke in the air. At nightfall you watch the moon rise and wonder if you will live to see another day.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Send your hawk aloft.",
        "target": "458"
      },
      {
        "id": 1,
        "text": "Press on.",
        "target": "373"
      }
    ]
  },
  "241": {
    "id": "241",
    "text": "<p> Your arrow whistles through the air and sends a spurt of blood from the chief's head. He raises his hand, face blank with shock, and finds that your shot has sliced off his ear. Waving his spear, he orders his men to break off the attack. You watch them go with relief, waiting until they are out of sight before you lower your bow.</p><p>Hakim clasps your neck and showers you with kisses. 'I owe you my life!' he sobs. 'We all do. From this day, Hakim of Baghdad is as a brother to you. Here, this pouch of gold is a poor reward, but treat it as the merest token of my esteem.'</p><p>Later, you look inside the pouch. He has given you fifty dinars.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue onwards.",
        "target": "218"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 50
      }
    ]
  },
  "242": {
    "id": "242",
    "text": "<p> His shins are like iron. You stumble back after your kick, wincing in pain. It feels as though you have broken a toe. The only effect it had on the Lord of the Desert was to throw him off balance so that his sword-tip barely grazed your face.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You can't take any more punishment.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "It's just a scratch.",
        "target": "242a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "242a": {
    "id": "242a",
    "text": "<p> You are still on your feet. He's lunging for you. Think fast.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Dodge.",
        "target": "219"
      },
      {
        "id": 1,
        "text": "Attack.",
        "target": "288"
      }
    ]
  },
  "243": {
    "id": "243",
    "text": "<p> Now you face a fateful decision. Will you abandon ship and see if you can survive in the swamp, or stay aboard and let the ocean current carry you onwards?</p><p> </div> </p>",
    "options": [
      {
        "id": 2,
        "text": "Risk the swamp.",
        "target": "85"
      },
      {
        "id": 3,
        "text": "Stay on the ship.",
        "target": "266"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "set",
        "value": 0
      }
    ]
  },
  "244": {
    "id": "244",
    "text": "<p> The hawk flies up, spiralling around the tower to perch on the balcony. It disappears inside the dome, reappearing moments later with something clutched in its talons. It swoops down, and in the fading daylight you see that it has found a large grey egg, which it deposits on the turf at your feet.</p><p>Yussuf the helmsman spits in annoyance. 'I thought there'd at least be a jewelled necklace or something up there.'</p><p>'Perhaps it is the diamond egg of the rokh?' suggests Selim the look-out.</p><p>You shake your head. 'Not if the legends are true. The rokh's egg would be bigger than an elephant. Anyway, whatever that is, it isn't diamond.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Touch the egg.",
        "target": "290"
      },
      {
        "id": 1,
        "text": "It might be dangerous.",
        "target": "267"
      }
    ]
  },
  "245": {
    "id": "245",
    "text": "<p> The three attack as one, launching themselves from horseback with spears raised. Straight away you see that just one of these men would be a hard foe. Together they are almost unbeatable.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you prevail?",
        "target": "245a"
      },
      {
        "id": 1,
        "text": "Can you prevail?",
        "target": "245b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "245a": {
    "id": "245a",
    "text": "<p> Against such hardened warriors you have no chance, and are cut down at once.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "245b": {
    "id": "245b",
    "text": "<p> Despite your injuries you manage to drive the knights back and they abandon the struggle. Mounting up, they ride off after their master.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue on your way.",
        "target": "177"
      }
    ]
  },
  "246": {
    "id": "246",
    "text": "<p> The jinni swirls out through the bars of the grille, hanging above you in the moonlight in a dark swirling cloud from which his face peers tenebrously. 'What do you desire?'</p><p>'My freedom!' you hiss back at him.</p><p>'As do we all,' he replies with a resounding sigh. </p><p>He mutters a spell and you feel a tingling in your muscles. It feels as if you are being squeezed and stretched. A moment later you have become a snake. Quickly you slither through the grille.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You don't like that look in the jinni's eye.",
        "target": "269"
      },
      {
        "id": 1,
        "text": "Make good your escape.",
        "target": "246a"
      }
    ]
  },
  "246a": {
    "id": "246a",
    "text": "<p> The jinni turns you back to normal and you lose no time putting a good distance between you and the city where you were imprisoned. Your journey takes you up into high crags. The sky looks dark and storm-laden. The white sheen of snow lies on the tallest peaks above you.</p><p>Days pass without any sign of habitation. You eke out your food under the rocks - mostly grubs, insects and berries.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your skills are equal to the challenge.",
        "target": "223a"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "223a"
      },
      {
        "id": 2,
        "text": "Can you survive?",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "247": {
    "id": "247",
    "text": "<p> Azenomei looks different now. His eyes are gold-flecked, and a cast of evil shadows his features. He moves closer with the drowsy menace of a snake. 'So, here I have you at last,' he murmurs. 'The infamous Shadow is more gullible than I'd have thought.'</p><p>'What are you talking about?' you reply angrily. 'You know I'm not the Shadow!'</p><p>He shakes his head. 'Of course you are. That's why I allowed myself to be caught and put in the oubliette with you. I've pursued you for more than a year. Ever since you stole the gem from my citadel here.'</p><p>'Gem? What gem? You're talking nonsense. I've never been here before.'</p><p>He ignores your protests. 'The gem - a ruby almost as big as the egg of the rokh that perches in its eyrie atop the Isle of Palms - had been given to me for safekeeping by the King of the Sea. If he learns I have lost it, he will sunder me into atoms and constrain my soul within a sealed copper jar for all time. So, here is your chance to save yourself. Tell me where you hid the ruby.'</p><p>'For the last time,' you reply between gritted teeth, 'this is a case of mistaken identity. I never stole anything from you.'</p><p>'You greedy fool,' hisses Azenomei, raising his hands to weave a spell. 'Now you will die!'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Absorb the spell into your black jewel.",
        "target": "293"
      },
      {
        "id": 1,
        "text": "You have no defence.",
        "target": "315"
      }
    ],
    "state_changes": [
      {
        "var": "fabric",
        "op": "set",
        "value": 1
      }
    ]
  },
  "248": {
    "id": "248",
    "text": "<p> You know that the rokh's nest lies far beyond the boundaries of the civilized world. If you journey to such remote areas, you might eventually find a clue to its whereabouts. On the other hand, you might just wander fruitlessly for years, so maybe you should give up the search for fame and fortune.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Travel to the far east.",
        "target": "180"
      },
      {
        "id": 1,
        "text": "Head west.",
        "target": "271"
      },
      {
        "id": 2,
        "text": "Return to Baghdad.",
        "target": "113"
      }
    ]
  },
  "249": {
    "id": "249",
    "text": "<p> You scramble back down, slipping the last few feet to land with a painful jolt.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "In your weakened state, it's too much.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "You'll live.",
        "target": "249a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "249a": {
    "id": "249a",
    "text": "<p> It feels good to be back on solid ground. You rack your brains trying to think of another way to reach the nest.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The long-tailed cat could be useful.",
        "target": "316"
      },
      {
        "id": 1,
        "text": "Put on your magic slippers.",
        "target": "338"
      },
      {
        "id": 2,
        "text": "Use the Indian rope.",
        "target": "360"
      },
      {
        "id": 3,
        "text": "Try climbing again.",
        "target": "181"
      },
      {
        "id": 4,
        "text": "Give up.",
        "target": "159"
      },
      {
        "id": 5,
        "text": "Give up.",
        "target": "113"
      }
    ]
  },
  "250": {
    "id": "250",
    "text": "<img src=\"./images/250_illo.jpg\" alt=\"\"> Despite your protests, you are dragged in front of the palace gates. The Sultan's executioner was already preparing to execute the captain of the guard, who is relieved to see his men arriving in the nick of time. </p><p>The Sultan looks down from his palanquin. 'Is this the thief?'</p><p>The captain barely glances at you. 'Yes, O master of justice,' he says.</p><p>The Sultan orders you to be thrown into prison while he decides your eventual punishment. You are too stunned by the sudden wretched twist of fate to react. Hauled away by guards, you are stripped of any money you are carrying. They unlock a grating in the ground and lower you into an oubliette.</p><p>The grating drops into place with a harsh clang. You listen in shock as the heavy iron padlock is sealed. You can hear rats rustling through the dank straw carpeting the cell.</p><p>'So you're the jewel thief, then,' says a voice in the gloom. 'Doesn't look like much to us, eh, Shahrazad?'</p><p>As your eyes adjust, you make out a figure crouching beside you. He is an old man with limbs as thin and gnarled as twigs. On his lap he has a mangy cat which he is cosseting as though it were a princess.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Talk to him.",
        "target": "38"
      },
      {
        "id": 1,
        "text": "Ignore him and sit in silence.",
        "target": "61"
      }
    ],
    "state_changes": [
      {
        "var": "bow",
        "op": "set",
        "value": 0
      },
      {
        "var": "money",
        "op": "set",
        "value": 0
      }
    ]
  },
  "251": {
    "id": "251",
    "text": "<p> Somehow you need to get to talk to the Caliph. It won't be easy.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Rely on your knowledge of the streets.",
        "target": "68"
      },
      {
        "id": 1,
        "text": "Present yourself at the palace and request an audience.",
        "target": "22"
      }
    ]
  },
  "252": {
    "id": "252",
    "text": "<p> Sailors pull themselves up through the rigging like monkeys. As the sails catch the wind, your vessel heaves away from the harbour and drifts gracefully downriver towards Basra. The sun rises higher, turning the water from pale gold to a cool, glittering olive-green. </p><p>On the sixth day out, the ship puts in at a village to take on supplies. Strolling through the dusty streets, you soon attract a crowd of children who are eager for you to tell them stories of the splendours of Baghdad. You make up a few tales, but you are overheard by an old man who interrupts, saying, 'These stories are but fiction. It is an elegant tapestry of lore that you spin with your words, but I could tell you a tale that has the golden yarn of truth.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Listen to his story.",
        "target": "3"
      },
      {
        "id": 1,
        "text": "Return to the ship.",
        "target": "375"
      }
    ]
  },
  "253": {
    "id": "253",
    "text": "<p> The guards raise their swords and come cautiously at you three abreast. Backing away along the landing, you pass a door that must lead up to the palace roof.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go through the door.",
        "target": "319"
      },
      {
        "id": 1,
        "text": "Run back the way you came in.",
        "target": "341"
      },
      {
        "id": 2,
        "text": "Retreat to the end of the landing.",
        "target": "363"
      }
    ]
  },
  "254": {
    "id": "254",
    "text": "<p> The woman, whose name is Sabira, is grateful to you for rescuing her from her fate. 'To think I might have languished in the Sultan's harem for the rest of my days,' she says with a grimace as you return to your ship. 'I would sooner have died.'</p><p>You give her your hand and help her up onto the deck. 'In that case, I may very well have saved your life,' you point out.</p><p>She looks taken aback, then laughs in delight at your audacity. 'Yes, indeed. And now I shall repay you. Here are two treasures I have had since infancy. The first, given to me by my pious father, is a prayer-mat that always unfurls itself in the direction of Mecca. The second is this black jewel, which was my mother's gift. She was superstitious, and this jewel protects against the sorcery of evil wizards, ifrits and the like - or so I was told.'</p><p>The captain tells Sabira he will drop her off at the next village.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The voyage continues.",
        "target": "375"
      }
    ],
    "state_changes": [
      {
        "var": "prayer_mat",
        "op": "set",
        "value": 1
      },
      {
        "var": "black_jewel",
        "op": "add",
        "value": 1
      }
    ]
  },
  "255": {
    "id": "255",
    "text": "<p> Yussuf is so interested in the murals that he does not see the three iron-masked warriors marching along the gallery towards you. Their swords are burnished like the crescent moon, their robes richly decorated with fine embroidery. But in stark contrast to this artistry are their faces: hideous twisted beast-masks with long metal snouts. The darkness behind their visors drinks up your feeble taper-light.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw your sword.",
        "target": "278"
      },
      {
        "id": 1,
        "text": "Shoot them.",
        "target": "299"
      },
      {
        "id": 2,
        "text": "Fight them bare-handed.",
        "target": "321"
      }
    ]
  },
  "256": {
    "id": "256",
    "text": "<p> The two of you climb down to the river and swim back to the ship. Later, over supper, Yussuf tells you he is too frightened to claim his share of the treasure. 'You keep both items,' he says. 'I trust you to use their power for our mutual benefit.'</p><p>'I shall try to do so,' you assure him. Although he is not bold, you know him now to be a man of good heart. It may be that his friendship is the greatest treasure you won this evening.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The voyage continues.",
        "target": "375"
      }
    ],
    "state_changes": [
      {
        "var": "gemini",
        "op": "set",
        "value": 1
      }
    ]
  },
  "257": {
    "id": "257",
    "text": "<p> It is indeed a child - a pretty little girl whose olive-black eyes are bejewelled with tears. She looks up and gives a woeful sniff when she sees you come in sight. You notice she is clutching a broken garland of violet flowers in her hands. Then you remember that you are still holding the flower the captain plucked.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Give the flower to the child.",
        "target": "367"
      },
      {
        "id": 1,
        "text": "Give the flower to the child.",
        "target": "388"
      },
      {
        "id": 2,
        "text": "Keep hold of it.",
        "target": "345"
      }
    ]
  },
  "258": {
    "id": "258",
    "text": "<p> Around midnight you are all woken by the lookout. He points with alarm to a group of islanders advancing towards the jetty. The moonlight splashes on their naked knives, their open feral grins.</p><p>'What have you done with our captain, you devils?' a sailor screams at them, his voice trembling in fright. He turns to you. 'We must storm the headman's house and rescue him!'</p><p>Whatever you think, the decision is out of your hands. The others have already cast off. As the ship drifts out into mid-river, the islanders reach the jetty. In their midst is a withered old man with a skull-topped staff. He begins a low howling chant that reverberates off the hills. The sound of it prickles the hair of your scalp. You are sure it is a baneful spell.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Deflect it with magic of your own.",
        "target": "324"
      },
      {
        "id": 1,
        "text": "Let's hope you're wrong.",
        "target": "346"
      }
    ]
  },
  "259": {
    "id": "259",
    "text": "<p> Get ready to fight.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw your sword.",
        "target": "347"
      },
      {
        "id": 1,
        "text": "Tackle them bare-handed.",
        "target": "304"
      }
    ]
  },
  "260": {
    "id": "260",
    "text": "<p> The sky is like diamond, displaying the stars with dazzling clarity. A wind begins to blow in from the east and the temperature drops. Without so much as a blanket, you are forced to shelter against the bare rocks. A little bracken is all the cover you can find.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's a bitter night.",
        "target": "260a"
      },
      {
        "id": 1,
        "text": "You can cope with a little hardship.",
        "target": "260b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "260a": {
    "id": "260a",
    "text": "<p> The intense cold, in your weakened state, is more than you can endure. You sink into a deep sleep, never to awaken.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "260b": {
    "id": "260b",
    "text": "<p> The next morning, shivering and hungry, you make your way down out of the hills.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fetch the others.",
        "target": "289"
      }
    ]
  },
  "261": {
    "id": "261",
    "text": "<p> The slave master is a short bullish man with a wide witless grin. He chains you to the oars and advises you not to try to escape. 'I'm telling you this for your own good,' he says as he walks off.</p><p>That night you pick the lock and slip out of your shackles. Rousing each of the other slaves in turn, you press your hand to their lips while you get them free. </p><p>'Are we escaping?' whispers one. 'Where shall we go?'</p><p>'You can all go where you like, as long as it's in a different direction from me.'</p><p>One at a time, the slaves drop over the side and swim for the river bank. You are the last to go. Freeing the others was a sensible precaution in case the ship's captain is a vindictive man. If you had escaped alone he might have hired thugs to pursue you, but this way you cover your tracks by flooding the countryside with runaway slaves. It is a case of doing well while doing good.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Make your way back to Cairo.",
        "target": "215"
      }
    ],
    "state_changes": [
      {
        "var": "mordant",
        "op": "set",
        "value": 0
      }
    ]
  },
  "262": {
    "id": "262",
    "text": "<p> Your foes close in.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "They can't hope to outmanoeuvre you.",
        "target": "307"
      },
      {
        "id": 1,
        "text": "Open fire on them.",
        "target": "329"
      },
      {
        "id": 2,
        "text": "They're going to ram.",
        "target": "351"
      }
    ]
  },
  "263": {
    "id": "263",
    "text": "<p> Scooping the sand away from the pole, you uncover a stretched piece of camel leather. When this is removed, water trickles forth from a hidden well. There is not much, but enough to clear the clogging sand from your mouth and fill your limp waterskins.</p><p>You are careful to replace the leather so that other travellers will also find water here. 'In the face of the desert's callous ways, all men are brothers,' remarks Hakim, adding a short prayer of thanks before signalling for the caravan to move on.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue your journey.",
        "target": "308"
      }
    ]
  },
  "264": {
    "id": "264",
    "text": "<p> The others start to scatter, utterly routed by the Bedouin's show of fury, leaving you alone to confront the foe. </p><p>The Bedouin chief is first to reach you. Dashing his spear-thrust aside, you give him a punishing blow as he goes hurtling past. But although you hear him gasp aloud in pain, he refuses to retreat. He wheels his camel around, and now the other Bedouin are also upon you, thrusting at you with their spears and swords.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive their onslaught?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you prevail?",
        "target": "264a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "264a": {
    "id": "264a",
    "text": "<p> Your bravery rallies the others, who come racing back to join the fight. At last the Bedouin lie dead on the sun-baked ground and you are able to loot their belongings.</p><p>Hakim presents you with a reward of ten dinars.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "'A lavish sum for a slave.'",
        "target": "67"
      },
      {
        "id": 1,
        "text": "'Let's get moving.'",
        "target": "218"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 10
      }
    ]
  },
  "265": {
    "id": "265",
    "text": "<p> Falling into an easy rhythm, you manage to evade blow after blow. The Lord of the Desert's sword sweeps down again and again, never quite able to find its mark. A mystical sense of tranquillity comes over you, and you move as though in a trance. Everything seems unreal. The sight of the Lord of the Desert's glaring gaze no longer fills you with terror. You now see the unearthly beauty of the scene: the shimmering colours of the silk tapestries, like streams of spring water... </p><p>The heady odour of perfume and incense... </p><p>The lustrous sheen of gold and jewels...</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's like a dream.",
        "target": "152"
      }
    ]
  },
  "266": {
    "id": "266",
    "text": "<p> The ship veers away from the coast. You watch with sinking heart as all sight of land vanishes in the distance. Soon your misery turns to despair, because the clouds ahead are as thick and dark as soot, and the hissing crack of lightning rolls across the sky. The sea seethes, pitch-black chopped through by crests of angry white foam.</p><p>As the clouds descend to cover you, the wind strikes with gale force, ripping at the furled sails. The ship pitches over, forcing you to cling to the mast. Waves leap like capering demons over the bows. Sea water sloshes around your feet. The rain falls as hard and heavy as a curtain of ice.</p><p>Even over the roar of the storm, you hear the great dolorous crack as the mainmast splits. It falls across the deck, sundering the spliced timbers, pulling the ship in half. You plunge into the sea, fingers scrabbling desperately to hold onto a broken plank. Water closes over your head, wrapping you in warm silent darkness.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Is this the end?",
        "target": "280"
      }
    ]
  },
  "267": {
    "id": "267",
    "text": "<p> You will have to try another tack.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You're sure you can outwit this dwarf.",
        "target": "333"
      },
      {
        "id": 1,
        "text": "You can escape invisibly.",
        "target": "495"
      },
      {
        "id": 2,
        "text": "Attack the shark men.",
        "target": "108"
      },
      {
        "id": 3,
        "text": "Wait for the dwarf to wake up.",
        "target": "397"
      }
    ]
  },
  "268": {
    "id": "268",
    "text": "<p> The Sultan starts to remove his mask. In the space of one heartbeat you have drawn an arrow and nocked it to your bowstring. In another, you've raised the bow and sent the shaft speeding across the clearing. It strikes the Sultan through the eye, pinning the mask to his face.</p><p>The three knights give a gasp and reach for their swords. You ready another arrow. 'The duel was fairly fought and won,' you say to them. 'Take your master's body and go. If you're of a mind to argue, I have three more arrows I can spare.'</p><p>Putting the Sultan's body across his horse, the knights lead it away. As you cross the clearing, you find a black jewel lying among the fallen leaves.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take it and leave.",
        "target": "177"
      }
    ],
    "state_changes": [
      {
        "var": "black_jewel",
        "op": "add",
        "value": 1
      }
    ]
  },
  "269": {
    "id": "269",
    "text": "<p> 'Shall I transform you back to human form?' asks the jinni.</p><p>You try to reply. It just comes out as a hiss.</p><p>The jinni leans closer, smiles a mocking smile. 'No? You wish to remain a snake?' </p><p>You try to bite him, but your fangs close on a thin wisp of acrid smoke.</p><p>'You must enjoy being a snake!' he says. 'You've taken to it very quickly. Well, if you don't have any more use for me, I'll be off.'</p><p>He flits up into the sky and is lost among the stars. You have only yourself to blame. The jinni returned treachery for treachery. You will spend the rest of your life in the body of a snake.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "270": {
    "id": "270",
    "text": "<p> Azenomei leads you into the wasteland, where the hot air rasps your throat and each footstep raises a cloud of acrid dust. For days you travel without seeing any sign of life. From dawn to dusk you feel as though your flesh is being dried on your bones. Night makes the rocks colder than ice.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's more than you can endure.",
        "target": "260a"
      },
      {
        "id": 1,
        "text": "You can cope with a little hardship.",
        "target": "270a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "270a": {
    "id": "270a",
    "text": "<p> At last, when you think you can go no further, you see a gleam of burnished metal in the thickening dusk. 'It is the jinni's citadel,' breathes Azenomei. Taking your arm, he hurries on until you stand below the walls. The battlements and turrets are all of polished bronze, flickering like fire in the red sunset.</p><p>You find the doors - a huge double portal of ebony studded with iron. Putting your shoulders against the doors, you slowly push them open. Beyond lies a great hall with many passages leading off it.</p><p>'Let's split up and look for my sister,' says Azenomei. 'We'll have to hurry, because the jinni might return at any moment.'</p><p>You gaze along the hall. 'But there may be hundreds of rooms in the citadel. How will we find her?'</p><p>'There are a thousand doors,' says Azenomei, starting off down one of the passages. 'Just be sure not to try and open any that are locked.'</p><p>Choosing a passage at random, you start to explore. Doorway after doorway leads to empty rooms. At last you find a door that will not open. You thought there was a muffled shout from the other side, but when you press your ear to the door you can hear nothing.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Break the door down.",
        "target": "300"
      },
      {
        "id": 1,
        "text": "Go looking for Azenomei.",
        "target": "224"
      }
    ]
  },
  "271": {
    "id": "271",
    "text": "<p> You travel in the far west, through the inhospitable hinterland of Egypt where, so the saying goes, 'only God and the wind dwell.'</p><p>Some legends place the nest of the rokh at the head of the River Nile. You trudge up into the mountains until you have left the last scattered settlements far behind. The landscape is one of soaring desolate crags under a sky filled with the constant threat of storms.</p><p>Water is hard to come by, and the only things to eat are snakes and insects. You climb a slope of loose dark pebbles, passing a stream where you drink deeply despite the salty taste of the water. Suddenly a boom shakes the ground. At first you think it is thunder, but then you see a corona of hissing flame against the mountain peak. A cloud of hazy black smoke is rolling down the slope towards you. You are on an erupting volcano!</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "No need to panic.",
        "target": "44"
      },
      {
        "id": 1,
        "text": "Run for your life.",
        "target": "487"
      },
      {
        "id": 2,
        "text": "Look for shelter,",
        "target": "90"
      }
    ]
  },
  "272": {
    "id": "272",
    "text": "<p> You manage to climb just a little further, until you reach a cloud streaming like a banner beside the pinnacle. Leaping onto the cloud, you wait for it to drift up, carrying you miraculously to the rokh's nest at the top.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "See what's in the nest.",
        "target": "325"
      }
    ]
  },
  "273": {
    "id": "273",
    "text": "<p> As Jafar makes his throw, you sweep the cloak around, sweeping the deadly blade out of the air before it reaches its target.</p><p>The Caliph, recovering from his shock, calls for his guards. Jafar turns and flees.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Don't let the traitor get away.",
        "target": "339"
      }
    ]
  },
  "274": {
    "id": "274",
    "text": "<p> The sailors move like monkeys through the rigging. The sails billow as they catch the wind, and your vessel moves out from the dock and drifts gracefully downriver towards Basra. In the dawn the water is splashed with light like liquid gold. It flows sluggishly past as the day wears on, dark and deep as a draft of cool wine. </p><p>A week passes. Moored one night in midstream, you find yourself unable to sleep. Climbing quietly over the dozing forms of your fellow sailors, you look out from the rail. The sky is filled with stars, and the moon watches its twin in the dim black depths of the river. You hear the soft plash of oars and, gazing upriver, you see the lamps of a barque approaching.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Wake the captain.",
        "target": "26"
      },
      {
        "id": 1,
        "text": "Wait and watch.",
        "target": "48"
      }
    ]
  },
  "275": {
    "id": "275",
    "text": "<p> Casting the limp carcass of the demon to one side, you race across the parade ground in search of Jafar. He can't have got far, the fat waddling toad. Then you see him, crouching by the wall as he unrolls a long carpet embroidered with mystic sigils. </p><p>He looks up, shakes his head with mock pity, and steps onto the carpet. 'Too late,' he calls. 'But don't worry. I'll make sure our paths cross again.'</p><p>So saying, he gives an imperious gesture and the carpet starts to rise from the ground. As it rises, your heart sinks. You can't possibly get to Jafar before he is out of reach. </p><p>There is a crack like wood being hit with a hammer. One of the stable doors flies open and bangs against the wall. You see Jafar's head shoot round in astonishment, and you follow his gaze to see your white stallion Antar rearing fiercely in the open doorway. With a proud whinny, he gallops over and you pull yourself up by his mane.</p><p>To the end of your days, you will never quite be sure of what happens next. You could have sworn Antar's hoofs strike sparks off thin air as, with a breathtaking leap, he carries you up beside Jafar on the flying carpet.</p><p>Jafar's mouth drops open - whether to cast a spell or simply to curse you, you will never know. Antar rears, plunges, and clubs him with his hoof. Jafar topples and falls, and the carpet slowly drifts back to the ground. Dismounting, you lift Jafar's wrist and search for a pulse. Nothing. The traitor is dead.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's over. You've won.",
        "target": "120"
      },
      {
        "id": 1,
        "text": "Get back to the throne room.",
        "target": "4"
      },
      {
        "id": 2,
        "text": "But not before he poisoned the Caliph.",
        "target": "19"
      }
    ]
  },
  "276": {
    "id": "276",
    "text": "<p> Against a true master of the sword such as Masrur, even a skilled fighter like yourself can have no chance. He calmly parries your barrage of desperate attacks. Toying with you, he allows his sword-point to prick your skin again and again - painful but not mortal wounds. </p><p>Finally tiring of this sadistic sport, Masrur disarms you with a deft twist of his blade.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Surrender.",
        "target": "2"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "277": {
    "id": "277",
    "text": "<p> Having dealt with the guards, you push aside the curtain of the kiosk. The woman presses back on her cushions, frightened by the carnage she has just witnessed, but you reach out a reassuring hand. 'Have no fear of me, my lady,' you say to her with a smile.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Talk to her.",
        "target": "254"
      }
    ]
  },
  "278": {
    "id": "278",
    "text": "<p> The first warrior steps forward, making no attempt to parry your attack. Your blade drives deep through the folds of his cloak, piercing his heart, but he makes no sound. Withdrawing the sword, you wait for him to topple. You are taken by surprise when, instead, he lunges at your throat. You barely deflect the blow, and now you notice that there is no trace of blood on your sword. These warriors are immune to the touch of cold steel!</p><p>His next blow is luckier - or perhaps your timing is off. The edge of his scimitar strokes the flesh of your upper arm, drawing a deep line of scarlet.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A deeper cut than it looks.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Find a way to fight back.",
        "target": "278a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "278a": {
    "id": "278a",
    "text": "<p> They seem impervious to your attacks.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Whip off your cloak.",
        "target": "343"
      },
      {
        "id": 1,
        "text": "Drop your sword and fight barehanded.",
        "target": "321"
      },
      {
        "id": 2,
        "text": "Break off and retreat through the caves.",
        "target": "365"
      }
    ]
  },
  "279": {
    "id": "279",
    "text": "<p> A man makes the sign of protection against the evil eye as you pass him on a street corner. You look at him in surprise and start to ask why he acted as he did, but he shuns you, saying, 'O unlucky one!'</p><p>Dumbfounded, you watch as he hurries off along the street.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Follow him.",
        "target": "322"
      },
      {
        "id": 1,
        "text": "Return to the ship.",
        "target": "301"
      }
    ]
  },
  "280": {
    "id": "280",
    "text": "<p> The surf pounds an accompaniment to your throbbing head. There is wet sand under your face. A crab is pinching your finger with its claws. You shake it off and sit up. You are on a lonely beach backed by high cliffs that shine with veins of blue and green rock. You realize you must have passed out. Getting shakily to your feet, you stagger along the beach. </p><p>Sick and dazed as you are, your first glimpse of the palace seems like a hallucination. It rises from a tumble of rocks at the end of the beach. Needle-thin spires of white marble rise around domes crusted with pastel mosaic. You stand in awe as figures emerge from the buildings and come to greet you. They are men and women with faces like angels. You swoon into their arms and feel them carry you to the palace, where you are laid on a soft silken bed. Gratefully, you sleep.</p><p>The next time you awaken, it is to see the faces of ordinary men - honest sailors, by the look of them. They are clustered around your bed. 'What happened to the others?' you say, sitting up.</p><p>One of the sailors steps forward. His accent tells you he is from Basra. 'The wizard's beautiful servants, you mean? I saw them once. We all did, when we first arrived here.'</p><p>You swing your legs to the floor and test your strength. You feel fully recovered. 'What wizard?' you ask as you get to your feet. 'Are we his prisoners?'</p><p>They all laugh at this. 'No, we're his guests!' says the man from Basra. 'He saved us all when a giant fish swallowed our ship. He even gave us a new ship to journey home, but he told us we had to wait a week because he had seen in the future that another castaway would be swept up on the shore. We've been waiting for you.'</p><p>You notice that all your belongings are neatly piled beside the bed. Your money is there too. Your mysterious benefactor apparently has only the best of intentions - unlike most of the wizards you've heard of. </p><p>'Now that you're fully recovered,' says one of the other sailors, 'why delay any longer? Let's set sail.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go with them right away.",
        "target": "389"
      },
      {
        "id": 1,
        "text": "Ask them to wait while you speak with the wizard.",
        "target": "444"
      }
    ]
  },
  "281": {
    "id": "281",
    "text": "<p> You press yourself to one side of the doorway and listen. Inside, you hear two men talking. From the strained way they're speaking, you guess they must be carrying something heavy. Risking a quick peek around the door-frame, you see them manhandling a long rolled-up rug through into the room beyond.</p><p>'I think great-grandfather's put on weight,' grumbles one of the men.</p><p>'Sssh! He'll hear you,' says the other. He leans against the wall to wipe a trickle of sweat off his forehead. 'Just one more of these to go, thank goodness. I think it's old Bamara's great uncle.'</p><p>The other glances back. You hastily duck out of sight, but he wasn't looking in your direction. He takes an appraising glance at another rug lying rolled up on the floorboards. 'No,' he mutters thoughtfully. 'We took him in first, remember?'</p><p>They disappear through into the next room. This is your chance. Scuttling in, you race across to the inner doorway and glance through. You get a quick impression of a crowd of people crouching in near-darkness. Looking back around the vestibule, your gaze falls on the rolled-up rug. The two men will be back for it in less than a minute.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take a closer look at the rug.",
        "target": "411"
      },
      {
        "id": 1,
        "text": "Creep quietly into the next room.",
        "target": "433"
      },
      {
        "id": 2,
        "text": "Enter boldly and announce yourself.",
        "target": "8"
      },
      {
        "id": 3,
        "text": "Sneak back to the ship.",
        "target": "258"
      }
    ]
  },
  "282": {
    "id": "282",
    "text": "<p> Both guards strike at the same time, driving towards you from either side with straight thrusts of their long knives. You are pierced by the tips of both blades.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "You're not finished yet.",
        "target": "390"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "283": {
    "id": "283",
    "text": "<p> Long ago, an old woman who could have no children found two eggs buried in the ground. One hatched, and she dressed the little manikin that emerged in baby's clothing. He grew to become a strange dwarf with magical powers, and one of his feats was to build a high tower in the space of a single night. In this tower he placed the other egg, because he had learned from a prophecy that in that egg slept his brother, whom he feared.</p><p>You look at the sun, now dipping low in the west. How can you possibly build a tower in the space of one night?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Think of something clever.",
        "target": "333"
      },
      {
        "id": 1,
        "text": "Summon your jinni.",
        "target": "355"
      },
      {
        "id": 2,
        "text": "Go off to explore the tower.",
        "target": "377"
      },
      {
        "id": 3,
        "text": "Use the lamp of Antar to sneak away.",
        "target": "495"
      },
      {
        "id": 4,
        "text": "Urge the others to help you fight the shark men.",
        "target": "108"
      },
      {
        "id": 5,
        "text": "Wait until the dwarf wakes up.",
        "target": "397"
      }
    ]
  },
  "284": {
    "id": "284",
    "text": "<p> You say your farewells to Hakim and the others. Many speak to you with tremors in their voices, and several openly wipe away tears. Though you met as strangers and it is likely you'll never see any of them again, you have shared experiences that make you all as close as cousins.</p><p>Hakim himself presses a pouch into your hand. 'You've been more help than I could have imagined,' he says. 'Take this as a little bonus.'</p><p>Once out of sight around the corner, you check the contents of the pouch: three dinars. Well, for Hakim that is generous.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Explore the city.",
        "target": "215"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 3
      }
    ]
  },
  "285": {
    "id": "285",
    "text": "<p> The pirates sail away after looting the merchant ship of its cargo. You can hear their merry shouts from afar as they broach one of the wine barrels.</p><p>'They can't be true believers,' says the captain of marines with a sorry shake of his head. 'Don't they know of the Prophet's warning against drunkenness?'</p><p>Several of his men sidle away rather guiltily when they hear this. Your reply is more forthright. 'Much worse than drunkards, they are thieves and murderers. Tonight, in any case, they'll be held to account for all their crimes.'</p><p>You may have spoken too soon. The pirate ship is faster than your own, and soon their black sails drop out of sight across the waves. A few minutes later, the lookout calls down that he has lost them altogether.</p><p>The marine captain smacks his fist into his palm. 'Two tons of camel dung!' he swears extravagantly. 'We'll never find them now.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You need eyes in the sky.",
        "target": "486"
      },
      {
        "id": 1,
        "text": "Suggest a plan.",
        "target": "393"
      },
      {
        "id": 2,
        "text": "Turn back.",
        "target": "285a"
      }
    ]
  },
  "285a": {
    "id": "285a",
    "text": "<p> You return to Cairo and report to the Sultan that the pirates escaped.</p><p>He is obviously disappointed, but he puts a cheerful face on it. 'You found out more than any of my own agents were able to,' he says. 'Take this reward for your services.'</p><p>You are given a bag containing twenty dinars.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go on your way.",
        "target": "349"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 20
      }
    ]
  },
  "286": {
    "id": "286",
    "text": "<p> By evening, when it is time to halt and rest, you are close to fainting from thirst and weariness. You drop to your haunches on the ground, too weak even to eat. Others are faring even worse. One old man - a slave of Hakim's - is shivering with the first signs of fever.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You survive to see the sunrise.",
        "target": "308"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "287": {
    "id": "287",
    "text": "<p> You have heard tales of the Lord of the Desert. He is one of the powerful spirits that men used to worship in the days before the coming of the Prophet. His nature is such that he uses a victim's own strength against them. In the legends, the more a person strove to defy the Lord of the Desert, the easier they made it for him to overcome them. </p><p>You also recognize the glyph in the keystone above the alcove. It is the seal of Suleiman, the wizard king whom all evil spirits feared. For all his power, the Lord of the Desert could never pass beyond that magic glyph.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Face him.",
        "target": "309"
      }
    ]
  },
  "288": {
    "id": "288",
    "text": "<p> Seeing an opening, you jab your elbow into the base of his throat. He snarls like a dust devil and slashes his sword across your forearm, drawing a gout of blood. You can feel yourself weakening now.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Punch.",
        "target": "468"
      },
      {
        "id": 1,
        "text": "Kick.",
        "target": "242"
      },
      {
        "id": 2,
        "text": "You can't fight on.",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "289": {
    "id": "289",
    "text": "<p> The caravan travels on along roads that get increasingly busy as you approach Cairo. Porters carrying great bundles of grain and cloth jostle outside the city gates in a press of heavily laden camels, donkeys and rumbling wheeled carts.</p><p>In all the confusion, it amazes you that Hakim somehow manages to squeeze his way to the front of the crowd and present his papers to the sentries. The papers themselves are just a formality, since probably neither Hakim nor the sentry he speaks to can read. The important thing is the bag of gold coins that is discreetly handed over. With this transaction complete, the sentries help to push the crowd aside so that your camels can traipse through into the city.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hakim won't need his slave any more.",
        "target": "192"
      },
      {
        "id": 1,
        "text": "You made it.",
        "target": "284"
      }
    ]
  },
  "290": {
    "id": "290",
    "text": "<p> The warmth of your touch is enough to crack the egg. A tiny figure jumps out, growing in seconds into the identical twin of the sleeping dwarf. Then you see on second glance that they are not identical. This dwarf has a full friendly smile in place of the other's prim little smirk.</p><p>'For a hundred years I've waited in that egg,' he says. 'I knew of my brother's evil deeds, which came to me in dreams, but I was powerless to act. Now I have been hatched into this world. It is time to set matters straight.'</p><p>With a wave of his hands, he transports you and the others back to the ship. 'You are free to go,' he says. 'I'll deal with my wicked twin.' With that, he vanishes again in a blaze of light.</p><p>Captain Ibrahim loses no time giving the order to weigh anchor. The mysterious island drops astern and is lost to sight.</p><p>The next few days pass uneventfully. You have not spotted any other vessels until a ship drifts into view one afternoon. Her sails are furled and there is no reply to your shouts. As you come alongside, you see the reason. The deck is strewn with corpses.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Search the ship.",
        "target": "356"
      }
    ]
  },
  "291": {
    "id": "291",
    "text": "<p> As the Sultan removes his mask, there is a moment when it obscures his gaze. Leaping forward, you press the mirror up in front of him. He stares into it. There is a gasp and he claws at his eyes, then slumps forward dead at your feet.</p><p>The three knights step closer, watching you warily. They are frightened of whatever magic you might use against them. Silently they retrieve the body, placing it across their master's horse before withdrawing in confusion. You are left alone in the woods.</p><p>There is nothing you can do for your friends, but at least you were able to avenge them. As you go to leave, you notice a black jewel lying on the moss by your feet.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take it.",
        "target": "177"
      }
    ],
    "state_changes": [
      {
        "var": "black_jewel",
        "op": "add",
        "value": 1
      }
    ]
  },
  "292": {
    "id": "292",
    "text": "<p> You wait until midnight when everyone else is asleep. The rope uncoils like a serpent, stretching up into the air until it reaches the bars of the grille. </p><p>Azenomei climbs up first, trying each of keys until he finds one that fits. The padlock springs open and the two of you emerge into the sweet fresh air.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Free at last.",
        "target": "358"
      }
    ]
  },
  "293": {
    "id": "293",
    "text": "<p> Cold tongues of magical flame blast from his fingers to lick around you. The jewel absorbs the brunt of the spell but is destroyed in the process.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Call on Ayisha to help.",
        "target": "337"
      },
      {
        "id": 1,
        "text": "Retaliate with sorcery of your own.",
        "target": "359"
      },
      {
        "id": 2,
        "text": "Sound the Jericho horn.",
        "target": "381"
      },
      {
        "id": 3,
        "text": "Fight him.",
        "target": "410"
      }
    ],
    "state_changes": [
      {
        "var": "black_jewel",
        "op": "add",
        "value": -1
      }
    ]
  },
  "294": {
    "id": "294",
    "text": "<p> No way to go on and no way back. You cling miserably to the sheer cliff and desperately try to think of a plan.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Time to try on those magic slippers.",
        "target": "338"
      },
      {
        "id": 1,
        "text": "Uncoil the Indian rope.",
        "target": "360"
      },
      {
        "id": 2,
        "text": "Trust to luck.",
        "target": "157"
      },
      {
        "id": 3,
        "text": "There's nothing to be done.",
        "target": "294a"
      }
    ]
  },
  "294a": {
    "id": "294a",
    "text": "<p> Finally you cannot hang on any longer, and with a bleak cry you go plunging to your doom.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "295": {
    "id": "295",
    "text": "<p> You step forward just as Jafar throws the knife. Instead of hitting the Caliph, it impales itself in your shoulder. </p><p>Jafar sees his last attempt has failed and, cursing, turns to run. You go to pursue him, but a wave of deathly weakness closes over you as the poison takes effect.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your antidote saves you.",
        "target": "339"
      },
      {
        "id": 1,
        "text": "Can you shrug off the effects?",
        "target": "295a"
      },
      {
        "id": 2,
        "text": "You've got to keep going.",
        "target": "339"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -5
      }
    ]
  },
  "295a": {
    "id": "295a",
    "text": "<p> A veil of dark gauze is drawn over your eyes. You know it is the cloak of the Angel of Death. Then, as the poison reaches your heart, you know no more.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "296": {
    "id": "296",
    "text": "<p> For the first week you have nothing to do but walk along beside the camels and steady the swaying bundles on their backs. At Kermanshah, a town in the foothills, Abdullah exchanges the camels for donkeys. When he unwraps the bundles, you are astonished to see that they are just rags.</p><p>'Is your head on backwards?' you ask him. 'You cannot think they'll pay you much for those in the east.'</p><p>'Trade is not my true mission,' he reveals. 'Stitched inside these bundles are secret messages that the Caliph has told me to deliver to the commanders of his forts beyond the mountains.' He peers hard at you. 'Breathe no word of this to another, as you value your life.'</p><p>You do not need to be told twice. The next day you start your ascent into the mountains, guiding the donkeys up steep flinty paths until you reach a brooding forest. The slanting rays of the sun hang in the misty air, against which the shadows of the leaves remind you of naked blades.</p><p>A gazelle comes racing through the trees. You hear the pounding of hoofs and realize that it is being hunted, but before you can say anything one of the donkey-handlers has brought the gazelle down with his own spear. 'We'll eat well tonight!' he calls merrily to the others.</p><p>You look up. Against the backdrop of mist, four armed riders take ominous shape between the trees.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hide.",
        "target": "312"
      },
      {
        "id": 1,
        "text": "Wait to see what they want.",
        "target": "125"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 10
      }
    ]
  },
  "296a": {
    "id": "296a",
    "text": "<p> For the first week you have nothing to do but walk along beside the camels and steady the swaying bundles on their backs. At Kermanshah, a town in the foothills, Abdullah exchanges the camels for donkeys. When he unwraps the bundles, you are astonished to see that they are just rags.</p><p>'Is your head on backwards?' you ask him. 'You cannot think they'll pay you much for those in the east.'</p><p>'Trade is not my true mission,' he reveals. 'Stitched inside these bundles are secret messages that the Caliph has told me to deliver to the commanders of his forts beyond the mountains.' He peers hard at you. 'Breathe no word of this to another, as you value your life.'</p><p>You do not need to be told twice. The next day you start your ascent into the mountains, guiding the donkeys up steep flinty paths until you reach a brooding forest. The slanting rays of the sun hang in the misty air, against which the shadows of the leaves remind you of naked blades.</p><p>A gazelle comes racing through the trees. You hear the pounding of hoofs and realize that it is being hunted, but before you can say anything one of the donkey-handlers has brought the gazelle down with his own spear. 'We'll eat well tonight!' he calls merrily to the others.</p><p>You look up. Against the backdrop of mist, four armed riders take ominous shape between the trees.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hide.",
        "target": "312"
      },
      {
        "id": 1,
        "text": "Wait to see what they want.",
        "target": "125"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 5
      }
    ]
  },
  "297": {
    "id": "297",
    "text": "<p> You are amazed at Masrur's strength and skill. He is one of the most dangerous swordsmen in the world, and in his youth he must have been unbeatable. As it is, your best manoeuvres and parries are only just enough to keep him at bay. You know your only hope is to stay out of his reach and let him tire himself out.</p><p>You glance aside to judge the distance to the door. Taking instant advantage of your lapse of concentration, Masrur breaks through your guard and his sword lays open a long gash across your brow. You stagger back, wiping the blood from your eyes, expecting the death-blow to follow at any moment. But by this time Masrur's age and bulk are beginning to tell. Leaning on his sword to get his breath back, he gasps, 'You're better than I thought... you wretch... But I'll have you now...'</p><p>The door to the landing is behind you. As Masrur lumbers forward, you get ready to time your dodge perfectly. So that he doesn't realize what you're planning, you taunt him by saying, 'You should stick to your job as executioner, Masrur. You don't seem so hot when you're fighting someone who isn't tied up.'</p><p>That does it. He snarls like a lion and lunges for your heart.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You have to time this just right.",
        "target": "70"
      }
    ]
  },
  "298": {
    "id": "298",
    "text": "<p> She explains her plan: 'We'll exchange clothes. I can slip away back to your vessel, you stay here in my place.'</p><p>You give her a doubtful frown. 'I think I see a flaw. Doesn't that leave me on my way to become an inmate of the harem?'</p><p>She stifles a musical trill of laughter. 'Please excuse me for pointing this out,' she says between chuckles, 'but the guards will let you go as soon as they get a good look at you. Not that your looks are unappealing, you understand, but you just don't have the elegance that marks out a good concubine.'</p><p>Probably she's right, but do you want to risk it? If her plan backfires you might spend the rest of your days in the Sultan's harem.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go along with the plan.",
        "target": "385"
      },
      {
        "id": 1,
        "text": "Call on your jinni.",
        "target": "364"
      },
      {
        "id": 2,
        "text": "Think of something clever.",
        "target": "342"
      },
      {
        "id": 3,
        "text": "Attack the guards.",
        "target": "320"
      },
      {
        "id": 4,
        "text": "Give up and return to your ship.",
        "target": "375"
      }
    ]
  },
  "299": {
    "id": "299",
    "text": "<p> The arrow lances through the air, finding its mark in the first warrior's heart. But he gives no grunt of pain, nor does he sway and fall. Instead he plucks out the shaft and regards it for a moment as though he had never seen such a thing before. Breath rasps contemptuously behind the iron plate of his helmet as he tosses the arrow aside and lunges forward. His moon-sliver sword gives your shoulder a lusty bite, and blood streams freely from the wound as he steps back with a flourish.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw your sword.",
        "target": "278"
      },
      {
        "id": 1,
        "text": "Launch yourself at them.",
        "target": "321"
      },
      {
        "id": 2,
        "text": "Fight bare handed.",
        "target": "321"
      },
      {
        "id": 3,
        "text": "Make a run for it.",
        "target": "365"
      },
      {
        "id": 4,
        "text": "You're done for.",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "300": {
    "id": "300",
    "text": "<img src=\"./images/300_illo.jpg\" alt=\"\"> The door frame splinters under the force of a kick, and you step through into a scented chamber curtained with diaphanous silks. A raven-haired girl reclines on a golden couch in the middle of the room. She looks up as you enter, and her expression is a mixture of fear and hope as she says, 'Have you come to free me?'</p><p>You notice that her ankle is chained to the floor, the chain being fixed by a huge padlock. 'Who are you?' you ask.</p><p>'Ayisha, the daughter of the Caliph. I was stolen from Baghdad in the middle of the night by a powerful jinni who brought me here to his citadel.'</p><p>You go closer and test the strength of the padlock. It is easy to see that you could never hope to break it. 'Perhaps Azenomei has a key to fit it.'</p><p>'Who is Azenomei?'</p><p>'I am.' </p><p>You turn to see your friend standing in the doorway. He slowly runs his hand over the broken wood and then shakes his head regretfully. 'I did tell you not to open any locked doors.'</p><p>'Azenomei...' You take a pace towards him. 'Look, I've found your sister.'</p><p>His only answer is a soft mocking laugh. After a moment, Ayisha says, 'He lied to you. He isn't my brother. This is the jinni who abducted me!'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "That's not good.",
        "target": "247"
      }
    ],
    "state_changes": [
      {
        "var": "harem",
        "op": "set",
        "value": 1
      }
    ]
  },
  "301": {
    "id": "301",
    "text": "<p> Where are you bound?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "For Egypt.",
        "target": "409"
      },
      {
        "id": 1,
        "text": "For the Indies.",
        "target": "431"
      },
      {
        "id": 2,
        "text": "Southwards towards the Scarlet Isle.",
        "target": "451"
      },
      {
        "id": 3,
        "text": "You cannot remember.",
        "target": "466"
      }
    ]
  },
  "302": {
    "id": "302",
    "text": "<p> The city is a sight to take the breath away. Columns of ivory and alabaster support walls of pure shimmering gold. The blocks of the pavement are gold and silver inlaid with sparkling jewels. The minarets are encrusted with lapis lazuli of so intense a blue that they seem as though the sky itself has taken on solid form. </p><p>Awestruck, you pass through a burnished arch that gleams like flame in the sunlight and enter a wide hall where a strange battle is taking place. A gryphon - a lion-like being with an eagle's wings and beak - is struggling with a giant scorpion. The fury of their battle is like nothing you have ever witnessed. Their deafening cries reverberate off the walls: the shriek and caw of the noble gryphon, the awful rattling hiss of its venomous foe. Each blow makes the metallic floor ring like an anvil. The whole chamber is awash with gore. </p><p>During a respite in the fighting, the gryphon falls back, sinking to the floor beside you. The scorpion crouches against the far wall. It is injured too, but you see that it is recovering its strength faster. As the scorpion advances flailing its poison-coated sting, the gryphon turns to you and says weakly, 'Grant me a drop of your blood. It is the only thing that will sustain me in this battle.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Let it drink some of your blood.",
        "target": "452"
      },
      {
        "id": 1,
        "text": "Refuse.",
        "target": "402"
      }
    ]
  },
  "303": {
    "id": "303",
    "text": "<p> If you had hoped for a magic lamp or a cask of jewels, you are due for disappointment. The metallic glint turns out to be just a single dinar buried in the muck at the bottom of the well. As you rub it clean and drop it into your pocket, you notice a narrow tunnel leading off from the well shaft. Looking along it, you can see nothing but dank walls with darkness stretching beyond.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Follow the tunnel to see where it leads.",
        "target": "225"
      },
      {
        "id": 1,
        "text": "Climb back out of the well.",
        "target": "303a"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 1
      }
    ]
  },
  "303a": {
    "id": "303a",
    "text": "<p> You emerge back into the open air. What now?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Return to the ship.",
        "target": "189"
      },
      {
        "id": 1,
        "text": "Go to the headman's house.",
        "target": "235"
      }
    ]
  },
  "304": {
    "id": "304",
    "text": "<p> You jump forward with a yell, but your opponent is not intimidated. He holds you off long enough for the other guard to slash a deep cut in your flank.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you fight on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you fight on?",
        "target": "282"
      },
      {
        "id": 2,
        "text": "Can you fight on?",
        "target": "369"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "305": {
    "id": "305",
    "text": "<p> The two male ghouls are as large as bulls standing on their hind legs. They are a lot uglier, of course. Uttering howls to make your blood flow like ice water, they launch iron-hard kicks at your shins while shredding at your face with their long talons.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you take such punishment?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you prevail against them?",
        "target": "305a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "305a": {
    "id": "305a",
    "text": "<p> You step forward over the fallen bodies of the brothers. You spare no pity for the likes of them - they were mere beasts who lived by preying on blameless travellers. But your real wrath is reserved for their evil dam, the vulture-faced crone who now stands spitting and snarling before you. You will take pleasure in ridding Creation of her loathsome life.</p><p>Seeing you to be a doughty fighter, she makes a lunge towards a cleaver hanging on the wall.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Strike at her with your bare fists.",
        "target": "413"
      },
      {
        "id": 1,
        "text": "Draw your sword.",
        "target": "391"
      },
      {
        "id": 2,
        "text": "Look around for a weapon.",
        "target": "435"
      }
    ]
  },
  "306": {
    "id": "306",
    "text": "<p> You believe you can come up with a plan to catch the Red Sea pirates. The problem is, who's going to listen to an impoverished wanderer like you?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Prove that you can be useful.",
        "target": "371"
      },
      {
        "id": 1,
        "text": "Befriend one of the Sultan's advisers.",
        "target": "392"
      },
      {
        "id": 2,
        "text": "Trick your way into the Sultan's harem.",
        "target": "418"
      },
      {
        "id": 3,
        "text": "This calls for desperate measures.",
        "target": "306a"
      }
    ]
  },
  "306a": {
    "id": "306a",
    "text": "<p> Your only option is to try to get to speak to the Sultan while he is outside the palace. By luck, that very afternoon he comes riding through the streets in a regal procession. His soldiers patrol the crowds lining the streets, making sure that everyone bows respectfully. You glance up to see the Sultan himself approaching on the back of a graceful chestnut mare whose harness glitters with jewels. For a moment you meet his gaze. He strikes you as a good man but a weary one, his thoughts no doubt constantly troubled by affairs of state.</p><p>One of the soldiers sees you looking up and jabs the butt of his lance towards you. 'You there, keep your face to the ground while the Sultan goes by.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your reputation speaks for you.",
        "target": "436"
      },
      {
        "id": 1,
        "text": "You can easily get past them.",
        "target": "396"
      },
      {
        "id": 2,
        "text": "You can't get close.",
        "target": "414"
      }
    ]
  },
  "307": {
    "id": "307",
    "text": "<p> You steer a course between the pirates and their prey. The prow slices the waves, but the wind seems to favour the pirate ship. You see its triangular black sails looming towards your stern. A raven figurehead glares from its prow.</p><p>Your sailors rush to the rail. The pirate ship is bearing down relentlessly with the wind filling its sails. When you give the order to turn hard about, your helmsman stares at you doubtfully. 'That'll leave us dead in the water!' he says.</p><p>You nod. 'Do it.'</p><p>Your ship turns to face the oncoming pirates. You can see their faces now: eager rapacious grins, eyes barren of pity. The wind knocks your sails flat and your ship lurches to a standstill, rocking to and fro. Your own crew's groan of dismay is echoed by a vaunting cheer from the pirates. They think you are a sitting duck. You watch calmly as they sail closer... closer...</p><p>Shuddering violently, the pirate ship comes to a dead halt. Those cruel grins vanish when the pirates see how you've lured them onto a sandbank just below the surface. Now it is they who are helpless. Calling a rapid-fire volley of instructions to the marines, you bring your own vessel around within hailing distance and tell the pirates that you are ready to take their surrender. Stuck fast on the sandbank, they have no choice.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Claim your spoils.",
        "target": "372"
      }
    ]
  },
  "308": {
    "id": "308",
    "text": "<p> Time becomes a blur. Leaving the sand dunes behind, you enter a region of barren grey rock. The howling of the wind is like a dirge, and the trembling waves of heat cause strange images to hover above the horizon. </p><p>'I have heard the voices of the celestial maidens calling me to Paradise,' avers one man. The next morning he has wandered away from the camp and cannot be found.</p><p>You press on. Everyone fears that the desert will become their grave, but no one dares to say it. Then you see a band of six white-robed Bedouin riding towards you with raised spears. 'God has abandoned us!' wails Hakim, falling to his knees. 'These devils will slay us and eat our flesh.'</p><p>The Bedouin rein in at a spear-cast's distance and call out to you in arrogant tones: 'This is our desert. To pass on you must pay a toll of half your goods.'</p><p>You glance at the others. Hakim is too terrified to take charge. The others look on with dull leaden looks. It is left to you to decide how to deal with this challenge.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Negotiate with the Bedouin.",
        "target": "394"
      },
      {
        "id": 1,
        "text": "Try to negotiate.",
        "target": "330"
      },
      {
        "id": 2,
        "text": "Attack.",
        "target": "352"
      },
      {
        "id": 3,
        "text": "Turn aside to avoid any trouble.",
        "target": "373"
      }
    ]
  },
  "309": {
    "id": "309",
    "text": "<p> The Lord of the Desert bids you rise. Not kindly - his voice is laden with menace. When you see his naked sword glistening in the light, you know what is to come.</p><p>'Come, mortal!' he cries. 'Your last moment is at hand. Will you stand with limbs shaking, or will you fight to save yourself? Fight boldly, and I may even be merciful.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Draw your sword.",
        "target": "13"
      },
      {
        "id": 1,
        "text": "Fight him unarmed.",
        "target": "331"
      },
      {
        "id": 2,
        "text": "Put up your fists.",
        "target": "331"
      },
      {
        "id": 3,
        "text": "Take refuge in the curtained alcove.",
        "target": "353"
      },
      {
        "id": 4,
        "text": "Hide in one of the huge stone jars.",
        "target": "374"
      }
    ]
  },
  "310": {
    "id": "310",
    "text": "<p> You give a sudden whoop of delight that frightens the others. They think the ordeal has sent you mad. Hakim recoils in horror when you seize his sleeve and say, 'Sandstorm? That's no sandstorm. It's the answer to our prayers.'</p><p>'There is no majesty nor power except in God,' says Rahman, the portly scribe who keeps the accounts.</p><p>You round on him. You know you must present a wild sight, with your joyful grin and feverish stare. You see his look of shock and speak to calm him, saying, 'It is not for me to guide you. God guides those He chooses to.'</p><p>You set off with a determined stride. The others murmur doubtfully, but soon see they have no hope if they do not trust you. Tugging the camels, they follow you towards the spot where you saw the dark cloud.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Show them what you've realized.",
        "target": "354"
      }
    ]
  },
  "311": {
    "id": "311",
    "text": "<p> You look at the sun, now dipping low in the west. How can you possibly build a tower in the space of one night?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Think of something clever.",
        "target": "333"
      },
      {
        "id": 1,
        "text": "Summon your jinni.",
        "target": "355"
      },
      {
        "id": 2,
        "text": "Go off to explore the tower.",
        "target": "377"
      },
      {
        "id": 3,
        "text": "Use the lamp of Antar to sneak away.",
        "target": "495"
      },
      {
        "id": 4,
        "text": "Urge the other sailors to help you fight the shark men.",
        "target": "108"
      },
      {
        "id": 5,
        "text": "Wait until the dwarf wakes up.",
        "target": "397"
      }
    ]
  },
  "312": {
    "id": "312",
    "text": "<p> You take cover in the bushes as the riders draw near. All four are clad in white robes, with doeskin boots and glinting silver filigree across their cloaks. All four carry spears, and all have swords and long curved knives at their belts. But they are not all alike in every way, for one wears a blankly serene mask fashioned from polished ivory.</p><p>The masked one speaks in a voice of honey, of music: 'I am the Sultan of Nishapur. The gazelle you took was mine, not yours.'</p><p>'All gifts are given by God,' says Abdullah defiantly. 'Besides, Nishapur is far from here and, since you wear a mask, who can say whether you speak the truth?'</p><p>'I wear a mask,' replies the other, 'because my gaze would shrivel you.' His voice remains placid but with the merest lacing of menace, like a tart taste of poison mixed with sweet date wine.</p><p>The three knights brandish their spears. Events are about to turn nasty.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back up your comrades.",
        "target": "398"
      },
      {
        "id": 1,
        "text": "Stay in hiding.",
        "target": "420"
      }
    ]
  },
  "313": {
    "id": "313",
    "text": "<p> Just as the Sultan removes his mask, you step forward and fling the cloak across his face. He claws at it, blinded for an instant. The three knights growl deep in their throats and go for their swords.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Act fast.",
        "target": "357"
      },
      {
        "id": 1,
        "text": "The Sultan gets free of your cloak.",
        "target": "335"
      }
    ]
  },
  "314": {
    "id": "314",
    "text": "<p> You remember the cat's weird knack of adding inches to its tail each time it hears a lie. 'Then that's how we'll escape,' says Azenomei brightly when you tell him.</p><p>You shake your head. 'The tail soon shrinks again, and the grille's at least twenty feet up.'</p><p>His eyes show a sly glint. 'I know a thousand lies, each more scandalous than the last. We'll wait till it's dark.'</p><p>At midnight he wakes you and then, bending close to the cat's ear, he starts to whisper to it. Instantly the tail shoots up, growing longer and longer, until it reaches to the grille. 'Be quick,' says Azenomei, tossing you the keys.</p><p>The two of you ascend and unlock the grille. After more than a week in the noxious air of the cell, the night breeze tastes as sweet as oasis water. Azenomei takes back his bunch of keys. You notice the cat's tail is shrinking again, so you grab it and haul the animal up after you. Who knows, it might come in useful again.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You're free.",
        "target": "358"
      }
    ]
  },
  "315": {
    "id": "315",
    "text": "<p> Cold tongues of magical flame blast from his fingers. They lick around your limbs and you feel as though shards of ice are being hammered into your bones.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "315a"
      },
      {
        "id": 2,
        "text": "You dodge the worst of it.",
        "target": "315a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "315a": {
    "id": "315a",
    "text": "<p> Swaying, you stand and face your foe. Despite the injuries you've suffered, you can't afford to give up now.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Call on Ayisha to help.",
        "target": "337"
      },
      {
        "id": 1,
        "text": "Retaliate with sorcery of your own.",
        "target": "359"
      },
      {
        "id": 2,
        "text": "Sound the Jericho horn.",
        "target": "381"
      },
      {
        "id": 3,
        "text": "Fight him.",
        "target": "410"
      }
    ]
  },
  "316": {
    "id": "316",
    "text": "<p> You tell the cat a couple of lies. Its tail grows a few inches but then, as before, shrinks back to its original length.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "That's no problem.",
        "target": "382"
      },
      {
        "id": 1,
        "text": "You'll have to think of something else.",
        "target": "204"
      }
    ]
  },
  "317": {
    "id": "317",
    "text": "<p> Jafar hurls the knife. The Caliph gives a groan and starts to crumple across his silk cushions like a flower wilting in the sun. Jafar hardly waits to celebrate his evil deed. Seeing the look in your eyes, he flees out of the room.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The traitor mustn't get away.",
        "target": "339"
      }
    ],
    "state_changes": [
      {
        "var": "iris",
        "op": "set",
        "value": 1
      }
    ]
  },
  "318": {
    "id": "318",
    "text": "<p> You place the hawk on your shoulder, where it sits without protest. There are also those magnificent jewelled swords hanging on the wall.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take a sword.",
        "target": "450"
      },
      {
        "id": 1,
        "text": "Leave them.",
        "target": "93"
      }
    ],
    "state_changes": [
      {
        "var": "hawk",
        "op": "set",
        "value": 1
      }
    ]
  },
  "319": {
    "id": "319",
    "text": "<p> A narrow winding staircase leads up to the roof. You can hear the guards scrambling up behind you, and Jafar's voice echoes from the bottom of the stairwell. </p><p>You run over to the parapet and look around for an escape route. Nearby is the roof of the gatehouse, just a little lower than the level of the parapet. If you could make it to the gatehouse you could descend easily to the ground and make your getaway. The snag is that it is almost ten metres away. No one could make that jump.</p><p>Shouts from behind warn you that the guards have reached the top of the stairs. Just as you are resigning yourself to the thought of a futile death, you notice a flagpole sticking out from the wall just below the parapet. A gonfalon dangles from it, moving slowly in the gentle night breeze, casting its shadow across a moonlit balcony below. A gap of only six metres separates the tip of the flagpole from the gatehouse roof. A good athlete might make the jump.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Leap across to the gatehouse.",
        "target": "340"
      },
      {
        "id": 1,
        "text": "Use your wits.",
        "target": "406"
      },
      {
        "id": 2,
        "text": "Get your jinni to help.",
        "target": "428"
      },
      {
        "id": 3,
        "text": "You are cornered and must fight.",
        "target": "447"
      }
    ]
  },
  "320": {
    "id": "320",
    "text": "<p> The guards look up amazed as you whisk the curtains aside and step out onto the deck. In an instant they have drawn their swords and are bearing down on you with murder in their eyes. </p><p>The nearest swings his blade and you duck, hearing the sharp steel hiss over your head and strike the wooden post of the kiosk with a dull thunk. As your foe tugs desperately at the sword to free it, you stamp on his foot and follow through with a vicious blow to his stomach. The others crowd in behind him, keen to try their mettle against you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "They see your sword.",
        "target": "208"
      },
      {
        "id": 1,
        "text": "This will be a tough fight.",
        "target": "231"
      }
    ]
  },
  "321": {
    "id": "321",
    "text": "<p> Your blows land solidly. The nearest warrior grunts and folds around the knee you have brought up hard into his stomach. Smashing your forearm into the side of his neck where the helmet gives no protection, you send him reeling aside. He collides with one of the others and both go sprawling.</p><p>As you whirl to face the third warrior, he brings up his sword and aims the tip at your heart. You fling yourself aside and the blade just nicks your arm. Stepping closer, you grab his forearm and drive the stiffened fingers of your other hand deep into his solar plexus. A gasp of pain issues from the iron visor as he crumples. But by now the other two have picked themselves up. Yussuf is no help - he just cowers at the end of the gallery bleating like a lost lamb. </p><p>You seem to be getting the better of them, but weight of numbers could still tell against you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you beat them?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you win?",
        "target": "386"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "322": {
    "id": "322",
    "text": "<p> Catching up with the man, you remonstrate with him for suggesting you bear a curse. 'This black jewel I wear is a sure defence against evil sorcery,' you point out.</p><p>'Whoever told you that was a prince of liars,' he vows. 'You have been tricked, I fear. But I know a person who can rid you of the curse.'</p><p>'At a price, I suppose?'</p><p>'Of course. But what price is too high if paying it will save your soul?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go with him.",
        "target": "489"
      },
      {
        "id": 1,
        "text": "Return to the ship.",
        "target": "301"
      }
    ]
  },
  "323": {
    "id": "323",
    "text": "<p> Tucking the key carefully into your backpack, you descend the same way you came up.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Call to Ayisha.",
        "target": "159"
      },
      {
        "id": 1,
        "text": "Go back to the boat.",
        "target": "480"
      }
    ],
    "state_changes": [
      {
        "var": "jewelled_key",
        "op": "set",
        "value": 1
      }
    ]
  },
  "323a": {
    "id": "323a",
    "text": "<p> Tucking a large fragment of diamond shell carefully into your backpack, you descend the same way you came up.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Call to Ayisha.",
        "target": "159"
      },
      {
        "id": 1,
        "text": "Go back to the boat.",
        "target": "480"
      }
    ],
    "state_changes": [
      {
        "var": "diamond",
        "op": "set",
        "value": 1
      }
    ]
  },
  "324": {
    "id": "324",
    "text": "<p> The jinni comes in answer to your summons. Surveying the chanting mage on the jetty, he turns to you and says, 'What is it you would have me do?'</p><p>'Deflect the curse!'</p><p>The jinni shrugs. 'His curse has no power. You are in the lap of fate now. I can save you from what is to come, but how do you know that matters will then turn out for the best?'</p><p>'This is meaningless prattle. Steer our ship safely to a friendly port. I command you.'</p><p>Still he demurs. 'I say again, if I help you now then in the long run it may be worse for you. Will you bid me a third time? Then I must obey.'</p><p>What will you do?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Dismiss the jinni and trust to fate.",
        "target": "346"
      },
      {
        "id": 1,
        "text": "Insist he does as he is told.",
        "target": "368"
      }
    ]
  },
  "325": {
    "id": "325",
    "text": "<img src=\"./images/325_illo.jpg\" alt=\"\"> The legends were true. The rokh's nest is strewn with fragments of diamond, some of them as big as a large shield. Any one of them would make your fortune - which is just as well, because you could only carry one on the precarious descent.</p><p>There is something else in the nest: a jewelled metal key as long as your forearm. You lick your lips uncertainly. You can only choose one of these. Which is it to be:</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The jewelled key.",
        "target": "323"
      },
      {
        "id": 1,
        "text": "A diamond.",
        "target": "323a"
      }
    ]
  },
  "326": {
    "id": "326",
    "text": "<p> You close in quickly to a distance where he cannot get a good angle for striking. One punch lays him flat out, but he manages to gash you across the thigh as he falls.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The unkindest cut.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "It's just a scratch.",
        "target": "434"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "327": {
    "id": "327",
    "text": "<p> At your command, the jinni blows a thick cloud of smoke out of the hearth. The ghouls are reduced to helpless coughing and are powerless to stop you from leaping back out of the doorway. There is the smack of a meaty fist and a yowl of pain as one of the ghouls, taking a blind swing in the smoke, hits his brother by mistake. As you hurry away down the hillside you can hear their roars of anger rattling the hilltops. </p><p>'Am I safe now?' you whisper to your ring.</p><p>'Hide in a cave till sunrise,' replies the jinni's voice. 'The she-ghoul will try to use her wiles to find you, but I'll confound her with spells of my own.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A restless night all the same.",
        "target": "260"
      }
    ]
  },
  "328": {
    "id": "328",
    "text": "<p> Cairo market has few bargains to offer because of the problem of the pirates, but you find the following goods for sale:</p><p>After you have bought everything you want, decide your next course:</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Buy a water bottle for 5 dinars",
        "shop_id": 7,
        "item": "water_bottle",
        "price": 5
      },
      {
        "id": 3,
        "text": "Buy a bow for 40 dinars",
        "shop_id": 8,
        "item": "bow",
        "price": 40
      },
      {
        "id": 6,
        "text": "Buy a mirror for 30 dinars",
        "shop_id": 9,
        "item": "mirror",
        "price": 30
      },
      {
        "id": 9,
        "text": "Buy a sword for 30 dinars",
        "shop_id": 10,
        "item": "sword",
        "price": 30
      },
      {
        "id": 12,
        "text": "Offer to help catch the pirates.",
        "target": "306"
      },
      {
        "id": 13,
        "text": "Leave the city.",
        "target": "349"
      }
    ]
  },
  "329": {
    "id": "329",
    "text": "<p> A salvo of arrows fly from your bow, carrying flaring red fire into the enemy's black sails. The pirates are thrown into immediate confusion. While they swarm across the deck like hornets, colliding with each other in their hurry to throw water on the burning canvas, you bring your own vessel in close for boarding.</p><p>You are first to leap across the rail, your marines taking courage from your example. The pirates muster a defiant roar as they raise their swords and rush to meet you, but they are men who prefer a helpless foe. Not used to fighting a defensive battle, they soon begin to weaken in the teeth of your onslaught. Still, even though victory is certain, there is a chance you might be killed in the fighting.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A sword-thrust lays open your guts.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "An easy fight.",
        "target": "372"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "330": {
    "id": "330",
    "text": "<p> The Bedouin refuse to see reason and are now so indignant that they also demand your water.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Leave.",
        "target": "373"
      },
      {
        "id": 1,
        "text": "Fight them.",
        "target": "352"
      }
    ]
  },
  "331": {
    "id": "331",
    "text": "<p> Your opponent is no ordinary man, but a daemon from the benighted era before the Prophet revealed the true faith.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "He's not as quick on his feet as you are.",
        "target": "173"
      },
      {
        "id": 1,
        "text": "Try a punch.",
        "target": "468"
      },
      {
        "id": 2,
        "text": "Knock him down with a leg sweep.",
        "target": "242"
      },
      {
        "id": 3,
        "text": "Wait for him to attack and then dodge.",
        "target": "219"
      }
    ]
  },
  "332": {
    "id": "332",
    "text": "<p> The demon swoops to renew its attack. Claws like razors rake across your flesh, but you ignore the pain and lash out with blows of your own. Each time you hit, you feel the crack of chitin and the demon utters a sibilant scream.</p><p>After a short exchange of blows, the demon breaks off and rises again into the air to heal its wounds. If only you had the same advantage.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stand your ground.",
        "target": "237"
      },
      {
        "id": 1,
        "text": "Back away.",
        "target": "46"
      },
      {
        "id": 2,
        "text": "That last blow has finished you.",
        "target": "2b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "333": {
    "id": "333",
    "text": "<p> The captain pulls off his turban and weeps into it. 'Even working all together, it would take us weeks to build that tower's twin!' he wails. 'Alas, we can only wait and see what fate the dwarf has in store.'</p><p>'Why wait?' You take hold of the cushion by one corner and turn it around so that the dwarf's head is pointing away from the sun. Ignoring the horrified looks of your comrades, you give a bold laugh and shake him awake.</p><p>He opens one eye, then the other. He yawns. 'Morning already?'</p><p>You gesture towards the tower. 'Yes. And see, we've built your tower.'</p><p>He sits up, blinks and rubs his eyes. Uttering an angry oath, he leaps to his stumpy legs and glares at you. 'But what has happened to my own tower? It lies in ruins!'</p><p>'There weren't quite enough stones, I'm afraid. We had to pull a few extra out of your tower's foundations and - well, it toppled, as you can see.'</p><p>The dwarf looks at the seven shark men, but they are apparently too dull-witted to make any comment. Contentment shows in a tight little smile as he replaces his crown. 'Oh well,' you hear him mutter to himself, 'at least I won't have to worry about the egg any more.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "So will he now let you go?",
        "target": "441"
      }
    ]
  },
  "334": {
    "id": "334",
    "text": "<p> At a gesture, the rope uncoils itself like a snake and rises until it stretches to the top of the tower. The sailors fall back with superstitious moans, but you are undaunted. Seizing the rope, you climb swiftly up to the balcony.</p><p>The chamber under the dome is bare of any decoration or feature except for a podium in the middle, where a large grey egg rests on a velvet cushion.</p><p>You step forward. The whole tower must have been built for the single purpose of keeping this egg safe.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take the egg.",
        "target": "290"
      },
      {
        "id": 1,
        "text": "Climb back down to the ground.",
        "target": "267"
      }
    ]
  },
  "335": {
    "id": "335",
    "text": "<p> You find yourself staring into the Sultan's face. His right eye is normal, but his left eye shines like a droplet of black venom. You feel a chill taking the strength from your limbs. You try to raise your arm, but it is lifeless. With a moan, you slump to the ground and darkness drops across you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 0
      }
    ]
  },
  "336": {
    "id": "336",
    "text": "<p> In the still silence of midnight, with everyone else asleep, you crouch beside Azenomei and make your plans for escaping from this dark hole. </p><p>'One of my keys will certainly fit the lock,' he whispers. 'Give me your magic slippers so that I can get up there. Once I'm out, I'll drop them back down.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Trust him.",
        "target": "380"
      },
      {
        "id": 1,
        "text": "Insist on going first.",
        "target": "401"
      }
    ]
  },
  "337": {
    "id": "337",
    "text": "<p> Ayisha sings a spell which sends a hail of hard pebbles flying from nowhere into Azenomei's face. He falls back, dazed, with blood streaming from a dozen wounds.</p><p>'Quickly!' shrieks Ayisha. 'Get him while he's still stunned.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Attack him.",
        "target": "423"
      },
      {
        "id": 1,
        "text": "Flee while you have the chance.",
        "target": "97"
      },
      {
        "id": 2,
        "text": "Flee while you have the chance.",
        "target": "126"
      }
    ]
  },
  "338": {
    "id": "338",
    "text": "<p> The slippers make you weightless and you drift high up into the sky until finally, penetrating the clouds, you see the nest of the rokh. Success is within your grasp.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Search the nest.",
        "target": "325"
      }
    ]
  },
  "339": {
    "id": "339",
    "text": "<p> Despite the commotion behind you, there is no time to wait for the palace guards to arrive on the scene. You are determined not to let Jafar get away. You chase him down a wide staircase and on through an empty hall that echoes to the sound of his ragged breath as he struggles along in his heavy robes. Crossing a small courtyard, he glances back to see you gaining on him. You pursue him the length of a covered passage, emerging onto a parade ground which abuts the royal stables. And here you skid to a halt, for Jafar has turned to wait for you.</p><p>He takes a jar from his robes and raises it, saying a few words in the tongue of the idolaters who held sway in this land before the coming of the Prophet. Then he casts the jar down. It shatters on the cobblestones at his feet. </p><p>A swirl of smoke rises, thickening into solid form. The creature Jafar has conjured has long limbs ending in extravagant talons. Its body gleams like old earthenware in the moonlight. Its eyes are brighter than the stars. Strangest of all are its wings - translucent panes with a filigree of silver, like some huge insect's.</p><p>Jafar says, 'I'll leave you now to enjoy my demon's embrace.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You've heard of a creature like this.",
        "target": "490"
      },
      {
        "id": 1,
        "text": "You've faced uglier monsters than this.",
        "target": "216"
      }
    ]
  },
  "340": {
    "id": "340",
    "text": "<p> Hoisting yourself over the parapet, you dangle down until your feet find purchase on the flagpole. You hold your arms out for balance and skip nimbly like a tightrope walker to the end of the pole.</p><p>By this time the guards have reached the edge of the roof. 'Don't be a fool!' one of them shouts. 'You can't make that jump.'</p><p>He may be right, but you do not hesitate. You are dead anyway if they catch you. You fling yourself into empty space. Time seems to slow down as you see the gatehouse roof come looming towards you. Then your fingers catch on the cornice and you swing yourself up onto the battlements. </p><p>The guards are shouting wildly, trying to attract the attention of the sentries on watch in the gatehouse. As you descend, a portly soldier emerges from a doorway and starts to relieve himself against the wall. He glances as you sweep past, but by the time he realizes you're an intruder you have reached the street and made your getaway.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What now?",
        "target": "383"
      }
    ]
  },
  "341": {
    "id": "341",
    "text": "<p> Just as you reach the bottom of the stairs, the door across the hall crashes open and a dozen more guards rush in, obviously alerted by the noise. Jafar clutches the rail of the balustrade above and shakes with wrath as he screams, 'I'll behead any man who lets the villain escape!'</p><p>Raising their swords, the guards charge across the hall. You push over a tall candelabrum behind you to delay them while you dart back along a passage leading deeper into the palace. Curses resound along the passage as the guards disentangle themselves from the fallen candelabrum. You hear the tramp of running feet. They are right behind you.</p><p>Turning a corner, you stop short with a groan. The passage ends in an alcove containing a tall alabaster jar. You have reached a dead end.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "There are dead ends and there are dead ends...",
        "target": "465"
      },
      {
        "id": 1,
        "text": "Whirl to face your pursuers.",
        "target": "447"
      }
    ]
  },
  "342": {
    "id": "342",
    "text": "<p> 'No doubt the guards check on you from time to time?'</p><p>She nods. 'One of them comes to look in through the curtain every hour or so. If you are thinking we might slip away, I advise you to forget it. As soon as they noticed I was gone they'd be sure to search every ship on this stretch of the river.'</p><p>'Then we must make sure they don't notice it. Not until tomorrow, at least.' </p><p>Gathering the cushions lining the floor of the kiosk, you start to arrange them carefully. The woman watches with furrowed brow for a moment, then sees what you are planning. Removing her shawl, she drapes it over the pile of cushions and adds a few trinkets of jewellery to complete the effect.</p><p>The two of you stand back and appraise your handiwork. Anyone looking in through the curtains would certainly think there was a figure lying there curled up asleep.</p><p>You lower her silently over the side and you both swim back to your own vessel.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Find out who she is.",
        "target": "254"
      }
    ]
  },
  "343": {
    "id": "343",
    "text": "<p> You fling the cloak over the nearest warrior's head. While he is struggling blindly to get free, you kick his legs out from under him and stoop to whack his head against the ground. The iron helmet rings like an anvil under a hammer. The effect on the warrior must be rather the same as putting his head inside a bell. He squirms away, clutching his ears and writhing in pain.</p><p>The other two rush in to attack. As they step onto the cloak, you whisk it out from under them and they go sprawling. Glancing at Yussuf, you see that he will be of no use in this fight. He is cowering wide-eyed at the end of the gallery with his fist stuffed into his mouth. Still, you seem to be getting the better of the three warriors with just your bare hands.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Until you are dealt a crushing blow…",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "The battle is brief.",
        "target": "386"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "344": {
    "id": "344",
    "text": "<p> Two men stand back in the shadows of the bath-house doorway. You notice at once they are villains. One has had his ears cropped for some crime or other, the other lacks a nose. The stout sticks they hold behind their backs are a dead giveaway too. </p><p>The man leading you down the alley sees you hesitate and asks what the matter is.</p><p>'Do you think me so witless that I can be lured into a den of thieves?' you say. 'Be thankful I don't summon the city militia and have you flogged.'</p><p>Hearing this, his two cronies emerge from the bath-house and advance menacingly towards you. You beat a swift retreat to the main street. Glancing back over your shoulder, you see them watching you go with disappointed scowls.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "They were no match for you.",
        "target": "301"
      }
    ]
  },
  "345": {
    "id": "345",
    "text": "<p> She suddenly stops her sobbing and gives you a scowl of such blood-freezing hatred that you hope never to see the like again. As you step back in dismay, she leaps up and runs off between the clumps of cloud. You follow for a short distance, but you cannot find any trace of her. The spires and domes of the city not far off.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Make your way towards it.",
        "target": "302"
      }
    ]
  },
  "346": {
    "id": "346",
    "text": "<p> You sail downriver to the sea. As you go, clouds thicken like soot in the sky and the sails flutter fretfully as the first stirrings of a high wind come howling down. Lightning spits across the sky, rattling great blows against the gong of the heavens. The waters surge around your prow, sending high spurts of foam across the deck.</p><p>The ship is tossed far out to sea. You can hardly see the others through the deluge of black bone-chilling rain. You hear a scream, drowned out by the storm's roar, as the helmsman is pinned against the rail and crushed by the tiller.</p><p>'She's breaking apart!' you hear someone screech as the mainmast splits and falls ponderously like a great tree. It brings the ragged sails with it. You are flung back as the ship gives a lurch, plunged into water which seems strangely warm after the icy rails of rain. It is like being submerged in blood. The muffled sounds of the undersea thunder in your ears. Your fingers find a plank of broken wood. You break to the surface with a gasp and look around, but there is nothing to see but the crashing waves.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The ship has gone.",
        "target": "280"
      }
    ]
  },
  "347": {
    "id": "347",
    "text": "<p> His muscular bulk is no protection against a deft sword-thrust to the heart. But in your hurry to dispose of him, you step straight into a solid punch to the jaw. You reel back, blood spurting from your nose, as the guard sinks to the ground.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You can't go on.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "It's nothing.",
        "target": "434"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "348": {
    "id": "348",
    "text": "<p> 'Bit puny for ghouls, aren't you?' you say to the brothers as they start to tie you up.</p><p>The mother overhears this. 'Don't you listen to that nonsense,' she snaps. 'Those mortals are sly little wretches.'</p><p>'What do you mean, puny?' says one of the brothers, ignoring her.</p><p>You shrug casually. 'I've seen lots of ghouls tougher than you. Dozens.'</p><p>The other one glares at you. 'What's your game, eh? I'll have you know we're as strong as they come. A good diet of mortal flesh sees to that, eh, Ma?'</p><p>'That's right, son,' cackles the crone as she stirs the pot.</p><p>'Believe whatever you like, if it makes you feel better,' you say. 'I'm going to die soon, so it doesn't matter to me. I'm just saying you're a pathetic pair of undernourished ghouls.'</p><p>They fling the ropes aside. 'Prove it!'</p><p>'All right. How about a race around the hill? If you two beat me, you'll have worked up a good appetite. If I win, you let me go.'</p><p>'You'll never win!' they snort. Taking no notice of their mother's outraged glare, they take you outside. 'Back in a minute, Ma!' one of them calls over his shoulder.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You know how to deal with them.",
        "target": "10"
      },
      {
        "id": 1,
        "text": "You know how to deal with them.",
        "target": "56"
      },
      {
        "id": 2,
        "text": "It's your brain versus their brawn.",
        "target": "469"
      },
      {
        "id": 3,
        "text": "You can easily outrun them.",
        "target": "102"
      },
      {
        "id": 4,
        "text": "They're too stupid to live.",
        "target": "124"
      },
      {
        "id": 5,
        "text": "This won't be easy.",
        "target": "147"
      }
    ]
  },
  "349": {
    "id": "349",
    "text": "<p> Leaving Cairo on foot, you head along the banks of the Nile. Soon you have left the fertile farmland behind, and you head on into wild territory where the Sultan's rule of law does not extend. Crocodiles splash the dun-coloured water, sliding down off the sun-drenched banks as you pass. You see boats plying their trade, but they stay in midstream. A lone traveller in these parts might easily be a brigand or a mad wizard, and the few peasants you see are fearful of approaching you.</p><p>Beyond the river-bank lies a waterless wasteland. Soon the soles of your feet are hardened like leather and your tongue sticks to the roof of your mouth. In all directions the horizon is lost in a hot flat haze.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "349a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "349a": {
    "id": "349a",
    "text": "<p> After days without seeing another soul, you reach an oasis. High palm trees sway against the sky. They are a rich dark green that almost looks black against the dazzling dust-draped landscape.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stop off at the oasis.",
        "target": "473"
      },
      {
        "id": 1,
        "text": "Continue past.",
        "target": "15"
      }
    ]
  },
  "350": {
    "id": "350",
    "text": "<img src=\"./images/350_illo.jpg\" alt=\"\"> The pirates have stifled trade, and the marketplace is denuded of goods. What there is fetches a high price. You stroll along beside the mats of the traders. A fat man seated on plump cushions beneath a stretched silk awning points to his dishes. 'Here is food of the far Orient,' he says.</p><p>You look at the dishes piled with golden apples. 'A journey of weeks or months, yet these apples seem quite fresh.'</p><p>'They are rich with enchantment,' he replies. 'Each has the power to banish sickness and make injuries fade like...'</p><p>'Like the dew of the gardens of Baghdad at dawn?' You smile.</p><p>'Like footprints on a beach as the tide rolls over them.'</p><p>'A veritable marvel. And how much do you want for these doubtless delicious fruits?'</p><p>He flutters his fingers in calculation. 'Accounting you to be a pious traveller of good heart, with a discount for your poetic turn of phrase and the proper deduction for brisk business... Let us say, five dinars apiece.'</p><p>Five dinars! That would pay for a whole banquet.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Buy a golden apple for 5 dinars",
        "shop_id": 6,
        "item": "golden_apple",
        "price": 5
      },
      {
        "id": 2,
        "text": "Continue.",
        "target": "467"
      },
      {
        "id": 3,
        "text": "Continue.",
        "target": "78"
      }
    ]
  },
  "351": {
    "id": "351",
    "text": "<p> The pirates bear down towards your ship. As they get close, the shadow of their black sails falls across the deck, drawing a groan of fear from your marines. </p><p>The enemy's prow crashes hard into your rail, splintering the planks. Your men go pale with fear, but you are not daunted. Smashing your foot into the broken timber, you cry out: 'This ship's scuppered. Will you wait aboard her till she sinks? Those of you who want to live, follow me!'</p><p>You leap across the rail towards the startled pirates. Your marines take courage from your example. The pirates fight furiously, but they are not used to fighting a defensive battle, and soon begin to weaken in the teeth of your onslaught.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A sword-thrust spears your heart.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "A hard-won victory.",
        "target": "372"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "352": {
    "id": "352",
    "text": "<p> The Bedouin respond to your defiance by digging their heels into their camels' flanks and riding forward with a shrill battle cry.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fight.",
        "target": "241"
      },
      {
        "id": 1,
        "text": "Fight.",
        "target": "264"
      }
    ]
  },
  "353": {
    "id": "353",
    "text": "<p> You dive through the curtain and find yourself in a cramped alcove. If you were hoping for an escape route, you're out of luck. You hear the Lord of the Desert stamping around his treasure hall. His sword makes angry swishing sounds, but for some reason he does not try to pursue you or drag you out of the alcove.</p><p>'How long can you hide in there?' he snarls. 'Come out and face me, coward!'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Use your stealth skills.",
        "target": "439"
      },
      {
        "id": 1,
        "text": "Resort to cunning.",
        "target": "395"
      },
      {
        "id": 2,
        "text": "Summon your jinni.",
        "target": "417"
      },
      {
        "id": 3,
        "text": "Draw your sword.",
        "target": "13"
      },
      {
        "id": 4,
        "text": "Tackle him barehanded.",
        "target": "331"
      },
      {
        "id": 5,
        "text": "Fight him.",
        "target": "331"
      }
    ]
  },
  "354": {
    "id": "354",
    "text": "<p> You discover that the 'cloud' you saw was actually a swarm of locusts. They cover the ground, and you show the others how to catch them by throwing rugs, saddlebags and robes over them where they lie. As an added bonus, the locusts had discovered a patch of scrub which, when you dig down to the roots, reveals a trickle of water.</p><p>The others are squeamish about eating locusts. 'Are they not unclean creatures?' says the scribe Rahman, looking dubiously at the plate of roasted insects you hand to him. But you notice that, all the same, he tucks in as hungrily as everyone else.</p><p>You journey on the next day with lightened spirits. 'Soon we'll reach the coast,' says Hakim. 'Then we'll take the road north-west to Cairo. No more starvation or thirst to worry about. We're past the worst of it, my friends.'</p><p>'We should stop at Mecca to make our thanks to God, master,' suggests one of the camel-drivers.</p><p>Hakim looks reluctant. 'Ah, well, perhaps we'll do that on the way back. I'll lose money if these goods are late in getting to Cairo market.'</p><p>What about you? Do you also think that the caravan should stop off at Mecca?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Yes.",
        "target": "101"
      },
      {
        "id": 1,
        "text": "No.",
        "target": "123"
      }
    ]
  },
  "355": {
    "id": "355",
    "text": "<p> The jinni balks at the task you want to set him. 'To build an entire tower overnight!' he cries, raising his bristly eyebrows. 'You think too much of my ability.'</p><p>'I'm relying on you,' you reply. 'We all are. This dwarf told us to build a tower. If he wakes to find we've failed, I fear an unpleasant conclusion to the matter.'</p><p>The jinni considers for a moment, nods. 'I'll grant this last wish,' he proposes, 'and then you must give me my freedom.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Agree to his terms.",
        "target": "198"
      },
      {
        "id": 1,
        "text": "Use your brains instead.",
        "target": "333"
      },
      {
        "id": 2,
        "text": "Investigate the tower.",
        "target": "377"
      },
      {
        "id": 3,
        "text": "Use the lamp to sneak away unnoticed.",
        "target": "495"
      },
      {
        "id": 4,
        "text": "Get the other sailors to help you fight the shark men.",
        "target": "108"
      },
      {
        "id": 5,
        "text": "Wait until the dwarf wakes up.",
        "target": "397"
      }
    ],
    "state_changes": [
      {
        "var": "s355",
        "op": "set",
        "value": 1
      }
    ]
  },
  "356": {
    "id": "356",
    "text": "<p> A hurried inspection of the ship reveals that everyone aboard died mysteriously and quite suddenly. 'At first I feared it was plague,' says the captain, 'but there is nothing in the log to suggest trouble. It seems they just went to sleep one night and never woke up.'</p><p>The cargo hold is found to be full of porcelain and glassware, which should fetch a tidy sum in the east. The captain, deciding that it is too late today to sort through the cargo, orders the two ships tethered. 'Tomorrow we will give her a thorough inspection,' he says. He points to you. 'You will keep watch on board her tonight.'</p><p>It is plain from the looks of the other sailors that they would not relish spending the night on a ship full of dead men. You are not all that keen yourself, but orders are orders. Taking a lantern, you go across to the other ship.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stay alert.",
        "target": "107"
      },
      {
        "id": 1,
        "text": "Stay alert.",
        "target": "130"
      },
      {
        "id": 2,
        "text": "Bed down for the night.",
        "target": "153"
      }
    ]
  },
  "357": {
    "id": "357",
    "text": "<p> You drive the sword right through the Sultan so that the tip pushes out of his back. His entrails spill out onto the moss. The three knights stand looking on in shock, then lift the body across their late master's horse and lead it away. You think they have forgotten you, but at the edge of the clearing one turns and casts his spear. It strikes your shoulder. </p><p>You staunch the bleeding while they ride off between the trees. There is nothing you can do for your friends, but at least you were able to avenge them. As you go to leave, you notice a black jewel lying on the moss by your feet.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take it and continue on your way.",
        "target": "177"
      }
    ],
    "state_changes": [
      {
        "var": "black_jewel",
        "op": "add",
        "value": 1
      },
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "358": {
    "id": "358",
    "text": "<p> The two of you manage to slip out of the city the next morning on the back of an ox-cart. The owner is startled when the sacks of grain on the back of his cart are suddenly thrown aside to reveal two scruffy young vagabonds.</p><p>Azenomei gazes back at the city and gives a hearty laugh. 'A pox on that place. I'll never go there again, I can tell you.' He turns to you. 'And where are you bound now, my friend?'</p><p>'I left Baghdad in search of fame and fortune. But I was accused of being an infamous thief, and now I have no money.'</p><p>'You could do worse than throw in your lot with me,' declares Azenomei. 'I'm heading across the desert to rescue my sister. She was spirited away by a jinni who imprisoned her in a bronze citadel. I can promise you as much adventure as you can take.'</p><p>If someone had said that to you just a few months ago, you would have assumed they were mad. Now you have seen many marvels with your own eyes. But you have not learned to be careless of risk.</p><p>'A jinni's citadel, you say? That may be a little more adventure than I can take.'</p><p>Azenomei waits for your decision.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go with him across the desert.",
        "target": "270"
      },
      {
        "id": 1,
        "text": "Go your own way.",
        "target": "358a"
      }
    ]
  },
  "358a": {
    "id": "358a",
    "text": "<p> You lose no time putting a good distance between you and the city where you were imprisoned. Your journey takes you up into high crags. The sky looks dark and storm-laden. The white sheen of snow lies on the tallest peaks above you.</p><p>Days pass without any sign of habitation. You eke out your food under the rocks - mostly grubs, insects and berries.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your skills are equal to the challenge.",
        "target": "223a"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "223a"
      },
      {
        "id": 2,
        "text": "Can you survive?",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "noose",
        "op": "set",
        "value": 1
      },
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "359": {
    "id": "359",
    "text": "<p> A swirl of vapour emerges from the ring, clotting in midair into the shape of your jinni. He looks across the chamber with a groan of dread. </p><p>'Azenomei al-Umara!' Turning to you, he mutters, 'This is one of the lords of the jinn. He is far mightier than I. If you send me forth to battle him, it may mean my death.'</p><p>'Your life's purpose is to serve me,' you retort. 'Attack!'</p><p>Taking the form of a shaggy black lion, he leaps on Azenomei. The tumult of roars, shrieks and bone-crunching blows is enough to freeze your blood. It is soon clear that your jinni was right - he's no match for Azenomei.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Recall him and attack Azenomei yourself.",
        "target": "112"
      },
      {
        "id": 1,
        "text": "Watch to see how the fight goes.",
        "target": "43"
      }
    ]
  },
  "360": {
    "id": "360",
    "text": "<p> You give the command for the rope to rise, taking a firm hold of the top so that you are borne upwards, through the wispy clouds, to the thin clean air where the rokh has its eyrie.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Search the nest.",
        "target": "325"
      }
    ]
  },
  "361": {
    "id": "361",
    "text": "<p> Ishak of Mosul is one of the Caliph's favourite musicians. You know that he lives the life of a recluse in a house on the outskirts of the city. Calling on him, you are invited to dine. For almost an hour Ishak talks to you of various matters, but he is scrupulous about the laws of courtesy and does not demand to know why you have come.</p><p>At last you explain. 'I must see the Caliph. It is very important.'</p><p>Ishak looks out of the window. 'It is after dark. The curfew is in force.'</p><p>You go to stand beside him, looking deep into his eyes. 'It's very important, Ishak.'</p><p>He paces to and fro, then comes to a decision. Telling you to wait, he slips out into the night. Quite a short time later, the door bursts open and a group of soldiers dash in. Ishak stands in the doorway behind them, wringing his hands.</p><p>'It's not my fault!' he says. 'They arrested me and made me lead them back here.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Run for it.",
        "target": "446"
      },
      {
        "id": 1,
        "text": "You are seized and hauled away.",
        "target": "405"
      }
    ]
  },
  "362": {
    "id": "362",
    "text": "<p> 'The other reason? It is here,' says Jafar, pulling a scroll from his sleeve. 'This chart was brought to me by my loyal henchman, who got it from an African trader. It shows where I can find the nest of the great rokh, the bird with wings longer than a city's streets. It lays eggs of diamond, and with just a few fragments of such an egg I could bribe the army and make myself Caliph.'</p><p>The slave's eyes are wide with wonder. 'When will you set out to seek this treasure, lord?' she asks.</p><p>Jafar snorts. 'Me, risk my life climbing to the rokh's nest? I have no intention of doing so. I employ others for those tasks. Even now, my agents are combing the sordid dives and dens of a dozen cities searching for the famous thief Shazir.'</p><p>'Shazir!' The slave gasps. 'I have heard of that one's daring exploits. It was Shazir who stole the ruby known as Iblis's Eye from the treasury of the Sultan of Nishapur.'</p><p>Jafar nods impatiently. 'Yes, and it will be the same Shazir who steals a piece of the rokh's egg for me. Now, come and help me change. This Robe of Honour is elegant, but it is also rather uncomfortable.' He puts the chart down on a table and goes through a curtained archway into an inner room. The slave glides dutifully after him.</p><p>You look at the chart and lick your lips. Just a few quick strides and you would hold the key to great treasure in your hands. But if you are discovered here, you will be beheaded as a common thief.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Creep over for a closer look.",
        "target": "184"
      },
      {
        "id": 1,
        "text": "Leave the palace.",
        "target": "383"
      }
    ]
  },
  "363": {
    "id": "363",
    "text": "<p> You jump through into an empty chamber, slamming the door shut. You manage to wedge a candelabrum against it, but the guards are battering on the other side with the pommels of their swords. 'Break it down!' you hear Jafar snarl.</p><p>Your makeshift barricade won't hold them off for long. You look around, heart thudding like that of a cornered animal. The only route out of here is over a vine-covered balcony - a drop of six metres or more to the hard flagstones below.</p><p>There is the sound of splintering wood. The guards are almost through the door. You have no time left to ponder. You must act now.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Call on your jinni.",
        "target": "49"
      },
      {
        "id": 1,
        "text": "Jump from the balcony.",
        "target": "72"
      },
      {
        "id": 2,
        "text": "Climb down the vines.",
        "target": "95"
      }
    ]
  },
  "364": {
    "id": "364",
    "text": "<p> The woman goes ashen as she sees the jinni swirl up in a cloud of indigo vapour from your ring. Sheer amazement is the only thing that keeps her from crying out. </p><p>The jinni listens, fingering his tusks, as you explain the predicament. 'Let me rend them into small chunks and scatter them to the fishes, supreme one,' he says eagerly as he peers out from the drapes at the six guards.</p><p>'Oh no,' gasps the woman, finding her voice at last. 'It is not their fault. They're just doing as Jafar ordered.'</p><p>The jinni looks to you. After a glance at the woman, you give him a nod. 'Do it without bloodshed,' you say.</p><p>Shrugging, he turns himself into a gnat and flies out to where the guards are playing dice. Without them noticing, he alters the dice roll and then buzzes into one man's ear. The man looks up and glares at the man next to him. 'What do you mean, I cheated?' he snarls. </p><p>'Cheated?' replies the other. 'I never said any such thing.'</p><p>'It must have been your guilty conscience speaking to you, Abdul, you lowborn dog,' chortles another of the guards.</p><p>'Worthless excrement of a diseased camel!' screams Abdul, leaping up and swinging a punch. Within seconds the brawl is whipped into a frenzy by the jinni's trickery. Soon six unconscious forms line the deck.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take her back to your ship.",
        "target": "254"
      }
    ]
  },
  "365": {
    "id": "365",
    "text": "<p> You join Yussuf in a desperate scramble up the tunnel leading to the surface. But a twist in the passage just brings you to a dead end. Yussuf throws himself against the rock slab and claws at it, crying, 'This wasn't here a moment ago!'</p><p>There is a deathly soft footstep right behind you. Before you can whirl to face your pursuers, something hits you in the middle of the back. Suddenly you feel dizzy. The light seems to be draining away into an inky haze.</p><p>Yussuf is screaming as he stares at your chest. You look down, and as your eyes flutter closed you see a slender sword point protruding between your ribs. It is slick with your own blood.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "366": {
    "id": "366",
    "text": "<p> There is no mistaking the telltale tug on your purse strings. You look down in time to see a scrawny urchin slice through the purse, snatch up your gold and run pell-mell away down the alley. You are about to give chase when you see two burly ruffians lurking in the entrance to the bath-house. Their scarred, hard faces leave you in no doubt that they would not hesitate to use those gnarled clubs they're holding. </p><p>Realising that the man who led you here must be in league with the thieves, you look around. But he is already running off. Disgruntled at having been robbed, you slouch back towards the docks.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Return to your ship.",
        "target": "301"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "set",
        "value": 0
      }
    ]
  },
  "367": {
    "id": "367",
    "text": "<p> An old story you heard from your mother springs to mind. It concerned a sailor who was cast up to the heavens on a waterspout. His comrades all fell back to their doom, but he was clutching a magic flower which enabled him to walk on the clouds. Finding a city of scintillant gold, he dwelt among the people there and even married one of them. Many years later, he was able to leave when the cloud became lodged on top of a high mountain. He brought his wife down the mountainside with him, but she could not survive in the over-rich air and soon died.</p><p>Bearing this tale in mind, you decide it might be safer not to hand over the flower.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Speak to the child.",
        "target": "345"
      }
    ],
    "state_changes": [
      {
        "var": "jasmine_flower",
        "op": "set",
        "value": 1
      }
    ]
  },
  "368": {
    "id": "368",
    "text": "<p> You sail downriver to the sea. As you go, clouds thicken like soot in the sky and the sails flutter fretfully as the first stirrings of a high wind come howling down. Lightning spits across the sky, rattling great blows against the gong of the heavens. The waters surge around your prow, sending spurts of foam across the deck.</p><p>The sailors moan and start to pray for deliverance. You turn to the jinni, who exerts his magic to quell the storm. It rolls off into the east - a yellow glimmering beyond the clouds, like the fires of Iblis the Destroyer.</p><p>The seas are left with a high swell, but soon that too dies down. With a satisfied smirk, the jinni becomes a coil of vapour that is sucked back into your ring.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail on.",
        "target": "389"
      }
    ]
  },
  "369": {
    "id": "369",
    "text": "<p> Both guards strike at the same time, driving towards you from either side with straight thrusts of their long knives. You put on a sudden burst of speed that takes them completely by surprise. Dodging both lunges, you whirl in time to see their expressions of slack-faced disbelief as they spring together, each piercing the other on his blade. As they slump lifeless to the ground, you step up to the door and free the captain.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hurry back to the ship.",
        "target": "412"
      }
    ]
  },
  "370": {
    "id": "370",
    "text": "<p> The two sons are stocky and strong, but you can capitalize on their slow wits and clumsiness. The mother will be harder to beat, because legend has it that a she-ghoul can only be hurt by a weapon made of wood. Furthermore, you must strike well with your first attack. There are countless stories of ghoul-witches who have been felled by one blow, only to be replenished when a second blow was struck.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fight.",
        "target": "305"
      }
    ]
  },
  "371": {
    "id": "371",
    "text": "<p> Falling in with a group of marines who have just returned from a patrol of the Red Sea, you impress them with your knowledge of naval tactics. These men are slaves of the Sultan, well trained and fiercely loyal. Their officer vows to follow some of your suggestions on his next patrol. A few days later you see him with his commander as they emerge from the public bath-house, and the officer calls you over to introduce you.</p><p>The commander is a man with little practical experience, but he listens keenly to your tales of distant lands. When you tell him about the explosive powders of China and the incendiary liquid used by the Byzantine navy, he claps his hands in amazement. 'You must tell these stories to the Sultan himself. He is fascinated by such things.'</p><p>'I would be delighted to do so. Also, I would like to explain to him about the ideas you and I have come up with for catching the Red Sea pirates.'</p><p>'Eh? What plans are those?' Understanding dawns with a sudden grin. 'Oh yes. The plans we discussed. I hope my own input was useful.'</p><p>'Invaluable, my lord.'</p><p>He arranges an audience with the Sultan and also pays you fifty dinars as a reward for letting the Sultan think that the plan came from both of you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Carry out your plan.",
        "target": "193"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 50
      }
    ]
  },
  "372": {
    "id": "372",
    "text": "<p> The pirate leader wore a black jewel on a chain around his neck. The captain of marines hands it to you. 'Perhaps you'd like to have this as a keepsake,' he suggests. 'We have to take the rest of the booty back to the Sultan, of course.'</p><p>When you return to Cairo, the Sultan is overwhelmed with gratitude. 'Those pirates had been bleeding the city dry,' he says. 'You are our saviour. This reward is hardly enough to express my thanks. On your future travels, always remember that there is a welcome here for you in Cairo.'</p><p>The reward is a thousand dinars. Thanking the Sultan for his generosity, you take your leave.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Resume your travels.",
        "target": "349"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 1000
      },
      {
        "var": "black_jewel",
        "op": "add",
        "value": 1
      }
    ]
  },
  "373": {
    "id": "373",
    "text": "<p> At dawn the next day, a sheath of darkness suddenly covers the burnished edge of the rising sun. The roaring wind hits only moments later, bringing with it dense clouds of stinging sand. The storm blots out all daylight. Sheltering your eyes, you grab the halter of the nearest camel to keep from getting lost. Then you realize you have the leading camel. It is up to you to decide which route to take.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Head straight into the wind.",
        "target": "36"
      },
      {
        "id": 1,
        "text": "Bear left.",
        "target": "82"
      },
      {
        "id": 2,
        "text": "Lead the camels to the right.",
        "target": "59"
      }
    ]
  },
  "374": {
    "id": "374",
    "text": "<p> You scramble across the chamber, narrowly avoiding the Lord's blade as it slices through the air behind you, and dive into the jar.</p><p>After a moment, his face appears above you. He wears a predatory smile as he says: 'You're cornered in your bolt-hole, little mouse. Let that be your final resting place, then.'</p><p>Sand pours magically from his hands, filling the jar and smothering you. There is no escape.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "375": {
    "id": "375",
    "text": "<img src=\"./images/375_illo.jpg\" alt=\"\"> You sail on to Basra and beyond, now leaving the river and entering open sea. Crossing the Persian Gulf as far as the Straits of Hormuz takes a week, in weather as serene as an idyll from the ancient epics. 'But wait till we're on the ocean,' mutters one of the sailors. 'We'll earn our pay then.</p><p>The glittering port of Suhar lies a day's sailing down the coast from the straits. Here the ship will take on supplies for the long ocean voyage. You have the opportunity to stroll through the market and examine the goods on offer. You may purchase any of the following that you have money for:</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Buy a water bottle for 1 dinar",
        "shop_id": 11,
        "item": "water_bottle",
        "price": 1
      },
      {
        "id": 3,
        "text": "Buy a mirror for 20 dinars",
        "shop_id": 12,
        "item": "mirror",
        "price": 20
      },
      {
        "id": 6,
        "text": "Buy a hawk for 20 dinars",
        "shop_id": 13,
        "item": "hawk",
        "price": 20
      },
      {
        "id": 9,
        "text": "Finished shopping.",
        "target": "375a"
      }
    ]
  },
  "375a": {
    "id": "375a",
    "text": "<p> Having made your purchases, you head back to the harbour.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A passer-by reacts oddly.",
        "target": "279"
      },
      {
        "id": 1,
        "text": "Rejoin your ship.",
        "target": "301"
      }
    ]
  },
  "376": {
    "id": "376",
    "text": "<p> You stagger on, tortured by hunger and thirst every moment you are awake. Your sleep is a fever haunted by strange fugitive visions.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you go on?",
        "target": "223b"
      },
      {
        "id": 1,
        "text": "Can you go on?",
        "target": "376a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "376a": {
    "id": "376a",
    "text": "<p> You fall to your knees in tearful thanks when at long last you see the walls and spires of a city in the distance.</p><p>'It is Mecca!' says Rahman, the scribe who keeps Hakim's accounts. 'God be praised for His mercy. All of you, cast off your travelling clothes and prepare to enter the holy city. We must give thanks for our deliverance from the wilderness.'</p><p>'Not so fast,' says Hakim. 'We'll stop long enough to fill the waterskins, but if any of you want to get pious you'll have to do it on the way home. I'm in a hurry to get these goods to Cairo market, and I can't afford to dally around here for days on end.'</p><p>What do you think?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You should go to pray in the holy city.",
        "target": "101"
      },
      {
        "id": 1,
        "text": "Hakim has a point.",
        "target": "123"
      }
    ]
  },
  "377": {
    "id": "377",
    "text": "<p> You approach the tower and walk all around it. There is no way in. Looking up, you see a balcony surrounding the domed turret. But the walls are smooth and sheer. You doubt if a lizard would find enough purchase to climb it.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Maybe a lizard couldn't, but you can.",
        "target": "221"
      },
      {
        "id": 1,
        "text": "Your hawk could help.",
        "target": "244"
      },
      {
        "id": 2,
        "text": "What else is Indian rope for?",
        "target": "334"
      },
      {
        "id": 3,
        "text": "Think of something clever.",
        "target": "333"
      },
      {
        "id": 4,
        "text": "Summon your jinni.",
        "target": "355"
      },
      {
        "id": 5,
        "text": "Use the lamp of Antar to sneak away.",
        "target": "495"
      },
      {
        "id": 6,
        "text": "Urge the sailors to fight the shark men.",
        "target": "108"
      },
      {
        "id": 7,
        "text": "Wait until the dwarf wakes up.",
        "target": "397"
      }
    ],
    "state_changes": [
      {
        "var": "s377",
        "op": "set",
        "value": 1
      }
    ]
  },
  "378": {
    "id": "378",
    "text": "<p> Strange stories are told about the Sultan of Nishapur. He is said to be a sorcerer who drowned his elder brother in a vat of black dye, then flayed the skin to make a covering for his sword. Learning spells that could command even the angels, he placed himself in a deep sleep during which a messenger came and cut out his eye with a silver dagger. The messenger - apparently an angel - bore the eye up to heaven, where it witnessed marvels beyond the limits of human experience. When the eye was brought back and replaced, the Sultan awoke with knowledge of secrets from before the dawn of time. The gaze of the eye had become so terrible, however, that it slew any who looked into it. So it was that from that day on the Sultan has always worn a mask, and the women of his harem are always blinded.</p><p>That, at least, is the story.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Watch what happens.",
        "target": "398"
      }
    ]
  },
  "379": {
    "id": "379",
    "text": "<p> Touching your lips, you bow and say, 'Peace be upon you, O King. Your perceptive gaze has gleaned the truth. I was cursed by a powerful jinni never to know good fortune. No doubt that is why I now find myself standing in abject terror with all my friends slaughtered around me. There is only one way to end this curse...'</p><p>'Yes?' says the Sultan. The leather of his saddle creaks as he leans forward in curiosity.</p><p>'I must be slain. Then my curse will pass to those who kill me.' You look around at the band of knights, suddenly falling to your knees and wailing, 'I can take no more misery! Kill me, I pray!'</p><p>A nervous look passes between them. 'This pitiful wretch may speak the truth, Majesty,' they say to the Sultan.</p><p>There is silence behind the mask, then he says, 'Only God is wise in all things. Come.'</p><p>They ride off, leaving you alone in the midst of the carnage.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on alone.",
        "target": "177"
      }
    ]
  },
  "380": {
    "id": "380",
    "text": "<p> Azenomei is as good as his word. After levitating up and unlocking the grille, he throws the slippers down to you. Soon you have joined him on the edge of the pit.</p><p>Gazing down into the foetid hole that has been your prison for the last week, you cannot suppress a shudder of disgust. 'I might have wasted away to a skeleton down there.'</p><p>He claps you on the back. 'Don't think of it. We're free!'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Resume your travels.",
        "target": "358"
      }
    ]
  },
  "381": {
    "id": "381",
    "text": "<p> The blaring note of the horn builds in the air until the very walls of the citadel begin to shake. You sense the tremendous pressure of the sound forcing itself out from where you are standing. A moment later, the vast metal blocks of the ceiling are blown apart and the whole structure collapses around you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's a miracle you're not hurt.",
        "target": "381a"
      },
      {
        "id": 1,
        "text": "You're crushed under the debris.",
        "target": "2b"
      },
      {
        "id": 2,
        "text": "No bones broken.",
        "target": "381a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "381a": {
    "id": "381a",
    "text": "<p> You dig your way out of the debris. There is no sign of Azenomei - he must have perished in the ruins of his bronze fortress.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's a long way back to civilization.",
        "target": "66"
      }
    ]
  },
  "382": {
    "id": "382",
    "text": "<p> You know more tall tales than all the sailors of Suhar, more unlikely yarns than the storytellers of Basra, and more outright lies than every beggar in Baghdad. Within minutes the cat's tail has soared up out of sight among the clouds. You tell it a few more falsehoods for good measure, since you want the tail to stay extended long enough for you to get what you came for, then you rapidly climb up to the top of the pinnacle.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Search the nest.",
        "target": "325"
      }
    ]
  },
  "383": {
    "id": "383",
    "text": "<p> You make your way hurriedly away from the palace by way of the deserted back streets. Your heart is thudding at the thought of your bold escapade - but it is still a bitter heart, for you have achieved next to nothing. Jafar remains free to plague the realm with his wickedness, and your own personal grievance remains unpunished. </p><p>You know now that you cannot expect to right all wrongs in a single night. First you must make your fortune. Once you are rich, you will be able to get an audience with the Caliph and tell him everything. But how will you earn fame and fortune?</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Join a merchant caravan.",
        "target": "183"
      },
      {
        "id": 1,
        "text": "Sail in search of exotic lands.",
        "target": "160"
      }
    ]
  },
  "384": {
    "id": "384",
    "text": "<p> You raise the jewelled sword to parry Masrur's first attack. His blade strikes with an impact that makes the hilt shudder in your grip, sending a bone-wrenching jolt all down your arm. Your own sword is almost dashed aside by Masrur's great strength, and the blow cuts a narrow gash across your brow. As he lunges again, you jump back, making the most of your greater speed.</p><p>'Be thankful I'm trying not to damage that precious sword,' he puffs as you circle nimbly around him. 'Otherwise I'd cut you in two where you stand.'</p><p>Out of the corner of your eye you see a silk-gowned figure emerge from the next room. It is the evil vizier, Jafar. 'You're getting old, Masrur,' he says snidely. 'There was a time when you could deal with a little gutter stripling like that without breaking into a sweat.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try to get away.",
        "target": "404"
      },
      {
        "id": 1,
        "text": "Keep on fighting.",
        "target": "427"
      },
      {
        "id": 2,
        "text": "Drop the sword and surrender.",
        "target": "2"
      }
    ],
    "state_changes": [
      {
        "var": "jewelled_sword",
        "op": "set",
        "value": 1
      },
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "385": {
    "id": "385",
    "text": "<p> You swap clothes. It feels odd to wear the impractical silken finery of a harem girl, instead of your travelling clothes. The woman slips out of the back of the kiosk and turns at the rail. 'Since you have helped me, it's only right I should reward you,' she whispers. 'See the prayer-mat there? It has the special property that, when unrolled, it always lies in the direction of Mecca. Take it with my blessing.'</p><p>She lowers herself into the water and swims off. After an hour or so, one of the guards comes back to check the kiosk. He peers through the curtain, but does not notice anything amiss. You doze off, only to be woken in the first grey light of dawn by cries of anguish. </p><p>'What has happened to Sabira?' one of the guards is saying. 'Who are you?'</p><p>You decide not to disclose your full involvement in the woman's escape. 'I was swimming last night,' you reply. 'I came across this barque moored in the river. You were all playing dice in the prow, but there was no woman here. I saw a pile of fine veils and silks, which I dressed myself in for fun. I suppose the swim must have exhausted me, though, because then I fell asleep.'</p><p>The guards start to wail and tear their hair, distressed at the thought of the punishment in store for them. They take no further interest in you, so you quietly slip away.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Swim back to your own ship.",
        "target": "375"
      }
    ],
    "state_changes": [
      {
        "var": "harem_costume",
        "op": "set",
        "value": 1
      },
      {
        "var": "prayer_mat",
        "op": "set",
        "value": 1
      }
    ]
  },
  "386": {
    "id": "386",
    "text": "<p> The warriors lie motionless on the dusty floor. Letting out a long sigh of relief, you lower your bruised fists and go back to Yussuf, who is shaking in a heap. As you help him to his feet, he whispers, 'I'm sorry I wasn't any help.' He is too ashamed to look you in the eye.</p><p>'God did not give courage to all men and women in equal measure,' you reply. You clasp his shoulder, trying to rally his spirits. 'You have other fine qualities, my friend - your good humour, your loyalty, and your love of life.'</p><p>He nods slowly. Then, raising his head, he peers into the gloom at the end of the gallery. 'Are you sure they're beaten?'</p><p>The taper gives little light. Taking it back to where you left your fallen foes, you see no sign of the bodies. You look all around, expecting them to leap out of the darkness, when Yussuf points to the mural. 'Look, it's changed.'</p><p>He's right. All of the warriors in the picture now lie defeated. A single hero in simple modern-day clothing is shown striding among them, breaking the ancient idols. Yussuf leans close to inspect the mural. His voice is a mixture of puzzlement and awe as he says, 'The face on this figure - it might almost be you.'</p><p>You take a close look. Long centuries have dimmed the ancient pigments. 'No...' you say at last, shaking your head. 'It couldn't be.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue.",
        "target": "52"
      }
    ]
  },
  "387": {
    "id": "387",
    "text": "<p> Reaching the bath-house, the man steps back and politely motions for you to enter. You step into the entrance. Coming into cool gloom after the bright sunlight outside, for a moment you can see nothing. You sense a movement to one side, but before you can react a heavy cosh whacks down against your skull, and you are swallowed up by a deeper darkness.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Time passes…",
        "target": "432"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "388": {
    "id": "388",
    "text": "<p> On the very instant that she takes the flower from your fingers, the cloud underfoot becomes no more solid than a wisp of mist. You give a scream, which the child matches with a peal of malevolent laughter as she watches you sink through the cloud. For less than a heartbeat you are surrounded in white haze, then you break through the bottom of the cloud and go plunging down to strike the water with numbing force.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive such a fall?",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Can you survive such a fall?",
        "target": "280"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -6
      }
    ]
  },
  "389": {
    "id": "389",
    "text": "<p> In time, fair winds and fate carry you to safe berth in the port of Zeila. Here you bid your shipmates farewell, for their travels will take them back to Basra, while you have yet to find your fortune. </p><p> Nearby are carts loaded with a variety of goods. They are bound for the market, and you know that you have a good chance of a bargain if you buy anything here. You find the following items for sale:</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Buy a water bottle for 2 dinars",
        "shop_id": 14,
        "item": "water_bottle",
        "price": 2
      },
      {
        "id": 3,
        "text": "Buy an antidote for 60 dinars",
        "shop_id": 15,
        "item": "mirror",
        "price": 15
      },
      {
        "id": 6,
        "text": "Buy a sword for 15 dinars",
        "shop_id": 16,
        "item": "bow",
        "price": 50
      },
      {
        "id": 9,
        "text": "Look around the city.",
        "target": "149"
      }
    ]
  },
  "390": {
    "id": "390",
    "text": "<p> Jumail starts burbling with fright, but at least he overcomes it enough to snatch up a shovel and start flailing at the guards. His blows are mostly ineffectual, but they provide enough distraction to give you some hope of victory.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You fall under a hail of blows.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Fight to the bitter end.",
        "target": "390a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -2
      }
    ]
  },
  "390a": {
    "id": "390a",
    "text": "<p> You stand panting in the midst of your fallen foes. Jumail rushes in and clobbers their prone bodies for good measure before turning to free your captain.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back to the ship.",
        "target": "412"
      }
    ]
  },
  "391": {
    "id": "391",
    "text": "<p> Your weapon has as much effect as a blade of grass. With a shrill laugh, the she-ghoul raises her arm to strike back. The cleaver drops, embedding itself in your skull, and blood-soaked darkness falls around you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "392": {
    "id": "392",
    "text": "<p> One of the Sultan's advisors, a wealthy man named Nizam, has a reputation for modesty and generosity. You wait until you see him approaching the mosque for evening prayer, and then take out a bowl with which you start washing the feet of the worshippers as they come up the mosque steps. Nizam pauses beside you, but instead of washing his feet you select a common labourer with toes as dirty as a camel's.</p><p>'Why do you wash this man's feet ahead of mine?' Nizam asks. 'Are you unaware that I am one of the Sultan's personal friends?'</p><p>From the corner of your eye you see that he wears a half smile, which is an encouraging sign. You decide to press ahead with your ploy. 'God sees no difference in your feet, nor cares a whit less for this man's prayers than for yours. You may indeed have the ear of the Sultan, but do not be so prideful as to suppose this elevates you above other men.'</p><p>Nizam stares open-mouthed at this, then gives a delighted chuckle. 'Never have I heard such insolence. It is most refreshing! Please do me the honour of coming to my house for supper.'</p><p>That night you strike up a friendship with Nizam over several games of chess. As you depart, you mention casually that you have a plan for dealing with the Red Sea pirates. 'Perhaps it would be better if the Sultan heard it from you, though,' you suggest. 'He'd never listen to a commoner like me.'</p><p>'Nonsense,' replies Nizam. 'How can you, of all people, think such a thing? It is your plan, and I would not dream of presenting it as my own. Tomorrow I shall take you into the palace and introduce you to the Sultan. You can tell him your plan in person.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Speak to the Sultan.",
        "target": "193"
      }
    ]
  },
  "393": {
    "id": "393",
    "text": "<p> Guided either by intuition or long experience, you stick to the course the pirates were on when last seen.</p><p>'Surely they must be trickier than that?' complains the first mate.</p><p>You shake your head. 'Not at all. Remember that no other vessel has been able to track them. They're confident of their ability to vanish into thin air, so why would they worry about pursuit?' </p><p>At dusk you arrive at high cliffs rising at the edge of the sea. Carved into the side of the cliff are two ancient colossi with heads of lions. Between them is a vast stone slab. </p><p>'It may be a door,' says the first mate, 'but I can't see any way of getting it open.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Maybe you know a way.",
        "target": "437"
      },
      {
        "id": 1,
        "text": "Blow the Jericho horn.",
        "target": "457"
      },
      {
        "id": 2,
        "text": "Surely your jinni can help.",
        "target": "440"
      },
      {
        "id": 3,
        "text": "You're stumped.",
        "target": "415"
      }
    ]
  },
  "394": {
    "id": "394",
    "text": "<p> 'Why should we pay any toll?' you reply in a challenging voice. 'No man owns the desert.'</p><p>The Bedouin leader makes a sweeping gesture with the point of his spear. 'These skies are the canopy of our tents. The sands are our rugs. The rocks, our cushions. Hence you must pay.'</p><p>'Are we your enemies?' you ask him. 'Have we caused you any harm?' When he does not find a ready answer, you go on, 'No - for, if we had, then you would have already struck us down, as honour demands.'</p><p>'And so?' he mutters darkly.</p><p>'You say the desert itself is your home. If we are not your enemies, we must be your guests. The law of hospitality forbids you to profit from us.'</p><p>There is no sound at all for several seconds. Then, to your relief, the Bedouin dismount and lead their camels over. The chief's face is like a mask of granite as he says, 'Well spoken. I am abashed. I shall kill my camel for your meal, and here is water from my own flask.'</p><p>The water tastes like the contents of a ditch, but you do not complain. After spending as short a time with the Bedouin as courtesy allows, you make your excuses and leave.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Travel on into the west.",
        "target": "218"
      }
    ]
  },
  "395": {
    "id": "395",
    "text": "<p> You pretend that you are so frightened that you start mumbling to yourself. 'Oh woe, that a poor slave like myself should suffer such a fate! A curse on my proud master for sending me down to keep this mighty spirit busy while he escaped.'</p><p>'What's that you say?' demands the Lord of the Desert, pressing his ear to the curtain. 'Who is your master?'</p><p>'The Defender of the Faith, Harun al-Rashid, Caliph of all the civilized world,' you reply. 'His learned sages explained how they could outwit a senile god of ancient times by sending me, a mere slave, as lure for his quicksand trap.'</p><p>'Senile!' he roars. 'I'll turn the tables on them yet. Quickly, come forth.' When he sees you hesitate, he adds, 'Come. What do I care for the life of a slave when I can have Harun and his advisors?'</p><p>He pours gold from thin air into your hands. 'Return to the surface,' he says. 'When Harun sees this loot, tell him you found an unguarded treasure-house beneath the earth. Greed will bring him into my clutches.'</p><p>He opens the iron door and waves you through.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Find your companions.",
        "target": "459"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 60
      }
    ]
  },
  "396": {
    "id": "396",
    "text": "<p> You leap up, vault over the soldier's lance, and land directly in the Sultan's path. His guards think you are an assassin. Two of them swing their swords, but panic makes them clumsy. Ducking under their attacks, you jump forward and seize the bridle of the Sultan's horse, jerking it to a halt.</p><p>Angry soldiers surround you. The Sultan stares down, more astonished than frightened. Raising his hand to stay his guards from attacking, he says, 'I am a good enough judge of character to see you are no lunatic or zealot. Why did you risk your life to get to me?'</p><p>'Your excellency, how else can a commoner speak to a king? I know a way to catch the Red Sea pirates.'</p><p>He nods. 'I'll hear what you have to say.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him your plan.",
        "target": "193"
      }
    ]
  },
  "397": {
    "id": "397",
    "text": "<p> You huddle together during the long chill night. Everyone is too frightened to speak. They do not even want to guess what the dwarf will do when he wakes up.</p><p>At sunrise, as a pool of gold spreads along the eastern sky, one of the shark men steps forward and touches his master's arm. Yawning floridly, the dwarf makes a great show of sitting up, stretching, and rubbing his eyes. 'I don't see any tower!' he cries in feigned surprise. 'You haven't even touched the pile of rubble. Don't tell me you all fell asleep instead of getting on with the job?'</p><p>'You stunted fiend!' roars the captain, his fear welling up into black rage. He grabs his sword. 'Let us go this instant or by God you'll be a head shorter!'</p><p>The dwarf purses his blobby little lips in distaste, then babbles a quick spell. A queasy feeling crawls through your flesh as you are struck by the evil magic.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Your jewel is absorbing the spell.",
        "target": "419"
      },
      {
        "id": 1,
        "text": "What now?",
        "target": "397a"
      }
    ]
  },
  "397a": {
    "id": "397a",
    "text": "<p> There is nothing you can do to stop yourself from being turned into a gasping fish, and you will end your adventures on the dwarf's dinner plate.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "398": {
    "id": "398",
    "text": "<p> The Sultan makes a soft clicking sound with his tongue. It is almost too faint to be heard, but it is the signal for his knights to begin their butchery. Riding forward, they slash and stab at the terrified donkey-handlers. Abdullah scrambles for his sword but is cut down in front of you.</p><p>So far you're unscathed.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stand and fight.",
        "target": "17"
      },
      {
        "id": 1,
        "text": "Run off along the woodland path.",
        "target": "40"
      }
    ]
  },
  "399": {
    "id": "399",
    "text": "<p> The captain welcomes you aboard his ship. 'We are bound for Basra,' he says. 'The journey should take less than a month. Are you from that part of the world yourself?'</p><p>'From Baghdad,' you say. 'I left to seek my fortune.'</p><p>He laughs. 'Well, I doubt you'd find it here. Overall, my last trip has barely shown a profit.'</p><p>'Not until I came aboard, presumably,' you say with a rueful look at your purse, which is much lighter after paying for your passage.</p><p>The voyage starts well, but only two days out from the coast a sudden squall blows in from the north. 'It will be a rough ride,' predicts the captain. 'Hang on tight.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you weather the storm?",
        "target": "131"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": -50
      }
    ]
  },
  "400": {
    "id": "400",
    "text": "<img src=\"./images/400_illo.jpg\" alt=\"\"> The merchant caravan leaves the city, heading out across the desert. The camels lope sedately along, refusing to be hurried. You trudge beside them on sands the colour of dried blood, gazing at dunes sculpted by the wind into patterns like snakeskin. The air is dry as flint.</p><p>After several days you come in sight of a group of tents crouching in the shade of a mountainous sand dune. The Bedouin emerge to greet you, glancing with shame at their scrawny goats. 'Alas, we have almost nothing to offer you by way of hospitality,' laments their chief. 'But take this bread and the stew of vegetable roots that I was about to share with my family.'</p><p>If you accept, it will mean that the Bedouin themselves go hungry.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You are familiar with their customs.",
        "target": "104"
      },
      {
        "id": 1,
        "text": "Eat the food they have set before you.",
        "target": "127"
      },
      {
        "id": 2,
        "text": "Insist they keep it.",
        "target": "171"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 6
      }
    ]
  },
  "400a": {
    "id": "400a",
    "text": "<p> The merchant caravan leaves the city, heading out across the desert. The camels lope sedately along, refusing to be hurried. You trudge beside them on sands the colour of dried blood, gazing at dunes sculpted by the wind into patterns like snakeskin. The air is dry as flint.</p><p>After several days you come in sight of a group of tents crouching in the shade of a mountainous sand dune. The Bedouin emerge to greet you, glancing with shame at their scrawny goats. 'Alas, we have almost nothing to offer you by way of hospitality,' laments their chief. 'But take this bread and the stew of vegetable roots that I was about to share with my family.'</p><p>If you accept, it will mean that the Bedouin themselves go hungry.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You are familiar with their customs.",
        "target": "104"
      },
      {
        "id": 1,
        "text": "Eat the food they have set before you.",
        "target": "127"
      },
      {
        "id": 2,
        "text": "Insist they keep it.",
        "target": "171"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 3
      }
    ]
  },
  "400b": {
    "id": "400b",
    "text": "<p> The merchant caravan leaves the city, heading out across the desert. The camels lope sedately along, refusing to be hurried. You trudge beside them on sands the colour of dried blood, gazing at dunes sculpted by the wind into patterns like snakeskin. The air is dry as flint.</p><p>After several days you come in sight of a group of tents crouching in the shade of a mountainous sand dune. The Bedouin emerge to greet you, glancing with shame at their scrawny goats. 'Alas, we have almost nothing to offer you by way of hospitality,' laments their chief. 'But take this bread and the stew of vegetable roots that I was about to share with my family.'</p><p>If you accept, it will mean that the Bedouin themselves go hungry.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You are familiar with their customs.",
        "target": "104"
      },
      {
        "id": 1,
        "text": "Eat the food they have set before you.",
        "target": "127"
      },
      {
        "id": 2,
        "text": "Insist they keep it.",
        "target": "171"
      }
    ]
  },
  "401": {
    "id": "401",
    "text": "<p> Azenomei lends you his bunch of keys. Donning the slippers, you rise up to the grille and soon have it unlocked. Perched on the edge of the pit, you take a gulp of clean air - your first in over a week.</p><p>'Come on!' hisses Azenomei's voice from the darkness of the pit. 'Toss the slippers down.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Do as he says.",
        "target": "358"
      },
      {
        "id": 1,
        "text": "Leave him where he is.",
        "target": "422"
      }
    ]
  },
  "402": {
    "id": "402",
    "text": "<p> Fleeing from the city with your hands pressed to your ears to shut out the terrible din of the fight, you return to the ship and tell them what you saw. </p><p>'What dreadful place have you brought us with your wizardry?' laments the captain, pulling off his turban and tearing his hair. </p><p>He orders the rigging stripped and spliced together, making a long rope which is lowered over the edge of the cloud. </p><p>'As the cause of all this trouble, you shall go first,' he says.</p><p>Weak with fear, you slither down the rope. When you reach the bottom there is still a drop of forty feet to the sea. You let go and fall, hitting the water with stunning force. Drenching darkness closes over your head.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Can you survive?",
        "target": "280"
      },
      {
        "id": 1,
        "text": "Can you survive?",
        "target": "144a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "403": {
    "id": "403",
    "text": "<p> It's hopeless. You are spitted on Azenomei's blade and die writhing in agony.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "404": {
    "id": "404",
    "text": "<p> As you look around, Masrur gives a roar and charges forward, raising his sword with both hands for a mighty cleaving blow.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Dodge.",
        "target": "70"
      },
      {
        "id": 1,
        "text": "Trust to luck.",
        "target": "116"
      },
      {
        "id": 2,
        "text": "Use the hawk.",
        "target": "139"
      },
      {
        "id": 3,
        "text": "Dodge.",
        "target": "161"
      }
    ]
  },
  "405": {
    "id": "405",
    "text": "<p> You are thrown into prison. This time there will be no escape. A stake is already being sharpened. Tomorrow at dawn you will be impaled, and your warnings against Jafar will just be put down to the frantic last gambit of a convicted criminal.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "406": {
    "id": "406",
    "text": "<p> You dive off the parapet. From where the guards are standing, it looks as if you have simply jumped to your doom. You hear a gasp of horror escape their throats, then the clatter of footsteps as they run to look down.</p><p>You are in fact clinging to the gonfalon. Sliding down hastily, you swing to safety on the balcony and press back into the shadow of a leafy trellis. A moment later, a row of pale astonished faces appear at the edge of the roof above. 'The fool jumped - must've been insane,' says one guard.</p><p>'I don't call that insanity,' says another grimly. 'Better a quick death than face the Caliph's torturers.'</p><p>The captain of the guards peers down through the darkness. 'I can't see a body,' he mutters, voice tinged with the first stirrings of doubt. 'You two, get down there and make sure of it.'</p><p>You waste no more time. When no corpse is found, they'll scour the palace looking for you. By that time you mean to be long gone. Letting yourself in through the balcony window, you steal a brocade cloak and slip unnoticed past the guards on the gate.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What next?",
        "target": "383"
      }
    ],
    "state_changes": [
      {
        "var": "cloak",
        "op": "set",
        "value": 1
      }
    ]
  },
  "407": {
    "id": "407",
    "text": "<p> It is an easy climb up the cliffs, with many jutting rocks and clumps of grass for you to hang on to. Yussuf follows with much mumbling and grumbling under his breath. He thinks you are foolhardy, but he will not abandon you to face danger alone.</p><p>Reaching a ledge, you see a small cave where a spindly old man sits huddled beside a bowl of red glowing charcoal. A lurid light lies across his face as he shows you a long-toothed smile and says, 'Peace be upon you, my friends.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Greet him in return.",
        "target": "429"
      },
      {
        "id": 1,
        "text": "First demand to know who he is.",
        "target": "448"
      }
    ]
  },
  "408": {
    "id": "408",
    "text": "<p> You retrace your steps, watching the taper burn steadily down. At last, when its light has dimmed to just a dying red ember and you are on the point of giving up hope, Yussuf gives a whoop of joy.</p><p>'Starlight!' he cries, clasping your arm and dragging you along. 'We've found the way out!'</p><p>You emerge onto the ledge above the river and lose no time returning to the ship. It seems as though you have been blundering through underground tunnels for hours, so you are surprised to find that no one on board even noticed you were missing.</p><p>The others listen as you tell your story over supper. The captain gives a gruff sceptical laugh and says, 'Bah, you fell asleep and dreamed this nonsense.' But you can tell from the crew's faces that they believe you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What next?",
        "target": "375"
      }
    ]
  },
  "409": {
    "id": "409",
    "text": "<p> You set sail with the morning tide, steering under the magnificent crescent arch at the harbour mouth and onto the open expanse of the ocean. Sunlight skitters like strings of pearls in the azure clefts of the sea.</p><p>For a week you hug the coast, watching the fishing villages glide by. Gulls shriek and circle overhead, excited at the prospect of fish stirred up by your passage. You watch each day as the dusky olive-green groves of the Hadramaut gradually give way to the stern ochre cliffs of south-west Araby. </p><p>Arriving at the port of Raysut, you learn of pirates who have been preying on shipping in the Red Sea. 'They swoop down without warning in black-sailed ships,' a longshoreman tells you as he helps load your cargo.</p><p>'Why doesn't the Sultan of Cairo order his fleets against them?' asks your captain.</p><p>'After their raids, they vanish like the dew in the gardens of Baghdad with the coming of dawn,' vows a sailor who claims to have seen them. 'One minute we had only empty sea ahead, then they were there. I alone escaped to tell the tale.'</p><p>'And how did you manage that?' one of the crew asks him.</p><p>'Ah, there is a tale...' begins the man.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Stay to hear his story.",
        "target": "453"
      },
      {
        "id": 1,
        "text": "Do some shopping in the market.",
        "target": "350"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": 1
      }
    ]
  },
  "410": {
    "id": "410",
    "text": "<p> Azenomei's laughter is like the shriek of the desert wind. Taking up his sword, he leaps forward to match you blow for blow. Under your feet, red human blood soon mingles with the black ichor of the jinni's veins. You feel yourself weakening, but you are determined to fight to the bitter end.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's bitter, all right.",
        "target": "403"
      },
      {
        "id": 1,
        "text": "But will it be your end, or his?",
        "target": "89"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "411": {
    "id": "411",
    "text": "<p> You unroll the rug. A smell rises from it like rich old loam. When you see what was wrapped up inside, you have to clap your hand to your mouth to keep from crying out. It is a dead body with cracked yellow bones protruding from flesh that crumbles like dry brown clay. From the look of it, it must have lain in the grave for many years. The eye sockets stare up at you from the floor - a grisly gaze that sends a shudder through your limbs.</p><p>You can hear the two men coming back.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hide.",
        "target": "31"
      },
      {
        "id": 1,
        "text": "Hide.",
        "target": "433"
      },
      {
        "id": 2,
        "text": "Stride openly into the inner room.",
        "target": "8"
      },
      {
        "id": 3,
        "text": "Sneak back to the ship.",
        "target": "258"
      }
    ]
  },
  "412": {
    "id": "412",
    "text": "<p> On the way down to the jetty, Captain Ibrahim tells you that the ancestral court kept asking about the nest of the rokh, the giant bird said to prey on elephants. 'I told them I wanted only to trade silk for ivory, but they'd have none of it. They seemed to think I was after the diamond eggs the rokh lays.'</p><p>'Diamond? The chicks must have hard beaks.'</p><p>Jumail presses the captain with questions. 'Where does it nest, Captain, this great bird? How can one reach the eggs? Are they truly made of diamond?'</p><p>'Its nest is somewhere to the west,' says the captain with as much interest as if he were speaking about the shape of a bee's backside. 'As for your other questions, I know no more than the next man.'</p><p>By now you have reached the river. Climbing aboard, the captain gives the order to cast off at once.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail on.",
        "target": "346"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      }
    ]
  },
  "413": {
    "id": "413",
    "text": "<p> Your fist slams into the side of her head. It is like hitting a slab of granite. As you recoil back, clutching your broken hand, she whips the cleaver round and lays open your stomach. You slump to the floor, aghast, and the witch begins to twist your entrails into sausages even before you are quite dead.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "414": {
    "id": "414",
    "text": "<p> The Sultan's guards shove you roughly back into the gutter and the moment is lost. You will not get another chance.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Leave the city.",
        "target": "349"
      }
    ]
  },
  "415": {
    "id": "415",
    "text": "<p> You send your men clambering up over the huge door, but they cannot find any way to open it. At last you are forced to admit defeat. You return to Cairo and report to the Sultan that the pirates' lair lies beyond an unbreachable stone portal.</p><p>He is obviously disappointed, but he puts a cheerful face on it. 'You found out more than any of my own agents were able to,' he says. 'Perhaps I can find a wizard who can force the portal to open. Take this reward for your services.'</p><p>You are given a bag containing fifty dinars.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go on your way.",
        "target": "349"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 50
      }
    ]
  },
  "416": {
    "id": "416",
    "text": "<p> People in flowing black robes come out from the gardens of the oasis to welcome you. They bring pitchers of fresh water which you drain gratefully. Then you are led to the tents of their camp, beneath the wall of the ruined fort, and made comfortable on rugs and cushions.</p><p>After so long in the desert, to be surrounded by swaying palms and trickling streams is like a visit to Paradise. You rest at the oasis for several days. Regain 1 Life Point if you were wounded.</p><p>Eventually, with reluctance, you load your camels and set out on the last leg of your journey. 'We have nearly reached the Red Sea coast,' Hakim says as you walk beside him. 'The worst is behind us now. Although I cannot pretend the roads to Cairo are wholly safe, at least we'll not perish of hunger or thirst.'</p><p>'Our route takes us close to Mecca,' you reply. 'Out of gratitude for our safe deliverance, we should stop and make the pilgrimage.'</p><p>Hakim clicks his tongue. 'Oh, another time, perhaps. On the way back. I really can't afford to waste time at Mecca. I've got all these wares to sell in Cairo, you see.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try to convince him to stop at Mecca.",
        "target": "101"
      },
      {
        "id": 1,
        "text": "Let the matter drop.",
        "target": "123"
      }
    ]
  },
  "417": {
    "id": "417",
    "text": "<p> The jinni comes out of your ring, but when he learns of your predicament he shakes his head sadly. 'I can help you escape, O Weaver of Enchantments,' he whispers, 'but then I would have to remain trapped here until the end of the world. The glyph above the alcove is the seal of Suleiman, and no spirit or demon can pass by it. That is why the Lord of the Desert cannot pursue you in here.'</p><p>At this, the Lord of the Desert stops pacing and stands with his ear pressed to the curtain. 'What's that?' he says. 'Talking to yourself, are you? Are you mumbling your prayers, you pious little mouse?'</p><p>You can say nothing to the jinni without giving the game away.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Nod for him to proceed with his plan.",
        "target": "169"
      },
      {
        "id": 1,
        "text": "Leap out to face the Lord of the Desert.",
        "target": "13"
      },
      {
        "id": 2,
        "text": "Leap out to face the Lord of the Desert.",
        "target": "331"
      }
    ]
  },
  "418": {
    "id": "418",
    "text": "<p> You ask about the women who work at the palace and find one, by the name of Fohzia, who runs errands for the Sultan's wives and also performs songs and dances in his court. You approach her while she is buying perfume in the marketplace. Pretending that you once worked in a harem yourself, you soon strike up a friendship. You help her carry her purchases back from the market. Standing outside the palace, you give a long sigh and say, 'How pleasant it would be to look on the face of the Sultan. I have heard he is a handsome man with a voice like the music of a harp.'</p><p>Fohzia laughs. 'In all honesty, people tend to say that sort of thing about kings and princes. You mustn't take it too seriously.'</p><p>'How knowledgeable you are, friend of my heart. Working in a harem has made you wise.' </p><p>'I thought you used to work in a harem yourself?' she says with a frown.</p><p>'Er... yes, but it was only a little harem in a tiny town. Well, more a village than a town. Just a few tents, in fact. I'd love to see inside a proper palace.'</p><p>After a little more wheedling, Fohzia relents and smuggles you into the palace. You have to wait a few days, but at last your chance arrives. The Sultan comes to sit with his wives, and as Fohzia is about to sing for him you suddenly jump forward and kiss the floor at his feet, crying, 'Cast me out if you wish, O Dispenser of Justice, but first hear why I smuggled myself into your court.'</p><p>He peers at you, then shrugs and smiles indulgently. 'Very well, I'll listen to your story. At least it will make a change from the usual evening of songs, sherbets and sweetmeats.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him your plan.",
        "target": "193"
      }
    ]
  },
  "419": {
    "id": "419",
    "text": "<p> Your companions are all turned into fishes, but the black jewel deflects the spell so that you are not affected.</p><p>The dwarf frowns and mutters a protective rune. 'Incredible! No one has ever resisted my sorcery before.'</p><p>A bold bluff is your only chance. Taking a menacing step forward, you wave your hands in a meaningless but cryptic gesture. 'I am the High Adept of the Fire Wizards,' you say angrily. 'How dare you cast your petty little spells at me, you gnarled lump of flesh! Now I shall send you shivering down to hell in a blast of fulminous flame.'</p><p>'Wait, supreme one!' he says, quailing. 'I did not realize! Forgive your wretched servant!'</p><p>You look back at the fish thrashing around on the turf. 'Withdraw the spell. Restore my servants to their true shape and I may be lenient.'</p><p>He hastily does so. As Captain Ibrahim and the rest go aboard the ship, the dwarf sidles over and says: 'May I ask what brought you here, O Worker of Miracles?'</p><p>'We seek great treasures of ancient times. Do you know of such?'</p><p>'There is the rokh's diamond egg,' he says. 'Its nest is at the head of the Nile, I believe. It would be a dangerous feat to steal it, though.'</p><p>'Not for one of my power.' </p><p>You dismiss the dwarf with a wave of your hand and stride up the gangplank. As the ship gets under sail, you stand in the stern, looking every inch the imperious wizard you pretend to be. Only when the uncharted isle has dropped below the horizon do you allow yourself to relax. Your sigh of relief is drowned out by the crew's cheers.</p><p>The black jewel is cracked and clouded now that its power is used up. You discard it. The next few days pass uneventfully. You have not spotted any other vessels until a ship drifts into view one afternoon. Her sails are furled and there is no reply to your shouts. As you come alongside, you see the reason. The deck is strewn with corpses.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go aboard with caution.",
        "target": "356"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      },
      {
        "var": "black_jewel",
        "op": "add",
        "value": -1
      }
    ]
  },
  "420": {
    "id": "420",
    "text": "<p> At a signal from the masked Sultan, his knights ride forward and start to put Abdullah and the others to the sword. You quake in horror, fearing they will notice you at any moment.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sneak off.",
        "target": "154"
      },
      {
        "id": 1,
        "text": "Stay motionless where you are.",
        "target": "461"
      },
      {
        "id": 2,
        "text": "They've seen you!",
        "target": "79"
      }
    ]
  },
  "421": {
    "id": "421",
    "text": "<p> You loiter for a while in the marketplace, pretending to take note of the prices but making no purchase. After a while you wander away and sit in a thoughtful posture on the edge of a fountain. It is not long before a merchant approaches and strikes up a conversation. At first he talks of trifling matters, but at last a keen look comes into his eye and he says, 'Unless I am mistaken, you have been scouting out the market prices.'</p><p>You adopt a smile that suggests grudging admiration. 'You are very perceptive. I have come here ahead of my master, who has three ships full of goods to sell. But he knows that as soon as people see he is a wealthy man, the asking prices will go up. Hence I am here to make purchases on his behalf.'</p><p>The merchant licks his lips. 'Hmm. Well, what is your master interested in buying, if I may ask?'</p><p>You take a sidelong glance at the stall the merchant was sitting in. 'He hopes to buy amber, which is in short supply back in Baghdad at the moment. Do you know anyone I could suggest he talks to?'</p><p>The merchant throws up his hands in delight. 'What a coincidence! I myself trade in amber, and my prices are very reasonable.'</p><p>'Well, as to that...' You rub your jaw. 'I'd have to look around the market a bit more.'</p><p>He takes out a bag of gold and presses it into your hands. 'Take my word for it. Just tell your master to come to Hisham al-Din. That's me.'</p><p>You nod sagely, assuring him you will do as he asks, and stroll away from the marketplace. When you look at the bag he gave you, you find it contains two hundred dinars.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "To the docks.",
        "target": "399"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 200
      }
    ]
  },
  "422": {
    "id": "422",
    "text": "<p> How can you know who to trust? Leaving Azenomei to fend for himself, you hasten away across the courtyard.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go on your way.",
        "target": "223"
      }
    ]
  },
  "423": {
    "id": "423",
    "text": "<p> You seize a candelabrum and raise it above your head. Azenomei looks up at the last moment, his mouth opening to start a spell. He is too late. The candelabrum falls, breaking open his skull.</p><p>Slowly he begins to dissolve into a thick black miasma. A stench like burning sulphur fills the room. When his body has completely vanished, the only thing left is his sword.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Talk to Ayisha.",
        "target": "20"
      },
      {
        "id": 1,
        "text": "Head back to civilization.",
        "target": "66"
      }
    ],
    "state_changes": [
      {
        "var": "sword",
        "op": "set",
        "value": 1
      }
    ]
  },
  "424": {
    "id": "424",
    "text": "<p> You turn the key and the lock drops from Ayisha's shackles. She springs up at once with a cry of delight. 'Excellent! Now we can return home.'</p><p>'And we must make all speed. I have to warn the Caliph about his evil vizier, Jafar, who has been plotting to overthrow him.'</p><p>She nods thoughtfully. 'I believe it was Jafar who summoned the jinni to abduct me. Prepare yourself...'</p><p>Raising her hands and chanting the words of a spell, she conjures another whirlwind that whisks the two of you halfway across the world in the blink of an eye. As the wind dies down, you stagger giddily out of the vortex to see that you are now in the Caliph's throne room. Jafar is also here, and his look of astonishment is soon replaced by one of outright hatred when he sets eyes on your face.</p><p>Ayisha kisses the Caliph. 'Father, I have returned.'</p><p>The Caliph is almost speechless with amazement. 'My heart is brimming with joy. But, Ayisha, who is this you've brought with you?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him everything.",
        "target": "477"
      }
    ]
  },
  "425": {
    "id": "425",
    "text": "<img src=\"./images/425_illo.jpg\" alt=\"\"> The door is thrown open and you are dragged inside. Your first impression is the stench. It is as vile as a charnel house, and your guts bubble in turmoil. The sight of the hut's occupants is even worse: a morbidly pallid old she-ghoul and her two sons with faces of doltish evil. One of them holds you while the other gives you a painful poke in the ribs and says, 'A fine morsel for the supper-table.'</p><p>'It's a mortal, Ma,' says the other son.</p><p>'I can see that, you stupid boy,' replies the mother with a voice like a goat being strangled. 'What's it doing here?'</p><p>'Probably looking for the rokh's diamond eggs,' suggests the first son.</p><p>She shakes her head. 'No, wrong side of the Red Sea for that. Don't you boys listen to a word your old ma tells you? Oh well, get it trussed up. I'll stoke the fire.'</p><p>They mean to eat you!</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Fight.",
        "target": "370"
      },
      {
        "id": 1,
        "text": "Fight.",
        "target": "305"
      },
      {
        "id": 2,
        "text": "Call on your jinni for help.",
        "target": "327"
      },
      {
        "id": 3,
        "text": "Try to trick your way out of this.",
        "target": "348"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      }
    ]
  },
  "426": {
    "id": "426",
    "text": "<p> The chamberlain returns and leads you down a long corridor to the throne room. Here the Caliph is sprawled on thick cushions, occasionally plucking a sweetmeat from the tray at his elbow. </p><p>Jafar is also here, and you sense his glare of hatred out of the corner of your eye, but you ignore him. Bowing to the Caliph, you say, 'O Prince of the Faith, I have travelled far and endured many hardships in order to warn you of the danger that threatens you.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him the whole story.",
        "target": "477"
      }
    ]
  },
  "427": {
    "id": "427",
    "text": "<p> Masrur may be the greatest swordsman you have ever faced. You must be careful, as any mistake could be your last.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Keep your guard up.",
        "target": "297"
      },
      {
        "id": 1,
        "text": "Make an all-out attack to force him back.",
        "target": "276"
      },
      {
        "id": 2,
        "text": "Fight on as best you can.",
        "target": "161"
      }
    ]
  },
  "428": {
    "id": "428",
    "text": "<p> Your jinni emerges from the ring in a swirl of purple smoke. A single disdainful sweep of his gleaming eyes tells him what is going on. 'Shall I bring you armour and a hero's blade, that you may fight these snapping curs, esteemed one?' he suggests in a voice like breaking rocks.</p><p>'I don't have the time for such nonsense,' you reply curtly. 'Whisk me to the gatehouse roof, yonder.'</p><p>He raises eyebrows like tufts of dried moss. 'You wish to flee? To turn tail and run from those puny wretches? Where is your bold heart?'</p><p>'In my chest, where I'd like it to remain.' The guards are just a few paces away. You scream at the jinni, 'Do it now!'</p><p>In a whoosh of air you are plucked from the rooftop, tumbled through empty air, and deposited unceremoniously on the battlements of the gatehouse. With a sour grunt of disapproval, the jinni curls back into your ring, leaving you to race down to street level before the guards can get around to the courtyard and intercept you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Get well away from here.",
        "target": "383"
      }
    ]
  },
  "429": {
    "id": "429",
    "text": "<p> 'And may you know the mercy and blessings of God, venerable one,' you reply, touching your brow and bowing.</p><p>'Live a hundred years, if it be God's will!' says Yussuf rather more fulsomely as he scrambles onto the ledge beside you. You can tell from the wild look in his eyes that he believes the old man to be a wizard or ifrit.</p><p>The strange old man nods, the light of the coals sketching him like a figure of blood against the shadows. 'You have spoken well,' he says, 'and now I shall speak. You see this cave? Within it are three treasures. Many have sought these treasures, and now their bones are the sand under our feet.'</p><p>You kneel beside him. Your blood is quickened with excitement. 'You seem to know something more,' you prompt him.</p><p>'I know much. I know how the treasure may be reached. There are three obstacles. The first is a hall of one-eyed monsters. Merely to look upon them means death. Next comes the gallery of warriors whom no weapon can harm. Swords they spurn, clubs cause them no concern - '</p><p>'What about knives?' puts in Yussuf.</p><p>'Knives?' The old man shakes his head. 'No good. Lastly there is the causeway where the light of hope can only bring doom.'</p><p>There is a long moment of silence while you consider what the old man has told you. Yussuf, seeing the look in your eyes, grabs your arm imploringly. 'No, I beg you. It would be suicide! Forget this talk of treasure, and let's be on our way.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Return to the ship.",
        "target": "375"
      },
      {
        "id": 1,
        "text": "Enter the cave.",
        "target": "483"
      }
    ]
  },
  "430": {
    "id": "430",
    "text": "<p> Quelling a shiver of nervousness, you begin the long descent. Yussuf watches you with a queasy look, then follows on his bottom, sliding carefully from step to step. You think he is being unnecessarily timid - until your foot slips on the dank stone and you almost fall headlong. Then you too opt for the undignified but safer means of descent.</p><p>You soon lose sight of the tunnel mouth above. Now you feel as though you are suspended in a black void. You are uncomfortably aware of the long drop on either side, and the staircase seems narrower than ever.</p><p>You hear something that makes the hairs rise at the back of your neck. It is a soft ragged flapping. Dimly you can see shapes gliding down out of the dark recesses above. The forms are indistinct, but you see the faceted jewel-like glint of their predatory eyes.</p><p>'They're attracted by the light,' you call back to Yussuf.</p><p>There is a moment as your words sink in. 'But - but I can't put it out,' he wails. 'Then we'd have to descend in pitch darkness.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Insist he snuffs out the taper.",
        "target": "449"
      },
      {
        "id": 1,
        "text": "Agree that would be certain death.",
        "target": "5"
      }
    ]
  },
  "431": {
    "id": "431",
    "text": "<p> You set sail with the morning tide, passing under the magnificent crescent arch at the harbour mouth and onto the open expanse of the ocean. Sunlight skitters like strings of pearls in the azure clefts of the sea. Braced with one hand on the rail and the other on the main halyard, you suck the fresh salt-laced air into your lungs and gaze keenly into the east, where your destiny awaits.</p><p>Six days out from Suhar, the lookout reports an island with white cliffs a few points off the port bow. The captain studies his charts and then looks up with a piqued expression. 'No such isle is marked here,' he says. 'I wonder if it's worth investigating?'</p><p>You can tell that the captain is torn between curiosity and the desire to get his cargo to the Indies without delay.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Encourage him to put in at the island.",
        "target": "75"
      },
      {
        "id": 1,
        "text": "Urge him to keep your present course.",
        "target": "84"
      }
    ]
  },
  "432": {
    "id": "432",
    "text": "<p> You awaken to find you are in shackles. Others are also here, huddled on benches around a narrow room. Before you can question them to find out what is happening, the door is flung open and a tall bald fellow with muscles like iron bars strides in. Giving you a few rough strokes with a whip, he takes you by the arm and hauls you outside. </p><p>The hot dazzling sunlight makes you feel sick. Still dazed from the blow you took earlier, you stumble up onto a wooden platform where a slaver stands waiting. 'What am I bid for this strong young thing?' he asks the crowd.</p><p>There is a confused babble of haggling, and before you can gather your wits to speak you have been sold to a merchant with sleek good looks that mark him out as an Egyptian. 'You will do to carry my wares back to Cairo,' he says as he leads you away.</p><p>'There has been a mistake!' you protest. 'I am no slave. I am a true believer, and whoever has shackled me thus has committed a crime against the laws of man and God.'</p><p>He shows you a smile without humour. 'How often do you think I have heard that tale?' he says. 'I'll tell you: every time I buy a new slave. Now come, wretch, and I'll assign you your chores.'</p><p>You have lost all your money and all your belongings. You have only the shackles on your wrists, which announce to all who see you that you are a slave, and to try to escape now would only earn you a lingering death by crucifixion.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You must hope to earn your freedom.",
        "target": "400b"
      }
    ],
    "state_changes": [
      {
        "var": "mordant",
        "op": "set",
        "value": 1
      }
    ]
  },
  "433": {
    "id": "433",
    "text": "<p> You stay out of sight until the last rug has been carried in to the next room. Padding softly forward, you flit through the doorway with the swiftness of a shadow. The islanders are all on their knees with their foreheads pressed to the floorboards, facing away from you towards the far end of the room. One man at the back seems to sense something and turns for a quick glance, but by this time you are already out of sight behind a stout hardwood pillar.</p><p>'Why have you brought me here, you fiends?' rings out a familiar growling voice. </p><p>It is Captain Ibrahim. You take a look out from behind the pillar. As your eyes adjust to the smoky torchlit gloom, you see your captain standing against the far wall. To either side of him are ornately carved benches where tall silent figures sit as if in judgement. Each of the figures wears a rug wrapped around him and drawn up like a cowl across his head.</p><p>Now another voice can be heard in the room. It is a dry hollow whisper, and the sound of it makes your skin crawl. It is coming from one of the figures on the bench. <em>'You stand before the Council of Ancestors. What plunder did you mean to take from our people?'</em></p><p>'Plunder?' demands Ibrahim, fighting to keep a nervous tremor out of his voice. 'I came not to plunder, but to trade. The Chinese silks and Indian spices in my ship's hold in return for gold and ivory.'</p><p>A soft murmuring ensues as the rug-cloaked figures lean their heads slightly together like seaweed fronds in a slow current. Other things are said, but too faintly for you to hear. Then the spokesman speaks again: <em>'We find you guilty. Tomorrow you shall be executed.'</em></p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back and tell the others.",
        "target": "77"
      },
      {
        "id": 1,
        "text": "Go back and tell the others.",
        "target": "99"
      }
    ]
  },
  "434": {
    "id": "434",
    "text": "<p> With Jumail's help you soon overpower the other guard. Stepping over their senseless bodies, you approach the door of the hut. The lock gives way to several hard kicks. Captain Ibrahim is standing inside with his hands on his hips, beard jutting at a magisterial angle. 'About time you got here, you sons of sea cooks!' he thunders. 'Now let's be off before the rest of those cursed natives arrive.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back to the ship.",
        "target": "412"
      }
    ]
  },
  "435": {
    "id": "435",
    "text": "<p> You snatch up the wooden stick lying beside the door. As you throw yourself forward to strike, the she-ghoul's bony fingers are already closing around the handle of the meat cleaver.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Lash her across the knuckles.",
        "target": "455"
      },
      {
        "id": 1,
        "text": "Wait for the chance to land a solid blow.",
        "target": "33"
      }
    ]
  },
  "436": {
    "id": "436",
    "text": "<p> The Sultan sees your green turban, which marks you out as one who has undergone the pilgrimage to the holy city. Raising his hand to halt the procession, he dismounts and lifts you to your feet. 'I never pass a pilgrim without asking advice,' he says with a warm smile. 'It is by God's grace that I sit on the throne of Cairo, after all.'</p><p>This is one of those situations where it is worth coming straight to the point. You're not sure how long you could play the part of a pious savant anyhow. 'It is the lot of kings to be beset by many cares,' you say, 'and no doubt you will find it so to the end of your days. But, O Sultan, I can rid you of at least one worry. I speak of the pirates of the Red Sea.'</p><p>He gives you a keen thoughtful look. 'Speak on.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Tell him your plan.",
        "target": "193"
      }
    ]
  },
  "437": {
    "id": "437",
    "text": "<p> You have heard the story of this ancient place. Addressing the two lion-headed statues, you call out, 'Meow, meow, open now!'</p><p>The statues nod to show they understand. Your sailors wail in terror to see them flex their masonry muscles, but there is no danger. Now that you've spoken the magic formula, the statues are obedient to your will. They reach out and take hold of the door. There is a heavy grinding sound and slowly they slide it open, revealing a hidden cove massed with glittering treasures.</p><p>The pirates, halfway through unloading their latest plunder, are taken by surprise. They snatch up their swords and snarl defiantly as your marines swarm among them.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A sword-thrust spits your heart.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "You make short work of them.",
        "target": "372"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "438": {
    "id": "438",
    "text": "<p> You soon regret the decision. All the waterskins are empty. Scanning the horizon, you see no sign of life - just the endless shimmering waves of heat rising off bare dusty rock. Everyone walks stiffly, hollow eyes fixed on the far distance, knowing that to falter would spell their death. Even the camels move with a wearily splayed gait, heads hung low, morose expressions on their drooping mouths.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Are you able to go on?",
        "target": "438a"
      },
      {
        "id": 1,
        "text": "Are you able to go on?",
        "target": "223b"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "438a": {
    "id": "438a",
    "text": "<p> Night falls and you see a low dark cloud descend across the bright disc of the moon.</p><p>'God have mercy,' groans Hakim through dry swollen lips. 'Not another sandstorm...'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "'That's no sandstorm.'",
        "target": "310"
      },
      {
        "id": 1,
        "text": "Press on in the direction of the cloud.",
        "target": "354"
      },
      {
        "id": 2,
        "text": "Skirt around it.",
        "target": "376"
      }
    ]
  },
  "439": {
    "id": "439",
    "text": "<p> Cupping your hands, you throw your voice to the far end of the chamber. The Lord of the Desert looks back over his shoulder as he hears muffled sounds outside the great iron-bound door. </p><p>'It must be a buried treasure vault,' one voice apparently says.</p><p>'See if you can pick the lock, then,' replies another.</p><p>With a perplexed frown, he strides over to the door and flings it open. Of course there is no one there. While his attention is distracted, you leave the alcove and hide yourself in one of the tall stone jars. Then you throw your voice back to the alcove you've just vacated, 'Hey, I'm getting peckish! Got anything to eat down here, you daft old goat?'</p><p>His head snaps around with a look of fierce white fury. Stamping back to the curtain, he raises his sword and cries, 'Put out your hand, impertinent wretch! I'll slice you five fat sausages to fill your complaining belly.'</p><p>In his anger, he forgot to lock the door. You slip out of the jar and tiptoe over to it, making sure to help yourself to a handful of gold before you go.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Find your way back to the others.",
        "target": "459"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 50
      }
    ]
  },
  "440": {
    "id": "440",
    "text": "<p> The jinni unfurls himself smokily from your ring, congealing like a blot of shadow in the low glancing rays of the setting sun. 'When you speak, I hear the voice of command,' he says with careful courtesy.</p><p>'This door deters us. Open it.'</p><p>The jinni looks at the portal, then turns a dubious glance from one massive statue to the other. Uncoiling his limbs in a long leap, he clings to the cliff beside one of the statues' ears and whispers something to it. When he springs back down to the deck, you glare at him and say, 'Well? You've heard my wish. Treat it as a command!'</p><p>The jinni presses his hands together and gives an embarrassed half-bow. 'It is not so easy as that, O conjurer of marvels. The lion-headed sentinels will take umbrage if I break their door. Still, perhaps there is another way.'</p><p>The first mate taps you on the shoulder. 'Do you mean to let this impertinent jinni tell you what you may wish for?' he says. 'Show him who's in charge!'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Order the jinni to open the door.",
        "target": "460"
      },
      {
        "id": 1,
        "text": "Ask him what else he can suggest.",
        "target": "196"
      },
      {
        "id": 2,
        "text": "Use the Jericho horn instead.",
        "target": "457"
      },
      {
        "id": 3,
        "text": "Wait - you know how to open it!",
        "target": "437"
      }
    ]
  },
  "441": {
    "id": "441",
    "text": "<p> 'You are free to leave,' declares the dwarf.</p><p>Captain Ibrahim has too much pride to let it go at that. 'In fact we never had any intention of landing at your cursed little island,' he snorts. 'I had hoped it would be one of those fabled shores where lapiz lazuli streaks the beaches, or where the giant rokh lays its diamond eggs.'</p><p>The dwarf smiles at some private joke. 'There are no diamond eggs here. You should seek the source of the Nile if that's what you're after.'</p><p>The captain looks as though he would like to argue further. You drag him back to the ship and put to sea before the dwarf turns nasty. However, as the island dwindles into the distance, an ominous rumble shakes the sky. 'A storm in the offing,' warns Yussuf, who is at the helm. 'We're in for a rough ride.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Take charge.",
        "target": "16"
      },
      {
        "id": 1,
        "text": "Can you weather the storm?",
        "target": "131"
      }
    ],
    "state_changes": [
      {
        "var": "kismet",
        "op": "set",
        "value": 1
      }
    ]
  },
  "442": {
    "id": "442",
    "text": "<p> This city has nothing to offer you. Passage on a ship back to Iraq will cost you fifty dinars.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Pay the fare.",
        "target": "399"
      },
      {
        "id": 1,
        "text": "More than you can afford.",
        "target": "442a"
      }
    ]
  },
  "442a": {
    "id": "442a",
    "text": "<p> Lacking cash to pay for the voyage, you must resort to your skills.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Money is easy to come by.",
        "target": "481"
      },
      {
        "id": 1,
        "text": "You can think of a profitable scam.",
        "target": "421"
      },
      {
        "id": 2,
        "text": "Maybe there's something you can sell.",
        "target": "462"
      }
    ]
  },
  "443": {
    "id": "443",
    "text": "<p> The chamberlain considers your request.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "He is moved by your piety.",
        "target": "443a"
      },
      {
        "id": 1,
        "text": "Unimpressed, he summons the guards.",
        "target": "405"
      }
    ]
  },
  "443a": {
    "id": "443a",
    "text": "<p> He leads you to the throne room where the Caliph, waving asides Jafar's protests, beckons you forward.</p><p>You tell him the whole story. As he listens, his countenance darkens with rage. At first you feared he might not believe you, but so many elements add up. Now he understands the true source of rebellion was never his loyal subjects, but the detestable Vizier in whom he placed his trust.</p><p>'Jafar!' roars the Caliph. 'At last the hours of your worthless life have run out!'</p><p>Freezing in the act of sidling from the room, Jafar raises a knife. The blade drips with toxic green fluid. 'It is your own life that will end now, al-Rashid,' he replies.</p><p>Jafar is about to throw the knife.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "But your hand is quicker.",
        "target": "228"
      },
      {
        "id": 1,
        "text": "You have time to throw an arrow.",
        "target": "494"
      },
      {
        "id": 2,
        "text": "Use your cloak.",
        "target": "273"
      },
      {
        "id": 3,
        "text": "Leap in front of the Caliph.",
        "target": "295"
      },
      {
        "id": 4,
        "text": "Do nothing.",
        "target": "317"
      }
    ]
  },
  "444": {
    "id": "444",
    "text": "<p> You find him in the highest chamber of the palace. He is younger than you imagined, and much less sinister in bearing than the fearsome wizards of folklore. He is clad all in blue, with an azure cloak over sky-coloured robes, rings of indigo and cobalt, sapphire-hued turban clasped by an actinic jewel. His eyes also are blue, though he is not pale-complexioned like a Christian.</p><p>You bow to him. 'I have you to thank for my health - and perhaps for my life. May I know my benefactor's name?'</p><p>Instead of answering directly, he says, 'I am only an apprentice. Not the master of this palace, but its custodian.' The blue eyes crinkle in a smile. 'You interest me. It's rare I can see into the future. The weave of Fate's tapestry is intricate and richly-dyed where it surrounds you.'</p><p>'As to that, I cannot say. I have had my share of interesting adventures, certainly.'</p><p>'And you have more to come. The curtain of time, opaque to other men, sometimes seems as a gauze veil to my eyes. I see you the victim of injustice. You will have sinister friends and unwitting foes. I see you ascending to the nest of the great rokh, the bird that lays eggs with diamond shells. You'll ride on horseback through the air. Those are robes of honour that you wear. Or...'</p><p>'Go on.'</p><p>He shakes his head. 'I cannot tell if you will live. But I can give you a single gift that may help you.' He brings forth a pair of embroidered slippers. 'Whoever wears these becomes weightless. You can use them to ascend to the rokh's lair.'</p><p>Thanking the wizard, you rejoin the others. It is only after you've set sail that you realize you never found out his name.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail on.",
        "target": "389"
      }
    ],
    "state_changes": [
      {
        "var": "magic_slippers",
        "op": "set",
        "value": 1
      }
    ]
  },
  "445": {
    "id": "445",
    "text": "<p> <div class=\"s4\">CHOOSE YOUR SKILLS</div></p><p>Skills currently chosen (maximum of four):</p><p> </div> </p>",
    "options": [
      {
        "id": 1,
        "text": "AGILITY (remove)",
        "target": "445hr"
      },
      {
        "id": 2,
        "text": "ARCHERY (remove)",
        "target": "445ir"
      },
      {
        "id": 3,
        "text": "CUNNING (remove)",
        "target": "445jr"
      },
      {
        "id": 4,
        "text": "FOLKLORE (remove)",
        "target": "445kr"
      },
      {
        "id": 5,
        "text": "LUCK (remove)",
        "target": "445lr"
      },
      {
        "id": 6,
        "text": "MAGIC (remove)",
        "target": "445mr"
      },
      {
        "id": 7,
        "text": "ROGUERY (remove)",
        "target": "445nr"
      },
      {
        "id": 8,
        "text": "SEAFARING (remove)",
        "target": "445or"
      },
      {
        "id": 9,
        "text": "STREETWISE (remove)",
        "target": "445pr"
      },
      {
        "id": 10,
        "text": "SWORDPLAY (remove)",
        "target": "445qr"
      },
      {
        "id": 11,
        "text": "WILDERNESS LORE (remove)",
        "target": "445rr"
      },
      {
        "id": 12,
        "text": "WRESTLING. (remove)",
        "target": "445sr"
      },
      {
        "id": 13,
        "text": "You're ready.",
        "target": "1i"
      },
      {
        "id": 38,
        "text": "Go back and choose one of the characters provided.",
        "target": "1"
      }
    ]
  },
  "445a": {
    "id": "445a",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 10
      },
      {
        "var": "life_points_max",
        "op": "set",
        "value": 10
      },
      {
        "var": "money",
        "op": "set",
        "value": 12
      },
      {
        "var": "sword",
        "op": "set",
        "value": 1
      },
      {
        "var": "bow",
        "op": "set",
        "value": 1
      },
      {
        "var": "archery",
        "op": "set",
        "value": 1
      },
      {
        "var": "swordplay",
        "op": "set",
        "value": 1
      },
      {
        "var": "folklore",
        "op": "set",
        "value": 1
      },
      {
        "var": "wrestling",
        "op": "set",
        "value": 1
      }
    ],
    "auto_redirect": "1i"
  },
  "445b": {
    "id": "445b",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 10
      },
      {
        "var": "life_points_max",
        "op": "set",
        "value": 10
      },
      {
        "var": "money",
        "op": "set",
        "value": 12
      },
      {
        "var": "ring",
        "op": "set",
        "value": 1
      },
      {
        "var": "cunning",
        "op": "set",
        "value": 1
      },
      {
        "var": "luck",
        "op": "set",
        "value": 1
      },
      {
        "var": "folklore",
        "op": "set",
        "value": 1
      },
      {
        "var": "magic",
        "op": "set",
        "value": 1
      }
    ],
    "auto_redirect": "1i"
  },
  "445c": {
    "id": "445c",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 10
      },
      {
        "var": "life_points_max",
        "op": "set",
        "value": 10
      },
      {
        "var": "money",
        "op": "set",
        "value": 12
      },
      {
        "var": "agility",
        "op": "set",
        "value": 1
      },
      {
        "var": "cunning",
        "op": "set",
        "value": 1
      },
      {
        "var": "roguery",
        "op": "set",
        "value": 1
      },
      {
        "var": "streetwise",
        "op": "set",
        "value": 1
      }
    ],
    "auto_redirect": "1i"
  },
  "445d": {
    "id": "445d",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 10
      },
      {
        "var": "life_points_max",
        "op": "set",
        "value": 10
      },
      {
        "var": "money",
        "op": "set",
        "value": 12
      },
      {
        "var": "bow",
        "op": "set",
        "value": 1
      },
      {
        "var": "archery",
        "op": "set",
        "value": 1
      },
      {
        "var": "seafaring",
        "op": "set",
        "value": 1
      },
      {
        "var": "streetwise",
        "op": "set",
        "value": 1
      },
      {
        "var": "wilderness_lore",
        "op": "set",
        "value": 1
      }
    ],
    "auto_redirect": "1i"
  },
  "445e": {
    "id": "445e",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 10
      },
      {
        "var": "life_points_max",
        "op": "set",
        "value": 10
      },
      {
        "var": "money",
        "op": "set",
        "value": 12
      },
      {
        "var": "sword",
        "op": "set",
        "value": 1
      },
      {
        "var": "luck",
        "op": "set",
        "value": 1
      },
      {
        "var": "swordplay",
        "op": "set",
        "value": 1
      },
      {
        "var": "roguery",
        "op": "set",
        "value": 1
      },
      {
        "var": "seafaring",
        "op": "set",
        "value": 1
      }
    ],
    "auto_redirect": "1i"
  },
  "445f": {
    "id": "445f",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 10
      },
      {
        "var": "life_points_max",
        "op": "set",
        "value": 10
      },
      {
        "var": "money",
        "op": "set",
        "value": 12
      },
      {
        "var": "ring",
        "op": "set",
        "value": 1
      },
      {
        "var": "agility",
        "op": "set",
        "value": 1
      },
      {
        "var": "magic",
        "op": "set",
        "value": 1
      },
      {
        "var": "folklore",
        "op": "set",
        "value": 1
      },
      {
        "var": "wilderness_lore",
        "op": "set",
        "value": 1
      }
    ],
    "auto_redirect": "1i"
  },
  "445g": {
    "id": "445g",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "life_points",
        "op": "set",
        "value": 10
      },
      {
        "var": "life_points_max",
        "op": "set",
        "value": 10
      },
      {
        "var": "money",
        "op": "set",
        "value": 12
      },
      {
        "var": "cunning",
        "op": "set",
        "value": 1
      },
      {
        "var": "luck",
        "op": "set",
        "value": 1
      },
      {
        "var": "streetwise",
        "op": "set",
        "value": 1
      },
      {
        "var": "wrestling",
        "op": "set",
        "value": 1
      }
    ],
    "auto_redirect": "1i"
  },
  "445h": {
    "id": "445h",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "agility",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445i": {
    "id": "445i",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "archery",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445j": {
    "id": "445j",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "cunning",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445k": {
    "id": "445k",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "folklore",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445l": {
    "id": "445l",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "luck",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445m": {
    "id": "445m",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "magic",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445n": {
    "id": "445n",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "roguery",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445o": {
    "id": "445o",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "seafaring",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445p": {
    "id": "445p",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "streetwise",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445q": {
    "id": "445q",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "swordplay",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445r": {
    "id": "445r",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "wilderness_lore",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445s": {
    "id": "445s",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "wrestling",
        "op": "set",
        "value": 1
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": 1
      }
    ],
    "auto_redirect": "445"
  },
  "445hr": {
    "id": "445hr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "agility",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445ir": {
    "id": "445ir",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "archery",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445jr": {
    "id": "445jr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "cunning",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445kr": {
    "id": "445kr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "folklore",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445lr": {
    "id": "445lr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "luck",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445mr": {
    "id": "445mr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "magic",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445nr": {
    "id": "445nr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "roguery",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445or": {
    "id": "445or",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "seafaring",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445pr": {
    "id": "445pr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "streetwise",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445qr": {
    "id": "445qr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "swordplay",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445rr": {
    "id": "445rr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "wilderness_lore",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "445sr": {
    "id": "445sr",
    "text": "<p> </div> </p>",
    "options": [],
    "state_changes": [
      {
        "var": "wrestling",
        "op": "set",
        "value": 0
      },
      {
        "var": "skill_count",
        "op": "add",
        "value": -1
      }
    ],
    "auto_redirect": "445"
  },
  "446": {
    "id": "446",
    "text": "<p> You race up the stairs with the soldiers in hot pursuit. They think they have you, but you run out onto the terrace and vault down to the street below, leaving them to gawp like beached fishes. None of them cares to attempt such a daring leap. By the time they get back downstairs and out into the street, you are long gone.</p><p>Sheltering in a doorway, you watch a patrol of guards go tramping past. Your only chance now is to find the Caliph while he prowls the streets in disguise.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Search for him after dark.",
        "target": "182"
      }
    ]
  },
  "447": {
    "id": "447",
    "text": "<p> There is nowhere you can run. Surrounded by the palace guards, you struggle valiantly but in vain. You are cut down under a dozen scything scimitars. As you flop weakly like a landed fish, blood spurting from your wounds, Jafar looks down at you with a rejoicing smile. You will take your hatred of him to the grave.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "448": {
    "id": "448",
    "text": "<p> The old man rocks back on his heels and gives a peal of cackling laughter. 'It is unwise to forget your manners,' he says. 'Now you'll learn a lesson.'</p><p>You take a step forward, intending to seize him, but he throws his cloak over the flickering coals and you are plunged into sudden darkness. Yussuf blunders into you.</p><p>'Careful, or we might step off the ledge.'</p><p>You hear him groping around in the dark. 'Er... I don't think we're on the ledge any more,' he stammers.</p><p>'Then where are we?' </p><p>'Here's a taper. Let me light it.'</p><p>There is the clatter of stone on stone as he strikes a spark, then the taper catches. It gives only a faint nimbus of light, but that is enough to tell that you are in an underground cave. Yussuf starts to say something, but panic makes his voice catch in his throat. He can only tug your sleeve and point.</p><p>You turn, and in the dim light of the taper you see a horde of beasts that must have issued from the steaming pits of Hell.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What now?",
        "target": "200"
      }
    ]
  },
  "449": {
    "id": "449",
    "text": "<p> 'Put it out!' you yell at Yussuf. 'They're almost on us!'</p><p>With a gasp of despair, he licks his fingers and pinches the taper. The light goes out with a hiss. 'Ouch,' you hear him say. 'I've burnt myself.'</p><p>You ignore him. You are more interested in how the flying creatures will react. If you were mistaken in thinking it was the light that drew them to you, then now you are surely doomed. But apparently you guessed right, because you hear the fluttering wings withdraw back into the cavern depths.</p><p>'They've gone.'</p><p>'Yes,' says Yussuf. 'But how are we going to get to the bottom safely without any light?'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Luckily you're as agile as a cat.",
        "target": "28"
      },
      {
        "id": 1,
        "text": "Who needs light?",
        "target": "51"
      },
      {
        "id": 2,
        "text": "Watch your step.",
        "target": "73"
      }
    ]
  },
  "450": {
    "id": "450",
    "text": "<img src=\"./images/450_illo.jpg\" alt=\"\"> You lift the nearest sword off its hook, but it is heavier than you thought. Slipping from your hands, it clatters to the marble floor. Instantly you hear voices raised in the chamber beyond: 'Someone is there! Call the guards!'</p><p>'No need for guards!' booms a voice from the doorway you entered by. 'There'll be nothing left by the time they get here.'</p><p>You spin around. Striding towards you comes a bald giant of a man with an executioner's sword grasped in one massive hand. His eyes look like thunderheads as he rasps, 'You'd filch one of my master's fine swords, eh? Well, little one, perhaps first you should learn how to use it.'</p><p>He must be Masrur, the Caliph's fearsome bodyguard. You heard how he once slew five men with one sweep of that butcher's blade he carries.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Grab the sword and close with him.",
        "target": "384"
      },
      {
        "id": 1,
        "text": "Try to get away.",
        "target": "24"
      }
    ]
  },
  "451": {
    "id": "451",
    "text": "<p> You set sail the next morning, riding the tide out of the docks, under the broad sweep of the triumphal arch at the harbour mouth and onto the open sea. Other ships surround you in the blazing sunshine - vessels as proud as desert hawks, with prows the shape of upcurved daggers and triangular sails as white as the wings of a hundred doves. Each is bound for a distant port. Each captain hopes to return with his hold full of pearls or ivory, spices or silks.</p><p>You ask Captain Ibrahim what cargo he will buy from the people of the Scarlet Isle. He fixes you with a sidelong look as he stands gazing out to sea with one hand on the bowsprit. 'Ivory,' he says. 'Now, be about your chores.'</p><p>Three days out from Suhar, you run into a bank of dense fog which seems to rise up in minutes off a clear calm sea. Sun, sky and horizon are all swallowed up by a pearly haze. The sails sag, limp and wet with no breeze to fill them, and the ship begins to drift.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "No problem for a master mariner.",
        "target": "479"
      },
      {
        "id": 1,
        "text": "What now?",
        "target": "143"
      }
    ]
  },
  "452": {
    "id": "452",
    "text": "<p> The gryphon's beak slices into your breast, drawing a rivulet of blood.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It's more than you can take.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Grit your teeth against the pain.",
        "target": "452a"
      }
    ]
  },
  "452a": {
    "id": "452a",
    "text": "<p> You fall back gasping as you see the invigorated gryphon launch itself afresh into the fray. Soon it has slain the ghastly scorpion. But before you can rise or speak a word, another monster of even greater size comes bounding into the hall. This is a great black goat with foaming spittle on its jaws.</p><p>The gryphon retreats to stand beside you. 'I must feast on a human eye,' it pants. 'That is the only sustenance that will sustain me.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Let it peck out your eye.",
        "target": "7"
      },
      {
        "id": 1,
        "text": "Refuse.",
        "target": "402"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "453": {
    "id": "453",
    "text": "<p> 'When I was younger I was a lion in battle,' begins the old sailor, 'but it is my shame to admit that in my latter years I've taken to the wine jug. So it was that when the pirates attacked I lay in a dead faint below decks with a puddle of red wine beside me. I was oblivious to the carnage. I slept through the shouts and screams of the dying. When the pirates came across me they must have taken me for a corpse lying in its own blood, for they did nothing except pile me with the others. Then, steering our ship beside their own, they sailed on until dawn. Peeping with one eye, I saw a monumental door carved into the cliffs. On each side of the door were pagan statues of beings whose heads were as the heads of cats; their feet were in the sea.</p><p>'The pirate captain then spoke to the statues, saying: \"Meow, meow, open now!\" and I almost fell back into my swoon when I saw the statues rise and swing open that massive stone portal, beyond which lay a hidden cove. Fortunately I kept my wits about me enough to slip over the side while the pirates were busying themselves with steering through the narrow strait. The door closed behind them. I then swam for an hour until, weak with my efforts and the fright of what I'd seen, I was picked up by a kindly fisherman. And that is the tale as I remember it, though God alone knows the whole truth.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back to the ship.",
        "target": "78"
      }
    ],
    "state_changes": [
      {
        "var": "sesame",
        "op": "set",
        "value": 1
      }
    ]
  },
  "454": {
    "id": "454",
    "text": "<p> After several days you stumble across a well. It is a curious sculpted bowl of clear blue stone into which the faces of fantastic animals have been carved.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "It seems vaguely familiar.",
        "target": "464"
      },
      {
        "id": 1,
        "text": "Draw water from the well.",
        "target": "472"
      },
      {
        "id": 2,
        "text": "Pass by without getting water.",
        "target": "71"
      }
    ]
  },
  "455": {
    "id": "455",
    "text": "<p> Blood spurts from the withered old knuckles. She gives vent to a shrill cry and drops the cleaver. Now's your chance. You bring the stick down hard against the side of her neck - only to have your surge of triumph goto utter despair. </p><p>Instead of falling, she flexes her fingers. There are no signs now of the wounds you inflicted with your first blow. Her smile of leisurely spite would curdle milk. Ignoring your repeated blows, she stoops to recover the cleaver. </p><p>Your weapon has as much effect as a blade of grass. With a shrill laugh, the she-ghoul raises her arm to strike back. The cleaver drops, embedding itself in your skull, and blood-soaked darkness falls around you.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "456": {
    "id": "456",
    "text": "<p> To your surprise, Madan turns out to have been right. The captain nods sagely and says, 'I had been considering the very same thing. The Scarlet Isle is rich in wealth, you say?'</p><p>'So I have heard.'</p><p>His mind is made up. 'Very well, then. I had intended to promote you to a more responsible position in any case.'</p><p>He will pay you well to sail on to the Scarlet Isle. Soon he is bellowing orders to the crew, and the ship steers out of the harbour and plunges southwards through the lapping waves.</p><p>Three days out from Raysut, you run into a bank of dense fog which seems to rise up in minutes off a clear calm sea. Sun, sky and horizon are all swallowed up by a pearly haze. The sails sag, limp and wet with no breeze to fill them, and the ship begins to drift.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "No problem for a master mariner.",
        "target": "479"
      },
      {
        "id": 1,
        "text": "What now?",
        "target": "143"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 10
      }
    ]
  },
  "457": {
    "id": "457",
    "text": "<p> The horn produces a piercing note that brings splinters of rock clattering down from the top of the cliff. Your sailors press their hands across their ears, wincing with pain, as you continue to blow.</p><p>Suddenly the two lion-headed statues leap to their feet. One wades out and plucks the horn from your hands, crying, 'Enough! We hear you!' Each of its fingers is wider than a rudder, but it is dextrous enough not to hurt you.</p><p>The other statue takes hold of the stone door and hauls it open, revealing a hidden cove where the pirates are unloading their plunder. They look up in surprise and grab their swords as the first statue propels your ship in through the doorway and over to the dock.</p><p>The fight is short. The pirates, accustomed to easy pickings, are no match for the Sultan's marines. But you are embroiled in the thick of the fighting and your main concern is staying alive.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You're struck down.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "These curs are no threat.",
        "target": "372"
      }
    ],
    "state_changes": [
      {
        "var": "jericho_horn",
        "op": "set",
        "value": 0
      },
      {
        "var": "life_points",
        "op": "add",
        "value": 0
      }
    ]
  },
  "458": {
    "id": "458",
    "text": "<p> The hawk flies off to hunt. You lapse into a doze that is more fainting than slumber. Suddenly the hawk perches on your shoulder, startling you awake. For a few moments you cannot remember where you are, and you stare around at the moon-drenched rocks and the huddled forms of your companions.</p><p>The hawk drops a fresh green leaf in the dust at your feet. You pick it up with trembling fingers and give a gasp of joy. It is damp.</p><p>Rousing some of the others, you follow the hawk to the waterhole it has found hidden in the rocks. 'This tastes like the gutter ooze of Basra,' declares one of the drivers after he samples the water, 'and yet I vow it's sweeter to me now than the finest fruits of the Hadramaut.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Continue across the desert.",
        "target": "373"
      }
    ]
  },
  "459": {
    "id": "459",
    "text": "<p> A winding tunnel leads to a concealed opening in the side of a sand dune. The sandstorm has blown itself out, leaving the sky clear as a pool above the red sands.</p><p>Your companions are astonished when you walk back to join them. 'We thought you were dead,' says Hakim, pointing to the patch of quicksand.</p><p>'Fate dealt kindly with me for once,' you reply.</p><p>Giving the quicksand a wide berth, you travel on until you see an oasis glittering like a green jewel in the hot golden haze of dusk. Among the trees you see people camped, and behind them is the outline of an old stone fort.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Approach.",
        "target": "416"
      },
      {
        "id": 1,
        "text": "Avoid the oasis.",
        "target": "438"
      }
    ]
  },
  "460": {
    "id": "460",
    "text": "<p> The jinni plants his shoulder against the stone door and strains using all his strength. With a ponderous grinding noise, the door slowly slides up. Beyond you can see a hidden cove where the docks are piled with overflowing chests of gold and jewels. </p><p>Before the gap is quite wide enough for your ship to sail through, the two colossal statues leap up with roars of outrage. Stamping their feet, they send waves swamping up over the bows. They plunge thigh-deep through the water, seize your ship and spin it around, then propel it hard through the narrow gap in the door. There is a crunch as the timbers split. The ship breaks apart. You jump out onto the jetty to find yourself surrounded by pirates. Your marines are floundering in the water. Once they swim to the jetty, you are sure they'll be able to beat the pirates. But in the meantime you are left facing a dozen of these cut-throats on your own.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A sword-thrust finds your heart.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Fight on.",
        "target": "460a"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "460a": {
    "id": "460a",
    "text": "<p> Your marines join you and help you to swiftly overcome the remaining pirates. The pirate leader wore a black jewel on a chain around his neck. The captain of marines hands it to you. 'Perhaps you'd like to have this as a keepsake,' he suggests. 'We have to take the rest of the booty back to the Sultan, of course.'</p><p>When you return to Cairo, the Sultan is overwhelmed with gratitude. 'Those pirates had been bleeding the city dry,' he says. 'You are our saviour. This reward is hardly enough to express my thanks. On your future travels, always remember that there is a welcome here for you in Cairo.'</p><p>The reward is a thousand dinars. Thanking the Sultan for his generosity, you take your leave.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Resume your travels.",
        "target": "349"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 1000
      },
      {
        "var": "black_jewel",
        "op": "add",
        "value": 1
      }
    ]
  },
  "461": {
    "id": "461",
    "text": "<p> Your fingers close on something half-buried in the soil where you are kneeling. You smooth away the muck. It is a mirror. Note it among the possessions on your Adventure Sheet if you want to keep it.</p><p>The Sultan's knights have completed their grisly work. Abdullah and his servants lie scattered around the clearing. Severed limbs and gore cover the surrounding bushes. The bodies look as though they've been slashed with a hundred scythes.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Creep off before you're spotted.",
        "target": "154"
      },
      {
        "id": 1,
        "text": "Creep away before you're spotted.",
        "target": "79"
      }
    ],
    "state_changes": [
      {
        "var": "mirror",
        "op": "set",
        "value": 1
      }
    ]
  },
  "462": {
    "id": "462",
    "text": "<p> You visit the market - not to buy, but to sell. You must raise the money to get back home. With heavy heart, you survey your belongings and see how much each will fetch. You are offered the following prices:</p><p>Those are the only items that are of interest to anyone. Remember you need fifty dinars to buy passage on a ship.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sell your ordinary sword for 20 dinars.",
        "shop_id": 25,
        "item": "sword",
        "price": 25
      },
      {
        "id": 2,
        "text": "Sell your jewelled sword for 50 dinars.",
        "shop_id": 26,
        "item": "hawk",
        "price": 30
      },
      {
        "id": 4,
        "text": "Sell your cloak for 20 dinars.",
        "shop_id": 27,
        "item": "water_bottle",
        "price": 1
      },
      {
        "id": 6,
        "text": "Sell a magic ring for 50 dinars.",
        "shop_id": 28,
        "item": "mirror",
        "price": 15
      },
      {
        "id": 8,
        "text": "Sell your bow for 20 dinars.",
        "shop_id": 29,
        "item": "sword",
        "price": 10
      },
      {
        "id": 10,
        "text": "Sell a black jewel for 50 dinars.",
        "shop_id": 30,
        "item": "bow",
        "price": 15
      },
      {
        "id": 12,
        "text": "Sell the lamp of Antar for 90 dinars.",
        "shop_id": 31,
        "item": "cloak",
        "price": 30
      },
      {
        "id": 14,
        "text": "Sell your Indian rope for 80 dinars.",
        "shop_id": 32,
        "item": "hawk",
        "price": 20
      },
      {
        "id": 16,
        "text": "Finished at the market.",
        "target": "462a"
      }
    ]
  },
  "462a": {
    "id": "462a",
    "text": "<p> You must hope you have scraped enough together to get a berth on a ship.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "To the docks.",
        "target": "399"
      },
      {
        "id": 1,
        "text": "What now?",
        "target": "149"
      }
    ]
  },
  "463": {
    "id": "463",
    "text": "<p> The servants bring you a cup of sherbet laced with cinnamon. Glutted by all the rich food you have eaten, you fail to notice a curious chalky aftertaste until it is too late. As you slump drowsily across the table, you are dimly aware of the three old men entering the room.</p><p>'Prepare the altar,' one of them says, his words thudding like lead weights inside your skull. 'The gods will look on us with great favour after this sacrifice.'</p><p>You black out, never to awaken.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "464": {
    "id": "464",
    "text": "<p> You once heard a tale concerning a well like this one. Racking your brains, you finally remember the details. It was a story about a man who wandered for his whole life in the desert. He never escaped because he kept coming across the well, and each drop drawn from the well doubled the distance to the desert's edge.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Press on.",
        "target": "71"
      }
    ]
  },
  "465": {
    "id": "465",
    "text": "<p> The Caliph, Harun al-Rashid, is fond of entering the city in disguise by night. In this way, by mingling on the streets in the clothes of a common trader, he gets to learn the true feelings of the populace. It is rumoured that he uses a concealed tunnel to get in and out of the Palace on these excursions. Fortunately your headlong flight has brought you to the secret entrance to that tunnel. Dipping your hand inside the stem of the jar, you find a lever. You tug it and the back of the alcove slides up, admitting you to the tunnel. It closes behind you an instant before the guards round the corner. </p><p>Chuckling at the thought of how it will seem you have vanished into thin air, you lope along the tunnel until you feel fresh air in your face and see the glitter of starlight ahead.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What now?",
        "target": "383"
      }
    ]
  },
  "466": {
    "id": "466",
    "text": "<p> You search high and low, but the harbour is large and filled with ships. Soon you realize you are lost.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A friendly face.",
        "target": "6"
      },
      {
        "id": 1,
        "text": "Oops.",
        "target": "29"
      }
    ]
  },
  "467": {
    "id": "467",
    "text": "<p> You're not sure whether they have magical powers or not, but the apples certainly look delicious.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Bite into one.",
        "target": "9"
      },
      {
        "id": 1,
        "text": "Continue on your way.",
        "target": "32"
      }
    ]
  },
  "468": {
    "id": "468",
    "text": "<p> Your knuckles crack against the hard ridge of his jaw. At the same instant, you feel the blade of his sword scraping against your ribs.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "A grievous wound.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "Ignore the pain.",
        "target": "468a"
      }
    ]
  },
  "468a": {
    "id": "468a",
    "text": "<p> You jump away from your opponent and prepare for another exchange of blows.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Try a jab to his face.",
        "target": "288"
      },
      {
        "id": 1,
        "text": "Go for a low sweeping kick.",
        "target": "242"
      },
      {
        "id": 2,
        "text": "Concentrate on evading his attack.",
        "target": "219"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -3
      }
    ]
  },
  "469": {
    "id": "469",
    "text": "<p> Looking along the trail, you say, 'I think you ought to give me a head start.'</p><p>'Pah!' retorts one of the brothers. 'You're all full of bluster after all.'</p><p>'It's not that. It's just that we mortals don't see so well in the dark. You want the race to be fair, don't you?'</p><p>'Fair?' The two ghouls look at each other. 'What's that?'</p><p>'Or maybe you're afraid I'll beat you.'</p><p>That does the trick. With pride at stake, they agree to give you a minute's head start. You race off and conceal yourself behind some rocks. Much less than a minute later, you see the two ghouls go hurtling past on strong thudding feet. Once they are out of sight, you emerge from the rocks.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back to their hut.",
        "target": "34"
      },
      {
        "id": 1,
        "text": "Return to the merchant caravan.",
        "target": "57"
      }
    ]
  },
  "470": {
    "id": "470",
    "text": "<p> You cannot help grinning at the old man. 'Well, you certainly seem to have a fund of strange stories.'</p><p>'You doubt them?' he leaps to his scrawny feet, eyes flashing. 'Watch, as I prove the truth of all I've said. You see my cat, Shahrazad? She has heard my words, yet you'll note her tail is not an inch longer than before.'</p><p>You bite your lip and take half a step backwards. The old man is undeniably mad. 'Incontrovertible proof,' you say to humour him. 'I no longer doubt you at all.'</p><p>'Don't talk to me like I'm daft, you young sprat. Now watch the cat's tail while I tell her a few lies. Shahrazad, it's my birthday today and I'm just ten years old. This morning the gaoler gave me a fine confection of dates, saffron rice, spiced mutton and buttermilk for breakfast. I ate so much my belly ached! The Caliph is my second cousin and I myself heard the Prophet's last sermon, peace be upon him.'</p><p>You blink and rub your eyes, but there can be no doubt. With each lie, the cat's tail grows a couple of inches, then after a few seconds it returns to its normal length.</p><p>'What a miraculous animal,' is all you can say.</p><p>'She's a sure indicator of when people are telling the truth,' agrees the old man.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "He takes an interest in your belongings.",
        "target": "41"
      },
      {
        "id": 1,
        "text": "He shows an interest in your belongings.",
        "target": "18"
      },
      {
        "id": 2,
        "text": "Look for a way to escape.",
        "target": "61"
      }
    ]
  },
  "471": {
    "id": "471",
    "text": "<p> You shadow the three men along a gallery whose alabaster pillars provide ample cover. Reaching the end, they enter a high ceilinged hall surrounded by a balcony. Tapestries the colour of flames hang down the walls. You press yourself into the edge of the doorway and watch what they do.</p><p>One of the three fetches a hubble-bubble pipe and sets it between some cushions. You tiptoe closer, concealing yourself behind one of the drapes so you can eavesdrop on them. They sit, and for a time smoke in silence. Then one of them says, 'The traveller should be ideal for our purposes. Do you agree, my brothers?'</p><p>'Yes,' says one of the others. 'Then, with our spell complete, the gods will grant us the power of flight. Brother, do you have the chart?'</p><p>The third man nods and unfurls a piece of parchment. 'It is here. It shows the Peak of Hara where the rokh nests. Its diamond egg can make us immortal.'</p><p>For several minutes more they pass around the pipe, and the only sound in the room is of cool smoke bubbling through water. 'It's time to get things ready,' announces the first man at last. 'Our unwitting sacrifice should have drunk the drugged sherbet by now.'</p><p>He gets to his feet.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Don't let them see you.",
        "target": "484"
      },
      {
        "id": 1,
        "text": "Don't let them see you.",
        "target": "150"
      }
    ]
  },
  "472": {
    "id": "472",
    "text": "<p> Refreshing yourself with the cool delicious water, you journey on. With each day you grow weaker, losing a little more of your strength under the sun's enervating heat and the life-sapping chill of the night wind. At last you can go no further. You slump to the ground. Soon the wind will scour your bones to add to the great white dunes that stretch all around you to infinity.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "473": {
    "id": "473",
    "text": "<p> A nomadic tribe have made their camp here. The tents nestle like white doves in the cool shade under the trees. The tribesmen watch as you quench your thirst at the oasis, then several of them come forward and invite you to look over some goods they have for sale.</p><p>'Here is an antidote against all poisons,' says one, holding up a small glass vial. 'Here a water bottle that is never empty. And here, a magic rope from India.'</p><p>You smile, not sure if he means it as a joke. To openly suggest that he is lying would provoke a fight. 'Great marvels indeed. I doubt if I could afford these treasures.'</p><p>'We have other things to show you,' he replies, unruffled. 'Not all are so expensive.'</p><p>You look over their wares and find the following:</p><p>When you are ready to leave, you bid the nomads farewell and continue on your way.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Buy an antidote for 90 dinars",
        "shop_id": 17,
        "item": "sword",
        "price": 50
      },
      {
        "id": 3,
        "text": "Buy a water bottle for 30 dinars",
        "shop_id": 18,
        "item": "jewelled_sword",
        "price": 200
      },
      {
        "id": 6,
        "text": "Buy some Indian rope for 300 dinars",
        "shop_id": 19,
        "item": "chart",
        "price": 50
      },
      {
        "id": 9,
        "text": "Buy a ring for 80 dinars",
        "shop_id": 20,
        "item": "hawk",
        "price": 15
      },
      {
        "id": 12,
        "text": "Buy a bow for 50 dinars",
        "shop_id": 21,
        "item": "cloak",
        "price": 20
      },
      {
        "id": 15,
        "text": "Buy a mirror for 40 dinars",
        "shop_id": 22,
        "item": "water_bottle",
        "price": 3
      },
      {
        "id": 18,
        "text": "Buy a sword for 20 dinars",
        "shop_id": 23,
        "item": "bow",
        "price": 35
      },
      {
        "id": 21,
        "text": "Buy a black jewel for 90 dinars",
        "shop_id": 24,
        "item": "mirror",
        "price": 25
      },
      {
        "id": 24,
        "text": "Head south across the desert.",
        "target": "15"
      }
    ]
  },
  "474": {
    "id": "474",
    "text": "<p> Yussuf swims to the bottom of a cliff beside the river. You follow him and chat as night draws a veil of purple across the sky. As the heat of day gives way to a cold breeze, you both start to shiver and Yussuf suggests going back to the ship. You are about to dive into the river when, happening to glance up, you see the glimmer of firelight marking out a cave in the cliff face.</p><p>Yussuf mutters a prayer when you point it out to him. 'A ghoul's lair, perhaps,' he says with a shudder of unease. 'Come, let us go back.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go back to the ship.",
        "target": "375"
      },
      {
        "id": 1,
        "text": "Insist on investigating the cave.",
        "target": "407"
      }
    ]
  },
  "475": {
    "id": "475",
    "text": "<p> The sailor greets you in the name of God and walks beside you across the plaza. 'Ah, I am glad to be back in the City of Peace after my long travels,' he says. 'And on such a night, when merriment fills the air from dusk to dawn. But what of you, my friend? Your face seems a stranger to joy. Are sighs and long looks your stock-in-trade? If so, you'll find no taker for your wares in fair Baghdad.'</p><p>Despite your woes, you muster a smile at his whimsical way of speaking. 'Yesterday I was as light of heart as you, my friend,' you say, and before long you have blurted out your tale.</p><p>When you mention what the dervish said, the sailor claps you on the back and gives a whoop of jovial laughter. 'Why, these holy beggars are truly steeped in wisdom!' Seeing your blank look, he goes on, 'Surely you realize what he meant. Why, he has gifted you with the key to restoring your fortunes - and all for a mere dinar. Oh, for such a bargain to enrich my own business!'</p><p>You are getting quite tetchy by now. 'Enlighten me, O Vessel of Profundity,' you say through gritted teeth. 'In what way can I profit by the dervish's words?'</p><p>'He spoke of the stars, which guide those like myself who venture out onto the ocean in search of distant ports. You seek treasure? Then you have only to go to the docks, take ship, and sail to find your destiny.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Accompany the sailor to the docks.",
        "target": "138"
      },
      {
        "id": 1,
        "text": "Take your leave of him.",
        "target": "92"
      }
    ]
  },
  "476": {
    "id": "476",
    "text": "<p> At noon your lookout reports seeing the black sails of the pirates. They are off the starboard bow, closing like a raptor on their sluggish prey. Faintly, across the water, drift the cries of alarm from the merchant ship.</p><p>The crew waits for your orders.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "'Close in and engage the pirates.'",
        "target": "262"
      },
      {
        "id": 1,
        "text": "'Stand off and wait.'.",
        "target": "285"
      }
    ]
  },
  "477": {
    "id": "477",
    "text": "<p> You tell the Caliph the whole story. As he listens, his countenance darkens with rage. At first you feared he might not believe you, but so many elements add up. Now he understands the true source of rebellion was never his loyal subjects, but the detestable Vizier in whom he placed his trust.</p><p>'Jafar!' roars the Caliph. 'At last the hours of your worthless life have run out!'</p><p>Freezing in the act of sidling from the room, Jafar raises a knife. The blade drips with toxic green fluid. 'It is your own life that will end now, al-Rashid,' he replies.</p><p>Jafar is about to throw the knife.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "But your hand is quicker.",
        "target": "228"
      },
      {
        "id": 1,
        "text": "You have time to throw an arrow.",
        "target": "494"
      },
      {
        "id": 2,
        "text": "Use your cloak.",
        "target": "273"
      },
      {
        "id": 3,
        "text": "Leap in front of the Caliph.",
        "target": "295"
      },
      {
        "id": 4,
        "text": "Do nothing.",
        "target": "317"
      }
    ]
  },
  "478": {
    "id": "478",
    "text": "<p> You go up into the pass. Reaching a ridge of rocks, you glance back to see the others watching you nervously. Hakim gives you a wave which is obviously meant to be reassuring. It only serves to make you all the more resentful that he has sent you on ahead as bait for bandits.</p><p>Climbing cautiously among the ridges, though, you find no sign of bandits. You are returning to call the caravan on when you are overtaken by the dusk. While up on the higher slopes, you hadn't realized it was so close to sunset. Soon you are engulfed in darkness. It would be foolhardy to go any further now. You could easily trip in the dark and break your leg. But if you stay put there are other dangers - the chill of night and the wild creatures that might be even now emerging to hunt. You do not relish the idea of spending the night unsheltered in these hills.</p><p>Then you see a light. Going closer, you discover a hut perched on a crag above the pass.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Knock at the door.",
        "target": "425"
      },
      {
        "id": 1,
        "text": "Tiptoe away and bed down in the open.",
        "target": "260"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 3
      }
    ]
  },
  "479": {
    "id": "479",
    "text": "<p> Dropping a line, you make careful note of the ocean currents. A master navigator like you can read them as clearly as the stars. Having determined your position and consulted the charts, you are able to warn the captain about a coral reef that lies just a few leagues off the starboard bow. You set the course the ship must steer, and within an hour the glint of sunbeams pierces the haze. As the ship breaks clear of the enshrouding mist, every voice on board is raised in a cheer.</p><p>'That fog was nothing natural,' vows Jumail the cook.</p><p>You laugh and shake your head. 'Do not look for supernatural threats where there are none, my friend. The sea has many perils, but all of them can be handled with a calm nerve and a modicum of experience.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sail on.",
        "target": "234"
      }
    ]
  },
  "480": {
    "id": "480",
    "text": "<p> Having survived the nest of the rokh, you look for a merchant to buy the treasure you brought back.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Sell the diamond.",
        "target": "480a"
      },
      {
        "id": 1,
        "text": "Sell the jewelled key.",
        "target": "480b"
      },
      {
        "id": 2,
        "text": "Keep it.",
        "target": "113"
      }
    ]
  },
  "480a": {
    "id": "480a",
    "text": "<p> You sell it for fifty thousand dinars. Even after giving the fishermen a fair share, you are still left with a fortune - enough to make you as respected as any merchant in Baghdad. </p><p>It is time you headed home. For better or worse, your quest has reached its conclusion. Now you must settle your score with the evil Jafar.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back to Baghdad.",
        "target": "113"
      }
    ],
    "state_changes": [
      {
        "var": "diamond",
        "op": "set",
        "value": 0
      },
      {
        "var": "money",
        "op": "add",
        "value": 35000
      }
    ]
  },
  "480b": {
    "id": "480b",
    "text": "<p> You are bitterly disappointed. The key turns out to be worth only a hundred dinars. 'Now, if you had a diamond for sale...' says the jeweller. You leave his shop without hearing more.</p><p>It is time you headed home. For better or worse, your quest has reached its conclusion. Now you must settle your score with the evil Jafar.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back to Baghdad.",
        "target": "113"
      }
    ],
    "state_changes": [
      {
        "var": "jewelled_key",
        "op": "set",
        "value": 0
      },
      {
        "var": "money",
        "op": "add",
        "value": 100
      }
    ]
  },
  "481": {
    "id": "481",
    "text": "<p> The next day, the talk going around the city is all about miserly Arshad the baker. He has been claiming that a thief crept into his shop by night and stole a bag of gold he had hidden under the floor.</p><p>'Is the story true?' you ask an old spice merchant who is opening up his stall as you pass.</p><p>He snorts disdainfully. 'How should I know? Arshad is a liar as well as a cheat. At my granddaughter's wedding, we paid him for a hundred loaves and he delivered only sixty-two. His sole excuse was that this was the number of the years of the Prophet. The dog - to claim piety, while stealing from our mouths! All around the city it is well-known that Arshad is more verminous than a buffalo that has not been in water for a year. If he has been robbed, I say good luck to the thief.'</p><p>You walk away. The spice merchant's words have salved your conscience. And, indeed, Arshad's gold does feel very comfortable in your pocket.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "To the docks.",
        "target": "399"
      }
    ],
    "state_changes": [
      {
        "var": "money",
        "op": "add",
        "value": 60
      }
    ]
  },
  "482": {
    "id": "482",
    "text": "<p> Finding some henna in the cargo hold, you daub red blotches all over your face and then make sure to stumble into the captain while coughing rheumily.</p><p>'Watch where you're going, you heathen dog - ' He throws up his hands in horror. 'Ah, the plague!'</p><p>He would no doubt be happy to have you thrown overboard, but none of his crew will come near you. Putting in at a bay along the coast, he coaxes you to go ashore by giving you a little money and a water bottle. 'To make your remaining days more comfortable,' he says, making the sign of his faith.</p><p>You wait until the ship has sailed off before scouring away the spots of dye with sand and saltwater. Travelling along the coast, you take the road to Cairo.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Arrive at the city.",
        "target": "215"
      }
    ],
    "state_changes": [
      {
        "var": "mordant",
        "op": "set",
        "value": 0
      },
      {
        "var": "water_bottle",
        "op": "set",
        "value": 1
      },
      {
        "var": "money",
        "op": "add",
        "value": 10
      }
    ]
  },
  "483": {
    "id": "483",
    "text": "<p> The old man takes a coal from the fire. It does not seem to hurt him, a fact that makes poor Yussuf only tremble all the more. Plucking a blade of grass from the hillside, the old man ignites it with the coal and hands it to you.</p><p>'This taper will light your way,' he says with a sinister grin. 'But don't dawdle, for at moonrise it will burn out and if you haven't returned by then you'll be lost below ground for ever.'</p><p>With Yussuf clinging to your arm, you advance into the looming black gulf of the cave. A path leads down into the rock.</p><p>'What's that noise?' says Yussuf nervously.</p><p>You stop to turn and glare at him. 'The chattering of your teeth!'</p><p>'No,' he says, shaking his head, 'I meant that sort of scaly slithering sound accompanied by that kind of quiet gurgling and droo... droo... droo...'</p><p>'Drooling?'</p><p>Yussuf doesn't reply. He is staring with eyes as large as eggs at something beyond your shoulder. Slowly you turn, and in the wavering light of the taper you see the first threat the old man spoke of. Shambling up out of the tunnel come a horde of creatures with faces to daunt the heart of the bravest warrior.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What now?",
        "target": "200"
      }
    ]
  },
  "484": {
    "id": "484",
    "text": "<p> They file out of the room without noticing you. Hurrying over to the cushions where they were sitting, you notice the chart they spoke of is still lying there. </p><p>You realize it will not be long before they find you are missing, so you gather your things and steal out of the citadel with all haste.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Get well away from here.",
        "target": "42"
      }
    ],
    "state_changes": [
      {
        "var": "chart",
        "op": "set",
        "value": 1
      }
    ]
  },
  "485": {
    "id": "485",
    "text": "<p> The lamp makes you invisible. The braziers burn low while you move unseen among the pirates, seeing to your midnight work. Occasionally a pirate wakes up - perhaps hearing the gurgle of a throat being slit, or the snap of a breaking neck. But each time he just looks around, sees nothing but supine figures all around, and goes back to sleep.</p><p>Finally you summon the marines out of the hold. They wake the pirate chief with a kick in the ribs. His eyes open, cloudy with wine-fog for a moment, then he leaps up with a snarl: 'The Sultan's men! Up and at 'em, my lads!'</p><p>He looks around. No one moves.</p><p>'They went to sleep dead drunk,' you say to him, 'and woke up just plain dead.'</p><p>You've used up all the magic oil in the lamp of Antar, so you may as well discard it.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Gather your spoils.",
        "target": "372"
      }
    ],
    "state_changes": [
      {
        "var": "lamp_of_antar",
        "op": "set",
        "value": 0
      }
    ]
  },
  "486": {
    "id": "486",
    "text": "<p> After all this time, the hawk has learned to trust and understand you. You raise your wrist and it soars aloft, wheeling in the sky above the ship. Seagulls flutter away in panic, but the hawk has no interest in them. Its keen eyes find the black sails of the pirate ship, and it leads you on in pursuit.</p><p>At dusk you arrive at high cliffs rising at the edge of the sea. Carved into the side of the cliff are two ancient colossi with heads of lions. Between them is a vast stone slab. 'It may be a door,' says the first mate, 'but I can't see any way of getting it open.'</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You know a way.",
        "target": "437"
      },
      {
        "id": 1,
        "text": "Blow the Jericho horn.",
        "target": "457"
      },
      {
        "id": 2,
        "text": "Surely your jinni can help.",
        "target": "440"
      },
      {
        "id": 3,
        "text": "You're stumped.",
        "target": "415"
      }
    ]
  },
  "487": {
    "id": "487",
    "text": "<p> Pebbles skitter under your feet as you go racing down the slope. You cannot outrun the deadly gases pouring from the volcanic cone. Within moments you are engulfed. It feels as though a furnace has been opened right behind your back. Drawing breath to scream, you suck in a lungful of searing hot gas, and mercifully you die almost at once.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "488": {
    "id": "488",
    "text": "<p> Greek fire cannot be extinguished by water, only by wine. Luckily there is a half-full barrel right next to you. You dive in, smothering the licking flames. Your marines, hearing the commotion, swarm out of the hold and leap down to the dock with drawn swords. In seconds you are embroiled in a fight for your life against the astonished pirate band.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "One of them spits you on his sword.",
        "target": "2b"
      },
      {
        "id": 1,
        "text": "You can handle a dozen like them.",
        "target": "372"
      }
    ],
    "state_changes": [
      {
        "var": "life_points",
        "op": "add",
        "value": -1
      }
    ]
  },
  "489": {
    "id": "489",
    "text": "<p> The man leads you down a narrow alley towards a bath-house.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "You have a bad feeling about this.",
        "target": "344"
      },
      {
        "id": 1,
        "text": "A pickpocket!",
        "target": "366"
      },
      {
        "id": 2,
        "text": "You could use a good scrub.",
        "target": "387"
      }
    ]
  },
  "490": {
    "id": "490",
    "text": "<p> You have heard a tale which described just such a creature as this. In the tale, it proved an unbeatable foe because of its ability to regenerate. Every time the hero injured it, it rose into the air and hovered until its wounds had healed.</p><p>You can think of one way to prevent it doing that here.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Back off into the covered passage.",
        "target": "46"
      }
    ]
  },
  "491": {
    "id": "491",
    "text": "<p> You claw madly at thin air, but of course there is no purchase to be had there. You are too startled to scream. The ground comes up out of the darkness and slams into you with the force of a falling drawbridge. Your life is snuffed out at once.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "The End.",
        "target": "497"
      }
    ]
  },
  "492": {
    "id": "492",
    "text": "<p> You find that one of the fishermen intends to sail to Baghdad to visit his cousin, who works as a street-porter there. When he learns that you are also a native of Baghdad, he offers to take you along. 'I would welcome some company on the voyage,' he says.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Go with him.",
        "target": "113"
      },
      {
        "id": 1,
        "text": "Have one last try at finding treasure.",
        "target": "137"
      }
    ]
  },
  "493": {
    "id": "493",
    "text": "<p> As a slave you are not granted the right to enter Mecca. Instead you are given the task of guarding the caravan goods while your owner and his camel-drivers wash and shave in preparation for the rituals. </p><p>A few minutes after Hakim has left, you notice that he has left his woollen cloak in his saddlebag. Nights in the desert can get bitterly cold, and he will regret not having taken it.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Hurry after him with the cloak.",
        "target": "14"
      },
      {
        "id": 1,
        "text": "Stay with the camels.",
        "target": "170"
      }
    ]
  },
  "494": {
    "id": "494",
    "text": "<p> Even if you still have your bow, there is no time to string and draw it. Instead, you whip an arrow out of the quiver on your back and cast it at the evil vizier. </p><p>Your aim is true. The arrow impales Jafar's wrist and with a yelp of pain he drops the knife. As the Caliph shouts for guards, Jafar runs out through an arch at the back of the room.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "After him!",
        "target": "339"
      }
    ]
  },
  "495": {
    "id": "495",
    "text": "<p> You can use the lamp to turn invisible and creep off to the ship, but it would mean leaving your friends behind on the island. Steering the ship on your own would be virtually impossible. Also, there is only enough oil in the lamp for a few minutes of invisibility. After that it is useless.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "Use the lamp anyway.",
        "target": "495a"
      },
      {
        "id": 1,
        "text": "Think of something clever.",
        "target": "333"
      },
      {
        "id": 2,
        "text": "Summon your jinni.",
        "target": "355"
      },
      {
        "id": 3,
        "text": "Explore the tower.",
        "target": "377"
      },
      {
        "id": 4,
        "text": "Urge the other sailors to help you fight the shark men.",
        "target": "108"
      },
      {
        "id": 5,
        "text": "Wait until the dwarf wakes up.",
        "target": "397"
      }
    ],
    "state_changes": [
      {
        "var": "s495",
        "op": "set",
        "value": 1
      }
    ]
  },
  "495a": {
    "id": "495a",
    "text": "<p> You sneak away and with some effort manage to raise the anchor and unfurl the sails. The ship veers away from the coast. You watch with sinking heart as all sight of land vanishes in the distance. Soon your misery turns to despair, because the clouds ahead are as thick and dark as soot, and the hissing crack of lightning rolls across the sky. The sea seethes, pitch-black chopped through by crests of angry white foam.</p><p>As the clouds descend to cover you, the wind strikes with gale force, ripping at the furled sails. The ship pitches over, forcing you to cling to the mast. Waves leap like capering demons over the bows. Sea water sloshes around your feet. The rain falls as hard and heavy as a curtain of ice.</p><p>Even over the roar of the storm, you hear the great dolorous crack as the mainmast splits. It falls across the deck, sundering the spliced timbers, pulling the ship in half. You plunge into the sea, fingers scrabbling desperately to hold onto a broken plank. Water closes over your head, wrapping you in warm silent darkness.</p><p> </div> </p>",
    "options": [
      {
        "id": 0,
        "text": "What next?",
        "target": "280"
      }
    ],
    "state_changes": [
      {
        "var": "lamp_of_antar",
        "op": "set",
        "value": 0
      }
    ]
  },
  "496": {
    "id": "496",
    "text": "<p> At dusk some days later, outside the Great Mosque, you spot the dervish whose words set you on your quest. 'Ah, it's you,' he says. 'I remember you.'</p><p>'I'm Grand Vizier now,' you tell him, indicating your robe of honour.</p><p>'It's all the same to me.' He moves to go past you into the mosque.</p><p>'Wait, I didn't mean to boast. I'm just curious to know what you meant all those months ago. Did you intend that my life was governed by the stars, or to advise me to navigate across the ocean, or did you foresee other fabulous adventures?'</p><p>'None of those,' says the dervish with a delighted laugh. 'Did you think I could see the future, when God alone knows all that has happened or ever will happen?'</p><p>'Then what..?'</p><p>He points, and you look up at the canopy of stars emerging from the jade-green twilight. </p><p>'I meant only that when you reside in the City of Peace, under this glorious heaven, in the comfort and majesty of the Law - why, then you dwell always in an age of miracles. That is all.' </p><p>He goes through the door and then looks back, smiling at your dumbstruck face, and adds, 'Whatever you heard in my remarks, you put there yourself. Everyone makes their own destiny, everyone finds their own truth. When others look at you, they see a noble person dressed in fine robes of honour. But only you know whether those robes clothe the Grand Vizier - or merely the wiliest thief of Baghdad.'</p><p>And, with a wink, he turns and hobbles off.</p><p><div class=\"s3\"><a href=\"facebooklink\">- THE END -</a></div> </div> </p><img src=\"./images/filler_triumph.jpg\" alt=\"\">",
    "options": []
  },
  "497": {
    "id": "497",
    "text": "<img src=\"./images/filler_omar.jpg\" alt=\"\"><p> <em>The Moving Finger writes; and, having writ,<br/>Moves on: nor all thy Piety nor Wit<br/>Shall lure it back to cancel half a Line,<br/>Nor all thy Tears wash out a Word of it.</em></p><p>Omar Khayyam, of course, didn't foresee interactive fiction. You can indeed wind back time (by means of the Reset Page) and set out on a whole new adventure. Good luck.</p><p> </div> </p>",
    "options": []
  },
  "498": {
    "id": "498",
    "text": "<p> TEST MENU - 04-04-13 v2</p><p>For test purposes, you start with some extra items - a hawk, jewelled sword, cloak, and a black jewel.</p><p> ﻿</div> </div> <script type=\"text/javascript\"> curbit = \"\"; antidote = 0; bow = 1; chart = 2; cloak = 3; diamond = 4; harem_costume = 5; hawk = 6; indian_rope = 7; jasmine_flower = 8; jericho_horn = 9; jewelled_key = 10; jewelled_sword = 11; lamp_of_antar = 12; long_tailed_cat = 13; magic_slippers = 14; mirror = 15; prayer_mat = 16; ring = 17; sword = 18; water_bottle = 19; s355 = 20; s377 = 21; s495 = 22; conch = 23; fabric = 24; gemini = 25; hajji = 26; harem = 27; iris = 28; kismet = 29; mordant = 30; noose = 31; sesame = 32; truce = 33; zebra = 34; agility = 35; archery = 36; cunning = 37; folklore = 38; luck = 39; magic = 40; roguery = 41; seafaring = 42; streetwise = 43; swordplay = 44; wilderness_lore = 45; wrestling = 46; black_jewel = 47; golden_apple = 48; money = 49; life_points = 50; life_points_max = 51; skill_count = 52; char_chosen = 53; vars = new Array(); pages = new Array(); opts = new Array(); optnum=0; auto=0; varnames =[ \"antidote\", \"bow\", \"chart\", \"cloak\", \"diamond\", \"harem_costume\", \"hawk\", \"indian_rope\", \"jasmine_flower\", \"jericho_horn\", \"jewelled_key\", \"jewelled_sword\", \"lamp_of_antar\", \"long_tailed_cat\", \"magic_slippers\", \"mirror\", \"prayer_mat\", \"ring\", \"sword\", \"water_bottle\", \"s355\", \"s377\", \"s495\", \"conch\", \"fabric\", \"gemini\", \"hajji\", \"harem\", \"iris\", \"kismet\", \"mordant\", \"noose\", \"sesame\", \"truce\", \"zebra\", \"agility\", \"archery\", \"cunning\", \"folklore\", \"luck\", \"magic\", \"roguery\", \"seafaring\", \"streetwise\", \"swordplay\", \"wilderness_lore\", \"wrestling\", \"black_jewel\", \"golden_apple\", \"money\", \"life_points\", \"life_points_max\", \"skill_count\", \"char_chosen\", ]; joff=0; showsect=0; thischap=1; firstload=0; lastsect=\"01_15\"; nextsect=\"01_16\"; cursect=\"\"; status=0; temp=0; link=\"\"; starttimer(); </script> </p>",
    "options": [
      {
        "id": 0,
        "text": "Add 200 dinars",
        "shop_id": 33,
        "test_money": 200
      },
      {
        "id": 1,
        "text": "Start on page 1",
        "target": "1"
      },
      {
        "id": 2,
        "text": "Start on page 328",
        "target": "328"
      },
      {
        "id": 3,
        "text": "Start on page 375",
        "target": "375"
      },
      {
        "id": 4,
        "text": "Start on page 389",
        "target": "389"
      },
      {
        "id": 5,
        "text": "Start on page 473",
        "target": "473"
      },
      {
        "id": 6,
        "text": "Start on page 462",
        "target": "462"
      },
      {
        "id": 7,
        "text": "Start on page 9a",
        "target": "9a"
      },
      {
        "id": 8,
        "text": "Start on page 55",
        "target": "55"
      },
      {
        "id": 9,
        "text": "Start on page 350",
        "target": "350"
      },
      {
        "id": 10,
        "text": "Start on last page 496",
        "target": "496"
      }
    ]
  }
};
