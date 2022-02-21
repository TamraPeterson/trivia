import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsService {
  async getQuestions() {
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple')
    console.log("response data", response.data)
    let questions = response.data.results.map(q => new Question(q))
    ProxyState.questions = questions
  }
}

export const questionsService = new QuestionsService()