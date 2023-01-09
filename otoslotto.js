document.getElementById("buttom").onclick = function(){
let p = document.getElementById("nyeroszamok");
let nyeroszamok = [];
while(nyeroszamok.length < 5){
    let kisorsoltszam = Math.floor(Math.random() * 99) + 1;
    if(!nyeroszamok.includes(kisorsoltszam)){
        nyeroszamok.push(kisorsoltszam);
    }
}

nyeroszamok.sort(function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
nyeroszamok.forEach(element => {
    p.innerHTML += element + " ";
});
}
