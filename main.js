// Credit and thanks to Sulaimon Olaniran who actually coded this!

//this would be the object shape for storing the questions  
//you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "Was does HTML stand for ?",
        optionA: "Hypertext Markup Language",
        optionB: "Hypervexed Madeup Language",
        optionC: "Hypertext Markdown Language",
        optionD: "Hyper Test Markup Language",
        correctOption: "optionA"
    },

    {
        question: "What's an example of semantic HTML ?",
        optionA: "div",
        optionB: "span",
        optionC: "inside",
        optionD: "main",
        correctOption: "optionD"
    },

    {
        question: "In CSS how do you make a 3D layout ?",
        optionA: "display: block",
        optionB: "display: grid",
        optionC: "display: flex",
        optionD: "display: inline-flexbox",
        correctOption: "optionB"
    },

    {
        question: "How do you download a repo using Git?",
        optionA: "git pull",
        optionB: "git fetch",
        optionC: "git clone",
        optionD: "git add",
        correctOption: "optionC"
    },

    {
        question: "How do you make flex items vertical ?",
        optionA: "flex-flow",
        optionB: "flex-wrap",
        optionC: "flex-down",
        optionD: "flex-direction",
        correctOption: "optionD"
    },

    {
        question: "How do you import a javascript file into your html ?",
        optionA: "link href= ...",
        optionB: "script url= ...",
        optionC: "script src= ...",
        optionD: "link url= ...",
        correctOption: "optionC"
    },

    {
        question: "In Bootstrap, what class allows children to flex ?",
        optionA: "row",
        optionB: "col",
        optionC: "flex",
        optionD: "onions",
        correctOption: "optionA"
    },

    {
        question: "Which method would successfully create a variable in CSS ?",
        optionA: ":var --someVar",
        optionB: ":root {--someVar}:",
        optionC: ":root { --someVar: ... ;}",
        optionD: ":define {someVar: }",
        correctOption: "optionC"
    },

    {
        question: "Which one of these data types is NOT a primitive ?",
        optionA: "number",
        optionB: "object",
        optionC: "string",
        optionD: "undefined",
        correctOption: "optionB"
    },

    {
        question: "How would you write an array ?",
        optionA: "let someArray = [1,'2','three']",
        optionB: "const = array[1,2,3]",
        optionC: "let = someArray('1','2','3')",
        optionD: "let = someArray[1,2,3]",
        correctOption: "optionA"
    },

    {
        question: "Why would you use a function over a plain if-else ?",
        optionA: "Que?",
        optionB: "A function does something more",
        optionC: "A function can be called whenever you need it",
        optionD: "A function is immutable, thus protecting the if-else",
        correctOption: "optionC"
    },

    {
        question: "How do we write an if statement ?",
        optionA: "if {doThis} {else} doThat;",
        optionB: "if (someVar == someValue) { doThis; }",
        optionC: "if {(someVar != someValue) doThis; }",
        optionD: "if someVar === someValue; { doThis }",
        correctOption: "optionB"
    },


    {
        question: "In CSS, what does vh stand for ?",
        optionA: "virtual house",
        optionB: "virtual height",
        optionC: "vertical height",
        optionD: "viewport height",
        correctOption: "optionD"
    },

    {
        question: "How would you style an ID in CSS ?",
        optionA: " #id ",
        optionB: " .id ",
        optionC: " @id ",
        optionD: " ;id ",
        correctOption: "optionA"
    },

    {
        question: "If you were to use arrayName.length, how would you access the first item ?",
        optionA: "arrayName[0]",
        optionB: "arrayName[-1]",
        optionC: "arrayName[1]",
        optionD: "arrayName[0][1]",
        correctOption: "optionA"
    },

    {
        question: "If you wanted to store a variable that won't change what would you use ?",
        optionA: "concst",
        optionB: "let",
        optionC: "const",
        optionD: "var",
        correctOption: "optionC"
    },

    {
        question: "How would you print something in JavaScript ?",
        optionA: "console.log('print')",
        optionB: "print.log 'this'",
        optionC: "log...this!!",
        optionD: "console.log[print]",
        correctOption: "optionA"
    },

    {
        question: "If your code has a typo error, what is this called ?",
        optionA: "Logic error",
        optionB: "Bad eyesight",
        optionC: "SyntaxError",
        optionD: "The computer made me do it",
        correctOption: "optionC"
    },

    {
        question: "What is the purpose of a switch statement ?",
        optionA: "Saves time when switching between variables",
        optionB: "Makes functions reusable",
        optionC: "Switches variables on or off",
        optionD: "Quicker than multiple if else statements",
        correctOption: "optionD"
    },

    {
        question: "What's wrong with this line of code: const userGuess === Number(guessField.value); ?",
        optionA: "Incorrect assignment operator",
        optionB: "Dunno",
        optionC: "Missing {} brackets",
        optionD: "Should be let not a const",
        correctOption: "optionA"
    },

    {
        question: "How might you repeat rows or columns in a grid ?",
        optionA: "repeat(1fr)",
        optionB: "repeat(3 1fr)",
        optionC: "repeat(1fr 1fr 1fr)",
        optionD: "repeat(3, 1fr)",
        correctOption: "optionD"
    },

    {
        question: "What must an element with a relative positioning applied, also need to work ?",
        optionA: "padding",
        optionB: "top",
        optionC: "display: ",
        optionD: "absolute",
        correctOption: "optionB"
    },

    {
        question: "What is a const variable ?",
        optionA: "A box of feather dusters",
        optionB: "A container that holds an immutable value",
        optionC: "A variable that changes form, like an amoeba",
        optionD: "A container with a mutable value",
        correctOption: "optionB"
    },

    {
        question: "How would you convert a string to a number ?",
        optionA: "parse()",
        optionB: "number()",
        optionC: "parseInt()",
        optionD: "Pass",
        correctOption: "optionC"
    },

    {
        question: "What is the output of this return: return; ?",
        optionA: "a value",
        optionB: "undefined",
        optionC: "null",
        optionD: "pizza",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}