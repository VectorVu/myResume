
class skillItems {
    $container;
    $skillName;
    $percent;
    $fillPercent;
    constructor(name, percent) {
        this.$container = document.createElement("li");
        this.$skillName = document.createElement("span");
        this.$skillName.classList.add("skillName");
        this.$skillName.innerText = name;

        this.$percent = document.createElement("span");
        this.$percent.classList.add("percent");

        this.$fillPercent = document.createElement("div");
        this.$fillPercent.style.width = percent;
    }
    render() {
        this.$percent.append(this.$fillPercent);
        this.$container.append(this.$skillName, this.$percent);
        return this.$container;
    }
}
export default skillItems;