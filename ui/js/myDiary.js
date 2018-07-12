let cardBoxOptionsElement = document.getElementById("card-box__options");
cardBoxOptionsElement.addEventListener('mouseover', showEditDelBox);

// let cardDelEditElement = document.getElementById('cardDelEditBox');
// cardDelEditElement.addEventListener('mouseout', function(event){
//   event.target.style.display = "none";
// });

function showEditDelBox () {
  let cardDelEditElement = document.getElementById('cardDelEditBox');
  cardDelEditElement.style.display="block";
}

// function hideEditDelBox () {
//   let cardDelEditElement = document.getElementById('cardDelEditBox');
//   cardDelEditElement.style.display="none";
// }
// function hideEditDelBox () {
//   let cardBoxOptionsElement = document.getElementById('card-box__options');
//   cardBoxOptionsElement.style.display="none";
// }
