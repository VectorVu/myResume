
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

    }
    render() {
      
        this.$container.append(this.$skillName);
        return this.$container;
    }
}
export default skillItems;