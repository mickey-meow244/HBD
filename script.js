const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const final = document.getElementById("final");

document.getElementById("noBtn").onclick = () => {
  popup1.classList.remove("active");
  popup2.classList.add("active");
};

document.getElementById("againBtn").onclick = () => {
  popup2.classList.remove("active");
  popup1.classList.add("active");
};

document.getElementById("openBtn").onclick = () => {
  popup1.classList.remove("active");
  final.classList.add("show");
};
