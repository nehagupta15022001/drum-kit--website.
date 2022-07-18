var total= document.querySelectorAll(".drum").length;
for(var i=0;i<total;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      var buttoninnerHTML=this.innerHTML;

switch(buttoninnerHTML){
    case "w":
        var audio = new Audio('sounds/tom-1.mp3');
       audio.play();
       break;
      
}
switch(buttoninnerHTML){
    case "a":
        var audio = new Audio('sounds/tom-2.mp3');
       audio.play();
       break;
     
}
switch(buttoninnerHTML){
    case "s":
        var audio = new Audio('sounds/tom-3.mp3');
       audio.play();
       break;
       
}
switch(buttoninnerHTML){
    case "d":
        var audio = new Audio('sounds/tom-4.mp3');
       audio.play();
       break;
      
}
switch(buttoninnerHTML){
    case "j":
        var audio = new Audio('sounds/snare.mp3');
       audio.play();
       break;
       
}
switch(buttoninnerHTML){
    case "k":
        var audio = new Audio('sounds/crash.mp3');
       audio.play();
       break;
       
}
switch(buttoninnerHTML){
    case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
       audio.play();
       break;
       default:
}












    });
}

