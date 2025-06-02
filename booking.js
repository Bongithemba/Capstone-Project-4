//Opening and closing the modal/

// Details Modal
function openModal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector(".overlay");
    modal.style.display = 'block';
    overlay.style.display = "block";

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
  }
});

//*************End**************************** */
