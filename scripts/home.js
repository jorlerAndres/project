const misTareasTab=document.getElementById("misTareas-tab");
const menuLateral=document.getElementById("menuLateral");
const overCanvas=document.getElementById("overCanvas");
const listMenusidenav=document.getElementById("list-menusidenav")
const itemplanes=document.getElementById("itemplanes")

const host = window.location.origin;


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
    fetchCargarTarea(e.target)
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

/* function rotateContent(){
  
    var div_tarea=document.querySelectorAll(".contenido");
    div_tarea.forEach(element => {
     
      element.style.transform='rotateX(-70deg)';
      console.log("roto");
      setTimeout(function(){element.classList.add('transicion-rotate');  console.log("volvio");}, 700);
      console.log("adiciono clace");
      element.style.transform='rotateX(0deg)'

    }); 
  } */


  
  
function rotateContent(){
  
    var div_tarea=document.querySelectorAll(".contenido");
    div_tarea.forEach(element => {
     
      element.classList.remove('transicion-rotate'); 
      element.style.transform='rotateX(-70deg)'; 
      setTimeout(function(){element.style.transform='rotateX(-70deg)';}, 1);
      setTimeout(function(){element.classList.add('transicion-rotate');}, 50);
      setTimeout(function(){element.style.transform='rotateX(0deg)'}, 50);

    }); 
  }
 
  
    var listmenu= document.querySelectorAll('.list-despegable');
    listmenu.forEach(element => {
     
      element.addEventListener("click", function (e) {
         object_i = element.firstElementChild.firstElementChild;
        if( object_i.classList.contains('text-primary')){
          object_i.classList.remove("text-primary");
        }
        else{
          object_i.classList.add("text-primary");
        } 
       
        object_i = element.lastElementChild;
        if( object_i.style.transform=="rotate(90deg)"){
          object_i.style.transform="rotate(0deg)"
        }
        else{
          object_i.style.transform="rotate(90deg)"
        }
         element.firstElementChild.lastElementChild.style.color='blue';  
       /*   var itemclass=element.nextElementSibling;
        if(itemclass.style.boxShadow){
          setTimeout(function(){itemclass.style.removeProperty('box-shadow')},100);
        }
        else{
          itemclass.style.boxShadow="-4px -1px 5px 1px rgb(234, 230, 230)inset ";
        }  */
       /*  if( element.style.backgroundColor=='rgb(207, 204, 250)'){
          element.style.backgroundColor='rgb(207, 204, 250)'
        }
        else{
          element.style.backgroundColor='rgb(207, 204, 250)'
        } */
        
      })
   
  }); 

  itemplanes.addEventListener("click", function (e) {
     
    var data=fetchCargarTarea(e.target);
    
   
     
  
  })

  async function fetchCargarTarea(e){

      var formData = new FormData();
      
      console.log(host+'/api/tareas');
       formData.append("plan", e.getAttribute("data-plan")); 
       await fetch(host+'/api/tareas',{
    
        method: "POST",
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        div_contenido.innerHTML=data;
        rotateContent();
        return data;
      })
    
      .catch(function(error) {
        return error;
      }) 
    }
    var datostarea=document.querySelector(".datostarea");
         datostarea.addEventListener("mouseover", function (e) {
       console.log("ho");
  
        datostarea.classList.add('open'); 
         })
   
    /* for (var i = 0; i < listmenu.length; i++) {
      console.log("ww");
        object_i = li[i].lastElementChild;
        object_i.style.transform="rotateX(10deg)";
        
      
    }
 */
 
  


