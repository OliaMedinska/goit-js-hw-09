!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body,a=null;t.addEventListener("click",(function(){a=setInterval((function(){n.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.88ea3e5b.js.map