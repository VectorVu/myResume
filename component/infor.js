import InforItems from "./infor_item.js";

class Infor {
    $container;
    $title;

    $listInfor;
    // items
    $phone;
    $email;
    $birthday;
    $address;
    $github;
    //education

    $uni1;
    $uni2;

    constructor(type) {
        this.$container = document.createElement("div");
        this.$container.classList.add("contact");

        this.$title = document.createElement("h3");
        this.$title.classList.add("title");
        this.$listInfor = document.createElement("ul");
        if (type === "contact") {

            this.$title.innerText = "Contact Information";

            this.$phone = new InforItems(
                [
                    `<i class="fa fa-phone" aria-hidden="true"></i>`,
                    "+84 326 273 864"
                ],
                type
            );
            this.$birthday = new InforItems(
                [
                    `<i class="fa fa-calendar" aria-hidden="true"></i>`,
                    "Apr 26, 1998"
                ],
                type
            );
            this.$email = new InforItems(
                [
                    `<i class="fa fa-envelope" aria-hidden="true"></i>`,
                    "vuhoangtruong1998@gmail.com"
                ],
                type
            );
            this.$address = new InforItems(
                [
                    `<i class="fa fa-map-marker" aria-hidden="true"></i>`,
                    "Nhon Trach, Dong Nai, Viet Nam"
                ],
                type
            );
            this.$github = new InforItems(
                [
                    `<i class="fa fa-github" aria-hidden="true"></i>`,
                    `<a href="https://github.com/VectorVu" style="text-decoration: none; color:#fff" target="_blank">https://github.com/VectorVu</a>`
                ],
                type
            )
            this.$listInfor.append(
                this.$birthday.render(),
                this.$phone.render(),
                this.$email.render(),
                this.$address.render(),
                this.$github.render()
            );
        }
        else if (type === "edu") {
            this.$container.classList.add("edu");
            this.$title.innerText = "Education";
            this.$uni1 = new InforItems(
                [
                    "2016 - 2020",
                    "Automation",
                    "Industrial  University Of HoChiMinh City"
                ],
                type
            )
            this.$uni2 = new InforItems(
                [
                    "2021 - Present",
                    "Information Technology",
                    "University Of Informaiton Technology"
                ],
                type
            )
            this.$listInfor.append(
                this.$uni1.render(),
                this.$uni2.render(),
            );
        }
    }
    render() {

        this.$container.append(this.$title, this.$listInfor);
        return this.$container;
    }
}
export default Infor;
