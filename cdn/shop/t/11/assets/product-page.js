$(function(){$.fn.hScroll=function(amount){amount=amount||120,$(this).bind("DOMMouseScroll mousewheel",function(event){var oEvent=event.originalEvent,direction=oEvent.detail?oEvent.detail*-amount:oEvent.wheelDelta,position=$(this).scrollLeft();position+=direction>0?-amount:amount,$(this).scrollLeft(position),event.preventDefault()})}}),$(document).ready(function(){window.addEventListener("load",event=>{var image=document.getElementsByClassName("gallery-image")[0],load=image.complete;$("#loader").addClass("hidden"),$("#horizontal-product-gallery").removeClass("hide")}),$(window).width()>767?$("#horizontal-product-gallery").hScroll(20):$("#horizontal-product-gallery").unbind("DOMMouseScroll mousewheel"),$(window).on("resize",function(){$(window).width()>767?($("#horizontal-product-gallery").hScroll(20),$(".product-info-box").css({display:"block"})):$("#horizontal-product-gallery").unbind("DOMMouseScroll mousewheel")}),$("#product-content-show-hide").change(function(){$(this).is(":checked")?$("#product-info-content").removeClass("hide"):$("#product-info-content").addClass("hide")}),$("#product-box-open").click(function(){$(".product-info-box").toggle("scale"),$("#product-box-open").toggle("scale")}),$("#product-box-close").click(function(){$(".product-info-box").toggle("scale"),$("#product-box-open").toggle("scale")}),$("#show-more").click(function(){$("#product-info-content").removeClass("hide"),$("#show-more").addClass("hidden"),$("#product-content-show-hide").prop("checked",!0)}),$("#show-less").click(function(){$("#product-info-content").addClass("hide"),$("#show-more").removeClass("hidden"),$("#product-content-show-hide").prop("checked",!1)});const backButton=$("#back-button");$(backButton).click(function(){return parent.history.back(),!1})});
//# sourceMappingURL=/cdn/shop/t/11/assets/product-page.js.map?v=141283741501904157371723667681