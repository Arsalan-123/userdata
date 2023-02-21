// signup
function signup() {
  var name = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  let userRecords = new Array();
  userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
  if (userRecords.some((v) => { return v.email == email })) {
    alert("This email is already registered plz add a new email")
  }
  else {
    userRecords.push({
      "name": name,
      "email": email,
      "password": password
    })
    localStorage.setItem("users", JSON.stringify(userRecords)
    );

  }

}
//logiin btn
function loginbtn() {
  window.location.href = "./login.html";
}
// login
function login() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var s1 = document.getElementById('s1');
  var s2 = document.getElementById('s2');

  let userRecords = new Array();
  userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
  if (email == '') {
    s1.innerHTML = "*Must be filled", s2.innerHTML = "*Must be filled"
  } else {
    // Search for a matching record in the userRecords array
    const userFound = userRecords.some((v) => {
      return v.email == email && v.password == password;
    });

    if (userFound) {
      window.location.href = "./home.html"

    } else {
      alert("plz correct valid")
    }
  }

















}


// for home page


let usercontent = document.getElementById('usercontent')
let addusercontent = document.getElementById('addusercontent')
let btn = addusercontent.innerText;
let recordDisplay = document.getElementById('record');
let userArray = [];
let edit = null
let objstr = localStorage.getItem('users')
if (objstr = null) {
  userArray = JSON.parse(objstr);
}
displayInfo()
console.log(userArray)
addusercontent.onclick = () => {
  let userdata = usercontent.value;

  if (edit != null) {
    userArray.splice(edit, 1, { 'textfield': userdata })
    edit = null
  }
  else {
    userArray.push({ 'textfield': userdata });

  }

  console.log(userArray);
  saveInfo(userArray);
  usercontent.value = ""

  addusercontent.innerText = btn;

}

function saveInfo(userArray) {
  let str = JSON.stringify(userArray)
  localStorage.setItem("users ", str)
  displayInfo()
}
function displayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += `<tr>
<th scope="row">${i + 1}</th>
<td colspan="2">${user.textfield}</td>
<td><button onclick = "editInfo(${i})"> Edit</button></td>
<td><button  onclick = "deleteInfo(${i})">Delete</button></td>

</tr>`
  })
  recordDisplay.innerHTML = statement;
}
function editInfo(id) {
  edit = id;
  usercontent.value = userArray[id].textfield
  addusercontent.innerText = "Update "

}
function deleteInfo(id) {
  userArray.splice(id, 1)
  saveInfo(userArray)

}