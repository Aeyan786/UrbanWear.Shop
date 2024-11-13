// const log = require("surge/lib/middleware/log");

const firebaseConfig = {
    apiKey: "AIzaSyB6R8ZqyzO3snQDZp3yLRyJITDxuPkDeLM",
    authDomain: "urbanwearofficial-31975.firebaseapp.com",
    databaseURL: "https://urbanwearofficial-31975-default-rtdb.firebaseio.com",
    projectId: "urbanwearofficial-31975",
    storageBucket: "urbanwearofficial-31975.firebasestorage.app",
    messagingSenderId: "343977054194",
    appId: "1:343977054194:web:554c5e695ceef46245a56b"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
// Menu Toggle Button

// const log = require("surge/lib/middleware/log");

var menuList = document.getElementById('menulist')
menuList.style.maxHeight = "0px";

function togglebtn(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

// Cards Array of Object

// var products = [
//     {
//         id: "1",
//         name: "Stylish Casual Clutch",
//         category: "Clutches",
//         price: "1299",
//         stock:"10",
//         image: "../images/1299.jpeg",
//         description: "Casual wear stylish clutch, limited German-edition"
//     },
//     {
//         id: "2",
//         name: "Printed Cross Body",
//         category: "Cross Body",
//         price: "999",
//         stock:"50",
//         image: "../images/1299.jpeg",
//         description: "Casual wear stylish printed cross body, long-sided chain, large space"
//     },
//     {
//         id: "3",
//         name: "Casual Hand Bag",
//         category: "Hand Bags",
//         price: "1899",
//         stock:"45",
//         image: "../images/1899.jpeg",
//         description: "Casual wear stylish Handbag, 3-peice set, long Gold chain"
//     },
//     {
//         id: "4",
//         name: "Stylish Branded Clutch",
//         category: "Clutches",
//         price: "1280",
//         stock:"15",
//         image: "../images/1280.jpeg",
//         description: "Casual wear stylish clutch, branded-Channel, premium Quality"
//     },
//     {
//         id: "5",
//         name: "Branded Clutch",
//         category: "Clutches",
//         price: "1549",
//         stock:"30",
//         image: "../images/1549.jpeg",
//         description: "Casual wear stylish clutch, Charles and keith, 3-pocket space with card holder"
//     },
//     {
//         id: "6",
//         name: "Casual handbag",
//         category: "Handbag",
//         price: "1299",
//         stock:"30",
//         image: "../images/799.jpeg",
//         description: "Casual wear stylish Handbag, large space with mobole pockets, long chain"
//     }
// ] 
var selectedQuantity = document.getElementById('quantityid')
var selectedQuantity1 = document.getElementById('quantityid2')
var selectedQuantity2 = document.getElementById('quantityid3')
var selectedQuantity3 = document.getElementById('quantityid4')
var selectedQuantity4 = document.getElementById('quantityid5')
var selectedQuantity5 = document.getElementById('quantityid6')
var increm1 = 1
var increm2 = 1
var increm3 = 1
var increm4 = 1
var increm5 = 1
var increm6 = 1

function increment1(){
    selectedQuantity.innerText = increm1++

}
function increment2(){
    selectedQuantity1.innerText = increm2++
  
}function increment3(){
  
    selectedQuantity2.innerText = increm3++
    
}function increment4(){
    selectedQuantity3.innerText = increm4++
}
function increment5(){
    
    selectedQuantity4.innerText = increm5++

}function increment6(){
    
    selectedQuantity5.innerText = increm6++
}


var product = document.getElementById('product1')
var listOrder = document.getElementById("listorder") 



function cartbtn1(){
   var imgproduct =  document.createElement("img")
    imgproduct.src = "../images/1299.jpeg"
    imgproduct.setAttribute("class" ,"imgepro")
    var item1List = document.createElement("li")
    var P = document.createElement("p")
    var span = document.createElement("span")

    var pText = document.createTextNode("Name: Stylish Casual Clutch")
    P.appendChild(pText)

    var spanText = document.createTextNode("PKR 1299")
    span.appendChild(spanText)

    item1List.appendChild(imgproduct)
    item1List.appendChild(P)
    item1List.appendChild(span)
    listOrder.appendChild(item1List)
listOrder.setAttribute('class', "item1List")


var key = firebase.database().ref('todo').push().key
var cart = {
    key: key,
    Item: "Name: Stylish Casual Clutch",
    Price: "PKR 1299",
  }
 firebase.database().ref('Usercart').child(key).set(cart)

}
function cartbtn2(){
   
    var imgproduct =  document.createElement("img")
    imgproduct.src = "../images/999.jpeg"
    imgproduct.setAttribute("class" ,"imgepro")
    var item1List = document.createElement("li")
    var P = document.createElement("p")
    var span = document.createElement("span")

    var pText = document.createTextNode("Name: Printed Cross Body")
    P.appendChild(pText)

    var spanText = document.createTextNode("PKR 999")
    span.appendChild(spanText)

    item1List.appendChild(imgproduct)
    item1List.appendChild(P)
    item1List.appendChild(span)
    listOrder.appendChild(item1List)
    listOrder.setAttribute('class', "item1List")

    var key = firebase.database().ref('todo').push().key
var cart = {
    key: key,
    Item: "Name: Printed Cross Body",
    Price: "PKR 999",
  }
 firebase.database().ref('Usercart').child(key).set(cart)

}
function cartbtn3(){
    
    var imgproduct =  document.createElement("img")
    imgproduct.src = "../images/1899.2.jpeg"
    imgproduct.setAttribute("class" ,"imgepro")
    var item1List = document.createElement("li")
    var P = document.createElement("p")
    var span = document.createElement("span")

    var pText = document.createTextNode("Name: Casual Hand Bag")
    P.appendChild(pText)

    var spanText = document.createTextNode("PKR 1899")
    span.appendChild(spanText)

    item1List.appendChild(imgproduct)
    item1List.appendChild(P)
    item1List.appendChild(span)
    listOrder.appendChild(item1List)
    listOrder.setAttribute('class', "item1List")
    var key = firebase.database().ref('todo').push().key
    var cart = {
        key: key,
        Item: "Name: Casual Hand Bag",
        Price: "PKR 1899",
      }
     firebase.database().ref('Usercart').child(key).set(cart)

}
function cartbtn4(){
    var imgproduct =  document.createElement("img")
    imgproduct.src = "../images/1280.jpeg"
    imgproduct.setAttribute("class" ,"imgepro")
    var item1List = document.createElement("li")
    var P = document.createElement("p")
    var span = document.createElement("span")

    var pText = document.createTextNode("Name: Stylish Branded Clutch")
    P.appendChild(pText)

    var spanText = document.createTextNode("PKR 1280")
    span.appendChild(spanText)

    item1List.appendChild(imgproduct)
    item1List.appendChild(P)
    item1List.appendChild(span)
    listOrder.appendChild(item1List)
    listOrder.setAttribute('class', "item1List")
    var key = firebase.database().ref('todo').push().key
    var cart = {
        key: key,
        Item: "Name: Stylish Branded Clutch",
        Price: "PKR 1280",
      }
     firebase.database().ref('Usercart').child(key).set(cart)


}
function cartbtn5(){
    var imgproduct =  document.createElement("img")
    imgproduct.src = "../images/1549.jpeg"
    imgproduct.setAttribute("class" ,"imgepro")
    var item1List = document.createElement("li")
    var P = document.createElement("p")
    var span = document.createElement("span")

    var pText = document.createTextNode("Name: Branded Clutch")
    P.appendChild(pText)

    var spanText = document.createTextNode("PKR 1549")
    span.appendChild(spanText)

    item1List.appendChild(imgproduct)
    item1List.appendChild(P)
    item1List.appendChild(span)
    listOrder.appendChild(item1List)
    listOrder.setAttribute('class', "item1List")
    var key = firebase.database().ref('todo').push().key
    var cart = {
        key: key,
        Item: "Name: Branded Clutch",
        Price: "PKR 1549",
      }
     firebase.database().ref('Usercart').child(key).set(cart)

}
function cartbtn6(){
   
    var imgproduct =  document.createElement("img")
    imgproduct.src = "../images/799.jpeg"
    imgproduct.setAttribute("class" ,"imgepro")
    var item1List = document.createElement("li")
    var P = document.createElement("p")
    var span = document.createElement("span")

    var pText = document.createTextNode("Name: Casual handbag")
    P.appendChild(pText)

    var spanText = document.createTextNode("PKR 799")
    span.appendChild(spanText)

    item1List.appendChild(imgproduct)
    item1List.appendChild(P)
    item1List.appendChild(span)
    listOrder.appendChild(item1List)
    listOrder.setAttribute('class', "item1List")
    var key = firebase.database().ref('todo').push().key
    var cart = {
        key: key,
        Item: "Name: Casual handbag",
        Price: "PKR 799",
      }
     firebase.database().ref('Usercart').child(key).set(cart)

}





var emailsign = document.getElementById('signupemail')
var passsign = document.getElementById('signuppass') 
var loginemail = document.getElementById('loginemail') 
var loginpass = document.getElementById('loginpass') 




// login and signup
function signup(){
    firebase.auth().createUserWithEmailAndPassword(emailsign.value, passsign.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    window.location.href = "./index.html"
  });

}


function loginauth(){
    firebase.auth().signInWithEmailAndPassword(loginemail.value, loginpass.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    window.location.href = "./index.html"

  });
}




