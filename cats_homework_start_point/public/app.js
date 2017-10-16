var app = function(){

var catArticle = document.createElement('article');
catArticle.classList.add('cat');

  var blockcat = document.createElement('blockcat');
  blockcat.innerText = "Name: Squiggles";

  var cite = document.createElement('favouriteFood');
  favouriteFood.innerText = "Favourite Food: dead flesh";

  blockcat.appendChild(favouriteFood);

  catArticle.appendChild(blockcat);

  var cats = document.querySelector('#cats');
  cats.appendChild(catArticle);
}


// var makeNewCat = function () {
//   var newCat = document.createElement("ul");
//   cats.classList.add("cat");
//
//   var catName = document.createElement("catName")
//   catName.textContent = "Name: Scratchy";
//
//   var catFood = document.createElement("favouriteFood");
//   favouriteFood.textContent = "Favourite Food: raw fish";
//
//   li.appendChild(catFood);
//   li.appendChild(catName);
//
//   var cats = document.querySelector("section#cats");
//   cats.appendChild(newCat);
//
//   console.dir(cats);
// }
