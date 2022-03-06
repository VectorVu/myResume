import ExpList from "./experience.js";
import InforItems from "./infor_item.js";
import SkillList from "./skill.js";

class rightSide {
    $rightContainer;
    $objective;
    $objTitle;
    $objContent;
    $experience;
    $skillList;
    // interest
    $interest;
    $interestList;
    $interestTitle;
    //list 
    $watch;
    $listen;
    $read;
    $coding;
    constructor() {
        this.$rightContainer = document.createElement("div");
        this.$rightContainer.classList.add("cvRightSide");

        this.$objTitle = document.createElement("h2");
        this.$objTitle.classList.add("rightTitle");
        this.$objTitle.innerText = "Objective"

        this.$objective = document.createElement("div");
        this.$objective.classList.add("objective");

        this.$objContent = document.createElement("p");
        this.$objContent.innerText = "Learn more professional skills and practical experience. From That, I can participate and contribute to the company's projects."

        this.$experience = new ExpList();

        this.$skillList = new SkillList("skills");

        this.$interest = document.createElement("div");
        this.$interest.classList.add("objective", "interest");

        this.$interestTitle = document.createElement("h2")
        this.$interestTitle.classList.add("rightTitle");
        this.$interestTitle.innerText = "interest"
        this.$interestList = document.createElement("ul");

        this.$watch = new InforItems(
            [
                `<i class="fa fa-film" aria-hidden="true"></i>`,
                "Movie"
            ],
            "contact"
        );
        this.$listen = new InforItems(
            [
                `<i class="fa fa-music" aria-hidden="true"></i>`,
                "Music"
            ],
            "contact"
        );
        this.$read = new InforItems(
            [
                `<i class="fa fa-book" aria-hidden="true"></i>`,
                "Reading"
            ],
            "contact"
        );
        this.$coding = new InforItems(
            [
                `<i class="fa fa-code" aria-hidden="true"></i>`,
                "Coding"
            ],
            "contact"
        );
    }
    render() {
        this.$interestList.append(
            this.$watch.render(),
            this.$listen.render(),
            this.$read.render(),
            this.$coding.render()
        );
        this.$interest.append(this.$interestTitle, this.$interestList);
        this.$objective.append(this.$objTitle, this.$objContent);
        this.$rightContainer.append(this.$objective, this.$experience.render(), this.$skillList.render(), this.$interest);
        return this.$rightContainer;
    }

}
export default rightSide;