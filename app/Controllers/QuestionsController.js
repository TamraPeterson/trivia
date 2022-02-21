import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawQuestions() {
  // let template = ''
  // ProxyState.question.forEach(q => template += )
  document.getElementById('questions').innerHTML = ` <h3>${ProxyState.question.question}</h3>`

}

function _drawAnswers() {
  let template = ''
  ProxyState.question.allAnswers.forEach(a => template += `
  <div class="col-2 shadow p-3 text-center selectable" onclick="app.questionsController.selectAnswer('${a}')">
  <h5>${a}</h5></div>`)
  document.getElementById('answers').innerHTML = template
}



export class QuestionsController {
  constructor() {
    console.log("controller loaded");
    ProxyState.on('question', _drawQuestions)
    ProxyState.on('question', _drawAnswers)
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

  selectAnswer(answer) {
    console.log('answer selected at controller', answer)
    questionsService.selectAnswer(answer)
  }
}