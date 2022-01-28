import Component from "./Component.js";
import QUESTIONS from "../data/questions.js";
import Data from "../data/Data.js";
import Feedback from "./Feedback.js";

class Question extends Component {
    constructor() {
      super('card', 'question-template');
      this.question = QUESTIONS[Data.questionIndex];
      this.configure();
    }
  
    configure() {
      this.el.querySelector('h2').textContent = this.question.question;
      this.configureAnswerOptions();
      this.el
        .querySelector('ul')
        .addEventListener('click', this.optionClickHandler.bind(this));
    }
  
    configureAnswerOptions() {
      const listElements = this.el.getElementsByTagName('button');
  
      let index = 0;
      for (const option of this.question.options) {
        listElements[index].textContent = option.content;
        if (option.isCorrect) {
          listElements[index].classList.add('right');
        }
        index++;
      }
    }
  
    optionClickHandler(event) {
      Data.selectedOption = event.target;
      if (Data.selectedOption.id === 'options') {
        return;
      }
      Data.cardEl.classList.add('turnToBackside');
      Data.progressInstance.updateProgressBar(Data.questionIndex + 1);
  
      setTimeout(() => {
        this.el.remove();
      }, 200);
  
      setTimeout(() => {
        new Feedback();
        Data.questionIndex++;
        Data.cardEl.classList.remove('turnToBackside');
      }, 400);
    }
  }

  export default Question;