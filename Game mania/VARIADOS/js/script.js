
 let menu = document.getElementById("menu");
            
 function mostrarMenu(){

    console.log( getComputedStyle(menu).display);
     console.log(menu.style.display)

     if( getComputedStyle(menu).display != "none"){
         menu.style.display = "none"

     }else {
         menu.style.display = "flex"
     }
 }


