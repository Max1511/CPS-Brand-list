const windowWidthSmall = 768;
const windowWidthLarge = 1120;

// Grid

const brandList = document.querySelectorAll(".brands__list");
const brandElements = document.querySelectorAll(".brands__brand");
const showBrandsButton = document.querySelector(".show-more-button");
const hideBrandsButton = document.querySelector(".hide-button");
const swiperClassName = ".brand-swiper";
const swiperPaginationClassName = ".swiper-pagination";

let initHiddenList = function (elements, showButton, hideButton, count) {
    showButton.classList.remove("hidden");
    hideButton.classList.add("hidden");
    elements.forEach((element, index) => {
        element.classList.add("hidden");
        if (index < count) {
            element.classList.remove("hidden");
        }
    });
}

let openList = function (elements, showButton, hideButton) {
    showButton.addEventListener("click", () => {
        elements.forEach(element => {
            element.classList.remove("hidden");
        });
        showButton.classList.add("hidden");
        hideButton.classList.remove("hidden");
        shownAll = true;
    });
}

let closeList = function (elements, showButton, hideButton, count) {
    hideButton.addEventListener("click", () => {
        initHiddenList(elements, showButton, hideButton, count);
        shownAll = false;
    });
}

let shownAll = false;
let visibleBrandsCount = 8;

window.addEventListener("resize", () => {
    if (window.innerWidth >= windowWidthSmall && window.innerWidth < windowWidthLarge) {
        visibleBrandsCount = 6;
    }
    else if (window.innerWidth >= windowWidthLarge) {
        visibleBrandsCount = 8;
    }

    if (shownAll) {
        openList(brandElements, showBrandsButton, hideBrandsButton);
    }
    else {
        initHiddenList(brandElements, showBrandsButton, hideBrandsButton, visibleBrandsCount);
    }
});

initHiddenList(brandElements, showBrandsButton, hideBrandsButton, visibleBrandsCount);
openList(brandElements, showBrandsButton, hideBrandsButton);
closeList(brandElements, showBrandsButton, hideBrandsButton, visibleBrandsCount);

// Swiper

var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});