function makeBold(){
  var getId=document.getElementById("myText");
    if(getId.style.fontWeight == "900"){
        getId.style.fontWeight = "400";
    }
    else{
        getId.style.fontWeight = "900";
    } 
   
    
}




function makeItalic(){
    var getId=document.getElementById("myText");
      if(getId.style.fontStyle =="italic"){
          getId.style.fontStyle = "normal";
      }
      else{
          getId.style.fontStyle = "italic";
      } 
     
      
  }


function makeUnderline(){
    var getId=document.getElementById("myText");
      if(getId.style.textDecoration =="underline"){
          getId.style.textDecoration = "none";
      }
      else{
          getId.style.textDecoration = "underline";
      } 
                
}


function changeSize(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("myText").style.fontSize = listValue;
}
      


function changePolice(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("myText").style.fontFamily = listValue;  
}
     
      
  