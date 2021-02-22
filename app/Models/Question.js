import { generateId } from '../Utils/generateId.js'
// TODO: Shuffle the answers array
/**
 * @param {string} cA
 * @param {string[]} iA
 */
function _insertCorrectAnswer(cA, iA) {
   let tempArr = [...iA, cA]
   let newArr = []
   
   // console.log(tempArr, newArr);
   while (tempArr.length > 0) {
      // console.log(tempArr, newArr);
      let randPos = Math.floor(Math.random() * tempArr.length)
      newArr.push(tempArr.splice(randPos, 1))
   }
   // console.log(tempArr, newArr);
   return newArr
}

export default class Question {
   constructor(data) {
      this.question = data.question
      this.category = data.category
      this.correctAnswer = data.correct_answer
      this.questionType = data.type

      //this.allAnswers = _insertCorrectAnswer(this.correctAnswer, data.incorrect_answers)
      this.allAnswers = [this.correctAnswer, ...data.incorrect_answers]
      this.id = generateId()
   }

   get Template() {
      let template = ''
      for (let i = 0; i < this.allAnswers.length; i++) {
         let a = this.allAnswers[i]
         template += /*html*/ `
            <div class="col-6 p-1"><button type="button" onclick="app.triviaGameController.answer('${this.id}', '${a}')" class="btn bg-light w-100 shadow-sm">${a}</button></div>
         `
      }

      return /*html*/ `
         <div class="row p-2">
            <div class="col card shadow p-3">
               <p>Category: ${this.category}</p>
               <p class="card shadow-sm p-2">${this.question}</p>
               <p>Your answer: ''</p>
               <div class="row text-center">
                  ${template}
               </div>
            </div>
         </div>
      `
   }
}