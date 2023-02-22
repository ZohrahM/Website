
var hamburger = document.querySelector('#display');
var nav = document.querySelector('#bar');
var crumb = document.querySelector('#breadcrumb');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('slide');
    crumb.classList.toggle('slide');
});




const input = document.querySelector(".theme-switcher input");
var icon = document.getElementById("icon")
var folderType = document.currentScript.getAttribute("Folder")

if(localStorage.getItem('dark')) {
  document.body.setAttribute("data-theme", "dark");
  document.getElementById("switcher").checked = true;
  if(folderType === "main"){
    icon.src = "../Picture/sun.svg";
  } else {icon.src = "../../Picture/sun.svg";}
}

input.addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem('dark',this.checked);
    document.body.setAttribute("data-theme", "dark");
    if(folderType === "main"){
      icon.src = "../Picture/sun.svg";
    } else {icon.src = "../../Picture/sun.svg";}
  } else {
    localStorage.removeItem('dark');
    document.body.setAttribute("data-theme", "light");
    if(folderType === "main"){
      icon.src = "../Picture/moon.svg";;
    } else {icon.src = "../../Picture/moon.svg";}
  }
});