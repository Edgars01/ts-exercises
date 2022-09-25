import * as prompts from "prompts";

const moviesInStore = [{ name: "Godfather", rating: 5 }];

async function rentVideo() {
  const { choices, name } = await prompts([
    {
      type: "text",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "multiselect",
      name: "choices",
      message: "Which ones do you want?",
      choices: moviesInStore.map((movie) => ({
        title: movie.name,
        value: movie,
      })),
    },
  ]);
  console.log(
    `Oh, ${name}. ${choices.map((c) => c.name).join(", ")} is a good choice.`
  );
}

async function returnVideo() {
  const { name, movie } = await prompts([
    {
      type: "text",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "movie",
      message: "Which one would you like to return?",
      choices: moviesInStore.map((movie) => ({
        title: movie.name,
        value: movie,
      })),
    },
  ]);
}

async function fillVideoStore() {
  let addMore = true;
  while (addMore) {
    const { movieName, movieRating, more } = await prompts([
      { type: "text", name: "movieName", message: "Enter movie name" },
      { type: "number", name: "movieRating", message: "Enter movie rating" },
      { type: "confirm", name: "more", message: "Would you like to add more?" },
    ]);
    addMore = more;
  }
}

async function app() {
  const { user } = await prompts([
    {
      type: "select",
      name: "user",
      message: "Welcome to our video store. Who are you?",
      choices: [
        { title: "User", value: "user" },
        { title: "Admin", value: "admin" },
        { title: `I don't want to be here. Let me go`, value: false },
      ],
    },
  ]);
  if (user === "admin") {
    console.log("Hello Admin. I guess you're here to fill our store.");
    await fillVideoStore();
  } else if (user === "user") {
    console.log("Hello User");
    const { intent } = await prompts([
      {
        type: "list",
        name: "intent",
        message: "What do you want to do?",
        choices: [
          { title: "Rent a video", value: "rent" },
          { title: "Return a video", value: "return" },
        ],
      },
    ]);
    intent === "rent" ? await rentVideo() : await returnVideo();
  } else {
    console.log("Okay. Thanks and Bye!");
    return;
  }

  app();
}

app();
