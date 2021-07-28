// Create a new list item when clicking on the "Submit" button
function newElement() {
  let li = document.createElement("li");  //create a new list item

  let inputValue = document.getElementById("myInput").value; // access user input task text
  let t = document.createTextNode(inputValue); //store user inputted task's text in variable named "t"
  li.appendChild(t); // attach this text to list item node.
  
  let totalTasks = document.getElementById('totalTasks'); //total count of hard-coded tasks

  if (inputValue === '') {
    alert("You must write something!");
    totalTasks = 3; //initial no. of tasks given in index.html
  } else {
    document.getElementById("myUL").appendChild(li);

  }
  document.getElementById("myInput").value = ""; //make input textbox of task blank again

  // Create a "close" button and append it to each "newly added" list item
  let button = document.createElement("BUTTON"); //Create a <button> element
  let txt = document.createTextNode("\u00D7"); //store unicode character of cross sign in variable named txt
  button.className = "close";  //give a class name to newly created button above.
  button.appendChild(txt);  // attach this cross sign to newly created button. Close button is ready to use now.
  li.appendChild(button);  //now attach this close button to each LI(list item) thru for loop.

  for (i = 0; i < close.length; i++)
  {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      // Less one todo from total count.
      totalTasks.textContent = totalTasks.textContent - 1;
      }
  }
  // Add one more todo in total count.
  totalTasks.textContent = +totalTasks.textContent + 1;
}

// Create a "close" button and append it to each "existing(3 existing tasks in our case)" list item
let myNodelist = document.getElementsByTagName("LI"); // determine number of LI items for loop
for (let i = 0; i < myNodelist.length; i++)
{
  let button = document.createElement("BUTTON"); //Create a <button> element
  let txt = document.createTextNode("\u00D7"); //store unicode character of cross sign in variable named txt
  button.className = "close"; //give a class name to newly created button above.
  button.appendChild(txt); // attach this cross sign to newly created button. Close button is ready to use now.
  myNodelist[i].appendChild(button); //now attach this close button to each LI(list item) thru for loop.
  listItems = document.getElementsByTagName('li');  
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++)
{
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";

    // Less one todo from total count.
    totalTasks.textContent = totalTasks.textContent - 1;
    }
}

