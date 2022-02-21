export class Question {
  constructor(data) {
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
    this.allAnswers = [data.correct_answer, ...data.incorrect_answers]
  }
}