// import ValuesController from "./Controllers/ValuesController.js";
import TriviaGameController from "./Controllers/TriviaGameController.js"

class App {
  // valuesController = new ValuesController();
  triviaGameController = new TriviaGameController();
}

window["app"] = new App();
