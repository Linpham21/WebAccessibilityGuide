
const questionContainer = document.querySelector('.quiz-container')
// const scrollContainer = document.querySelector('.scroll-container')
var resultsContainer = document.getElementById('results');
var refreshButton = document.getElementById('refresh-button');

let allQuestions = {
    audio: [{
        prompt: 'Which of these elements will not enhance audio accessibility of your webpage?',
        answers: ['Transcripts', 'Captions', 'Sign Language', 'Screen Readers'],
        rightAnswer: 3
    },
    {
        prompt: 'Which accurately describes Deaf people?',
        answers: [
            'People who have recently lost the ability to hear',
            'People who are temporarily lost the ability to hear',
            'Those who were born deaf and have been deaf for most of their lives',
            'All of the above accurately describe Deaf people'
        ],
        rightAnswer: 2
    },
    {
        prompt: 'If you want to be more audio accessible, which of the following is best suited?',
        answers: [
            'Add visual elements that describe audio elements',
            'Add audio elements that describe visual elements',
            'Add alternative methods of navigation for those who can’t use a keyboard and/or mouse',
            'Make a video showcasing the entire experience of your website and embed that video in your website'
        ],
        rightAnswer: 0
    },
    {
        prompt: 'Because of technology advancements, auto generated captions are accurate and reliable.',
        answers: [
            'True',
            'False', 
            'It depends', 
            'I don\'t know'
        ],
        rightAnswer: 1
    }],
    visual: [{
        prompt: 'What is the optimal contrast ratio between text and background for large text?',
        answers: ['1:1', '4.5:1', '3:1', '3.5:1'],
        rightAnswer: 2
    },
    {
        prompt: 'Which one of these statements below is FALSE?',
        answers: [
            'Stark contrast between text and background is recommended',
            'Warmer background shades improve readability',
            'Color is not the only tool to communicate the content to users',
            'People with visual impairments would benefit from well-designed and clean websites'
        ],
        rightAnswer: 0
    },
    {
        prompt: 'How should important actions/links be designed to attract users?',
        answers: [
            'Place them in the middle of the page',
            'Don\'t include important actions/links as it can cause distress to users',
            'Include the word \'IMPORTANT\' bolded red next to them',
            'Give clickable cues'
        ],
        rightAnswer: 3
    },
    {
        prompt: 'Which one of the statements is TRUE?',
        answers: [
            'Information-dense websites are easier for users to navigate',
            'Reading and visual order don\'t matter', 
            'Important items or actions should be placed either at the top or bottom of page', 
            'Using color to highlight key ideas may confuse users'
        ],
        rightAnswer: 2
    }],
    motor: [{
        prompt: 'Which of the following is an example of a web accessibility barrier for people with physical disabilities?',
        answers: [
            'Full keyboard support for websites, browsers, and authoring tools',
            'Insufficient time limits to respond or to complete tasks',
            'Text alternatives to links and graphics', 
            'Good visual and non-visual orientation cues and page structure'
        ],
        rightAnswer: 1
    },
    {
        prompt: 'Which of the following is an example of good web design for people with physical disabilities?',
        answers: [
            'Inadequate task completion time',
            'No clear signs of the current emphasis',
            'Large clickable areas',
            'No form error correction options'
        ],
        rightAnswer: 2
    },
    {
        prompt: 'What is another term for repetitive stress injury (RSI)?',
        answers: [
            'Repetitive motion disorder (RMD)',
            'Rheumatism',
            'Quadriplegia',
            'Reduced dexterity'
        ],
        rightAnswer: 0
    },
    {
        prompt: 'What is one way to make web content more inclusive and accessible?',
        answers: [
            'Ensuring that the website appears and operates in unpredictable ways',
            'Designing content that could cause seizures', 
            'Ensuring that text content is readable and understandable', 
            'Using an illogical tab order for navigation'
        ],
        rightAnswer: 2
    }]
}




function init(type) {
    let questionType = allQuestions[type];
    questionType.forEach((question, i) => {
    let newQuestionContainer = document.createElement('section')
    newQuestionContainer.className = 'multiple-choice-container'
    let buttonContainer = document.createElement('div')
    buttonContainer.className = 'button-container';
    //fill the button container with buttons
    createQuizButtons(question, i, buttonContainer)

    newQuestionContainer.innerHTML =
    `
    
                        <p class="content quiz-question-box">${question.prompt}</p>

                    
    `
    newQuestionContainer.appendChild(buttonContainer)

    // let newQuestionNavItem = document.createElement('li') 
    // newQuestionNavItem.className = 'nav-item backgroundPrimary textPrimary'
    // newQuestionNavItem.textContent = question.prompt
    // newQuestionNavItem.addEventListener('click',  (e) => snapTo(e,newQuestionContainer))
    questionContainer.appendChild(newQuestionContainer)
})



}
let score = 0
let total = 4
resultsContainer.innerHTML = 'Correct Answers Found: ' + score;
function onClick(correct, quizButton) {
    if(correct) {
        quizButton.style.backgroundColor = '#50C878'
        score++;
        resultsContainer.innerHTML = 'Correct Answers Found: ' + score;
    } else {
        quizButton.style.backgroundColor = '#FA5F55'
    }
}

function createQuizButtons(question, i, buttonContainer) {
    
    let result = '';
    let letters = 'ABCD';
    
    for(let j = 0; j < 4; j++) {
        let quizButton = document.createElement('button')
        quizButton.className = 'quiz-button button-primary'
        quizButton.innerHTML = `
            <h1 class="content quiz-button-icon">${letters.charAt(j)}</h1>
            <h1 class="content quiz-button-text">${question.answers[j]}</h1>
        `

        // console.log(i, question.rightAnswer)
        quizButton.onkeydown = 
        quizButton.onclick = () => onClick(j === question.rightAnswer, quizButton)
        buttonContainer.appendChild(quizButton)
    }
}

function reset() {
    score = 0;
    resultsContainer.innerHTML = 'Correct Answers Found: ' + score;
    let quizButtons = document.getElementsByClassName('quiz-button button-primary');
    for (var i = 0; i < quizButtons.length; i++) {
        quizButtons[i].style.backgroundColor = '#F5F5F5';
    }
}
refreshButton.onclick = function() {
    reset();
}

// function snapTo(e,element) {
//     element.scrollIntoView({ behavior: 'smooth', block: "center"})
// }


// function clearStatusClass(element) {
//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }

