
const questionContainer = document.querySelector('.quiz-container')
// const scrollContainer = document.querySelector('.scroll-container')

let visualQuestions = [
    {
        prompt: 'What is the optimal contrast ratio between text and background for large text?',
        answers: ['1:1', '4.5:1', '3:1', '3.5:1'],
        rightAnswer: 2
    },
    {
        prompt: 'Which one of these statements below is false?',
        answers: [
            'Stark contrast between text and background is recommended',
            'Warmer background shades improve readability',
            'Color is not the only tool to communicate the content to users',
            'People with visual impairments would benefit from well-designed and clean websites'
        ],
        rightAnswer: 0
    },
    {
        prompt: 'How should important actions be ',
        answers: ['1:1', '4.5:1', '3:1', '3.5:1'],
        rightAnswer: 2
    },
    {
        prompt: 'What is the optimal contrast ratio between text and background for large text?',
        answers: ['1:1', '4.5:1', '3:1', '3.5:1'],
        rightAnswer: 2
    },
    {
        prompt: 'What is the optimal contrast ratio between text and background for large text?',
        answers: ['1:1', '4.5:1', '3:1', '3.5:1'],
        rightAnswer: 2
    }
]

function init() {
    visualQuestions.forEach((question, i) => {
    let newQuestionContainer = document.createElement('section')
    newQuestionContainer.className = 'multiple-choice-container'
    newQuestionContainer.innerHTML =
    `
    
                        <p class="content">${question.prompt}</p>
                        <div class="button-container">
                            <button class="quiz-button buttonPrimary">
                                <h1 class="content quiz-button-text">A</h1>
                                <h1 class="content quiz-button-text">${question.answers[0]}</h1>
                            </button>
                            <button class="quiz-button buttonPrimary">
                                <h1 class="content quiz-button-text">B</h1>
                                <h1 class="content quiz-button-text">${question.answers[1]}</h1>
                            </button>
                            <button class="quiz-button buttonPrimary">
                                <h1 class="content quiz-button-text">C</h1>
                                <h1 class="content quiz-button-text">${question.answers[2]}</h1>
                            </button>
                            <button class="quiz-button buttonPrimary">
                                <h1 class="content quiz-button-text">D</h1>
                                <h1 class="content quiz-button-text">${question.answers[3]}</h1>
                            </button>
                        </div>
                    
    `

    
    // let newQuestionNavItem = document.createElement('li') 
    // newQuestionNavItem.className = 'nav-item backgroundPrimary textPrimary'
    // newQuestionNavItem.textContent = question.prompt
    // newQuestionNavItem.addEventListener('click',  (e) => snapTo(e,newQuestionContainer))
    questionContainer.appendChild(newQuestionContainer)
})
}

window.addEventListener('DOMContentLoaded', init)

function snapTo(e,element) {
    element.scrollIntoView({ behavior: 'smooth', block: "center"})
}