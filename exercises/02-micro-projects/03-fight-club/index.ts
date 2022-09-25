import * as prompts from "prompts";
import { Mage, Archer, Warrior } from "./hero";

let character: Mage | Archer | Warrior;
let opponent: Mage | Archer | Warrior;

async function fight() {
  const condition = true;
  while (condition) {
    const { attack } = await prompts([
      {
        type: "select",
        name: "attack",
        message: "Your turn",
        choices: [
          { title: `Attack`, value: '' },
          { title: 'Use special power', value: '' },
        ],
      },
    ]);
    console.log('Fighting')
  }
  console.log('Done fighting')
}

async function chooseOpponent() {
  const { race } = await prompts([
    {
      type: "select",
      name: "race",
      message: "Choose your opponent",
      choices: [
        { title: 'Lord Voldemort', value: 'mage' },
        { title: 'Legolas', value: 'archer' },
        { title: 'Thor', value: 'warrior' },
      ],
    },
  ]);
  console.log('In chooseOpponent function')
}

async function createHero(race: string) {

  const { name } = await prompts([
    { type: "text", name: "name", message: "Enter character name" }
  ]);

  console.log('In createHero function')
  //character = new Mage('Dumbledore')
  //console.log(`NAME:${character.name}`)
}

async function app() {
  const { race } = await prompts([
    {
      type: "select",
      name: "race",
      message: "Welcome to fight club. Choose your fighter",
      choices: [
        { title: 'Mage', value: 'mage' },
        { title: 'Leave fight club', value: false }
      ],
    },
  ]);
  if (race) {
    console.log(race);
    console.log(`You chose:`)
    await createHero(race)
  } else {
    return
  }
}

app();
