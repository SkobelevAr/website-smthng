// class of div - .row

const scrBtn = document.getElementById("scrollBtn");
const cards = document.getElementById("row");

scrBtn.addEventListener("click", () => {

    function addAnim() {
        cards.classList.add("animClass");
    }

    addAnim();

    setTimeout(removeClass, 5000);
});

function removeClass() {
    cards.classList.remove("animClass");
}
