---
title: Play to Earn Update
date: 2021-08-04T23:09:46.106Z
---
So, in the past 2 weeks since I've written my thoughts on Axie & Play to Earn models, I've bought in to the hype. I've personally had trouble working/focusing the past few weeks because of my tendency to obsess over things. 

Even prior to this, I have been having trouble focusing and this just made it like 2x worse. Hopefully, by writing this down, I'd get to focus more.

I have yet to play on Axie, but in the meantime, I've "played" on:

\- Cryptoblades

\- My DeFi Pet

\- Dungeonswap

\- Cryptozoon

Playing Cryptoblades and Cryptozoon retriggered my plans from a decade ago that I wanted to build a browser-based game. I've played dozens of those in the span of the past decade. Urbandead, Travian, among other things.

My thinking was that, I can build the game on the browser and add on mobile-based/interactive interfaces later on but still building on top of the same server/mechanics.



The game that I want to build would have:

##### Game Map

Map-based exploration - maybe use gas to move around? stamina accumulation which gets used per action? 

Something like the following progression:\
starting area - path/battleground (tutorial, free) - small town - path/battleground - second town - branch off to multiple paths/battlegrounds - themed cities. 

The themed cities can be the starting city of different classes. Think Ragnarok.

Battlegrounds can be level-locked so we get some progression. Or it can be free exploration, but trying to move forward will risk you being attacked without an option to flee.

Rested status will apply for 3 matches after coming from town. Fighting while rested will increase % win chance. 

Teleport between towns can be natural sink for in-game token.

Towns can have NPCs that will give quest. We'll have to adjust quest payouts to take into account the total actions needed to finish the quest (including movement gas fees) and it should always be at least $1.5 equivalent in in-game token.

There will be stamina; and movement & fight costs different staminas. Higher level characters will recover faster and have bigger stamina pool.



##### Creating a character

Allocate starting stats, customize the look, give a name, then mint character. $20 on-chain token equivalent?

Maximum 4 characters?

Starting weapon will be random mint but is unsellable.



##### Weapons/Classes

We can go with FF route and be able to change class based on weapon type. 

Weapon stats:

\- Type - will dictate class

\- Rarity - 1\* -> 5\*

\- Power level - ala cryptoblades

\- Upgrade Level - +0 to +10, fixed addition to power level in increasing increments; +1 upgrade = +10 power, +2 upgrade = +30 power, etc. Lesser chance of success as you progress, no penalty on failure.

\- Ideal range - CQC, Polearms, Ranged, it can be applied as a % power reduction if fighting in non-optimal range

\- Element - can have interplay with battle weather; long range & medium range lightning is stronger while raining but will have 50% less sneak chance, fire is weak when windy and rainy but is stronger when sunny but has penalty if CQC weapon, CQC water is stronger when sunny (because it cools down the wielder, reducing fatigue)

\- Sneak - "You can deal deadlier damage if you're able to sneak in from closer." If engaging from hidden, there can be sneak chance: 50%/70%/90% for CQC/PA/RA respectively. If sneak is success, sneak bonus can be 90%/70%/50% for CQC/PA/RA.



##### Fights & Skills

###### Option 1

3 turns battle with 3 actions per turn: fight, skill, flee\
Pre-program the actions prior to the fight. The fight will be resolved without any real-time interactions. Enemy will never flee. Kind of like mybrute, but with more control.

This will likely be more expensive in terms of gas fees as the EVM will have to resolve 3 turns. Or this can be done on server, and then the results will be submitted to EVM so it's cheaper.

Presentation - pre-prepared animation for the attack/skill/flee based on the class of the user. Pre-prepared animation for the enemy's version.

###### Option 2

When you engage in battle, there will be starting conditions:\
engaging distance, weather, visibility/cover, etc.\
Ultimately, all of these factors will affect win percentage. You can change which weapon to use before fighting.\
Actual fight is just one-time resolution based on this win percentage.

Critical Win & Lose happens 1% of the time. Critical win gives you additional loot.

Presentation - pre-prepared animations for win/lose/near win/near lose/critical win/critical lose

##### Skills

With option 1, skills will require a bit more work balancing.

With option 2, skills can add different percentages of win rate at the cost of in-game token (ala Dungeonswap)

##### Death

Pay within the timer or perma-death? Resurrection fee? Might be interesting, but loss aversion will really take hold. Especially with character customization.

##### Monsters

Monsters in battlegrounds will respawn periodically (every 30 minutes?). When defeated, they will drop loot that can be turned in to adventurer's guild house.

Loot items can be common/uncommon/rare drops which apply a multiplier to the loot value. Rare loot items can be used for forging and/or traded in in-game token market.

##### Forging Weapons

You can pay blacksmith outright using on-chain token and/or use rare loot items. Using rare loot items will affect % chance for higher rarity weapons up to a ceiling %.

##### Upgrading Weapons

Give enchanter another weapon to feed to the host weapon. Requires in-game token

##### Payout

In-game token and monster loot is cashed in from adventurer's guild house. They have a holding period of 7 days in case the quest giver has any issues with the quest completion (to flavor locked stake period). Or this can be commissioning a merchant to sell your loot your in-game token for foreign currency (on-chain token)

###### Mysterious Dungeon (in central town)

Ala Dungeonswap, to serve as token sink. This only accepts on-chain token.

##### Party Grind

This can be implemented as the staking of the Character & Weapon NFTs in a specific timeframe. Class lineup will affect win rates & return percentages. Grind spots will have similar attributes that weapon lineup can match with to maximize return. You can recruit a friend's character as helper for a small in-game token fee which pays out 80% to friend. During this time, friend's character will not be available for other help.

##### City Defense

Every week, a town will be under raid by an unspecified enemy. Players has to be in this town to participate in the defense. During the raid, characters and weapons will be locked. Raid rewards will depend on character power contribution. Mixed class party will get bonus.