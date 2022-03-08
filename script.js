function calc(adults, children) {
    while (true) {
        if (adults<0 || children<0) {
            console.warn("Please input positive numbers.")
            alert("Please input positive numbers.")
        }
        else if (adults<=0&&children>0) {
            console.warn("You must have at least one adult with you at all times.")
            alert("You must have at least one adult with you at all times.")
        }
        else if (adults>100||children>100) {
            console.warn("You cannot buy more than 20 adult tickets and 40 children's tickets.")
            alert("You cannot buy more than 100 adult tickets and 100 children's tickets.")
        }
        else if (adults!=0&&children!=0) {
            for(let i = 1; i<=adults; i++) {
                var zero = (adults>10)? "":"0";
                console.log("Ticket ID = #"+ zero + i + " (Adult)")
            }
            for(let i = 1; i<=children; i++) {
                var zero = (children>10)? "":"0";
                console.log("Ticket ID = #"+ zero + i + " (Child)")
            }
        }
        let price = adults*12+children*6;
        return"Subtotal: $"+price+".00"
    }
}
window.onload = function() {
  let btn = document.getElementById("btnBUY");
  btn.onclick = function() {
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let prices = calc(adults, children);
    let price = adults*12+children*6;
    let pricetax = price/10
    if (prices != 0) {
        alert(prices);
        alert("calculating total...");
        alert("Total: $"+(price+pricetax));
    }
  }
} 