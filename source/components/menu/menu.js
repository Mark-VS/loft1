/*
export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    array.forEach(function(item) {
          listItems += '<li>', + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
};
*/

export default function () {
   var pupsik = document.createElement("p");
   pupsik.innerHTML = "дружок-писёк-48";
   return pupsik;
};
