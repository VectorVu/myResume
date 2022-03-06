const appElement = document.getElementById("app");
import leftSide from "./component/leftSide.js";
import rightSide from "./component/rightSide.js";
class App {
    $CvContainer;
    $CvLeftSide;
    $CvRightSide;

    constructor() {

        appElement.classList.add("cvContainer");

        this.$CvLeftSide = new leftSide();

        this.$CvRightSide = new rightSide()


    }
    render() {
        appElement.append(this.$CvLeftSide.render(), this.$CvRightSide.render());
        return appElement;
    }
}
const app = new App();
export default app.render();