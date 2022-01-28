import Component from "./Component.js";
import Data from "../data/Data.js";

class Card extends Component {
    constructor() {
      super('app', 'card-template');
      Data.cardEl = this.el;
    }
  }

  export default Card;