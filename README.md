# Mail & Gioco dei Dadi

## Project 1: Mail

This script asks for the user's email address, then it checks it against a list of allowed addresses and prints the appropriate message based on the result of the check.

1. We define an array of allowed email addresses  
2. We use a prompt to ask for the user's email address and save it as a variable 
3. We define a variable that is "false" by default
4. We use a for loop and an if condition to go through each value of the array and check whether it matches the user input. If such a value is found, the variable from point 3 is changed to "true"
5. We print different messages based on whether the variable is true or false


## Project 2: Game of Dice

This scripts generates a random integer from 1 to 6 for both the user and the computer. Then it selects the winner based on who rolled the highest number.

1. We generate a random integer from 1 to 6 for the user and save it as a variable
2. We generate a random integer from 1 to 6 for the computer and save it as a variable
3. We use an if condition to print a different message based on whether the user wins, loses, or ties