//Opening and closing the modal/

// Details Modal
function openModal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector(".overlay");
    var valid = validateForm();
    if (valid == true){
      modal.style.display = 'block';
      overlay.style.display = "block";
    }
    else {
      alert("All areas must be filled out");
    }
  }

function resetValues() {
  document.querySelector("#frm1").reset();
  document.querySelector(".info").innerHTML = " ";
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}

// Confirmation Modal
function openConfirmModal(){
  closeModal();
  const ConfirmModal = document.querySelector(".confirm-modal");
  ConfirmModal.style.display = "block";
  document.querySelector(".overlay").style.display = "block";
  }

function closeModal() {
  document.querySelector(".modal").style.display = 'none';
  document.querySelector(".overlay").style.display = "none";
}

function closeConfirmModal (){
  document.querySelector(".confirm-modal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}
//************end**************/



//*Collecting and displaying forma data in the modal */
// Get the form element
const form = document.getElementById("frm1");

// Add an event listener for the form submit event
form.addEventListener("submit", function(event) {
  // First, prevent the default form submission behavior
  event.preventDefault();

  // Collect the form data
  const formData = new FormData(form);

  for (const [key, value] of formData) {
    let info = document.querySelector(".info");
    info.innerHTML += `${key}: ${value} <br>`; //display data in modal
    console.log(`${key}: ${value} <br>`); //log the data in the console as well
  }
});
//*************End**************************** */


//Form Validation
function validateForm() {
  var fname = document.forms["frm1"]["first-name"].value;
  var lname = document.forms["frm1"]["last-name"].value;
  var cell = document.forms["frm1"]["cell-no"].value;
  var email = document.forms["frm1"]["email"].value;
  var persons = document.forms["frm1"]["persons"].value;
  var date = document.forms["frm1"]["date"].value;
  var time = document.forms["frm1"]["time"].value;
  if (fname == "" || lname == "" || cell == "" || email == "" || persons == "" || date == ""|| time == "") {
    return false;
  }
  else {
    return true;
  }
}