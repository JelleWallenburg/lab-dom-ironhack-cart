// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price=product.querySelector(".price span").innerHTML;
  let quantity=product.querySelector(".quantity input").value;
  let multiplication= price*quantity;
  product.querySelector(".subtotal span").innerHTML= multiplication;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  for(let i=0; i < document.getElementsByClassName("product").length; i++){
    let singleProduct= document.getElementsByClassName("product")[i];
    updateSubtotal(singleProduct);
  }

  // ITERATION 3
  totalPay= 0;
  for(let i=0; i<document.getElementsByClassName("product").length; i++){
    totalPay+= Number(document.getElementsByClassName("product")[i].querySelector(".subtotal span").innerHTML)
    document.querySelector("#total-value span").innerHTML=totalPay
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  product= target.parentNode.Parent
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
}

// ITERATION 5

function createProduct() {
  console.log("test")
  //... your code goes here
  let name=document.querySelector(".name-create input").value;
  let unitPrice= document.querySelector(".price-create input").value;

  let table= document.getElementById("cart").querySelector("tbody");
  row=table.insertRow(-1)
  
  let c1= row.insertCell(0);
  let c2= row.insertCell(1);
  let c3= row.insertCell(2);
  let c4= row.insertCell(3);
  let c5= row.insertCell(4);

  const span = document.createElement("span");
  c1.setAttribute("class", "product");
  c1.appendChild(span);
  c1.querySelector("span").innerHTML=document.querySelector(".name-create input").value; 

  c2.setAttribute("class", "price");
  c2.appendChild(span);
  c2.querySelector("span").innerHTML=document.querySelector(".price-create input").value;

  const input = document.createElement("input");
  c3.setAttribute("class", "quantity");
  c3.appendChild(input)

  c4.setAttribute("class", "subtotal");

  const button = document.createElement("button");
  c5.setAttribute("class", "action")
  c5.appendChild(button)

  // td class="quantity">
  //           <input type="number" value="0" min="0" placeholder="Quantity" />
  //         </td>

//   let c4= document.createElement("td");
//   let c5= document.createElement("td");
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

for(let i=0; i< document.getElementsByClassName("btn btn-remove").length; i++){
window.addEventListener('load', () => {
  let removeProductBtn = document.getElementsByClassName("btn btn-remove")[i];
  removeProductBtn.addEventListener('click', removeProduct)
});
}

window.addEventListener('load', () => {
  const createProductBtn= document.getElementById('create');
  createProductBtn.addEventListener("click", createProduct);
});
