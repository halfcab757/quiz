import Component from "./Component.js";
import Data from "../data/Data.js";
import QuizLogic from "../QuizLogic/QuizLogic.js";
import QUESTIONS from "../data/questions.js";

class Result extends Component {
    constructor() {
      super('card', 'result-template');
      this.configure();
    }
  
    configure() {
      this.el
        .querySelector('button')
        .addEventListener('click', QuizLogic.restart);
      this.el.querySelector(
        'p'
      ).textContent = `You answered ${Data.numberOfCorrectAnswers} of ${QUESTIONS.length} questions correctly.`;
    }
  }

  export default Result;