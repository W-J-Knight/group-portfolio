const willAppear = document.getElementById('willAppear');
const bootstrapAppear = document.getElementById('bootstrapAppear');

window.setTimeout(() => {
    bootstrapAppear.style.visibility = "visible";
}, 3000)

window.setTimeout(() => {
    willAppear.style.visibility = "visible";
}, 7000)

let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}
