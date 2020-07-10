let Margat = setInterval(margat,2500)
let Move1 = setInterval(move1,50)
let Move2 = setInterval(move2,50)
let Move3 = setInterval(move3,50)
let Walking = setInterval(walking,40000)
let X1 = Math.floor(Math.random() * WW - $("#astronaut_cat").width())
let X2 = Math.floor($("#astronaut_cat_2").offset().left)
let X3 = Math.floor($("#astronaut_cat_3").offset().left)
let Y1 = Math.floor($("#astronaut_cat").offset().top)
let Y2 = Math.floor($("#astronaut_cat_2").offset().top)
let Y3 = Math.floor($("#astronaut_cat_3").offset().top)
let WW = $(window).width()
let WH = $(window).height()
let hittedX1 = false
let hittedY1 = false
let hittedX2 = false
let hittedY2 = false
let hittedX3 = false
let hittedY3 = false

function margat(){
    $("#press_to_enter").fadeOut(1500)
    setTimeout(() => {$("#press_to_enter").fadeIn(500)},1500)
}
margat()

function walking(){
    $("#cat_gif").animate({left:"90%"},20000)
    setTimeout(() => {$("#cat_gif").css({transform:"rotateY(180deg)"})},20000)
    $("#cat_gif").animate({left:"0%"},20000)
    setTimeout(() => {$("#cat_gif").css({transform:"rotateY(0deg)"})},40000)
}
walking()

function move1(){
    if(X1 + $("#astronaut_cat").width() >= WW - 1){
        X1--
        hittedX1 = false
    }else if(X1 <= 1){
        X1++
        hittedX1 = true
    }else if(!hittedX1){
        X1--
    }else if(hittedX1){
        X1++
    }
    if(Y1 + $("#astronaut_cat").height() >= WH - 1){
        Y1--
        hittedY1 = false
    }else if(Y1 <= 1){
        Y1++
        hittedY1 = true
    }else if(!hittedY1){
        Y1--
    }else if(hittedY1){
        Y1++
    }
    $("#astronaut_cat").css({left : X1,top : Y1})
}

function move2(){
    if(X2 + $("#astronaut_cat_2").width() >= WW - 1){
        X2--
        hittedX2 = false
    }else if(X2 <= 1){
        X2++
        hittedX2 = true
    }else if(!hittedX2){
        X2--
    }else if(hittedX2){
        X2++
    }
    if(Y2 + $("#astronaut_cat_2").height() >= WH - 1){
        Y2--
        hittedY2 = false
    }else if(Y2 <= 1){
        Y2++
        hittedY2 = true
    }else if(!hittedY2){
        Y2--
    }else if(hittedY2){
        Y2++
    }
    $("#astronaut_cat_2").css({left : X2,top : Y2})
}

function move3(){
    if(X3 + $("#astronaut_cat_3").width() >= WW - 1){
        X3--
        hittedX3 = false
    }else if(X3 <= 1){
        X3++
        hittedX3 = true
    }else if(!hittedX3){
        X3--
    }else if(hittedX3){
        X3++
    }
    if(Y3 + $("#astronaut_cat_3").height() >= WH - 1){
        Y3--
        hittedY3 = false
    }else if(Y3 <= 1){
        Y3++
        hittedY3 = true
    }else if(!hittedY3){
        Y3--
    }else if(hittedY3){
        Y3++
    }
    $("#astronaut_cat_3").css({left : X3,top : Y3})
}

function entering_game(e){
    if(e.which == 13){
        $("#loading_page").css({transform:"scale(2)",transition: "2s"})
        $("#loading_page").animate({top:"-200px",opacity:0},1500)
        setTimeout(() => {$("#loading_page").css("display","none")},3000)
        clearInterval(Walking)
        clearInterval(Margat)
        setTimeout(() => {$("#first_level").fadeIn(1000)},2000)
    }
}

function zooming(menu_btn){
    $("#loading_page").css({transform:"scale(2)",transition: "2s"})
    $("#loading_page").animate({opacity:0},1500)
    setTimeout(() => {$("#loading_page").css("display","none")},3000)
    clearInterval(Walking)
    clearInterval(Margat)
    setTimeout(() => {menu_btn.fadeIn(1000)},2000)
}

function return_to_menu(){
    $(this).parent().fadeOut("slow");
    $("#loading_page").css("display","block");
    $("#loading_page").animate({opacity:1},1500)
    $("#loading_page").css({transform:"scale(1)",transition: "2s"})
    Margat = setInterval(margat,2500)
    Walking = setInterval(walking,40000)
}


$(document).keypress(entering_game)
$("#shop").click(()=>{zooming($('#shop_section'))})
$("#inventory").click(()=>{zooming($('#inventory_section'))})
$("#settings").click(()=>{zooming($('#settings_section'))})
$(".return").click(return_to_menu)