import pic from './pic.jpeg';

function showHome(){
    const homecard = document.getElementById("pageWrapper");
    homecard.innerHTML = "";
    const container = document.createElement("div");
    container.id = "homeContainer";
    const pageIMG = new Image();
    pageIMG.src = pic;
    pageIMG.id="homeImage"
    container.appendChild(pageIMG);
    const name = document.createElement("h1");
    name.innerText = "Crazzy Pizza";
    container.appendChild(name);
    const describe = document.createElement("h2");
    describe.innerText = "The makers of finest Pizzas in Entire Narnaund.";
    container.appendChild(describe);
    const endtext = document.createElement("h3");
    endtext.innerText ="Dine in or Order via Telephone.";
    container.appendChild(endtext);
    homecard.appendChild(container);
};

export {showHome}