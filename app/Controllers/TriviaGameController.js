import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js"


// Private
function _draw() {
   // TODO: Draw score to page
   let score = ProxyState.score
   document.getElementById('score').innerHTML = score.correct + ' / ' + (score.correct + score.incorrect)
   // TODO: Draw questions to page
   let questions = ProxyState.questions
   let result = ''

   questions.forEach(q => result += q.Template)

   document.getElementById('app').innerHTML = /*html*/`
   `
}

// Public
export default class {
   constructor() {
      ProxyState.on("questions", _draw)
      _draw()
      console.log('Trivia Game Controller Initialized');
   }
}