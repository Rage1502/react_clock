(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=(n(12),n(0));function d(){return(new Date).toUTCString().slice(-12,-4)}var h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:d()},t.timerId=null,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:d()}),console.info("".concat(t.state.today))}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.name,n=this.props.name;e!==n&&console.debug("Renamed from ".concat(e," to ").concat(n))}},{key:"componentWillUnmount",value:function(){this.timerId&&window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(s.Component);function m(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=null,t.handleLeftClick=function(){t.setState({hasClock:!0})},t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:m()})}),3300),document.addEventListener("click",this.handleLeftClick),document.addEventListener("contextmenu",this.handleRightClick)}},{key:"componentWillUnmount",value:function(){this.timerId&&window.clearInterval(this.timerId),document.removeEventListener("click",this.handleLeftClick),document.removeEventListener("contextmenu",this.handleRightClick)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(h,{name:n})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b1670444.chunk.js.map