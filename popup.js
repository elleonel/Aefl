var a = fetch("https://raw.githubusercontent.com/MrAskGamer/Alef/main/popup.html").then((r) => r.text());;
a.then(response => {
  document.body.innerHTML = response;
});
