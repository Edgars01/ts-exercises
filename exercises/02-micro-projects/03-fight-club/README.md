# Fight club
### The first rule of Fight Club is: you do not talk about Fight Club.

# Description
The goal of this task is to create a simple fighting game.

# Setup
After making a copy of this repository, open it in your code editor and type `npm install` in terminal.

To start the game type `npm start` in terminal.
# Rules
## In `hero.ts` file
### You should create a Hero class and it should:

- receive `name`, `maxHealth` and `damage` as parameters.

- have `name`, `maxHealth`, `health` and `damage` properties.

- have `attack()` method which returns `damage`

- have `receiveDamage()` method which decreases `health` by given `damage` (external value, not from Hero class parameters and properties)

### You should create Warrior class and it should:

- extend Hero class.

- receive `name` as parameter.

- pass `name`, maxHealth `220` and damage `40` to Hero class by using `super()` in constructor.

- have `specialAttack` property with value `'health +40, damage 20'`

- have `useSpecialAttack()` method which increases `health` by `40` and returns `20` `damage`

- not increase `health` over `maxHealth` in `useSpecialAttack()` method

### You should create Archer class and it should:

- extend Hero class.

- receive `name` as parameter.

- pass `name`, maxHealth `200` and damage `30` to Hero class by using `super()` in constructor.

- have `specialAttack` property with value `'health +50, damage 20'`

- have `useSpecialAttack()` method which increases `health` by `50` and returns `20` `damage`

- not increase `health` over `maxHealth` in `useSpecialAttack()` method

### You should create Mage class and it should:

- extend Hero class.

- receive `name` as parameter.

- pass `name`, maxHealth `200` and damage `30` to Hero class by using `super()` in constructor.

- have `specialAttack` property with value `'health +60, damage 0'`

- have `useSpecialAttack()` method which increases `health` by `60` and returns `0` `damage`

- not increase `health` over `maxHealth` in `useSpecialAttack()` method

## In `index.ts` file

### You should edit `app` function and it should:

- offer user all available fighter options: Warrior, Mage and Archer
- tell user which fighter race was chosen

### You should edit `createHero` function and it should:

- assign new `Mage`, `Archer` or `Warrior` class to `character` variable with the users picked name depending on which race the user chose in previous prompt

- show user information about the newly created character

- call `chooseOpponent` function

### You should edit `chooseOpponent` function and it should:

- assign new `Mage`, `Archer` or `Warrior` class to `opponent` variable with the given names depending on which race the user chose in prompt

- show user information about the newly created opponent

- call `fight` function

### You should edit `fight` function and it should:

- keep the fight going while character's or opponent's health is larger than 0

- let the user choose between normal and special attack each turn

- attack character each turn with opponent's attack method

- show user information about remaining health of character and opponent

- show information about winner, when one of the fighters loses all health

### You should create `randomNumber` function and it should

- return a number between 0 and 100

- be used in `fight` function to determine, if opponent uses `attack()` or `useSpecialAttack()` methhod. If returned number is less than 25, use special attack

## Knockout round (For fun)

Upgrade the fighters with other speacial powers.

Make it possible to choose difficulty levels.

Let the user play with the same character multiple times. Maybe add levels and experience to heroes.

Get crative and share your result in the CODELEX circle :)
