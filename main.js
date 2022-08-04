var a = document.getElementById("hour");
var b = document.getElementById("min");
var c = document.getElementById("sec");
var d = document.getElementById("year");
var e = document.getElementById("month");
var f = document.getElementById("date");
var am = document.getElementById("am");

var g = function() {
    const h = new Date();
    var x = h.getDate();
    var y = h.getHours();
    var z = h.getMinutes();
    var w = h.getSeconds();

    var i = h.getMonth();
    var j = h.getDay();
    var k = h.getFullYear();
    
    a.innerText = y;
    b.innerText = z;
    c.innerText = w;

    d.innerText = k;
    e.innerText = i;
    f.innerText = j;

    if(y==0){
        am.innerText="am";
    }
    else if(y>12){
        am.innerText = "pm";
    }
}
setInterval(g, 1000)