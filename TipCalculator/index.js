function calcTip() {
    var subtotal =document.getElementById("subtotal").value;
    var tip =document.getElementById("tip").value;
    var tot = (subtotal*tip)/100;
    document.getElementById("total").innerHTML = '$'+tot;
}