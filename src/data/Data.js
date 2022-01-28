import QUESTIONS from "./questions.js";

class Data {
    static questionIndex = 0;
    static percentPerQuestion = Math.ceil(100 / QUESTIONS.length);
    static progressInPercent = 0;
    static numberOfCorrectAnswers = 0;
  
    static appEl = document.getElementById('app');
    static cardEl = null;
    static progressInstance = null;
    static selectedOption = null;
  
    static reset() {
      this.questionIndex = 0;
      this.progressInPercent = 0;
      this.numberOfCorrectAnswers = 0;
      this.selectedOption = null;
      this.progressInstance.updateProgressBar(0);
    }
  }

  export default Data;