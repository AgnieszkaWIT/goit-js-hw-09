let e;function t(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,e=setTimeout(t,1e3)}document.querySelector("[data-start]").addEventListener("click",(()=>{document.querySelector("[data-start]").disabled=!0,document.querySelector("[data-stop]").disabled=!1,t()})),document.querySelector("[data-stop]").addEventListener("click",(()=>{document.querySelector("[data-stop]").disabled=!0,document.querySelector("[data-start]").disabled=!1,clearTimeout(e)}));
//# sourceMappingURL=01-color-switcher.a055d12c.js.map
