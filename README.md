# Calculator
I create a calculator with tehnologies like JS,HTML and CSS.
In the HTML file I create the main content with all buttons and the message where the operations will be shown.
In CSS I styled the page and the buttons a little.
In js follows the more difficult part where: 

Step 1: 
We select the elements of interest:
-the numbers that the user clicks (from 0 to 9)
-the operations that the user clicks
-the = character
-the space where the result will be displayed

Step 2:
We attach event listeners to clicks on the following elements:
-the numbers that the user clicks (from 0 to 9)
-the operations that the user clicks
-the = character

Step 3:
We create some global variables, which we want to be able to be accessed and modified anytime and from anywhere:
-firstNumber
-secondNumber
-startBuildingSecondNumber
-operation

Step 4:
We create the function to construct a number. This function will be executed every time a user clicks on a button, receiving as a parameter the number that was clicked. The function will do the following:
-depending on the value of startBuildingSecondNumber, we build the first or second number
-the construction of a number is done by multiplying the previous value by 10 and adding the new figure
-the new number is displayed on the screen

Step 5:
We create the function that will be executed when an operation is clicked:
-sets the value of startBuildingSecondNumber to true, as the second building number follows
-sets the value of operation
-clears the value displayed on the screen

Step 6:
We create the function that will be executed when = is clicked. The function takes no parameters and does the following:
-depending on the value of operation, we apply the operation between the two numbers formed, saving the result
-we display the result on the screen
-we reset the global variables (we give them their initial values), to resume the process at the next clicks.

<img width="617" alt="Screenshot 2024-03-12 at 16 21 16" src="https://github.com/catarovanca/Calculator/assets/80543258/a4a7a1b4-b571-42ab-a2ac-e6bc9887a23a">


