var button = document.querySelector(".show-cat ");
//console.log(button.innerHTML);

var cat = document.querySelector(".cat");
//console.log(cat.innerHTML);

button.addEventListener("click", function () {
  //console.log("It's working!");
  cat.classList.add("show");
});
