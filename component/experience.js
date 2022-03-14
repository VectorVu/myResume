import ExpItems from "./exp_item.js";


class ExpList {
    $container;
    $title;
    $ZoZ;
    $musicWeb;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("objective");

        this.$title = document.createElement("h2");
        this.$title.classList.add("rightTitle");
        this.$title.innerText = "knowledge & Skills";

        this.$ZoZ = new ExpItems
        (
            "CountDown",
             "This is a small project of mine as I learn how to build a website with simple features using html, css, and Javascript. This website allows the user to enter a future date and it will display and count down the number of days, hours, minutes, and seconds from the current date to the entered landmark. Project detail here: ",
             "https://vectorvu.github.io/CountDown/"
        );
        this.$musicWeb = new ExpItems
        (
            "RealSound",
            "This is my current project, a music player website, it has a list of given songs and the user can listen to any song, they can also add any song to their favorites playlist (features in development). This's just a beta and more features will be added in the future. Project detail here: ",
            "https://vectorvu.github.io/RealSound/"
        );
    }
    render() {
        this.$container.append(this.$title, this.$ZoZ.render(), this.$musicWeb.render());
        return this.$container;
    }
}
export default ExpList;