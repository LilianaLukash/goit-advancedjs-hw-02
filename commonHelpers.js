import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as i,i as l}from"./assets/vendor-77e16229.js";let a;i("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=e[0];o<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):(a=o,document.querySelector("[data-start]").disabled=!1)}});document.querySelector("[data-start]").addEventListener("click",()=>{document.querySelector("[data-start]").disabled=!0,document.getElementById("datetime-picker").disabled=!0;const e=setInterval(()=>{const n=a-new Date;if(n<=0){clearInterval(e),document.getElementById("datetime-picker").disabled=!1;return}const t=m(n);document.querySelector("[data-days]").textContent=r(t.days),document.querySelector("[data-hours]").textContent=r(t.hours),document.querySelector("[data-minutes]").textContent=r(t.minutes),document.querySelector("[data-seconds]").textContent=r(t.seconds)},1e3)});function m(e){const d=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:s,minutes:c,seconds:u}}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
