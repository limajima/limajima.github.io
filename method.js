var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
  return input.value.length;
} 

function listLength(){
  return item.length;
}

function createListElement() {
  var li = document.createElement("li"); // bikin element "li"
  li.appendChild(document.createTextNode(input.value)); //bikin text dari input field li text 
  ul.appendChild(li); //tambah li to ul
  input.value = ""; //Reset text input field


  //START STRIKE THROUGH
  // karena didalam function, hanya menambahkan untuk new items
  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click",crossOut);
  //END STRIKETHROUGH


  // START ADD DELETE BUTTON
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);
  // END ADD DELETE BUTTON


  //ADD CLASS DELETE (DISPLAY: NONE)
  function deleteListItem(){
    li.classList.add("delete")
  }
  //END ADD CLASS DELETE
}


function addListAfterClick(){
  if (inputLength() > 0) { //untuk memastikan input field kosong gak bikin li 
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which ===13) { //ini tampilan untuk ditampilkan jika pencet "enter / return", angka 13 itu keycode untuk tombol "enter"
    createListElement();
  } 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
