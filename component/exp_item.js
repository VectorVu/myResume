import SkillBar from "./usedSkillBar.js";

class ExpItems {
    $box;
    $pjContri;

    $pjNameContain;
    $pjDescContain;
    $pjSkillContain;

    $pjName;
    $pjDescript;
    $text;
    $jobTitle;
    $jobDescrip;
    $pjUrl;
    $skillUsed;
    constructor(jobTitle, descipt, url) {
        this.$box = document.createElement("div");
        this.$box.classList.add("box");

        this.$pjNameContain = document.createElement("div");
        this.$pjNameContain.classList.add("pjName");

        this.$pjDescContain = document.createElement("div");
        this.$pjDescContain.classList.add("pjName")

        this.$pjName = document.createElement("h5");
        this.$pjName.innerText = "Project:";
        this.$pjName.id = "h5Name";

        this.$pjDescript = document.createElement("h5");
        this.$pjDescript.innerText = "Description:";

        this.$jobTitle = document.createElement("h4");
        this.$jobTitle.innerText = jobTitle;

        this.$jobDescrip = document.createElement("p");
        this.$jobDescrip.innerText = descipt;

        this.$pjUrl = document.createElement("a");
        this.$pjUrl.innerText= "Click me! Please."
        this.$pjUrl.href = url;
        this.$pjUrl.target ="_blank";

        this.$jobDescrip.append(this.$pjUrl);

        // this.$pjSkillContain = new SkillBar("26%","46%","28%");

    }
    render() {
        this.$pjNameContain.append(this.$pjName, this.$jobTitle);
        this.$pjDescContain.append(this.$pjDescript, this.$jobDescrip);
        this.$box.append(this.$pjNameContain, this.$pjDescContain);
        return this.$box;
    }
}
export default ExpItems;