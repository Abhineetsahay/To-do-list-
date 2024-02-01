let ol = document.getElementById("ol");
let input = document.getElementById("input");
// add list items to the ol
function addListitems() {
  // first check that input value is not empty
  if (input.value === "") {
    alert("!!!!!!!! Write Something !!!!!!!!");
  }
  // adding elements
  else {
    // creating li
    let li1 = document.createElement("li");
    li1.className = "li";
    // append li value in the li
    li1.append(input.value);
    // now value will be added in the ordered list
    ol.appendChild(li1);
    input.value = "";
    // adding cross for removing the elements
    let span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    // added span in the ol
    ol.appendChild(span);
    // this event listener will remove the last items
    span.addEventListener("click", function () {
      removelist(li1, span);
    });
    // Add event listener to the newly created li element
    li1.addEventListener("click", function () {
      toggleLineThrough(li1);
    });
  }
}
// here it adding line-through whenever the li clicks
function toggleLineThrough(element) {
  // Toggle the line-through style
  if (element.style.textDecorationLine === "line-through") {
    element.style.textDecorationLine = "none";
  } else {
    element.style.textDecorationLine = "line-through";
    element.style.textDecorationColor = "rgb(10, 195, 44)";
  }
}
// removing list items and cross
function removelist(element, element1) {
  element.remove();
  element1.remove();
}
// adding elements when enter key clicked
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addListitems1();
  }
});
function addListitems1() {
  if (input.value === "") {
    alert("!!!!!!!!!!! Write Something !!!!!!!!");
  } else {
    let li1 = document.createElement("li");
    li1.className = "li";
    li1.append(input.value);
    ol.appendChild(li1);
    input.value = "";
    let span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    ol.appendChild(span);
    span.addEventListener("click", function () {
      removelist(li1, span);
    });
    li1.addEventListener("click", function () {
      toggleLineThrough(li1);
    });
  }
}