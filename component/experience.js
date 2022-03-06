import ExpItems from "./exp_item.js";


class ExpList {
    $container;
    $title;
    $ZoZ;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("objective");

        this.$title = document.createElement("h2");
        this.$title.classList.add("rightTitle");
        this.$title.innerText = "Experience";

        this.$ZoZ = new ExpItems("2022", "MindX-CI70", "TeamLead", "ZoZ forums, frontend, backend.....");
    }
    render() {
        this.$container.append(this.$title, this.$ZoZ.render());
        return this.$container;
    }
}
export default ExpList;