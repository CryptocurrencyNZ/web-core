import{j as e}from"./index-wW1gz5Ib.js";const r=()=>e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-green-500/5 to-black"}),e.jsxs("div",{className:"absolute h-full w-full",children:[[...Array(20)].map((s,a)=>e.jsx("div",{className:"absolute w-full",style:{top:`${(a+1)*5}%`,animation:`slideLeft ${2+a%2}s linear infinite`,opacity:.7-a*.004,height:"1px",background:"linear-gradient(to right, rgba(34,197,94,0.3), rgb(27,97,0))"}},`h-${a}`)),[...Array(20)].map((s,a)=>e.jsx("div",{className:"absolute h-full",style:{left:`${(a+1)*5}%`,animation:`slideUp ${2+a%2}s linear infinite`,opacity:.7-a*.004,width:"1px",background:"linear-gradient(to bottom, rgba(34,197,94,0.3), rgb(27,97,0))"}},`v-${a}`))]}),e.jsx("div",{className:"absolute h-full w-full",children:[...Array(10)].map((s,a)=>e.jsx("div",{className:"absolute w-1 h-1 rounded-full bg-green-400",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,opacity:1,animation:`pulse 3s infinite ${Math.random()*2}s`,filter:"blur(1px)",boxShadow:"0 0 8px rgba(34,197,94,0.6)"}},`glow-${a}`))}),e.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 50% 50%, rgba(34,197,94,0.03) 0%, rgba(0,0,0,0.1) 100%)"}}),e.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(45deg, rgba(34,197,94,0.02) 0%, transparent 100%)"}}),e.jsx("style",{children:`
        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.5);
          }
        }
      `})]});export{r as A};
