document.body.style.textAlign="center";
document.body.style.background="Aquamarine";
document.body.style.fontWeight="bold";
document.body.style.marginTop="30px";

sum=0

for (i=0; i<=300; i++){
    sum+=i;
   
}
document.getElementById("text").innerHTML="1-დან 300-ის ჩათვლით რიცხვების ჯამია: " +sum;