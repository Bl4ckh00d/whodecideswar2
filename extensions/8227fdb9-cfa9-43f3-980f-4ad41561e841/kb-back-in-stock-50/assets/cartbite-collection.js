let gwCollectionProductCheckIfInStock=(t,e)=>e.variants.some((t=>!0===t.available))?{inStock:!0}:{inStock:!1,variant:e.variants[0]},gwCollectionPageRemoveButton=t=>{t.querySelectorAll(".gw-collection-page-button")[0].parentNode.removeChild(t.querySelectorAll(".gw-collection-page-button")[0])},gwCollectionPageAddButton=(t,e,o)=>{let i=e.id,n=o.id,l=e.handle,c=[...t.querySelectorAll(window.gwProductCardInsertAfter)].filter((t=>null!==t.offsetParent))[0],r=document.createElement("button");r.innerText=initVar.getStockFulfilledWidgetBeforeSubscribeText(),r.className="gw-collection-page-button",r.setAttribute(initVar.dataProductId,i),r.setAttribute(initVar.dataVariantId,n),r.setAttribute(initVar.dataProductHandle,l),c&&c.parentNode.insertBefore(r,c.nextSibling),r.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),initVar.stockWidgetClicked(t)}))},gwCollectionPageRender=async()=>{window["gw-collection-page-chk"]=window["gw-collection-page-chk"]||[],initVar.addPopUp(initVar.stockWidget.popupSelector,initVar.stockWidget.modalHtml);for(let t of[...document.querySelectorAll(window.gwProductCardSelector)])try{if(t.querySelector(".gw-collection-page-button"))continue;let e=t.querySelector(window.gwProductHandleSelector).getAttribute("href").split("?")[0];if(e)if(window["gw-collection-page-chk"][e]){if(!0!==window["skip-gw-collection-page-chk"])continue}else window["gw-collection-page-chk"][e]=!0;let o=await(await fetch(`${e}.js`)).json();initVar.processProduct(o);let i=gwCollectionProductCheckIfInStock(t,o);if(i.inStock)continue;await gwCollectionPageAddButton(t,o,i.variant),window.gwCollectionProductEventListener&&window.gwCollectionProductEventListener(t,o)}catch(t){initVar.colLog&&console.log(t)}};gwCollectionPageRender();
