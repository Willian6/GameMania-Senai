
$(document).ready(function(){
    
    //CARROSEL NO BANNER DA HOMEPAGE com JQuery:
    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 4500)

    function slide(){
        if( $(".banner-ativo").next().length ) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").fadeIn()
        } else {
            $(".banner-ativo").removeClass("banner-ativo").hide()
            $("#carrossel img:eq(0)").addClass("banner-ativo").fadeIn()
        }
    }
})  



    let menu = document.getElementById("menu");

    function mostrarMenu(){

        console.log( getComputedStyle(menu).display);

        console.log(menu.style.display)

        if(menu.style.display != "none"){
            menu.style.display = "none"

        }else {
            menu.style.display = "flex"
        }
    }

    

