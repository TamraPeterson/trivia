import { ProxyState } from "../AppState.js";
import { QuestionsController } from "../Controllers/QuestionsController.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";


let questionsWrong = 0
let questionsCorrect = 0
class QuestionsService {

  async getQuestions() {
    const response = await axios.get('https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple')
    console.log("response data", response.data)
    let questions = response.data.results.map(q => new Question(q))
    ProxyState.question = questions[0]
  }



  selectAnswer(answer) {
    if (answer != ProxyState.question.correctAnswer) {
      Swal.fire({
        icon: 'error',
        title: 'WRONG',
        text: 'Try Again',
      })
      questionsWrong++
      document.getElementById('wrong').innerText = questionsWrong
      return
    }
    Swal.fire({
      icon: 'success',
      title: 'YAY',
      text: 'You are so smart!',
    })
    questionsCorrect++
    document.getElementById('correct').innerText = questionsCorrect

  }
}

export const questionsService = new QuestionsService()