//Opening and closing the modal/
function openModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
  }
function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}
//************end**************/

function myFunction() {
  var x = document.querySelector(".container");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  console.log(text);
}

myFunction();