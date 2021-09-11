const misTareasTab=document.getElementById("misTareas-tab");
const menuLateral=document.getElementById("menuLateral");
const overCanvas=document.getElementById("overCanvas");
const listMenusidenav=document.getElementById("list-menusidenav")


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.opacity = "0.2";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/*menu lateral */
menuLateral.addEventListener("click", function (e) {

  if(e.target.closest('.nav-item').id=='misTareas-tab'){
     rotateContent();
  }
  
  

   var li= document.getElementsByTagName('li');
   /* var bi= document.getElementsByTagName('.bi'); */
   for (var i = 0; i < li.length; i++) {
      if(li[i].style.textShadow){
        li[i].style.removeProperty('text-shadow');
        li[i].style.removeProperty('background-image'); 
        bi=li[i].firstElementChild.firstElementChild;
        bi.classList.replace( 'text-warning', 'text-white' )
        
      }
   }
   var list=e.target.closest('li');
   list.style.textShadow='#CCC 1px 0 10px'; 
   list.style.backgroundImage='radial-gradient(#1f1e1e, #261e1b)'; 
   bin=list.firstElementChild.firstElementChild;
   
   bin.classList.replace( 'text-white', 'text-warning' )
  
})
 /*menu emergente */
overCanvas.addEventListener("mouseover", function (e) {

  console.log("entro");
  document.getElementById("mySidenav").style.width = "250px";
  listMenusidenav.style.display="block";
  var div_campo=document.querySelectorAll(".campo");
  div_campo.forEach(element => {
   
      element.style.display = "block";
   
  }); 
  

})
overCanvas.addEventListener("mouseout", function (e) {
  
  var div_campo=document.querySelectorAll(".campo");
  div_campo.forEach(element => {
   
      element.style.display="none";

   }); 
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("list-menusidenav").style.display = "none";

})
overCanvas.addEventListener("click", function (e) {
 
})

function rotateContent(){
  
    var div_tarea=document.querySelectorAll(".contenido");
    div_tarea.forEach(element => {
     
      /* setTimeout(function(){element.style.transform='rotateX(-70deg)'}, 1);
      returnContent(element); */
      element.style.transform='rotateX(-70deg)';
      console.log("roto");
      setTimeout(function(){element.classList.add('transicion-rotate');  console.log("volvio");}, 700);
      console.log("adiciono clace");
      element.style.transform='rotateX(0deg)'

    }); 
  }
  function returnContent(element){
    console.log("ree");
     element.classList.add('transicion-rotate'); 
    setTimeout(function(){element.style.transform='rotateX(0deg)'}, 700);
    
  }

  /*
  
function rotateContent(){
  
    var div_tarea=document.querySelectorAll(".contenido");
    div_tarea.forEach(element => {
     
      element.classList.remove('transicion-rotate'); 
      
      setTimeout(function(){element.style.transform='rotateX(-70deg)';  console.log("volvio");}, 10);
      console.log("roto");
      setTimeout(function(){element.classList.add('transicion-rotate');  console.log("volvio");}, 50);
      console.log("adiciono clace");
      setTimeout(function(){element.style.transform='rotateX(0deg)'}, 50);

    }); 
  }
  */


