(function(){function j(a,b,c,d){c&&(c='<pre class="code prettyprint lang-co"\n >'+c.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</pre>");return"<div id="+d+" class=block><div class=comment\n ><a class=anchor href=#"+a+d+">#"+d+"</a\n >"+e.makeHtml(b)+"</div\n >"+c+"</div>"}function i(a,b){var c,d,e,f,g,h,i,k,l,m,n;f=e=d=c="",g=/^[^\n\S]*#(?![!{]) ?(.*)/;for(l=0,n=(m=b.split("\n")).length;l<n;++l){h=m[l];if(!h){i=!0,d&&(d+="\n");continue}if(k=g.exec(h)){if(d||e&&i)f+=j(a,e,d,c++),e=d="";e+=k[1]+"\n"}else d+=h+"\n";i=!1}if(e||d)f+=j(a,e,d,c);return"<h1>"+a+"</h1>"+f+"<br clear=both>"}function h(c,d){var e,f;e=c[0],f=c[1],b.innerHTML=d,document.title=e+(a&&" - "+a),f&&document.getElementById(f).scrollIntoView();return prettyPrint()}function g(a,b){return document.body.appendChild(f(document.createElement(a),b))}var a,b,c,d,e,f=function(a,b){for(var c in b)a[c]=b[c];return a};a=document.title,b=document.getElementById("doc")||g("div",{id:"doc"}),c=document.getElementById("nav")||function(){var b,c,d,e,f;b="<div class=pointee>&#x2935;</div>",a&&(b+="<h1>"+a+"</h1>");for(d=0,f=(e=sources).length;d<f;++d)c=e[d],b+=c?"<li><a href=#"+c+">"+c+"</a>":"<p class=spacer>";b+="<li class=index><a href=#>#</a>";return g("ul",{id:"nav",innerHTML:b})}(),d={"__proto__":null},e=new Showdown.converter,(this.onhashchange=function(){var e,f,g,j;if(!(e=/^\D+(?=(\d*)$)/.exec(location.hash.slice(1))))document.title=a,c.className=b.innerHTML="";else{c.className="menu",b.innerHTML="...",f=e[0];if(g=d[f])return h(e,g);j=new XMLHttpRequest,j.open("GET",f!=="Cokefile"?f+".co":f,!0),typeof j.overrideMimeType=="function"&&j.overrideMimeType("text/plain"),j.onreadystatechange=function(){if(j.readyState===4)return h(e,d[f]=i(f,j.responseText))};return j.send(null)}})()}).call(this)