(()=>{"use strict";var e,t={93:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,n=window.wp.components,r=window.wp.blockEditor,a=JSON.parse('{"UU":"futurx/tiendas"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{texto:o,alternativeStyle:i,link:s}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Ajustes","primer-capitulo")},(0,t.createElement)(n.TextControl,{label:(0,l.__)("Texto","primer-capitulo"),value:o||"",onChange:e=>a({texto:e})}),(0,t.createElement)(n.TextControl,{label:(0,l.__)("Link","primer-capitulo"),value:s||"",onChange:e=>a({link:e})}),(0,t.createElement)(n.ToggleControl,{label:"Estilo alternativo",help:i?"Estilo Gris":"Estilo Violeta",checked:i,onChange:e=>{a({alternativeStyle:e})}}))),(0,t.createElement)("div",{...(0,r.useBlockProps)(),className:"book-cards"},(0,t.createElement)("div",{className:"title"},o),(0,t.createElement)(r.InnerBlocks,{allowedBlocks:["futurx/boton-compra"]})))},save:function({attributes:e}){const{texto:l,alternativeStyle:n,link:a}=e;let o="book-card";return n&&(o=o.concat(" alternative")),(0,t.createElement)("div",{...r.useBlockProps.save(),className:o},a?(0,t.createElement)("a",{href:a,target:"_blank",className:"main-link"},l):(0,t.createElement)("div",{className:"title"},l),(0,t.createElement)(r.InnerBlocks.Content,null))}})}},l={};function n(e){var r=l[e];if(void 0!==r)return r.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,l,r,a)=>{if(!l){var o=1/0;for(u=0;u<e.length;u++){for(var[l,r,a]=e[u],i=!0,s=0;s<l.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,r,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var r,a,[o,i,s]=l,c=0;if(o.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(t&&t(l);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},l=globalThis.webpackChunktiendas=globalThis.webpackChunktiendas||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=n.O(void 0,[350],(()=>n(93)));r=n.O(r)})();