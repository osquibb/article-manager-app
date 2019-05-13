(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(16),o=r.n(i),s=(r(59),r(60),r(61),r(34)),l=r(18),c=r.n(l),d=r(29),u=r(14),p=r(5),f=r(9),h=r(10),b=r(12),g=r(11),m=r(4),v=r(13),x=r(2),O=r(3),j=r(7);function k(){var e=Object(x.a)(["\n  border: none;\n  color: #9E9E9E;\n  background-color: inherit;\n  &:hover {\n    color: black;\n  }\n"]);return k=function(){return e},e}function E(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 1px 1px 5px grey;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: white;\n  border: 1px solid #1A163D;\n  &:hover {\n    box-shadow: 3px 3px #1A163D;\n  }\n  transition: box-shadow 0.2s ease-in-out;\n  box-shadow: ",";\n  display: flex;\n"]);return E=function(){return e},e}var S=O.a.div(E(),function(e){return e.isDragging?"3px 3px #1A163D":"none"}),y=O.a.button(k()),w=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(j.b,{draggableId:this.props.article.id,index:this.props.index},function(t,r){return a.a.createElement(S,Object.assign({},t.dragHandleProps,t.draggableProps,{ref:t.innerRef,isDragging:r.isDragging}),a.a.createElement("a",{href:e.props.article.link,target:"_blank'"},e.props.article.content),a.a.createElement(y,{className:"fa fa-trash-o",hidden:e.props.hideDeleteButton,onClick:function(){return e.props.deleteArticle(e.props.article.id)}}))})}}]),t}(a.a.Component);function I(){var e=Object(x.a)(["\nposition: absolute;\ntop: -70px;\nleft: -14px;\n"]);return I=function(){return e},e}function A(){var e=Object(x.a)(["\nposition: absolute;\ntop: 3px;\nright: 2px;\n"]);return A=function(){return e},e}function D(){var e=Object(x.a)(["\nposition: absolute;\ntop: 3px;\nright: 8px;\n&:hover {\n  cursor: pointer;\n}\n"]);return D=function(){return e},e}function R(){var e=Object(x.a)(["\nbackground-color: #FFFBC7;\nborder-bottom: 1px solid lightgrey;\n"]);return R=function(){return e},e}function N(){var e=Object(x.a)(["\nborder: none;\nbackground: transparent;\ncolor: #1A163D;\n&:focus {\n  outline: none;\n}\n&:hover {\n  color: #E07D7E;\n}\n"]);return N=function(){return e},e}function P(){var e=Object(x.a)(["\n  padding: 8px;\n  flex-grow: 1;\n  background-image: ",";\n  background-size: 24px 24px;\n  background-position: 0 0, 12px 12px;\n  min-height: 100px;\n  "]);return P=function(){return e},e}function C(){var e=Object(x.a)(["\n  padding: 8px;\n  width: 60%;\n  background-color: inherit;\n  font-weight: 200;\n  border-style: none;\n  &:focus {\n    outline: none;\n  }\n\n"]);return C=function(){return e},e}function B(){var e=Object(x.a)(["\n  padding: 8px;\n  margin: 0;\n"]);return B=function(){return e},e}function F(){var e=Object(x.a)(["\n  margin: 12px;\n  margin-top: ",";\n  border: 1px solid #1A163D;\n  background-color: white;\n  width: 260px;\n  min-height: 260px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  box-shadow: 3px 3px #1A163D;\n"]);return F=function(){return e},e}var W=O.a.div(F(),function(e){return 0===e.index?"80px":null}),V=O.a.h5(B()),T=O.a.input(C()),z=O.a.div(P(),function(e){return e.isDraggingOver?"radial-gradient(#1A163D 10%, transparent 15%), radial-gradient(#1A163D 10%, transparent 15%)":"none"}),H=O.a.button(N()),J=O.a.span(R()),K=O.a.i(D()),M=O.a.span(A()),U=O.a.div(I()),$=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.articles!==this.props.articles}},{key:"render",value:function(){var e=this;return this.props.articles.map(function(t,r){return a.a.createElement(w,{key:t.id,article:t,index:r,hideDeleteButton:e.props.isFirstFolder,deleteArticle:e.props.deleteArticle})})}}]),t}(a.a.Component),_=function(e){function t(e){var r;return Object(f.a)(this,t),(r=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={searchTerm:"",pageNum:1},r.handleSearchChange=r.handleSearchChange.bind(Object(m.a)(r)),r.handleSearchSubmit=r.handleSearchSubmit.bind(Object(m.a)(r)),r.mobileSearchSubmit=r.mobileSearchSubmit.bind(Object(m.a)(r)),r.nextPage=r.nextPage.bind(Object(m.a)(r)),r.prevPage=r.prevPage.bind(Object(m.a)(r)),r}return Object(v.a)(t,e),Object(h.a)(t,[{key:"nextPage",value:function(){var e=this;this.setState(function(e){return{pageNum:e.pageNum+1}},function(){return e.props.populateSearchResults("",e.state.pageNum,!1)})}},{key:"prevPage",value:function(){var e=this;this.setState(function(e){return{pageNum:e.pageNum-1}},function(){return e.props.populateSearchResults("",e.state.pageNum,!1)})}},{key:"handleSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"mobileSearchSubmit",value:function(){this.props.populateSearchResults(this.state.searchTerm,1)}},{key:"handleSearchSubmit",value:function(e){"Enter"===e.key&&this.props.populateSearchResults(this.state.searchTerm,1)}},{key:"render",value:function(){var e=this,t=0===this.props.index,r="folder-1"!==this.props.folder.id||"folder-1"===this.props.folder.id&&0===this.props.articles.length;return a.a.createElement(j.b,{draggableId:this.props.folder.id,isDragDisabled:"folder-1"===this.props.folder.id,index:this.props.index},function(n){return a.a.createElement(W,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,index:e.props.index}),t?a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,a.a.createElement("ol",null,a.a.createElement("li",null,"Search Wikipedia"),a.a.createElement("li",null,"Drag and drop articles"))),a.a.createElement(J,null,a.a.createElement(T,{type:"text",placeholder:"Search Wikipedia...",ref:function(t){return e.searchInput=t},value:e.state.searchTerm,onBlur:e.mobileSearchSubmit,onChange:e.handleSearchChange,onKeyDown:e.handleSearchSubmit}),a.a.createElement(K,{className:"fa fa-2x fa-search",hidden:!r,onClick:function(){return e.searchInput.focus()}}),a.a.createElement(M,{hidden:r},a.a.createElement(H,{onClick:e.prevPage,hidden:e.props.hidePrevButton,className:"fa fa-arrow-circle-left fa-2x"}),a.a.createElement(H,{onClick:e.nextPage,hidden:e.props.hideNextButton,className:"fa fa-arrow-circle-right fa-2x"})))):a.a.createElement(J,null,a.a.createElement(V,null,e.props.folder.title)),a.a.createElement(j.c,{droppableId:e.props.folder.id,type:"article",isDropDisabled:"folder-1"===e.props.folder.id},function(t,r){return a.a.createElement(z,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:r.isDraggingOver}),a.a.createElement($,{articles:e.props.articles,isFirstFolder:"folder-1"===e.props.folder.id,deleteArticle:e.props.deleteArticle}),t.placeholder)}))})}}]),t}(a.a.Component),q={articles:{},folders:{"folder-1":{id:"folder-1",title:"",articleIds:[]},"folder-2":{id:"folder-2",title:"Interesting",articleIds:[]},"folder-3":{id:"folder-3",title:"Favorites",articleIds:[]}},folderOrder:["folder-1","folder-2","folder-3"]};function G(){var e=Object(x.a)(["\ndisplay: flex;\njustify-content: center;\n"]);return G=function(){return e},e}var L=O.a.div(G()),Q=function(e){function t(e){var r;return Object(f.a)(this,t),(r=Object(b.a)(this,Object(g.a)(t).call(this,e))).onDragEnd=function(e){var t,n=e.destination,a=e.source,i=e.draggableId,o=e.type;if(n&&(n.droppableId!==a.droppableId||n.index!==a.index))if("folder"!==o){var s=r.state.folders[a.droppableId],l=r.state.folders[n.droppableId];if(s!==l){var c=Array.from(s.articleIds);c.splice(a.index,1);var d=Object(p.a)({},s,{articleIds:c}),f=Array.from(l.articleIds);f.splice(n.index,0,i);var h=Object(p.a)({},l,{articleIds:f}),b=Object(p.a)({},r.state,{folders:Object(p.a)({},r.state.folders,(t={},Object(u.a)(t,d.id,d),Object(u.a)(t,h.id,h),t))});if(r.setState(b),"folder-1"===s.id){for(var g=Array.from(r.state.searchResults),m=0;m<g.length;m++)g[m].id===i&&g.splice(m,1);r.setState({searchResults:g})}}else{var v=Array.from(s.articleIds);v.splice(a.index,1),v.splice(n.index,0,i);var x=Object(p.a)({},s,{articleIds:v}),O=Object(p.a)({},r.state,{folders:Object(p.a)({},r.state.folders,Object(u.a)({},x.id,x))});r.setState(O)}}else{var j=Array.from(r.state.folderOrder);j.splice(a.index,1),j.splice(n.index,0,i);var k=Object(p.a)({},r.state,{folderOrder:j});r.setState(k)}},r.state={articles:q.articles,folders:q.folders,folderOrder:q.folderOrder,nextArticleId:0,searchResults:[],firstResultVisible:!1,lastResultVisible:!1},r.getWikiArticles=r.getWikiArticles.bind(Object(m.a)(r)),r.populateSearchResults=r.populateSearchResults.bind(Object(m.a)(r)),r.deleteArticle=r.deleteArticle.bind(Object(m.a)(r)),r}return Object(v.a)(t,e),Object(h.a)(t,[{key:"getWikiArticles",value:function(){var e=Object(d.a)(c.a.mark(function e(t){var r,n=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],""===t){e.next=4;break}return e.next=4,fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=".concat(t,"&limit=35")).then(function(e){return e.json()}).then(function(e){for(var t=[],r=function(r){n.setState(function(e){return{nextArticleId:e.nextArticleId+1}},function(){t.push({id:"article-".concat(n.state.nextArticleId),content:e[1][r],link:e[3][r]})})},a=0;a<e[1].length;a++)r(a);return t}).then(function(e){return r=e}).catch(function(e){return console.log(e)});case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"populateSearchResults",value:function(){var e=Object(d.a)(c.a.mark(function e(t,r){var n,a,i,o,s=this,l=arguments;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(l.length>2&&void 0!==l[2])||l[2],a={},i={id:"folder-1",title:"",articleIds:[]},o=[],!n){e.next=10;break}return e.next=7,this.getWikiArticles(t);case 7:o=e.sent,e.next=11;break;case 10:o=this.state.searchResults;case 11:this.setState({searchResults:o},function(){var e=5*r;e>=o.length&&(e=o.length);var t=e-5;t<0&&(t=0);for(var n=t;n<e;n++)a[o[n].id]={id:o[n].id,content:o[n].content,link:o[n].link},i.articleIds.push(o[n].id);var l=Object(p.a)({},s.state,{articles:Object(p.a)({},s.state.articles,a),folders:Object(p.a)({},s.state.folders,{"folder-1":i})});s.setState(l,function(){if(o[0]){var e=-1!==s.state.folders["folder-1"].articleIds.indexOf(o[0].id),t=-1!==s.state.folders["folder-1"].articleIds.indexOf(o[o.length-1].id);s.setState({firstResultVisible:e}),s.setState({lastResultVisible:t})}})});case 12:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteArticle",value:function(e){var t=this.state.folders,r=0;for(var n in t)-1!==t[n].articleIds.indexOf(e)&&(r=n);for(var a=Object(s.a)(this.state.searchResults),i=0;i<a.length;i++)a[i].id===e&&a.splice(i,1);this.setState({searchResults:a});var o={};for(var l in this.state.articles)l!==e&&(o[l]=this.state.articles[l]);var c=this.state.folders[r],d=Object(s.a)(c.articleIds);d.splice(d.indexOf(e),1);var f={id:c.id,title:c.title,articleIds:d},h=Object(p.a)({},this.state,{articles:o,folders:Object(p.a)({},this.state.folders,Object(u.a)({},r,f))});this.setState(h)}},{key:"render",value:function(){var e=this;return a.a.createElement(j.a,{onDragEnd:this.onDragEnd},a.a.createElement(j.c,{droppableId:"all-folders",direction:"horizontal",type:"folder"},function(t){return a.a.createElement(L,Object.assign({},t.droppableProps,{ref:t.innerRef,className:"row"}),e.state.folderOrder.map(function(t,r){var n=e.state.folders[t],i=n.articleIds.map(function(t){return e.state.articles[t]});return a.a.createElement(_,{className:"col",key:n.id,folder:n,articles:i,index:r,populateSearchResults:e.populateSearchResults,deleteArticle:e.deleteArticle,hidePrevButton:e.state.firstResultVisible,hideNextButton:e.state.lastResultVisible})}),t.placeholder)}))}}]),t}(a.a.Component);var X=function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row text-center mt-4"},a.a.createElement("div",{className:"col"},a.a.createElement("h2",null,"Wikipedia Article Manager"))),a.a.createElement("div",{className:"row mt-2"},a.a.createElement("div",{className:"col"},a.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,r){e.exports=r(102)},61:function(e,t,r){}},[[54,1,2]]]);
//# sourceMappingURL=main.a3dc60a5.chunk.js.map