
//To navigate between overlay container pages --->>>

let whatsPoppinCard = document.querySelector("#Whats-poppin-card");
let mainOverlayContainer = document.querySelector('.main-overlayContainer');
let mainParentContainer = document.querySelector('.main-parentContainer');

whatsPoppinCard.addEventListener("click", () => {
  
    mainParentContainer.style.display = "none";
    mainOverlayContainer.style.display = "block";
    homebtn.classList.add('inactive');
    
});

let backToHome = document.querySelector('#backToHome');

backToHome.addEventListener("click", () => {

    console.log("clicked")
      
     mainOverlayContainer.style.display = "none";
     mainParentContainer.style.display = "block";
     homebtn.classList.remove('inactive');
     
});

let homebtn = document.querySelector('.side-topContainer-home');
homebtn.addEventListener('click', () => {
    mainOverlayContainer.style.display = "none";
    mainParentContainer.style.display = "block";
    homebtn.classList.remove('inactive');
})