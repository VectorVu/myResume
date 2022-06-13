import skillItems from "./skill_item.js";

class SkillList {
    $container;
    $title;
    $listSkills;

    $items;
    // code language
    $cpp;
    $html;
    $css;
    $js;
    $sql;

    constructor(title, list, h2) {
        this.$container = document.createElement("div");

        this.$listSkills = document.createElement("ul");

        
        if (h2) {
            this.$title = document.createElement("h2");
            this.$title.classList.add("rightTitle");
            this.$container.classList.add("rightList");
        }
        else {
             this.$title = document.createElement("h3");
             this.$title.classList.add("title");
             this.$container.classList.add("contact");
             }
        

        this.$title.innerText = title;
        this.$container.classList.add("lang");

        list.map((item)=> {
            this.$items = new skillItems(item, h2);
            this.$listSkills.append(this.$items.render());  
        })
       

    }
    render() {
        this.$container.append(this.$title, this.$listSkills);
        return this.$container;
    }
}
export default SkillList;