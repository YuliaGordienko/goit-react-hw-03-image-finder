(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGallery:"ImageGalleryItem_ImageGallery__1ZwQ6",ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2OtAK",ImageGalleryItemimage:"ImageGalleryItem_ImageGalleryItemimage__2bWfp"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__t2__J",Modal:"Modal_Modal__18qkQ"}},14:function(e,t,a){e.exports={buttonLoad:"Button_buttonLoad__3ggf1"}},20:function(e,t,a){},21:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(20),a(3)),i=a(4),s=a(6),u=a(5),h=a(7),b=(a(21),a(8)),d=a.n(b),m=a(1),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),e.setState({value:""})):Object(h.b)("start search")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:d.a.Searchbar,children:Object(m.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:d.a.SearchFormbutton,children:Object(m.jsx)("span",{className:d.a.SearchFormbuttonlabel,children:"Search"})}),Object(m.jsx)("input",{onChange:this.handleChange,className:d.a.SearchForminput,value:this.state.value,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),g=a(13),j=(a(23),a(10)),f=a.n(j),v=a(12),O=a.n(v),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggle()},e.handleBackdrop=function(t){t.currentTarget===t.target&&e.props.toggle()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(m.jsx)("div",{className:O.a.Overlay,onClick:this.handleBackdrop,children:Object(m.jsx)("div",{className:O.a.Modal,children:Object(m.jsx)("img",{src:this.props.url,alt:""})})})}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,largeImageURL:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClickImg=function(t){e.setState({largeImageURL:t.target.dataset.url}),e.toggleModal()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:f.a.ImageGallery,children:this.props.array.map((function(t){return Object(m.jsx)("li",{className:f.a.ImageGalleryItem,onClick:e.handleClickImg,children:Object(m.jsx)("img",{src:t.webformatURL,alt:t.tag,className:f.a.ImageGalleryItemimage,"data-url":t.largeImageURL})},t.id)}))}),this.state.showModal&&Object(m.jsx)(y,{url:this.state.largeImageURL,toggle:this.toggleModal})]})}}]),a}(n.Component),_=a(14),x=a.n(_),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("button",{onClick:this.props.handleClick,type:"button",className:x.a.buttonLoad,children:"Load more"})}}]),a}(n.Component),k=a(15),w=a.n(k),C=(a(44),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(w.a,{type:"Hearts",color:"#00BFFF",height:80,width:80,timeout:3e3})})}}]),a}(n.Component)),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:null,loading:!1,page:1,showModal:e.props.showModal},e.handleClick=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.value,r=this.props.value;n!==r&&(this.setState({value:null}),this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(r,"&page=").concat(this.state.page,"&key=22502202-f847ab35a707d5e3f99b1114d&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){0===e.hits.length&&Object(h.b)("Try to search something else"),a.setState({value:e.hits})})).finally((function(){return a.setState({loading:!1})}))),t.page!==this.state.page&&(this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(r,"&page=").concat(this.state.page,"&key=22502202-f847ab35a707d5e3f99b1114d&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){a.setState((function(t){return{value:[].concat(Object(g.a)(t.value),Object(g.a)(e.hits))}}))})).finally((function(){a.setState({loading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[this.state.loading&&Object(m.jsx)(C,{}),this.state.value&&Object(m.jsx)(S,{array:this.state.value}),this.state.value&&this.state.value.length>0&&Object(m.jsx)(I,{handleClick:this.handleClick})]})}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleSubmit=function(t){e.setState({value:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p,{onSubmit:this.handleSubmit}),Object(m.jsx)(F,{value:this.state.value}),Object(m.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),L()},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__LMZIl",SearchForm:"Searchbar_SearchForm__158BJ",SearchFormbutton:"Searchbar_SearchFormbutton__3r_J7",SearchFormbuttonlabel:"Searchbar_SearchFormbuttonlabel__FMAKu",SearchForminput:"Searchbar_SearchForminput__1dXeV"}}},[[45,1,2]]]);
//# sourceMappingURL=main.32230e90.chunk.js.map