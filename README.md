# rock-paper-scissors
This project is a basic game of rock, paper, scissors played in the console. The project is entirely done in javascript, which is my first project to do so. The layout is quite simple. I began by creating an array that is then called in a function to randomly select the computers play. Then I create the structure for each round of rock paper scissor, which includes a player and computer score incrementor based upon the winner of the round. Finally, I created a game function which loops the round function until the best of five games is played. Each round the computers choice, the round message, and the current score are displayed. Then, once the loop is completed, the end of game function is called, which will display a final message to the player declaring victory or defeat. 

As this is my first project utilizing javascript, I had quite a few hiccups. First, narrowing down the round details and finding a way to keep a score took me quite a bit of time. Finally though, I think I created a function that is simple, clean, and as efficient as possible. In this function however, to increment the player and computer scores, I had to "jerry-rig" it a little bit. Because the playerScore and computerScore variables were being called twice, whoever won the round would get 2 points instead of one, so I changed the increment to .5 to achieve my goal.

After this, it took me a while to figure out how to get the round to function inside of the game. Ultimately I figured out that I can declare the variables globally (I was having issues only declaring them locally as there were three functions that needed the choice and score variables) and then assign the desired value in the function itself locally. This allowed me to get the player choice prompt to appear after each round, while still being able to call this variable in other functions. The similarly occurred with the computer choice, as the variable was assigned a value globally, it ceased to randomly assign for the rest of the loop (at least it was easy to win!).

In the end, I had a lot of fun creating this project and was able to practice my research methods, especially as I was attempting to figure out which loop iteration to use and the correct syntax for it. After completing this project, I have a big boost of confidence and am excited to push onward to the finish the rest of the foundations course.