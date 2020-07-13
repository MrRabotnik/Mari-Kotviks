let WW = $(window).width();
let WH = $(window).height();
let X1 = Math.floor(Math.random() * WW - ($("#astronaut_cat").width() + 50) + 50);
let X2 = Math.floor(Math.random() * WW - ($("#astronaut_cat_2").width() + 50) + 50);
let X3 = Math.floor(Math.random() * WW - ($("#astronaut_cat_3").width() + 50) + 50);
let X4 = Math.floor(Math.random() * WW - ($("#astronaut_cat_4").width() + 50) + 50);
let Y1 = Math.floor(Math.random() * WH - ($("#astronaut_cat").height() + 50) + 50);
let Y2 = Math.floor(Math.random() * WH - ($("#astronaut_cat_2").height() + 50) + 50);
let Y3 = Math.floor(Math.random() * WH - ($("#astronaut_cat_3").height() + 50) + 50);
let Y4 = Math.floor(Math.random() * WH - ($("#astronaut_cat_4").height() + 50) + 50);
let hittedX1 = hittedY1 = hittedX2 = hittedY2 = hittedX3 = hittedY3 = hittedX4 = hittedY4 = false;
let Move1 = setInterval(move1,50);
let Move2 = setInterval(move2,50);
let Move3 = setInterval(move3,50);
let Move4 = setInterval(move4,50);
let Margat = setInterval(margat,2500);
let currentMoneyCount = Number($("#money").text());
let shopItemsImages = ["item1","item2","item3","item4","item5","item5","item5","item5", "item5", "item5", "item5", "item5","item5", "item5", "item5", "item5", "item5","item5", "item5", "item5", "item5", "item5","item5", "item5", "item5", "item5",];
let shopeItemsPrice = [50, 100, 200, 300, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,];
let prices,currentAvatarPreview,currentBuyingItemPriceBox,currentBuyingItemPrice,currentBuyingItem;
let nothingClicked = true
let currentAvatarEquiped;

function initialize(){
    addingShopItems()
    margat()
    $(".shop_pages_container").html(shopItemsImages.length + " items")
}
initialize()

function addingShopItems(){
    for(let i = 0; i < shopItemsImages.length; i++){
        let currentItem =   `<div class="shop_items_box">
                                <img src="Images/Shop Items/${shopItemsImages[i]}.png">
                                <div class="price"><p style="color:${currentMoneyCount > shopeItemsPrice[i] ? "green" : "red"}">${shopeItemsPrice[i]}</p><img src="Images/cat_coin.png"></div>
                            </div>`
        $("#shop_items_wrapper").append(currentItem)
    }
    prices = $(".price p")
}

function margat(){
    $("#press_to_enter").fadeOut(1500)
    setTimeout(() => {$("#press_to_enter").fadeIn(500)},1500)
}

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

function move4(){
    if(X4 + $("#astronaut_cat_4").width() >= WW - 1){
        X4--
        hittedX4 = false
    }else if(X4 <= 1){
        X4++
        hittedX4 = true
    }else if(!hittedX4){
        X4--
    }else if(hittedX4){
        X4++
    }
    if(Y4 + $("#astronaut_cat_4").height() >= WH - 1){
        Y4--
        hittedY4 = false
    }else if(Y4 <= 1){
        Y4++
        hittedY4 = true
    }else if(!hittedY4){
        Y4--
    }else if(hittedY4){
        Y4++
    }
    $("#astronaut_cat_4").css({left : X4,top : Y4})
}

function zooming(menu_btn){
    $("#loading_page").css({transform:"scale(2)",transition: "1s"})
    $("#loading_page").animate({opacity:0},500)
    setTimeout(() => {$("#loading_page").css("display","none")},1000)
    clearInterval(Margat)
    setTimeout(() => {menu_btn.fadeIn(1000)},1000)
}

function return_to_menu(){
    $(this).parent().fadeOut("slow");
    $("#loading_page").css("display","block");
    $("#loading_page").animate({opacity:1},500)
    $("#loading_page").css({transform:"scale(1)",transition: "1s"})
    Margat = setInterval(margat,2500)
}

function on_off_switch(){
    if($(this).hasClass("off")){
        $(this).removeClass("off")
        $(this).addClass("on")
        if($(this).hasClass("music")){
            $("#audio").prop("muted", false)
        }
    }
    else if($(this).hasClass("on")){
        $(this).removeClass("on")
        $(this).addClass("off")
        if($(this).hasClass("music")){
            $("#audio").prop("muted", true)
        }
    }
}

// function changing_shop_page(id){

// }

function price(){
    if($(this).html() == "Owned") return
    currentBuyingItemPrice = Number($(this).children("p").text());
    currentBuyingItemPriceBox = $(this)
    currentBuyingItem = $(this).parent().clone()
    currentMoneyCount = Number($("#money").text())
    if(currentMoneyCount > currentBuyingItemPrice){
        $(".are_you_sure_container").fadeIn()
        $(".are_you_sure_box").fadeIn();
    }else{
        $("#not_enough_money").fadeIn()
        $("#not_enough_money").css("display","flex")
        setTimeout(()=>{$("#not_enough_money").fadeOut()},1000)
    }
}

function fullscreenToggle(){
    if(document.fullscreenElement){
        document.exitFullscreen();
        $("#fullscreen").html('<img src="Images/full-screen.png" width="10%"> Fullscreen')
    }else{
        document.documentElement.requestFullscreen();
        $("#fullscreen").html('<img src="Images/full-screen.png" width="10%"> Windowed');
    }

    
}

function buyingItems(){
    $(".are_you_sure_container").fadeOut();
    $(".are_you_sure_box").fadeOut();
    $(".avatar img").attr("src",currentAvatarPreview);
    currentMoneyCount = Number($("#money").text());
    $(".coins_container p").text(`${currentMoneyCount - currentBuyingItemPrice}`);
    $(currentBuyingItemPriceBox).html("Owned");
    $("#inventory_items_wrapper").append(currentBuyingItem);
    $(currentBuyingItem).css("background","whitesmoke");
    $(currentBuyingItem).children(".price").html("Equip")
    $(currentBuyingItem).children(".price").addClass("equip_item")
}

function preview_avatar(){
    currentAvatarPreview = $(this).children("img").attr("src")
    $(".avatar_preview img").attr("src",currentAvatarPreview)
}

function equip_avatar(){
    currentAvatarEquiped = $(this).parent().children("img").attr("src")
    console.log(currentAvatarEquiped)
    $(".avatar_preview img").attr("src",currentAvatarPreview)
}

function change_name(e){
    if(e.which == 13){
        let name = $(".change_name_settings_row input").val()
        if(name.length > 10){
            $(".pop_up").fadeIn()
            $("#too_long_name").css("display","flex")
            setTimeout(()=>{$("#too_long_name").fadeOut()},1000)
        }else{
            $(".name").html(name)
            $(".change_name_settings_row input").val("")
        }
    }
}

//LOADING PAGE
$(document).keypress(()=>{zooming($("#first_level"))})
setTimeout(()=>{$("#preloader").fadeOut(2000)},1000)
$("#shop").click(()=>{zooming($('#shop_section'))})
$("#inventory").click(()=>{zooming($('#inventory_section'))})
$("#settings").click(()=>{$("#settings_section").fadeIn();nothingClicked = false})

//SETTINGS
$("#settings_closing").click(()=>{$("#settings_section").fadeOut();nothingClicked = true})
$(".audio_settings_switch").click(on_off_switch)
$("#login").click(()=>{})
$("#languages").click(()=>{})
$("#controls").click(()=>{})
$("#fullscreen").click(fullscreenToggle)
$(".change_name_settings_row input").keypress(change_name)

//SHOP 
$(".return_container").click(return_to_menu)
$(".price").click(price)
$(".are_you_sure_container").click(()=>{$(".are_you_sure_container").fadeOut();$(".are_you_sure_box").fadeOut();})
$(".shop_items_box").click(preview_avatar)
$("#no").click(()=>{$(".are_you_sure_container").fadeOut();$(".are_you_sure_box").fadeOut();})
$("#yes").click(buyingItems)

//INVENTORY
$("#next_arrow_inventory").click(()=>{})
$("#previous_arrow_inventory").click(()=>{})
$(".equip_item").click(equip_avatar)