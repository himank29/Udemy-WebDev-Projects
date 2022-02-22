 var numButtons = document.querySelectorAll(".drum").length;
 for(var i=0; i<numButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){
       var buttonPressed = this.innerHTML;
       makesound(buttonPressed);
       buttonAnimation(buttonPressed);
    });
 }

 document.addEventListener('keydown', function(event){
     makesound(event.key);
     buttonAnimation(event.key);
 })

 function makesound(key){
    var audio;
    switch(key){
        case 'w': 
            audio='tom-1';
            break;

        case 'a': 
            audio='tom-2';
            break;

        case 's': 
            audio='tom-3';
            break;

        case 'd': 
            audio='tom-4';
            break;

        case 'j': 
            audio='snare';
            break;

        case 'k': 
            audio='crash';
            break;
        
        case 'l': 
            audio='kick-bass';
            break;

        default:
            console.log(buttonPressed);
       }

        var address = 'sounds/'+audio+'.mp3';
        var audioplay = new Audio(address);
        audioplay.play();
 }

 function buttonAnimation(key){
     key_tag = "."+key;
     document.querySelector(key_tag).classList.add('pressed');

     setTimeout(function(){
         document.querySelector(key_tag).classList.remove('pressed');
     },100)
 }

  