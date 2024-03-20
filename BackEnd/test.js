function myGreeting(){
  let newText=document.getElementById("content").value
  if(newText.length!==0){
    document.getElementById("text").innerHTML=newText;
  }else{
    alert('please fill the input');
  }
  
}