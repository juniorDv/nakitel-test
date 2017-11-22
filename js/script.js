/*Slider*/
var slPagItem = document.querySelectorAll(".slidesPaginationItem");
var slControl = document.querySelector(".slidesControl");

var activeItem = 0;

for (var i = 0; i < slPagItem.length; i++) {
    var slItem = slPagItem[i];
    slItem.addEventListener('click', setClickedItem, false);
    slItem.itemID = i;
}

slPagItem[activeItem].classList.add("active");

function setClickedItem(e) {
    removeActiveItems();

    var clickedItem = e.target;
    activeItem = clickedItem.itemID;

    changePosition(clickedItem);
}

function removeActiveItems() {
    for (var i = 0; i < slPagItem.length; i++) {
        slPagItem[i].classList.remove("active");
    }
}

function changePosition(slItem) {
    slItem.classList.add("active");

    var position = slItem.getAttribute("data-slidesvalue");
    slControl.style.left = position;
}
/*End Slider*/
