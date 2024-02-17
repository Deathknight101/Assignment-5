function BuyTicket() {
    const navigate = document.getElementById('ticket-book');
    navigate.scrollIntoView({ behavior: 'smooth' });
    console.log('buttonclicked');
}

const buttons= document.querySelectorAll('.btn');
buttons.forEach(function(button) {
    button.addEventListener("click", function onClick() {
        let index=0;
      // do something when the button is clicked
      console.log("You clicked a button");
      button.style.backgroundColor = 'lightgreen';
    });
  });

function clicked(){
    console.log('clicked');
}
function setBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}