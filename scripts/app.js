console.log('js loaded');
let level=document.querySelector("#numberInput")
level.addEventListener("input", function(){
{
const NUMBER=Number(numberInput.NUMBER);
if(level.value<=-10 || level.value>=10)
{
    alert("The number should be between -10 and 10");
}
}
}
)
let fruits={
    Name:"Apple",
    Color:"Red",
    Taste:"Sweet"
}

let fruitName=document.querySelector("#fruitName");
let fruitColor=document.querySelector("#fruitColor");
let fruitTaste=document.querySelector("#fruitTaste");

fruitName.innerHTML=`Name: ${fruits.Name}`
fruitColor.innerHTML=`Color: ${fruits.Color}`
fruitTaste.innerHTML=`Taste: ${fruits.Taste}`


