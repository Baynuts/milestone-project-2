
# README - Simon Memory Game - Second Milestone

## Table of Contents

- [Description](#Description)
- [UX](#UX)
- [Wireframe](#Wireframe)
- [Features](#Features)
- [Technologies](#Technologies)
- [Tools](#Tools)
- [Deployment](#Deployment)
- [Testing](#Testing)
- [Credits](#Credits)


## Description

This is a recreation of the famous Simon game that was first released in 1978. It is a simple memory game that displays four different coloured corners which are lit in a random sequence. The player then attempts to copy the sequence played by the game. Each level adds one additional light to the sequence up to a maximum of 20 when the game is completed.

## UX

This game has been created as a homage to the original game produced by Milton Bradley. The design of the game has come from the original, but I did not want to use retro fonts or make the game look too close to the original. Instead I have tried to bring the game up to date using nice clean fonts, better colours and a simple intuitive display and console. After researching the original and various online versions I decide that the use of an on button and the strict button were complicated additions that did not add anything to the playability of the game I have therefore created my version without any of these original features.

The logic of the application is as follows:
1.	Game begins
    -	User presses the start button to begin game
    -	Program creates two arrays one for the game sequence and one to hold the player sequence
    -	A random order is created and applied to the game sequence array
    -	Easy level is set as default
    -	Turn counter is set to 0
    -	Program check to see if the game has been played before and if there is a previous high score saved in local storage

2.	The game begins by reading the sequence array and converting the value to the correct light, 1 for red, 2 for green, 3 for blue, 4 for yellow. 
    -   Each colour has a different sound associated with it which is played at the same time as the light flashes.		
3.	The game pauses to allow the player to enter their value 
    -	When the user clicks a colour the value is checked against the sequence arra
    -	If the value is correct the game continues to play the first and second values in the array
    -	This is then checked against the array and the game continues to add one level to the game for a maximum of 20 levels when the game is completed or until the player enters the sequence wrong and the game is over.
    -   If the player gets the order wrong, all the lights flash and the end game sound is played.
    -	The high score is updated as the game is played and is stored both in the holder at the bottom of the console and also in the local storage so that it can be recalled at a latter date.
4. When the player has finished their game an alert box pops up on the screen and allows them to start again.


## Wireframe

Can be viewed @ 
https://baynuts.github.io/milestone-project-2/assets/images/simon-wireframes.jpg
      
## Features

#### Low load time
By choosing not to ease production by using frameworks such as Bootstrap or libraries such as JQuery the file size is very small and therefore loads exceedingly quick. 
#### Responsive design
Even without the use of Bootstrap the game is playable on a variety of devices and dynamically adjusts
#### Choice of level
The game has three different levels that can be chosen either at the beginning of the game or changed mid game. The levels are indicated as 1, 2, 3 and relate to easy, normal and hard. The speed the game flashes the sequence is increased with level. Easy is set as default for users but is easily changeable.
#### Hi-score
The hi score feature updates as the game is played, it is also held in local storage for easy recall if returned too.
#### Audio
Audio files are included in the file structure so there is no need to waste any additional bandwidth downloading each time


## Technologies

#### HTML5
The basic layout of the page has been created using HTML, I have tried to make it as simple as possible and use as little code as possible. This is showing best practice and also helps to make the page load faster.
#### CSS
The HTML has been styles using a separate CSS file. I have not used a framework such as Bootstrap as I felt that this was unnecessary in a simple game. The fact that I have created all of the CSS also helps with loading speeds. If I had used a framework this would have greatly increased the size of the project and it would have had to load all the unnecessary files before rendering. 
The CSS file has enough styles to make it responsive for desktop, tablet and mobile. I have used the ID tag for the majority of the work in the file keeping it easy to read and logical. 
The only additional resource that I have used is a Google font called Titillium which I used for the main Simon logo.
#### JavaScript
I have used Vanilla JavaScript to make the game function. I did consider using JQuery but again I felt it unnecessary to increase the size of the program by importing needless files when it could be created easily using standard JavaScript. I have used a few different styles in the JavaScript file to demonstrate my knowledge. The legacy style and the newer arrow functions have both been implemented in different parts.
At the beginning of the file I have created the standard variables using let instead of var as is the preferred method, following these I have created the constants for all of the HTML elements and also the sound files. I have then structured it so that all of the event handlers are together and in a logical order to ease reading the code. Finally all of the methods / functions are kept together at the bottom of the file.
I have also made use of the local storage function in JavaScript so that the hi score can be retained in the browser and then recalled at a later date.

## Tools

* VS Code
* Audacity
* Google Chrome
* Github
* Jasmine
* Audacity
* W3C Validator
* Adobe Fireworks


## Deployment

The code can be viewed using GitHub pages: https://baynuts.github.io/milestone-project-2/.
 
While testing I have come across a bug that occurs on certain machines. If the program starts to flash more than one corner at a time you may need to reset your browser cache. To reset your cache press (Shift + F5) and this should cure the problem.


## Testing

Testing has completed using the usual W3C validator, Google Chrome Developer and Jasmine using the follwing code.

```
describe("Simon Jasmine Testing", function() {

        describe('check each variable on start of game - ', function() {

            it('hasWon should return false', function() {
                startGame();
                expect(hasWon).toBe(false);
            });
    
            it('numberOfTurns should return 0', function() {
                startGame();
                expect(numberOfTurns).toBe(0);
            });
    
            it('gamesNumberOfTurn should be 1', function() {
                startGame();
                expect(gamesNumberOfTurn).toBe(1);
            });
    
            it('speed of game should be 800', function() {
                startGame();
                expect(speed).toBe(800);
            });  

            it('gameOrder is of length 20', function() {
                startGame();
                expect(gameOrder.length).toBe(20);
            });  

            it('playerOrder is array of length 0', function() {
                startGame();
                expect(playerOrder.length).toBe(0);
            });  

        }); 

        describe('check that lights function properly - ', function() {

                it('should return colour of top-left as lightRed', function() {
                    startGame();
                    red();
                    expect(window.getComputedStyle(document.getElementById("top-left")).backgroundColor).toEqual("rgb(255, 21, 0)");
                });

                it('should return colour of top-right as lightGreen', function() {
                    startGame();
                    green();
                    expect(window.getComputedStyle(document.getElementById("top-right")).backgroundColor).toEqual("rgb(60, 255, 56)");
                });

                it('should return colour of bottom-left as lightBlue', function() {
                    startGame();
                    blue();
                    expect(window.getComputedStyle(document.getElementById("bottom-left")).backgroundColor).toEqual("rgb(0, 164, 255)");
                });

                it('should return colour of bottom-right as lightYellow', function() {
                    startGame();
                    yellow();
                    expect(window.getComputedStyle(document.getElementById("bottom-right")).backgroundColor).toEqual("rgb(250, 255, 43)");
                });

        });
    
});    
```

## Credits

*	I received inspiration for this project from the electronic memory 'Simon' produced by Milton Bradley
*	I received advice from my mentor, Maranatha Ilesanmi

------------------------------------------------------------