import{C as O}from"./Common.6299f1fc.js";import{_ as L,f as $,k as W,r as S,o as c,c as v,L as P,M as z,a as _,w as M,g as I,z as w,h as n,u as A,s as y,b as e,W as C,t as i,e as V,B as E,p as F,i as j,v as R,m as B,H as N}from"./app.0d4c2068.js";import{a as Y,A as q}from"./ArticleList.39ff2bca.js";import"./Sidebar.bd4a22c4.js";const G={class:"sns-wrapper"},J=["href"],K=$({__name:"SNS",props:{large:{type:Boolean,default:!0}},setup(r){var d;const m={github:{icon:"fa-github-alt",preLink:"https://github.com/"},linkedin:{icon:"fa-linkedin-in",preLink:"https://www.linkedin.com/in/"},facebook:{icon:"fa-facebook-f",preLink:"https://www.facebook.com/"},twitter:{icon:"fa-twitter",preLink:"https://www.twitter.com/"},zhihu:{icon:"ri-zhihu-line",preLink:"https://www.zhihu.com/people/"},weibo:{icon:"ri-weibo-fill",preLink:"http://weibo.com/u/"},email:{icon:"fa-envelope",preLink:"mailto:"},rss:{icon:"ri-rss-fill",preLink:"",iconScale:.9}},s=(d=W().value.personalInfo)==null?void 0:d.sns,k=(t,a)=>typeof t=="string"?m[a].preLink+t:t.link,b=(t,a)=>typeof t=="string"?m[a].icon:t.icon,p=(t,a)=>(typeof t=="string"?m[a].iconScale:t.iconScale)||1;return(t,a)=>{const u=S("VIcon");return c(),v("div",G,[(c(!0),v(P,null,z(n(s),(g,f)=>(c(),v("a",{key:`${f}-${g}`,href:k(g,f),target:"_blank",rel:"noopener noreferrer"},[_(u,{class:"icon-stack"},{default:M(()=>[r.large?(c(),I(u,{key:0,name:"fa-circle",scale:"2.3",class:"icon-circle"})):w("",!0),_(u,{name:b(g,f),scale:p(g,f),class:"icon-sns",inverse:""},null,8,["name","scale"])]),_:2},1024)],8,J))),128))])}}});var Q=L(K,[["__file","SNS.vue"]]);const U=[{text:"Home",link:"/",icon:"fa-fort-awesome"},{text:"Tags",link:"/tags/",icon:"fa-tag"},{text:"Categories",link:"/pages/categories/",icon:"fa-satellite-dish"},{text:"Notes",link:"/pages/notes/",icon:"ri-book-2-fill"},{text:"links",link:"/pages/links/",icon:"fa-satellite-dish"},{text:"About",link:"/pages/about/",icon:"ri-book-2-fill"}];var X=Object.freeze(Object.defineProperty({__proto__:null,navbar:U},Symbol.toStringTag,{value:"Module"}));const H=r=>(F("data-v-2d548917"),r=r(),j(),r),Z={class:"home-content"},ee={class:"left-part"},te={class:"right-part"},oe={class:"person-panel"},ne={class:"person-info"},se=["src"],ae={class:"panel-data"},le=H(()=>e("p",null,"Posts",-1)),ie=H(()=>e("p",null,"Notes",-1)),ce=H(()=>e("p",null,"Categories",-1)),re={class:"panel-today"},ue={class:"date-year"},_e={class:"date-week"},he={class:"v-icon"},pe={class:"panel-content"},de=H(()=>e("div",null,null,-1)),me={class:"person-desc"},ve=$({__name:"HomeContent",setup(r){const o=A().value.personalInfo,s=E();console.log(s.value);const k=y(s.value.lists||[]),b=p=>{let d=["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"],t=new Map;for(let a=0;a<7;a++)t.set(a+1,d[a]);return t.get(p)};return(p,d)=>{const t=S("VIcon"),a=S("RouterLink");return c(),v("div",Z,[e("div",ee,[_(q,{data:n(Y)(k.value),scrollTopDistance:-57},null,8,["data"])]),e("div",te,[e("div",oe,[e("div",ne,[e("img",{src:n(C)(n(o).avatar),alt:"hero",onMouseover:d[0]||(d[0]=(...u)=>p.fetchHitokoto&&p.fetchHitokoto(...u))},null,40,se),e("h1",null,i(n(o).name),1)]),e("div",ae,[e("ul",null,[e("li",null,[le,e("span",null,i(n(s).listsNum),1)]),e("li",null,[ie,e("span",null,i(n(s).notesNum),1)]),e("li",null,[ce,e("span",null,i(n(s).catesNum),1)])]),e("div",re,[e("div",ue,[_(t,{name:"ri-book-2-fill"}),V(" "+i(new Date().getFullYear()),1)]),e("p",null,[e("b",null,i(new Date().getMonth()+1),1),V(" / "+i(new Date().getDate()),1)]),e("div",_e,[e("i",he,[new Date().getDay()>5?(c(),I(t,{key:0,name:"dd-interests-twotone"})):w("",!0),new Date().getDay()<=5?(c(),I(t,{key:1,name:"bi-person-workspace"})):w("",!0)]),e("span",null,i(b(new Date().getDay())),1)])])]),e("div",pe,[e("ul",null,[(c(!0),v(P,null,z(n(X).navbar,(u,g)=>(c(),v("li",{key:g},[_(a,{to:u.link},{default:M(()=>[_(t,{name:u.icon},null,8,["name"]),e("span",null,i(u.text),1)]),_:2},1032,["to"])]))),128))]),de]),e("p",me,i(n(o).description),1)])])])}}});var ge=L(ve,[["__scopeId","data-v-2d548917"],["__file","HomeContent.vue"]]);const fe=r=>(F("data-v-775f0710"),r=r(),j(),r),ke={class:"home-blog"},be=["src"],we={key:0,class:"hero-bubble"},ye={class:"hero-bubble__body"},Se=fe(()=>e("div",{class:"hero-bubble__tile"},null,-1)),Ie={class:"hero-info"},Le={class:"description"},$e=$({__name:"Home",setup(r){const m=A(),o=m.value.homeHeaderImages,s=y(-1),k=y(1),b=()=>{var h;window.scrollTo({top:(h=document.querySelector(".hero"))==null?void 0:h.clientHeight,behavior:"smooth"})},p=m.value.hitokoto,d=y("\u6B63\u5728\u52A0\u8F7D\u4E00\u8A00...");let t=!1;const a=()=>{if(!p||t)return;t=!0;let h=p;h=typeof h=="string"?h:"https://v1.hitokoto.cn",fetch(h).then(l=>l.json()).then(l=>d.value=l.hitokoto).catch(l=>{console.log(`Get ${h} error: `,l)})};R(()=>{o&&o.length>0&&(s.value=Math.floor(Math.random()*o.length))});const u=h=>{if(!(o&&o.length>0))return;const l=o.length;s.value=(s.value+h+l)%l},g=B(()=>o&&o.length>0&&s.value!==-1?`url(${C(o[s.value].path)})`:"none"),f=B(()=>o&&o.length>0&&s.value!==-1?o[s.value].mask:null),x=m.value.personalInfo;return(h,l)=>{const D=S("VIcon");return c(),v("main",ke,[e("div",{class:"hero",style:N({"background-image":n(g)})},[n(f)?(c(),v("div",{key:0,class:"hero-mask",style:N({background:n(f)})},null,4)):w("",!0),e("div",{class:"hero-content",style:N({opacity:k.value})},[e("img",{class:"hero-avatar hide-on-mobile",src:n(C)(n(x).avatar),alt:"hero",onMouseover:a},null,40,be),n(p)?(c(),v("div",we,[e("div",ye,[e("p",null,i(d.value),1)]),Se])):w("",!0),e("div",Ie,[e("h1",null,i(n(x).name),1),e("p",Le,i(n(x).description),1)]),_(Q,{class:"hide-on-mobile",large:""}),e("button",{class:"hero-img-prev hide-on-mobile",onClick:l[0]||(l[0]=T=>u(-1))},[_(D,{name:"fa-chevron-left"})]),e("button",{class:"hero-img-next hide-on-mobile",onClick:l[1]||(l[1]=T=>u(1))},[_(D,{name:"fa-chevron-right"})]),e("span",{class:"hero-arrow-down hide-on-mobile",onClick:l[2]||(l[2]=T=>b())},[_(D,{name:"fa-chevron-down",animation:"float"})])],4)],4),_(ge)])}}});var He=L($e,[["__scopeId","data-v-775f0710"],["__file","Home.vue"]]);const xe=$({__name:"HomePage",setup(r){return(m,o)=>(c(),I(O,null,{page:M(()=>[_(He)]),_:1}))}});var Te=L(xe,[["__file","HomePage.vue"]]);export{Te as default};