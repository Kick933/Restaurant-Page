function showContact(){
    const contactCard = document.getElementById("pageWrapper");
    contactCard.innerHTML = "";
    const container = document.createElement("div");
    container.id = "contact_container";
    const name = document.createElement("h1");
    name.innerText = "The Crazzy Pizza";
    container.appendChild(name);
    const address = document.createElement("h2");
    address.innerText = "C-121, Jind Road, Narnaund \n PIN 125039";
    container.appendChild(address);
    const mobile = document.createElement("h3")
    mobile.innerText = "Mobile: 9671343335";
    container.appendChild(mobile);
    contactCard.appendChild(container)
}
 
export {showContact}