const myHex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const myBtn = document.getElementById('btn-hero');
const mySpan = document.getElementById('hex-code');

myBtn.addEventListener("click", () => {
    let hexColor = "#";
    for(let i = 0; i<6; i++)
    {
        hexColor += myHex[randomColor()];
    }
    
    mySpan.innerHTML = hexColor;
    mySpan.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomColor(){
    let randomNum = Math.floor(Math.random()*16);
    return randomNum;
}