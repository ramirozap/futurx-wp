(()=>{"use strict";var e,t={464:()=>{const e=window.wp.blocks,t=window.React,o=window.wp.blockEditor,r=window.wp.components,n=JSON.parse('{"UU":"futurx/boton-compra"}');(0,e.registerBlockType)(n.UU,{edit:function({attributes:e,setAttributes:n}){const{texto:a,link:l}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:"Ajustes"},(0,t.createElement)(r.TextControl,{label:"Link",value:l||"",onChange:e=>n({link:e})}),(0,t.createElement)(r.TextControl,{label:"Texto",value:a||"",onChange:e=>n({texto:e})}))),(0,t.createElement)("a",{...(0,o.useBlockProps)(),href:l},a))},save:function({attributes:e}){const{texto:r,link:n}=e;return(0,t.createElement)("a",{...o.useBlockProps.save(),href:n,target:"_blank",className:"boton-compra"},r)}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var l=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,c=0;c<o.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(s=!1,a<l&&(l=a));if(s){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,s,c]=o,i=0;if(l.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(t&&t(o);i<l.length;i++)a=l[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis.webpackChunkboton_compra=globalThis.webpackChunkboton_compra||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[350],(()=>r(464)));n=r.O(n)})();