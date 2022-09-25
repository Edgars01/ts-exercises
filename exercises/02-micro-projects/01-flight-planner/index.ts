import * as fs from "fs-extra";
import * as prompts from "prompts";

const fetchFlights = async () => {
  const flights = await fs.readFile("./flights.txt", "utf8");
  console.log(flights);
  return flights;
};

(async () => {
  const flights = await fetchFlights();

  const response = await prompts({
    type: "select",
    name: "action",
    message: "What would you like to do?",
    choices: [
      { title: "Display a list of cities", value: 1 },
      { title: "Exit", value: "#" },
    ],
    initial: 0,
  });

  console.log(response);
})();
