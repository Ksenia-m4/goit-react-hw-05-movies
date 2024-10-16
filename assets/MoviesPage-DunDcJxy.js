import{R as l,d as g,P as O,u as P,r as f,j as s,C as w,L as S}from"./index-B8UNPLxc.js";import{N as h,a as C}from"./getMovies-Cqx9-eYT.js";import{M as N}from"./MovieList-B5tjpssG.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=l.createContext&&l.createContext(v),E=["attr","size","title"];function z(e,t){if(e==null)return{};var r=M(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function M(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(n){_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _(e,t,r){return t=q(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=I(e,"string");return typeof t=="symbol"?t:t+""}function I(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function x(e){return e&&e.map((t,r)=>l.createElement(t.tag,d({key:r},t.attr),x(t.child)))}function L(e){return t=>l.createElement(D,p({attr:d({},e.attr)},t),x(e.child))}function D(e){var t=r=>{var{attr:n,size:o,title:a}=e,u=z(e,E),c=o||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),l.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,u,{className:i,style:d(d({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&l.createElement("title",null,a),e.children)};return b!==void 0?l.createElement(b.Consumer,null,r=>t(r)):t(v)}function k(e){return L({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`},child:[]}]}]})(e)}const F=g.form`
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  width: 100%;

  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background-color: #f4f4f4;

  overflow: hidden;
`,R=g.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 10px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #737373;
  }
`,T=g.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: 0;
  &:hover {
    background-color: #c00;
    color: #fff;
    opacity: 1;
  }
`,j=({onSubmit:e})=>{const[t,r]=P(),n=t.get("query")??"",[o,a]=f.useState(n),u=i=>{const m=i.target.value;a(m),r(m!==""?{query:m}:{})},c=i=>{if(i.preventDefault(),!o.trim()){h.Notify.failure("Please enter a search query.");return}e(o),a("")};return s.jsxs(F,{onSubmit:c,children:[s.jsx(R,{type:"text",autoFocus:!0,placeholder:"Search movies",onChange:u,value:o}),s.jsx(T,{type:"submit",children:s.jsx(k,{size:24})})]})};j.propTypes={onSubmit:O.func.isRequired};const A=()=>{const[e,t]=f.useState(""),{movies:r,setMovies:n}=f.useContext(w),[o,a]=f.useState(!1);f.useEffect(()=>{if(!e)return;async function c(){try{a(!0);const i=await C(e);i.length===0?h.Notify.failure("No movies found for this query."):n(i)}catch{h.Notify.failure("Failed to load movies. Please try again later.")}finally{a(!1)}}c()},[e,n]);const u=c=>{t(c)};return s.jsxs(s.Fragment,{children:[s.jsx(j,{onSubmit:u}),o&&s.jsx(S,{}),r.length>0&&s.jsx(N,{movies:r})]})};export{A as default};
