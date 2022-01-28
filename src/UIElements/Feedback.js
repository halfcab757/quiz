import Component from "./Component.js";
import Data from "../data/Data.js";
import QUESTIONS from "../data/questions.js";
import QuizLogic from "../QuizLogic/QuizLogic.js";

class Feedback extends Component {
    constructor() {
      super('card', 'feedback-template');
      this.configure();
    }
  
    configure() {
      if (Data.questionIndex >= QUESTIONS.length - 1) {
        this.el.querySelector('button').textContent = 'Check evaluation';
        this.el
          .querySelector('button')
          .addEventListener('click', QuizLogic.showResults.bind(QuizLogic));
      } else {
        this.el
          .querySelector('button')
          .addEventListener('click', QuizLogic.loadNextQuestion);
      }
  
      const isCorrect = this.validateAnswer();
      if (isCorrect) {
        Data.numberOfCorrectAnswers++;
      }
      this.renderFeedback(isCorrect);
    }
  
    validateAnswer() {
      return Data.selectedOption.classList.contains('right');
    }
  
    renderFeedback(isCorrectAnswer) {
      this.el.querySelector('h3').textContent =
        'Your answer: ' + Data.selectedOption.textContent;
      this.el.querySelector('h3:last-of-type').textContent = isCorrectAnswer
        ? 'Well done!'
        : 'Wrong : (';
      this.el.querySelector('p').textContent =
        QUESTIONS[Data.questionIndex].details;
    }
  }

  export default Feedback;