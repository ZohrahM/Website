
var hamburger = document.querySelector('#display');
var nav = document.querySelector('#bar');
var crumb = document.querySelector('#breadcrumb');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('slide');
  crumb.classList.toggle('slide');
});




const input = document.querySelector(".theme-switcher input");
var icon = document.getElementById("icon")
var folderType = document.currentScript.getAttribute("Folder")

if (localStorage.getItem('dark')) {
  document.body.setAttribute("data-theme", "dark");
  document.getElementById("switcher").checked = true;
  if (folderType === "main") {
    icon.src = "../Picture/sun.svg";
  } else { icon.src = "../../Picture/sun.svg"; }
}

input.addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem('dark', this.checked);
    document.body.setAttribute("data-theme", "dark");
    if (folderType === "main") {
      icon.src = "../Picture/sun.svg";
    } else { icon.src = "../../Picture/sun.svg"; }
  } else {
    localStorage.removeItem('dark');
    document.body.setAttribute("data-theme", "light");
    if (folderType === "main") {
      icon.src = "../Picture/moon.svg";;
    } else { icon.src = "../../Picture/moon.svg"; }
  }
});




var form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form data as an object
  var formData = new FormData(form);
  var data = {};
  formData.forEach(function (value, key) {
    data[key] = value;
  });

  var modal = document.getElementById("confirmModal");
  modal.style.display = "block";

  // Update modal content with form data
  document.getElementById("modalName").textContent = data.name;
  document.getElementById("modalAge").textContent = data.age;
  document.getElementById("modalGender").textContent = data.gender;
  document.getElementById("modalEmail").textContent = data.umail;
  document.getElementById("modalPhone").textContent = data.telno;
  document.getElementById("modalExperience").textContent = data.experience;
  document.getElementById("modalConfirmation").textContent = data.confirmation;

  var cancelBtn = document.getElementById("cancelBtn");
  var confirmButton = document.getElementById("confirmBtn");

  var modal = document.getElementById("confirmModal");
  modal.style.display = "block";

  cancelBtn.addEventListener("click", function cancelHandler() {
    modal.style.display = "none";
    cancelBtn.removeEventListener("click", cancelHandler);
    confirmButton.removeEventListener("click", confirmHandler);
  });

  function confirmHandler() {

    // Retrieve existing data array from local storage, create if do not exist
    var dataArray = JSON.parse(localStorage.getItem("registrationDataArray")) || [];

    // Push new form data into array
    dataArray.push(data);

    // Convert array to string and store in local storage
    localStorage.setItem("registrationDataArray", JSON.stringify(dataArray));

    window.location.href = "../About_Us/About_Us.html";

    cancelBtn.removeEventListener("click", cancelHandler);
    confirmButton.removeEventListener("click", confirmHandler);

  }
  confirmButton.addEventListener("click", confirmHandler);

});