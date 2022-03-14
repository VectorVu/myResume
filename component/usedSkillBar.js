class SkillBar {
    $container;
    $html;
    $css;
    $js;
    $percent;
    $skillName;

    constructor(htmlPercent, cssPercent, jsPercent) {
        this.$container = document.createElement("div");
        this.$container.classList.add("pjName");

        this.$skillName = document.createElement("h5");
        this.$skillName.innerText = "Languages:";

        this.$percent = document.createElement("div");
        this.$percent.classList.add("percent");

        this.$html = document.createElement("div");
        this.$html.classList.add("html");
        this.$html.style.width = htmlPercent;
        this.$html.innerText = "HTML";

        this.$css = document.createElement("div");
        this.$css.classList.add("css");
        this.$css.style.width = cssPercent;
        this.$css.innerText = "CSS";

        this.$js = document.createElement("div");
        this.$js.classList.add("js");
        this.$js.style.width = jsPercent;
        this.$js.innerText = "JavaScript";


    }
    render() {
        this.$percent.append(this.$html, this.$css, this.$js);
        this.$container.append(this.$skillName, this.$percent);
        return this.$container;
    }
}
export default SkillBar;