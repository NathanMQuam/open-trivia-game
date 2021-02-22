import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js";

class QuestionsService {
   constructor() {
      this.newTriviaGame()
   }
   newTriviaGame() {
      console.log('New trivia game');
      api.get('?amount=10').then(res => {
         console.log(res.data)
         ProxyState.questions = res.data.results.map(rawQuestion => new Question(rawQuestion))
         console.log(ProxyState.questions);
      }).catch(err => console.error(err))
   }

   answer(questionId, answer) {
      let question = ProxyState.questions.find(q => q.id == questionId)
      if(answer == question.correctAnswer)
         console.log(questionId, answer, 'Correct!');
      else 
         console.log(questionId, answer, 'Incorrect');
   }

}

export const questionsService = new QuestionsService()