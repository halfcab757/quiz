import Component from "./Component.js";
import Data from "../data/Data.js";

class ProgressBar extends Component {
    constructor() {
      super('app', 'progress-bar-template');
      this.counterEl = this.el.querySelector('#counter > h3');
      this.bar = this.el.querySelector('#myBar');
      Data.progressInstance = this;
    }
  
    updateProgressBar(index) {
      const currentPercent = index * Data.percentPerQuestion;
      this.bar.style.width = currentPercent + '%';
      this.counterEl.textContent = currentPercent + '%';
      this.counterEl.style.color = currentPercent > 58 ? 'white' : 'black';
    }
  }

  export default ProgressBar;