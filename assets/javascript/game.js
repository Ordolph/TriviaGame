// Questions object array
let questions = [
    {
        question: "Pokemon, a series that changed many childhoods now features over 31 entries. When were the first entries in North America, Pokemon Red and Blue released?",
        answer1: "1995",
        answer2: "1996",
        answer3: "1998",
        answer4: "2000",
        correctAnswer: "1996",
        gif: "assets/images/Pokemon.webm",
        soundClip: "assets/sounds/Pokemon.mp3",
        funFact: "With the latest Generation of Pokemon in Pokemon Sun and Moon, there are now 807 unique Pokemon."
    },

    {
        question: "What is the best selling video game of all time?",
        answer1: "Tetris",
        answer2: "Wii Sports",
        answer3: "Grand Theft Auto V",
        answer4: "Minecraft",
        correctAnswer: "Tetris",
        gif: "assets/images/Tetris.webm",
        soundClip: "assets/sounds/Tetris.mp3",
        funFact: "Having been released originally in 1986, Tetris has been available on nearly every video game console since, as well as mobile phones, and has sold over 170 Million copies. Grand Theft Auto V however was the first video game to make over $1 Billion in sales."
    },

    {
        question: "What is the best selling video game console of all time?",
        answer1: "Nintendo Wii",
        answer2: "Nintendo Game Boy",
        answer3: "Xbox 360",
        answer4: "Playstation 2",
        correctAnswer: "Playstation 2",
        gif: "assets/images/PS2.webm",
        soundClip: "assets/sounds/PS2.mp3",
        funFact: "The Playstation 2 was released worldwide in 2000, and only discontinued production in 2013. It sold 158 Million units during it's life."
    },

    {
        question: "In 2008, a landmark occasion happened. Mario of the famous 'Mario Bros.' joined forces with his rival of nearly 20 years, Sonic the Hedgehog to do what?",
        answer1: "Rescue Princess Peach from Bowser",
        answer2: "Collect the Chaos Emeralds and defeat Eggman",
        answer3: "Compete in the Summer Olympic Games",
        answer4: "Fight in a tournament in Soul Caliber V",
        correctAnswer: "Compete in the Summer Olympic Games",
        gif: "assets/images/Mario&Sonic.webm",
        soundClip: "assets/sounds/Sonic.mp3",
        funFact: "Nintendo and Sega had a longstanding rivalry, being the top console and video game makers of the 90's. This brought about Sega's famous slogan 'Genesis does what Nintendon't'."
    },
    {
        question: "Nintendo's Super Smash brothers Ultimate features the largest cast of playable characters in the history of the franchise. Being hailed as the largest crossover in the history of video gaming. It contains many characters from non-Nintendo properties such as Metal Gear Solid's Snake, and Street Fighter's Ryu. Longtime fans however are most exited by a Nintendo character that had been requested for many years. Who is this character?",
        answer1: "Waluigi from.....?",
        answer2: "Simon Belmont from Castlevania",
        answer3: "King K. Rool from Donkey Kong",
        answer4: "Ridley from Metroid",
        correctAnswer: "Ridley from Metroid",
        gif: "assets/images/Waluigi.webm",
        soundClip: "assets/sounds/Smash.mp3",
        funFact: "Despite much clamour from fans, Smash Bros. creator Masahiro Sakurai has already confirmed that Waluigi will not be playable in Smash Bros. Ultimate. However long requested since his first appearance as a non-playabe character in Smash Bros. Melee, Space Pirate Ridley will be."
    },

    {
        question: "Many games are known for having silent protagonists. Who is the silent star of the Half-Life series?",
        answer1: "Link",
        answer2: "Gordon Freeman",
        answer3: "Chel",
        answer4: "Claude",
        correctAnswer: "Gordon Freeman",
        gif: "assets/images/HalfLife2.webm",
        soundClip: "assets/sounds/HalfLife2.mp3",
        funFact: "Chel is the silent protagonist of the Portal series, Claude from Grand Theft Auto 3, and Link of course is known for his appearance in The Legend of Zelda: The Wand of Gamelon on the Philips CD-i."
    },

    {
        question: "1992's 'Wolfenstein 3D is regarded as being the first, marjorly popular first-person shooter. However another game released a year later, a shareware mod of Wolfenstein 3D was many times more popular, and still maintains popularity to this day. What is this game?",
        answer1: "Wolfenstein Redux",
        answer2: "DOOM",
        answer3: "Quake",
        answer4: "Duke Nukem 3D",
        correctAnswer: "DOOM",
        gif: "assets/images/DOOM.webm",
        soundClip: "assets/sounds/DOOM.mp3",
        funFact: "DOOM is to recieve the newest entry to the francise, DOOM: Eternal on December 28th, 2018"
    },

    {
        question: "Video gaming is full of acronyms, for instance; FPS(first-person shooter) and RTS(Real time Strategy). What does 4X stand for in video gaming?",
        answer1: "Extend, Excavate, Execute, Exist",
        answer2: "Exact, Excersise, Extrude, Excite",
        answer3: "Explore, Expand, Eploit, Exterminate",
        answer4: "Extrapolate, Expose, Explain, Exit",
        correctAnswer: "Explore, Expand, Eploit, Exterminate",
        gif: "assets/images/Civ.webm",
        soundClip: "assets/sounds/babayetu.mp3",
        funFact: "I had to find a list of verbs starting with the letters 'EX' to make all the incorrect answers for this question."
    },

    {
        question: "The Sony Playstation 3 sold better that expected. The reason was it was the cheapest version of something. What was it the cheapest version of?",
        answer1: "A Blu-Ray player",
        answer2: "A video game console",
        answer3: "An internet router",
        answer4: "A computer",
        correctAnswer: "A Blu-Ray player",
        gif: "assets/images/PS3.webm",
        soundClip: "assets/sounds/PS3.mp3",
        funFact: "The PS2 was also incredibly popular for it's ability to play DVD's, and could, using some software modification, be used as a computer. The US Navy had a 'Supercomputer' made of a linked cluster of thousands of PS2's. The US Air Force also tried to replicate this using PS3's with limited success."
    },

    {
        question: "When games are imported from Japan; they are often changed in localization, sometimes is major ways. One such game, BioHazard had it's title changed. What was it's new title?",
        answer1: "BioShock",
        answer2: "System Shock",
        answer3: "The Evil Within",
        answer4: "Resident Evil",
        correctAnswer: "Resident Evil",
        gif: "assets/images/ResidentEvil.webm",
        soundClip: "assets/sounds/residentevil.mp3",
        funFact: "At the time Capcom wanted to register a Trademark for 'BioHazard' in the United States, there was already another very small, unsuccessful DOS based game named BioHazard."
    }]
// variables
let i = 0;
let answer;
let numberCorrect = 0;
let t = 30;
let timer;
let gradeVal;
let audio;
let img;

// delay between questions
function endQuestionTimer() {
    setTimeout(nextQuestion, 10000);
}
// question timer
function timerFunction() {
    t--;
    console.log(t)
    if (t === 0) {
        audio = new Audio(questions[i].soundClip);
        $("#welcome").text("Out of Time!");
        $("#questionSpace").text("")
        $(".answerButton").hide();
        $("#answer").text("The answer was: " + questions[i].correctAnswer);
        $("#funFact").text("Fun Fact: " + questions[i].funFact);
        $("#gifSpot").attr("src", questions[i].gif)
        audio.play();
        clearInterval(timer);
        iterate();
    }
}
// sets page elements for question, and resets timer
function nextQuestion() {
    t = 30;
    timer = setInterval(timerFunction, 1000);
    $("#answer").text("");
    $("#funFact").text("");
    $(".answerButton").show()
    $("#welcome").text("Question" + " " + (i + 1));
    $("#questionSpace").text(questions[i].question);
    $("#answer1").text(questions[i].answer1);
    $("#answer2").text(questions[i].answer2);
    $("#answer3").text(questions[i].answer3);
    $("#answer4").text(questions[i].answer4);
    $("#gifSpot").attr("src", "");
    audio.pause();
    console.log(i);
}
// initial start button funtion
function start() {
    $("#startButton").hide();
    $(".answerButton").show();
    nextQuestion();
}
// end screen conditionals
function grade(){
    if (numberCorrect < 6){
        gradeVal = "You Failed! But you'll get 'em next time!"
        img = "assets/images/Bad.webm"
        audio = new Audio("assets/sounds/Bad.mp3")
    }

    else if (6 <= numberCorrect && numberCorrect <= 8){
        gradeVal = "You're pretty good! Could be better though."
        img = "assets/images/Good.webm"
        audio = new Audio("assets/sounds/Good.mp3")
    }

    else if (8 < numberCorrect){
        gradeVal="Good! Great! One of the Best!"
        img = "assets/images/Great.webm"
        audio = new Audio("assets/sounds/Great.mp3")
    }}
// Sets up elements for end screen
function finish() {
    audio.pause();
    grade();
    audio.play();
    $("#welcome").text("Finished!")
    $("#answer").text("");
    $("#funFact").text("");
    $(".answerButton").hide()
    $("#answer").text("You got: " + numberCorrect + " correct!")
    $("#questionSpace").text(gradeVal);
    $("#gifSpot").attr("src", img)
}
// Question counter
function iterate() {
    clearInterval(timer);
    i++;
    console.log(i)
    endQuestionTimer();
}
// checks answers to see if correct
function answerCheck() {
    answer = $(this).text()


    if (answer === questions[i].correctAnswer) {
        audio = new Audio(questions[i].soundClip);
        $("#welcome").text("Correct!");
        $("#questionSpace").text("");
        $(".answerButton").hide();
        $("#funFact").text("Fun Fact: " + questions[i].funFact);
        $("#gifSpot").attr("src", questions[i].gif);
        audio.play();
        console.log("correct");
        numberCorrect++;
        if (i < 9) {
            iterate()
        }

        else {
            clearInterval(timer);
            setTimeout(finish, 7500);
        }
    }

    else {
        console.log("incorrect")
        if (i < 9) {
            audio = new Audio(questions[i].soundClip);
            audio.play();
            $("#welcome").text("Incorrect!");
            $("#questionSpace").text("");
            $(".answerButton").hide();
            $("#answer").text("The answer was: " + questions[i].correctAnswer);
            $("#funFact").text("Fun Fact: " + questions[i].funFact);
            $("#gifSpot").attr("src", questions[i].gif)
            iterate();
        }

        else {
            clearInterval(timer);
            audio = new Audio(questions[i].soundClip);
            audio.play();
            $("#welcome").text("Incorrect!");
            $("#questionSpace").text("");
            $(".answerButton").hide();
            $("#answer").text("The answer was: " + questions[i].correctAnswer);
            $("#funFact").text("Fun Fact: " + questions[i].funFact);
            $("#gifSpot").attr("src", questions[i].gif)
            setTimeout(finish, 7500);
        }
    }
}

$(document).ready(
// Event listners
    $("#startButton").click(start),
    $(".answerButton").click(answerCheck),
)

// I sincerely wish whoever has to sort through this mess luck.