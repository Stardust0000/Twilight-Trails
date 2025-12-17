let slideIndex= 0;
showSlides();
function showSlides(){ 
    let i;
let myslides= document.getElementsByClassName("slides");
console.log(myslides); 
let dots= document.getElementsByClassName("dot");
  for(i=0; i<myslides.length; i++){
    myslides[i].style.display = "none"}
slideIndex++;
    if(slideIndex> myslides.length){
        slideIndex = 1;
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    myslides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
   }
//Mid-section slideshow
let sideIndex = 1;
showSide(sideIndex);
function plusSlides(n){
    showSide(sideIndex +=n); }
function currentSlide(n){
    showSide(sideIndex = n); }
function showSide(n){
    let i;
    let sides= document.getElementsByClassName("side");
    if(n > sides.length){
        sideIndex =1
    }
    if(n < 1){
        sideIndex= sides.length
    }
    for(i=0; i < sides.length; i++){
        sides[i].style.display = "none";
    }
    sides[sideIndex - 1].style.display = "block";
}
//Card section slide show
let cardIndex =1;
showCard(cardIndex);
function cardBtn(n){
    showCard(cardIndex += n);
}
function currentCard(n){
    showCard(cardIndex = n);
}
function showCard(n){
    let cards = document.getElementsByClassName("card");
 // If cardIndex goes beyond the total number of cards, loop back to the start
    if(n > cards.length - 1){
        cardIndex = 1;
    }
//if cardIndex goes below 1, loop back to end
    if(n < 1){
        cardIndex = cards.length -1;
    }
    for(let i = 0; i < cards.length; i++){
        cards[i].style.display ="none";
    }
// Always show two cards: current card and the next one (if available)
    cards[cardIndex -1].style.display="block";//Show current card
    if(cardIndex < cards.length){
        cards[cardIndex].style.display = "block";//shows the next card too
    }
    else{//when at last card show 1st card along with last
        cards[0].style.display = "block";
    }
}
