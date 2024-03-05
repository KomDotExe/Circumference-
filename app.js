const pi = Math.PI; 
let radius;
let circumfrence;


document.getElementById("calculate").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumfrence = Math.round(2 * pi * radius);
    document.getElementById("p1").textContent = `your circumfrence is: ${circumfrence}`;

}


