function hesapla(){
    let sayi =document.querySelector("#txtSayi").value;
//!sayi boşluk kontrolü yapar
//isNaN sayi değil mi? sayi değilse true verir


if(!sayi || isNaN(sayi) || sayi<=1){
    alert("Uygun bir sayi giriniz");
    return;

}

let kontrol =0;

for(let i =2;i<sayi;i++){
    if(sayi%i==0){//%bölümden kalanı verir aynı math.mod gibi
        kontrol++;
    }
}
if(kontrol ==0){
    alert("Girilen sayi asal sayıdır")
}else{
    alert("Girilen sayi asal sayi değildir.")
}

}
