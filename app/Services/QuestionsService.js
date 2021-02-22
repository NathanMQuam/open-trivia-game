import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js";

class QuestionsService {
   constructor() {
      this.newTriviaGame()
   }
   newTriviaGame() {
      console.log('New trivia game');

   }

}

export const questionsService = new QuestionsService()