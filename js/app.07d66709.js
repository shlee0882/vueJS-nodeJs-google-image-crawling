(function(e){function t(t){for(var i,r,c=t[0],a=t[1],s=t[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(f.length)f.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],i=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(i=!1)}i&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},l=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=a;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},2:function(e,t){},2825:function(e,t,n){},3:function(e,t){},4:function(e,t){},4996:function(e,t,n){"use strict";n("e309")},"4ac9":function(e,t){csdID="e4de7ce1615cc5a73",apiKey="AIzaSyCzL4PuUgQgQ3gQPwg4Rn1VmDoIla0sTFo",myHerokuUrl="https://cors-anywhere.herokuapp.com/"},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("7a23");const o={id:"app"},l=Object(i["d"])("div",{id:"nav"},null,-1);function r(e,t){const n=Object(i["t"])("router-view");return Object(i["n"])(),Object(i["c"])("div",o,[l,Object(i["e"])(n)])}n("ddb8");var c=n("6b0d"),a=n.n(c);const s={},u=a()(s,[["render",r]]);var d=u,f=n("6c02");const m={class:"home"},p=Object(i["d"])("h1",null,"구글 서치엔진에서 이미지 가져오기",-1);function g(e,t,n,o,l,r){const c=Object(i["t"])("image-list");return Object(i["n"])(),Object(i["c"])("div",m,[p,Object(i["z"])(Object(i["d"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.keyWord=e),placeholder:"검색할 키워드를 입력하세요.",style:{width:"25%","font-size":"25px"}},null,512),[[i["x"],l.keyWord]]),Object(i["e"])(c,{keyWord:l.keyWord},null,8,["keyWord"])])}const h=e=>(Object(i["q"])("data-v-9d12422a"),e=e(),Object(i["o"])(),e),b={class:"hello"},y=h(()=>Object(i["d"])("br",null,null,-1)),j=h(()=>Object(i["d"])("div",{id:"myProgress"},[Object(i["d"])("span",{id:"mySpan",style:{color:"white","font-family":"auto"}}),Object(i["d"])("div",{id:"myBar"},"0%")],-1)),v=h(()=>Object(i["d"])("br",null,null,-1)),O=h(()=>Object(i["d"])("h3",{id:"imgTitle",style:{"text-align":"left"}},null,-1)),w=h(()=>Object(i["d"])("div",null,[Object(i["d"])("ul",{id:"imageList1",style:{"text-align":"left"}})],-1));function L(e,t,n,o,l,r){return Object(i["n"])(),Object(i["c"])("div",b,[Object(i["d"])("div",null,[Object(i["d"])("h3",null,"입력한 키워드 : "+Object(i["v"])(n.keyWord),1)]),y,j,v,Object(i["d"])("div",null,[Object(i["d"])("button",{onClick:t[0]||(t[0]=(...e)=>r.getImageList&&r.getImageList(...e))},"GET 이미지 크롤링!!")]),O,w])}n("130f"),n("14d9"),n("4ac9");const k=n("7260");let S=n("0b16"),I=(n("30dc"),n("1157"));n("3e8f"),n("bc3a");var T=n("c4e3"),x=n("0083");const W=new k(csdID,apiKey);window.setImmediate=window.setTimeout;var B={name:"ImageList",props:{keyWord:String},mounted(){let e=document.createElement("script");e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"),document.head.appendChild(e)},data(){return{tempImgList:[],imgList:[],pageStVal:1,pageEndVal:11,localWidth:"",clickOnce:!1,valCnt:0}},methods:{getImageList(){if(window.vueComponent=this,self=window.vueComponent,""!=this.keyWord)if(I("#imgTitle").text("수집된 URL"),this.clickOnce)alert("크롤링 중입니다. 잠시만 기달려주세요.");else{this.imgList=[],this.pageStVal=1,this.pageEndVal=11,I("#imageList1").empty(),self.localWidth="";let e=document.getElementById("myBar");e.style.width="0%",e.innerHTML="0%",self.searchFunc()}else alert("키워드를 입력하세요.")},searchFunc(){self.clickOnce=!0,document.getElementById("mySpan").textContent="현재 크롤링 진행률 : "+Math.floor(.5*this.pageStVal)+"% 입니다.",W.search(self.keyWord,{page:self.pageStVal,size:"large"}).then(e=>{for(let t=0;t<e.length;t++){let n=e[t];self.valCnt=t;let i=S.parse(n.url).pathname,o=i.replace(/[^a-zA-Z0-8\.]+/g,"_"),l=/\.(jpg|jpeg|png|gif)\b/;if(o.length<200&&l.test(o)){I("#imageList1").append("<li>"+n.url+"</li>");let e={imgUrl:n.url,imgDescription:n.description};self.tempImgList.push(e)}}self.compareTwoVal()}).catch(e=>{self.compareTwoVal()})},compareTwoVal(){self.pageStVal<self.pageEndVal?(self.pageStVal+=10,self.searchFunc(self.pageStVal,self.pageEndVal)):this.fetchSomeThing(0)},fetchSomeThing(e){if(null!=self.tempImgList[e]){console.log(self.tempImgList[e]);let t=self.tempImgList[e],n=self.tempImgList;this.getBase64FromUrl(t.imgUrl,t.imgDescription).then(t=>{e++,e==n.length-1?self.make_zip():self.fetchSomeThing(e)}),"100"!=self.localWidth&&self.progressBar(e)}},make_zip(){var e=new T;if(0==self.imgList.length&&setTimeout((function(){return self.make_zip()}),500),self.imgList.length>0){for(var t=0;t<self.imgList.length;t++)e.file(self.imgList[t].description,this.urlToPromise(self.imgList[t].url),{binary:!0});e.generateAsync({type:"blob"}).then((function(e){saveAs(e,self.keyWord+".zip")}),(function(e){}));let n=document.getElementById("myBar");n.style.width="100%",n.innerHTML="100%",document.getElementById("mySpan").textContent="이미지 파일로 변환완료",self.clickOnce=!1}},fetchWithTimeout:async(e,t)=>{const{timeout:n=5e3}=t,i=new AbortController,o=setTimeout(()=>i.abort(),n),l=await fetch(e,{...t,signal:i.signal});return clearTimeout(o),l},getBase64FromUrl:async(e,t)=>{let n,i=myHerokuUrl+e;try{const e=await self.fetchWithTimeout(i,{timeout:3e3}),n=await e.blob();return new Promise(e=>{var i=window.URL.createObjectURL(new Blob([n])),o=document.createElement("a");o.href=i,o.setAttribute("download",t+".jpg"),document.body.appendChild(o);var l={url:i,description:t+".jpg"};e(self.imgList.push(l))})}catch(o){return n}},urlToPromise(e){return new Promise((function(t,n){x.getBinaryContent(e,(function(e,i){e?n(e):t(i)}))}))},progressBar(e){var t=document.getElementById("myBar");self.localWidth=parseFloat(100/self.tempImgList.length).toFixed(1).toString();let n=parseFloat(Number(self.localWidth)*Number(e)).toFixed(1);n>=100?(t.style.width="100%",t.innerHTML="100%",document.getElementById("mySpan").textContent="이미지 파일로 변환완료"):(t.style.width=n+"%",t.innerHTML=n+"%",document.getElementById("mySpan").textContent="이미지 파일로 변환 중: "+n+"% 입니다.")}}};n("4996");const V=a()(B,[["render",L],["__scopeId","data-v-9d12422a"]]);var C=V,E={components:{"image-list":C},data(){return{keyWord:""}}};const P=a()(E,[["render",g]]);var F=P;const _=[{path:"/vuejs-nodejs-google-image-crawling/",name:"Home",component:F}],U=Object(f["a"])({history:Object(f["b"])(),routes:_});var z=U;const M=Object(i["b"])(d);M.use(z),M.mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},ddb8:function(e,t,n){"use strict";n("2825")},e309:function(e,t,n){}});
//# sourceMappingURL=app.07d66709.js.map