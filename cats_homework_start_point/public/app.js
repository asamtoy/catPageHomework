var cats = [
  {
    name: "boba",
    favFood: "Broccoli"
  },
  {
    name: "Barnaby",
    favFood: "Tuna"
  },
  {
    name: "Kat",
    favFood: "Raw meat"
  }
]


  cats.forEach(function(cat){
    var catsUl = document.getElementById("cats")
    var li = document.createElement("li")
    var b = document.createElement("b")
    li.innerText = cat.name
    b.innerText = cat.favFood
    li.appendChild(b)
    catsUl.appendChild(li)
  })
