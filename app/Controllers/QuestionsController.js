import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawQuestions() {
  let template = ''
  ProxyState.questions.forEach(q => template += ` <h3>${q.question}</h3>`)
  document.getElementById('questions').innerHTML = template

}



export class QuestionsController {
  constructor() {
    console.log("controller loaded");
    ProxyState.on('questions', _drawQuestions)
    this.getQuestions()
  }

  async getQuestions() {
    try {
      console.log('started get questions')
      await questionsService.getQuestions()
      console.log('finished getting questions');
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}