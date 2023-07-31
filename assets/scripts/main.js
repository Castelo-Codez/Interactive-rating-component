const ratingComponent = document.querySelector(".rating-component");
const $ratingBtns = document.querySelectorAll(".btns-list button");
const $ratingNum = document.querySelector(".rating-num");
const $submitBtn = document.querySelector(".submit");
const $endbox = document.querySelector(".end-face");
const $reloadBtn = document.querySelector(".re-rating");
let num;
window.addEventListener("click", (e) => {
    if (!document.querySelector("ul").contains(e.target)) {
        $ratingBtns.forEach((btn) => btn.classList.remove("selected"));
        num = undefined;
    }
});
$ratingBtns.forEach(($btn) => {
    $btn.addEventListener("mouseover", (e) => {
        $ratingBtns.forEach((btn) => btn.classList.remove("selected"));
        num = $btn.textContent;
        for (let i = 0; i < num; i++) {
            $ratingBtns[i].classList.add("selected");
        }
        $ratingNum.textContent = `you selected ${num} out of 5`;
    });
});

$submitBtn.addEventListener("click", (e) => {
    if (num == undefined) {
        e.preventDefault();
        ratingComponent.classList.add("error");
    } else {
        ratingComponent.classList.contains("error")
            ? ratingComponent.classList.remove("error")
            : "";
        $endbox.previousElementSibling.classList.remove("active");
        $endbox.classList.add("active");
    }
});

$reloadBtn.addEventListener("click", (e) => {
    window.location.reload();
});
