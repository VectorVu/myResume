import Infor from "./infor.js";
import SkillList from "./skill.js";

class leftSide {
    $leftContainer;

    $profileContainer;
    $imageContainer;
    $ava;
    $name;
    $jobTitle;

    $contactInfor;
    $education;
    $language;

    constructor() {

        this.$leftContainer = document.createElement("div");
        this.$leftContainer.classList.add("cvRLeftSide");

        this.$profileContainer = document.createElement('div');
        this.$profileContainer.classList.add("profileContain");

        this.$imageContainer = document.createElement('div');
        this.$imageContainer.classList.add("avaContain");

        this.$ava = document.createElement("img");
        this.$ava.classList.add("ava");
        this.$ava.src = "./image/cv3.jpg";

        this.$name = document.createElement("h2");
        this.$name.classList.add("name");
        this.$name.innerText = "Truong Hoang Vu";

        this.$jobTitle = document.createElement("span");
        this.$jobTitle.classList.add("jobTitle");
        this.$jobTitle.innerText = "Backend intern";

        this.$contactInfor = new Infor("contact");
        this.$education = new Infor("edu");
        this.$language = new SkillList("lang");
    }
    render() {
        this.$imageContainer.append(this.$ava);
        this.$profileContainer.append(this.$imageContainer, this.$name, this.$jobTitle);
        this.$leftContainer.append(this.$profileContainer, this.$contactInfor.render(), this.$education.render(), this.$language.render())
        return this.$leftContainer;
    }
}
export default leftSide;