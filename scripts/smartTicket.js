const titleContainer = document.getElementById("title-container");
seatDec = document.getElementById('seat-decrement');
let seatcount = document.getElementById('seatCount');
discEnable = document.getElementById('disc-enable');
nextEnable = document.getElementById('next');
let inputval = "";
function BuyTicket() {
  const navigate = document.getElementById('ticket-book');
  navigate.scrollIntoView({ behavior: 'smooth' });
  console.log('buttonclicked');
}
function check(){
  if (selectedSeats.length > 0 && inputval !== "") {

    nextEnable.removeAttribute("disabled");
  } else {
    nextEnable.setAttribute("disabled", "");
  }
}
function removeDuplicates(arr) {
  return arr.filter((item,
    index) => arr.indexOf(item) === index);
}
function globalvariable(inputvalue) {
  inputval = inputvalue;
  check();

}

function refreshSeatContainer() {
  titleContainer.innerHTML = "";
  total = 0
  seatcount.innerText = 0;
  document.getElementById('total-price').innerText = 0;
  seatDec.innerText = 40;


  for (i = 0; i < selectedSeats.length; i++) {

    const p = document.createElement("p");
    p.innerText = selectedSeats[i];
    const c = document.createElement("p");
    let text = "Economy";
    c.innerText = text;
    const t = document.createElement("span");
    let price = 550;
    t.innerText = price
    titleContainer.appendChild(p);
    titleContainer.appendChild(c);
    titleContainer.appendChild(t);

    seatcount.innerText = selectedSeats.length;
    console.log(selectedSeats.length);
    total = 550 * selectedSeats.length;
    document.getElementById('total-price').innerText = total;
    seatDec.innerText = 40 - selectedSeats.length;

  }
  if (selectedSeats.length >= 4) {
    discEnable.removeAttribute("disabled");
    alert('You have reached max limit! And YOU ARE ELIGIBLE FOR COUPON!');
    const discbtn = document.getElementById("apply-btn");
    discbtn.classList.remove('btn-disabled');
    discbtn.addEventListener("click", function () {
      const cupon = document.getElementById("disc-enable").value;
      const couponCode = cupon.split(" ").join("").toUpperCase();
      console.log(couponCode);
      if (couponCode === "COUPLE20") {
        alert("discount added")
        const grandTotal = document.getElementById('grand-total');
        const discountAmount = total * 0.2;
        const newAmount=total-discountAmount;
        grandTotal.innerText = newAmount;
        discEnable.setAttribute("disabled", "");
        discbtn.classList.add('btn-disabled');
        return;
      }
      if (couponCode === "NEW15") {
        alert("discount added")
        const grandTotal = document.getElementById('grand-total');
        const discountAmount = total * 0.15;
        const newAmount=total-discountAmount;
        grandTotal.innerText = newAmount;
        discEnable.setAttribute("disabled", "");
        discbtn.classList.add('btn-disabled');
        return;
      } else {
        alert("invalid Coupon Code");
        return;
      }

    })
    // discEnable.setAttribute("disabled","");
  }else{
    discEnable.setAttribute("disabled","");
  }
  check();
}




let selectedSeats = [];
const clickBtn = document.querySelectorAll(".gridButton");


nextbtn = document.getElementById('next');
nextbtn.addEventListener("click", function () {
  console.log('click');

  hideElementById('main');
  showElementById('success');

})

contbtn = document.getElementById('continue');
contbtn.addEventListener("click", function () {
  console.log('click');

  showElementById('main');

  hideElementById('success');

})
function pushUnique(array, element) {
  if (!array.includes(element)) {
    array.push(element);
  }
}


function arr() {
  arr = [];
  for (let i = 0; i < clickBtn.length; i++) {
    arr.push(clickBtn[i].innerText);
  }
  return arr;
}
// array track
for (let i = 0; i < clickBtn.length; i++) {
  const mybutton = clickBtn[i];

  mybutton.addEventListener("click", function () {

    if (selectedSeats.includes(clickBtn[i].innerText)) {

      selectedSeats = selectedSeats.filter(item => item !== clickBtn[i].innerText);
      console.log('seat already selected');

    } else {
      if (selectedSeats.length >= 4) {
        alert("maximum Limit");
        return;
      }
      selectedSeats.push(clickBtn[i].innerText);
    }
    console.log(selectedSeats);
    refreshSeatContainer();


    toggleBackgroundColorById(mybutton);




    

  })
}

