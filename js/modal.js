'use strict'

{
const openBtn = document.getElementById("js-open");
const close = document.getElementById("js-close");

const modal = document.getElementById("js-modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

close.addEventListener("click", () => {
    modal.classList.remove("show");

});
}
