// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let button = document.createElement("BUTTON");
  let txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    document.getElementById("number").innerHTML = close.length-1;
    
    }
    
}


// Create a new list item when clicking on the "Submit" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
   
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    // this.append("<li style='text-align:left;'</li>");
    // document.getElementsByTagName("LI").css("text-align","left");
    li.appendChild(button);
    // li.appendChild('<li style="text-align:left"</li>');
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        document.getElementById("number").innerHTML = close.length-1;
     
      }
    }
  
  }
 