const users = {
  id: Math.random(),
  email: "",
  pass: 0,
};

function accound() {
  let emailInp = document.querySelector("#email").value;
  let passInp = document.querySelector("#password").value;
  let btn = document.querySelector("#btn2");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  users.email = emailInp;
  users.pass = passInp;

  localStorage.setItem("users", JSON.stringify(users));

  console.log("Qeydiyatdan Kecdiniz!");
}




function login() {
  let emailInp = document.querySelector("#email").value;
  let passInp = document.querySelector("#password").value;
  let btn = document.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  let data = JSON.parse(localStorage.getItem("users"));

  if (data.email == emailInp && data.pass == passInp) {
    alert("Daxil Oldunuz!");
  } else {
    alert("Sifre ve ya Email yalnisdir");
    return;
  }
}
