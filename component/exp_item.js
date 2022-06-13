import SkillBar from "./usedSkillBar.js";

class ExpItems {
    $box;
    $pjContri;

    $pjNameContain;
    $pjDescContain;
    $pjSkillContain;

    $pjName;
    $pjDescript;
    $jobTitle;
    $jobDescrip;
    $pjUrl;
    $skillUsed;
    $skillName;
    $detailSkill;
    constructor(jobTitle, descipt, url, techUse) {
        this.$box = document.createElement("div");
        this.$box.classList.add("box");

        this.$pjNameContain = document.createElement("div");
        this.$pjNameContain.classList.add("pjName");

        this.$pjDescContain = document.createElement("div");
        this.$pjDescContain.classList.add("pjName");

        this.$pjSkillContain = document.createElement("div");
        this.$pjSkillContain.classList.add("pjName"); 

        this.$pjName = document.createElement("h5");
        this.$pjName.innerText = "Project:";
        this.$pjName.id = "h5Name";

        this.$pjDescript = document.createElement("h5");
        this.$pjDescript.innerText = "Description:";

        this.$skillName = document.createElement("h5");
        this.$skillName.innerText = "Technology:";

        this.$detailSkill = document.createElement("p");
        this.$detailSkill.innerText = techUse;

        this.$jobTitle = document.createElement("h4");
        this.$jobTitle.innerText = jobTitle;

        this.$jobDescrip = document.createElement("p");
        this.$jobDescrip.innerText = descipt;

        this.$pjUrl = document.createElement("a");
        this.$pjUrl.innerText= "Click me! Please."
        this.$pjUrl.href = url;
        this.$pjUrl.target ="_blank";

        this.$jobDescrip.append(this.$pjUrl);

        

    }
    render() {
        this.$pjNameContain.append(this.$pjName, this.$jobTitle);
        this.$pjDescContain.append(this.$pjDescript, this.$jobDescrip);
        this.$pjSkillContain.append(this.$skillName, this.$detailSkill);
        this.$box.append(this.$pjNameContain, this.$pjDescContain, this.$pjSkillContain);
        return this.$box;
    }
}
export default ExpItems;