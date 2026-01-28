import {achievementUnlocked} from "./achievement-module.js";
// SCRIPT FOR MY FINAL PROJECT DEMO
// This is the main script.

// Project Demo Name:
// Arithmetic Acheivement
//
// Goal of the Game:
// Work on your math skills!
// -- if you feel like you were faster at math in high school, 
// -- it's because you were! Just get back to drilling it.
// To gamify drilling arithmetics, let's add TONS of ACHIEVEMENTS!

// Create an achievement module system, and import the achivements here.
// In the module, create an achievement class.
// Every achievement should be built off this class.
// Achievements will be built as objects with certain parameters.


// On Window Load, do the following...
//Listen for window load the jQuery way
$(document).ready(function () {

    //Define global variables:
    var answer;

    //Create Start Button:
    $('#startBtn').click(() => {
        setSelect();
        $('#userInput').focus();
        // $('#startBtn').hide();
    });

    //Menu for Sets
    $(".set").click(function() {
        $(this).toggleClass("selected");

    });

    //Create Set Selection Program:
    //Which sets contain the "selected" class?
    function setSelect() {
        var selectedSets = $(".set.selected");
        let chosen = Math.floor((Math.random()*(selectedSets.length)));
        try {
            switch(selectedSets[chosen].id) {
                case 'addSet':
                    addEquation();
                    break;
                case 'subSet':
                    subEquation();
                    break;
                case 'mltSet':
                    mltEquation();
                    break;
                case 'divSet':
                    divEquation();
                    break;
                default:
                    console.log("something went wrong");
                    break;
            }
        } catch {
            console.log("no set selected");
        }
    }


    //Random addition equation builder:
    function addEquation() {

        //Clear & focus the input field:
        $('#userInput').val('');
        $('#userInput').focus();

        //First choose a number:
        var num1 = Math.floor((Math.random()*13));
        
        //Choose a second number:
        var num2 = Math.floor((Math.random()*13));
        
        //Edit the equation span to display the equation:
        $('#equation').html(`${num1} + ${num2}`);
        
        //Compute and save the expected result:
        answer = num1 + num2;

    }
    //Random subtraction equation builder:
    function subEquation() {

        //Clear & focus the input field:
        $('#userInput').val('');
        $('#userInput').focus();

        //First choose a number:
        var num1 = Math.floor((Math.random()*13));
        
        //Choose a second number:
        var num2 = Math.floor((Math.random()*13));
        
        //Edit the equation span to display the equation:
        $('#equation').html(`${num1} - ${num2}`);
        
        //Compute and save the expected result:
        answer = num1 - num2;

    }
    //Random multiplication equation builder:
    function mltEquation() {

        //Clear & focus the input field:
        $('#userInput').val('');
        $('#userInput').focus();

        //First choose a number:
        var num1 = Math.floor((Math.random()*13));
        
        //Choose a second number:
        var num2 = Math.floor((Math.random()*13));
        
        //Edit the equation span to display the equation:
        $('#equation').html(`${num1} x ${num2}`);
        
        //Compute and save the expected result:
        answer = num1 * num2;

    }
    //Random multiplication equation builder:
    function divEquation() {

        //Clear & focus the input field:
        $('#userInput').val('');
        $('#userInput').focus();

        //First choose a number:
        var num1 = Math.floor((Math.random()*13));
        
        //Choose a second number:
        var num2 = Math.floor((Math.random()*13));
        
        //Edit the equation span to display the equation:
        $('#equation').html(`${num1} ÷ ${num2}`);
        
        //Compute and save the expected result:
        answer = num1 / num2;

        //Clean up the answer to significant digits
        if (answer.toFixed(10) - answer.toFixed(2) > 0) {
            console.log(answer.toFixed(6) - answer.toFixed(2));
            console.log(answer);
            answer = answer.toFixed(2);
        }
        if (answer === Infinity) {
            setSelect();
        }

        console.log(answer);
    }

    //Receive input from the question Form:
    $('#qForm').on('submit', function(e) {
        //Prevent the default of sending page
        // to the form action
        e.preventDefault();

        //Compare user input with answer
        var userInput = $('#userInput').val();
        
        if (userInput == answer) {
            console.log("Correct!");
            // Refresh the equation:
            setSelect();
        } else {
            console.log("False.");
        }
    })


    //Add the effect of the Achievement button:
    $('#aceButton').on('click', () => {
        achievementUnlocked();
    })

});
