class InforItems {
    $container;
    $iconContain;
    $icon;
    $text;

    $studyTime;
    $major;
    $uniName;
    constructor(inforArray, type) {
        this.$container = document.createElement("li");
        if (type === "contact") {
            this.$iconContain = document.createElement("span");
            this.$iconContain.classList.add("icon");

            this.$iconContain.innerHTML = inforArray[0];

            this.$text = document.createElement("span");
            this.$text.classList.add("text");
            this.$text.innerHTML = inforArray[1];
            this.$container.append(this.$iconContain, this.$text);
        }
        else if (type === "edu") {
            this.$studyTime = document.createElement("h5");
            this.$studyTime.innerText = inforArray[0];

            this.$major = document.createElement("h4");
            this.$major.innerText = inforArray[1];

            this.$uniName = document.createElement("h4");
            this.$uniName.innerText = inforArray[2];
            this.$container.append(this.$studyTime, this.$major, this.$uniName);
        }
    }
    render() {
        return this.$container;
    }
}
export default InforItems;