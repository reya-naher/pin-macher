//Hidden notify-section
document.getElementById('match').style.display = 'none';
document.getElementById('notMatch').style.display = 'none';
//Generate pin code
document.querySelector('.generate-btn').addEventListener('click', function () {
  let randomValue = Math.floor(1000 + Math.random() * 9000);
  document.querySelector('.pin-code').value = randomValue
})
//Input number , cut , backspace
var output = document.getElementById('output')
function inputNum(obj) {
  let inputValue = obj.innerHTML;
  if (inputValue == 'C') {
    output.value = ""
  }
  else {
    output.value += inputValue
  }
}
function backSpace() {
  let spaceVal = output.value
  output.value = spaceVal.substring(0, spaceVal.length - 1)
}
//Display notify-section
let tryCheck = 3;
document.querySelector(".submit-btn").addEventListener('click', function () {
  let outputValue = document.getElementById('output').value;
  let pinCodeValue = document.querySelector('.pin-code').value;
  //not match pin
  if (outputValue != pinCodeValue) {
    document.getElementById('match').style.display = 'none'
    document.getElementById('notMatch').style.display = 'block'
    //try checker 
    if (tryCheck == 2) {
      document.querySelector('.action-left').innerHTML = "2 try left"
    }
    else if (tryCheck == 1) {
      document.querySelector('.action-left').innerHTML = "1 try left"
    }
    else {
      document.querySelector('.action-left').innerHTML = "No try left"
      document.querySelector(".submit-btn").disabled = true
      document.querySelector(".submit-btn").style.opacity = ".5"
    }
  }
  //match pin
  else {
    document.querySelector('.action-left').style.display = 'none'
    document.getElementById('match').style.display = 'block'
    document.getElementById('notMatch').style.display = 'none'
  }
})


