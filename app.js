const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const color = document.getElementById("color");
const hexCode = document.getElementById("hexcode");
const alert = document.getElementById("alert");
let genHexColor = () => {
  let newHexColor = `#` + Math.random().toString(16).substring(2, 8);
  hexCode.value = newHexColor;
  color.style.backgroundColor = newHexColor;
  color.classList.remove("show");
  setTimeout(() => {
    color.classList.add("show");
  }, 10);
};
window.onload = genHexColor;
generate.addEventListener("click", genHexColor);
copy.addEventListener("click", () => {
  hexCode.select();
  document.execCommand("copy");
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 1000);
});
