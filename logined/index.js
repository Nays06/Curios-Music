let user_name = localStorage.getItem("user_name")
let user_surname = localStorage.getItem("user_surname")

let uName = `${user_name} ${user_surname}`

if(uName.length > 12){
    uName = uName.slice(0, 12) + '...'
}

document.querySelector(".user-name").innerHTML = uName


const date = new Date();
function getMonthName(monthNumber) {
    date.setMonth(monthNumber);

    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  
    return month;
}

document.querySelector(".user-join").innerHTML = localStorage.getItem("user_join_date")

document.querySelector("#logout").addEventListener("click", ()=>{
    let a = confirm("You confirm logout?")

    if(a){
        localStorage.removeItem("isLogined")
        window.location = "../reg/log/index.html"
    }
})



// function myNFTs(){
//     document.querySelector(".container-delete").remove()
//     let div = document.createElement("div")

//     div.className = "container-delete"
//     document.querySelector(".container").append("div")

//     div.className = "container-txt"
//     div.innerHTML = "Wallet"
//     document.querySelector(".container-delete").append("div")

//     div.className = "container-opisanie-txt"
//     div.innerHTML = "(8 NFTs across 2 Editions)"
//     document.querySelector(".container-delete").append("div")
// }

// function myNFTs() {
//     // document.querySelector(".user-select").style.border = "1px solid red"
//     document.querySelector(".container-delete")?.remove();
    
//     let containerDelete = document.createElement("div");
//     containerDelete.className = "container-delete";
    
//     let containerTxt = document.createElement("div");
//     containerTxt.className = "container-txt";
//     containerTxt.textContent = "Wallet";
    
//     let containerOpisanieTxt = document.createElement("div");
//     containerOpisanieTxt.className = "container-opisanie-txt";
//     containerOpisanieTxt.textContent = "(8 NFTs across 2 Editions)";
    
//     containerDelete.appendChild(containerTxt);
//     containerDelete.appendChild(containerOpisanieTxt);
    
//     let dlinCard1 = createDlinCard("Limited VERZUZ Commemorative NFT Bundle", "Edition of 50,000", "This includes x10 exclusive images from some of the best moments from past VERZUZ events");
//     let dlinCard2 = createDlinCard("Limited VERZUZ Commemorative NFT Bundle", "Edition of 50,000", "This includes x10 exclusive images from some of the best moments from past VERZUZ events");
    
//     containerDelete.appendChild(dlinCard1);
//     containerDelete.appendChild(dlinCard2);
//     document.querySelector(".container").appendChild(containerDelete);
    
//     function createDlinCard(title, cost, description) {
//         let dlinCard = document.createElement("div");
//         dlinCard.className = "dlin-card";

//         let dlinCardPhoto = document.createElement("div");
//         dlinCardPhoto.className = "dlin-card-photo";
//         let img = document.createElement("img");
//         img.src = "../img/ava4.jpg";
//         img.alt = "";
//         dlinCardPhoto.appendChild(img);

//         let dlinCardCont = document.createElement("div");
//         dlinCardCont.className = "dlin-card-cont";

//         let dlinCardTxt = document.createElement("div");
//         dlinCardTxt.className = "dlin-card-txt";
//         dlinCardTxt.textContent = title;
//         let dlinCardCost = document.createElement("div");
//         dlinCardCost.className = "dlin-card-cost";
//         dlinCardCost.textContent = cost;
//         let dlinCardOpisanie = document.createElement("div");
//         dlinCardOpisanie.className = "dlin-card-opisanie";
//         dlinCardOpisanie.textContent = description;

//         let dlinCardButTok = document.createElement("div");
//         dlinCardButTok.className = "dlin-card-but-tok";

//         let dlinCardBut = document.createElement("div");
//         dlinCardBut.className = "dlin-card-but";
//         let dlinCardButTxt = document.createElement("div");
//         dlinCardButTxt.className = "dlin-card-but-txt";
//         dlinCardButTxt.textContent = "View tokens";

//         let dlinCardTokens = document.createElement("div");
//         dlinCardTokens.className = "dlin-card-tokens";
//         dlinCardTokens.textContent = "You own 2x tokens";

//         dlinCardBut.appendChild(dlinCardButTxt);
//         dlinCardButTok.appendChild(dlinCardBut);
//         dlinCardButTok.appendChild(dlinCardTokens);

//         dlinCardCont.appendChild(dlinCardTxt);
//         dlinCardCont.appendChild(dlinCardCost);
//         dlinCardCont.appendChild(dlinCardOpisanie);
//         dlinCardCont.appendChild(dlinCardButTok);

//         dlinCard.appendChild(dlinCardPhoto);
//         dlinCard.appendChild(dlinCardCont);

//         return dlinCard;
//     }
// }

function myNFts(){
    document.querySelector(".myNFTs").classList.remove("none")
    document.querySelector(".myBids").classList.add("none")
    document.querySelector(".sales").classList.add("none")
    // document.querySelector("#myNFTs").style.border = "1px solid rgb(255 41 248)"
    // document.querySelector("#myNFTs").style.color = "rgb(255 41 248)"
    // document.querySelector("#myNFTs_stroke").style.stroke = "rgb(255 41 248)"
}

function myBids(){
    document.querySelector(".myNFTs").classList.add("none")
    document.querySelector(".myBids").classList.remove("none")
    document.querySelector(".sales").classList.add("none")
}

function sales(){
    document.querySelector(".myNFTs").classList.add("none")
    document.querySelector(".myBids").classList.add("none")
    document.querySelector(".sales").classList.remove("none")
}