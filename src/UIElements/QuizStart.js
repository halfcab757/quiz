import Component from "./Component.js";
import Data from "../data/Data.js";
import ProgressBar from "./ProgressBar.js";
import Card from "./Card.js";
import QuizLogic from "../QuizLogic/QuizLogic.js";

class QuizStart extends Component {
    constructor() {
      super('app', 'start-template');
      this.el
        .querySelector('button')
        .addEventListener('click', this.startQuiz.bind(this));
    }
  
    startQuiz() {
      this.el.remove();
      Data.appEl.classList.add('started');
      setTimeout(() => {
        if (!Data.progressInstance) {
          Data.progressInstance = new ProgressBar();
        }
        Data.cardEl = new Card().el;
        QuizLogic.loadNextQuestion();
      }, 500);
    }
  }

  export default QuizStart;