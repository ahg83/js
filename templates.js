/*
numero elementos por TagName
*/
function countElements() {
    var lcountElements
	document.getElementById("total").innerHTML = "=" + document.getElementsByTagName('p').length;
}
function function1() {
    var lsItem = document.getElementsByTagName("p");
    var i;

    for (i = 0; i < lsItem.length; i++){
		alert(lsItem[i].innerHTML);
    };
}
