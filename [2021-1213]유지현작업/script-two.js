const product = document.querySelector("#product");
const productSolution = document.querySelectorAll("#product .solution");
const productDiv = document.querySelectorAll("#product > div");

// console.dir(product);
// console.log(product.children.classList.contains("solution"));

// console.log(productSolution);
// console.log(productDiv);

// console.log(product.children);

// product.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.dir(event.target);
//   console.dir(event.target.nextElementSibling);
// });

product.addEventListener("click", (event) => {
  let img = event.target.nextElementSibling;
  console.log(img);
  // for (let i = 0; i < productSolution.length; i++) {
  //   productSolution[i].classList.add("hidden");
  // }
  img.classList.remove("hidden");
});
