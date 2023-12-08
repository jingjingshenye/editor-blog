import{_ as x,u as P,o as _,c as L,a as f,b as M}from"./index-1zNoBRay.js";function I(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}return e}function N(e,r){return Array(r+1).join(e)}function H(e){return e.replace(/^\n*/,"")}function F(e){for(var r=e.length;r>0&&e[r-1]===`
`;)r--;return e.substring(0,r)}var $=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function k(e){return y(e,$)}var T=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function w(e){return y(e,T)}function V(e){return R(e,T)}var C=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function U(e){return y(e,C)}function W(e){return R(e,C)}function y(e,r){return r.indexOf(e.nodeName)>=0}function R(e,r){return e.getElementsByTagName&&r.some(function(t){return e.getElementsByTagName(t).length})}var s={};s.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};s.lineBreak={filter:"br",replacement:function(e,r,t){return t.br+`
`}};s.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,r,t){var n=Number(r.nodeName.charAt(1));if(t.headingStyle==="setext"&&n<3){var a=N(n===1?"=":"-",e.length);return`

`+e+`
`+a+`

`}else return`

`+N("#",n)+" "+e+`

`}};s.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};s.list={filter:["ul","ol"],replacement:function(e,r){var t=r.parentNode;return t.nodeName==="LI"&&t.lastElementChild===r?`
`+e:`

`+e+`

`}};s.listItem={filter:"li",replacement:function(e,r,t){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=t.bulletListMarker+"   ",a=r.parentNode;if(a.nodeName==="OL"){var i=a.getAttribute("start"),o=Array.prototype.indexOf.call(a.children,r);n=(i?Number(i)+o:o+1)+".  "}return n+e+(r.nextSibling&&!/\n$/.test(e)?`
`:"")}};s.indentedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){return`

    `+r.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};s.fencedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){for(var n=r.firstChild.getAttribute("class")||"",a=(n.match(/language-(\S+)/)||[null,""])[1],i=r.firstChild.textContent,o=t.fence.charAt(0),c=3,l=new RegExp("^"+o+"{3,}","gm"),u;u=l.exec(i);)u[0].length>=c&&(c=u[0].length+1);var d=N(o,c);return`

`+d+a+`
`+i.replace(/\n$/,"")+`
`+d+`

`}};s.horizontalRule={filter:"hr",replacement:function(e,r,t){return`

`+t.hr+`

`}};s.inlineLink={filter:function(e,r){return r.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r){var t=r.getAttribute("href"),n=h(r.getAttribute("title"));return n&&(n=' "'+n+'"'),"["+e+"]("+t+n+")"}};s.referenceLink={filter:function(e,r){return r.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r,t){var n=r.getAttribute("href"),a=h(r.getAttribute("title"));a&&(a=' "'+a+'"');var i,o;switch(t.linkReferenceStyle){case"collapsed":i="["+e+"][]",o="["+e+"]: "+n+a;break;case"shortcut":i="["+e+"]",o="["+e+"]: "+n+a;break;default:var c=this.references.length+1;i="["+e+"]["+c+"]",o="["+c+"]: "+n+a}return this.references.push(o),i},references:[],append:function(e){var r="";return this.references.length&&(r=`

`+this.references.join(`
`)+`

`,this.references=[]),r}};s.emphasis={filter:["em","i"],replacement:function(e,r,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}};s.strong={filter:["strong","b"],replacement:function(e,r,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}};s.code={filter:function(e){var r=e.previousSibling||e.nextSibling,t=e.parentNode.nodeName==="PRE"&&!r;return e.nodeName==="CODE"&&!t},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var r=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",t="`",n=e.match(/`+/gm)||[];n.indexOf(t)!==-1;)t=t+"`";return t+r+e+r+t}};s.image={filter:"img",replacement:function(e,r){var t=h(r.getAttribute("alt")),n=r.getAttribute("src")||"",a=h(r.getAttribute("title")),i=a?' "'+a+'"':"";return n?"!["+t+"]("+n+i+")":""}};function h(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function b(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var r in e.rules)this.array.push(e.rules[r])}b.prototype={add:function(e,r){this.array.unshift(r)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var r;return(r=m(this.array,e,this.options))||(r=m(this._keep,e,this.options))||(r=m(this._remove,e,this.options))?r:this.defaultRule},forEach:function(e){for(var r=0;r<this.array.length;r++)e(this.array[r],r)}};function m(e,r,t){for(var n=0;n<e.length;n++){var a=e[n];if(j(a,r,t))return a}}function j(e,r,t){var n=e.filter;if(typeof n=="string"){if(n===r.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(r.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(e,r,t))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function q(e){var r=e.element,t=e.isBlock,n=e.isVoid,a=e.isPre||function(B){return B.nodeName==="PRE"};if(!(!r.firstChild||a(r))){for(var i=null,o=!1,c=null,l=A(c,r,a);l!==r;){if(l.nodeType===3||l.nodeType===4){var u=l.data.replace(/[ \r\n\t]+/g," ");if((!i||/ $/.test(i.data))&&!o&&u[0]===" "&&(u=u.substr(1)),!u){l=g(l);continue}l.data=u,i=l}else if(l.nodeType===1)t(l)||l.nodeName==="BR"?(i&&(i.data=i.data.replace(/ $/,"")),i=null,o=!1):n(l)||a(l)?(i=null,o=!0):i&&(o=!1);else{l=g(l);continue}var d=A(c,l,a);c=l,l=d}i&&(i.data=i.data.replace(/ $/,""),i.data||g(i))}}function g(e){var r=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),r}function A(e,r,t){return e&&e.parentNode===r||t(r)?r.nextSibling||r.parentNode:r.firstChild||r.nextSibling||r.parentNode}var S=typeof window<"u"?window:{};function G(){var e=S.DOMParser,r=!1;try{new e().parseFromString("","text/html")&&(r=!0)}catch{}return r}function X(){var e=function(){};return K()?e.prototype.parseFromString=function(r){var t=new window.ActiveXObject("htmlfile");return t.designMode="on",t.open(),t.write(r),t.close(),t}:e.prototype.parseFromString=function(r){var t=document.implementation.createHTMLDocument("");return t.open(),t.write(r),t.close(),t},e}function K(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{window.ActiveXObject&&(e=!0)}return e}var Y=G()?S.DOMParser:X();function z(e,r){var t;if(typeof e=="string"){var n=Q().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");t=n.getElementById("turndown-root")}else t=e.cloneNode(!0);return q({element:t,isBlock:k,isVoid:w,isPre:r.preformattedCode?J:null}),t}var v;function Q(){return v=v||new Y,v}function J(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function Z(e,r){return e.isBlock=k(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=ee(e),e.flankingWhitespace=re(e,r),e}function ee(e){return!w(e)&&!U(e)&&/^\s*$/i.test(e.textContent)&&!V(e)&&!W(e)}function re(e,r){if(e.isBlock||r.preformattedCode&&e.isCode)return{leading:"",trailing:""};var t=te(e.textContent);return t.leadingAscii&&E("left",e,r)&&(t.leading=t.leadingNonAscii),t.trailingAscii&&E("right",e,r)&&(t.trailing=t.trailingNonAscii),{leading:t.leading,trailing:t.trailing}}function te(e){var r=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:r[1],leadingAscii:r[2],leadingNonAscii:r[3],trailing:r[4],trailingNonAscii:r[5],trailingAscii:r[6]}}function E(e,r,t){var n,a,i;return e==="left"?(n=r.previousSibling,a=/ $/):(n=r.nextSibling,a=/^ /),n&&(n.nodeType===3?i=a.test(n.nodeValue):t.preformattedCode&&n.nodeName==="CODE"?i=!1:n.nodeType===1&&!k(n)&&(i=a.test(n.textContent))),i}var ne=Array.prototype.reduce,ie=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function p(e){if(!(this instanceof p))return new p(e);var r={rules:s,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(t,n){return n.isBlock?`

`:""},keepReplacement:function(t,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(t,n){return n.isBlock?`

`+t+`

`:t}};this.options=I({},r,e),this.rules=new b(this.options)}p.prototype={turndown:function(e){if(!oe(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var r=D.call(this,new z(e,this.options));return ae.call(this,r)},use:function(e){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.use(e[r]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,r){return this.rules.add(e,r),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return ie.reduce(function(r,t){return r.replace(t[0],t[1])},e)}};function D(e){var r=this;return ne.call(e.childNodes,function(t,n){n=new Z(n,r.options);var a="";return n.nodeType===3?a=n.isCode?n.nodeValue:r.escape(n.nodeValue):n.nodeType===1&&(a=le.call(r,n)),O(t,a)},"")}function ae(e){var r=this;return this.rules.forEach(function(t){typeof t.append=="function"&&(e=O(e,t.append(r.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function le(e){var r=this.rules.forNode(e),t=D.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(t=t.trim()),n.leading+r.replacement(t,e,this.options)+n.trailing}function O(e,r){var t=F(e),n=H(r),a=Math.max(e.length-t.length,r.length-n.length),i=`

`.substring(0,a);return t+i+n}function oe(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}const se={class:"preview"},ce={class:"wrapper"},ue={class:"ql-container ql-snow"},fe={class:"ql-editor"},de=["innerHTML"],he={__name:"Preview",setup(e){const r=P();function t(){const i=new p().turndown(r.content);console.log(i),n(`data:text/markdown;charset=utf-8,${encodeURIComponent(i)}`)}const n=a=>{const i=document.createElement("a"),o="导出文件.md";i.style.display="none",i.download=o,i.href=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)};return(a,i)=>(_(),L("div",se,[f("div",ce,[f("div",ue,[f("div",fe,[f("div",{innerHTML:M(r).content},null,8,de)])]),f("div",{class:"btn",onClick:t},"出为Markdown")])]))}},me=x(he,[["__scopeId","data-v-099d8320"]]);export{me as default};
