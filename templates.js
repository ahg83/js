/*
numero elementos por TagName
*/
function countElements() {
    var lcountElements
	document.getElementById("total").innerHTML = "=" + document.getElementsByTagName('p').length;
}
function display_P_onAlert() {
    var lsItem = document.getElementsByTagName("p");
    var i;

    for (i = 0; i < lsItem.length; i++){
		alert(lsItem[i].innerHTML);
  };
}

function.add_P_ToBody(){
  //P:Parrafo; LI:Lista
  var node = document.createElement("P");
  document.body.appendChild(node);
}
