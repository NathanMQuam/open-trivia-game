import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js"


// Private
function _draw() {
   let score = ProxyState.score
   document.getElementById('score').innerHTML = score.correct + ' / ' + (score.correct + score.incorrect)

   let questions = ProxyState.questions
   let result = ''

   questions.forEach(q => result += q.Template)

   document.getElementById('app').innerHTML = /*html*/``
}

function _newTriviaGame() {
   questionsService.newTriviaGame()
}

// Public
export default class {
   constructor() {
      ProxyState.on("questions", _draw)
      _draw()
      console.log('Trivia Game Controller Initialized');
   }
}