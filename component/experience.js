import ExpItems from "./exp_item.js";


class ExpList {
    $container;
    $title;
    $CountDown;
    $musicWeb;
    $pdfOrUrl;
    $weSound;
    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("objective");

        this.$title = document.createElement("h2");
        this.$title.classList.add("rightTitle");
        this.$title.innerText = "Projects";

        this.$weSound = new ExpItems(
            "we Sound",
            "We Sound is my latest project. As the name implies, this site allows users to upload their own audio files to share with the world. In addition, We Sound is till being updated with new features for a better user experience. Project detail here: ",
            "https://we-sound.vercel.app/",
            "ReactJS, Bootstrap, NodeJS, MongoDB"
        );
        this.$CountDown = new ExpItems
        (
            "CountDown",
             "This is a small project of mine as I learn how to build a website with simple features using html, css, and Javascript. This website allows the user to enter a future date and it will display and count down the number of days, hours, minutes, and seconds from the current date to the entered landmark. Project detail here: ",
             "https://vectorvu.github.io/CountDown/",
             "HTML, CSS, JavaScript"
        );
       
    }
    render() {
        this.$container.append(this.$title, this.$weSound.render(), this.$CountDown.render());
        return this.$container;
    }
}
export default ExpList;