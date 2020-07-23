var myDevices = navigator.mediaDevices;
     var permissionsObj = {
 audio: false,
 video: true
 };
myDevices.getUserMedia(permissionsObj).then(showCam);


 function showCam(stream)   {
$("#myCamera")[0].srcObject = stream;
}
    
    
function addEffect(event)  {

var clickedBtn = event.currentTarget;
 if (clickedBtn.id == "sepia") {
 $('#myCamera').css('filter',
 'sepia(1)');
 }
  
  else if (clickedBtn.id == "reset") {
 $('#myCamera').css('filter',
 ''); 
  
    $('#myCamera').css('transform', '');
  }
  
    else if (clickedBtn.id == "mirror") {
 $('#myCamera').css('transform',
 'scaleX(-1)')
    }        
  
  
  else if(clickedBtn.id == "colorshift") { 
  
   $('#myCamera').css('filter', 'hue-rotate(90deg)')
  }
    else if(clickedBtn.id == "invert") { 
  
   $('#myCamera').css('filter', 'invert(100%)')
    } 
  
      else if(clickedBtn.id == "blur") { 
  
   $('#myCamera').css('filter', 'blur(5px)')
    } 
  
     else if(clickedBtn.id == "bnw") { 
  
   $('#myCamera').css('filter', 'grayscale(100%)')
    } 
 
     else if(clickedBtn.id == "opacity") { 
  
   $('#myCamera').css('filter', 'opacity(50%)')
    } 
  
     else if(clickedBtn.id == "saturate") { 
  
   $('#myCamera').css('filter', 'saturate(200%)')
    } 
  
   else if(clickedBtn.id == "brightness") { 
  
   $('#myCamera').css('filter', 'brightness(200%)')
    } 
  
  
    else if(clickedBtn.id == "crazy") { 
  
   $('#myCamera').css('filter', 'saturate(200000%)')
    } 
  
  
  
  
} 
    
    $("button").click(addEffect)

    
function togglePlay(event) {

  var video = event.currentTarget

 if(video.paused) {
video.play();
 } else {
 video.pause();
 }


}
    
    $("#myCamera").click(togglePlay)
    
