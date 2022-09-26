const hesapla = () =>{
   const sayi = document.querySelector("#txtSayi").value;
   if(!sayi || isNaN(sayi) || sayi<0){
    alert("Pozitif bir tamsayi giriniz");
    return;
   }
   let faktoryel =1;
   for(let i =sayi; i>0; i--){//let i=1;i<=sayi;i++
    faktoryel *= i;
   }
document.querySelector("#sonuc").innerHTML=faktoryel;

}