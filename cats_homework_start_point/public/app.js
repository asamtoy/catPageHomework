var makeNewCat = function () {
  var newCat = document.createElement("ul");
  cats.classList.add("cat");

  var catName = document.createElement("catName")
  catName.textContent = "Name: Scratchy";

  var catFood = document.createElement("favouriteFood");
  favouriteFood.textContent = "Favourite Food: raw fish";

  li.appendChild(catFood);
  li.appendChild(catName);

  var cats = document.querySelector("section#cats");
  cats.appendChild(newCat);

  console.dir(cats);
}
