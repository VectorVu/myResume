import skillItems from "./skill_item.js";

class SkillList {
    $container;
    $title;
    $listSkills;

    //items
    $english;
    $vietnamese;

    // code language
    $cpp;
    $html;
    $css;
    $js;
    $sql;

    constructor() {
        this.$container = document.createElement("div");

        this.$listSkills = document.createElement("ul");
   
            this.$container.classList.add("contact");

            this.$title = document.createElement("h3");
            this.$title.classList.add("title");

            this.$title.innerText = "Languages";
            this.$container.classList.add("lang");

            this.$english = new skillItems("English", "50%");
            this.$vietnamese = new skillItems("Vietnamese", "95%");
        
    }
    render() {
        this.$listSkills.append(this.$english.render(), this.$vietnamese.render());
        this.$container.append(this.$title, this.$listSkills);
        return this.$container;
    }
}
export default SkillList;