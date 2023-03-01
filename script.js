var name = "",
    email = "";
var total_amount = 0;
var inner= "";
document.getElementById("name").addEventListener("keyup", function() {
    document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function() {
    document.getElementById("email2").innerHTML = this.value;
});

document.getElementById("mobile").addEventListener("keyup", function() {
    document.getElementById("mobile2").innerHTML = this.value;
});

document.getElementById("bname").addEventListener("keyup", function() {
    document.getElementById("bname2").innerHTML = this.value;
});
document.getElementById("address").addEventListener("keyup", function() {
    document.getElementById("address2").innerHTML = this.value;
});
document.getElementById("website").addEventListener("keyup", function() {
    document.getElementById("website2").innerHTML = this.value;
});
document.getElementById("contact").addEventListener("keyup", function() {
    document.getElementById("contact2").innerHTML = this.value;
});
document.getElementById("add-button").addEventListener("click", function() {
    var itemname = document.getElementById("iname").value;
    var itemquantity = document.getElementById("iquantity").value;
    var itemrate = document.getElementById("irate").value;
    var totalprice= itemquantity * itemrate;
    total_amount += totalprice;
    if(itemname == "" || itemquantity == "" || itemrate == ""){
        alert("Please fill all the fields");
    }else{
        document.getElementById("bill").innerHTML = inner+="<tr><td>"+itemname+"</td><td>"+itemquantity+"</td><td>"+itemrate+"</td><td>"+totalprice+"</td></tr>";
        showBill();
        document.getElementById("iname").value = "";
        document.getElementById("iquantity").value = "";
        document.getElementById("irate").value = "";
    }
});

function showBill() {
    document.getElementById("amount").innerHTML = total_amount;
}

let btn = document.getElementById("prnt-button");
btn.addEventListener("click", function() {
    let element = document.getElementsByClassName("bill-box");
    html2pdf().from(element[0]).save();
});

function redirect(){
    window.location.href = "billease.html";
}