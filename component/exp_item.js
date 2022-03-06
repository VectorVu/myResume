class ExpItems {
    $box;
    $year_company;
    $year;
    $company;
    $text;
    $jobTitle;
    $jobDescrip;
    $link;
    constructor(year, companyName, jobTitle, descipt) {
        this.$box = document.createElement("div");
        this.$box.classList.add("box");

        this.$year_company = document.createElement("div");
        this.$year_company.classList.add("year_company");

        this.$year = document.createElement("h5");
        this.$year.innerText = year;

        this.$company = document.createElement("h5");
        this.$company.innerText = companyName;

        this.$text = document.createElement("div");
        this.$text.classList.add("text");

        this.$jobTitle = document.createElement("h4");
        this.$jobTitle.innerText = jobTitle;

        this.$jobDescrip = document.createElement("p");
        this.$jobDescrip.innerText = descipt;

        // this.$link = document.createElement("a");
        // this.$link.href = url;

    }
    render() {
        this.$year_company.append(this.$year, this.$company);
        this.$text.append(this.$jobTitle, this.$jobDescrip);
        this.$box.append(this.$year_company, this.$text);
        return this.$box;
    }
}
export default ExpItems;