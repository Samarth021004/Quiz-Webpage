const questions=[
    {
        question:"What is the chemical symbol for the element potassium?",
        answers: [
            {text: "K",correct: true},
            {text: "P",correct: false},
            {text: "Po",correct: false},
            {text: "Ko",correct: false},
       ]
    },
    {
        question:"In which year did the Berlin Wall fall, leading to the reunification of East and West Germany?",
        answers: [
            {text: "1988",correct: false},
            {text: "1989",correct: true},
            {text: "1990",correct: false},
            {text: "1991",correct: false},
       ]
    },
    {
        question:"Who wrote the classic novel 'Brave New World'?",
        answers: [
            {text: "George Orwell",correct: false},
            {text: "Aldous Huxley",correct: true},
            {text: "Ray Bradbury",correct: false},
            {text: "H.G. Wells",correct: false},
       ]
    },
    {
        question:"Which mountain is the highest in Africa?",
        answers: [
            {text: "Mt Kilimanjari",correct: true},
            {text: "Mt Everest",correct: false},
            {text: "Mt Mckinley",correct: false},
            {text: "Mt Fuji",correct: false},
       ]
    },
    {
        question:"What does the acronym HTML stand for?",
        answers: [
            {text: "High-Level Text Management Language",correct: false},
            {text: "Hyperlink and Text Markup Language",correct: false},
            {text: "Human Text Manipulation Language",correct: false},
            {text: "Hyper Text Markup Language",correct: true},
       ]
    },
    {
        question:"In which year did the first modern Summer Olympics take place?",
        answers: [
            {text: "1896",correct: true},
            {text: "1897",correct: false},
            {text: "1898",correct: false},
            {text: "1899",correct: false},
       ]
    },
    {
        question:"What is the process by which plants make their own food using sunlight?",
        answers: [
            {text: "Transpiration",correct: false},
            {text: "Respiration",correct: false},
            {text: "Photosynthesis",correct: true},
            {text: "Osmosis",correct: false},
       ]
    },
    {
        question:"Who directed the movie 'The Shawshank Redemption'?",
        answers: [
            {text: "Sam Raimey",correct: false},
            {text: "Christopher Nolan",correct: false},
            {text: "Frank Darabont",correct: true},
            {text: "Quenten Tarantino",correct: false},
       ]
    },
    {
        question:"What is the square root of 121",
        answers: [
            {text: "11",correct: true},
            {text: "13",correct: false},
            {text: "17",correct: false},
            {text: "19",correct: false},
       ]
    },
    {
        question:"Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Mars",correct: true},
            {text: "Jupiter",correct: false},
            {text: "Mercury",correct: false},
            {text: "Venus",correct: false},
       ]
    },
    {
        question:"What is the powerhouse of the cell?",
        answers: [
            {text: "Endoplasmic Recticulum",correct: false},
            {text: "Mitochondria",correct: true},
            {text: "Ribosomes",correct: false},
            {text: "Cytoplasm",correct: false},
       ]
    },
    {
        question:"Who wrote the play 'Macbeth'?",
        answers: [
            {text: "Jane Austen",correct: false},
            {text: "Ruskin Bond",correct: false},
            {text: "Charles Dickens",correct: false},
            {text: "William Shakespeare",correct: true},
       ]
    },
    {
        question:"Which programming language was created by James Gosling at Sun Microsystems in 1995?",
        answers: [
            {text: "C++",correct: false},
            {text: "Python",correct: false},
            {text: "Java",correct: true},
            {text: "C",correct: false},
       ]
    },
    {
        question:"What is the capital of Hungary?",
        answers: [
            {text: "Bucharest",correct: false},
            {text: "Budapest",correct: true},
            {text: "Zagreb",correct: false},
            {text: "Vienna",correct: false},
       ]
    },
    {
        question:"Who painted 'Starry Night'?",
        answers: [
            {text: "Vincent Van Gogh",correct: true},
            {text: "Leonardo Da Vinci",correct: false},
            {text: "Michaelangelo",correct: false},
            {text: "Pablo Picasso",correct: false},
       ]
    },
    {
        question:"Which football club has never won Uefa Champions League",
        answers: [
            {text: "Inter Milan",correct: false},
            {text: "FC Barcelona",correct: false},
            {text: "Arsenal",correct: true},
            {text: "Aston Villa",correct: false},
       ]
    },
    {
        question:"Who co-founded Microsoft alongside Bill Gates?",
        answers: [
            {text: "Paul Allen",correct: true},
            {text: "Steve Jobs",correct: false},
            {text: "Tim Berners Lee",correct: false},
            {text: "Mark Zuckerberg",correct: false},
       ]
    },
    {
        question:"Who is the current Formula-1 World Champion",
        answers: [
            {text: "Lewis Hamilton",correct:false},
            {text: "Fernando Alonso",correct: false},
            {text: "Charles Leclerc",correct: false},
            {text: "Max Verstappen",correct: true},
       ]
    },
    {
        question:"Who is the current president of Syria",
        answers: [
            {text: "Sulayman-al-Assad",correct: false},
            {text: "Bashar-al-Assad",correct: true},
            {text: "Shaam-al-Assad",correct: false},
            {text: "Hafeez-al-Assad",correct: false},
       ]
    },
    {
        question:"In which year was Avengers Endgame released",
        answers: [
            {text: "2019",correct: true},
            {text: "2017",correct: false},
            {text: "2020",correct: false},
            {text: "2018",correct: false},
       ]
    }
    
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const livescore = document.getElementById("livescore");
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    console.log("startQuiz is called");
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
   
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    livescore.innerHTML = "Your score: "+score;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.dataset.correct=answer.correct;  
        button.addEventListener("click",selectAnswer);
    });
    
}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    
    const isCorrect=selectedBtn.dataset.correct;
   
   
    if(isCorrect==="true"){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
     }
    Array.from(answerButtons.children).forEach(button =>{
       
      if(button.dataset.correct =="true"){
        button.classList.add("correct");
      }
      button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    const total = questions.length;
    questionElement.innerHTML=` You scored ${score} out of ${total}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
