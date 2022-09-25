# Flight Planner

Write a console program that reads in a file containing flight destinations from various cities, and then allow the user to plan a round-trip flight route.

The initial flight data come from a file named flights.txt, which has the following format:

- Each line consists of a pair of cities separated by an arrow indicated by the two character combination ->, as in:
  - New York -> Anchorage
- The file may contain blank lines - you should just ignore these

Your program should:

- Read in the flight information from the file and store it in an appropriate data structure;
- Display the complete list of cities;
- Allow the user to select a city from which to start;
- In a loop, print out all the destinations that the user may reach directly from the current city, and prompt the user to select the next city;
- Once the user has selected a round-trip route (i.e., once the user has selected a flight that returns them to the starting city), exit from the loop and print out the route that was chosen;

## Bonus

Modify your application in a way that there is a possibility to add flights as an admin user also.
