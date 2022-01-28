import Data from "../data/Data.js";
import Question from "../UIElements/Question.js";
import Result from "../UIElements/Result.js";
import Card from "../UIElements/Card.js";

class QuizLogic {
    static showResults() {
      Data.progressInstance.el.querySelector('#myBar').style.width = '100%';
      Data.progressInstance.el.querySelector('#counter > h3').textContent =
        '100%';
      Data.cardEl.classList.add('slideToRight');
  
      QuizLogic.removeAndRenderUIElements(Result);
  
      this.slideCardElAwayAndBack();
    }
  
    static removeAndRenderUIElements(newUIElementObject) {
      setTimeout(() => {
        Data.cardEl.firstElementChild.remove();
        new newUIElementObject();
        Data.cardEl.classList.add('slideFromLeft');
      }, 700);
    }
  
    static slideCardElAwayAndBack() {
      setTimeout(() => {
        Data.cardEl.classList.remove('slideToRight');
        Data.cardEl.classList.remove('slideFromLeft');
      }, 1400);
    }
  
    static start() {
      Data.appEl.classList.add('started');
      if (this.startEl) {
        this.startEl.remove();
      }
  
      setTimeout(() => {
        if (!Data.progressInstance) {
          Data.progressInstance = new ProgressBar();
        }
        Data.cardEl = new Card().el;
        QuizLogic.loadNextQuestion();
      }, 500);
    }
  
    static loadNextQuestion() {
      if (Data.questionIndex === 0) {
        Data.cardEl.classList.add('slideFromLeft');
        new Question();
        setTimeout(() => {
          Data.cardEl.classList.remove('slideFromLeft');
        }, 700);
  
        return;
      }
      
      Data.cardEl.classList.add('slideToRight');
  
      QuizLogic.removeAndRenderUIElements(Question);
  
      QuizLogic.slideCardElAwayAndBack();
    }
  
    static restart() {
      Data.cardEl.classList.add('slideToRight');
  
      setTimeout(() => {
        Data.reset();
        Data.progressInstance.el.querySelector('#myBar').style.width = '0%';
        Data.cardEl.remove();
        QuizLogic.start();
      }, 700);
    }
  }

  export default QuizLogic;