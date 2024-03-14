
// array/dictionary/objects to hold all the questions
const q0 = {
    question: 'Which is false?',
    options: ['If a vector forms a closed path, it is equal, the net is equal to 0', 'Vetcors have both length and direction', 'Parallel vectors have the same length', 'Parallel vectors have the same direction'],
    answer: 'btn3'
};
// const q1 = {
//     question: 'Which is false',
//     options: ['', 'm', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q2 = {
//     question: 'quest2',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q3 = {
//     question: 'What does a stand for?',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q4 = {
//     question: 'What does a stand for?',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q5 = {
//     question: 'What does a stand for?',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q6 = {
//     question: 'What does a stand for?',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q7 = {
//     question: 'What does a stand for?',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q8 = {
//     question: 'What does a stand for?',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };
// const q9 = {
//     question: 'What does a stand for?',
//     options: ['Acceleration', 'Apples', 'Voltage', 'Chocolate'],
//     answer: 'btn1'
// };

getQuestion();
let score = 0;
let answered = false;

// check if user is correct & display it
function buttonPressed(obj) {
    btn = obj.id;
    
    if (answered == false){
        if (btn == x.answer) {
            score += 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            document.getElementById("text").innerHTML = 'Correct!';
            answered = true;
            
        } else {
            score -= 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            document.getElementById("text").innerHTML = 'Incorrect :(';
            answered = true;
        };
        document.getElementById('btnNext').style.visibility = 'visible';
    };    
};

function buttonPressed2(x) {
    // reset answer text
    answered = false;
    document.getElementById('btnNext').style.visibility = 'hidden';
    getQuestion();
};

function getQuestion() {
    // random number to choose one of the questions
    // change 10 to amount of questions
    const num = Math.floor(Math.random() * 10);
    
    // take the number and get the question and corrisponding options and answer
    x = eval('q' + String(num));
    
    // display the question and answer options
    document.getElementById('text').innerHTML = x.question;
    document.getElementById('btn1').innerHTML = x.options[0];
    document.getElementById('btn2').innerHTML = x.options[1];
    document.getElementById('btn3').innerHTML = x.options[2];
    document.getElementById('btn4').innerHTML = x.options[3];
};