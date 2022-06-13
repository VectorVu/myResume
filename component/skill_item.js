
class skillItems {
    $container;
    $skillName;
    $percent;
    $fillPercent;
    constructor(name, h2) {
        this.$container = document.createElement("li");
        this.$skillName = document.createElement("span");
        if(h2){
            this.$skillName.classList.add("skillNameRight");
        }
        else{
        this.$skillName.classList.add("skillName");
            
        }
        this.$skillName.innerText = name;

    }
    render() {
      
        this.$container.append(this.$skillName);
        return this.$container;
    }
}
export default skillItems;