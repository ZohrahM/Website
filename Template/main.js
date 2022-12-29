const input = document.querySelector(".theme-switcher input");
if(localStorage.getItem('dark')) {
  document.body.setAttribute("data-theme", "dark");
  document.getElementById("switcher").checked = true;
}

input.addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem('dark',this.checked);
    document.body.setAttribute("data-theme", "dark");
  } else {
    localStorage.removeItem('dark');
    document.body.setAttribute("data-theme", "light");
  }
});

