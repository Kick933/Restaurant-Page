import pizza1 from './pizza1.jpg';
import pizza2 from './pizza2.jpg';
function showMenu(){
    const container = document.getElementById("pageWrapper");
    container.innerHTML = "";
    // Creates a grid of 2 by 2
    const grid = document.createElement('div');
    grid.id = "menuGrid";
    // For 1st menu option.
    (function(){
    const option1 = document.createElement('div');
    option1.classList.add("menuOption");
    const name1 = document.createElement('h1');
    name1.innerText = "Farmer Fresh";
    const img1 = new Image();
    img1.src = pizza1;
    img1.classList.add("menuImage")
    const price1 = document.createElement('h2');
    price1.innerText = "Rs. 480";
    option1.appendChild(name1);
    option1.appendChild(img1);
    option1.appendChild(price1);
    grid.appendChild(option1);
    })();
    // For 2nd Menu option
    (function(){
    const option2 = document.createElement('div');
    option2.classList.add("menuOption");
    const name2 = document.createElement('h1');
    name2.innerText = "Cheese Burst";
    const img2 = new Image();
    img2.src = pizza2;
    img2.classList.add("menuImage");
    const price2 = document.createElement('h2');
    price2.innerText = "Rs. 499";
    option2.appendChild(name2);
    option2.appendChild(img2);
    option2.appendChild(price2);
    grid.appendChild(option2);
    })();
    container.appendChild(grid);
}


export { showMenu }