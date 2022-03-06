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

    constructor(type) {
        this.$container = document.createElement("div");

        this.$listSkills = document.createElement("ul");
        if (type === "lang") {
            this.$container.classList.add("contact");

            this.$title = document.createElement("h3");
            this.$title.classList.add("title");

            this.$title.innerText = "Languages";
            this.$container.classList.add("lang");

            this.$english = new skillItems("English", "50%", type);
            this.$vietnamese = new skillItems("Vietnamese", "95%", type);
            this.$listSkills.append(this.$english.render(), this.$vietnamese.render());
        }
        else if (type === "skills") {
            this.$container.classList.add("objective");

            this.$listSkills.classList.add("skills");

            this.$title = document.createElement("h2");
            this.$title.classList.add("rightTitle");

            this.$title.innerText = "Skills";

            this.$cpp = new skillItems("C/C++", "80%", type);
            this.$html = new skillItems("HTML", "65%", type);
            this.$css = new skillItems("CSS", "70%", type);
            this.$js = new skillItems("Javascript", "75%", type);
            this.$sql = new skillItems("SQL Server", "80%", type);
            this.$listSkills.append(
                this.$html.render(),
                this.$css.render(),
                this.$js.render(),
                this.$cpp.render(),
                this.$sql.render()
            );

        }
    }
    render() {

        this.$container.append(this.$title, this.$listSkills);
        return this.$container;
    }
}
export default SkillList;