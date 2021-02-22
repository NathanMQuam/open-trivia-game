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

}

export const questionsService = new QuestionsService()