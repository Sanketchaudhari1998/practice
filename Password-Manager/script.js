function maskPassword(pass){
  let str = ""
  for (let index = 0; index < pass.length; index++) {
      str  += "*"
  }
  return str
}

function copyText(txt) {
  navigator.clipboard.writeText(txt).then(
      () => {
      
        document.getElementById("alert").style.display = "inline"
        setTimeout(() => {
          document.getElementById("alert").style.display = "none"
        }, 2000);

      },
      () => {
       
        alert("Clipboard copying failed")
      },
    );
}

const deletePassword = (website)=>{
  let data = localStorage.getItem("passwords")
  let arr = JSON.parse(data);
  arrUpdated = arr.filter((e)=>{
      return e.website != website
  })
  localStorage.setItem("passwords", JSON.stringify(arrUpdated))
  alert(`Successfully deleted ${website}'s password`)
  showPasswords()

}

//  fill the table
const showPasswords = () => {
  let tb = document.querySelector("table")
  let data = localStorage.getItem("passwords")
  if (data == null || JSON.parse(data).length == 0) {
      tb.innerHTML = "No Data To Show"
  }
  else {
      tb.innerHTML =  `<tr>
      <th>Website</th>
      <th>Username</th>
      <th>Password</th>
      <th>Delete</th>
  </tr> `
      let arr = JSON.parse(data);
      let str = ""
      for (let index = 0; index < arr.length; index++) {
          const element = arr[index];

          str += `<tr>
  <td>${element.website} <img onclick="copyText('${element.website}')" src="asset/copy.png" alt="Copy Button" width="30" width="30" height="30">
  </td>
  <td>${element.username} <img onclick="copyText('${element.username}')" src="asset/copy.png" alt="Copy Button" width="30" width="30" height="30">
  </td>
  <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="asset/copy.png" alt="Copy Button"width="30" width="30" height="30">
  </td>
  <td><button class="btndel" onclick="deletePassword('${element.website}')"><img width="30" height="30" src="https://img.icons8.com/arcade/64/trash.png" alt="trash"/></button></td>
      </tr>`
      }
      tb.innerHTML = tb.innerHTML + str

  }
  website.value = ""
  username.value = ""
  password.value = ""
}

console.log("Working");
showPasswords()
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Clicked....")
  console.log(username.value, password.value)
  let passwords = localStorage.getItem("passwords")
  console.log(passwords)
  if (passwords == null) {
      let json = []
      json.push({website: website.value, username: username.value, password: password.value })
      alert("Password Saved");
      localStorage.setItem("passwords", JSON.stringify(json))
  }
  else {
      let json = JSON.parse(localStorage.getItem("passwords"))
      json.push({ website: website.value, username: username.value, password: password.value })
      alert("Password Saved");
      localStorage.setItem("passwords", JSON.stringify(json))
  }
  showPasswords()
})

// let color =document.querySelectorAll(".container");
// console.log(color);
// color[0].style.backgroundColor = "green";
