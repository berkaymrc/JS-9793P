let buttonCounter = 0;

document.getElementById("increase-button").addEventListener("click" , function(){
    buttonCounter++;
    document.getElementById("buttonCounter").textContent = buttonCounter;
});

document.getElementById("reset-button").addEventListener("click" , function(){
    buttonCounter = 0;
    document.getElementById("buttonCounter").textContent = buttonCounter;
});