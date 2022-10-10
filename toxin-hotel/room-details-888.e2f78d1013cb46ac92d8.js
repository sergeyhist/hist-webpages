/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/air-datepicker/air-datepicker.js":
/*!*******************************************************!*\
  !*** ./node_modules/air-datepicker/air-datepicker.js ***!
  \*******************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(){"use strict";var e={d:function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return K}});var i={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},s={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:i.days,minView:i.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?t.querySelector(e):e}function n(){let{tagName:e="div",className:t="",innerHtml:i="",id:s="",attrs:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.createElement(e);if(t&&n.classList.add(...t.split(" ")),s&&(n.id=s),i&&(n.innerHTML=i),a)for(let e in a)n.setAttribute(e,a[e]);return n}function r(e,t){for(let[i,s]of Object.entries(t))e.setAttribute(i,s);return e}function h(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){let t=e.getHours(),i=t%12==0?12:t%12;return{year:e.getFullYear(),month:e.getMonth(),fullMonth:e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,date:e.getDate(),fullDate:e.getDate()<10?"0"+e.getDate():e.getDate(),day:e.getDay(),hours:t,fullHours:l(t),hours12:i,fullHours12:l(i),minutes:e.getMinutes(),fullMinutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}function l(e){return e<10?"0"+e:e}function d(e){let t=10*Math.floor(e.getFullYear()/10);return[t,t+9]}function c(){let e=[];for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return i.forEach((t=>{if("object"==typeof t)for(let i in t)t[i]&&e.push(i);else t&&e.push(t)})),e.join(" ")}function u(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.days;if(!e||!t)return!1;let a=o(e),n=o(t),r={[i.days]:a.date===n.date&&a.month===n.month&&a.year===n.year,[i.months]:a.month===n.month&&a.year===n.year,[i.years]:a.year===n.year};return r[s]}function p(e,t,i){let s=g(e,!1).getTime(),a=g(t,!1).getTime();return i?s>=a:s>a}function m(e,t){return!p(e,t,!0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=new Date(e.getTime());return"boolean"!=typeof t||t||D(i),i}function D(e){return e.setHours(0,0,0,0),e}function v(e,t,i){e.length?e.forEach((e=>{e.addEventListener(t,i)})):e.addEventListener(t,i)}function y(e,t){return!(!e||e===document||e instanceof DocumentFragment)&&(e.matches(t)?e:y(e.parentNode,t))}function f(e,t,i){return e>i?i:e<t?t:e}function w(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return i.filter((e=>e)).forEach((t=>{for(let[i,s]of Object.entries(t))if(void 0!==s&&"[object Object]"===s.toString()){let t=void 0!==e[i]?e[i].toString():void 0,a=s.toString(),n=Array.isArray(s)?[]:{};e[i]=e[i]?t!==a?n:e[i]:n,w(e[i],s)}else e[i]=s})),e}function b(e){let t=e;return e instanceof Date||(t=new Date(e)),isNaN(t.getTime())&&(console.log('Unable to convert value "'.concat(e,'" to Date object')),t=!1),t}function k(e){let t="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+t+")("+e+")($|<|"+t+")","g")}function C(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class _{constructor(){let{type:e,date:t,dp:i,opts:s,body:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C(this,"focus",(()=>{this.$cell.classList.add("-focus-"),this.focused=!0})),C(this,"removeFocus",(()=>{this.$cell.classList.remove("-focus-"),this.focused=!1})),C(this,"select",(()=>{this.$cell.classList.add("-selected-"),this.selected=!0})),C(this,"removeSelect",(()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1})),C(this,"onChangeSelectedDate",(()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus())})),C(this,"onChangeFocusDate",(e=>{if(!e)return void(this.focused&&this.removeFocus());let t=u(e,this.date,this.type);t?this.focus():!t&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus()})),C(this,"render",(()=>(this.$cell.innerHTML=this._getHtml(),this.$cell.adpCell=this,this.$cell))),this.type=e,this.singleType=this.type.slice(0,-1),this.date=t,this.dp=i,this.opts=s,this.body=a,this.customData=!1,this.init()}init(){let{range:e,onRenderCell:t}=this.opts;t&&(this.customData=t({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),e&&this._handleRangeStatus())}_bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeFocusDate,this.onChangeFocusDate)}unbindDatepickerEvents(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeFocusDate,this.onChangeFocusDate)}_createElement(){let{year:e,month:t,date:i}=o(this.date);this.$cell=n({className:this._getClassName(),attrs:{"data-year":e,"data-month":t,"data-date":i}})}_getClassName(){var e,t;let s=new Date,{selectOtherMonths:a,selectOtherYears:n}=this.opts,{minDate:r,maxDate:h}=this.dp,{day:l}=o(this.date),d=this._isOutOfMinMaxRange(),p=null===(e=this.customData)||void 0===e?void 0:e.disabled,m=c("air-datepicker-cell","-".concat(this.singleType,"-"),{"-current-":u(s,this.date,this.type),"-min-date-":r&&u(r,this.date,this.type),"-max-date-":h&&u(h,this.date,this.type)}),g="";switch(this.type){case i.days:g=c({"-weekend-":this.dp.isWeekend(l),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!a||d||p});break;case i.months:g=c({"-disabled-":d||p});break;case i.years:g=c({"-other-decade-":this.isOtherDecade,"-disabled-":d||this.isOtherDecade&&!n||p})}return c(m,g,null===(t=this.customData)||void 0===t?void 0:t.classes)}_getHtml(){var e;let{year:t,month:s,date:a}=o(this.date),{showOtherMonths:n,showOtherYears:r}=this.opts;if(null!==(e=this.customData)&&void 0!==e&&e.html)return this.customData.html;switch(this.type){case i.days:return!n&&this.isOtherMonth?"":a;case i.months:return this.dp.locale[this.opts.monthsField][s];case i.years:return!r&&this.isOtherDecade?"":t}}_isOutOfMinMaxRange(){let{minDate:e,maxDate:t}=this.dp,{type:s,date:a}=this,{month:n,year:r,date:h}=o(a),l=s===i.days,d=s===i.years,c=!!e&&new Date(r,d?e.getMonth():n,l?h:e.getDate()),u=!!t&&new Date(r,d?t.getMonth():n,l?h:t.getDate());return e&&t?m(c,e)||p(u,t):e?m(c,e):t?p(u,t):void 0}destroy(){this.unbindDatepickerEvents()}_handleRangeStatus(){let{rangeDateFrom:e,rangeDateTo:t}=this.dp,i=c({"-in-range-":e&&t&&(s=this.date,a=e,n=t,p(s,a)&&m(s,n)),"-range-from-":e&&u(this.date,e,this.type),"-range-to-":t&&u(this.date,t,this.type)});var s,a,n;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),i&&this.$cell.classList.add(...i.split(" "))}_handleSelectedStatus(){let e=this.dp._checkIfDateIsSelected(this.date,this.type);e?this.select():!e&&this.selected&&this.removeSelect()}_handleInitialFocusStatus(){u(this.dp.focusDate,this.date,this.type)&&this.focus()}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}}function M(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let $={[i.days]:'<div class="air-datepicker-body--day-names"></div>'+'<div class="air-datepicker-body--cells -'.concat(i.days,'-"></div>'),[i.months]:'<div class="air-datepicker-body--cells -'.concat(i.months,'-"></div>'),[i.years]:'<div class="air-datepicker-body--cells -'.concat(i.years,'-"></div>')};class S{constructor(e){let{dp:t,type:s,opts:a}=e;M(this,"handleClick",(e=>{let t=e.target.adpCell;if(t.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let i=this.dp._checkIfDateIsSelected(t.date,t.type);i?this.dp._handleAlreadySelectedDates(i,t.date):this.dp.selectDate(t.date)})),M(this,"handleDayNameClick",(e=>{let t=e.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(t),datepicker:this.dp})})),M(this,"onChangeCurrentView",(e=>{e!==this.type?this.hide():(this.show(),this.render())})),M(this,"onMouseOverCell",(e=>{let t=y(e.target,".air-datepicker-cell");this.dp.setFocusDate(!!t&&t.adpCell.date)})),M(this,"onMouseOutCell",(()=>{this.dp.setFocusDate(!1)})),M(this,"onClickBody",(e=>{let{onClickDayName:t}=this.opts,i=e.target;i.closest(".air-datepicker-cell")&&this.handleClick(e),t&&i.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(e)})),M(this,"onMouseDown",(e=>{this.pressed=!0;let t=y(e.target,".air-datepicker-cell"),i=t&&t.adpCell;u(i.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),u(i.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0)})),M(this,"onMouseMove",(e=>{if(!this.pressed||!this.dp.isMinViewReached)return;e.preventDefault();let t=y(e.target,".air-datepicker-cell"),i=t&&t.adpCell,{selectedDates:s,rangeDateTo:a,rangeDateFrom:n}=this.dp;if(!i||i.isDisabled)return;let{date:r}=i;if(2===s.length){if(this.rangeFromFocused&&!p(r,a)){let{hours:e,minutes:t}=o(n);r.setHours(e),r.setMinutes(t),this.dp.rangeDateFrom=r,this.dp.replaceDate(n,r)}if(this.rangeToFocused&&!m(r,n)){let{hours:e,minutes:t}=o(a);r.setHours(e),r.setMinutes(t),this.dp.rangeDateTo=r,this.dp.replaceDate(a,r)}}})),M(this,"onMouseUp",(()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1})),M(this,"onChangeViewDate",((e,t)=>{if(!this.isVisible)return;let s=d(e),a=d(t);switch(this.dp.currentView){case i.days:if(u(e,t,i.months))return;break;case i.months:if(u(e,t,i.years))return;break;case i.years:if(s[0]===a[0]&&s[1]===a[1])return}this.render()})),M(this,"render",(()=>{this.destroyCells(),this._generateCells(),this.cells.forEach((e=>{this.$cells.appendChild(e.render())}))})),this.dp=t,this.type=s,this.opts=a,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init()}init(){this._buildBaseHtml(),this.type===i.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents()}_bindEvents(){let{range:e,dynamicRange:t}=this.opts;v(this.$el,"mouseover",this.onMouseOverCell),v(this.$el,"mouseout",this.onMouseOutCell),v(this.$el,"click",this.onClickBody),e&&t&&(v(this.$el,"mousedown",this.onMouseDown),v(this.$el,"mousemove",this.onMouseMove),v(window.document,"mouseup",this.onMouseUp))}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView)}_buildBaseHtml(){this.$el=n({className:"air-datepicker-body -".concat(this.type,"-"),innerHtml:$[this.type]}),this.$names=a(".air-datepicker-body--day-names",this.$el),this.$cells=a(".air-datepicker-body--cells",this.$el)}_getDayNamesHtml(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.dp.locale.firstDay,t="",s=this.dp.isWeekend,{onClickDayName:a}=this.opts,n=e,r=0;for(;r<7;){let e=n%7,h=c("air-datepicker-body--day-name",{[i.cssClassWeekend]:s(e),"-clickable-":!!a}),o=this.dp.locale.daysMin[e];t+='<div class="'.concat(h,"\" data-day-index='").concat(e,"'>").concat(o,"</div>"),r++,n++}return t}_getDaysCells(){let{viewDate:e,locale:{firstDay:t}}=this.dp,i=h(e),{year:s,month:a}=o(e),n=new Date(s,a,1),r=new Date(s,a,i),l=n.getDay()-t,d=6-r.getDay()+t;l=l<0?l+7:l,d=d>6?d-7:d;let c=function(e,t){let{year:i,month:s,date:a}=o(e);return new Date(i,s,a-t)}(n,l),u=i+l+d,p=c.getDate(),{year:m,month:g}=o(c),D=0;for(;D<u;){let e=new Date(m,g,p+D);this._generateCell(e),D++}}_generateCell(e){let{type:t,dp:i,opts:s}=this,a=new _({type:t,dp:i,opts:s,date:e,body:this});return this.cells.push(a),a}_generateDayCells(){this._getDaysCells()}_generateMonthCells(){let{year:e}=this.dp.parsedViewDate,t=0;for(;t<12;)this.cells.push(this._generateCell(new Date(e,t))),t++}_generateYearCells(){let e=d(this.dp.viewDate),t=e[0]-1,i=e[1]+1,s=t;for(;s<=i;)this.cells.push(this._generateCell(new Date(s,0))),s++}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml()}_generateCells(){switch(this.type){case i.days:this._generateDayCells();break;case i.months:this._generateMonthCells();break;case i.years:this._generateYearCells()}}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-")}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-")}destroyCells(){this.cells.forEach((e=>e.destroy())),this.cells=[],this.$cells.innerHTML=""}destroy(){this.destroyCells(),this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView)}}function T(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class F{constructor(e){let{dp:t,opts:i}=e;T(this,"onClickNav",(e=>{let t=y(e.target,".air-datepicker-nav--action");if(!t)return;let i=t.dataset.action;this.dp[i]()})),T(this,"onChangeViewDate",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),T(this,"onChangeCurrentView",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),T(this,"onClickNavTitle",(()=>{this.dp.isFinalView||this.dp.up()})),T(this,"update",(()=>{let{prevHtml:e,nextHtml:t}=this.opts;this.$prev.innerHTML=e,this.$next.innerHTML=t,this._resetNavStatus(),this.render(),this.handleNavStatus()})),T(this,"renderDelay",(()=>{setTimeout(this.render)})),T(this,"render",(()=>{this.$title.innerHTML=this._getTitle(),function(e,t){for(let i in t)t[i]?e.classList.add(i):e.classList.remove(i)}(this.$title,{"-disabled-":this.dp.isFinalView})})),this.dp=t,this.opts=i,this.init()}init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents()}_defineDOM(){this.$title=a(".air-datepicker-nav--title",this.$el),this.$prev=a('[data-action="prev"]',this.$el),this.$next=a('[data-action="next"]',this.$el)}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle)}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(i.eventChangeTime,this.render))}destroy(){this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(i.eventChangeTime,this.render))}_createElement(){this.$el=n({tagName:"nav",className:"air-datepicker-nav"})}_getTitle(){let{dp:e,opts:t}=this,i=t.navTitles[e.currentView];return"function"==typeof i?i(e):e.formatDate(e.viewDate,i)}handleNavStatus(){let{disableNavWhenOutOfRange:e}=this.opts,{minDate:t,maxDate:s}=this.dp;if(!t&&!s||!e)return;let{year:a,month:n}=this.dp.parsedViewDate,r=!!t&&o(t),h=!!s&&o(s);switch(this.dp.currentView){case i.days:t&&r.month>=n&&r.year>=a&&this._disableNav("prev"),s&&h.month<=n&&h.year<=a&&this._disableNav("next");break;case i.months:t&&r.year>=a&&this._disableNav("prev"),s&&h.year<=a&&this._disableNav("next");break;case i.years:{let e=d(this.dp.viewDate);t&&r.year>=e[0]&&this._disableNav("prev"),s&&h.year<=e[1]&&this._disableNav("next");break}}}_disableNav(e){a('[data-action="'+e+'"]',this.$el).classList.add("-disabled-")}_resetNavStatus(){!function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];e.length?e.forEach((e=>{e.classList.remove(...i)})):e.classList.remove(...i)}(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-")}_buildBaseHtml(){let{prevHtml:e,nextHtml:t}=this.opts;this.$el.innerHTML='<div class="air-datepicker-nav--action" data-action="prev">'.concat(e,"</div>")+'<div class="air-datepicker-nav--title"></div>'+'<div class="air-datepicker-nav--action" data-action="next">'.concat(t,"</div>")}get isNavIsFunction(){let{navTitles:e}=this.opts;return Object.keys(e).find((t=>"function"==typeof e[t]))}}var V={today:{content:e=>e.locale.today,onClick:e=>e.setViewDate(new Date)},clear:{content:e=>e.locale.clear,onClick:e=>e.clear()}};class x{constructor(e){let{dp:t,opts:i}=e;this.dp=t,this.opts=i,this.init()}init(){this.createElement(),this.render()}createElement(){this.$el=n({className:"air-datepicker-buttons"})}destroy(){this.$el.parentNode.removeChild(this.$el)}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:e}=this.opts;Array.isArray(e)||(e=[e]),e.forEach((e=>{let t=e;"string"==typeof e&&V[e]&&(t=V[e]);let i=this.createButton(t);t.onClick&&this.attachEventToButton(i,t.onClick),this.$el.appendChild(i)}))}attachEventToButton(e,t){e.addEventListener("click",(()=>{t(this.dp)}))}createButton(e){let{content:t,className:i,tagName:s="button",attrs:a={}}=e,r="function"==typeof t?t(this.dp):t;return n({tagName:s,innerHtml:"<span tabindex='-1'>".concat(r,"</span>"),className:c("air-datepicker-button",i),attrs:a})}render(){this.generateButtons()}}function H(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class L{constructor(){let{opts:e,dp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};H(this,"toggleTimepickerIsActive",(e=>{this.dp.timepickerIsActive=e})),H(this,"onChangeSelectedDate",(e=>{let{date:t,updateTime:i=!1}=e;t&&(this.setMinMaxTime(t),this.setCurrentTime(!!i&&t),this.addTimeToDate(t))})),H(this,"onChangeLastSelectedDate",(e=>{e&&(this.setTime(e),this.render())})),H(this,"onChangeInputRange",(e=>{let t=e.target;this[t.getAttribute("name")]=t.value,this.updateText(),this.dp.trigger(i.eventChangeTime,{hours:this.hours,minutes:this.minutes})})),H(this,"onMouseEnterLeave",(e=>{let t=e.target.getAttribute("name"),i=this.$minutesText;"hours"===t&&(i=this.$hoursText),i.classList.toggle("-focus-")})),H(this,"onFocus",(()=>{this.toggleTimepickerIsActive(!0)})),H(this,"onBlur",(()=>{this.toggleTimepickerIsActive(!1)})),this.opts=e,this.dp=t;let{timeFormat:s}=this.dp.locale;s&&(s.match(k("h"))||s.match(k("hh")))&&(this.ampm=!0),this.init()}init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents()}bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate)}bindDOMEvents(){let e="input";navigator.userAgent.match(/trident/gi)&&(e="change"),v(this.$ranges,e,this.onChangeInputRange),v(this.$ranges,"mouseenter",this.onMouseEnterLeave),v(this.$ranges,"mouseleave",this.onMouseEnterLeave),v(this.$ranges,"focus",this.onFocus),v(this.$ranges,"mousedown",this.onFocus),v(this.$ranges,"blur",this.onBlur)}createElement(){this.$el=n({className:c("air-datepicker-time",{"-am-pm-":this.dp.ampm})})}destroy(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el)}buildHtml(){let{ampm:e,hours:t,displayHours:i,minutes:s,minHours:a,minMinutes:n,maxHours:r,maxMinutes:h,dayPeriod:o,opts:{hoursStep:d,minutesStep:c}}=this;this.$el.innerHTML='<div class="air-datepicker-time--current">'+'   <span class="air-datepicker-time--current-hours">'.concat(l(i),"</span>")+'   <span class="air-datepicker-time--current-colon">:</span>'+'   <span class="air-datepicker-time--current-minutes">'.concat(l(s),"</span>")+"   ".concat(e?"<span class='air-datepicker-time--current-ampm'>".concat(o,"</span>"):"")+'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">'+'      <input type="range" name="hours" value="'.concat(t,'" min="').concat(a,'" max="').concat(r,'" step="').concat(d,'"/>')+'   </div>   <div class="air-datepicker-time--row">'+'      <input type="range" name="minutes" value="'.concat(s,'" min="').concat(n,'" max="').concat(h,'" step="').concat(c,'"/>')+"   </div></div>"}defineDOM(){let e=e=>a(e,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=e('[name="hours"]'),this.$minutes=e('[name="minutes"]'),this.$hoursText=e(".air-datepicker-time--current-hours"),this.$minutesText=e(".air-datepicker-time--current-minutes"),this.$ampm=e(".air-datepicker-time--current-ampm")}setTime(e){this.setMinMaxTime(e),this.setCurrentTime(e)}addTimeToDate(e){e&&(e.setHours(this.hours),e.setMinutes(this.minutes))}setMinMaxTime(e){if(this.setMinMaxTimeFromOptions(),e){let{minDate:t,maxDate:i}=this.dp;t&&u(e,t)&&this.setMinTimeFromMinDate(t),i&&u(e,i)&&this.setMaxTimeFromMaxDate(i)}}setCurrentTime(e){let{hours:t,minutes:i}=e?o(e):this;this.hours=f(t,this.minHours,this.maxHours),this.minutes=f(i,this.minMinutes,this.maxMinutes)}setMinMaxTimeFromOptions(){let{minHours:e,minMinutes:t,maxHours:i,maxMinutes:s}=this.opts;this.minHours=f(e,0,23),this.minMinutes=f(t,0,59),this.maxHours=f(i,0,23),this.maxMinutes=f(s,0,59)}setMinTimeFromMinDate(e){let{lastSelectedDate:t}=this.dp;this.minHours=e.getHours(),t&&t.getHours()>e.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=e.getMinutes()}setMaxTimeFromMaxDate(e){let{lastSelectedDate:t}=this.dp;this.maxHours=e.getHours(),t&&t.getHours()<e.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=e.getMinutes()}getDayPeriod(e,t){let i=e,s=Number(e);e instanceof Date&&(i=o(e),s=Number(i.hours));let a="am";if(t||this.ampm){switch(!0){case 12===s:case s>11:a="pm"}s=s%12==0?12:s%12}return{hours:s,dayPeriod:a}}updateSliders(){r(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,r(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes}updateText(){this.$hoursText.innerHTML=l(this.displayHours),this.$minutesText.innerHTML=l(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod)}set hours(e){this._hours=e;let{hours:t,dayPeriod:i}=this.getDayPeriod(e);this.displayHours=t,this.dayPeriod=i}get hours(){return this._hours}render(){this.updateSliders(),this.updateText()}}function O(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class A{constructor(e){let{dp:t,opts:i}=e;O(this,"pressedKeys",new Set),O(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],e=>e.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],e=>e.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],e=>e.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],e=>e.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],e=>e.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],e=>e.year-=10],[["Control","Shift","ArrowUp"],(e,t)=>t.up()]])),O(this,"handleHotKey",(e=>{let t=this.hotKeys.get(e),i=o(this.getInitialFocusDate());t(i,this.dp);let{year:s,month:a,date:n}=i,r=h(new Date(s,a));r<n&&(n=r);let l=this.dp.getClampedDate(new Date(s,a,n));this.dp.setFocusDate(l,{viewDateTransition:!0})})),O(this,"isHotKeyPressed",(()=>{let e=!1,t=this.pressedKeys.size,i=e=>this.pressedKeys.has(e);for(let[s]of this.hotKeys){if(e)break;if(Array.isArray(s[0]))s.forEach((a=>{e||t!==a.length||(e=a.every(i)&&s)}));else{if(t!==s.length)continue;e=s.every(i)&&s}}return e})),O(this,"isArrow",(e=>e>=37&&e<=40)),O(this,"onKeyDown",(e=>{let{key:t,which:i}=e,{dp:s,dp:{focusDate:a},opts:n}=this;this.registerKey(t);let r=this.isHotKeyPressed();if(r)return e.preventDefault(),void this.handleHotKey(r);if(this.isArrow(i))return e.preventDefault(),void this.focusNextCell(t);if("Enter"===t){if(s.currentView!==n.minView)return void s.down();if(a){let e=s._checkIfDateIsSelected(a);return void(e?s._handleAlreadySelectedDates(e,a):s.selectDate(a))}}"Escape"===t&&this.dp.hide()})),O(this,"onKeyUp",(e=>{this.removeKey(e.key)})),this.dp=t,this.opts=i,this.init()}init(){this.bindKeyboardEvents()}bindKeyboardEvents(){let{$el:e}=this.dp;e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp)}destroy(){let{$el:e}=this.dp;e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null}getInitialFocusDate(){let{focusDate:e,currentView:t,selectedDates:s,parsedViewDate:{year:a,month:n}}=this.dp,r=e||s[s.length-1];if(!r)switch(t){case i.days:r=new Date(a,n,(new Date).getDate());break;case i.months:r=new Date(a,n,1);break;case i.years:r=new Date(a,0,1)}return r}focusNextCell(e){let t=this.getInitialFocusDate(),{currentView:s}=this.dp,{days:a,months:n,years:r}=i,h=o(t),l=h.year,d=h.month,c=h.date;switch(e){case"ArrowLeft":s===a&&(c-=1),s===n&&(d-=1),s===r&&(l-=1);break;case"ArrowUp":s===a&&(c-=7),s===n&&(d-=3),s===r&&(l-=4);break;case"ArrowRight":s===a&&(c+=1),s===n&&(d+=1),s===r&&(l+=1);break;case"ArrowDown":s===a&&(c+=7),s===n&&(d+=3),s===r&&(l+=4)}let u=this.dp.getClampedDate(new Date(l,d,c));this.dp.setFocusDate(u,{viewDateTransition:!0})}registerKey(e){this.pressedKeys.add(e)}removeKey(e){this.pressedKeys.delete(e)}}let E={on(e,t){this.__events||(this.__events={}),this.__events[e]?this.__events[e].push(t):this.__events[e]=[t]},off(e,t){this.__events&&this.__events[e]&&(this.__events[e]=this.__events[e].filter((e=>e!==t)))},removeAllEvents(){this.__events={}},trigger(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.__events&&this.__events[e]&&this.__events[e].forEach((e=>{e(...i)}))}};function N(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let I="",R="",P="",B=!1;class K{constructor(e,t){var r=this;if(N(this,"viewIndexes",[i.days,i.months,i.years]),N(this,"next",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t+1,1));break;case i.months:this.setViewDate(new Date(e+1,t,1));break;case i.years:this.setViewDate(new Date(e+10,0,1))}})),N(this,"prev",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t-1,1));break;case i.months:this.setViewDate(new Date(e-1,t,1));break;case i.years:this.setViewDate(new Date(e-10,0,1))}})),N(this,"_finishHide",(()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker)})),N(this,"setPosition",(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("function"==typeof(e=e||r.opts.position))return void(r.customHide=e({$datepicker:r.$datepicker,$target:r.$el,$pointer:r.$pointer,isViewChange:t,done:r._finishHide}));let i,s,{isMobile:a}=r.opts,n=r.$el.getBoundingClientRect(),h=r.$el.getBoundingClientRect(),o=r.$datepicker.offsetParent,l=r.$el.offsetParent,d=r.$datepicker.getBoundingClientRect(),c=e.split(" "),u=window.scrollY,p=window.scrollX,m=r.opts.offset,g=c[0],D=c[1];if(a)r.$datepicker.style.cssText="left: 50%; top: 50%";else{if(o===l&&o!==document.body&&(h={top:r.$el.offsetTop,left:r.$el.offsetLeft,width:n.width,height:r.$el.offsetHeight},u=0,p=0),o!==l&&o!==document.body){let e=o.getBoundingClientRect();h={top:n.top-e.top,left:n.left-e.left,width:n.width,height:n.height},u=0,p=0}switch(g){case"top":i=h.top-d.height-m;break;case"right":s=h.left+h.width+m;break;case"bottom":i=h.top+h.height+m;break;case"left":s=h.left-d.width-m}switch(D){case"top":i=h.top;break;case"right":s=h.left+h.width-d.width;break;case"bottom":i=h.top+h.height-d.height;break;case"left":s=h.left;break;case"center":/left|right/.test(g)?i=h.top+h.height/2-d.height/2:s=h.left+h.width/2-d.width/2}r.$datepicker.style.cssText="left: ".concat(s+p,"px; top: ").concat(i+u,"px")}})),N(this,"_setInputValue",(()=>{let{opts:e,$altField:t,locale:{dateFormat:i}}=this,{altFieldDateFormat:s,altField:a}=e;a&&t&&(t.value=this._getInputValue(s)),this.$el.value=this._getInputValue(i)})),N(this,"_getInputValue",(e=>{let{selectedDates:t,opts:i}=this,{multipleDates:s,multipleDatesSeparator:a}=i;if(!t.length)return"";let n="function"==typeof e,r=n?e(s?t:t[0]):t.map((t=>this.formatDate(t,e)));return r=n?r:r.join(a),r})),N(this,"_checkIfDateIsSelected",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.days,s=!1;return r.selectedDates.some((i=>{let a=u(e,i,t);return s=a&&i,a})),s})),N(this,"_scheduleCallAfterTransition",(e=>{this._cancelScheduledCall(),e&&e(!1),this._onTransitionEnd=()=>{e&&e(!0)},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0})})),N(this,"_cancelScheduledCall",(()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd)})),N(this,"setViewDate",(e=>{if(!((e=b(e))instanceof Date))return;if(u(e,this.viewDate))return;let t=this.viewDate;this.viewDate=e;let{onChangeViewDate:s}=this.opts;if(s){let{month:e,year:t}=this.parsedViewDate;s({month:e,year:t,decade:this.curDecade})}this.trigger(i.eventChangeViewDate,e,t)})),N(this,"setFocusDate",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!e||(e=b(e))instanceof Date)&&(r.focusDate=e,r.opts.range&&e&&r._handleRangeOnFocus(),r.trigger(i.eventChangeFocusDate,e,t))})),N(this,"setCurrentView",(e=>{if(this.viewIndexes.includes(e)){if(this.currentView=e,this.elIsInput&&this.visible&&this.setPosition(void 0,!0),this.trigger(i.eventChangeCurrentView,e),!this.views[e]){let t=this.views[e]=new S({dp:this,opts:this.opts,type:e});this.shouldUpdateDOM&&this.$content.appendChild(t.$el)}this.opts.onChangeView&&this.opts.onChangeView(e)}})),N(this,"_updateLastSelectedDate",(e=>{this.lastSelectedDate=e,this.trigger(i.eventChangeLastSelectedDate,e)})),N(this,"destroy",(()=>{let{showEvent:e,isMobile:t}=this.opts,i=this.$datepicker.parentNode;i&&i.removeChild(this.$datepicker),this.$el.removeEventListener(e,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),t&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts=null,this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=null,this.rangeDateFrom=null,this.rangeDateTo=null})),N(this,"update",(e=>{let t=w({},this.opts);w(this.opts,e);let{timepicker:s,buttons:a,range:n,selectedDates:r,isMobile:h}=this.opts,o=this.visible||this.treatAsInline;this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this._handleLocale(),!t.selectedDates&&r&&this.selectDate(r),e.view&&this.setCurrentView(e.view),this._setInputValue(),t.range&&!n?(this.rangeDateTo=!1,this.rangeDateFrom=!1):!t.range&&n&&this.selectedDates.length&&(this.rangeDateFrom=this.selectedDates[0],this.rangeDateTo=this.selectedDates[1]),t.timepicker&&!s?(o&&this.timepicker.destroy(),this.timepicker=!1,this.$timepicker.parentNode.removeChild(this.$timepicker)):!t.timepicker&&s&&this._addTimepicker(),!t.buttons&&a?this._addButtons():t.buttons&&!a?(this.buttons.destroy(),this.$buttons.parentNode.removeChild(this.$buttons)):o&&t.buttons&&a&&this.buttons.clearHtml().render(),!t.isMobile&&h?(this.treatAsInline||P||this._createMobileOverlay(),this._addMobileAttributes(),this.visible&&this._showMobileOverlay()):t.isMobile&&!h&&(this._removeMobileAttributes(),this.visible&&(P.classList.remove("-active-"),"function"!=typeof this.opts.position&&this.setPosition())),o&&(this.nav.update(),this.views[this.currentView].render(),this.currentView===i.days&&this.views[this.currentView].renderDayNames())})),N(this,"isOtherMonth",(e=>{let{month:t}=o(e);return t!==this.parsedViewDate.month})),N(this,"isOtherYear",(e=>{let{year:t}=o(e);return t!==this.parsedViewDate.year})),N(this,"isOtherDecade",(e=>{let{year:t}=o(e),[i,s]=d(this.viewDate);return t<i||t>s})),N(this,"_onChangeSelectedDate",(e=>{let{silent:t}=e;setTimeout((()=>{this._setInputValue(),this.opts.onSelect&&!t&&this._triggerOnSelect()}))})),N(this,"_onChangeFocusedDate",(function(e){let{viewDateTransition:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;let i=!1;t&&(i=r.isOtherMonth(e)||r.isOtherYear(e)||r.isOtherDecade(e)),i&&r.setViewDate(e)})),N(this,"_onChangeTime",(e=>{let{hours:t,minutes:i}=e,s=new Date,{lastSelectedDate:a,opts:{onSelect:n}}=this,r=a;a||(r=s);let h=this.getCell(r,this.currentViewSingular),o=h&&h.adpCell;o&&o.isDisabled||(r.setHours(t),r.setMinutes(i),a?(this._setInputValue(),n&&this._triggerOnSelect()):this.selectDate(r))})),N(this,"_onFocus",(e=>{this.visible||this.show()})),N(this,"_onBlur",(e=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide()})),N(this,"_onMouseDown",(e=>{this.inFocus=!0})),N(this,"_onMouseUp",(e=>{this.inFocus=!1,this.$el.focus()})),N(this,"_onResize",(()=>{this.visible&&"function"!=typeof this.opts.position&&this.setPosition()})),N(this,"_onClickOverlay",(()=>{this.visible&&this.hide()})),N(this,"isWeekend",(e=>this.opts.weekends.includes(e))),N(this,"getClampedDate",(e=>{let{minDate:t,maxDate:i}=this,s=e;return i&&p(e,i)?s=i:t&&m(e,t)&&(s=t),s})),this.$el=a(e),!this.$el)return;this.$datepicker=n({className:"air-datepicker"}),this.opts=w({},s,t),this.$customContainer=!!this.opts.container&&a(this.opts.container),this.$altField=a(this.opts.altField||!1),I||(I=a("body"));let{view:h,startDate:l}=this.opts;l||(this.opts.startDate=new Date),"INPUT"===this.$el.nodeName&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=b(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=h,this.selectedDates=[],this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init()}init(){let{opts:e,treatAsInline:t,opts:{inline:i,isMobile:s,selectedDates:a,keyboardNav:r,onlyTimepicker:h}}=this;var o;B||i||!this.elIsInput||(B=!0,R=n({className:o=K.defaultContainerId,id:o}),I.appendChild(R)),!s||P||t||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(i||this._bindEvents(),r&&!h&&(this.keyboardNav=new A({dp:this,opts:e}))),a&&this.selectDate(a,{silent:!0}),this.opts.visible&&!t&&this.show(),s&&!t&&this.$el.setAttribute("readonly",!0),t&&this._createComponents()}_createMobileOverlay(){P=n({className:"air-datepicker-overlay"}),R.appendChild(P)}_createComponents(){let{opts:e,treatAsInline:t,opts:{inline:i,buttons:s,timepicker:a,position:n,classes:r,onlyTimepicker:h,isMobile:o}}=this;this._buildBaseHtml(),this.elIsInput&&(i||this._setPositionClasses(n)),!i&&this.elIsInput||this.$datepicker.classList.add("-inline-"),r&&this.$datepicker.classList.add(...r.split(" ")),h&&this.$datepicker.classList.add("-only-timepicker-"),o&&!t&&this._addMobileAttributes(),this.views[this.currentView]=new S({dp:this,type:this.currentView,opts:e}),this.nav=new F({dp:this,opts:e}),a&&this._addTimepicker(),s&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el)}_destroyComponents(){for(let e in this.views)this.views[e].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy()}_addMobileAttributes(){P.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0)}_removeMobileAttributes(){P.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||""===this.initialReadonly||this.$el.removeAttribute("readonly")}_createMinMaxDates(){let{minDate:e,maxDate:t}=this.opts;this.minDate=!!e&&b(e),this.maxDate=!!t&&b(t)}_addTimepicker(){this.$timepicker=n({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new L({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el)}_addButtons(){this.$buttons=n({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new x({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el)}_bindSubEvents(){this.on(i.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(i.eventChangeFocusDate,this._onChangeFocusedDate),this.on(i.eventChangeTime,this._onChangeTime)}_buildBaseHtml(){let{inline:e}=this.opts;var t,i;this.elIsInput?e?(t=this.$datepicker,(i=this.$el).parentNode.insertBefore(t,i.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=a(".air-datepicker--content",this.$datepicker),this.$pointer=a(".air-datepicker--pointer",this.$datepicker),this.$nav=a(".air-datepicker--navigation",this.$datepicker)}_handleLocale(){let{locale:e,dateFormat:t,firstDay:i,timepicker:s,onlyTimepicker:a,timeFormat:n,dateTimeSeparator:r}=this.opts;var h;this.locale=(h=e,JSON.parse(JSON.stringify(h))),t&&(this.locale.dateFormat=t),void 0!==n&&""!==n&&(this.locale.timeFormat=n);let{timeFormat:o}=this.locale;if(""!==i&&(this.locale.firstDay=i),s&&"function"!=typeof t){let e=o?r:"";this.locale.dateFormat=[this.locale.dateFormat,o||""].join(e)}a&&(this.locale.dateFormat=this.locale.timeFormat)}_setPositionClasses(e){if("function"==typeof e)return void this.$datepicker.classList.add("-custom-position-");let t=(e=e.split(" "))[0],i=e[1],s="air-datepicker -".concat(t,"-").concat(i,"- -from-").concat(t,"-");this.$datepicker.classList.add(...s.split(" "))}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize)}_limitViewDateByMaxMinDates(){let{viewDate:e,minDate:t,maxDate:i}=this;i&&p(e,i)&&this.setViewDate(i),t&&m(e,t)&&this.setViewDate(t)}formatDate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.viewDate,t=arguments.length>1?arguments[1]:void 0;if(e=b(e),!(e instanceof Date))return;let i=t,s=this.locale,a=o(e),n=d(e),r=K.replacer,h="am";this.opts.timepicker&&this.timepicker&&(h=this.timepicker.getDayPeriod(e).dayPeriod);let l={T:e.getTime(),m:a.minutes,mm:a.fullMinutes,h:a.hours12,hh:a.fullHours12,H:a.hours,HH:a.fullHours,aa:h,AA:h.toUpperCase(),E:s.daysShort[a.day],EEEE:s.days[a.day],d:a.date,dd:a.fullDate,M:a.month+1,MM:a.fullMonth,MMM:s.monthsShort[a.month],MMMM:s.months[a.month],yy:a.year.toString().slice(-2),yyyy:a.year,yyyy1:n[0],yyyy2:n[1]};for(let[e,t]of Object.entries(l))i=r(i,k(e),t);return i}down(e){this._handleUpDownActions(e,"down")}up(e){this._handleUpDownActions(e,"up")}selectDate(e){let t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currentView:a,parsedViewDate:n,selectedDates:r}=this,{updateTime:h}=s,{moveToOtherMonthsOnSelect:o,moveToOtherYearsOnSelect:l,multipleDates:d,range:c,autoClose:u}=this.opts,m=r.length;if(Array.isArray(e))return e.forEach((e=>{this.selectDate(e,s)})),new Promise((e=>{setTimeout(e)}));if((e=b(e))instanceof Date){if(a===i.days&&e.getMonth()!==n.month&&o&&(t=new Date(e.getFullYear(),e.getMonth(),1)),a===i.years&&e.getFullYear()!==n.year&&l&&(t=new Date(e.getFullYear(),0,1)),t&&this.setViewDate(t),d&&!c){if(m===d)return;this._checkIfDateIsSelected(e)||r.push(e)}else if(c)switch(m){case 1:r.push(e),this.rangeDateTo||(this.rangeDateTo=e),p(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=e),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[e],this.rangeDateFrom=e,this.rangeDateTo="";break;default:this.selectedDates=[e],this.rangeDateFrom=e}else this.selectedDates=[e];return this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,silent:null==s?void 0:s.silent,date:e,updateTime:h}),this._updateLastSelectedDate(e),u&&!this.timepickerIsActive&&this.visible&&(d||c?c&&1===m&&this.hide():this.hide()),new Promise((e=>{setTimeout(e)}))}}unselectDate(e){let t=this.selectedDates,s=this;if((e=b(e))instanceof Date)return t.some(((a,n)=>{if(u(a,e))return t.splice(n,1),s.selectedDates.length?s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length-1]):(s.rangeDateFrom="",s.rangeDateTo="",s._updateLastSelectedDate(!1)),this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,date:e}),!0}))}replaceDate(e,t){let s=this.selectedDates.find((t=>u(t,e,this.currentView))),a=this.selectedDates.indexOf(s);a<0||u(this.selectedDates[a],t,this.currentView)||(this.selectedDates[a]=t,this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,date:t,updateTime:!0}),this._updateLastSelectedDate(t))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,silent:e.silent}),new Promise((e=>{setTimeout(e)}))}show(){let{onShow:e,isMobile:t}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,e&&this._scheduleCallAfterTransition(e),t&&this._showMobileOverlay()}hide(){let{onHide:e,isMobile:t}=this.opts,i=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition((t=>{!this.customHide&&(t&&i||!t&&!i)&&this._finishHide(),e&&e(t)})),t&&P.classList.remove("-active-")}_triggerOnSelect(){let e=[],t=[],{selectedDates:i,locale:s,opts:{onSelect:a,multipleDates:n,range:r}}=this,h=n||r,o="function"==typeof s.dateFormat;i.length&&(e=i.map(g),t=o?n?s.dateFormat(e):e.map((e=>s.dateFormat(e))):e.map((e=>this.formatDate(e,s.dateFormat)))),a({date:h?e:e[0],formattedDate:h?t:t[0],datepicker:this})}_handleAlreadySelectedDates(e,t){let{range:i,toggleSelected:s}=this.opts;i?s?this.unselectDate(t):2!==this.selectedDates.length&&this.selectDate(t):s&&this.unselectDate(t),s||this._updateLastSelectedDate(e)}_handleUpDownActions(e,t){if(!((e=b(e||this.focusDate||this.viewDate))instanceof Date))return;let i="up"===t?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),i<0&&(i=0),this.setViewDate(new Date(e.getFullYear(),e.getMonth(),1)),this.setCurrentView(this.viewIndexes[i])}_handleRangeOnFocus(){1===this.selectedDates.length&&(p(this.selectedDates[0],this.focusDate)?(this.rangeDateTo=this.selectedDates[0],this.rangeDateFrom=this.focusDate):(this.rangeDateTo=this.focusDate,this.rangeDateFrom=this.selectedDates[0]))}getCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.day;if(!((e=b(e))instanceof Date))return;let{year:s,month:a,date:n}=o(e),r='[data-year="'.concat(s,'"]'),h='[data-month="'.concat(a,'"]'),l='[data-date="'.concat(n,'"]'),d={[i.day]:"".concat(r).concat(h).concat(l),[i.month]:"".concat(r).concat(h),[i.year]:"".concat(r)};return this.views[this.currentView].$el.querySelector(d[t])}_showMobileOverlay(){P.classList.add("-active-")}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e,t)=>parseFloat(t)+e),0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return o(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return d(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===i.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===i.days}get $container(){return this.$customContainer||R}static replacer(e,t,i){return e.replace(t,(function(e,t,s,a){return t+i+a}))}}var j;return N(K,"defaults",s),N(K,"version","3.2.0"),N(K,"defaultContainerId","air-datepicker-global-container"),j=K.prototype,Object.assign(j,E),t.default}()}));

/***/ }),

/***/ "./node_modules/air-datepicker/index.es.js":
/*!*************************************************!*\
  !*** ./node_modules/air-datepicker/index.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./air-datepicker */ "./node_modules/air-datepicker/air-datepicker.js");
/* harmony import */ var _air_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_air_datepicker__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_air_datepicker__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js":
/*!**********************************************************************!*\
  !*** ./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ _createClass),
/* harmony export */   "a": () => (/* binding */ _classCallCheck),
/* harmony export */   "b": () => (/* binding */ _objectWithoutProperties),
/* harmony export */   "c": () => (/* binding */ _typeof),
/* harmony export */   "d": () => (/* binding */ _inherits),
/* harmony export */   "e": () => (/* binding */ _createSuper),
/* harmony export */   "f": () => (/* binding */ _slicedToArray),
/* harmony export */   "g": () => (/* binding */ _get),
/* harmony export */   "h": () => (/* binding */ _getPrototypeOf),
/* harmony export */   "i": () => (/* binding */ _set)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLContenteditableMaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");





var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLMaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");




/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(HTMLMaskElement, _MaskElement);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(HTMLMaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputMask)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../masked/range.js */ "./node_modules/imask/esm/masked/range.js");




















var _excluded = ["mask"];
/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, InputMask);

    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__["default"](el) : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__["default"](el);
    this.masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

      if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].Masked) && this.masked.constructor === (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__.maskedClass)(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      var _this$masked;

      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function
      /* ev */
    _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts, _excluded);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.objectIncludes)(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT));
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



/**
  Generic element API to use with mask
  @interface
*/
var MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskElement);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");




/** Provides details of changing input */

var ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE; // align right if delete at right

      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
      this.oldSelection.end === this.oldSelection.start ? _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT;
    }
  }]);

  return ActionDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContinuousTailDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/** Provides details of continuous extracted tail */
var ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.value.length) return '';
      var shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IMask)
/* harmony export */ });
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIRECTION": () => (/* binding */ DIRECTION),
/* harmony export */   "escapeRegExp": () => (/* binding */ escapeRegExp),
/* harmony export */   "forceDirection": () => (/* binding */ forceDirection),
/* harmony export */   "indexInDirection": () => (/* binding */ indexInDirection),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "normalizePrepare": () => (/* binding */ normalizePrepare),
/* harmony export */   "objectIncludes": () => (/* binding */ objectIncludes),
/* harmony export */   "posInDirection": () => (/* binding */ posInDirection)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");



/** Checks if value is string */

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
function normalizePrepare(prep) {
  return Array.isArray(prep) ? prep : [prep, new _change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]()];
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.c)(a) === 'object' && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.c)(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      // $FlowFixMe ... ???
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLContenteditableMaskElement": () => (/* reexport safe */ _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "HTMLMaskElement": () => (/* reexport safe */ _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "InputMask": () => (/* reexport safe */ _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "MaskElement": () => (/* reexport safe */ _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Masked": () => (/* reexport safe */ _masked_base_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "MaskedDate": () => (/* reexport safe */ _masked_date_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "MaskedDynamic": () => (/* reexport safe */ _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "MaskedEnum": () => (/* reexport safe */ _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "MaskedFunction": () => (/* reexport safe */ _masked_function_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "MaskedNumber": () => (/* reexport safe */ _masked_number_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "MaskedPattern": () => (/* reexport safe */ _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "MaskedRange": () => (/* reexport safe */ _masked_range_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "MaskedRegExp": () => (/* reexport safe */ _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PIPE_TYPE": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.PIPE_TYPE),
/* harmony export */   "createMask": () => (/* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "createPipe": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.createPipe),
/* harmony export */   "default": () => (/* reexport safe */ _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "pipe": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.pipe)
/* harmony export */ });
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");



























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch (e) {}


/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Masked)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






/** Supported mask type */

/** Provides common masking stuff */
var Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */
  function Masked(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return; // $FlowFixMe

      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** */

  }, {
    key: "isFilled",
    get: function get() {
      return this.isComplete;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this._value += ch;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;
      var details;

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.normalizePrepare)(this.doPrepare(ch, flags));

      var _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      details = details.aggregate(this._appendCharRaw(ch, flags));

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            checkTail.shift();
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
          } // if ok, rollback state after tail


          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends optional eager placeholder at end */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(str)) throw new Error('value should be string');
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var checkTail = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail)) : tail;
      if (flags && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var oldRawValue;

      if (this.eager) {
        removeDirection = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.forceDirection)(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }

      var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE : removeDirection);
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos));

      if (this.eager && removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_LEFT) {
          var valLength;

          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }

      return details.aggregate(this.append(inserted, {
        input: true
      }, tail));
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return this.mask === mask;
    }
  }]);

  return Masked;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDate)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");















/** Date mask */

var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedDate, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedDate);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, this.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "typedValue", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask === Date || (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "maskEquals", this).call(this, mask);
    }
  }]);

  return MaskedDate;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    if (!date) return '';
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1900,
      to: 9999
    }
  };
};

_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDynamic)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");








var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedDynamic, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedDynamic);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
     @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      var _this$currentMask2;

      (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      var _this$currentMask3;

      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      var _this$currentMask4;

      return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      if (this.currentMask) {
        var _this$currentMask5;

        details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask6;

      return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask7, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask8, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "eager",
    get: function get() {
      return this.currentMask ? this.currentMask.eager : (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "eager", this);
    },
    set: function set(eager) {
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
        var _mask$mi;

        return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
      });
    }
  }]);

  return MaskedDynamic;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedEnum)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Pattern which validates enum values */

var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedEnum, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedEnum);

  function MaskedEnum() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMask),
/* harmony export */   "maskedClass": () => (/* binding */ maskedClass)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");





/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp; // $FlowFixMe

  if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask; // $FlowFixMe

  if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor; // $FlowFixMe

  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedFunction)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by custom Function */

var MaskedFunction = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedFunction, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedFunction);

  function MaskedFunction() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedNumber)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedNumber, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedNumber);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp)(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp)(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var _get2;

      ch = ch.replace(this._mapToRadixRegExp, this.radix);

      var noSepCh = this._removeThousandsSeparators(ch);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.normalizePrepare)((_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
          _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2),
          prepCh = _normalizePrepare2[0],
          details = _normalizePrepare2[1];

      if (ch && !noSepCh) details.skip = true;
      return [prepCh, details];
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedPattern)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");













var _excluded = ["_blocks"];

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedPattern, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedPattern);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = (0,_factory_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                eager: _this.eager,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];
        var isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          isInput = false;
        }

        var def = isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          parent: this,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          char: char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFilled;
      });
    }
  }, {
    key: "isFixed",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFixed;
      });
    }
  }, {
    key: "isOptional",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isOptional;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var _this$_mapPosToBlock;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        var d = this._blocks[bi]._appendEager();

        if (!d.inserted) break;
        details.aggregate(d);
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _flags$_beforeTailSta;

        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
        }));

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
      if (!this._blocks.length) return 0;
      var cursor = new _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, cursorPos);

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE) {
        // -------------------------------------------------
        // NONE should only go out from fixed to the right!
        // -------------------------------------------------
        if (cursor.pushRightBeforeInput()) return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput()) return cursor.pos;
        return this.value.length;
      } // FORCE is only about a|* otherwise is 0


      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) {
        // try to break fast when *|a
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
          cursor.popState();
        } // forward flow


        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled(); // backward flow

        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
        }

        if (cursor.ok) return cursor.pos;
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) return 0;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos; // cursor.popState();
        // if (
        //   cursor.pushRightBeforeInput() &&
        //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
        //   (!this.lazy || this.extractInput())
        // ) return cursor.pos;

        return 0;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT) {
        // forward flow
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled()) return cursor.pos;
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return this.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"];
_core_holder_js__WEBPACK_IMPORTED_MODULE_9__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChunksTailDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["chunks"];

var ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tailChunk)) tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern)) {
        var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.toString());
        return tail.appendTo(masked);
      }

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.unshift(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.chunks.length) return '';
      var ci = this.chunks.length - 1;

      while (0 <= ci) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shift();

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          --ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/cursor.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/cursor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternCursor)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");




var PatternCursor = /*#__PURE__*/function () {
  function PatternCursor(masked, pos) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternCursor);

    this.masked = masked;
    this._log = [];

    var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
    {
      index: 0,
      offset: 0
    } : // last
    {
      index: this.masked._blocks.length,
      offset: 0
    }),
        offset = _ref.offset,
        index = _ref.index;

    this.offset = offset;
    this.index = index;
    this.ok = false;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternCursor, [{
    key: "block",
    get: function get() {
      return this.masked._blocks[this.index];
    }
  }, {
    key: "pos",
    get: function get() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    },
    set: function set(s) {
      Object.assign(this, s);
    }
  }, {
    key: "pushState",
    value: function pushState() {
      this._log.push(this.state);
    }
  }, {
    key: "popState",
    value: function popState() {
      var s = this._log.pop();

      this.state = s;
      return s;
    }
  }, {
    key: "bindBlock",
    value: function bindBlock() {
      if (this.block) return;

      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }

      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.value.length;
      }
    }
  }, {
    key: "_pushLeft",
    value: function _pushLeft(fn) {
      this.pushState();

      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
        var _this$block;

        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "_pushRight",
    value: function _pushRight(fn) {
      this.pushState();

      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "pushLeftBeforeFilled",
    value: function pushLeftBeforeFilled() {
      var _this = this;

      return this._pushLeft(function () {
        if (_this.block.isFixed || !_this.block.value) return;
        _this.offset = _this.block.nearestInputPos(_this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT);
        if (_this.offset !== 0) return true;
      });
    }
  }, {
    key: "pushLeftBeforeInput",
    value: function pushLeftBeforeInput() {
      var _this2 = this;

      // cases:
      // filled input: 00|
      // optional empty input: 00[]|
      // nested block: XX<[]>|
      return this._pushLeft(function () {
        if (_this2.block.isFixed) return;
        _this2.offset = _this2.block.nearestInputPos(_this2.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushLeftBeforeRequired",
    value: function pushLeftBeforeRequired() {
      var _this3 = this;

      return this._pushLeft(function () {
        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
        _this3.offset = _this3.block.nearestInputPos(_this3.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeFilled",
    value: function pushRightBeforeFilled() {
      var _this4 = this;

      return this._pushRight(function () {
        if (_this4.block.isFixed || !_this4.block.value) return;
        _this4.offset = _this4.block.nearestInputPos(_this4.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT);
        if (_this4.offset !== _this4.block.value.length) return true;
      });
    }
  }, {
    key: "pushRightBeforeInput",
    value: function pushRightBeforeInput() {
      var _this5 = this;

      return this._pushRight(function () {
        if (_this5.block.isFixed) return; // const o = this.offset;

        _this5.offset = _this5.block.nearestInputPos(_this5.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
        // aa|X
        // aa<X|[]>X_    - this will not work
        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

        return true;
      });
    }
  }, {
    key: "pushRightBeforeRequired",
    value: function pushRightBeforeRequired() {
      var _this6 = this;

      return this._pushRight(function () {
        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

        _this6.offset = _this6.block.nearestInputPos(_this6.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE);
        return true;
      });
    }
  }]);

  return PatternCursor;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternFixedDefinition)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");





var PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT:
          return minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return Boolean(this._value);
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      var appended = this.char === ch;
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return this._appendChar(this.char);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str[0], flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_INPUT_DEFINITIONS": () => (/* binding */ DEFAULT_INPUT_DEFINITIONS),
/* harmony export */   "default": () => (/* binding */ PatternInputDefinition)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts, _excluded);

    this.masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this.isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(ch, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      // TODO probably should be done via _appendChar
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.isFilled || this.isOptional) return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }]);

  return PatternInputDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PIPE_TYPE": () => (/* binding */ PIPE_TYPE),
/* harmony export */   "createPipe": () => (/* binding */ createPipe),
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");






/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRange)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Pattern which accepts ranges */

var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedRange, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedRange);

  function MaskedRange() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    } // TODO str is a single char everytime

    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details;

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalizePrepare)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

      var _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      if (!this.autofix || !ch) return ch;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var nextVal = this.value + ch;
      if (nextVal.length > this.maxLength) return '';

      var _this$boundaries = this.boundaries(nextVal),
          _this$boundaries2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$boundaries, 2),
          minstr = _this$boundaries2[0],
          maxstr = _this$boundaries2[1];

      if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

      if (Number(minstr) > this.to) {
        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
          return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }

        return toStr[nextVal.length - 1];
      }

      return ch;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRegExp)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by RegExp */

var MaskedRegExp = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedRegExp, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedRegExp);

  function MaskedRegExp() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRegExp = MaskedRegExp;




/***/ }),

/***/ "./node_modules/air-datepicker/air-datepicker.css":
/*!********************************************************!*\
  !*** ./node_modules/air-datepicker/air-datepicker.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/card.blocks/payment/payment.scss":
/*!**********************************************!*\
  !*** ./src/card.blocks/payment/payment.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/bullet/bullet.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/bullet/bullet.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/button/button.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/button/button.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/calendar/calendar.scss":
/*!**************************************************!*\
  !*** ./src/common.blocks/calendar/calendar.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/comment/comment.scss":
/*!************************************************!*\
  !*** ./src/common.blocks/comment/comment.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/dropdown/dropdown.scss":
/*!**************************************************!*\
  !*** ./src/common.blocks/dropdown/dropdown.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/footer/footer.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/header/header.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/header/header.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/input/input.scss":
/*!********************************************!*\
  !*** ./src/common.blocks/input/input.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/like/like.scss":
/*!******************************************!*\
  !*** ./src/common.blocks/like/like.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/list/list.scss":
/*!******************************************!*\
  !*** ./src/common.blocks/list/list.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/logo/logo.scss":
/*!******************************************!*\
  !*** ./src/common.blocks/logo/logo.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/poll/poll.scss":
/*!******************************************!*\
  !*** ./src/common.blocks/poll/poll.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/social/social.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/social/social.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/room-details-888/room-details-888.scss":
/*!**********************************************************!*\
  !*** ./src/pages/room-details-888/room-details-888.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/card.blocks/payment/payment.js":
/*!********************************************!*\
  !*** ./src/card.blocks/payment/payment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.scss */ "./src/card.blocks/payment/payment.scss");
/* harmony import */ var common_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/dropdown/dropdown.js */ "./src/common.blocks/dropdown/dropdown.js");
/* harmony import */ var common_calendar_calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/calendar/calendar.js */ "./src/common.blocks/calendar/calendar.js");
/* harmony import */ var common_button_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/button/button.js */ "./src/common.blocks/button/button.js");





let paymentElements = document.querySelectorAll('.payment');

for (let element of paymentElements) {
  let paymentPrice = element.querySelector('.payment__price');
  let paymentDatepicker = element.querySelector('.calendar__datepicker');
  let paymentCost = element.querySelector('.payment__cost');
  let paymentResult = element.querySelector('.payment__result');
  let paymentFee = element.querySelector('.payment__fee');
  let paymentAdditionalFee = element.querySelector('.payment__additional-fee');

  paymentDatepicker.onchange = () => {
    paymentCost.querySelector('.payment__text').textContent = paymentPrice.querySelectorAll('p')[0].textContent+'x '+paymentDatepicker.dataset.selectedDays+' суток';
    paymentCost.querySelector('.payment__count').textContent = (+paymentPrice.textContent.split('₽')[0] * paymentDatepicker.dataset.selectedDays)+'₽';
    paymentResult.querySelector('.payment__count').textContent = +paymentCost.querySelector('.payment__count').textContent.split('₽')[0] - (+paymentFee.querySelector('.payment__count').textContent.split('₽')[0] + +paymentAdditionalFee.querySelector('.payment__count').textContent.split('₽')[0]) + '₽';
  };

  paymentDatepicker.dispatchEvent(new Event('change'));
};


/***/ }),

/***/ "./src/common.blocks/bullet/bullet.js":
/*!********************************************!*\
  !*** ./src/common.blocks/bullet/bullet.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bullet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet.scss */ "./src/common.blocks/bullet/bullet.scss");



/***/ }),

/***/ "./src/common.blocks/button/button.js":
/*!********************************************!*\
  !*** ./src/common.blocks/button/button.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/common.blocks/button/button.scss");



/***/ }),

/***/ "./src/common.blocks/calendar/calendar.js":
/*!************************************************!*\
  !*** ./src/common.blocks/calendar/calendar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var air_datepicker_air_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker/air-datepicker.css */ "./node_modules/air-datepicker/air-datepicker.css");
/* harmony import */ var _calendar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.scss */ "./src/common.blocks/calendar/calendar.scss");




let calendarElements = document.querySelectorAll('.calendar');

function addZero(n) {return n < 10 ? '0'+n : n};

for (let element of calendarElements) {
  let calendarInputs = element.querySelectorAll('.calendar__input');
  let inputFields = element.querySelectorAll('input');
  let calendarDatepicker = element.querySelector('.calendar__datepicker');

  let confirmButton = {
    content: 'применить',
    className: 'calendar__button-confirm',
    onClick: (dp) => {
      if (inputFields.length > 1) {
        for (let i of [0,1] ) {
          if (dp.selectedDates[i]) {
            inputFields[i].value = addZero(dp.selectedDates[i].getDate())+'.'+addZero(+dp.selectedDates[i].getMonth()+1)+'.'+dp.selectedDates[i].getFullYear();
          };
        };
        if (dp.selectedDates) {
          dp.$datepicker.parentElement.dataset.selectedDays = (dp.selectedDates[1]?.getTime() - dp.selectedDates[0]?.getTime()) / (1000 * 3600 * 24);
        };
        calendarDatepicker.dispatchEvent(new Event('change'));
      } else {
        inputFields[0].value = dp.formatDate(dp.selectedDates[0], 'dd MMM')+' - '+dp.formatDate(dp.selectedDates[1], 'dd MMM');
      };
    }
  };

  let clearButton = {
    content: 'очистить',
    className: 'calendar__button-clear',
    onClick: (dp) => {
      dp.clear();
      for (let input of inputFields) {
        input.value = '';
      };
    }
  };

  let calendar = new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"](calendarDatepicker, {
    navTitles: {days: 'MMMM yyyy'},
    range: true,
    buttons: [clearButton, confirmButton]
  });


  for (let input of calendarInputs) {
    let switchVisibility = (datepicker) => {
      if (!datepicker.classList.contains('calendar__datepicker_visible')) {
        datepicker.classList.add('calendar__datepicker_visible');
      } else {
        datepicker.classList.remove('calendar__datepicker_visible');
      };
    };

    input.onclick = () => {
      switchVisibility(calendarDatepicker);  
    };

    input.onkeydown = (e) => {
      e.key == 'Enter' && switchVisibility(calendarDatepicker);
    };

    
  };

  let inputsArray = Array.from(calendarInputs);
  let hideCalendar = (e) => {
    if (calendarDatepicker.classList.contains('calendar__datepicker_visible')) {
      if (!calendarDatepicker.contains(e.target) && !inputsArray.some((input) => input.contains(e.target)))  {
        calendarDatepicker.classList.remove('calendar__datepicker_visible');
      };
    };
  }

  document.body.addEventListener('mousedown', (e) => {
    hideCalendar(e);
  });

  document.body.addEventListener('keydown', (e) => {
    e.key == 'Enter' && hideCalendar(e);
  });

  let navArrows = calendar.$datepicker.querySelectorAll('.air-datepicker-nav--action');
  
  for (let arrow of navArrows) {
    let arrowBack = document.createElement('button');
    let arrowForward = document.createElement('button');

    arrowBack.classList.add('material-icons');
    arrowBack.innerHTML = 'arrow_back';
    arrowForward.classList.add('material-icons');
    arrowForward.innerHTML = 'arrow_forward';

    switch (arrow.dataset.action) {
      case 'prev': arrow.replaceChildren(arrowBack); break;
      case 'next': arrow.replaceChildren(arrowForward);
    };
  };

  calendar.selectDate(element.dataset.dates?.split('-'));
  calendar.setViewDate(element.dataset.dates?.split('-')[1]);
  element.dataset.dates?.split('-')[1] == '' && calendar.setViewDate(element.dataset.dates?.split('-')[0]);
  element.dataset.dates && calendar.$datepicker.querySelector('.calendar__button-confirm').dispatchEvent(new Event('click'));
};


/***/ }),

/***/ "./src/common.blocks/comment/comment.js":
/*!**********************************************!*\
  !*** ./src/common.blocks/comment/comment.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.scss */ "./src/common.blocks/comment/comment.scss");
/* harmony import */ var common_like_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/like/like.js */ "./src/common.blocks/like/like.js");




/***/ }),

/***/ "./src/common.blocks/dropdown/dropdown.js":
/*!************************************************!*\
  !*** ./src/common.blocks/dropdown/dropdown.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.scss */ "./src/common.blocks/dropdown/dropdown.scss");


let dropdownElements = document.querySelectorAll('.dropdown');

for (let element of dropdownElements) {
  let dropdownShell = element.querySelector('.dropdown__shell');
  let dropdownInside = dropdownShell.querySelector('.dropdown__inside');
  let dropdownSubmenu = element.querySelector('.dropdown__submenu');
  let countNumbers = dropdownSubmenu.querySelectorAll('.dropdown__count');
  let clearButton = dropdownSubmenu.querySelector('.dropdown__button-clear');
  let confirmButton = dropdownSubmenu.querySelector('.dropdown__button-confirm');
  
  if (dropdownInside.dataset.dropdownType == 'guests') {
    clearButton.onclick = () => {
      for (let number of countNumbers) {
        number.textContent = 0;
        number.dispatchEvent(new Event('change'));
        dropdownInside.value = '';
        clearButton.classList.remove('dropdown__button_visible');
      };
    };

    confirmButton.onclick = () => {
      dropdownInside.value = dropdownInside.dataset.sum;
      dropdownInside.value = dropdownInside.value.charAt(0).toUpperCase()+dropdownInside.value.slice(1);
      if (dropdownSubmenu.classList.contains('dropdown__submenu_visible') && !dropdownSubmenu.classList.contains('dropdown__submenu_solid')) {
        dropdownSubmenu.classList.remove('dropdown__submenu_visible');
        dropdownSubmenu.classList.remove('dropdown__submenu_solid');
        setTimeout(() => {
          dropdownShell.classList.remove('dropdown__shell_focused');
          dropdownShell.classList.remove('dropdown__shell_solid');
        }, 100);
      }
    };
  };

  const switchVisibility = () => {
    if (!dropdownSubmenu.classList.contains('dropdown__submenu_visible') && !dropdownSubmenu.classList.contains('dropdown__submenu_solid')) {
      dropdownShell.classList.add('dropdown__shell_focused');
      dropdownSubmenu.classList.add('dropdown__submenu_visible');
    } else {
      dropdownSubmenu.classList.remove('dropdown__submenu_visible');
      dropdownSubmenu.classList.remove('dropdown__submenu_solid');
      setTimeout(() => {
        dropdownShell.classList.remove('dropdown__shell_focused');
        dropdownShell.classList.remove('dropdown__shell_solid');
      }, 100);
    };
  };

  dropdownShell.onclick = () => {
    switchVisibility();
  };

  dropdownShell.onkeydown = (e) => {
    e.key == 'Enter' && switchVisibility();
  }

  document.body.addEventListener('mousedown', (event) => {
    if (dropdownSubmenu.classList.contains('dropdown__submenu_visible')) {
      if (!dropdownSubmenu.contains(event.target) && !dropdownShell.contains(event.target)) {
        dropdownSubmenu.classList.remove('dropdown__submenu_visible');
        setTimeout(() => {
          dropdownShell.classList.remove('dropdown__shell_focused');
        }, 100);
      };
    };
  });

  for (let number of countNumbers) {
    number.nextSibling.onclick = () => {
      number.textContent++;
      number.dispatchEvent(new Event('change'));
    };
    number.previousSibling.onclick = () => {
      number.textContent > 0 && number.textContent--;
      number.dispatchEvent(new Event('change'));
    };

    if (number.textContent == 0) {number.previousSibling.disabled = true};
    number.onchange = () => {
      if (clearButton) {
        countNumbers.forEach((num) => {
          if (+num.textContent > 0) {
            !clearButton.classList.contains('dropdown__button_visible') && clearButton.classList.add('dropdown__button_visible');
          };
        });
      };
      number.textContent > 0 ? number.previousSibling.disabled = false : number.previousSibling.disabled = true;
      let cases = [2,0,1,1,1,2];
      let textCounts = [];
      let dropdownCounters = dropdownSubmenu.querySelectorAll('.dropdown__counter');
      let counterObjects = {};

      for (let counter of dropdownCounters) {
        if (counterObjects.hasOwnProperty(counter.parentElement.dataset.variants.split(',')[0])) {
          counterObjects[counter.parentElement.dataset.variants.split(',')[0]].count = +counterObjects[counter.parentElement.dataset.variants.split(',')[0]].count + +counter.querySelector('.dropdown__count').textContent; 
        } else {
          counterObjects[counter.parentElement.dataset.variants.split(',')[0]] = {
            variants: counter.parentElement.dataset.variants.split(','),
            count: counter.querySelector('.dropdown__count').textContent
          };
        };
      };
      for (let key of Object.keys(counterObjects)) {
        counterObjects[key].count > 0 ? textCounts.push(counterObjects[key].count+' '+counterObjects[key].variants[(counterObjects[key].count % 100 > 4 && counterObjects[key].count %100 < 20) ? 2 : cases[counterObjects[key].count % 10 < 5 ? counterObjects[key].count % 10 : 5]]) : element.dataset.dropdownType != 'guests' ? textCounts.push('нет '+counterObjects[key].variants[2]) : '';
      }

      if (element.dataset.dropdownType != 'guests') {
        dropdownInside.value = textCounts.join(', ');
        dropdownInside.value = dropdownInside.value.charAt(0).toUpperCase()+dropdownInside.value.slice(1);
      } else {
        dropdownInside.dataset.sum = textCounts.join(', '); 
      };
    };
    number.dispatchEvent(new Event('change'));
    confirmButton?.dispatchEvent(new Event('click'));
  };
};


/***/ }),

/***/ "./src/common.blocks/footer/footer.js":
/*!********************************************!*\
  !*** ./src/common.blocks/footer/footer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/common.blocks/footer/footer.scss");
/* harmony import */ var common_input_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/input/input.js */ "./src/common.blocks/input/input.js");
/* harmony import */ var common_social_social_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/social/social.js */ "./src/common.blocks/social/social.js");
/* harmony import */ var common_logo_logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/logo/logo.js */ "./src/common.blocks/logo/logo.js");






/***/ }),

/***/ "./src/common.blocks/header/header.js":
/*!********************************************!*\
  !*** ./src/common.blocks/header/header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/common.blocks/header/header.scss");
/* harmony import */ var common_button_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/button/button.js */ "./src/common.blocks/button/button.js");
/* harmony import */ var common_logo_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/logo/logo.js */ "./src/common.blocks/logo/logo.js");




let headerElements = document.querySelectorAll('.header');

for (let element of headerElements) {
  let mobileMenu = element.querySelector('.header__mobile-menu');
  let menu = element.querySelector('.header__menu');
  let arrowMenuLinks = Array.from(element.querySelectorAll('.header__menu-link_arrow'));
  let submenuElements = Array.from(element.querySelectorAll('.header__submenu'));

  let switchMenuVisibility = () => {
    if (!menu.classList.contains('header__menu_visible')) {
      menu.classList.add('header__menu_visible');
    } else {
      menu.classList.remove('header__menu_visible');
    };
  };

  let switchSubmenuVisibility = (i) => {
    if (!submenuElements[i].classList.contains('header__submenu_visible')) {
      
      submenuElements[i].classList.add('header__submenu_visible');
    } else {
      submenuElements[i].classList.remove('header__submenu_visible');
    };
  };

  mobileMenu.onmousedown = () => {
    switchMenuVisibility();
  };

  mobileMenu.onkeydown = (e) => {
    e.key == 'Enter' && switchMenuVisibility();
  };

  document.addEventListener('mousedown', (event) => {
    if (!mobileMenu.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove('header__menu_visible');
    };
  });

  for (let i in arrowMenuLinks) {
    arrowMenuLinks[i].onmousedown = () => {
      switchSubmenuVisibility(i);
    };

    arrowMenuLinks[i].onkeydown = (e) => {
      e.key == 'Enter' && switchSubmenuVisibility(i);
    };

    document.body.addEventListener('mousedown', (event) => {
      if (!arrowMenuLinks[i].contains(event.target) && !submenuElements[i].contains(event.target)) {
        submenuElements[i].classList.remove('header__submenu_visible');
      };
    });
  };
};


/***/ }),

/***/ "./src/common.blocks/input/input.js":
/*!******************************************!*\
  !*** ./src/common.blocks/input/input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.scss */ "./src/common.blocks/input/input.scss");



let inputElements = document.querySelectorAll('.input');
let dateMask = (element) => (0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(element, {
  mask: 'ДД.ММ.ГГГГ',
  blocks: {
    ГГГГ: {
      mask: '0000'
    },
    ММ: {
      mask: imask__WEBPACK_IMPORTED_MODULE_0__["default"].MaskedRange,
      from: 1,
      to: 12
    },
    ДД: {
      mask: imask__WEBPACK_IMPORTED_MODULE_0__["default"].MaskedRange,
      from: 1,
      to: 31
    }
  }
});

for (let element of inputElements) {
  let inputShell = element.querySelector('.input__shell');
  let inputInside = inputShell.querySelector('.input__inside');

  switch (inputInside.dataset.mask) {
    case 'date':
      dateMask(inputInside);
      break;
  };
}


/***/ }),

/***/ "./src/common.blocks/like/like.js":
/*!****************************************!*\
  !*** ./src/common.blocks/like/like.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _like_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.scss */ "./src/common.blocks/like/like.scss");


let likeElements = document.querySelectorAll('.like');

for (let element of likeElements) {
  let elementIcon = element.querySelector('.like__icon');
  let elementCounter = element.querySelector('.like__counter');

  if (element.dataset.active == 'true') {
    element.classList.add('like_active');
    elementIcon.classList.add('like__icon_active');
    elementCounter.classList.add('like__counter_active');
    elementIcon.textContent = 'favorite';
  };

  element.onclick = () => {
    if (element.classList.contains('like_active')) {
      element.classList.remove('like_active');
      elementIcon.classList.remove('like__icon_active');
      elementCounter.classList.remove('like__counter_active');
      elementIcon.textContent = 'favorite_border';
      +elementCounter.textContent > 0 ? elementCounter.textContent = +elementCounter.textContent-1 : '';
    } else {
      element.classList.add('like_active');
      elementIcon.classList.add('like__icon_active');
      elementCounter.classList.add('like__counter_active');
      elementIcon.textContent = 'favorite';
      elementCounter.textContent = +elementCounter.textContent+1;
    };
  };
};


/***/ }),

/***/ "./src/common.blocks/list/list.js":
/*!****************************************!*\
  !*** ./src/common.blocks/list/list.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.scss */ "./src/common.blocks/list/list.scss");



/***/ }),

/***/ "./src/common.blocks/logo/logo.js":
/*!****************************************!*\
  !*** ./src/common.blocks/logo/logo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.scss */ "./src/common.blocks/logo/logo.scss");



/***/ }),

/***/ "./src/common.blocks/poll/poll.js":
/*!****************************************!*\
  !*** ./src/common.blocks/poll/poll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _poll_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poll.scss */ "./src/common.blocks/poll/poll.scss");


let pollElements = document.querySelectorAll('.poll');

for (let element of pollElements) {
  let radius = 46;
  let circum = 2 * radius * Math.PI;
  let elementCircles = element.querySelectorAll('circle')

  for (let circle of elementCircles) {
    circle.setAttribute('cx', 50);
    circle.setAttribute('cy', 50);
    circle.setAttribute('r', radius);
  }

  let awesomeElement = element.querySelector('.poll__awesome');
  let goodElement = element.querySelector('.poll__good');
  let fairElement = element.querySelector('.poll__fair');
  let badElement = element.querySelector('.poll__bad');

  let goodBorder = element.querySelector('.poll__good-border');
  let awesomeBorder = element.querySelector('.poll__awesome-border');
  let fairBorder = element.querySelector('.poll__fair-border');
  let badBorder = element.querySelector('.poll__bad-border');

  let pollCounter = element.querySelector('.poll__counter');

  let drawCircle = () => {
    let allCount = +awesomeElement.dataset.count + +goodElement.dataset.count + +fairElement.dataset.count + +badElement.dataset.count;
    let awesomePercent = awesomeElement.dataset.count*100/allCount;
    let goodPercent = goodElement.dataset.count*100/allCount;
    let fairPercent = fairElement.dataset.count*100/allCount;
    let badPercent = badElement ? badElement.dataset.count*100/allCount : 0;

    pollCounter.querySelector('p').textContent = allCount;

    if (goodElement.dataset.count > 0) {
      if (goodElement.style.visibility == 'hidden') {goodElement.style.visibility = 'visible'};
      if (goodElement.dataset.count > 5 && goodBorder.style.visibility == 'hidden')  {goodBorder.style.visibility = 'visible'};
      goodElement.style.strokeDasharray = goodPercent * circum/100 + ' 999';
      goodBorder.style.strokeDasharray = '1 ' + (goodPercent * circum/100 - 2) + ' 1 999';
    } else {
      goodElement.style.visibility = 'hidden';
      goodBorder.style.visibility = 'hidden';
    };

    if (awesomeElement.dataset.count > 0) {
      if (awesomeElement.style.visibility == 'hidden') {awesomeElement.style.visibility = 'visible'};
      if (awesomeElement.dataset.count > 5 && awesomeBorder.style.visibility == 'hidden')  {awesomeBorder.style.visibility = 'visible'};
      awesomeElement.style.strokeDasharray = awesomePercent * circum/100 + ' 999';
      awesomeElement.style.strokeDashoffset = -(goodPercent * circum/100);
      awesomeBorder.style.strokeDashoffset = -(goodPercent * circum/100);
      awesomeBorder.style.strokeDasharray = '1 ' + (awesomePercent * circum/100 - 2) + ' 1 999';
    } else {
      awesomeElement.style.visibility = 'hidden';
      awesomeBorder.style.visibility = 'hidden';
    };

    if (fairElement.dataset.count > 0) {
      if (fairElement.style.visibility == 'hidden') {fairElement.style.visibility = 'visible'};
      if (fairElement.dataset.count > 5 && fairBorder.style.visibility == 'hidden')  {fairBorder.style.visibility = 'visible'};
      fairElement.style.strokeDasharray = fairPercent * circum/100 + ' 999';
      fairElement.style.strokeDashoffset = -(awesomePercent * circum/100) - (goodPercent * circum/100);
      fairBorder.style.strokeDashoffset = -(awesomePercent * circum/100) - (goodPercent * circum/100);
      fairBorder.style.strokeDasharray = '1 ' + (fairPercent * circum/100 - 2) + ' 1 999';
    } else {
      fairElement.style.visibility = 'hidden';
      fairBorder.style.visibility = 'hidden';
    };

    if (badElement.dataset.count > 0) {
      if (badElement.style.visibility == 'hidden') {badElement.style.visibility = 'visible'};
      if (badElement.dataset.count > 5 && badBorder.style.visibility == 'hidden')  {badBorder.style.visibility = 'visible'};
      badElement.style.strokeDasharray = badPercent * circum/100 + ' 999';
      badElement.style.strokeDashoffset = -(awesomePercent * circum/100) - (goodPercent * circum/100) - (fairPercent * circum/100);
      badBorder.style.strokeDashoffset = -(awesomePercent * circum/100) - (goodPercent * circum/100) - (fairPercent * circum/100);
      badBorder.style.strokeDasharray = '1 ' + (badPercent * circum/100 - 2) + ' 1 999';
    } else {
      badElement.style.visibility = 'hidden';
      badBorder.style.visibility = 'hidden';
    };
  };

  drawCircle();

  let pollItems = element.querySelectorAll('.poll__item');

  for (let item of pollItems) {
    let updatePoll = () => {
      switch (item.textContent) {
        case 'Великолепно': +awesomeElement.dataset.count++; break;
        case 'Хорошо': +goodElement.dataset.count++; break;
        case 'Удовлетворительно': +fairElement.dataset.count++; break;
        case 'Разочарован': +badElement.dataset.count++; break;
      };
      drawCircle();
    }

    item.onclick = () => {updatePoll()};
    item.onkeydown = (e) => {e.key == 'Enter' && updatePoll()};
  };
};


/***/ }),

/***/ "./src/common.blocks/social/social.js":
/*!********************************************!*\
  !*** ./src/common.blocks/social/social.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.scss */ "./src/common.blocks/social/social.scss");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************************!*\
  !*** ./src/pages/room-details-888/room-details-888.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_details_888_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-details-888.scss */ "./src/pages/room-details-888/room-details-888.scss");
/* harmony import */ var common_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/header/header.js */ "./src/common.blocks/header/header.js");
/* harmony import */ var common_footer_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/footer/footer.js */ "./src/common.blocks/footer/footer.js");
/* harmony import */ var common_list_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/list/list.js */ "./src/common.blocks/list/list.js");
/* harmony import */ var common_comment_comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/comment/comment.js */ "./src/common.blocks/comment/comment.js");
/* harmony import */ var common_bullet_bullet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/bullet/bullet.js */ "./src/common.blocks/bullet/bullet.js");
/* harmony import */ var common_poll_poll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/poll/poll.js */ "./src/common.blocks/poll/poll.js");
/* harmony import */ var cards_payment_payment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cards/payment/payment.js */ "./src/card.blocks/payment/payment.js");









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIdUI7QUFDUTtBQUNFO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITjtBQUNVO0FBQ0o7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFEMEI7QUFDSjs7QUFFdEI7QUFDQSw0QkFBNEIsaURBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxZQUFZLHlEQUFpQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsWUFBWSx5REFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaENxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlCcUI7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JELHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RCw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JELHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQsb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RCxxREFBcUQ7QUFDckQsZ0VBQWdFO0FBQ2hFLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDQTtBQUNBO0FBQ0o7QUFDTTtBQUNGO0FBQ0o7QUFDSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXItZGF0ZXBpY2tlci9haXItZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyLWRhdGVwaWNrZXIvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvYWN0aW9uLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvaG9sZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2VudW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXItZGF0ZXBpY2tlci9haXItZGF0ZXBpY2tlci5jc3M/MDNhNyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FyZC5ibG9ja3MvcGF5bWVudC9wYXltZW50LnNjc3M/YWYwOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9idWxsZXQvYnVsbGV0LnNjc3M/YzljYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9idXR0b24vYnV0dG9uLnNjc3M/NTg5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9jYWxlbmRhci9jYWxlbmRhci5zY3NzPzYzODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvY29tbWVudC9jb21tZW50LnNjc3M/YmU3MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9kcm9wZG93bi9kcm9wZG93bi5zY3NzP2Y0MTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvZm9vdGVyL2Zvb3Rlci5zY3NzPzliMDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaGVhZGVyL2hlYWRlci5zY3NzPzg5NjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaW5wdXQvaW5wdXQuc2Nzcz84ZmFjIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2xpa2UvbGlrZS5zY3NzPzhiMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvbGlzdC9saXN0LnNjc3M/ZDZjYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9sb2dvL2xvZ28uc2Nzcz8zMmExIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL3BvbGwvcG9sbC5zY3NzP2VjMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3Mvc29jaWFsL3NvY2lhbC5zY3NzP2NjOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jvb20tZGV0YWlscy04ODgvcm9vbS1kZXRhaWxzLTg4OC5zY3NzPzAxNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmQuYmxvY2tzL3BheW1lbnQvcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9idWxsZXQvYnVsbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvY2FsZW5kYXIvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvY29tbWVudC9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9saWtlL2xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvbGlzdC9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2xvZ28vbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9wb2xsL3BvbGwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yb29tLWRldGFpbHMtODg4L3Jvb20tZGV0YWlscy04ODguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5BaXJEYXRlcGlja2VyPXQoKTplLkFpckRhdGVwaWNrZXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXtkOmZ1bmN0aW9uKHQsaSl7Zm9yKHZhciBzIGluIGkpZS5vKGkscykmJiFlLm8odCxzKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscyx7ZW51bWVyYWJsZTohMCxnZXQ6aVtzXX0pfSxvOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfX0sdD17fTtlLmQodCx7ZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiBLfX0pO3ZhciBpPXtkYXlzOlwiZGF5c1wiLG1vbnRoczpcIm1vbnRoc1wiLHllYXJzOlwieWVhcnNcIixkYXk6XCJkYXlcIixtb250aDpcIm1vbnRoXCIseWVhcjpcInllYXJcIixldmVudENoYW5nZVZpZXdEYXRlOlwiY2hhbmdlVmlld0RhdGVcIixldmVudENoYW5nZUN1cnJlbnRWaWV3OlwiY2hhbmdlQ3VycmVudFZpZXdcIixldmVudENoYW5nZUZvY3VzRGF0ZTpcImNoYW5nZUZvY3VzRGF0ZVwiLGV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlOlwiY2hhbmdlU2VsZWN0ZWREYXRlXCIsZXZlbnRDaGFuZ2VUaW1lOlwiY2hhbmdlVGltZVwiLGV2ZW50Q2hhbmdlTGFzdFNlbGVjdGVkRGF0ZTpcImNoYW5nZUxhc3RTZWxlY3RlZERhdGVcIixhY3Rpb25TZWxlY3REYXRlOlwic2VsZWN0RGF0ZVwiLGFjdGlvblVuc2VsZWN0RGF0ZTpcInVuc2VsZWN0RGF0ZVwiLGNzc0NsYXNzV2Vla2VuZDpcIi13ZWVrZW5kLVwifSxzPXtjbGFzc2VzOlwiXCIsaW5saW5lOiExLGxvY2FsZTp7ZGF5czpbXCLQktC+0YHQutGA0LXRgdC10L3RjNC1XCIsXCLQn9C+0L3QtdC00LXQu9GM0L3QuNC6XCIsXCLQktGC0L7RgNC90LjQulwiLFwi0KHRgNC10LTQsFwiLFwi0KfQtdGC0LLQtdGA0LNcIixcItCf0Y/RgtC90LjRhtCwXCIsXCLQodGD0LHQsdC+0YLQsFwiXSxkYXlzU2hvcnQ6W1wi0JLQvtGBXCIsXCLQn9C+0L1cIixcItCS0YLQvlwiLFwi0KHRgNC1XCIsXCLQp9C10YJcIixcItCf0Y/RglwiLFwi0KHRg9CxXCJdLGRheXNNaW46W1wi0JLRgVwiLFwi0J/QvVwiLFwi0JLRglwiLFwi0KHRgFwiLFwi0KfRglwiLFwi0J/RglwiLFwi0KHQsVwiXSxtb250aHM6W1wi0K/QvdCy0LDRgNGMXCIsXCLQpNC10LLRgNCw0LvRjFwiLFwi0JzQsNGA0YJcIixcItCQ0L/RgNC10LvRjFwiLFwi0JzQsNC5XCIsXCLQmNGO0L3RjFwiLFwi0JjRjtC70YxcIixcItCQ0LLQs9GD0YHRglwiLFwi0KHQtdC90YLRj9Cx0YDRjFwiLFwi0J7QutGC0Y/QsdGA0YxcIixcItCd0L7Rj9Cx0YDRjFwiLFwi0JTQtdC60LDQsdGA0YxcIl0sbW9udGhzU2hvcnQ6W1wi0K/QvdCyXCIsXCLQpNC10LJcIixcItCc0LDRgFwiLFwi0JDQv9GAXCIsXCLQnNCw0LlcIixcItCY0Y7QvVwiLFwi0JjRjtC7XCIsXCLQkNCy0LNcIixcItCh0LXQvVwiLFwi0J7QutGCXCIsXCLQndC+0Y9cIixcItCU0LXQulwiXSx0b2RheTpcItCh0LXQs9C+0LTQvdGPXCIsY2xlYXI6XCLQntGH0LjRgdGC0LjRgtGMXCIsZGF0ZUZvcm1hdDpcImRkLk1NLnl5eXlcIix0aW1lRm9ybWF0OlwiSEg6bW1cIixmaXJzdERheToxfSxzdGFydERhdGU6bmV3IERhdGUsZmlyc3REYXk6XCJcIix3ZWVrZW5kczpbNiwwXSxkYXRlRm9ybWF0OlwiXCIsYWx0RmllbGQ6XCJcIixhbHRGaWVsZERhdGVGb3JtYXQ6XCJUXCIsdG9nZ2xlU2VsZWN0ZWQ6ITAsa2V5Ym9hcmROYXY6ITAsc2VsZWN0ZWREYXRlczohMSxjb250YWluZXI6XCJcIixpc01vYmlsZTohMSx2aXNpYmxlOiExLHBvc2l0aW9uOlwiYm90dG9tIGxlZnRcIixvZmZzZXQ6MTIsdmlldzppLmRheXMsbWluVmlldzppLmRheXMsc2hvd090aGVyTW9udGhzOiEwLHNlbGVjdE90aGVyTW9udGhzOiEwLG1vdmVUb090aGVyTW9udGhzT25TZWxlY3Q6ITAsc2hvd090aGVyWWVhcnM6ITAsc2VsZWN0T3RoZXJZZWFyczohMCxtb3ZlVG9PdGhlclllYXJzT25TZWxlY3Q6ITAsbWluRGF0ZTpcIlwiLG1heERhdGU6XCJcIixkaXNhYmxlTmF2V2hlbk91dE9mUmFuZ2U6ITAsbXVsdGlwbGVEYXRlczohMSxtdWx0aXBsZURhdGVzU2VwYXJhdG9yOlwiLCBcIixyYW5nZTohMSxkeW5hbWljUmFuZ2U6ITAsYnV0dG9uczohMSxtb250aHNGaWVsZDpcIm1vbnRoc1Nob3J0XCIsc2hvd0V2ZW50OlwiZm9jdXNcIixhdXRvQ2xvc2U6ITEscHJldkh0bWw6Jzxzdmc+PHBhdGggZD1cIk0gMTcsMTIgbCAtNSw1IGwgNSw1XCI+PC9wYXRoPjwvc3ZnPicsbmV4dEh0bWw6Jzxzdmc+PHBhdGggZD1cIk0gMTQsMTIgbCA1LDUgbCAtNSw1XCI+PC9wYXRoPjwvc3ZnPicsbmF2VGl0bGVzOntkYXlzOlwiTU1NTSwgPGk+eXl5eTwvaT5cIixtb250aHM6XCJ5eXl5XCIseWVhcnM6XCJ5eXl5MSAtIHl5eXkyXCJ9LHRpbWVwaWNrZXI6ITEsb25seVRpbWVwaWNrZXI6ITEsZGF0ZVRpbWVTZXBhcmF0b3I6XCIgXCIsdGltZUZvcm1hdDpcIlwiLG1pbkhvdXJzOjAsbWF4SG91cnM6MjQsbWluTWludXRlczowLG1heE1pbnV0ZXM6NTksaG91cnNTdGVwOjEsbWludXRlc1N0ZXA6MSxvblNlbGVjdDohMSxvbkNoYW5nZVZpZXdEYXRlOiExLG9uQ2hhbmdlVmlldzohMSxvblJlbmRlckNlbGw6ITEsb25TaG93OiExLG9uSGlkZTohMSxvbkNsaWNrRGF5TmFtZTohMX07ZnVuY3Rpb24gYShlKXtsZXQgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06ZG9jdW1lbnQ7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/dC5xdWVyeVNlbGVjdG9yKGUpOmV9ZnVuY3Rpb24gbigpe2xldHt0YWdOYW1lOmU9XCJkaXZcIixjbGFzc05hbWU6dD1cIlwiLGlubmVySHRtbDppPVwiXCIsaWQ6cz1cIlwiLGF0dHJzOmE9e319PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7aWYodCYmbi5jbGFzc0xpc3QuYWRkKC4uLnQuc3BsaXQoXCIgXCIpKSxzJiYobi5pZD1zKSxpJiYobi5pbm5lckhUTUw9aSksYSlmb3IobGV0IGUgaW4gYSluLnNldEF0dHJpYnV0ZShlLGFbZV0pO3JldHVybiBufWZ1bmN0aW9uIHIoZSx0KXtmb3IobGV0W2ksc11vZiBPYmplY3QuZW50cmllcyh0KSllLnNldEF0dHJpYnV0ZShpLHMpO3JldHVybiBlfWZ1bmN0aW9uIGgoZSl7cmV0dXJuIG5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSxlLmdldE1vbnRoKCkrMSwwKS5nZXREYXRlKCl9ZnVuY3Rpb24gbyhlKXtsZXQgdD1lLmdldEhvdXJzKCksaT10JTEyPT0wPzEyOnQlMTI7cmV0dXJue3llYXI6ZS5nZXRGdWxsWWVhcigpLG1vbnRoOmUuZ2V0TW9udGgoKSxmdWxsTW9udGg6ZS5nZXRNb250aCgpKzE8MTA/XCIwXCIrKGUuZ2V0TW9udGgoKSsxKTplLmdldE1vbnRoKCkrMSxkYXRlOmUuZ2V0RGF0ZSgpLGZ1bGxEYXRlOmUuZ2V0RGF0ZSgpPDEwP1wiMFwiK2UuZ2V0RGF0ZSgpOmUuZ2V0RGF0ZSgpLGRheTplLmdldERheSgpLGhvdXJzOnQsZnVsbEhvdXJzOmwodCksaG91cnMxMjppLGZ1bGxIb3VyczEyOmwoaSksbWludXRlczplLmdldE1pbnV0ZXMoKSxmdWxsTWludXRlczplLmdldE1pbnV0ZXMoKTwxMD9cIjBcIitlLmdldE1pbnV0ZXMoKTplLmdldE1pbnV0ZXMoKX19ZnVuY3Rpb24gbChlKXtyZXR1cm4gZTwxMD9cIjBcIitlOmV9ZnVuY3Rpb24gZChlKXtsZXQgdD0xMCpNYXRoLmZsb29yKGUuZ2V0RnVsbFllYXIoKS8xMCk7cmV0dXJuW3QsdCs5XX1mdW5jdGlvbiBjKCl7bGV0IGU9W107Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkodCkscz0wO3M8dDtzKyspaVtzXT1hcmd1bWVudHNbc107cmV0dXJuIGkuZm9yRWFjaCgodD0+e2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KWZvcihsZXQgaSBpbiB0KXRbaV0mJmUucHVzaChpKTtlbHNlIHQmJmUucHVzaCh0KX0pKSxlLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHUoZSx0KXtsZXQgcz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06aS5kYXlzO2lmKCFlfHwhdClyZXR1cm4hMTtsZXQgYT1vKGUpLG49byh0KSxyPXtbaS5kYXlzXTphLmRhdGU9PT1uLmRhdGUmJmEubW9udGg9PT1uLm1vbnRoJiZhLnllYXI9PT1uLnllYXIsW2kubW9udGhzXTphLm1vbnRoPT09bi5tb250aCYmYS55ZWFyPT09bi55ZWFyLFtpLnllYXJzXTphLnllYXI9PT1uLnllYXJ9O3JldHVybiByW3NdfWZ1bmN0aW9uIHAoZSx0LGkpe2xldCBzPWcoZSwhMSkuZ2V0VGltZSgpLGE9Zyh0LCExKS5nZXRUaW1lKCk7cmV0dXJuIGk/cz49YTpzPmF9ZnVuY3Rpb24gbShlLHQpe3JldHVybiFwKGUsdCwhMCl9ZnVuY3Rpb24gZyhlKXtsZXQgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdLGk9bmV3IERhdGUoZS5nZXRUaW1lKCkpO3JldHVyblwiYm9vbGVhblwiIT10eXBlb2YgdHx8dHx8RChpKSxpfWZ1bmN0aW9uIEQoZSl7cmV0dXJuIGUuc2V0SG91cnMoMCwwLDAsMCksZX1mdW5jdGlvbiB2KGUsdCxpKXtlLmxlbmd0aD9lLmZvckVhY2goKGU9PntlLmFkZEV2ZW50TGlzdGVuZXIodCxpKX0pKTplLmFkZEV2ZW50TGlzdGVuZXIodCxpKX1mdW5jdGlvbiB5KGUsdCl7cmV0dXJuISghZXx8ZT09PWRvY3VtZW50fHxlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkmJihlLm1hdGNoZXModCk/ZTp5KGUucGFyZW50Tm9kZSx0KSl9ZnVuY3Rpb24gZihlLHQsaSl7cmV0dXJuIGU+aT9pOmU8dD90OmV9ZnVuY3Rpb24gdyhlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheSh0PjE/dC0xOjApLHM9MTtzPHQ7cysrKWlbcy0xXT1hcmd1bWVudHNbc107cmV0dXJuIGkuZmlsdGVyKChlPT5lKSkuZm9yRWFjaCgodD0+e2ZvcihsZXRbaSxzXW9mIE9iamVjdC5lbnRyaWVzKHQpKWlmKHZvaWQgMCE9PXMmJlwiW29iamVjdCBPYmplY3RdXCI9PT1zLnRvU3RyaW5nKCkpe2xldCB0PXZvaWQgMCE9PWVbaV0/ZVtpXS50b1N0cmluZygpOnZvaWQgMCxhPXMudG9TdHJpbmcoKSxuPUFycmF5LmlzQXJyYXkocyk/W106e307ZVtpXT1lW2ldP3QhPT1hP246ZVtpXTpuLHcoZVtpXSxzKX1lbHNlIGVbaV09c30pKSxlfWZ1bmN0aW9uIGIoZSl7bGV0IHQ9ZTtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGV8fCh0PW5ldyBEYXRlKGUpKSxpc05hTih0LmdldFRpbWUoKSkmJihjb25zb2xlLmxvZygnVW5hYmxlIHRvIGNvbnZlcnQgdmFsdWUgXCInLmNvbmNhdChlLCdcIiB0byBEYXRlIG9iamVjdCcpKSx0PSExKSx0fWZ1bmN0aW9uIGsoZSl7bGV0IHQ9XCJcXFxcc3xcXFxcLnwtfC98XFxcXFxcXFx8LHxcXFxcJHxcXFxcIXxcXFxcP3w6fDtcIjtyZXR1cm4gbmV3IFJlZ0V4cChcIihefD58XCIrdCtcIikoXCIrZStcIikoJHw8fFwiK3QrXCIpXCIsXCJnXCIpfWZ1bmN0aW9uIEMoZSx0LGkpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWNsYXNzIF97Y29uc3RydWN0b3IoKXtsZXR7dHlwZTplLGRhdGU6dCxkcDppLG9wdHM6cyxib2R5OmF9PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtDKHRoaXMsXCJmb2N1c1wiLCgoKT0+e3RoaXMuJGNlbGwuY2xhc3NMaXN0LmFkZChcIi1mb2N1cy1cIiksdGhpcy5mb2N1c2VkPSEwfSkpLEModGhpcyxcInJlbW92ZUZvY3VzXCIsKCgpPT57dGhpcy4kY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiLWZvY3VzLVwiKSx0aGlzLmZvY3VzZWQ9ITF9KSksQyh0aGlzLFwic2VsZWN0XCIsKCgpPT57dGhpcy4kY2VsbC5jbGFzc0xpc3QuYWRkKFwiLXNlbGVjdGVkLVwiKSx0aGlzLnNlbGVjdGVkPSEwfSkpLEModGhpcyxcInJlbW92ZVNlbGVjdFwiLCgoKT0+e3RoaXMuJGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIi1zZWxlY3RlZC1cIixcIi1yYW5nZS1mcm9tLVwiLFwiLXJhbmdlLXRvLVwiKSx0aGlzLnNlbGVjdGVkPSExfSkpLEModGhpcyxcIm9uQ2hhbmdlU2VsZWN0ZWREYXRlXCIsKCgpPT57dGhpcy5pc0Rpc2FibGVkfHwodGhpcy5faGFuZGxlU2VsZWN0ZWRTdGF0dXMoKSx0aGlzLm9wdHMucmFuZ2UmJnRoaXMuX2hhbmRsZVJhbmdlU3RhdHVzKCkpfSkpLEModGhpcyxcIm9uQ2hhbmdlRm9jdXNEYXRlXCIsKGU9PntpZighZSlyZXR1cm4gdm9pZCh0aGlzLmZvY3VzZWQmJnRoaXMucmVtb3ZlRm9jdXMoKSk7bGV0IHQ9dShlLHRoaXMuZGF0ZSx0aGlzLnR5cGUpO3Q/dGhpcy5mb2N1cygpOiF0JiZ0aGlzLmZvY3VzZWQmJnRoaXMucmVtb3ZlRm9jdXMoKSx0aGlzLm9wdHMucmFuZ2UmJnRoaXMuX2hhbmRsZVJhbmdlU3RhdHVzKCl9KSksQyh0aGlzLFwicmVuZGVyXCIsKCgpPT4odGhpcy4kY2VsbC5pbm5lckhUTUw9dGhpcy5fZ2V0SHRtbCgpLHRoaXMuJGNlbGwuYWRwQ2VsbD10aGlzLHRoaXMuJGNlbGwpKSksdGhpcy50eXBlPWUsdGhpcy5zaW5nbGVUeXBlPXRoaXMudHlwZS5zbGljZSgwLC0xKSx0aGlzLmRhdGU9dCx0aGlzLmRwPWksdGhpcy5vcHRzPXMsdGhpcy5ib2R5PWEsdGhpcy5jdXN0b21EYXRhPSExLHRoaXMuaW5pdCgpfWluaXQoKXtsZXR7cmFuZ2U6ZSxvblJlbmRlckNlbGw6dH09dGhpcy5vcHRzO3QmJih0aGlzLmN1c3RvbURhdGE9dCh7ZGF0ZTp0aGlzLmRhdGUsY2VsbFR5cGU6dGhpcy5zaW5nbGVUeXBlLGRhdGVwaWNrZXI6dGhpcy5kcH0pKSx0aGlzLl9jcmVhdGVFbGVtZW50KCksdGhpcy5fYmluZERhdGVwaWNrZXJFdmVudHMoKSx0aGlzLl9oYW5kbGVJbml0aWFsRm9jdXNTdGF0dXMoKSx0aGlzLmRwLmhhc1NlbGVjdGVkRGF0ZXMmJih0aGlzLl9oYW5kbGVTZWxlY3RlZFN0YXR1cygpLGUmJnRoaXMuX2hhbmRsZVJhbmdlU3RhdHVzKCkpfV9iaW5kRGF0ZXBpY2tlckV2ZW50cygpe3RoaXMuZHAub24oaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx0aGlzLm9uQ2hhbmdlU2VsZWN0ZWREYXRlKSx0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VGb2N1c0RhdGUsdGhpcy5vbkNoYW5nZUZvY3VzRGF0ZSl9dW5iaW5kRGF0ZXBpY2tlckV2ZW50cygpe3RoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5vbkNoYW5nZVNlbGVjdGVkRGF0ZSksdGhpcy5kcC5vZmYoaS5ldmVudENoYW5nZUZvY3VzRGF0ZSx0aGlzLm9uQ2hhbmdlRm9jdXNEYXRlKX1fY3JlYXRlRWxlbWVudCgpe2xldHt5ZWFyOmUsbW9udGg6dCxkYXRlOml9PW8odGhpcy5kYXRlKTt0aGlzLiRjZWxsPW4oe2NsYXNzTmFtZTp0aGlzLl9nZXRDbGFzc05hbWUoKSxhdHRyczp7XCJkYXRhLXllYXJcIjplLFwiZGF0YS1tb250aFwiOnQsXCJkYXRhLWRhdGVcIjppfX0pfV9nZXRDbGFzc05hbWUoKXt2YXIgZSx0O2xldCBzPW5ldyBEYXRlLHtzZWxlY3RPdGhlck1vbnRoczphLHNlbGVjdE90aGVyWWVhcnM6bn09dGhpcy5vcHRzLHttaW5EYXRlOnIsbWF4RGF0ZTpofT10aGlzLmRwLHtkYXk6bH09byh0aGlzLmRhdGUpLGQ9dGhpcy5faXNPdXRPZk1pbk1heFJhbmdlKCkscD1udWxsPT09KGU9dGhpcy5jdXN0b21EYXRhKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5kaXNhYmxlZCxtPWMoXCJhaXItZGF0ZXBpY2tlci1jZWxsXCIsXCItXCIuY29uY2F0KHRoaXMuc2luZ2xlVHlwZSxcIi1cIikse1wiLWN1cnJlbnQtXCI6dShzLHRoaXMuZGF0ZSx0aGlzLnR5cGUpLFwiLW1pbi1kYXRlLVwiOnImJnUocix0aGlzLmRhdGUsdGhpcy50eXBlKSxcIi1tYXgtZGF0ZS1cIjpoJiZ1KGgsdGhpcy5kYXRlLHRoaXMudHlwZSl9KSxnPVwiXCI7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZSBpLmRheXM6Zz1jKHtcIi13ZWVrZW5kLVwiOnRoaXMuZHAuaXNXZWVrZW5kKGwpLFwiLW90aGVyLW1vbnRoLVwiOnRoaXMuaXNPdGhlck1vbnRoLFwiLWRpc2FibGVkLVwiOnRoaXMuaXNPdGhlck1vbnRoJiYhYXx8ZHx8cH0pO2JyZWFrO2Nhc2UgaS5tb250aHM6Zz1jKHtcIi1kaXNhYmxlZC1cIjpkfHxwfSk7YnJlYWs7Y2FzZSBpLnllYXJzOmc9Yyh7XCItb3RoZXItZGVjYWRlLVwiOnRoaXMuaXNPdGhlckRlY2FkZSxcIi1kaXNhYmxlZC1cIjpkfHx0aGlzLmlzT3RoZXJEZWNhZGUmJiFufHxwfSl9cmV0dXJuIGMobSxnLG51bGw9PT0odD10aGlzLmN1c3RvbURhdGEpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmNsYXNzZXMpfV9nZXRIdG1sKCl7dmFyIGU7bGV0e3llYXI6dCxtb250aDpzLGRhdGU6YX09byh0aGlzLmRhdGUpLHtzaG93T3RoZXJNb250aHM6bixzaG93T3RoZXJZZWFyczpyfT10aGlzLm9wdHM7aWYobnVsbCE9PShlPXRoaXMuY3VzdG9tRGF0YSkmJnZvaWQgMCE9PWUmJmUuaHRtbClyZXR1cm4gdGhpcy5jdXN0b21EYXRhLmh0bWw7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZSBpLmRheXM6cmV0dXJuIW4mJnRoaXMuaXNPdGhlck1vbnRoP1wiXCI6YTtjYXNlIGkubW9udGhzOnJldHVybiB0aGlzLmRwLmxvY2FsZVt0aGlzLm9wdHMubW9udGhzRmllbGRdW3NdO2Nhc2UgaS55ZWFyczpyZXR1cm4hciYmdGhpcy5pc090aGVyRGVjYWRlP1wiXCI6dH19X2lzT3V0T2ZNaW5NYXhSYW5nZSgpe2xldHttaW5EYXRlOmUsbWF4RGF0ZTp0fT10aGlzLmRwLHt0eXBlOnMsZGF0ZTphfT10aGlzLHttb250aDpuLHllYXI6cixkYXRlOmh9PW8oYSksbD1zPT09aS5kYXlzLGQ9cz09PWkueWVhcnMsYz0hIWUmJm5ldyBEYXRlKHIsZD9lLmdldE1vbnRoKCk6bixsP2g6ZS5nZXREYXRlKCkpLHU9ISF0JiZuZXcgRGF0ZShyLGQ/dC5nZXRNb250aCgpOm4sbD9oOnQuZ2V0RGF0ZSgpKTtyZXR1cm4gZSYmdD9tKGMsZSl8fHAodSx0KTplP20oYyxlKTp0P3AodSx0KTp2b2lkIDB9ZGVzdHJveSgpe3RoaXMudW5iaW5kRGF0ZXBpY2tlckV2ZW50cygpfV9oYW5kbGVSYW5nZVN0YXR1cygpe2xldHtyYW5nZURhdGVGcm9tOmUscmFuZ2VEYXRlVG86dH09dGhpcy5kcCxpPWMoe1wiLWluLXJhbmdlLVwiOmUmJnQmJihzPXRoaXMuZGF0ZSxhPWUsbj10LHAocyxhKSYmbShzLG4pKSxcIi1yYW5nZS1mcm9tLVwiOmUmJnUodGhpcy5kYXRlLGUsdGhpcy50eXBlKSxcIi1yYW5nZS10by1cIjp0JiZ1KHRoaXMuZGF0ZSx0LHRoaXMudHlwZSl9KTt2YXIgcyxhLG47dGhpcy4kY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXJhbmdlLWZyb20tXCIsXCItcmFuZ2UtdG8tXCIsXCItaW4tcmFuZ2UtXCIpLGkmJnRoaXMuJGNlbGwuY2xhc3NMaXN0LmFkZCguLi5pLnNwbGl0KFwiIFwiKSl9X2hhbmRsZVNlbGVjdGVkU3RhdHVzKCl7bGV0IGU9dGhpcy5kcC5fY2hlY2tJZkRhdGVJc1NlbGVjdGVkKHRoaXMuZGF0ZSx0aGlzLnR5cGUpO2U/dGhpcy5zZWxlY3QoKTohZSYmdGhpcy5zZWxlY3RlZCYmdGhpcy5yZW1vdmVTZWxlY3QoKX1faGFuZGxlSW5pdGlhbEZvY3VzU3RhdHVzKCl7dSh0aGlzLmRwLmZvY3VzRGF0ZSx0aGlzLmRhdGUsdGhpcy50eXBlKSYmdGhpcy5mb2N1cygpfWdldCBpc0Rpc2FibGVkKCl7cmV0dXJuIHRoaXMuJGNlbGwubWF0Y2hlcyhcIi4tZGlzYWJsZWQtXCIpfWdldCBpc090aGVyTW9udGgoKXtyZXR1cm4gdGhpcy5kcC5pc090aGVyTW9udGgodGhpcy5kYXRlKX1nZXQgaXNPdGhlckRlY2FkZSgpe3JldHVybiB0aGlzLmRwLmlzT3RoZXJEZWNhZGUodGhpcy5kYXRlKX19ZnVuY3Rpb24gTShlLHQsaSl7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9bGV0ICQ9e1tpLmRheXNdOic8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItYm9keS0tZGF5LW5hbWVzXCI+PC9kaXY+JysnPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLWJvZHktLWNlbGxzIC0nLmNvbmNhdChpLmRheXMsJy1cIj48L2Rpdj4nKSxbaS5tb250aHNdOic8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMgLScuY29uY2F0KGkubW9udGhzLCctXCI+PC9kaXY+JyksW2kueWVhcnNdOic8ZGl2IGNsYXNzPVwiYWlyLWRhdGVwaWNrZXItYm9keS0tY2VsbHMgLScuY29uY2F0KGkueWVhcnMsJy1cIj48L2Rpdj4nKX07Y2xhc3MgU3tjb25zdHJ1Y3RvcihlKXtsZXR7ZHA6dCx0eXBlOnMsb3B0czphfT1lO00odGhpcyxcImhhbmRsZUNsaWNrXCIsKGU9PntsZXQgdD1lLnRhcmdldC5hZHBDZWxsO2lmKHQuaXNEaXNhYmxlZClyZXR1cm47aWYoIXRoaXMuZHAuaXNNaW5WaWV3UmVhY2hlZClyZXR1cm4gdm9pZCB0aGlzLmRwLmRvd24oKTtsZXQgaT10aGlzLmRwLl9jaGVja0lmRGF0ZUlzU2VsZWN0ZWQodC5kYXRlLHQudHlwZSk7aT90aGlzLmRwLl9oYW5kbGVBbHJlYWR5U2VsZWN0ZWREYXRlcyhpLHQuZGF0ZSk6dGhpcy5kcC5zZWxlY3REYXRlKHQuZGF0ZSl9KSksTSh0aGlzLFwiaGFuZGxlRGF5TmFtZUNsaWNrXCIsKGU9PntsZXQgdD1lLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRheS1pbmRleFwiKTt0aGlzLm9wdHMub25DbGlja0RheU5hbWUoe2RheUluZGV4Ok51bWJlcih0KSxkYXRlcGlja2VyOnRoaXMuZHB9KX0pKSxNKHRoaXMsXCJvbkNoYW5nZUN1cnJlbnRWaWV3XCIsKGU9PntlIT09dGhpcy50eXBlP3RoaXMuaGlkZSgpOih0aGlzLnNob3coKSx0aGlzLnJlbmRlcigpKX0pKSxNKHRoaXMsXCJvbk1vdXNlT3ZlckNlbGxcIiwoZT0+e2xldCB0PXkoZS50YXJnZXQsXCIuYWlyLWRhdGVwaWNrZXItY2VsbFwiKTt0aGlzLmRwLnNldEZvY3VzRGF0ZSghIXQmJnQuYWRwQ2VsbC5kYXRlKX0pKSxNKHRoaXMsXCJvbk1vdXNlT3V0Q2VsbFwiLCgoKT0+e3RoaXMuZHAuc2V0Rm9jdXNEYXRlKCExKX0pKSxNKHRoaXMsXCJvbkNsaWNrQm9keVwiLChlPT57bGV0e29uQ2xpY2tEYXlOYW1lOnR9PXRoaXMub3B0cyxpPWUudGFyZ2V0O2kuY2xvc2VzdChcIi5haXItZGF0ZXBpY2tlci1jZWxsXCIpJiZ0aGlzLmhhbmRsZUNsaWNrKGUpLHQmJmkuY2xvc2VzdChcIi5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZVwiKSYmdGhpcy5oYW5kbGVEYXlOYW1lQ2xpY2soZSl9KSksTSh0aGlzLFwib25Nb3VzZURvd25cIiwoZT0+e3RoaXMucHJlc3NlZD0hMDtsZXQgdD15KGUudGFyZ2V0LFwiLmFpci1kYXRlcGlja2VyLWNlbGxcIiksaT10JiZ0LmFkcENlbGw7dShpLmRhdGUsdGhpcy5kcC5yYW5nZURhdGVGcm9tKSYmKHRoaXMucmFuZ2VGcm9tRm9jdXNlZD0hMCksdShpLmRhdGUsdGhpcy5kcC5yYW5nZURhdGVUbykmJih0aGlzLnJhbmdlVG9Gb2N1c2VkPSEwKX0pKSxNKHRoaXMsXCJvbk1vdXNlTW92ZVwiLChlPT57aWYoIXRoaXMucHJlc3NlZHx8IXRoaXMuZHAuaXNNaW5WaWV3UmVhY2hlZClyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpO2xldCB0PXkoZS50YXJnZXQsXCIuYWlyLWRhdGVwaWNrZXItY2VsbFwiKSxpPXQmJnQuYWRwQ2VsbCx7c2VsZWN0ZWREYXRlczpzLHJhbmdlRGF0ZVRvOmEscmFuZ2VEYXRlRnJvbTpufT10aGlzLmRwO2lmKCFpfHxpLmlzRGlzYWJsZWQpcmV0dXJuO2xldHtkYXRlOnJ9PWk7aWYoMj09PXMubGVuZ3RoKXtpZih0aGlzLnJhbmdlRnJvbUZvY3VzZWQmJiFwKHIsYSkpe2xldHtob3VyczplLG1pbnV0ZXM6dH09byhuKTtyLnNldEhvdXJzKGUpLHIuc2V0TWludXRlcyh0KSx0aGlzLmRwLnJhbmdlRGF0ZUZyb209cix0aGlzLmRwLnJlcGxhY2VEYXRlKG4scil9aWYodGhpcy5yYW5nZVRvRm9jdXNlZCYmIW0ocixuKSl7bGV0e2hvdXJzOmUsbWludXRlczp0fT1vKGEpO3Iuc2V0SG91cnMoZSksci5zZXRNaW51dGVzKHQpLHRoaXMuZHAucmFuZ2VEYXRlVG89cix0aGlzLmRwLnJlcGxhY2VEYXRlKGEscil9fX0pKSxNKHRoaXMsXCJvbk1vdXNlVXBcIiwoKCk9Pnt0aGlzLnByZXNzZWQ9ITEsdGhpcy5yYW5nZUZyb21Gb2N1c2VkPSExLHRoaXMucmFuZ2VUb0ZvY3VzZWQ9ITF9KSksTSh0aGlzLFwib25DaGFuZ2VWaWV3RGF0ZVwiLCgoZSx0KT0+e2lmKCF0aGlzLmlzVmlzaWJsZSlyZXR1cm47bGV0IHM9ZChlKSxhPWQodCk7c3dpdGNoKHRoaXMuZHAuY3VycmVudFZpZXcpe2Nhc2UgaS5kYXlzOmlmKHUoZSx0LGkubW9udGhzKSlyZXR1cm47YnJlYWs7Y2FzZSBpLm1vbnRoczppZih1KGUsdCxpLnllYXJzKSlyZXR1cm47YnJlYWs7Y2FzZSBpLnllYXJzOmlmKHNbMF09PT1hWzBdJiZzWzFdPT09YVsxXSlyZXR1cm59dGhpcy5yZW5kZXIoKX0pKSxNKHRoaXMsXCJyZW5kZXJcIiwoKCk9Pnt0aGlzLmRlc3Ryb3lDZWxscygpLHRoaXMuX2dlbmVyYXRlQ2VsbHMoKSx0aGlzLmNlbGxzLmZvckVhY2goKGU9Pnt0aGlzLiRjZWxscy5hcHBlbmRDaGlsZChlLnJlbmRlcigpKX0pKX0pKSx0aGlzLmRwPXQsdGhpcy50eXBlPXMsdGhpcy5vcHRzPWEsdGhpcy5jZWxscz1bXSx0aGlzLiRlbD1cIlwiLHRoaXMucHJlc3NlZD0hMSx0aGlzLmlzVmlzaWJsZT0hMCx0aGlzLmluaXQoKX1pbml0KCl7dGhpcy5fYnVpbGRCYXNlSHRtbCgpLHRoaXMudHlwZT09PWkuZGF5cyYmdGhpcy5yZW5kZXJEYXlOYW1lcygpLHRoaXMucmVuZGVyKCksdGhpcy5fYmluZEV2ZW50cygpLHRoaXMuX2JpbmREYXRlcGlja2VyRXZlbnRzKCl9X2JpbmRFdmVudHMoKXtsZXR7cmFuZ2U6ZSxkeW5hbWljUmFuZ2U6dH09dGhpcy5vcHRzO3YodGhpcy4kZWwsXCJtb3VzZW92ZXJcIix0aGlzLm9uTW91c2VPdmVyQ2VsbCksdih0aGlzLiRlbCxcIm1vdXNlb3V0XCIsdGhpcy5vbk1vdXNlT3V0Q2VsbCksdih0aGlzLiRlbCxcImNsaWNrXCIsdGhpcy5vbkNsaWNrQm9keSksZSYmdCYmKHYodGhpcy4kZWwsXCJtb3VzZWRvd25cIix0aGlzLm9uTW91c2VEb3duKSx2KHRoaXMuJGVsLFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZSksdih3aW5kb3cuZG9jdW1lbnQsXCJtb3VzZXVwXCIsdGhpcy5vbk1vdXNlVXApKX1fYmluZERhdGVwaWNrZXJFdmVudHMoKXt0aGlzLmRwLm9uKGkuZXZlbnRDaGFuZ2VWaWV3RGF0ZSx0aGlzLm9uQ2hhbmdlVmlld0RhdGUpLHRoaXMuZHAub24oaS5ldmVudENoYW5nZUN1cnJlbnRWaWV3LHRoaXMub25DaGFuZ2VDdXJyZW50Vmlldyl9X2J1aWxkQmFzZUh0bWwoKXt0aGlzLiRlbD1uKHtjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlci1ib2R5IC1cIi5jb25jYXQodGhpcy50eXBlLFwiLVwiKSxpbm5lckh0bWw6JFt0aGlzLnR5cGVdfSksdGhpcy4kbmFtZXM9YShcIi5haXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZXNcIix0aGlzLiRlbCksdGhpcy4kY2VsbHM9YShcIi5haXItZGF0ZXBpY2tlci1ib2R5LS1jZWxsc1wiLHRoaXMuJGVsKX1fZ2V0RGF5TmFtZXNIdG1sKCl7bGV0IGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMuZHAubG9jYWxlLmZpcnN0RGF5LHQ9XCJcIixzPXRoaXMuZHAuaXNXZWVrZW5kLHtvbkNsaWNrRGF5TmFtZTphfT10aGlzLm9wdHMsbj1lLHI9MDtmb3IoO3I8Nzspe2xldCBlPW4lNyxoPWMoXCJhaXItZGF0ZXBpY2tlci1ib2R5LS1kYXktbmFtZVwiLHtbaS5jc3NDbGFzc1dlZWtlbmRdOnMoZSksXCItY2xpY2thYmxlLVwiOiEhYX0pLG89dGhpcy5kcC5sb2NhbGUuZGF5c01pbltlXTt0Kz0nPGRpdiBjbGFzcz1cIicuY29uY2F0KGgsXCJcXFwiIGRhdGEtZGF5LWluZGV4PSdcIikuY29uY2F0KGUsXCInPlwiKS5jb25jYXQobyxcIjwvZGl2PlwiKSxyKyssbisrfXJldHVybiB0fV9nZXREYXlzQ2VsbHMoKXtsZXR7dmlld0RhdGU6ZSxsb2NhbGU6e2ZpcnN0RGF5OnR9fT10aGlzLmRwLGk9aChlKSx7eWVhcjpzLG1vbnRoOmF9PW8oZSksbj1uZXcgRGF0ZShzLGEsMSkscj1uZXcgRGF0ZShzLGEsaSksbD1uLmdldERheSgpLXQsZD02LXIuZ2V0RGF5KCkrdDtsPWw8MD9sKzc6bCxkPWQ+Nj9kLTc6ZDtsZXQgYz1mdW5jdGlvbihlLHQpe2xldHt5ZWFyOmksbW9udGg6cyxkYXRlOmF9PW8oZSk7cmV0dXJuIG5ldyBEYXRlKGkscyxhLXQpfShuLGwpLHU9aStsK2QscD1jLmdldERhdGUoKSx7eWVhcjptLG1vbnRoOmd9PW8oYyksRD0wO2Zvcig7RDx1Oyl7bGV0IGU9bmV3IERhdGUobSxnLHArRCk7dGhpcy5fZ2VuZXJhdGVDZWxsKGUpLEQrK319X2dlbmVyYXRlQ2VsbChlKXtsZXR7dHlwZTp0LGRwOmksb3B0czpzfT10aGlzLGE9bmV3IF8oe3R5cGU6dCxkcDppLG9wdHM6cyxkYXRlOmUsYm9keTp0aGlzfSk7cmV0dXJuIHRoaXMuY2VsbHMucHVzaChhKSxhfV9nZW5lcmF0ZURheUNlbGxzKCl7dGhpcy5fZ2V0RGF5c0NlbGxzKCl9X2dlbmVyYXRlTW9udGhDZWxscygpe2xldHt5ZWFyOmV9PXRoaXMuZHAucGFyc2VkVmlld0RhdGUsdD0wO2Zvcig7dDwxMjspdGhpcy5jZWxscy5wdXNoKHRoaXMuX2dlbmVyYXRlQ2VsbChuZXcgRGF0ZShlLHQpKSksdCsrfV9nZW5lcmF0ZVllYXJDZWxscygpe2xldCBlPWQodGhpcy5kcC52aWV3RGF0ZSksdD1lWzBdLTEsaT1lWzFdKzEscz10O2Zvcig7czw9aTspdGhpcy5jZWxscy5wdXNoKHRoaXMuX2dlbmVyYXRlQ2VsbChuZXcgRGF0ZShzLDApKSkscysrfXJlbmRlckRheU5hbWVzKCl7dGhpcy4kbmFtZXMuaW5uZXJIVE1MPXRoaXMuX2dldERheU5hbWVzSHRtbCgpfV9nZW5lcmF0ZUNlbGxzKCl7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZSBpLmRheXM6dGhpcy5fZ2VuZXJhdGVEYXlDZWxscygpO2JyZWFrO2Nhc2UgaS5tb250aHM6dGhpcy5fZ2VuZXJhdGVNb250aENlbGxzKCk7YnJlYWs7Y2FzZSBpLnllYXJzOnRoaXMuX2dlbmVyYXRlWWVhckNlbGxzKCl9fXNob3coKXt0aGlzLmlzVmlzaWJsZT0hMCx0aGlzLiRlbC5jbGFzc0xpc3QucmVtb3ZlKFwiLWhpZGRlbi1cIil9aGlkZSgpe3RoaXMuaXNWaXNpYmxlPSExLHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoXCItaGlkZGVuLVwiKX1kZXN0cm95Q2VsbHMoKXt0aGlzLmNlbGxzLmZvckVhY2goKGU9PmUuZGVzdHJveSgpKSksdGhpcy5jZWxscz1bXSx0aGlzLiRjZWxscy5pbm5lckhUTUw9XCJcIn1kZXN0cm95KCl7dGhpcy5kZXN0cm95Q2VsbHMoKSx0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlVmlld0RhdGUsdGhpcy5vbkNoYW5nZVZpZXdEYXRlKSx0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlQ3VycmVudFZpZXcsdGhpcy5vbkNoYW5nZUN1cnJlbnRWaWV3KX19ZnVuY3Rpb24gVChlLHQsaSl7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9Y2xhc3MgRntjb25zdHJ1Y3RvcihlKXtsZXR7ZHA6dCxvcHRzOml9PWU7VCh0aGlzLFwib25DbGlja05hdlwiLChlPT57bGV0IHQ9eShlLnRhcmdldCxcIi5haXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvblwiKTtpZighdClyZXR1cm47bGV0IGk9dC5kYXRhc2V0LmFjdGlvbjt0aGlzLmRwW2ldKCl9KSksVCh0aGlzLFwib25DaGFuZ2VWaWV3RGF0ZVwiLCgoKT0+e3RoaXMucmVuZGVyKCksdGhpcy5fcmVzZXROYXZTdGF0dXMoKSx0aGlzLmhhbmRsZU5hdlN0YXR1cygpfSkpLFQodGhpcyxcIm9uQ2hhbmdlQ3VycmVudFZpZXdcIiwoKCk9Pnt0aGlzLnJlbmRlcigpLHRoaXMuX3Jlc2V0TmF2U3RhdHVzKCksdGhpcy5oYW5kbGVOYXZTdGF0dXMoKX0pKSxUKHRoaXMsXCJvbkNsaWNrTmF2VGl0bGVcIiwoKCk9Pnt0aGlzLmRwLmlzRmluYWxWaWV3fHx0aGlzLmRwLnVwKCl9KSksVCh0aGlzLFwidXBkYXRlXCIsKCgpPT57bGV0e3ByZXZIdG1sOmUsbmV4dEh0bWw6dH09dGhpcy5vcHRzO3RoaXMuJHByZXYuaW5uZXJIVE1MPWUsdGhpcy4kbmV4dC5pbm5lckhUTUw9dCx0aGlzLl9yZXNldE5hdlN0YXR1cygpLHRoaXMucmVuZGVyKCksdGhpcy5oYW5kbGVOYXZTdGF0dXMoKX0pKSxUKHRoaXMsXCJyZW5kZXJEZWxheVwiLCgoKT0+e3NldFRpbWVvdXQodGhpcy5yZW5kZXIpfSkpLFQodGhpcyxcInJlbmRlclwiLCgoKT0+e3RoaXMuJHRpdGxlLmlubmVySFRNTD10aGlzLl9nZXRUaXRsZSgpLGZ1bmN0aW9uKGUsdCl7Zm9yKGxldCBpIGluIHQpdFtpXT9lLmNsYXNzTGlzdC5hZGQoaSk6ZS5jbGFzc0xpc3QucmVtb3ZlKGkpfSh0aGlzLiR0aXRsZSx7XCItZGlzYWJsZWQtXCI6dGhpcy5kcC5pc0ZpbmFsVmlld30pfSkpLHRoaXMuZHA9dCx0aGlzLm9wdHM9aSx0aGlzLmluaXQoKX1pbml0KCl7dGhpcy5fY3JlYXRlRWxlbWVudCgpLHRoaXMuX2J1aWxkQmFzZUh0bWwoKSx0aGlzLl9kZWZpbmVET00oKSx0aGlzLnJlbmRlcigpLHRoaXMuaGFuZGxlTmF2U3RhdHVzKCksdGhpcy5fYmluZEV2ZW50cygpLHRoaXMuX2JpbmREYXRlcGlja2VyRXZlbnRzKCl9X2RlZmluZURPTSgpe3RoaXMuJHRpdGxlPWEoXCIuYWlyLWRhdGVwaWNrZXItbmF2LS10aXRsZVwiLHRoaXMuJGVsKSx0aGlzLiRwcmV2PWEoJ1tkYXRhLWFjdGlvbj1cInByZXZcIl0nLHRoaXMuJGVsKSx0aGlzLiRuZXh0PWEoJ1tkYXRhLWFjdGlvbj1cIm5leHRcIl0nLHRoaXMuJGVsKX1fYmluZEV2ZW50cygpe3RoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGlja05hdiksdGhpcy4kdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrTmF2VGl0bGUpfV9iaW5kRGF0ZXBpY2tlckV2ZW50cygpe3RoaXMuZHAub24oaS5ldmVudENoYW5nZVZpZXdEYXRlLHRoaXMub25DaGFuZ2VWaWV3RGF0ZSksdGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlQ3VycmVudFZpZXcsdGhpcy5vbkNoYW5nZUN1cnJlbnRWaWV3KSx0aGlzLmlzTmF2SXNGdW5jdGlvbiYmKHRoaXMuZHAub24oaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx0aGlzLnJlbmRlckRlbGF5KSx0aGlzLmRwLm9wdHMudGltZXBpY2tlciYmdGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlVGltZSx0aGlzLnJlbmRlcikpfWRlc3Ryb3koKXt0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlVmlld0RhdGUsdGhpcy5vbkNoYW5nZVZpZXdEYXRlKSx0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlQ3VycmVudFZpZXcsdGhpcy5vbkNoYW5nZUN1cnJlbnRWaWV3KSx0aGlzLmlzTmF2SXNGdW5jdGlvbiYmKHRoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5yZW5kZXJEZWxheSksdGhpcy5kcC5vcHRzLnRpbWVwaWNrZXImJnRoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VUaW1lLHRoaXMucmVuZGVyKSl9X2NyZWF0ZUVsZW1lbnQoKXt0aGlzLiRlbD1uKHt0YWdOYW1lOlwibmF2XCIsY2xhc3NOYW1lOlwiYWlyLWRhdGVwaWNrZXItbmF2XCJ9KX1fZ2V0VGl0bGUoKXtsZXR7ZHA6ZSxvcHRzOnR9PXRoaXMsaT10Lm5hdlRpdGxlc1tlLmN1cnJlbnRWaWV3XTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2koZSk6ZS5mb3JtYXREYXRlKGUudmlld0RhdGUsaSl9aGFuZGxlTmF2U3RhdHVzKCl7bGV0e2Rpc2FibGVOYXZXaGVuT3V0T2ZSYW5nZTplfT10aGlzLm9wdHMse21pbkRhdGU6dCxtYXhEYXRlOnN9PXRoaXMuZHA7aWYoIXQmJiFzfHwhZSlyZXR1cm47bGV0e3llYXI6YSxtb250aDpufT10aGlzLmRwLnBhcnNlZFZpZXdEYXRlLHI9ISF0JiZvKHQpLGg9ISFzJiZvKHMpO3N3aXRjaCh0aGlzLmRwLmN1cnJlbnRWaWV3KXtjYXNlIGkuZGF5czp0JiZyLm1vbnRoPj1uJiZyLnllYXI+PWEmJnRoaXMuX2Rpc2FibGVOYXYoXCJwcmV2XCIpLHMmJmgubW9udGg8PW4mJmgueWVhcjw9YSYmdGhpcy5fZGlzYWJsZU5hdihcIm5leHRcIik7YnJlYWs7Y2FzZSBpLm1vbnRoczp0JiZyLnllYXI+PWEmJnRoaXMuX2Rpc2FibGVOYXYoXCJwcmV2XCIpLHMmJmgueWVhcjw9YSYmdGhpcy5fZGlzYWJsZU5hdihcIm5leHRcIik7YnJlYWs7Y2FzZSBpLnllYXJzOntsZXQgZT1kKHRoaXMuZHAudmlld0RhdGUpO3QmJnIueWVhcj49ZVswXSYmdGhpcy5fZGlzYWJsZU5hdihcInByZXZcIikscyYmaC55ZWFyPD1lWzFdJiZ0aGlzLl9kaXNhYmxlTmF2KFwibmV4dFwiKTticmVha319fV9kaXNhYmxlTmF2KGUpe2EoJ1tkYXRhLWFjdGlvbj1cIicrZSsnXCJdJyx0aGlzLiRlbCkuY2xhc3NMaXN0LmFkZChcIi1kaXNhYmxlZC1cIil9X3Jlc2V0TmF2U3RhdHVzKCl7IWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGk9bmV3IEFycmF5KHQ+MT90LTE6MCkscz0xO3M8dDtzKyspaVtzLTFdPWFyZ3VtZW50c1tzXTtlLmxlbmd0aD9lLmZvckVhY2goKGU9PntlLmNsYXNzTGlzdC5yZW1vdmUoLi4uaSl9KSk6ZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmkpfSh0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uXCIpLFwiLWRpc2FibGVkLVwiKX1fYnVpbGRCYXNlSHRtbCgpe2xldHtwcmV2SHRtbDplLG5leHRIdG1sOnR9PXRoaXMub3B0czt0aGlzLiRlbC5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci1uYXYtLWFjdGlvblwiIGRhdGEtYWN0aW9uPVwicHJldlwiPicuY29uY2F0KGUsXCI8L2Rpdj5cIikrJzxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci1uYXYtLXRpdGxlXCI+PC9kaXY+JysnPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLW5hdi0tYWN0aW9uXCIgZGF0YS1hY3Rpb249XCJuZXh0XCI+Jy5jb25jYXQodCxcIjwvZGl2PlwiKX1nZXQgaXNOYXZJc0Z1bmN0aW9uKCl7bGV0e25hdlRpdGxlczplfT10aGlzLm9wdHM7cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZpbmQoKHQ9PlwiZnVuY3Rpb25cIj09dHlwZW9mIGVbdF0pKX19dmFyIFY9e3RvZGF5Ontjb250ZW50OmU9PmUubG9jYWxlLnRvZGF5LG9uQ2xpY2s6ZT0+ZS5zZXRWaWV3RGF0ZShuZXcgRGF0ZSl9LGNsZWFyOntjb250ZW50OmU9PmUubG9jYWxlLmNsZWFyLG9uQ2xpY2s6ZT0+ZS5jbGVhcigpfX07Y2xhc3MgeHtjb25zdHJ1Y3RvcihlKXtsZXR7ZHA6dCxvcHRzOml9PWU7dGhpcy5kcD10LHRoaXMub3B0cz1pLHRoaXMuaW5pdCgpfWluaXQoKXt0aGlzLmNyZWF0ZUVsZW1lbnQoKSx0aGlzLnJlbmRlcigpfWNyZWF0ZUVsZW1lbnQoKXt0aGlzLiRlbD1uKHtjbGFzc05hbWU6XCJhaXItZGF0ZXBpY2tlci1idXR0b25zXCJ9KX1kZXN0cm95KCl7dGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRlbCl9Y2xlYXJIdG1sKCl7cmV0dXJuIHRoaXMuJGVsLmlubmVySFRNTD1cIlwiLHRoaXN9Z2VuZXJhdGVCdXR0b25zKCl7bGV0e2J1dHRvbnM6ZX09dGhpcy5vcHRzO0FycmF5LmlzQXJyYXkoZSl8fChlPVtlXSksZS5mb3JFYWNoKChlPT57bGV0IHQ9ZTtcInN0cmluZ1wiPT10eXBlb2YgZSYmVltlXSYmKHQ9VltlXSk7bGV0IGk9dGhpcy5jcmVhdGVCdXR0b24odCk7dC5vbkNsaWNrJiZ0aGlzLmF0dGFjaEV2ZW50VG9CdXR0b24oaSx0Lm9uQ2xpY2spLHRoaXMuJGVsLmFwcGVuZENoaWxkKGkpfSkpfWF0dGFjaEV2ZW50VG9CdXR0b24oZSx0KXtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgoKT0+e3QodGhpcy5kcCl9KSl9Y3JlYXRlQnV0dG9uKGUpe2xldHtjb250ZW50OnQsY2xhc3NOYW1lOmksdGFnTmFtZTpzPVwiYnV0dG9uXCIsYXR0cnM6YT17fX09ZSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCh0aGlzLmRwKTp0O3JldHVybiBuKHt0YWdOYW1lOnMsaW5uZXJIdG1sOlwiPHNwYW4gdGFiaW5kZXg9Jy0xJz5cIi5jb25jYXQocixcIjwvc3Bhbj5cIiksY2xhc3NOYW1lOmMoXCJhaXItZGF0ZXBpY2tlci1idXR0b25cIixpKSxhdHRyczphfSl9cmVuZGVyKCl7dGhpcy5nZW5lcmF0ZUJ1dHRvbnMoKX19ZnVuY3Rpb24gSChlLHQsaSl7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9Y2xhc3MgTHtjb25zdHJ1Y3Rvcigpe2xldHtvcHRzOmUsZHA6dH09YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O0godGhpcyxcInRvZ2dsZVRpbWVwaWNrZXJJc0FjdGl2ZVwiLChlPT57dGhpcy5kcC50aW1lcGlja2VySXNBY3RpdmU9ZX0pKSxIKHRoaXMsXCJvbkNoYW5nZVNlbGVjdGVkRGF0ZVwiLChlPT57bGV0e2RhdGU6dCx1cGRhdGVUaW1lOmk9ITF9PWU7dCYmKHRoaXMuc2V0TWluTWF4VGltZSh0KSx0aGlzLnNldEN1cnJlbnRUaW1lKCEhaSYmdCksdGhpcy5hZGRUaW1lVG9EYXRlKHQpKX0pKSxIKHRoaXMsXCJvbkNoYW5nZUxhc3RTZWxlY3RlZERhdGVcIiwoZT0+e2UmJih0aGlzLnNldFRpbWUoZSksdGhpcy5yZW5kZXIoKSl9KSksSCh0aGlzLFwib25DaGFuZ2VJbnB1dFJhbmdlXCIsKGU9PntsZXQgdD1lLnRhcmdldDt0aGlzW3QuZ2V0QXR0cmlidXRlKFwibmFtZVwiKV09dC52YWx1ZSx0aGlzLnVwZGF0ZVRleHQoKSx0aGlzLmRwLnRyaWdnZXIoaS5ldmVudENoYW5nZVRpbWUse2hvdXJzOnRoaXMuaG91cnMsbWludXRlczp0aGlzLm1pbnV0ZXN9KX0pKSxIKHRoaXMsXCJvbk1vdXNlRW50ZXJMZWF2ZVwiLChlPT57bGV0IHQ9ZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSxpPXRoaXMuJG1pbnV0ZXNUZXh0O1wiaG91cnNcIj09PXQmJihpPXRoaXMuJGhvdXJzVGV4dCksaS5jbGFzc0xpc3QudG9nZ2xlKFwiLWZvY3VzLVwiKX0pKSxIKHRoaXMsXCJvbkZvY3VzXCIsKCgpPT57dGhpcy50b2dnbGVUaW1lcGlja2VySXNBY3RpdmUoITApfSkpLEgodGhpcyxcIm9uQmx1clwiLCgoKT0+e3RoaXMudG9nZ2xlVGltZXBpY2tlcklzQWN0aXZlKCExKX0pKSx0aGlzLm9wdHM9ZSx0aGlzLmRwPXQ7bGV0e3RpbWVGb3JtYXQ6c309dGhpcy5kcC5sb2NhbGU7cyYmKHMubWF0Y2goayhcImhcIikpfHxzLm1hdGNoKGsoXCJoaFwiKSkpJiYodGhpcy5hbXBtPSEwKSx0aGlzLmluaXQoKX1pbml0KCl7dGhpcy5zZXRUaW1lKHRoaXMuZHAubGFzdFNlbGVjdGVkRGF0ZXx8dGhpcy5kcC52aWV3RGF0ZSksdGhpcy5jcmVhdGVFbGVtZW50KCksdGhpcy5idWlsZEh0bWwoKSx0aGlzLmRlZmluZURPTSgpLHRoaXMucmVuZGVyKCksdGhpcy5iaW5kRGF0ZXBpY2tlckV2ZW50cygpLHRoaXMuYmluZERPTUV2ZW50cygpfWJpbmREYXRlcGlja2VyRXZlbnRzKCl7dGhpcy5kcC5vbihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHRoaXMub25DaGFuZ2VTZWxlY3RlZERhdGUpLHRoaXMuZHAub24oaS5ldmVudENoYW5nZUxhc3RTZWxlY3RlZERhdGUsdGhpcy5vbkNoYW5nZUxhc3RTZWxlY3RlZERhdGUpfWJpbmRET01FdmVudHMoKXtsZXQgZT1cImlucHV0XCI7bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvdHJpZGVudC9naSkmJihlPVwiY2hhbmdlXCIpLHYodGhpcy4kcmFuZ2VzLGUsdGhpcy5vbkNoYW5nZUlucHV0UmFuZ2UpLHYodGhpcy4kcmFuZ2VzLFwibW91c2VlbnRlclwiLHRoaXMub25Nb3VzZUVudGVyTGVhdmUpLHYodGhpcy4kcmFuZ2VzLFwibW91c2VsZWF2ZVwiLHRoaXMub25Nb3VzZUVudGVyTGVhdmUpLHYodGhpcy4kcmFuZ2VzLFwiZm9jdXNcIix0aGlzLm9uRm9jdXMpLHYodGhpcy4kcmFuZ2VzLFwibW91c2Vkb3duXCIsdGhpcy5vbkZvY3VzKSx2KHRoaXMuJHJhbmdlcyxcImJsdXJcIix0aGlzLm9uQmx1cil9Y3JlYXRlRWxlbWVudCgpe3RoaXMuJGVsPW4oe2NsYXNzTmFtZTpjKFwiYWlyLWRhdGVwaWNrZXItdGltZVwiLHtcIi1hbS1wbS1cIjp0aGlzLmRwLmFtcG19KX0pfWRlc3Ryb3koKXt0aGlzLmRwLm9mZihpLmV2ZW50Q2hhbmdlU2VsZWN0ZWREYXRlLHRoaXMub25DaGFuZ2VTZWxlY3RlZERhdGUpLHRoaXMuZHAub2ZmKGkuZXZlbnRDaGFuZ2VMYXN0U2VsZWN0ZWREYXRlLHRoaXMub25DaGFuZ2VMYXN0U2VsZWN0ZWREYXRlKSx0aGlzLiRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJGVsKX1idWlsZEh0bWwoKXtsZXR7YW1wbTplLGhvdXJzOnQsZGlzcGxheUhvdXJzOmksbWludXRlczpzLG1pbkhvdXJzOmEsbWluTWludXRlczpuLG1heEhvdXJzOnIsbWF4TWludXRlczpoLGRheVBlcmlvZDpvLG9wdHM6e2hvdXJzU3RlcDpkLG1pbnV0ZXNTdGVwOmN9fT10aGlzO3RoaXMuJGVsLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnRcIj4nKycgICA8c3BhbiBjbGFzcz1cImFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtaG91cnNcIj4nLmNvbmNhdChsKGkpLFwiPC9zcGFuPlwiKSsnICAgPHNwYW4gY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1jdXJyZW50LWNvbG9uXCI+Ojwvc3Bhbj4nKycgICA8c3BhbiBjbGFzcz1cImFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlc1wiPicuY29uY2F0KGwocyksXCI8L3NwYW4+XCIpK1wiICAgXCIuY29uY2F0KGU/XCI8c3BhbiBjbGFzcz0nYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1hbXBtJz5cIi5jb25jYXQobyxcIjwvc3Bhbj5cIik6XCJcIikrJzwvZGl2PjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1zbGlkZXJzXCI+ICAgPGRpdiBjbGFzcz1cImFpci1kYXRlcGlja2VyLXRpbWUtLXJvd1wiPicrJyAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwiaG91cnNcIiB2YWx1ZT1cIicuY29uY2F0KHQsJ1wiIG1pbj1cIicpLmNvbmNhdChhLCdcIiBtYXg9XCInKS5jb25jYXQociwnXCIgc3RlcD1cIicpLmNvbmNhdChkLCdcIi8+JykrJyAgIDwvZGl2PiAgIDxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci10aW1lLS1yb3dcIj4nKycgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbmFtZT1cIm1pbnV0ZXNcIiB2YWx1ZT1cIicuY29uY2F0KHMsJ1wiIG1pbj1cIicpLmNvbmNhdChuLCdcIiBtYXg9XCInKS5jb25jYXQoaCwnXCIgc3RlcD1cIicpLmNvbmNhdChjLCdcIi8+JykrXCIgICA8L2Rpdj48L2Rpdj5cIn1kZWZpbmVET00oKXtsZXQgZT1lPT5hKGUsdGhpcy4kZWwpO3RoaXMuJHJhbmdlcz10aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cInJhbmdlXCJdJyksdGhpcy4kaG91cnM9ZSgnW25hbWU9XCJob3Vyc1wiXScpLHRoaXMuJG1pbnV0ZXM9ZSgnW25hbWU9XCJtaW51dGVzXCJdJyksdGhpcy4kaG91cnNUZXh0PWUoXCIuYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1ob3Vyc1wiKSx0aGlzLiRtaW51dGVzVGV4dD1lKFwiLmFpci1kYXRlcGlja2VyLXRpbWUtLWN1cnJlbnQtbWludXRlc1wiKSx0aGlzLiRhbXBtPWUoXCIuYWlyLWRhdGVwaWNrZXItdGltZS0tY3VycmVudC1hbXBtXCIpfXNldFRpbWUoZSl7dGhpcy5zZXRNaW5NYXhUaW1lKGUpLHRoaXMuc2V0Q3VycmVudFRpbWUoZSl9YWRkVGltZVRvRGF0ZShlKXtlJiYoZS5zZXRIb3Vycyh0aGlzLmhvdXJzKSxlLnNldE1pbnV0ZXModGhpcy5taW51dGVzKSl9c2V0TWluTWF4VGltZShlKXtpZih0aGlzLnNldE1pbk1heFRpbWVGcm9tT3B0aW9ucygpLGUpe2xldHttaW5EYXRlOnQsbWF4RGF0ZTppfT10aGlzLmRwO3QmJnUoZSx0KSYmdGhpcy5zZXRNaW5UaW1lRnJvbU1pbkRhdGUodCksaSYmdShlLGkpJiZ0aGlzLnNldE1heFRpbWVGcm9tTWF4RGF0ZShpKX19c2V0Q3VycmVudFRpbWUoZSl7bGV0e2hvdXJzOnQsbWludXRlczppfT1lP28oZSk6dGhpczt0aGlzLmhvdXJzPWYodCx0aGlzLm1pbkhvdXJzLHRoaXMubWF4SG91cnMpLHRoaXMubWludXRlcz1mKGksdGhpcy5taW5NaW51dGVzLHRoaXMubWF4TWludXRlcyl9c2V0TWluTWF4VGltZUZyb21PcHRpb25zKCl7bGV0e21pbkhvdXJzOmUsbWluTWludXRlczp0LG1heEhvdXJzOmksbWF4TWludXRlczpzfT10aGlzLm9wdHM7dGhpcy5taW5Ib3Vycz1mKGUsMCwyMyksdGhpcy5taW5NaW51dGVzPWYodCwwLDU5KSx0aGlzLm1heEhvdXJzPWYoaSwwLDIzKSx0aGlzLm1heE1pbnV0ZXM9ZihzLDAsNTkpfXNldE1pblRpbWVGcm9tTWluRGF0ZShlKXtsZXR7bGFzdFNlbGVjdGVkRGF0ZTp0fT10aGlzLmRwO3RoaXMubWluSG91cnM9ZS5nZXRIb3VycygpLHQmJnQuZ2V0SG91cnMoKT5lLmdldEhvdXJzKCk/dGhpcy5taW5NaW51dGVzPXRoaXMub3B0cy5taW5NaW51dGVzOnRoaXMubWluTWludXRlcz1lLmdldE1pbnV0ZXMoKX1zZXRNYXhUaW1lRnJvbU1heERhdGUoZSl7bGV0e2xhc3RTZWxlY3RlZERhdGU6dH09dGhpcy5kcDt0aGlzLm1heEhvdXJzPWUuZ2V0SG91cnMoKSx0JiZ0LmdldEhvdXJzKCk8ZS5nZXRIb3VycygpP3RoaXMubWF4TWludXRlcz10aGlzLm9wdHMubWF4TWludXRlczp0aGlzLm1heE1pbnV0ZXM9ZS5nZXRNaW51dGVzKCl9Z2V0RGF5UGVyaW9kKGUsdCl7bGV0IGk9ZSxzPU51bWJlcihlKTtlIGluc3RhbmNlb2YgRGF0ZSYmKGk9byhlKSxzPU51bWJlcihpLmhvdXJzKSk7bGV0IGE9XCJhbVwiO2lmKHR8fHRoaXMuYW1wbSl7c3dpdGNoKCEwKXtjYXNlIDEyPT09czpjYXNlIHM+MTE6YT1cInBtXCJ9cz1zJTEyPT0wPzEyOnMlMTJ9cmV0dXJue2hvdXJzOnMsZGF5UGVyaW9kOmF9fXVwZGF0ZVNsaWRlcnMoKXtyKHRoaXMuJGhvdXJzLHttaW46dGhpcy5taW5Ib3VycyxtYXg6dGhpcy5tYXhIb3Vyc30pLnZhbHVlPXRoaXMuaG91cnMscih0aGlzLiRtaW51dGVzLHttaW46dGhpcy5taW5NaW51dGVzLG1heDp0aGlzLm1heE1pbnV0ZXN9KS52YWx1ZT10aGlzLm1pbnV0ZXN9dXBkYXRlVGV4dCgpe3RoaXMuJGhvdXJzVGV4dC5pbm5lckhUTUw9bCh0aGlzLmRpc3BsYXlIb3VycyksdGhpcy4kbWludXRlc1RleHQuaW5uZXJIVE1MPWwodGhpcy5taW51dGVzKSx0aGlzLmFtcG0mJih0aGlzLiRhbXBtLmlubmVySFRNTD10aGlzLmRheVBlcmlvZCl9c2V0IGhvdXJzKGUpe3RoaXMuX2hvdXJzPWU7bGV0e2hvdXJzOnQsZGF5UGVyaW9kOml9PXRoaXMuZ2V0RGF5UGVyaW9kKGUpO3RoaXMuZGlzcGxheUhvdXJzPXQsdGhpcy5kYXlQZXJpb2Q9aX1nZXQgaG91cnMoKXtyZXR1cm4gdGhpcy5faG91cnN9cmVuZGVyKCl7dGhpcy51cGRhdGVTbGlkZXJzKCksdGhpcy51cGRhdGVUZXh0KCl9fWZ1bmN0aW9uIE8oZSx0LGkpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWNsYXNzIEF7Y29uc3RydWN0b3IoZSl7bGV0e2RwOnQsb3B0czppfT1lO08odGhpcyxcInByZXNzZWRLZXlzXCIsbmV3IFNldCksTyh0aGlzLFwiaG90S2V5c1wiLG5ldyBNYXAoW1tbW1wiQ29udHJvbFwiLFwiQXJyb3dSaWdodFwiXSxbXCJDb250cm9sXCIsXCJBcnJvd1VwXCJdXSxlPT5lLm1vbnRoKytdLFtbW1wiQ29udHJvbFwiLFwiQXJyb3dMZWZ0XCJdLFtcIkNvbnRyb2xcIixcIkFycm93RG93blwiXV0sZT0+ZS5tb250aC0tXSxbW1tcIlNoaWZ0XCIsXCJBcnJvd1JpZ2h0XCJdLFtcIlNoaWZ0XCIsXCJBcnJvd1VwXCJdXSxlPT5lLnllYXIrK10sW1tbXCJTaGlmdFwiLFwiQXJyb3dMZWZ0XCJdLFtcIlNoaWZ0XCIsXCJBcnJvd0Rvd25cIl1dLGU9PmUueWVhci0tXSxbW1tcIkFsdFwiLFwiQXJyb3dSaWdodFwiXSxbXCJBbHRcIixcIkFycm93VXBcIl1dLGU9PmUueWVhcis9MTBdLFtbW1wiQWx0XCIsXCJBcnJvd0xlZnRcIl0sW1wiQWx0XCIsXCJBcnJvd0Rvd25cIl1dLGU9PmUueWVhci09MTBdLFtbXCJDb250cm9sXCIsXCJTaGlmdFwiLFwiQXJyb3dVcFwiXSwoZSx0KT0+dC51cCgpXV0pKSxPKHRoaXMsXCJoYW5kbGVIb3RLZXlcIiwoZT0+e2xldCB0PXRoaXMuaG90S2V5cy5nZXQoZSksaT1vKHRoaXMuZ2V0SW5pdGlhbEZvY3VzRGF0ZSgpKTt0KGksdGhpcy5kcCk7bGV0e3llYXI6cyxtb250aDphLGRhdGU6bn09aSxyPWgobmV3IERhdGUocyxhKSk7cjxuJiYobj1yKTtsZXQgbD10aGlzLmRwLmdldENsYW1wZWREYXRlKG5ldyBEYXRlKHMsYSxuKSk7dGhpcy5kcC5zZXRGb2N1c0RhdGUobCx7dmlld0RhdGVUcmFuc2l0aW9uOiEwfSl9KSksTyh0aGlzLFwiaXNIb3RLZXlQcmVzc2VkXCIsKCgpPT57bGV0IGU9ITEsdD10aGlzLnByZXNzZWRLZXlzLnNpemUsaT1lPT50aGlzLnByZXNzZWRLZXlzLmhhcyhlKTtmb3IobGV0W3Ndb2YgdGhpcy5ob3RLZXlzKXtpZihlKWJyZWFrO2lmKEFycmF5LmlzQXJyYXkoc1swXSkpcy5mb3JFYWNoKChhPT57ZXx8dCE9PWEubGVuZ3RofHwoZT1hLmV2ZXJ5KGkpJiZzKX0pKTtlbHNle2lmKHQhPT1zLmxlbmd0aCljb250aW51ZTtlPXMuZXZlcnkoaSkmJnN9fXJldHVybiBlfSkpLE8odGhpcyxcImlzQXJyb3dcIiwoZT0+ZT49MzcmJmU8PTQwKSksTyh0aGlzLFwib25LZXlEb3duXCIsKGU9PntsZXR7a2V5OnQsd2hpY2g6aX09ZSx7ZHA6cyxkcDp7Zm9jdXNEYXRlOmF9LG9wdHM6bn09dGhpczt0aGlzLnJlZ2lzdGVyS2V5KHQpO2xldCByPXRoaXMuaXNIb3RLZXlQcmVzc2VkKCk7aWYocilyZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdGhpcy5oYW5kbGVIb3RLZXkocik7aWYodGhpcy5pc0Fycm93KGkpKXJldHVybiBlLnByZXZlbnREZWZhdWx0KCksdm9pZCB0aGlzLmZvY3VzTmV4dENlbGwodCk7aWYoXCJFbnRlclwiPT09dCl7aWYocy5jdXJyZW50VmlldyE9PW4ubWluVmlldylyZXR1cm4gdm9pZCBzLmRvd24oKTtpZihhKXtsZXQgZT1zLl9jaGVja0lmRGF0ZUlzU2VsZWN0ZWQoYSk7cmV0dXJuIHZvaWQoZT9zLl9oYW5kbGVBbHJlYWR5U2VsZWN0ZWREYXRlcyhlLGEpOnMuc2VsZWN0RGF0ZShhKSl9fVwiRXNjYXBlXCI9PT10JiZ0aGlzLmRwLmhpZGUoKX0pKSxPKHRoaXMsXCJvbktleVVwXCIsKGU9Pnt0aGlzLnJlbW92ZUtleShlLmtleSl9KSksdGhpcy5kcD10LHRoaXMub3B0cz1pLHRoaXMuaW5pdCgpfWluaXQoKXt0aGlzLmJpbmRLZXlib2FyZEV2ZW50cygpfWJpbmRLZXlib2FyZEV2ZW50cygpe2xldHskZWw6ZX09dGhpcy5kcDtlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5vbktleURvd24pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5vbktleVVwKX1kZXN0cm95KCl7bGV0eyRlbDplfT10aGlzLmRwO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLm9uS2V5RG93biksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLm9uS2V5VXApLHRoaXMuaG90S2V5cz1udWxsLHRoaXMucHJlc3NlZEtleXM9bnVsbH1nZXRJbml0aWFsRm9jdXNEYXRlKCl7bGV0e2ZvY3VzRGF0ZTplLGN1cnJlbnRWaWV3OnQsc2VsZWN0ZWREYXRlczpzLHBhcnNlZFZpZXdEYXRlOnt5ZWFyOmEsbW9udGg6bn19PXRoaXMuZHAscj1lfHxzW3MubGVuZ3RoLTFdO2lmKCFyKXN3aXRjaCh0KXtjYXNlIGkuZGF5czpyPW5ldyBEYXRlKGEsbiwobmV3IERhdGUpLmdldERhdGUoKSk7YnJlYWs7Y2FzZSBpLm1vbnRoczpyPW5ldyBEYXRlKGEsbiwxKTticmVhaztjYXNlIGkueWVhcnM6cj1uZXcgRGF0ZShhLDAsMSl9cmV0dXJuIHJ9Zm9jdXNOZXh0Q2VsbChlKXtsZXQgdD10aGlzLmdldEluaXRpYWxGb2N1c0RhdGUoKSx7Y3VycmVudFZpZXc6c309dGhpcy5kcCx7ZGF5czphLG1vbnRoczpuLHllYXJzOnJ9PWksaD1vKHQpLGw9aC55ZWFyLGQ9aC5tb250aCxjPWguZGF0ZTtzd2l0Y2goZSl7Y2FzZVwiQXJyb3dMZWZ0XCI6cz09PWEmJihjLT0xKSxzPT09biYmKGQtPTEpLHM9PT1yJiYobC09MSk7YnJlYWs7Y2FzZVwiQXJyb3dVcFwiOnM9PT1hJiYoYy09Nykscz09PW4mJihkLT0zKSxzPT09ciYmKGwtPTQpO2JyZWFrO2Nhc2VcIkFycm93UmlnaHRcIjpzPT09YSYmKGMrPTEpLHM9PT1uJiYoZCs9MSkscz09PXImJihsKz0xKTticmVhaztjYXNlXCJBcnJvd0Rvd25cIjpzPT09YSYmKGMrPTcpLHM9PT1uJiYoZCs9Mykscz09PXImJihsKz00KX1sZXQgdT10aGlzLmRwLmdldENsYW1wZWREYXRlKG5ldyBEYXRlKGwsZCxjKSk7dGhpcy5kcC5zZXRGb2N1c0RhdGUodSx7dmlld0RhdGVUcmFuc2l0aW9uOiEwfSl9cmVnaXN0ZXJLZXkoZSl7dGhpcy5wcmVzc2VkS2V5cy5hZGQoZSl9cmVtb3ZlS2V5KGUpe3RoaXMucHJlc3NlZEtleXMuZGVsZXRlKGUpfX1sZXQgRT17b24oZSx0KXt0aGlzLl9fZXZlbnRzfHwodGhpcy5fX2V2ZW50cz17fSksdGhpcy5fX2V2ZW50c1tlXT90aGlzLl9fZXZlbnRzW2VdLnB1c2godCk6dGhpcy5fX2V2ZW50c1tlXT1bdF19LG9mZihlLHQpe3RoaXMuX19ldmVudHMmJnRoaXMuX19ldmVudHNbZV0mJih0aGlzLl9fZXZlbnRzW2VdPXRoaXMuX19ldmVudHNbZV0uZmlsdGVyKChlPT5lIT09dCkpKX0scmVtb3ZlQWxsRXZlbnRzKCl7dGhpcy5fX2V2ZW50cz17fX0sdHJpZ2dlcihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheSh0PjE/dC0xOjApLHM9MTtzPHQ7cysrKWlbcy0xXT1hcmd1bWVudHNbc107dGhpcy5fX2V2ZW50cyYmdGhpcy5fX2V2ZW50c1tlXSYmdGhpcy5fX2V2ZW50c1tlXS5mb3JFYWNoKChlPT57ZSguLi5pKX0pKX19O2Z1bmN0aW9uIE4oZSx0LGkpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09aSxlfWxldCBJPVwiXCIsUj1cIlwiLFA9XCJcIixCPSExO2NsYXNzIEt7Y29uc3RydWN0b3IoZSx0KXt2YXIgcj10aGlzO2lmKE4odGhpcyxcInZpZXdJbmRleGVzXCIsW2kuZGF5cyxpLm1vbnRocyxpLnllYXJzXSksTih0aGlzLFwibmV4dFwiLCgoKT0+e2xldHt5ZWFyOmUsbW9udGg6dH09dGhpcy5wYXJzZWRWaWV3RGF0ZTtzd2l0Y2godGhpcy5jdXJyZW50Vmlldyl7Y2FzZSBpLmRheXM6dGhpcy5zZXRWaWV3RGF0ZShuZXcgRGF0ZShlLHQrMSwxKSk7YnJlYWs7Y2FzZSBpLm1vbnRoczp0aGlzLnNldFZpZXdEYXRlKG5ldyBEYXRlKGUrMSx0LDEpKTticmVhaztjYXNlIGkueWVhcnM6dGhpcy5zZXRWaWV3RGF0ZShuZXcgRGF0ZShlKzEwLDAsMSkpfX0pKSxOKHRoaXMsXCJwcmV2XCIsKCgpPT57bGV0e3llYXI6ZSxtb250aDp0fT10aGlzLnBhcnNlZFZpZXdEYXRlO3N3aXRjaCh0aGlzLmN1cnJlbnRWaWV3KXtjYXNlIGkuZGF5czp0aGlzLnNldFZpZXdEYXRlKG5ldyBEYXRlKGUsdC0xLDEpKTticmVhaztjYXNlIGkubW9udGhzOnRoaXMuc2V0Vmlld0RhdGUobmV3IERhdGUoZS0xLHQsMSkpO2JyZWFrO2Nhc2UgaS55ZWFyczp0aGlzLnNldFZpZXdEYXRlKG5ldyBEYXRlKGUtMTAsMCwxKSl9fSkpLE4odGhpcyxcIl9maW5pc2hIaWRlXCIsKCgpPT57dGhpcy5oaWRlQW5pbWF0aW9uPSExLHRoaXMuX2Rlc3Ryb3lDb21wb25lbnRzKCksdGhpcy4kY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuJGRhdGVwaWNrZXIpfSkpLE4odGhpcyxcInNldFBvc2l0aW9uXCIsKGZ1bmN0aW9uKGUpe2xldCB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YoZT1lfHxyLm9wdHMucG9zaXRpb24pKXJldHVybiB2b2lkKHIuY3VzdG9tSGlkZT1lKHskZGF0ZXBpY2tlcjpyLiRkYXRlcGlja2VyLCR0YXJnZXQ6ci4kZWwsJHBvaW50ZXI6ci4kcG9pbnRlcixpc1ZpZXdDaGFuZ2U6dCxkb25lOnIuX2ZpbmlzaEhpZGV9KSk7bGV0IGkscyx7aXNNb2JpbGU6YX09ci5vcHRzLG49ci4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaD1yLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPXIuJGRhdGVwaWNrZXIub2Zmc2V0UGFyZW50LGw9ci4kZWwub2Zmc2V0UGFyZW50LGQ9ci4kZGF0ZXBpY2tlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPWUuc3BsaXQoXCIgXCIpLHU9d2luZG93LnNjcm9sbFkscD13aW5kb3cuc2Nyb2xsWCxtPXIub3B0cy5vZmZzZXQsZz1jWzBdLEQ9Y1sxXTtpZihhKXIuJGRhdGVwaWNrZXIuc3R5bGUuY3NzVGV4dD1cImxlZnQ6IDUwJTsgdG9wOiA1MCVcIjtlbHNle2lmKG89PT1sJiZvIT09ZG9jdW1lbnQuYm9keSYmKGg9e3RvcDpyLiRlbC5vZmZzZXRUb3AsbGVmdDpyLiRlbC5vZmZzZXRMZWZ0LHdpZHRoOm4ud2lkdGgsaGVpZ2h0OnIuJGVsLm9mZnNldEhlaWdodH0sdT0wLHA9MCksbyE9PWwmJm8hPT1kb2N1bWVudC5ib2R5KXtsZXQgZT1vLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2g9e3RvcDpuLnRvcC1lLnRvcCxsZWZ0Om4ubGVmdC1lLmxlZnQsd2lkdGg6bi53aWR0aCxoZWlnaHQ6bi5oZWlnaHR9LHU9MCxwPTB9c3dpdGNoKGcpe2Nhc2VcInRvcFwiOmk9aC50b3AtZC5oZWlnaHQtbTticmVhaztjYXNlXCJyaWdodFwiOnM9aC5sZWZ0K2gud2lkdGgrbTticmVhaztjYXNlXCJib3R0b21cIjppPWgudG9wK2guaGVpZ2h0K207YnJlYWs7Y2FzZVwibGVmdFwiOnM9aC5sZWZ0LWQud2lkdGgtbX1zd2l0Y2goRCl7Y2FzZVwidG9wXCI6aT1oLnRvcDticmVhaztjYXNlXCJyaWdodFwiOnM9aC5sZWZ0K2gud2lkdGgtZC53aWR0aDticmVhaztjYXNlXCJib3R0b21cIjppPWgudG9wK2guaGVpZ2h0LWQuaGVpZ2h0O2JyZWFrO2Nhc2VcImxlZnRcIjpzPWgubGVmdDticmVhaztjYXNlXCJjZW50ZXJcIjovbGVmdHxyaWdodC8udGVzdChnKT9pPWgudG9wK2guaGVpZ2h0LzItZC5oZWlnaHQvMjpzPWgubGVmdCtoLndpZHRoLzItZC53aWR0aC8yfXIuJGRhdGVwaWNrZXIuc3R5bGUuY3NzVGV4dD1cImxlZnQ6IFwiLmNvbmNhdChzK3AsXCJweDsgdG9wOiBcIikuY29uY2F0KGkrdSxcInB4XCIpfX0pKSxOKHRoaXMsXCJfc2V0SW5wdXRWYWx1ZVwiLCgoKT0+e2xldHtvcHRzOmUsJGFsdEZpZWxkOnQsbG9jYWxlOntkYXRlRm9ybWF0Oml9fT10aGlzLHthbHRGaWVsZERhdGVGb3JtYXQ6cyxhbHRGaWVsZDphfT1lO2EmJnQmJih0LnZhbHVlPXRoaXMuX2dldElucHV0VmFsdWUocykpLHRoaXMuJGVsLnZhbHVlPXRoaXMuX2dldElucHV0VmFsdWUoaSl9KSksTih0aGlzLFwiX2dldElucHV0VmFsdWVcIiwoZT0+e2xldHtzZWxlY3RlZERhdGVzOnQsb3B0czppfT10aGlzLHttdWx0aXBsZURhdGVzOnMsbXVsdGlwbGVEYXRlc1NlcGFyYXRvcjphfT1pO2lmKCF0Lmxlbmd0aClyZXR1cm5cIlwiO2xldCBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUscj1uP2Uocz90OnRbMF0pOnQubWFwKCh0PT50aGlzLmZvcm1hdERhdGUodCxlKSkpO3JldHVybiByPW4/cjpyLmpvaW4oYSkscn0pKSxOKHRoaXMsXCJfY2hlY2tJZkRhdGVJc1NlbGVjdGVkXCIsKGZ1bmN0aW9uKGUpe2xldCB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTppLmRheXMscz0hMTtyZXR1cm4gci5zZWxlY3RlZERhdGVzLnNvbWUoKGk9PntsZXQgYT11KGUsaSx0KTtyZXR1cm4gcz1hJiZpLGF9KSksc30pKSxOKHRoaXMsXCJfc2NoZWR1bGVDYWxsQWZ0ZXJUcmFuc2l0aW9uXCIsKGU9Pnt0aGlzLl9jYW5jZWxTY2hlZHVsZWRDYWxsKCksZSYmZSghMSksdGhpcy5fb25UcmFuc2l0aW9uRW5kPSgpPT57ZSYmZSghMCl9LHRoaXMuJGRhdGVwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIix0aGlzLl9vblRyYW5zaXRpb25FbmQse29uY2U6ITB9KX0pKSxOKHRoaXMsXCJfY2FuY2VsU2NoZWR1bGVkQ2FsbFwiLCgoKT0+e3RoaXMuJGRhdGVwaWNrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIix0aGlzLl9vblRyYW5zaXRpb25FbmQpfSkpLE4odGhpcyxcInNldFZpZXdEYXRlXCIsKGU9PntpZighKChlPWIoZSkpaW5zdGFuY2VvZiBEYXRlKSlyZXR1cm47aWYodShlLHRoaXMudmlld0RhdGUpKXJldHVybjtsZXQgdD10aGlzLnZpZXdEYXRlO3RoaXMudmlld0RhdGU9ZTtsZXR7b25DaGFuZ2VWaWV3RGF0ZTpzfT10aGlzLm9wdHM7aWYocyl7bGV0e21vbnRoOmUseWVhcjp0fT10aGlzLnBhcnNlZFZpZXdEYXRlO3Moe21vbnRoOmUseWVhcjp0LGRlY2FkZTp0aGlzLmN1ckRlY2FkZX0pfXRoaXMudHJpZ2dlcihpLmV2ZW50Q2hhbmdlVmlld0RhdGUsZSx0KX0pKSxOKHRoaXMsXCJzZXRGb2N1c0RhdGVcIiwoZnVuY3Rpb24oZSl7bGV0IHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9OyghZXx8KGU9YihlKSlpbnN0YW5jZW9mIERhdGUpJiYoci5mb2N1c0RhdGU9ZSxyLm9wdHMucmFuZ2UmJmUmJnIuX2hhbmRsZVJhbmdlT25Gb2N1cygpLHIudHJpZ2dlcihpLmV2ZW50Q2hhbmdlRm9jdXNEYXRlLGUsdCkpfSkpLE4odGhpcyxcInNldEN1cnJlbnRWaWV3XCIsKGU9PntpZih0aGlzLnZpZXdJbmRleGVzLmluY2x1ZGVzKGUpKXtpZih0aGlzLmN1cnJlbnRWaWV3PWUsdGhpcy5lbElzSW5wdXQmJnRoaXMudmlzaWJsZSYmdGhpcy5zZXRQb3NpdGlvbih2b2lkIDAsITApLHRoaXMudHJpZ2dlcihpLmV2ZW50Q2hhbmdlQ3VycmVudFZpZXcsZSksIXRoaXMudmlld3NbZV0pe2xldCB0PXRoaXMudmlld3NbZV09bmV3IFMoe2RwOnRoaXMsb3B0czp0aGlzLm9wdHMsdHlwZTplfSk7dGhpcy5zaG91bGRVcGRhdGVET00mJnRoaXMuJGNvbnRlbnQuYXBwZW5kQ2hpbGQodC4kZWwpfXRoaXMub3B0cy5vbkNoYW5nZVZpZXcmJnRoaXMub3B0cy5vbkNoYW5nZVZpZXcoZSl9fSkpLE4odGhpcyxcIl91cGRhdGVMYXN0U2VsZWN0ZWREYXRlXCIsKGU9Pnt0aGlzLmxhc3RTZWxlY3RlZERhdGU9ZSx0aGlzLnRyaWdnZXIoaS5ldmVudENoYW5nZUxhc3RTZWxlY3RlZERhdGUsZSl9KSksTih0aGlzLFwiZGVzdHJveVwiLCgoKT0+e2xldHtzaG93RXZlbnQ6ZSxpc01vYmlsZTp0fT10aGlzLm9wdHMsaT10aGlzLiRkYXRlcGlja2VyLnBhcmVudE5vZGU7aSYmaS5yZW1vdmVDaGlsZCh0aGlzLiRkYXRlcGlja2VyKSx0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsdGhpcy5fb25Gb2N1cyksdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLl9vbkJsdXIpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fb25SZXNpemUpLHQmJnRoaXMuX3JlbW92ZU1vYmlsZUF0dHJpYnV0ZXMoKSx0aGlzLmtleWJvYXJkTmF2JiZ0aGlzLmtleWJvYXJkTmF2LmRlc3Ryb3koKSx0aGlzLnZpZXdzPW51bGwsdGhpcy5uYXY9bnVsbCx0aGlzLiRkYXRlcGlja2VyPW51bGwsdGhpcy5vcHRzPW51bGwsdGhpcy4kY3VzdG9tQ29udGFpbmVyPW51bGwsdGhpcy52aWV3RGF0ZT1udWxsLHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy5zZWxlY3RlZERhdGVzPW51bGwsdGhpcy5yYW5nZURhdGVGcm9tPW51bGwsdGhpcy5yYW5nZURhdGVUbz1udWxsfSkpLE4odGhpcyxcInVwZGF0ZVwiLChlPT57bGV0IHQ9dyh7fSx0aGlzLm9wdHMpO3codGhpcy5vcHRzLGUpO2xldHt0aW1lcGlja2VyOnMsYnV0dG9uczphLHJhbmdlOm4sc2VsZWN0ZWREYXRlczpyLGlzTW9iaWxlOmh9PXRoaXMub3B0cyxvPXRoaXMudmlzaWJsZXx8dGhpcy50cmVhdEFzSW5saW5lO3RoaXMuX2NyZWF0ZU1pbk1heERhdGVzKCksdGhpcy5fbGltaXRWaWV3RGF0ZUJ5TWF4TWluRGF0ZXMoKSx0aGlzLl9oYW5kbGVMb2NhbGUoKSwhdC5zZWxlY3RlZERhdGVzJiZyJiZ0aGlzLnNlbGVjdERhdGUociksZS52aWV3JiZ0aGlzLnNldEN1cnJlbnRWaWV3KGUudmlldyksdGhpcy5fc2V0SW5wdXRWYWx1ZSgpLHQucmFuZ2UmJiFuPyh0aGlzLnJhbmdlRGF0ZVRvPSExLHRoaXMucmFuZ2VEYXRlRnJvbT0hMSk6IXQucmFuZ2UmJm4mJnRoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJih0aGlzLnJhbmdlRGF0ZUZyb209dGhpcy5zZWxlY3RlZERhdGVzWzBdLHRoaXMucmFuZ2VEYXRlVG89dGhpcy5zZWxlY3RlZERhdGVzWzFdKSx0LnRpbWVwaWNrZXImJiFzPyhvJiZ0aGlzLnRpbWVwaWNrZXIuZGVzdHJveSgpLHRoaXMudGltZXBpY2tlcj0hMSx0aGlzLiR0aW1lcGlja2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kdGltZXBpY2tlcikpOiF0LnRpbWVwaWNrZXImJnMmJnRoaXMuX2FkZFRpbWVwaWNrZXIoKSwhdC5idXR0b25zJiZhP3RoaXMuX2FkZEJ1dHRvbnMoKTp0LmJ1dHRvbnMmJiFhPyh0aGlzLmJ1dHRvbnMuZGVzdHJveSgpLHRoaXMuJGJ1dHRvbnMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRidXR0b25zKSk6byYmdC5idXR0b25zJiZhJiZ0aGlzLmJ1dHRvbnMuY2xlYXJIdG1sKCkucmVuZGVyKCksIXQuaXNNb2JpbGUmJmg/KHRoaXMudHJlYXRBc0lubGluZXx8UHx8dGhpcy5fY3JlYXRlTW9iaWxlT3ZlcmxheSgpLHRoaXMuX2FkZE1vYmlsZUF0dHJpYnV0ZXMoKSx0aGlzLnZpc2libGUmJnRoaXMuX3Nob3dNb2JpbGVPdmVybGF5KCkpOnQuaXNNb2JpbGUmJiFoJiYodGhpcy5fcmVtb3ZlTW9iaWxlQXR0cmlidXRlcygpLHRoaXMudmlzaWJsZSYmKFAuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmUtXCIpLFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXMub3B0cy5wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbigpKSksbyYmKHRoaXMubmF2LnVwZGF0ZSgpLHRoaXMudmlld3NbdGhpcy5jdXJyZW50Vmlld10ucmVuZGVyKCksdGhpcy5jdXJyZW50Vmlldz09PWkuZGF5cyYmdGhpcy52aWV3c1t0aGlzLmN1cnJlbnRWaWV3XS5yZW5kZXJEYXlOYW1lcygpKX0pKSxOKHRoaXMsXCJpc090aGVyTW9udGhcIiwoZT0+e2xldHttb250aDp0fT1vKGUpO3JldHVybiB0IT09dGhpcy5wYXJzZWRWaWV3RGF0ZS5tb250aH0pKSxOKHRoaXMsXCJpc090aGVyWWVhclwiLChlPT57bGV0e3llYXI6dH09byhlKTtyZXR1cm4gdCE9PXRoaXMucGFyc2VkVmlld0RhdGUueWVhcn0pKSxOKHRoaXMsXCJpc090aGVyRGVjYWRlXCIsKGU9PntsZXR7eWVhcjp0fT1vKGUpLFtpLHNdPWQodGhpcy52aWV3RGF0ZSk7cmV0dXJuIHQ8aXx8dD5zfSkpLE4odGhpcyxcIl9vbkNoYW5nZVNlbGVjdGVkRGF0ZVwiLChlPT57bGV0e3NpbGVudDp0fT1lO3NldFRpbWVvdXQoKCgpPT57dGhpcy5fc2V0SW5wdXRWYWx1ZSgpLHRoaXMub3B0cy5vblNlbGVjdCYmIXQmJnRoaXMuX3RyaWdnZXJPblNlbGVjdCgpfSkpfSkpLE4odGhpcyxcIl9vbkNoYW5nZUZvY3VzZWREYXRlXCIsKGZ1bmN0aW9uKGUpe2xldHt2aWV3RGF0ZVRyYW5zaXRpb246dH09YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O2lmKCFlKXJldHVybjtsZXQgaT0hMTt0JiYoaT1yLmlzT3RoZXJNb250aChlKXx8ci5pc090aGVyWWVhcihlKXx8ci5pc090aGVyRGVjYWRlKGUpKSxpJiZyLnNldFZpZXdEYXRlKGUpfSkpLE4odGhpcyxcIl9vbkNoYW5nZVRpbWVcIiwoZT0+e2xldHtob3Vyczp0LG1pbnV0ZXM6aX09ZSxzPW5ldyBEYXRlLHtsYXN0U2VsZWN0ZWREYXRlOmEsb3B0czp7b25TZWxlY3Q6bn19PXRoaXMscj1hO2F8fChyPXMpO2xldCBoPXRoaXMuZ2V0Q2VsbChyLHRoaXMuY3VycmVudFZpZXdTaW5ndWxhciksbz1oJiZoLmFkcENlbGw7byYmby5pc0Rpc2FibGVkfHwoci5zZXRIb3Vycyh0KSxyLnNldE1pbnV0ZXMoaSksYT8odGhpcy5fc2V0SW5wdXRWYWx1ZSgpLG4mJnRoaXMuX3RyaWdnZXJPblNlbGVjdCgpKTp0aGlzLnNlbGVjdERhdGUocikpfSkpLE4odGhpcyxcIl9vbkZvY3VzXCIsKGU9Pnt0aGlzLnZpc2libGV8fHRoaXMuc2hvdygpfSkpLE4odGhpcyxcIl9vbkJsdXJcIiwoZT0+e3RoaXMuaW5Gb2N1c3x8IXRoaXMudmlzaWJsZXx8dGhpcy5vcHRzLmlzTW9iaWxlfHx0aGlzLmhpZGUoKX0pKSxOKHRoaXMsXCJfb25Nb3VzZURvd25cIiwoZT0+e3RoaXMuaW5Gb2N1cz0hMH0pKSxOKHRoaXMsXCJfb25Nb3VzZVVwXCIsKGU9Pnt0aGlzLmluRm9jdXM9ITEsdGhpcy4kZWwuZm9jdXMoKX0pKSxOKHRoaXMsXCJfb25SZXNpemVcIiwoKCk9Pnt0aGlzLnZpc2libGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXMub3B0cy5wb3NpdGlvbiYmdGhpcy5zZXRQb3NpdGlvbigpfSkpLE4odGhpcyxcIl9vbkNsaWNrT3ZlcmxheVwiLCgoKT0+e3RoaXMudmlzaWJsZSYmdGhpcy5oaWRlKCl9KSksTih0aGlzLFwiaXNXZWVrZW5kXCIsKGU9PnRoaXMub3B0cy53ZWVrZW5kcy5pbmNsdWRlcyhlKSkpLE4odGhpcyxcImdldENsYW1wZWREYXRlXCIsKGU9PntsZXR7bWluRGF0ZTp0LG1heERhdGU6aX09dGhpcyxzPWU7cmV0dXJuIGkmJnAoZSxpKT9zPWk6dCYmbShlLHQpJiYocz10KSxzfSkpLHRoaXMuJGVsPWEoZSksIXRoaXMuJGVsKXJldHVybjt0aGlzLiRkYXRlcGlja2VyPW4oe2NsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyXCJ9KSx0aGlzLm9wdHM9dyh7fSxzLHQpLHRoaXMuJGN1c3RvbUNvbnRhaW5lcj0hIXRoaXMub3B0cy5jb250YWluZXImJmEodGhpcy5vcHRzLmNvbnRhaW5lciksdGhpcy4kYWx0RmllbGQ9YSh0aGlzLm9wdHMuYWx0RmllbGR8fCExKSxJfHwoST1hKFwiYm9keVwiKSk7bGV0e3ZpZXc6aCxzdGFydERhdGU6bH09dGhpcy5vcHRzO2x8fCh0aGlzLm9wdHMuc3RhcnREYXRlPW5ldyBEYXRlKSxcIklOUFVUXCI9PT10aGlzLiRlbC5ub2RlTmFtZSYmKHRoaXMuZWxJc0lucHV0PSEwKSx0aGlzLmluaXRlZD0hMSx0aGlzLnZpc2libGU9ITEsdGhpcy52aWV3RGF0ZT1iKHRoaXMub3B0cy5zdGFydERhdGUpLHRoaXMuZm9jdXNEYXRlPSExLHRoaXMuaW5pdGlhbFJlYWRvbmx5PXRoaXMuJGVsLmdldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIpLHRoaXMuY3VzdG9tSGlkZT0hMSx0aGlzLmN1cnJlbnRWaWV3PWgsdGhpcy5zZWxlY3RlZERhdGVzPVtdLHRoaXMudmlld3M9e30sdGhpcy5rZXlzPVtdLHRoaXMucmFuZ2VEYXRlRnJvbT1cIlwiLHRoaXMucmFuZ2VEYXRlVG89XCJcIix0aGlzLnRpbWVwaWNrZXJJc0FjdGl2ZT0hMSx0aGlzLnRyZWF0QXNJbmxpbmU9dGhpcy5vcHRzLmlubGluZXx8IXRoaXMuZWxJc0lucHV0LHRoaXMuaW5pdCgpfWluaXQoKXtsZXR7b3B0czplLHRyZWF0QXNJbmxpbmU6dCxvcHRzOntpbmxpbmU6aSxpc01vYmlsZTpzLHNlbGVjdGVkRGF0ZXM6YSxrZXlib2FyZE5hdjpyLG9ubHlUaW1lcGlja2VyOmh9fT10aGlzO3ZhciBvO0J8fGl8fCF0aGlzLmVsSXNJbnB1dHx8KEI9ITAsUj1uKHtjbGFzc05hbWU6bz1LLmRlZmF1bHRDb250YWluZXJJZCxpZDpvfSksSS5hcHBlbmRDaGlsZChSKSksIXN8fFB8fHR8fHRoaXMuX2NyZWF0ZU1vYmlsZU92ZXJsYXkoKSx0aGlzLl9oYW5kbGVMb2NhbGUoKSx0aGlzLl9iaW5kU3ViRXZlbnRzKCksdGhpcy5fY3JlYXRlTWluTWF4RGF0ZXMoKSx0aGlzLl9saW1pdFZpZXdEYXRlQnlNYXhNaW5EYXRlcygpLHRoaXMuZWxJc0lucHV0JiYoaXx8dGhpcy5fYmluZEV2ZW50cygpLHImJiFoJiYodGhpcy5rZXlib2FyZE5hdj1uZXcgQSh7ZHA6dGhpcyxvcHRzOmV9KSkpLGEmJnRoaXMuc2VsZWN0RGF0ZShhLHtzaWxlbnQ6ITB9KSx0aGlzLm9wdHMudmlzaWJsZSYmIXQmJnRoaXMuc2hvdygpLHMmJiF0JiZ0aGlzLiRlbC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCEwKSx0JiZ0aGlzLl9jcmVhdGVDb21wb25lbnRzKCl9X2NyZWF0ZU1vYmlsZU92ZXJsYXkoKXtQPW4oe2NsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyLW92ZXJsYXlcIn0pLFIuYXBwZW5kQ2hpbGQoUCl9X2NyZWF0ZUNvbXBvbmVudHMoKXtsZXR7b3B0czplLHRyZWF0QXNJbmxpbmU6dCxvcHRzOntpbmxpbmU6aSxidXR0b25zOnMsdGltZXBpY2tlcjphLHBvc2l0aW9uOm4sY2xhc3NlczpyLG9ubHlUaW1lcGlja2VyOmgsaXNNb2JpbGU6b319PXRoaXM7dGhpcy5fYnVpbGRCYXNlSHRtbCgpLHRoaXMuZWxJc0lucHV0JiYoaXx8dGhpcy5fc2V0UG9zaXRpb25DbGFzc2VzKG4pKSwhaSYmdGhpcy5lbElzSW5wdXR8fHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZChcIi1pbmxpbmUtXCIpLHImJnRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZCguLi5yLnNwbGl0KFwiIFwiKSksaCYmdGhpcy4kZGF0ZXBpY2tlci5jbGFzc0xpc3QuYWRkKFwiLW9ubHktdGltZXBpY2tlci1cIiksbyYmIXQmJnRoaXMuX2FkZE1vYmlsZUF0dHJpYnV0ZXMoKSx0aGlzLnZpZXdzW3RoaXMuY3VycmVudFZpZXddPW5ldyBTKHtkcDp0aGlzLHR5cGU6dGhpcy5jdXJyZW50VmlldyxvcHRzOmV9KSx0aGlzLm5hdj1uZXcgRih7ZHA6dGhpcyxvcHRzOmV9KSxhJiZ0aGlzLl9hZGRUaW1lcGlja2VyKCkscyYmdGhpcy5fYWRkQnV0dG9ucygpLHRoaXMuJGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy52aWV3c1t0aGlzLmN1cnJlbnRWaWV3XS4kZWwpLHRoaXMuJG5hdi5hcHBlbmRDaGlsZCh0aGlzLm5hdi4kZWwpfV9kZXN0cm95Q29tcG9uZW50cygpe2ZvcihsZXQgZSBpbiB0aGlzLnZpZXdzKXRoaXMudmlld3NbZV0uZGVzdHJveSgpO3RoaXMudmlld3M9e30sdGhpcy5uYXYuZGVzdHJveSgpLHRoaXMudGltZXBpY2tlciYmdGhpcy50aW1lcGlja2VyLmRlc3Ryb3koKX1fYWRkTW9iaWxlQXR0cmlidXRlcygpe1AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fb25DbGlja092ZXJsYXkpLHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZChcIi1pcy1tb2JpbGUtXCIpLHRoaXMuJGVsLnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsITApfV9yZW1vdmVNb2JpbGVBdHRyaWJ1dGVzKCl7UC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLl9vbkNsaWNrT3ZlcmxheSksdGhpcy4kZGF0ZXBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKFwiLWlzLW1vYmlsZS1cIiksdGhpcy5pbml0aWFsUmVhZG9ubHl8fFwiXCI9PT10aGlzLmluaXRpYWxSZWFkb25seXx8dGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIil9X2NyZWF0ZU1pbk1heERhdGVzKCl7bGV0e21pbkRhdGU6ZSxtYXhEYXRlOnR9PXRoaXMub3B0czt0aGlzLm1pbkRhdGU9ISFlJiZiKGUpLHRoaXMubWF4RGF0ZT0hIXQmJmIodCl9X2FkZFRpbWVwaWNrZXIoKXt0aGlzLiR0aW1lcGlja2VyPW4oe2NsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyLS10aW1lXCJ9KSx0aGlzLiRkYXRlcGlja2VyLmFwcGVuZENoaWxkKHRoaXMuJHRpbWVwaWNrZXIpLHRoaXMudGltZXBpY2tlcj1uZXcgTCh7ZHA6dGhpcyxvcHRzOnRoaXMub3B0c30pLHRoaXMuJHRpbWVwaWNrZXIuYXBwZW5kQ2hpbGQodGhpcy50aW1lcGlja2VyLiRlbCl9X2FkZEJ1dHRvbnMoKXt0aGlzLiRidXR0b25zPW4oe2NsYXNzTmFtZTpcImFpci1kYXRlcGlja2VyLS1idXR0b25zXCJ9KSx0aGlzLiRkYXRlcGlja2VyLmFwcGVuZENoaWxkKHRoaXMuJGJ1dHRvbnMpLHRoaXMuYnV0dG9ucz1uZXcgeCh7ZHA6dGhpcyxvcHRzOnRoaXMub3B0c30pLHRoaXMuJGJ1dHRvbnMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25zLiRlbCl9X2JpbmRTdWJFdmVudHMoKXt0aGlzLm9uKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUsdGhpcy5fb25DaGFuZ2VTZWxlY3RlZERhdGUpLHRoaXMub24oaS5ldmVudENoYW5nZUZvY3VzRGF0ZSx0aGlzLl9vbkNoYW5nZUZvY3VzZWREYXRlKSx0aGlzLm9uKGkuZXZlbnRDaGFuZ2VUaW1lLHRoaXMuX29uQ2hhbmdlVGltZSl9X2J1aWxkQmFzZUh0bWwoKXtsZXR7aW5saW5lOmV9PXRoaXMub3B0czt2YXIgdCxpO3RoaXMuZWxJc0lucHV0P2U/KHQ9dGhpcy4kZGF0ZXBpY2tlciwoaT10aGlzLiRlbCkucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxpLm5leHRTaWJsaW5nKSk6dGhpcy4kY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJGRhdGVwaWNrZXIpOnRoaXMuJGVsLmFwcGVuZENoaWxkKHRoaXMuJGRhdGVwaWNrZXIpLHRoaXMuJGRhdGVwaWNrZXIuaW5uZXJIVE1MPSc8aSBjbGFzcz1cImFpci1kYXRlcGlja2VyLS1wb2ludGVyXCI+PC9pPjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci0tbmF2aWdhdGlvblwiPjwvZGl2PjxkaXYgY2xhc3M9XCJhaXItZGF0ZXBpY2tlci0tY29udGVudFwiPjwvZGl2PicsdGhpcy4kY29udGVudD1hKFwiLmFpci1kYXRlcGlja2VyLS1jb250ZW50XCIsdGhpcy4kZGF0ZXBpY2tlciksdGhpcy4kcG9pbnRlcj1hKFwiLmFpci1kYXRlcGlja2VyLS1wb2ludGVyXCIsdGhpcy4kZGF0ZXBpY2tlciksdGhpcy4kbmF2PWEoXCIuYWlyLWRhdGVwaWNrZXItLW5hdmlnYXRpb25cIix0aGlzLiRkYXRlcGlja2VyKX1faGFuZGxlTG9jYWxlKCl7bGV0e2xvY2FsZTplLGRhdGVGb3JtYXQ6dCxmaXJzdERheTppLHRpbWVwaWNrZXI6cyxvbmx5VGltZXBpY2tlcjphLHRpbWVGb3JtYXQ6bixkYXRlVGltZVNlcGFyYXRvcjpyfT10aGlzLm9wdHM7dmFyIGg7dGhpcy5sb2NhbGU9KGg9ZSxKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGgpKSksdCYmKHRoaXMubG9jYWxlLmRhdGVGb3JtYXQ9dCksdm9pZCAwIT09biYmXCJcIiE9PW4mJih0aGlzLmxvY2FsZS50aW1lRm9ybWF0PW4pO2xldHt0aW1lRm9ybWF0Om99PXRoaXMubG9jYWxlO2lmKFwiXCIhPT1pJiYodGhpcy5sb2NhbGUuZmlyc3REYXk9aSkscyYmXCJmdW5jdGlvblwiIT10eXBlb2YgdCl7bGV0IGU9bz9yOlwiXCI7dGhpcy5sb2NhbGUuZGF0ZUZvcm1hdD1bdGhpcy5sb2NhbGUuZGF0ZUZvcm1hdCxvfHxcIlwiXS5qb2luKGUpfWEmJih0aGlzLmxvY2FsZS5kYXRlRm9ybWF0PXRoaXMubG9jYWxlLnRpbWVGb3JtYXQpfV9zZXRQb3NpdGlvbkNsYXNzZXMoZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4gdm9pZCB0aGlzLiRkYXRlcGlja2VyLmNsYXNzTGlzdC5hZGQoXCItY3VzdG9tLXBvc2l0aW9uLVwiKTtsZXQgdD0oZT1lLnNwbGl0KFwiIFwiKSlbMF0saT1lWzFdLHM9XCJhaXItZGF0ZXBpY2tlciAtXCIuY29uY2F0KHQsXCItXCIpLmNvbmNhdChpLFwiLSAtZnJvbS1cIikuY29uY2F0KHQsXCItXCIpO3RoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZCguLi5zLnNwbGl0KFwiIFwiKSl9X2JpbmRFdmVudHMoKXt0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKHRoaXMub3B0cy5zaG93RXZlbnQsdGhpcy5fb25Gb2N1cyksdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLl9vbkJsdXIpLHRoaXMuJGRhdGVwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX29uTW91c2VEb3duKSx0aGlzLiRkYXRlcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5fb25Nb3VzZVVwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX29uUmVzaXplKX1fbGltaXRWaWV3RGF0ZUJ5TWF4TWluRGF0ZXMoKXtsZXR7dmlld0RhdGU6ZSxtaW5EYXRlOnQsbWF4RGF0ZTppfT10aGlzO2kmJnAoZSxpKSYmdGhpcy5zZXRWaWV3RGF0ZShpKSx0JiZtKGUsdCkmJnRoaXMuc2V0Vmlld0RhdGUodCl9Zm9ybWF0RGF0ZSgpe2xldCBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp0aGlzLnZpZXdEYXRlLHQ9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDA7aWYoZT1iKGUpLCEoZSBpbnN0YW5jZW9mIERhdGUpKXJldHVybjtsZXQgaT10LHM9dGhpcy5sb2NhbGUsYT1vKGUpLG49ZChlKSxyPUsucmVwbGFjZXIsaD1cImFtXCI7dGhpcy5vcHRzLnRpbWVwaWNrZXImJnRoaXMudGltZXBpY2tlciYmKGg9dGhpcy50aW1lcGlja2VyLmdldERheVBlcmlvZChlKS5kYXlQZXJpb2QpO2xldCBsPXtUOmUuZ2V0VGltZSgpLG06YS5taW51dGVzLG1tOmEuZnVsbE1pbnV0ZXMsaDphLmhvdXJzMTIsaGg6YS5mdWxsSG91cnMxMixIOmEuaG91cnMsSEg6YS5mdWxsSG91cnMsYWE6aCxBQTpoLnRvVXBwZXJDYXNlKCksRTpzLmRheXNTaG9ydFthLmRheV0sRUVFRTpzLmRheXNbYS5kYXldLGQ6YS5kYXRlLGRkOmEuZnVsbERhdGUsTTphLm1vbnRoKzEsTU06YS5mdWxsTW9udGgsTU1NOnMubW9udGhzU2hvcnRbYS5tb250aF0sTU1NTTpzLm1vbnRoc1thLm1vbnRoXSx5eTphLnllYXIudG9TdHJpbmcoKS5zbGljZSgtMikseXl5eTphLnllYXIseXl5eTE6blswXSx5eXl5MjpuWzFdfTtmb3IobGV0W2UsdF1vZiBPYmplY3QuZW50cmllcyhsKSlpPXIoaSxrKGUpLHQpO3JldHVybiBpfWRvd24oZSl7dGhpcy5faGFuZGxlVXBEb3duQWN0aW9ucyhlLFwiZG93blwiKX11cChlKXt0aGlzLl9oYW5kbGVVcERvd25BY3Rpb25zKGUsXCJ1cFwiKX1zZWxlY3REYXRlKGUpe2xldCB0LHM9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHtjdXJyZW50VmlldzphLHBhcnNlZFZpZXdEYXRlOm4sc2VsZWN0ZWREYXRlczpyfT10aGlzLHt1cGRhdGVUaW1lOmh9PXMse21vdmVUb090aGVyTW9udGhzT25TZWxlY3Q6byxtb3ZlVG9PdGhlclllYXJzT25TZWxlY3Q6bCxtdWx0aXBsZURhdGVzOmQscmFuZ2U6YyxhdXRvQ2xvc2U6dX09dGhpcy5vcHRzLG09ci5sZW5ndGg7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS5mb3JFYWNoKChlPT57dGhpcy5zZWxlY3REYXRlKGUscyl9KSksbmV3IFByb21pc2UoKGU9PntzZXRUaW1lb3V0KGUpfSkpO2lmKChlPWIoZSkpaW5zdGFuY2VvZiBEYXRlKXtpZihhPT09aS5kYXlzJiZlLmdldE1vbnRoKCkhPT1uLm1vbnRoJiZvJiYodD1uZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksZS5nZXRNb250aCgpLDEpKSxhPT09aS55ZWFycyYmZS5nZXRGdWxsWWVhcigpIT09bi55ZWFyJiZsJiYodD1uZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksMCwxKSksdCYmdGhpcy5zZXRWaWV3RGF0ZSh0KSxkJiYhYyl7aWYobT09PWQpcmV0dXJuO3RoaXMuX2NoZWNrSWZEYXRlSXNTZWxlY3RlZChlKXx8ci5wdXNoKGUpfWVsc2UgaWYoYylzd2l0Y2gobSl7Y2FzZSAxOnIucHVzaChlKSx0aGlzLnJhbmdlRGF0ZVRvfHwodGhpcy5yYW5nZURhdGVUbz1lKSxwKHRoaXMucmFuZ2VEYXRlRnJvbSx0aGlzLnJhbmdlRGF0ZVRvKSYmKHRoaXMucmFuZ2VEYXRlVG89dGhpcy5yYW5nZURhdGVGcm9tLHRoaXMucmFuZ2VEYXRlRnJvbT1lKSx0aGlzLnNlbGVjdGVkRGF0ZXM9W3RoaXMucmFuZ2VEYXRlRnJvbSx0aGlzLnJhbmdlRGF0ZVRvXTticmVhaztjYXNlIDI6dGhpcy5zZWxlY3RlZERhdGVzPVtlXSx0aGlzLnJhbmdlRGF0ZUZyb209ZSx0aGlzLnJhbmdlRGF0ZVRvPVwiXCI7YnJlYWs7ZGVmYXVsdDp0aGlzLnNlbGVjdGVkRGF0ZXM9W2VdLHRoaXMucmFuZ2VEYXRlRnJvbT1lfWVsc2UgdGhpcy5zZWxlY3RlZERhdGVzPVtlXTtyZXR1cm4gdGhpcy50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUse2FjdGlvbjppLmFjdGlvblNlbGVjdERhdGUsc2lsZW50Om51bGw9PXM/dm9pZCAwOnMuc2lsZW50LGRhdGU6ZSx1cGRhdGVUaW1lOmh9KSx0aGlzLl91cGRhdGVMYXN0U2VsZWN0ZWREYXRlKGUpLHUmJiF0aGlzLnRpbWVwaWNrZXJJc0FjdGl2ZSYmdGhpcy52aXNpYmxlJiYoZHx8Yz9jJiYxPT09bSYmdGhpcy5oaWRlKCk6dGhpcy5oaWRlKCkpLG5ldyBQcm9taXNlKChlPT57c2V0VGltZW91dChlKX0pKX19dW5zZWxlY3REYXRlKGUpe2xldCB0PXRoaXMuc2VsZWN0ZWREYXRlcyxzPXRoaXM7aWYoKGU9YihlKSlpbnN0YW5jZW9mIERhdGUpcmV0dXJuIHQuc29tZSgoKGEsbik9PntpZih1KGEsZSkpcmV0dXJuIHQuc3BsaWNlKG4sMSkscy5zZWxlY3RlZERhdGVzLmxlbmd0aD9zLl91cGRhdGVMYXN0U2VsZWN0ZWREYXRlKHMuc2VsZWN0ZWREYXRlc1tzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoLTFdKToocy5yYW5nZURhdGVGcm9tPVwiXCIscy5yYW5nZURhdGVUbz1cIlwiLHMuX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGUoITEpKSx0aGlzLnRyaWdnZXIoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx7YWN0aW9uOmkuYWN0aW9uVW5zZWxlY3REYXRlLGRhdGU6ZX0pLCEwfSkpfXJlcGxhY2VEYXRlKGUsdCl7bGV0IHM9dGhpcy5zZWxlY3RlZERhdGVzLmZpbmQoKHQ9PnUodCxlLHRoaXMuY3VycmVudFZpZXcpKSksYT10aGlzLnNlbGVjdGVkRGF0ZXMuaW5kZXhPZihzKTthPDB8fHUodGhpcy5zZWxlY3RlZERhdGVzW2FdLHQsdGhpcy5jdXJyZW50Vmlldyl8fCh0aGlzLnNlbGVjdGVkRGF0ZXNbYV09dCx0aGlzLnRyaWdnZXIoaS5ldmVudENoYW5nZVNlbGVjdGVkRGF0ZSx7YWN0aW9uOmkuYWN0aW9uU2VsZWN0RGF0ZSxkYXRlOnQsdXBkYXRlVGltZTohMH0pLHRoaXMuX3VwZGF0ZUxhc3RTZWxlY3RlZERhdGUodCkpfWNsZWFyKCl7bGV0IGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3JldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXM9W10sdGhpcy5yYW5nZURhdGVGcm9tPSExLHRoaXMucmFuZ2VEYXRlVG89ITEsdGhpcy50cmlnZ2VyKGkuZXZlbnRDaGFuZ2VTZWxlY3RlZERhdGUse2FjdGlvbjppLmFjdGlvblVuc2VsZWN0RGF0ZSxzaWxlbnQ6ZS5zaWxlbnR9KSxuZXcgUHJvbWlzZSgoZT0+e3NldFRpbWVvdXQoZSl9KSl9c2hvdygpe2xldHtvblNob3c6ZSxpc01vYmlsZTp0fT10aGlzLm9wdHM7dGhpcy5fY2FuY2VsU2NoZWR1bGVkQ2FsbCgpLHRoaXMudmlzaWJsZXx8dGhpcy5oaWRlQW5pbWF0aW9ufHx0aGlzLl9jcmVhdGVDb21wb25lbnRzKCksdGhpcy5zZXRQb3NpdGlvbih0aGlzLm9wdHMucG9zaXRpb24pLHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LmFkZChcIi1hY3RpdmUtXCIpLHRoaXMudmlzaWJsZT0hMCxlJiZ0aGlzLl9zY2hlZHVsZUNhbGxBZnRlclRyYW5zaXRpb24oZSksdCYmdGhpcy5fc2hvd01vYmlsZU92ZXJsYXkoKX1oaWRlKCl7bGV0e29uSGlkZTplLGlzTW9iaWxlOnR9PXRoaXMub3B0cyxpPXRoaXMuX2hhc1RyYW5zaXRpb24oKTt0aGlzLnZpc2libGU9ITEsdGhpcy5oaWRlQW5pbWF0aW9uPSEwLHRoaXMuJGRhdGVwaWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmUtXCIpLHRoaXMuY3VzdG9tSGlkZSYmdGhpcy5jdXN0b21IaWRlKCksdGhpcy5lbElzSW5wdXQmJnRoaXMuJGVsLmJsdXIoKSx0aGlzLl9zY2hlZHVsZUNhbGxBZnRlclRyYW5zaXRpb24oKHQ9PnshdGhpcy5jdXN0b21IaWRlJiYodCYmaXx8IXQmJiFpKSYmdGhpcy5fZmluaXNoSGlkZSgpLGUmJmUodCl9KSksdCYmUC5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZS1cIil9X3RyaWdnZXJPblNlbGVjdCgpe2xldCBlPVtdLHQ9W10se3NlbGVjdGVkRGF0ZXM6aSxsb2NhbGU6cyxvcHRzOntvblNlbGVjdDphLG11bHRpcGxlRGF0ZXM6bixyYW5nZTpyfX09dGhpcyxoPW58fHIsbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLmRhdGVGb3JtYXQ7aS5sZW5ndGgmJihlPWkubWFwKGcpLHQ9bz9uP3MuZGF0ZUZvcm1hdChlKTplLm1hcCgoZT0+cy5kYXRlRm9ybWF0KGUpKSk6ZS5tYXAoKGU9PnRoaXMuZm9ybWF0RGF0ZShlLHMuZGF0ZUZvcm1hdCkpKSksYSh7ZGF0ZTpoP2U6ZVswXSxmb3JtYXR0ZWREYXRlOmg/dDp0WzBdLGRhdGVwaWNrZXI6dGhpc30pfV9oYW5kbGVBbHJlYWR5U2VsZWN0ZWREYXRlcyhlLHQpe2xldHtyYW5nZTppLHRvZ2dsZVNlbGVjdGVkOnN9PXRoaXMub3B0cztpP3M/dGhpcy51bnNlbGVjdERhdGUodCk6MiE9PXRoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJnRoaXMuc2VsZWN0RGF0ZSh0KTpzJiZ0aGlzLnVuc2VsZWN0RGF0ZSh0KSxzfHx0aGlzLl91cGRhdGVMYXN0U2VsZWN0ZWREYXRlKGUpfV9oYW5kbGVVcERvd25BY3Rpb25zKGUsdCl7aWYoISgoZT1iKGV8fHRoaXMuZm9jdXNEYXRlfHx0aGlzLnZpZXdEYXRlKSlpbnN0YW5jZW9mIERhdGUpKXJldHVybjtsZXQgaT1cInVwXCI9PT10P3RoaXMudmlld0luZGV4KzE6dGhpcy52aWV3SW5kZXgtMTtpPjImJihpPTIpLGk8MCYmKGk9MCksdGhpcy5zZXRWaWV3RGF0ZShuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksZS5nZXRNb250aCgpLDEpKSx0aGlzLnNldEN1cnJlbnRWaWV3KHRoaXMudmlld0luZGV4ZXNbaV0pfV9oYW5kbGVSYW5nZU9uRm9jdXMoKXsxPT09dGhpcy5zZWxlY3RlZERhdGVzLmxlbmd0aCYmKHAodGhpcy5zZWxlY3RlZERhdGVzWzBdLHRoaXMuZm9jdXNEYXRlKT8odGhpcy5yYW5nZURhdGVUbz10aGlzLnNlbGVjdGVkRGF0ZXNbMF0sdGhpcy5yYW5nZURhdGVGcm9tPXRoaXMuZm9jdXNEYXRlKToodGhpcy5yYW5nZURhdGVUbz10aGlzLmZvY3VzRGF0ZSx0aGlzLnJhbmdlRGF0ZUZyb209dGhpcy5zZWxlY3RlZERhdGVzWzBdKSl9Z2V0Q2VsbChlKXtsZXQgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06aS5kYXk7aWYoISgoZT1iKGUpKWluc3RhbmNlb2YgRGF0ZSkpcmV0dXJuO2xldHt5ZWFyOnMsbW9udGg6YSxkYXRlOm59PW8oZSkscj0nW2RhdGEteWVhcj1cIicuY29uY2F0KHMsJ1wiXScpLGg9J1tkYXRhLW1vbnRoPVwiJy5jb25jYXQoYSwnXCJdJyksbD0nW2RhdGEtZGF0ZT1cIicuY29uY2F0KG4sJ1wiXScpLGQ9e1tpLmRheV06XCJcIi5jb25jYXQocikuY29uY2F0KGgpLmNvbmNhdChsKSxbaS5tb250aF06XCJcIi5jb25jYXQocikuY29uY2F0KGgpLFtpLnllYXJdOlwiXCIuY29uY2F0KHIpfTtyZXR1cm4gdGhpcy52aWV3c1t0aGlzLmN1cnJlbnRWaWV3XS4kZWwucXVlcnlTZWxlY3RvcihkW3RdKX1fc2hvd01vYmlsZU92ZXJsYXkoKXtQLmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlLVwiKX1faGFzVHJhbnNpdGlvbigpe3JldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRkYXRlcGlja2VyKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKS5zcGxpdChcIiwgXCIpLnJlZHVjZSgoKGUsdCk9PnBhcnNlRmxvYXQodCkrZSksMCk+MH1nZXQgc2hvdWxkVXBkYXRlRE9NKCl7cmV0dXJuIHRoaXMudmlzaWJsZXx8dGhpcy50cmVhdEFzSW5saW5lfWdldCBwYXJzZWRWaWV3RGF0ZSgpe3JldHVybiBvKHRoaXMudmlld0RhdGUpfWdldCBjdXJyZW50Vmlld1Npbmd1bGFyKCl7cmV0dXJuIHRoaXMuY3VycmVudFZpZXcuc2xpY2UoMCwtMSl9Z2V0IGN1ckRlY2FkZSgpe3JldHVybiBkKHRoaXMudmlld0RhdGUpfWdldCB2aWV3SW5kZXgoKXtyZXR1cm4gdGhpcy52aWV3SW5kZXhlcy5pbmRleE9mKHRoaXMuY3VycmVudFZpZXcpfWdldCBpc0ZpbmFsVmlldygpe3JldHVybiB0aGlzLmN1cnJlbnRWaWV3PT09aS55ZWFyc31nZXQgaGFzU2VsZWN0ZWREYXRlcygpe3JldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoPjB9Z2V0IGlzTWluVmlld1JlYWNoZWQoKXtyZXR1cm4gdGhpcy5jdXJyZW50Vmlldz09PXRoaXMub3B0cy5taW5WaWV3fHx0aGlzLmN1cnJlbnRWaWV3PT09aS5kYXlzfWdldCAkY29udGFpbmVyKCl7cmV0dXJuIHRoaXMuJGN1c3RvbUNvbnRhaW5lcnx8Un1zdGF0aWMgcmVwbGFjZXIoZSx0LGkpe3JldHVybiBlLnJlcGxhY2UodCwoZnVuY3Rpb24oZSx0LHMsYSl7cmV0dXJuIHQraSthfSkpfX12YXIgajtyZXR1cm4gTihLLFwiZGVmYXVsdHNcIixzKSxOKEssXCJ2ZXJzaW9uXCIsXCIzLjIuMFwiKSxOKEssXCJkZWZhdWx0Q29udGFpbmVySWRcIixcImFpci1kYXRlcGlja2VyLWdsb2JhbC1jb250YWluZXJcIiksaj1LLnByb3RvdHlwZSxPYmplY3QuYXNzaWduKGosRSksdC5kZWZhdWx0fSgpfSkpOyIsImltcG9ydCBBaXJEYXRlcGlja2VyIGZyb20gJy4vYWlyLWRhdGVwaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgQWlyRGF0ZXBpY2tlciIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Quc2V0KSB7XG4gICAgc2V0ID0gUmVmbGVjdC5zZXQ7XG4gIH0gZWxzZSB7XG4gICAgc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgdmFyIGRlc2M7XG5cbiAgICAgIGlmIChiYXNlKSB7XG4gICAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgICAgICBkZXNjLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzYy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcbn1cblxuZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XG4gIHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpO1xuXG4gIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5leHBvcnQgeyBfY3JlYXRlQ2xhc3MgYXMgXywgX2NsYXNzQ2FsbENoZWNrIGFzIGEsIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBhcyBiLCBfdHlwZW9mIGFzIGMsIF9pbmhlcml0cyBhcyBkLCBfY3JlYXRlU3VwZXIgYXMgZSwgX3NsaWNlZFRvQXJyYXkgYXMgZiwgX2dldCBhcyBnLCBfZ2V0UHJvdG90eXBlT2YgYXMgaCwgX3NldCBhcyBpIH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcyB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IEhUTUxNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4vbWFzay1lbGVtZW50LmpzJztcblxudmFyIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0hUTUxNYXNrRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50LCBfSFRNTE1hc2tFbGVtZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OlxuICAgIC8qKlxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gc3RhcnRcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG4gICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uICYmIHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICB2YXIgYW5jaG9yT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQ7XG4gICAgICB2YXIgZm9jdXNPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuXG4gICAgICBpZiAoZm9jdXNPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPCBmb2N1c09mZnNldCkge1xuICAgICAgICByZXR1cm4gYW5jaG9yT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9jdXNPZmZzZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uICYmIHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICB2YXIgYW5jaG9yT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQ7XG4gICAgICB2YXIgZm9jdXNPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuXG4gICAgICBpZiAoZm9jdXNPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPiBmb2N1c09mZnNldCkge1xuICAgICAgICByZXR1cm4gYW5jaG9yT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9jdXNPZmZzZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb25cbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKCF0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKSByZXR1cm47XG4gICAgICB2YXIgcmFuZ2UgPSB0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmlucHV0LmZpcnN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgc3RhcnQpO1xuICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuaW5wdXQubGFzdENoaWxkIHx8IHRoaXMuaW5wdXQsIGVuZCk7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG59KEhUTUxNYXNrRWxlbWVudCk7XG5JTWFzay5IVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcyB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IE1hc2tFbGVtZW50IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKiBCcmlkZ2UgYmV0d2VlbiBIVE1MRWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxudmFyIEhUTUxNYXNrRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MTWFza0VsZW1lbnQsIF9NYXNrRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MTWFza0VsZW1lbnQpO1xuXG4gIC8qKiBNYXBwaW5nIGJldHdlZW4gSFRNTEVsZW1lbnQgZXZlbnRzIGFuZCBtYXNrIGludGVybmFsIGV2ZW50cyAqL1xuXG4gIC8qKiBIVE1MRWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xuXG4gIC8qKlxuICAgIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxuICAqL1xuICBmdW5jdGlvbiBIVE1MTWFza0VsZW1lbnQoaW5wdXQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTE1hc2tFbGVtZW50KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICBfdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4MzlcblxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcInJvb3RFbGVtZW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkaW5wdXQkZ2V0Um9vdE5vLCBfdGhpcyRpbnB1dCRnZXRSb290Tm8yLCBfdGhpcyRpbnB1dDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRpbnB1dCRnZXRSb290Tm8gPSAoX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMiA9IChfdGhpcyRpbnB1dCA9IHRoaXMuaW5wdXQpLmdldFJvb3ROb2RlKSA9PT0gbnVsbCB8fCBfdGhpcyRpbnB1dCRnZXRSb290Tm8yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRpbnB1dCRnZXRSb290Tm8yLmNhbGwoX3RoaXMkaW5wdXQpKSAhPT0gbnVsbCAmJiBfdGhpcyRpbnB1dCRnZXRSb290Tm8gIT09IHZvaWQgMCA/IF90aGlzJGlucHV0JGdldFJvb3RObyA6IGRvY3VtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgIElzIGVsZW1lbnQgaW4gZm9jdXNcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8kRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA9PT0gdGhpcy5yb290RWxlbWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0XG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBlbmRcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb25cbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBIVE1MRWxlbWVudCB2YWx1ZVxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKGhhbmRsZXJzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RvZ2dsZUV2ZW50SGFuZGxlcihIVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUFtldmVudF0sIGhhbmRsZXJzW2V2ZW50XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBVbmJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5faGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdG9nZ2xlRXZlbnRIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tldmVudF0pIHtcbiAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9oYW5kbGVyc1tldmVudF0pO1xuICAgICAgICBkZWxldGUgdGhpcy5faGFuZGxlcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MTWFza0VsZW1lbnQ7XG59KE1hc2tFbGVtZW50KTtcbkhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xuICBzZWxlY3Rpb25DaGFuZ2U6ICdrZXlkb3duJyxcbiAgaW5wdXQ6ICdpbnB1dCcsXG4gIGRyb3A6ICdkcm9wJyxcbiAgY2xpY2s6ICdjbGljaycsXG4gIGZvY3VzOiAnZm9jdXMnLFxuICBjb21taXQ6ICdibHVyJ1xufTtcbklNYXNrLkhUTUxNYXNrRWxlbWVudCA9IEhUTUxNYXNrRWxlbWVudDtcblxuZXhwb3J0IHsgSFRNTE1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCB7IG9iamVjdEluY2x1ZGVzLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBBY3Rpb25EZXRhaWxzIGZyb20gJy4uL2NvcmUvYWN0aW9uLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvZGF0ZS5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzaywgeyBtYXNrZWRDbGFzcyB9IGZyb20gJy4uL21hc2tlZC9mYWN0b3J5LmpzJztcbmltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL21hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4uanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9yZWdleHAuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcmFuZ2UuanMnO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wibWFza1wiXTtcbi8qKiBMaXN0ZW5zIHRvIGVsZW1lbnQgZXZlbnRzIGFuZCBjb250cm9scyBjaGFuZ2VzIGJldHdlZW4gZWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxudmFyIElucHV0TWFzayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgIFZpZXcgZWxlbWVudFxuICAgIEByZWFkb25seVxuICAqL1xuXG4gIC8qKlxuICAgIEludGVybmFsIHtAbGluayBNYXNrZWR9IG1vZGVsXG4gICAgQHJlYWRvbmx5XG4gICovXG5cbiAgLyoqXG4gICAgQHBhcmFtIHtNYXNrRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGVsXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgKi9cbiAgZnVuY3Rpb24gSW5wdXRNYXNrKGVsLCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0TWFzayk7XG5cbiAgICB0aGlzLmVsID0gZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCA/IGVsIDogZWwuaXNDb250ZW50RWRpdGFibGUgJiYgZWwudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBlbC50YWdOYW1lICE9PSAnVEVYVEFSRUEnID8gbmV3IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudChlbCkgOiBuZXcgSFRNTE1hc2tFbGVtZW50KGVsKTtcbiAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2sob3B0cyk7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbiA9IHRoaXMuX3NhdmVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRyb3AgPSB0aGlzLl9vbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2xpY2sgPSB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvciA9IHRoaXMuYWxpZ25DdXJzb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkgPSB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2JpbmRFdmVudHMoKTsgLy8gcmVmcmVzaFxuXG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICB9XG4gIC8qKiBSZWFkIG9yIHVwZGF0ZSBtYXNrICovXG5cblxuICBfY3JlYXRlQ2xhc3MoSW5wdXRNYXNrLCBbe1xuICAgIGtleTogXCJtYXNrXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQubWFzaztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG1hc2spIHtcbiAgICAgIGlmICh0aGlzLm1hc2tFcXVhbHMobWFzaykpIHJldHVybjsgLy8gJEZsb3dGaXhNZSBObyBpZGVhcyAuLi4gYWZ0ZXIgdXBkYXRlXG5cbiAgICAgIGlmICghKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpICYmIHRoaXMubWFza2VkLmNvbnN0cnVjdG9yID09PSBtYXNrZWRDbGFzcyhtYXNrKSkge1xuICAgICAgICB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBtYXNrOiBtYXNrXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgICAgbWFzazogbWFza1xuICAgICAgfSk7XG4gICAgICBtYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcbiAgICB9XG4gICAgLyoqIFJhdyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQ7XG5cbiAgICAgIHJldHVybiBtYXNrID09IG51bGwgfHwgKChfdGhpcyRtYXNrZWQgPSB0aGlzLm1hc2tlZCkgPT09IG51bGwgfHwgX3RoaXMkbWFza2VkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRtYXNrZWQubWFza0VxdWFscyhtYXNrKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdHIpIHtcbiAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gc3RyO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBVbm1hc2tlZCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3VubWFza2VkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdHIpIHtcbiAgICAgIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWUgPSBzdHI7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIFR5cGVkIHVubWFza2VkIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudHlwZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgdGhpcy5tYXNrZWQudHlwZWRWYWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFN0YXJ0cyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2JpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2JpbmRFdmVudHMoKSB7XG4gICAgICB0aGlzLmVsLmJpbmRFdmVudHMoe1xuICAgICAgICBzZWxlY3Rpb25DaGFuZ2U6IHRoaXMuX3NhdmVTZWxlY3Rpb24sXG4gICAgICAgIGlucHV0OiB0aGlzLl9vbklucHV0LFxuICAgICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXG4gICAgICAgIGNsaWNrOiB0aGlzLl9vbkNsaWNrLFxuICAgICAgICBmb2N1czogdGhpcy5fb25Gb2N1cyxcbiAgICAgICAgY29tbWl0OiB0aGlzLl9vbkNoYW5nZVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU3RvcHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXG4gICAgICBAcHJvdGVjdGVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bmJpbmRFdmVudHMoKSB7XG4gICAgICBpZiAodGhpcy5lbCkgdGhpcy5lbC51bmJpbmRFdmVudHMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBGaXJlcyBjdXN0b20gZXZlbnRcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maXJlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVFdmVudChldikge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldl07XG4gICAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEN1cnJlbnQgc2VsZWN0aW9uIHN0YXJ0XG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG4gICAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjdXJzb3JQb3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25FbmQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChwb3MpIHtcbiAgICAgIGlmICghdGhpcy5lbCB8fCAhdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5lbC5zZWxlY3QocG9zLCBwb3MpO1xuXG4gICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU3RvcmVzIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9zYXZlU2VsZWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uXG4gICAgICAvKiBldiAqL1xuICAgIF9zYXZlU2VsZWN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFbGVtZW50IHZhbHVlIHdhcyBjaGFuZ2VkIG91dHNpZGUgb2YgbWFzay4gU3luY3Jvbml6ZSBtYXNrIHVzaW5nIGBtYXNrLnVwZGF0ZVZhbHVlKClgIHRvIHdvcmsgcHJvcGVybHkuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZWxlY3Rpb24gPSB7XG4gICAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBlbmQ6IHRoaXMuY3Vyc29yUG9zXG4gICAgICB9O1xuICAgIH1cbiAgICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gdGhpcy5lbC52YWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyB2aWV3IGZyb20gbW9kZWwgdmFsdWUsIGZpcmVzIGNoYW5nZSBldmVudHMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUNvbnRyb2xcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ29udHJvbCgpIHtcbiAgICAgIHZhciBuZXdVbm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xuICAgICAgdmFyIGlzQ2hhbmdlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZSAhPT0gbmV3VW5tYXNrZWRWYWx1ZSB8fCB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSBuZXdVbm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmVsLnZhbHVlICE9PSBuZXdWYWx1ZSkgdGhpcy5lbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKGlzQ2hhbmdlZCkgdGhpcy5fZmlyZUNoYW5nZUV2ZW50cygpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBvcHRpb25zIHdpdGggZGVlcCBlcXVhbCBjaGVjaywgcmVjcmVhdGVzIEB7bGluayBNYXNrZWR9IG1vZGVsIGlmIG1hc2sgdHlwZSBjaGFuZ2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgICAgcmVzdE9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0cywgX2V4Y2x1ZGVkKTtcblxuICAgICAgdmFyIHVwZGF0ZU1hc2sgPSAhdGhpcy5tYXNrRXF1YWxzKG1hc2spO1xuICAgICAgdmFyIHVwZGF0ZU9wdHMgPSAhb2JqZWN0SW5jbHVkZXModGhpcy5tYXNrZWQsIHJlc3RPcHRzKTtcbiAgICAgIGlmICh1cGRhdGVNYXNrKSB0aGlzLm1hc2sgPSBtYXNrO1xuICAgICAgaWYgKHVwZGF0ZU9wdHMpIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMocmVzdE9wdHMpO1xuICAgICAgaWYgKHVwZGF0ZU1hc2sgfHwgdXBkYXRlT3B0cykgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgfVxuICAgIC8qKiBVcGRhdGVzIGN1cnNvciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICAgIGlmIChjdXJzb3JQb3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7IC8vIGFsc28gcXVldWUgY2hhbmdlIGN1cnNvciBmb3IgbW9iaWxlIGJyb3dzZXJzXG5cbiAgICAgIHRoaXMuX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnNcbiAgICAgIEBwcml2YXRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9kZWxheVVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuXG4gICAgICB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICAgIHRoaXMuX2N1cnNvckNoYW5naW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuZWwpIHJldHVybjsgLy8gaWYgd2FzIGRlc3Ryb3llZFxuXG4gICAgICAgIF90aGlzLmN1cnNvclBvcyA9IF90aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcblxuICAgICAgICBfdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBGaXJlcyBjdXN0b20gZXZlbnRzXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maXJlQ2hhbmdlRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maXJlQ2hhbmdlRXZlbnRzKCkge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KCdhY2NlcHQnLCB0aGlzLl9pbnB1dEV2ZW50KTtcblxuICAgICAgaWYgKHRoaXMubWFza2VkLmlzQ29tcGxldGUpIHRoaXMuX2ZpcmVFdmVudCgnY29tcGxldGUnLCB0aGlzLl9pbnB1dEV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBBYm9ydHMgZGVsYXllZCBjdXJzb3IgdXBkYXRlXG4gICAgICBAcHJpdmF0ZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYWJvcnRVcGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Fib3J0VXBkYXRlQ3Vyc29yKCkge1xuICAgICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jdXJzb3JDaGFuZ2luZyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jdXJzb3JDaGFuZ2luZztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqIEFsaWducyBjdXJzb3IgdG8gbmVhcmVzdCBhdmFpbGFibGUgcG9zaXRpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsaWduQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yKCkge1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKHRoaXMuY3Vyc29yUG9zLCBESVJFQ1RJT04uTEVGVCkpO1xuICAgIH1cbiAgICAvKiogQWxpZ25zIGN1cnNvciBvbmx5IGlmIHNlbGVjdGlvbiBpcyBlbXB0eSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxpZ25DdXJzb3JGcmllbmRseVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvckZyaWVuZGx5KCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgIT09IHRoaXMuY3Vyc29yUG9zKSByZXR1cm47IC8vIHNraXAgaWYgcmFuZ2UgaXMgc2VsZWN0ZWRcblxuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogQWRkcyBsaXN0ZW5lciBvbiBjdXN0b20gZXZlbnQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHRoaXMuX2xpc3RlbmVyc1tldl0gPSBbXTtcblxuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2XS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIFJlbW92ZXMgY3VzdG9tIGV2ZW50IGxpc3RlbmVyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldl07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgaEluZGV4ID0gdGhpcy5fbGlzdGVuZXJzW2V2XS5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICBpZiAoaEluZGV4ID49IDApIHRoaXMuX2xpc3RlbmVyc1tldl0uc3BsaWNlKGhJbmRleCwgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBpbnB1dCBldmVudCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uSW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uSW5wdXQoZSkge1xuICAgICAgdGhpcy5faW5wdXRFdmVudCA9IGU7XG5cbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7IC8vIGZpeCBzdHJhbmdlIElFIGJlaGF2aW9yXG5cblxuICAgICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24pIHJldHVybiB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBBY3Rpb25EZXRhaWxzKCAvLyBuZXcgc3RhdGVcbiAgICAgIHRoaXMuZWwudmFsdWUsIHRoaXMuY3Vyc29yUG9zLCAvLyBvbGQgc3RhdGVcbiAgICAgIHRoaXMudmFsdWUsIHRoaXMuX3NlbGVjdGlvbik7XG4gICAgICB2YXIgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zLCBkZXRhaWxzLnJlbW92ZWQubGVuZ3RoLCBkZXRhaWxzLmluc2VydGVkLCBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbikub2Zmc2V0OyAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgICAvLyBvdGhlcndpc2Ugd2Ugc3RpbGwgbmVlZCB0byBhbGlnbiB3aXRoIE5PTkUgKHRvIGdldCBvdXQgZnJvbSBmaXhlZCBzeW1ib2xzIGZvciBpbnN0YW5jZSlcblxuICAgICAgdmFyIHJlbW92ZURpcmVjdGlvbiA9IG9sZFJhd1ZhbHVlID09PSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlID8gZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgIGlmIChyZW1vdmVEaXJlY3Rpb24gIT09IERJUkVDVElPTi5OT05FKSBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBESVJFQ1RJT04uTk9ORSk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMudXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XG4gICAgICBkZWxldGUgdGhpcy5faW5wdXRFdmVudDtcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcblxuICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGRyb3AgZXZlbnQsIHByZXZlbnRzIGJ5IGRlZmF1bHQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRHJvcChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRm9jdXMoZXYpIHtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgIH1cbiAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uQ2xpY2soZXYpIHtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgIH1cbiAgICAvKiogVW5iaW5kIHZpZXcgZXZlbnRzIGFuZCByZW1vdmVzIGVsZW1lbnQgcmVmZXJlbmNlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl91bmJpbmRFdmVudHMoKTsgLy8gJEZsb3dGaXhNZSB3aHkgbm90IGRvIHNvP1xuXG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPSAwOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGRlbGV0ZSB0aGlzLmVsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dE1hc2s7XG59KCk7XG5JTWFzay5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XG5cbmV4cG9ydCB7IElucHV0TWFzayBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKlxuICBHZW5lcmljIGVsZW1lbnQgQVBJIHRvIHVzZSB3aXRoIG1hc2tcbiAgQGludGVyZmFjZVxuKi9cbnZhciBNYXNrRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hc2tFbGVtZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrRWxlbWVudCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcInNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OlxuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc3RhcnQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uU3RhcnQ7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICByZXR1cm4gc3RhcnQgIT0gbnVsbCA/IHN0YXJ0IDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gZW5kICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBlbmQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGVuZCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvbkVuZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybiBlbmQgIT0gbnVsbCA/IGVuZCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICAvKiogU2FmZWx5IHNldHMgZWxlbWVudCBzZWxlY3Rpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgZW5kID09IG51bGwgfHwgc3RhcnQgPT09IHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgZW5kID09PSB0aGlzLnNlbGVjdGlvbkVuZCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHt9XG4gICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHt9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza0VsZW1lbnQ7XG59KCk7XG5JTWFzay5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0ICcuL2NoYW5nZS1kZXRhaWxzLmpzJztcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgaW5wdXQgKi9cblxudmFyIEFjdGlvbkRldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gIC8qKiBPbGQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogT2xkIHNlbGVjdGlvbiAqL1xuICBmdW5jdGlvbiBBY3Rpb25EZXRhaWxzKHZhbHVlLCBjdXJzb3JQb3MsIG9sZFZhbHVlLCBvbGRTZWxlY3Rpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uRGV0YWlscyk7XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xuICAgIHRoaXMub2xkU2VsZWN0aW9uID0gb2xkU2VsZWN0aW9uOyAvLyBkb3VibGUgY2hlY2sgaWYgbGVmdCBwYXJ0IHdhcyBjaGFuZ2VkIChhdXRvZmlsbGluZywgb3RoZXIgbm9uLXN0YW5kYXJkIGlucHV0IHRyaWdnZXJzKVxuXG4gICAgd2hpbGUgKHRoaXMudmFsdWUuc2xpY2UoMCwgdGhpcy5zdGFydENoYW5nZVBvcykgIT09IHRoaXMub2xkVmFsdWUuc2xpY2UoMCwgdGhpcy5zdGFydENoYW5nZVBvcykpIHtcbiAgICAgIC0tdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgIFN0YXJ0IGNoYW5naW5nIHBvc2l0aW9uXG4gICAgQHJlYWRvbmx5XG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQWN0aW9uRGV0YWlscywgW3tcbiAgICBrZXk6IFwic3RhcnRDaGFuZ2VQb3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmN1cnNvclBvcywgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEluc2VydGVkIHN5bWJvbHMgY291bnRcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRlZENvdW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJzb3JQb3MgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEluc2VydGVkIHN5bWJvbHNcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmVtb3ZlZCBzeW1ib2xzIGNvdW50XG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZENvdW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyBNYXRoLm1heCBmb3Igb3Bwb3NpdGUgb3BlcmF0aW9uXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5vbGRTZWxlY3Rpb24uZW5kIC0gdGhpcy5zdGFydENoYW5nZVBvcyB8fCAvLyBmb3IgRGVsZXRlXG4gICAgICB0aGlzLm9sZFZhbHVlLmxlbmd0aCAtIHRoaXMudmFsdWUubGVuZ3RoLCAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZW1vdmVkIHN5bWJvbHNcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5yZW1vdmVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFVuY2hhbmdlZCBoZWFkIHN5bWJvbHNcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoZWFkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5zdGFydENoYW5nZVBvcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgVW5jaGFuZ2VkIHRhaWwgc3ltYm9sc1xuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRhaWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZyh0aGlzLnN0YXJ0Q2hhbmdlUG9zICsgdGhpcy5pbnNlcnRlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZW1vdmUgZGlyZWN0aW9uXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRGlyZWN0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIXRoaXMucmVtb3ZlZENvdW50IHx8IHRoaXMuaW5zZXJ0ZWRDb3VudCkgcmV0dXJuIERJUkVDVElPTi5OT05FOyAvLyBhbGlnbiByaWdodCBpZiBkZWxldGUgYXQgcmlnaHRcblxuICAgICAgcmV0dXJuICh0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMuY3Vyc29yUG9zIHx8IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID09PSB0aGlzLmN1cnNvclBvcykgJiYgLy8gaWYgbm90IHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxuICAgICAgdGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA/IERJUkVDVElPTi5SSUdIVCA6IERJUkVDVElPTi5MRUZUO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBY3Rpb25EZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgeyBBY3Rpb25EZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuXG4vKipcbiAgUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBtb2RlbCB2YWx1ZVxuICBAcGFyYW0ge09iamVjdH0gW2RldGFpbHNdXG4gIEBwYXJhbSB7c3RyaW5nfSBbZGV0YWlscy5pbnNlcnRlZF0gLSBJbnNlcnRlZCBzeW1ib2xzXG4gIEBwYXJhbSB7Ym9vbGVhbn0gW2RldGFpbHMuc2tpcF0gLSBDYW4gc2tpcCBjaGFyc1xuICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMucmVtb3ZlQ291bnRdIC0gUmVtb3ZlZCBzeW1ib2xzIGNvdW50XG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy50YWlsU2hpZnRdIC0gQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWxcbiovXG52YXIgQ2hhbmdlRGV0YWlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXG5cbiAgLyoqIENhbiBza2lwIGNoYXJzICovXG5cbiAgLyoqIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsICovXG5cbiAgLyoqIFJhdyBpbnNlcnRlZCBpcyB1c2VkIGJ5IGR5bmFtaWMgbWFzayAqL1xuICBmdW5jdGlvbiBDaGFuZ2VEZXRhaWxzKGRldGFpbHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbmdlRGV0YWlscyk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGluc2VydGVkOiAnJyxcbiAgICAgIHJhd0luc2VydGVkOiAnJyxcbiAgICAgIHNraXA6IGZhbHNlLFxuICAgICAgdGFpbFNoaWZ0OiAwXG4gICAgfSwgZGV0YWlscyk7XG4gIH1cbiAgLyoqXG4gICAgQWdncmVnYXRlIGNoYW5nZXNcbiAgICBAcmV0dXJucyB7Q2hhbmdlRGV0YWlsc30gYHRoaXNgXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ2hhbmdlRGV0YWlscywgW3tcbiAgICBrZXk6IFwiYWdncmVnYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFnZ3JlZ2F0ZShkZXRhaWxzKSB7XG4gICAgICB0aGlzLnJhd0luc2VydGVkICs9IGRldGFpbHMucmF3SW5zZXJ0ZWQ7XG4gICAgICB0aGlzLnNraXAgPSB0aGlzLnNraXAgfHwgZGV0YWlscy5za2lwO1xuICAgICAgdGhpcy5pbnNlcnRlZCArPSBkZXRhaWxzLmluc2VydGVkO1xuICAgICAgdGhpcy50YWlsU2hpZnQgKz0gZGV0YWlscy50YWlsU2hpZnQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIFRvdGFsIG9mZnNldCBjb25zaWRlcmluZyBhbGwgY2hhbmdlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YWlsU2hpZnQgKyB0aGlzLmluc2VydGVkLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhbmdlRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IHsgQ2hhbmdlRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xudmFyIENvbnRpbnVvdXNUYWlsRGV0YWlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiBUYWlsIHZhbHVlIGFzIHN0cmluZyAqL1xuXG4gIC8qKiBUYWlsIHN0YXJ0IHBvc2l0aW9uICovXG5cbiAgLyoqIFN0YXJ0IHBvc2l0aW9uICovXG4gIGZ1bmN0aW9uIENvbnRpbnVvdXNUYWlsRGV0YWlscygpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHZhciBzdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGludW91c1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGludW91c1RhaWxEZXRhaWxzLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKHRhaWwpIHtcbiAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgIHJldHVybiBtYXNrZWQuYXBwZW5kKHRoaXMudG9TdHJpbmcoKSwge1xuICAgICAgICB0YWlsOiB0cnVlXG4gICAgICB9KS5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICAgIHN0b3A6IHRoaXMuc3RvcFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5zaGlmdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnNoaWZ0KGJlZm9yZVBvcykge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCB8fCBiZWZvcmVQb3MgIT0gbnVsbCAmJiB0aGlzLmZyb20gPj0gYmVmb3JlUG9zKSByZXR1cm4gJyc7XG4gICAgICB2YXIgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVswXTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgICBpZiAoIXRoaXMudmFsdWUubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICB2YXIgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVt0aGlzLnZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGludW91c1RhaWxEZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgeyBDb250aW51b3VzVGFpbERldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiLyoqXG4gKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudC5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR8TWFza0VsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBhcHBseSBtYXNrXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIEN1c3RvbSBtYXNrIG9wdGlvbnNcbiAqIEByZXR1cm4ge0lucHV0TWFza31cbiAqL1xuZnVuY3Rpb24gSU1hc2soZWwpIHtcbiAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAvLyBjdXJyZW50bHkgYXZhaWxhYmxlIG9ubHkgZm9yIGlucHV0LWxpa2UgZWxlbWVudHNcbiAgcmV0dXJuIG5ldyBJTWFzay5JbnB1dE1hc2soZWwsIG9wdHMpO1xufVxuXG5leHBvcnQgeyBJTWFzayBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBjIGFzIF90eXBlb2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4vY2hhbmdlLWRldGFpbHMuanMnO1xuXG4vKiogQ2hlY2tzIGlmIHZhbHVlIGlzIHN0cmluZyAqL1xuXG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnIHx8IHN0ciBpbnN0YW5jZW9mIFN0cmluZztcbn1cbi8qKlxuICBEaXJlY3Rpb25cbiAgQHByb3Age3N0cmluZ30gTk9ORVxuICBAcHJvcCB7c3RyaW5nfSBMRUZUXG4gIEBwcm9wIHtzdHJpbmd9IEZPUkNFX0xFRlRcbiAgQHByb3Age3N0cmluZ30gUklHSFRcbiAgQHByb3Age3N0cmluZ30gRk9SQ0VfUklHSFRcbiovXG5cbnZhciBESVJFQ1RJT04gPSB7XG4gIE5PTkU6ICdOT05FJyxcbiAgTEVGVDogJ0xFRlQnLFxuICBGT1JDRV9MRUZUOiAnRk9SQ0VfTEVGVCcsXG4gIFJJR0hUOiAnUklHSFQnLFxuICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJ1xufTtcbi8qKlxuICBEaXJlY3Rpb25cbiAgQGVudW0ge3N0cmluZ31cbiovXG5cbi8qKiBSZXR1cm5zIG5leHQgY2hhciBpbmRleCBpbiBkaXJlY3Rpb24gKi9cbmZ1bmN0aW9uIGluZGV4SW5EaXJlY3Rpb24ocG9zLCBkaXJlY3Rpb24pIHtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIC0tcG9zO1xuICByZXR1cm4gcG9zO1xufVxuLyoqIFJldHVybnMgbmV4dCBjaGFyIHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xuXG5mdW5jdGlvbiBwb3NJbkRpcmVjdGlvbihwb3MsIGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgIHJldHVybiAtLXBvcztcblxuICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgcmV0dXJuICsrcG9zO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwb3M7XG4gIH1cbn1cbi8qKiAqL1xuXG5mdW5jdGlvbiBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9MRUZUO1xuXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX1JJR0hUO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cbn1cbi8qKiBFc2NhcGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb250cm9sIGNoYXJzICovXG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVQcmVwYXJlKHByZXApIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocHJlcCkgPyBwcmVwIDogW3ByZXAsIG5ldyBDaGFuZ2VEZXRhaWxzKCldO1xufSAvLyBjbG9uZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsIHdpdGggc21hbGwgY2hhbmdlc1xuXG5mdW5jdGlvbiBvYmplY3RJbmNsdWRlcyhiLCBhKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIGFyckEgPSBBcnJheS5pc0FycmF5KGEpLFxuICAgICAgYXJyQiA9IEFycmF5LmlzQXJyYXkoYiksXG4gICAgICBpO1xuXG4gIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGEgJiYgYiAmJiBfdHlwZW9mKGEpID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKGIpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cCxcbiAgICAgICAgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYSk7IC8vIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZSAuLi4gPz8/XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGJba2V5c1tpXV0sIGFba2V5c1tpXV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyoqIFNlbGVjdGlvbiByYW5nZSAqL1xuXG5leHBvcnQgeyBESVJFQ1RJT04sIGVzY2FwZVJlZ0V4cCwgZm9yY2VEaXJlY3Rpb24sIGluZGV4SW5EaXJlY3Rpb24sIGlzU3RyaW5nLCBub3JtYWxpemVQcmVwYXJlLCBvYmplY3RJbmNsdWRlcywgcG9zSW5EaXJlY3Rpb24gfTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRNYXNrIH0gZnJvbSAnLi9jb250cm9scy9pbnB1dC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi9jb3JlL2hvbGRlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9jb3JlL2hvbGRlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZCB9IGZyb20gJy4vbWFza2VkL2Jhc2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRQYXR0ZXJuIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZEVudW0gfSBmcm9tICcuL21hc2tlZC9lbnVtLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkUmFuZ2UgfSBmcm9tICcuL21hc2tlZC9yYW5nZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZE51bWJlciB9IGZyb20gJy4vbWFza2VkL251bWJlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZERhdGUgfSBmcm9tICcuL21hc2tlZC9kYXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkUmVnRXhwIH0gZnJvbSAnLi9tYXNrZWQvcmVnZXhwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRnVuY3Rpb24gfSBmcm9tICcuL21hc2tlZC9mdW5jdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZER5bmFtaWMgfSBmcm9tICcuL21hc2tlZC9keW5hbWljLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlTWFzayB9IGZyb20gJy4vbWFza2VkL2ZhY3RvcnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSFRNTE1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IFBJUEVfVFlQRSwgY3JlYXRlUGlwZSwgcGlwZSB9IGZyb20gJy4vbWFza2VkL3BpcGUuanMnO1xuaW1wb3J0ICcuL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0ICcuL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2NvcmUvYWN0aW9uLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL21hc2tlZC9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vY3Vyc29yLmpzJztcblxudHJ5IHtcbiAgZ2xvYmFsVGhpcy5JTWFzayA9IElNYXNrO1xufSBjYXRjaCAoZSkge31cbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgZiBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIG5vcm1hbGl6ZVByZXBhcmUsIGZvcmNlRGlyZWN0aW9uLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKiBTdXBwb3J0ZWQgbWFzayB0eXBlICovXG5cbi8qKiBQcm92aWRlcyBjb21tb24gbWFza2luZyBzdHVmZiAqL1xudmFyIE1hc2tlZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vICRTaGFwZTxNYXNrZWRPcHRpb25zPjsgVE9ETyBhZnRlciBmaXggaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3NzNcblxuICAvKiogQHR5cGUge01hc2t9ICovXG5cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG5cbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGb3JtYXQgdHlwZWQgdmFsdWUgdG8gc3RyaW5nICovXG5cbiAgLyoqIFBhcnNlIHN0cmdpbiB0byBnZXQgdHlwZWQgdmFsdWUgKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gTWFza2VkKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkKTtcblxuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG5cbiAgICB0aGlzLl91cGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkLkRFRkFVTFRTLCBvcHRzKSk7XG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIC8qKiBTZXRzIGFuZCBhcHBsaWVzIG5ldyBvcHRpb25zICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkLCBbe1xuICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhvcHRzKS5sZW5ndGgpIHJldHVybjsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICB0aGlzLndpdGhWYWx1ZVJlZnJlc2godGhpcy5fdXBkYXRlLmJpbmQodGhpcywgb3B0cykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFNldHMgbmV3IG9wdGlvbnNcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKiBNYXNrIHN0YXRlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3ZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gc3RhdGUuX3ZhbHVlO1xuICAgIH1cbiAgICAvKiogUmVzZXRzIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgIH1cbiAgICAvKiogUmVzb2x2ZSBuZXcgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc29sdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHtcbiAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgIH0sICcnKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7fSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvUGFyc2UodGhpcy52YWx1ZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZG9Gb3JtYXQodmFsdWUpO1xuICAgIH1cbiAgICAvKiogVmFsdWUgdGhhdCBpbmNsdWRlcyByYXcgdXNlciBpbnB1dCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmF3SW5wdXRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdElucHV0KDAsIHRoaXMudmFsdWUubGVuZ3RoLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNGaWxsZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gICAgfVxuICAgIC8qKiBGaW5kcyBuZWFyZXN0IGlucHV0IHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICB9XG4gICAgLyoqIEV4dHJhY3RzIHZhbHVlIGluIHJhbmdlIGNvbnNpZGVyaW5nIGZsYWdzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpO1xuICAgIH1cbiAgICAvKiogRXh0cmFjdHMgdGFpbCBpbiByYW5nZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcyksIGZyb21Qb3MpO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyB0YWlsICovXG4gICAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgIGlmIChpc1N0cmluZyh0YWlsKSkgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKTtcbiAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBjaGFyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgaWYgKCFjaCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB0aGlzLl92YWx1ZSArPSBjaDtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIGluc2VydGVkOiBjaCxcbiAgICAgICAgcmF3SW5zZXJ0ZWQ6IGNoXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgY2hhciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgY2hlY2tUYWlsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgY29uc2lzdGVudFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBkZXRhaWxzO1xuXG4gICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUgPSBub3JtYWxpemVQcmVwYXJlKHRoaXMuZG9QcmVwYXJlKGNoLCBmbGFncykpO1xuXG4gICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUyID0gX3NsaWNlZFRvQXJyYXkoX25vcm1hbGl6ZVByZXBhcmUsIDIpO1xuXG4gICAgICBjaCA9IF9ub3JtYWxpemVQcmVwYXJlMlswXTtcbiAgICAgIGRldGFpbHMgPSBfbm9ybWFsaXplUHJlcGFyZTJbMV07XG4gICAgICBkZXRhaWxzID0gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpKTtcblxuICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQpIHtcbiAgICAgICAgdmFyIGNvbnNpc3RlbnRUYWlsO1xuICAgICAgICB2YXIgYXBwZW5kZWQgPSB0aGlzLmRvVmFsaWRhdGUoZmxhZ3MpICE9PSBmYWxzZTtcblxuICAgICAgICBpZiAoYXBwZW5kZWQgJiYgY2hlY2tUYWlsICE9IG51bGwpIHtcbiAgICAgICAgICAvLyB2YWxpZGF0aW9uIG9rLCBjaGVjayB0YWlsXG4gICAgICAgICAgdmFyIGJlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgICBpZiAodGhpcy5vdmVyd3JpdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xuICAgICAgICAgICAgY2hlY2tUYWlsLnVuc2hpZnQodGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0YWlsRGV0YWlscyA9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpO1xuICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQgPT09IGNoZWNrVGFpbC50b1N0cmluZygpOyAvLyBub3Qgb2ssIHRyeSBzaGlmdFxuXG4gICAgICAgICAgaWYgKCEoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpICYmIHRoaXMub3ZlcndyaXRlID09PSAnc2hpZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICAgICAgY29uc2lzdGVudFRhaWwgPSBjaGVja1RhaWwuc3RhdGU7XG4gICAgICAgICAgICBjaGVja1RhaWwuc2hpZnQoKTtcbiAgICAgICAgICAgIHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgICAgICBhcHBlbmRlZCA9IHRhaWxEZXRhaWxzLnJhd0luc2VydGVkID09PSBjaGVja1RhaWwudG9TdHJpbmcoKTtcbiAgICAgICAgICB9IC8vIGlmIG9rLCByb2xsYmFjayBzdGF0ZSBhZnRlciB0YWlsXG5cblxuICAgICAgICAgIGlmIChhcHBlbmRlZCAmJiB0YWlsRGV0YWlscy5pbnNlcnRlZCkgdGhpcy5zdGF0ZSA9IGJlZm9yZVRhaWxTdGF0ZTtcbiAgICAgICAgfSAvLyByZXZlcnQgYWxsIGlmIHNvbWV0aGluZyB3ZW50IHdyb25nXG5cblxuICAgICAgICBpZiAoIWFwcGVuZGVkKSB7XG4gICAgICAgICAgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnNpc3RlbnRTdGF0ZTtcbiAgICAgICAgICBpZiAoY2hlY2tUYWlsICYmIGNvbnNpc3RlbnRUYWlsKSBjaGVja1RhaWwuc3RhdGUgPSBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgcGxhY2Vob2xkZXIgYXQgZW5kICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIG9wdGlvbmFsIGVhZ2VyIHBsYWNlaG9sZGVyIGF0IGVuZCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRFYWdlcigpIHtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBzeW1ib2xzIGNvbnNpZGVyaW5nIGZsYWdzICovXG4gICAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgICBpZiAoIWlzU3RyaW5nKHN0cikpIHRocm93IG5ldyBFcnJvcigndmFsdWUgc2hvdWxkIGJlIHN0cmluZycpO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIGNoZWNrVGFpbCA9IGlzU3RyaW5nKHRhaWwpID8gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpIDogdGFpbDtcbiAgICAgIGlmIChmbGFncyAmJiBmbGFncy50YWlsKSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgZm9yICh2YXIgY2kgPSAwOyBjaSA8IHN0ci5sZW5ndGg7ICsrY2kpIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhcihzdHJbY2ldLCBmbGFncywgY2hlY2tUYWlsKSk7XG4gICAgICB9IC8vIGFwcGVuZCB0YWlsIGJ1dCBhZ2dyZWdhdGUgb25seSB0YWlsU2hpZnRcblxuXG4gICAgICBpZiAoY2hlY2tUYWlsICE9IG51bGwpIHtcbiAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCkudGFpbFNoaWZ0OyAvLyBUT0RPIGl0J3MgYSBnb29kIGlkZWEgdG8gY2xlYXIgc3RhdGUgYWZ0ZXIgYXBwZW5kaW5nIGVuZHNcbiAgICAgICAgLy8gYnV0IGl0IGNhdXNlcyBidWdzIHdoZW4gb25lIGFwcGVuZCBjYWxscyBhbm90aGVyICh3aGVuIGR5bmFtaWMgZGlzcGF0Y2ggc2V0IHJhd0lucHV0VmFsdWUpXG4gICAgICAgIC8vIHRoaXMuX3Jlc2V0QmVmb3JlVGFpbFN0YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVhZ2VyICYmIGZsYWdzICE9PSBudWxsICYmIGZsYWdzICE9PSB2b2lkIDAgJiYgZmxhZ3MuaW5wdXQgJiYgc3RyKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZEVhZ2VyKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIENhbGxzIGZ1bmN0aW9uIGFuZCByZWFwcGxpZXMgY3VycmVudCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aFZhbHVlUmVmcmVzaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aXRoVmFsdWVSZWZyZXNoKGZuKSB7XG4gICAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4oKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIHJhd0lucHV0ID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciByZXQgPSBmbigpO1xuICAgICAgdGhpcy5yYXdJbnB1dFZhbHVlID0gcmF3SW5wdXQ7IC8vIGFwcGVuZCBsb3N0IHRyYWlsaW5nIGNoYXJzIGF0IGVuZFxuXG4gICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlICE9PSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLnNsaWNlKHRoaXMudmFsdWUubGVuZ3RoKSwge30sICcnKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX3JlZnJlc2hpbmc7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJ1bklzb2xhdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bklzb2xhdGVkKGZuKSB7XG4gICAgICBpZiAodGhpcy5faXNvbGF0ZWQgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKHRoaXMpO1xuICAgICAgdGhpcy5faXNvbGF0ZWQgPSB0cnVlO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciByZXQgPSBmbih0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9pc29sYXRlZDtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUHJlcGFyZXMgc3RyaW5nIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmdcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5wcmVwYXJlID8gdGhpcy5wcmVwYXJlKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgcmV0dXJuICghdGhpcy52YWxpZGF0ZSB8fCB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUsIHRoaXMsIGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY29tbWl0KSB0aGlzLmNvbW1pdCh0aGlzLnZhbHVlLCB0aGlzKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0Zvcm1hdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQodmFsdWUsIHRoaXMpIDogdmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1BhcnNlKHN0cikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2UgPyB0aGlzLnBhcnNlKHN0ciwgdGhpcykgOiBzdHI7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3BsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGluc2VydGVkLCByZW1vdmVEaXJlY3Rpb24pIHtcbiAgICAgIHZhciB0YWlsUG9zID0gc3RhcnQgKyBkZWxldGVDb3VudDtcbiAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICAgIHZhciBvbGRSYXdWYWx1ZTtcblxuICAgICAgaWYgKHRoaXMuZWFnZXIpIHtcbiAgICAgICAgcmVtb3ZlRGlyZWN0aW9uID0gZm9yY2VEaXJlY3Rpb24ocmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgICAgb2xkUmF3VmFsdWUgPSB0aGlzLmV4dHJhY3RJbnB1dCgwLCB0YWlsUG9zLCB7XG4gICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRDaGFuZ2VQb3MgPSB0aGlzLm5lYXJlc3RJbnB1dFBvcyhzdGFydCwgZGVsZXRlQ291bnQgPiAxICYmIHN0YXJ0ICE9PSAwICYmICF0aGlzLmVhZ2VyID8gRElSRUNUSU9OLk5PTkUgOiByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogc3RhcnRDaGFuZ2VQb3MgLSBzdGFydCAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXG5cbiAgICAgIH0pLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpO1xuXG4gICAgICBpZiAodGhpcy5lYWdlciAmJiByZW1vdmVEaXJlY3Rpb24gIT09IERJUkVDVElPTi5OT05FICYmIG9sZFJhd1ZhbHVlID09PSB0aGlzLnJhd0lucHV0VmFsdWUpIHtcbiAgICAgICAgaWYgKHJlbW92ZURpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICB2YXIgdmFsTGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKG9sZFJhd1ZhbHVlID09PSB0aGlzLnJhd0lucHV0VmFsdWUgJiYgKHZhbExlbmd0aCA9IHRoaXMudmFsdWUubGVuZ3RoKSkge1xuICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICAgICAgICB0YWlsU2hpZnQ6IC0xXG4gICAgICAgICAgICB9KSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHZhbExlbmd0aCAtIDEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVtb3ZlRGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHtcbiAgICAgICAgICB0YWlsLnVuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5hcHBlbmQoaW5zZXJ0ZWQsIHtcbiAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgIH0sIHRhaWwpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2sgPT09IG1hc2s7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZDtcbn0oKTtcbk1hc2tlZC5ERUZBVUxUUyA9IHtcbiAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodikge1xuICAgIHJldHVybiB2O1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uodikge1xuICAgIHJldHVybiB2O1xuICB9XG59O1xuSU1hc2suTWFza2VkID0gTWFza2VkO1xuXG5leHBvcnQgeyBNYXNrZWQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGYgYXMgX3NsaWNlZFRvQXJyYXksIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGkgYXMgX3NldCB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCBNYXNrZWRSYW5nZSBmcm9tICcuL3JhbmdlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIERhdGUgbWFzayAqL1xuXG52YXIgTWFza2VkRGF0ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZERhdGUsIF9NYXNrZWRQYXR0ZXJuKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZERhdGUpO1xuXG4gIC8qKiBQYXR0ZXJuIG1hc2sgZm9yIGRhdGUgYWNjb3JkaW5nIHRvIHtAbGluayBNYXNrZWREYXRlI2Zvcm1hdH0gKi9cblxuICAvKiogU3RhcnQgZGF0ZSAqL1xuXG4gIC8qKiBFbmQgZGF0ZSAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKlxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICovXG4gIGZ1bmN0aW9uIE1hc2tlZERhdGUob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWREYXRlKTtcblxuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREYXRlLkRFRkFVTFRTLCBvcHRzKSk7XG4gIH1cbiAgLyoqXG4gICAgQG92ZXJyaWRlXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRGF0ZSwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIGlmIChvcHRzLm1hc2sgPT09IERhdGUpIGRlbGV0ZSBvcHRzLm1hc2s7XG4gICAgICBpZiAob3B0cy5wYXR0ZXJuKSBvcHRzLm1hc2sgPSBvcHRzLnBhdHRlcm47XG4gICAgICB2YXIgYmxvY2tzID0gb3B0cy5ibG9ja3M7XG4gICAgICBvcHRzLmJsb2NrcyA9IE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTKCkpOyAvLyBhZGp1c3QgeWVhciBibG9ja1xuXG4gICAgICBpZiAob3B0cy5taW4pIG9wdHMuYmxvY2tzLlkuZnJvbSA9IG9wdHMubWluLmdldEZ1bGxZZWFyKCk7XG4gICAgICBpZiAob3B0cy5tYXgpIG9wdHMuYmxvY2tzLlkudG8gPSBvcHRzLm1heC5nZXRGdWxsWWVhcigpO1xuXG4gICAgICBpZiAob3B0cy5taW4gJiYgb3B0cy5tYXggJiYgb3B0cy5ibG9ja3MuWS5mcm9tID09PSBvcHRzLmJsb2Nrcy5ZLnRvKSB7XG4gICAgICAgIG9wdHMuYmxvY2tzLm0uZnJvbSA9IG9wdHMubWluLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBvcHRzLmJsb2Nrcy5tLnRvID0gb3B0cy5tYXguZ2V0TW9udGgoKSArIDE7XG5cbiAgICAgICAgaWYgKG9wdHMuYmxvY2tzLm0uZnJvbSA9PT0gb3B0cy5ibG9ja3MubS50bykge1xuICAgICAgICAgIG9wdHMuYmxvY2tzLmQuZnJvbSA9IG9wdHMubWluLmdldERhdGUoKTtcbiAgICAgICAgICBvcHRzLmJsb2Nrcy5kLnRvID0gb3B0cy5tYXguZ2V0RGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0cy5ibG9ja3MsIHRoaXMuYmxvY2tzLCBibG9ja3MpOyAvLyBhZGQgYXV0b2ZpeFxuXG4gICAgICBPYmplY3Qua2V5cyhvcHRzLmJsb2NrcykuZm9yRWFjaChmdW5jdGlvbiAoYmspIHtcbiAgICAgICAgdmFyIGIgPSBvcHRzLmJsb2Nrc1tia107XG4gICAgICAgIGlmICghKCdhdXRvZml4JyBpbiBiKSAmJiAnYXV0b2ZpeCcgaW4gb3B0cykgYi5hdXRvZml4ID0gb3B0cy5hdXRvZml4O1xuICAgICAgfSk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgdmFyIGRhdGUgPSB0aGlzLmRhdGU7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5pc0NvbXBsZXRlIHx8IHRoaXMuaXNEYXRlRXhpc3QodGhpcy52YWx1ZSkgJiYgZGF0ZSAhPSBudWxsICYmICh0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluIDw9IGRhdGUpICYmICh0aGlzLm1heCA9PSBudWxsIHx8IGRhdGUgPD0gdGhpcy5tYXgpKTtcbiAgICB9XG4gICAgLyoqIENoZWNrcyBpZiBkYXRlIGlzIGV4aXN0cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNEYXRlRXhpc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNEYXRlRXhpc3Qoc3RyKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQodGhpcy5wYXJzZShzdHIsIHRoaXMpLCB0aGlzKS5pbmRleE9mKHN0cikgPj0gMDtcbiAgICB9XG4gICAgLyoqIFBhcnNlZCBEYXRlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoZGF0ZSkge1xuICAgICAgdGhpcy50eXBlZFZhbHVlID0gZGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJ0eXBlZFZhbHVlXCIsIHRoaXMpIDogbnVsbDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwidHlwZWRWYWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tFcXVhbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XG4gICAgICByZXR1cm4gbWFzayA9PT0gRGF0ZSB8fCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwibWFza0VxdWFsc1wiLCB0aGlzKS5jYWxsKHRoaXMsIG1hc2spO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREYXRlO1xufShNYXNrZWRQYXR0ZXJuKTtcbk1hc2tlZERhdGUuREVGQVVMVFMgPSB7XG4gIHBhdHRlcm46ICdkey59YG17Ln1gWScsXG4gIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KGRhdGUpIHtcbiAgICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgICB2YXIgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLicpO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gICAgdmFyIF9zdHIkc3BsaXQgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgX3N0ciRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfc3RyJHNwbGl0LCAzKSxcbiAgICAgICAgZGF5ID0gX3N0ciRzcGxpdDJbMF0sXG4gICAgICAgIG1vbnRoID0gX3N0ciRzcGxpdDJbMV0sXG4gICAgICAgIHllYXIgPSBfc3RyJHNwbGl0MlsyXTtcblxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gIH1cbn07XG5cbk1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGQ6IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAzMSxcbiAgICAgIG1heExlbmd0aDogMlxuICAgIH0sXG4gICAgbToge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxLFxuICAgICAgdG86IDEyLFxuICAgICAgbWF4TGVuZ3RoOiAyXG4gICAgfSxcbiAgICBZOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDE5MDAsXG4gICAgICB0bzogOTk5OVxuICAgIH1cbiAgfTtcbn07XG5cbklNYXNrLk1hc2tlZERhdGUgPSBNYXNrZWREYXRlO1xuXG5leHBvcnQgeyBNYXNrZWREYXRlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBpIGFzIF9zZXQsIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJjb21waWxlZE1hc2tzXCIsIFwiY3VycmVudE1hc2tSZWZcIiwgXCJjdXJyZW50TWFza1wiXTtcblxuLyoqIER5bmFtaWMgbWFzayBmb3IgY2hvb3NpbmcgYXByb3ByaWF0ZSBtYXNrIGluIHJ1bi10aW1lICovXG52YXIgTWFza2VkRHluYW1pYyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkRHluYW1pYywgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWREeW5hbWljKTtcblxuICAvKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG5cbiAgLyoqIENvbXBsaWxlZCB7QGxpbmsgTWFza2VkfSBvcHRpb25zICovXG5cbiAgLyoqIENob29zZXMge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIGlucHV0IHZhbHVlICovXG5cbiAgLyoqXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRHluYW1pYyhvcHRzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZER5bmFtaWMpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREeW5hbWljLkRFRkFVTFRTLCBvcHRzKSk7XG4gICAgX3RoaXMuY3VycmVudE1hc2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICBAb3ZlcnJpZGVcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREeW5hbWljLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgaWYgKCdtYXNrJyBpbiBvcHRzKSB7XG4gICAgICAgIC8vIG1hc2sgY291bGQgYmUgdG90YWxseSBkeW5hbWljIHdpdGggb25seSBgZGlzcGF0Y2hgIG9wdGlvblxuICAgICAgICB0aGlzLmNvbXBpbGVkTWFza3MgPSBBcnJheS5pc0FycmF5KG9wdHMubWFzaykgPyBvcHRzLm1hc2subWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hc2sobSk7XG4gICAgICAgIH0pIDogW107XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2goY2gsIGZsYWdzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kQ2hhcihjaCwgZmxhZ3MpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBseURpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBseURpc3BhdGNoKCkge1xuICAgICAgdmFyIGFwcGVuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IC8vICRGbG93Rml4TWUgLSB0aXJlZCB0byBmaWdodCB3aXRoIHR5cGUgc3lzdGVtXG4gICAgICBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl9yYXdJbnB1dFZhbHVlIDogaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB0YWlsVmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKGluc2VydFZhbHVlLmxlbmd0aCk7XG4gICAgICB2YXIgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHByZXZNYXNrU3RhdGUgPSBwcmV2TWFzayAmJiBwcmV2TWFzay5zdGF0ZTsgLy8gY2xvbmUgZmxhZ3MgdG8gcHJldmVudCBvdmVyd3JpdGluZyBgX2JlZm9yZVRhaWxTdGF0ZWBcblxuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaChhcHBlbmRlZCwgT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MpKTsgLy8gcmVzdG9yZSBzdGF0ZSBhZnRlciBkaXNwYXRjaFxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcbiAgICAgICAgICAvLyBpZiBtYXNrIGNoYW5nZWQgcmVhcHBseSBpbnB1dFxuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcblxuICAgICAgICAgIGlmIChpbnNlcnRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQoaW5zZXJ0VmFsdWUsIHtcbiAgICAgICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gZC5pbnNlcnRlZC5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFpbFZhbHVlKSB7XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxuICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQodGFpbFZhbHVlLCB7XG4gICAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgfSkudGFpbFNoaWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEaXNwYXRjaCBjYW4gZG8gc29tZXRoaW5nIGJhZCB3aXRoIHN0YXRlLCBzb1xuICAgICAgICAgIC8vIHJlc3RvcmUgcHJldiBtYXNrIHN0YXRlXG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IHByZXZNYXNrU3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRFYWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kRWFnZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kRWFnZXIoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Rpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChhcHBlbmRlZCwgdGhpcywgZmxhZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDIsIF90aGlzJGN1cnJlbnRNYXNrO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSAmJiAoIXRoaXMuY3VycmVudE1hc2sgfHwgKF90aGlzJGN1cnJlbnRNYXNrID0gdGhpcy5jdXJyZW50TWFzaykuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzaywgYXJncykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazI7XG5cbiAgICAgIChfdGhpcyRjdXJyZW50TWFzazIgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PT0gbnVsbCB8fCBfdGhpcyRjdXJyZW50TWFzazIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrMi5yZXNldCgpO1xuICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIG0ucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnZhbHVlIDogJyc7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA6ICcnO1xuICAgIH0gLy8gcHJvYmFibHkgdHlwZWRWYWx1ZSBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkeW5hbWljXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7IC8vIGRvdWJsZSBjaGVjayBpdFxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdW5tYXNrZWRWYWx1ZSA9IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMztcblxuICAgICAgcmV0dXJuIEJvb2xlYW4oKF90aGlzJGN1cnJlbnRNYXNrMyA9IHRoaXMuY3VycmVudE1hc2spID09PSBudWxsIHx8IF90aGlzJGN1cnJlbnRNYXNrMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2szLmlzQ29tcGxldGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0ZpbGxlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNDtcblxuICAgICAgcmV0dXJuIEJvb2xlYW4oKF90aGlzJGN1cnJlbnRNYXNrNCA9IHRoaXMuY3VycmVudE1hc2spID09PSBudWxsIHx8IF90aGlzJGN1cnJlbnRNYXNrNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2s0LmlzRmlsbGVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNTtcblxuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSgoX3RoaXMkY3VycmVudE1hc2s1ID0gdGhpcy5jdXJyZW50TWFzaykucmVtb3ZlLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrNSwgYXJndW1lbnRzKSkgLy8gdXBkYXRlIHdpdGggZGlzcGF0Y2hcbiAgICAgICAgLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBseURpc3BhdGNoKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZSxcbiAgICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnN0YXRlO1xuICAgICAgICB9KSxcbiAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICAgIGN1cnJlbnRNYXNrOiB0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suc3RhdGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjb21waWxlZE1hc2tzID0gc3RhdGUuY29tcGlsZWRNYXNrcyxcbiAgICAgICAgICBjdXJyZW50TWFza1JlZiA9IHN0YXRlLmN1cnJlbnRNYXNrUmVmLFxuICAgICAgICAgIGN1cnJlbnRNYXNrID0gc3RhdGUuY3VycmVudE1hc2ssXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIF9leGNsdWRlZCk7XG5cbiAgICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChtLCBtaSkge1xuICAgICAgICByZXR1cm4gbS5zdGF0ZSA9IGNvbXBpbGVkTWFza3NbbWldO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjdXJyZW50TWFza1JlZiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjdXJyZW50TWFza1JlZjtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IGN1cnJlbnRNYXNrO1xuICAgICAgfVxuXG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNjtcblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2s2ID0gdGhpcy5jdXJyZW50TWFzaykuZXh0cmFjdElucHV0LmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrNiwgYXJndW1lbnRzKSA6ICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazcsIF9nZXQzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazcgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRjdXJyZW50TWFzazcsIGFyZ3MpIDogKF9nZXQzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImV4dHJhY3RUYWlsXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQzLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykgdGhpcy5jdXJyZW50TWFzay5kb0NvbW1pdCgpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcygpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazgsIF9nZXQ0O1xuXG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazggPSB0aGlzLmN1cnJlbnRNYXNrKS5uZWFyZXN0SW5wdXRQb3MuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s4LCBhcmdzKSA6IChfZ2V0NCA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJuZWFyZXN0SW5wdXRQb3NcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDQsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvdmVyd3JpdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5vdmVyd3JpdGUgOiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwib3ZlcndyaXRlXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3ZlcndyaXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1wib3ZlcndyaXRlXCIgb3B0aW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gZHluYW1pYyBtYXNrLCB1c2UgdGhpcyBvcHRpb24gaW4gc2libGluZ3MnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZWFnZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5lYWdlciA6IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJlYWdlclwiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGVhZ2VyKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1wiZWFnZXJcIiBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiBkeW5hbWljIG1hc2ssIHVzZSB0aGlzIG9wdGlvbiBpbiBzaWJsaW5ncycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrRXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tFcXVhbHMobWFzaykge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFzaykgJiYgdGhpcy5jb21waWxlZE1hc2tzLmV2ZXJ5KGZ1bmN0aW9uIChtLCBtaSkge1xuICAgICAgICB2YXIgX21hc2skbWk7XG5cbiAgICAgICAgcmV0dXJuIG0ubWFza0VxdWFscygoX21hc2skbWkgPSBtYXNrW21pXSkgPT09IG51bGwgfHwgX21hc2skbWkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9tYXNrJG1pLm1hc2spO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZER5bmFtaWM7XG59KE1hc2tlZCk7XG5NYXNrZWREeW5hbWljLkRFRkFVTFRTID0ge1xuICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYXBwZW5kZWQsIG1hc2tlZCwgZmxhZ3MpIHtcbiAgICBpZiAoIW1hc2tlZC5jb21waWxlZE1hc2tzLmxlbmd0aCkgcmV0dXJuO1xuICAgIHZhciBpbnB1dFZhbHVlID0gbWFza2VkLnJhd0lucHV0VmFsdWU7IC8vIHNpbXVsYXRlIGlucHV0XG5cbiAgICB2YXIgaW5wdXRzID0gbWFza2VkLmNvbXBpbGVkTWFza3MubWFwKGZ1bmN0aW9uIChtLCBpbmRleCkge1xuICAgICAgbS5yZXNldCgpO1xuICAgICAgbS5hcHBlbmQoaW5wdXRWYWx1ZSwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgbS5hcHBlbmQoYXBwZW5kZWQsIGZsYWdzKTtcbiAgICAgIHZhciB3ZWlnaHQgPSBtLnJhd0lucHV0VmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2VpZ2h0OiB3ZWlnaHQsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfTtcbiAgICB9KTsgLy8gcG9wIG1hc2tzIHdpdGggbG9uZ2VyIHZhbHVlcyBmaXJzdFxuXG4gICAgaW5wdXRzLnNvcnQoZnVuY3Rpb24gKGkxLCBpMikge1xuICAgICAgcmV0dXJuIGkyLndlaWdodCAtIGkxLndlaWdodDtcbiAgICB9KTtcbiAgICByZXR1cm4gbWFza2VkLmNvbXBpbGVkTWFza3NbaW5wdXRzWzBdLmluZGV4XTtcbiAgfVxufTtcbklNYXNrLk1hc2tlZER5bmFtaWMgPSBNYXNrZWREeW5hbWljO1xuXG5leHBvcnQgeyBNYXNrZWREeW5hbWljIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogUGF0dGVybiB3aGljaCB2YWxpZGF0ZXMgZW51bSB2YWx1ZXMgKi9cblxudmFyIE1hc2tlZEVudW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRFbnVtLCBfTWFza2VkUGF0dGVybik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRFbnVtKTtcblxuICBmdW5jdGlvbiBNYXNrZWRFbnVtKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRFbnVtKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRFbnVtLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgKi9cbiAgICBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIC8vIFRPRE8gdHlwZVxuICAgICAgaWYgKG9wdHMuZW51bSkgb3B0cy5tYXNrID0gJyonLnJlcGVhdChvcHRzLmVudW1bMF0ubGVuZ3RoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgICBfZ2V0MjtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVudW0uc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pbmRleE9mKF90aGlzLnVubWFza2VkVmFsdWUpID49IDA7XG4gICAgICB9KSAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEVudW07XG59KE1hc2tlZFBhdHRlcm4pO1xuSU1hc2suTWFza2VkRW51bSA9IE1hc2tlZEVudW07XG5cbmV4cG9ydCB7IE1hc2tlZEVudW0gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcblxuLyoqIEdldCBNYXNrZWQgY2xhc3MgYnkgbWFzayB0eXBlICovXG5cbmZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2spIHtcbiAgaWYgKG1hc2sgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWFzayBwcm9wZXJ0eSBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gSU1hc2suTWFza2VkUmVnRXhwOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKGlzU3RyaW5nKG1hc2spKSByZXR1cm4gSU1hc2suTWFza2VkUGF0dGVybjsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRGF0ZSB8fCBtYXNrID09PSBEYXRlKSByZXR1cm4gSU1hc2suTWFza2VkRGF0ZTsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgTnVtYmVyIHx8IHR5cGVvZiBtYXNrID09PSAnbnVtYmVyJyB8fCBtYXNrID09PSBOdW1iZXIpIHJldHVybiBJTWFzay5NYXNrZWROdW1iZXI7IC8vICRGbG93Rml4TWVcblxuICBpZiAoQXJyYXkuaXNBcnJheShtYXNrKSB8fCBtYXNrID09PSBBcnJheSkgcmV0dXJuIElNYXNrLk1hc2tlZER5bmFtaWM7IC8vICRGbG93Rml4TWVcblxuICBpZiAoSU1hc2suTWFza2VkICYmIG1hc2sucHJvdG90eXBlIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzazsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzay5jb25zdHJ1Y3RvcjsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHJldHVybiBJTWFzay5NYXNrZWRGdW5jdGlvbjtcbiAgY29uc29sZS53YXJuKCdNYXNrIG5vdCBmb3VuZCBmb3IgbWFzaycsIG1hc2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiBJTWFzay5NYXNrZWQ7XG59XG4vKiogQ3JlYXRlcyBuZXcge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXNrKG9wdHMpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICBpZiAoSU1hc2suTWFza2VkICYmIG9wdHMgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBvcHRzO1xuICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cyk7XG4gIHZhciBtYXNrID0gb3B0cy5tYXNrOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzaztcbiAgdmFyIE1hc2tlZENsYXNzID0gbWFza2VkQ2xhc3MobWFzayk7XG4gIGlmICghTWFza2VkQ2xhc3MpIHRocm93IG5ldyBFcnJvcignTWFza2VkIGNsYXNzIGlzIG5vdCBmb3VuZCBmb3IgcHJvdmlkZWQgbWFzaywgYXBwcm9wcmlhdGUgbW9kdWxlIG5lZWRzIHRvIGJlIGltcG9ydCBtYW51YWxseSBiZWZvcmUgY3JlYXRpbmcgbWFzay4nKTtcbiAgcmV0dXJuIG5ldyBNYXNrZWRDbGFzcyhvcHRzKTtcbn1cbklNYXNrLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xuXG5leHBvcnQgeyBjcmVhdGVNYXNrIGFzIGRlZmF1bHQsIG1hc2tlZENsYXNzIH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgY3VzdG9tIEZ1bmN0aW9uICovXG5cbnZhciBNYXNrZWRGdW5jdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkRnVuY3Rpb24sIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRnVuY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEZ1bmN0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRGdW5jdGlvbik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRnVuY3Rpb24sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IG9wdHMubWFzaztcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRnVuY3Rpb24ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEZ1bmN0aW9uO1xufShNYXNrZWQpO1xuSU1hc2suTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcblxuZXhwb3J0IHsgTWFza2VkRnVuY3Rpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGYgYXMgX3NsaWNlZFRvQXJyYXksIGkgYXMgX3NldCB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IHsgZXNjYXBlUmVnRXhwLCBub3JtYWxpemVQcmVwYXJlLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbi8qKlxuICBOdW1iZXIgbWFza1xuICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5yYWRpeCAtIFNpbmdsZSBjaGFyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnRob3VzYW5kc1NlcGFyYXRvciAtIFNpbmdsZSBjaGFyXG4gIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb3B0cy5tYXBUb1JhZGl4IC0gQXJyYXkgb2Ygc2luZ2xlIGNoYXJzXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1pblxuICBAcGFyYW0ge251bWJlcn0gb3B0cy5tYXhcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMuc2NhbGUgLSBEaWdpdHMgYWZ0ZXIgcG9pbnRcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLnNpZ25lZCAtIEFsbG93IG5lZ2F0aXZlXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5ub3JtYWxpemVaZXJvcyAtIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZ1xuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucGFkRnJhY3Rpb25hbFplcm9zIC0gRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXG4qL1xudmFyIE1hc2tlZE51bWJlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkTnVtYmVyLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZE51bWJlcik7XG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cblxuICAvKiogKi9cblxuICAvKiogRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuICBmdW5jdGlvbiBNYXNrZWROdW1iZXIob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWROdW1iZXIpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZE51bWJlci5ERUZBVUxUUywgb3B0cykpO1xuICB9XG4gIC8qKlxuICAgIEBvdmVycmlkZVxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZE51bWJlciwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fdXBkYXRlUmVnRXhwcygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVSZWdFeHBzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSZWdFeHBzKCkge1xuICAgICAgLy8gdXNlIGRpZmZlcmVudCByZWdleHAgdG8gcHJvY2VzcyB1c2VyIGlucHV0IChtb3JlIHN0cmljdCwgaW5wdXQgc3VmZml4KSBhbmQgdGFpbCBzaGlmdGluZ1xuICAgICAgdmFyIHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICAgIHZhciBtaWRJbnB1dCA9ICcoMHwoWzEtOV0rXFxcXGQqKSk/JztcbiAgICAgIHZhciBtaWQgPSAnXFxcXGQqJztcbiAgICAgIHZhciBlbmQgPSAodGhpcy5zY2FsZSA/ICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOiAnJykgKyAnJCc7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWRJbnB1dCArIGVuZCk7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHAgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkICsgZW5kKTtcbiAgICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbJyArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwLCAnJyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MDExMDIvaG93LXRvLXByaW50LWEtbnVtYmVyLXdpdGgtY29tbWFzLWFzLXRob3VzYW5kcy1zZXBhcmF0b3JzLWluLWphdmFzY3JpcHRcbiAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShjaCkge1xuICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICBjaCA9IGNoLnJlcGxhY2UodGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCwgdGhpcy5yYWRpeCk7XG5cbiAgICAgIHZhciBub1NlcENoID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhjaCk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBfbm9ybWFsaXplUHJlcGFyZSA9IG5vcm1hbGl6ZVByZXBhcmUoKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9QcmVwYXJlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpcywgbm9TZXBDaF0uY29uY2F0KGFyZ3MpKSksXG4gICAgICAgICAgX25vcm1hbGl6ZVByZXBhcmUyID0gX3NsaWNlZFRvQXJyYXkoX25vcm1hbGl6ZVByZXBhcmUsIDIpLFxuICAgICAgICAgIHByZXBDaCA9IF9ub3JtYWxpemVQcmVwYXJlMlswXSxcbiAgICAgICAgICBkZXRhaWxzID0gX25vcm1hbGl6ZVByZXBhcmUyWzFdO1xuXG4gICAgICBpZiAoY2ggJiYgIW5vU2VwQ2gpIGRldGFpbHMuc2tpcCA9IHRydWU7XG4gICAgICByZXR1cm4gW3ByZXBDaCwgZGV0YWlsc107XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50KHRvKSB7XG4gICAgICB2YXIgZXh0ZW5kT25TZXBhcmF0b3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgIGZvciAodmFyIHBvcyA9IDA7IHBvcyA8IHRvOyArK3Bvcykge1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICBpZiAoZXh0ZW5kT25TZXBhcmF0b3JzKSB0byArPSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSgpIHtcbiAgICAgIHZhciBzbGljZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5fdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc2xpY2UpLmxlbmd0aCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdCA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0MiA9IF9zbGljZWRUb0FycmF5KF90aGlzJF9hZGp1c3RSYW5nZVdpdCwgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzFdO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZXh0cmFjdElucHV0XCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLl92YWx1ZTtcblxuICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHByZXZCZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSk7XG5cbiAgICAgIHZhciBhcHBlbmREZXRhaWxzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX2FwcGVuZENoYXJSYXdcIiwgdGhpcykuY2FsbCh0aGlzLCBjaCwgZmxhZ3MpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fdmFsdWUpO1xuICAgICAgdmFyIGJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG5cbiAgICAgIHZhciBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKGJlZm9yZVRhaWxWYWx1ZSk7XG5cbiAgICAgIGFwcGVuZERldGFpbHMudGFpbFNoaWZ0ICs9IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgYXBwZW5kRGV0YWlscy5za2lwID0gIWFwcGVuZERldGFpbHMucmF3SW5zZXJ0ZWQgJiYgY2ggPT09IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yO1xuICAgICAgcmV0dXJuIGFwcGVuZERldGFpbHM7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRTZXBhcmF0b3JBcm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRTZXBhcmF0b3JBcm91bmQocG9zKSB7XG4gICAgICBpZiAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHtcbiAgICAgICAgdmFyIHNlYXJjaEZyb20gPSBwb3MgLSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGggKyAxO1xuICAgICAgICB2YXIgc2VwYXJhdG9yUG9zID0gdGhpcy52YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBzZWFyY2hGcm9tKTtcbiAgICAgICAgaWYgKHNlcGFyYXRvclBvcyA8PSBwb3MpIHJldHVybiBzZXBhcmF0b3JQb3M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbSwgdG8pIHtcbiAgICAgIHZhciBzZXBhcmF0b3JBcm91bmRGcm9tUG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChmcm9tKTtcblxuICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPj0gMCkgZnJvbSA9IHNlcGFyYXRvckFyb3VuZEZyb21Qb3M7XG5cbiAgICAgIHZhciBzZXBhcmF0b3JBcm91bmRUb1BvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQodG8pO1xuXG4gICAgICBpZiAoc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPj0gMCkgdG8gPSBzZXBhcmF0b3JBcm91bmRUb1BvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0MyA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0NCA9IF9zbGljZWRUb0FycmF5KF90aGlzJF9hZGp1c3RSYW5nZVdpdDMsIDIpO1xuXG4gICAgICBmcm9tUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0NFswXTtcbiAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0NFsxXTtcbiAgICAgIHZhciB2YWx1ZUJlZm9yZVBvcyA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcyk7XG4gICAgICB2YXIgdmFsdWVBZnRlclBvcyA9IHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xuXG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnQodmFsdWVCZWZvcmVQb3MubGVuZ3RoKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWVCZWZvcmVQb3MgKyB2YWx1ZUFmdGVyUG9zKSk7XG5cbiAgICAgIHZhciBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHZhbHVlQmVmb3JlUG9zKTtcblxuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgdGFpbFNoaWZ0OiAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBjdXJzb3JQb3M7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0TGVmdFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zIC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdExlZnRQb3MgPj0gMCkge1xuICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zID0gc2VwYXJhdG9yQXRMZWZ0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJzb3JQb3MgPCBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0UmlnaHRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0UmlnaHRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICAgIHZhciByZWdleHAgPSBmbGFncy5pbnB1dCA/IHRoaXMuX251bWJlclJlZ0V4cElucHV0IDogdGhpcy5fbnVtYmVyUmVnRXhwOyAvLyB2YWxpZGF0ZSBhcyBzdHJpbmdcblxuICAgICAgdmFyIHZhbGlkID0gcmVnZXhwLnRlc3QodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKSk7XG5cbiAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAvLyB2YWxpZGF0ZSBhcyBudW1iZXJcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICB2YWxpZCA9IHZhbGlkICYmICFpc05hTihudW1iZXIpICYmICggLy8gY2hlY2sgbWluIGJvdW5kIGZvciBuZWdhdGl2ZSB2YWx1ZXNcbiAgICAgICAgdGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA+PSAwIHx8IHRoaXMubWluIDw9IHRoaXMubnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1heCBib3VuZCBmb3IgcG9zaXRpdmUgdmFsdWVzXG4gICAgICAgIHRoaXMubWF4ID09IG51bGwgfHwgdGhpcy5tYXggPD0gMCB8fCB0aGlzLm51bWJlciA8PSB0aGlzLm1heCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZCAmJiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgZmxhZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgICAgdmFyIHZhbGlkbnVtID0gbnVtYmVyOyAvLyBjaGVjayBib3VuZHNcblxuICAgICAgICBpZiAodGhpcy5taW4gIT0gbnVsbCkgdmFsaWRudW0gPSBNYXRoLm1heCh2YWxpZG51bSwgdGhpcy5taW4pO1xuICAgICAgICBpZiAodGhpcy5tYXggIT0gbnVsbCkgdmFsaWRudW0gPSBNYXRoLm1pbih2YWxpZG51bSwgdGhpcy5tYXgpO1xuICAgICAgICBpZiAodmFsaWRudW0gIT09IG51bWJlcikgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbGlkbnVtKTtcbiAgICAgICAgdmFyIGZvcm1hdHRlZCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLm5vcm1hbGl6ZVplcm9zKSBmb3JtYXR0ZWQgPSB0aGlzLl9ub3JtYWxpemVaZXJvcyhmb3JtYXR0ZWQpO1xuICAgICAgICBpZiAodGhpcy5wYWRGcmFjdGlvbmFsWmVyb3MgJiYgdGhpcy5zY2FsZSA+IDApIGZvcm1hdHRlZCA9IHRoaXMuX3BhZEZyYWN0aW9uYWxaZXJvcyhmb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IGZvcm1hdHRlZDtcbiAgICAgIH1cblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbm9ybWFsaXplWmVyb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vcm1hbGl6ZVplcm9zKHZhbHVlKSB7XG4gICAgICB2YXIgcGFydHMgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKS5zcGxpdCh0aGlzLnJhZGl4KTsgLy8gcmVtb3ZlIGxlYWRpbmcgemVyb3NcblxuXG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL14oXFxEKikoMCopKFxcZCopLywgZnVuY3Rpb24gKG1hdGNoLCBzaWduLCB6ZXJvcywgbnVtKSB7XG4gICAgICAgIHJldHVybiBzaWduICsgbnVtO1xuICAgICAgfSk7IC8vIGFkZCBsZWFkaW5nIHplcm9cblxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCAmJiAhL1xcZCQvLnRlc3QocGFydHNbMF0pKSBwYXJ0c1swXSA9IHBhcnRzWzBdICsgJzAnO1xuXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UoLzAqJC8sICcnKTsgLy8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXG5cbiAgICAgICAgaWYgKCFwYXJ0c1sxXS5sZW5ndGgpIHBhcnRzLmxlbmd0aCA9IDE7IC8vIHJlbW92ZSBmcmFjdGlvbmFsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHBhcnRzLmpvaW4odGhpcy5yYWRpeCkpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9wYWRGcmFjdGlvbmFsWmVyb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhZEZyYWN0aW9uYWxaZXJvcyh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuICAgICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoIDwgMikgcGFydHMucHVzaCgnJyk7XG4gICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnBhZEVuZCh0aGlzLnNjYWxlLCAnMCcpO1xuICAgICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX25vcm1hbGl6ZVplcm9zKHRoaXMudmFsdWUpKS5yZXBsYWNlKHRoaXMucmFkaXgsICcuJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUucmVwbGFjZSgnLicsIHRoaXMucmFkaXgpLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnVubWFza2VkVmFsdWUpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobikge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCBTdHJpbmcobiksIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKiogUGFyc2VkIE51bWJlciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobnVtYmVyKSB7XG4gICAgICB0aGlzLnR5cGVkVmFsdWUgPSBudW1iZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAgSXMgbmVnYXRpdmUgYWxsb3dlZFxuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsbG93TmVnYXRpdmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpZ25lZCB8fCB0aGlzLm1pbiAhPSBudWxsICYmIHRoaXMubWluIDwgMCB8fCB0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4IDwgMDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkTnVtYmVyO1xufShNYXNrZWQpO1xuTWFza2VkTnVtYmVyLkRFRkFVTFRTID0ge1xuICByYWRpeDogJywnLFxuICB0aG91c2FuZHNTZXBhcmF0b3I6ICcnLFxuICBtYXBUb1JhZGl4OiBbJy4nXSxcbiAgc2NhbGU6IDIsXG4gIHNpZ25lZDogZmFsc2UsXG4gIG5vcm1hbGl6ZVplcm9zOiB0cnVlLFxuICBwYWRGcmFjdGlvbmFsWmVyb3M6IGZhbHNlXG59O1xuSU1hc2suTWFza2VkTnVtYmVyID0gTWFza2VkTnVtYmVyO1xuXG5leHBvcnQgeyBNYXNrZWROdW1iZXIgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLCBpIGFzIF9zZXQgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgUGF0dGVybklucHV0RGVmaW5pdGlvbiwgeyBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TIH0gZnJvbSAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0IFBhdHRlcm5GaXhlZERlZmluaXRpb24gZnJvbSAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0IENodW5rc1RhaWxEZXRhaWxzIGZyb20gJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IFBhdHRlcm5DdXJzb3IgZnJvbSAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxudmFyIF9leGNsdWRlZCA9IFtcIl9ibG9ja3NcIl07XG5cbi8qKlxuICBQYXR0ZXJuIG1hc2tcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHMuYmxvY2tzXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRlZmluaXRpb25zXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnBsYWNlaG9sZGVyQ2hhclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubGF6eVxuKi9cbnZhciBNYXNrZWRQYXR0ZXJuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRQYXR0ZXJuLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFBhdHRlcm4pO1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cblxuICAvKiogU2hvdyBwbGFjZWhvbGRlciBvbmx5IHdoZW4gbmVlZGVkICovXG4gIGZ1bmN0aW9uIE1hc2tlZFBhdHRlcm4oKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFBhdHRlcm4pO1xuXG4gICAgLy8gVE9ETyB0eXBlICRTaGFwZTxNYXNrZWRQYXR0ZXJuT3B0aW9ucz49e30gZG9lcyBub3Qgd29ya1xuICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TLCBvcHRzLmRlZmluaXRpb25zKTtcbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkUGF0dGVybi5ERUZBVUxUUywgb3B0cykpO1xuICB9XG4gIC8qKlxuICAgIEBvdmVycmlkZVxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkUGF0dGVybiwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKCkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICB0aGlzLl9yZWJ1aWxkTWFzaygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9yZWJ1aWxkTWFza1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVidWlsZE1hc2soKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmcyA9IHRoaXMuZGVmaW5pdGlvbnM7XG4gICAgICB0aGlzLl9ibG9ja3MgPSBbXTtcbiAgICAgIHRoaXMuX3N0b3BzID0gW107XG4gICAgICB0aGlzLl9tYXNrZWRCbG9ja3MgPSB7fTtcbiAgICAgIHZhciBwYXR0ZXJuID0gdGhpcy5tYXNrO1xuICAgICAgaWYgKCFwYXR0ZXJuIHx8ICFkZWZzKSByZXR1cm47XG4gICAgICB2YXIgdW5tYXNraW5nQmxvY2sgPSBmYWxzZTtcbiAgICAgIHZhciBvcHRpb25hbEJsb2NrID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwID0gcGF0dGVybi5zbGljZShpKTtcbiAgICAgICAgICAgIHZhciBiTmFtZXMgPSBPYmplY3Qua2V5cyhfdGhpcy5ibG9ja3MpLmZpbHRlcihmdW5jdGlvbiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihiTmFtZSkgPT09IDA7XG4gICAgICAgICAgICB9KTsgLy8gb3JkZXIgYnkga2V5IGxlbmd0aFxuXG4gICAgICAgICAgICBiTmFtZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgICAgIH0pOyAvLyB1c2UgYmxvY2sgbmFtZSB3aXRoIG1heCBsZW5ndGhcblxuICAgICAgICAgICAgdmFyIGJOYW1lID0gYk5hbWVzWzBdO1xuXG4gICAgICAgICAgICBpZiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuICAgICAgICAgICAgICB2YXIgbWFza2VkQmxvY2sgPSBjcmVhdGVNYXNrKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIHBhcmVudDogX3RoaXMsXG4gICAgICAgICAgICAgICAgbGF6eTogX3RoaXMubGF6eSxcbiAgICAgICAgICAgICAgICBlYWdlcjogX3RoaXMuZWFnZXIsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiBfdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBfdGhpcy5vdmVyd3JpdGVcbiAgICAgICAgICAgICAgfSwgX3RoaXMuYmxvY2tzW2JOYW1lXSkpO1xuXG4gICAgICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7IC8vIHN0b3JlIGJsb2NrIGluZGV4XG5cblxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0pIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdID0gW107XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKF90aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICAgIHZhciBpc0lucHV0ID0gKGNoYXIgaW4gZGVmcyk7XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSKSB7XG4gICAgICAgICAgdGhpcy5fc3RvcHMucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoKTtcblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICB1bm1hc2tpbmdCbG9jayA9ICF1bm1hc2tpbmdCbG9jaztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAnWycgfHwgY2hhciA9PT0gJ10nKSB7XG4gICAgICAgICAgb3B0aW9uYWxCbG9jayA9ICFvcHRpb25hbEJsb2NrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcbiAgICAgICAgICArK2k7XG4gICAgICAgICAgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcbiAgICAgICAgICBpc0lucHV0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVmID0gaXNJbnB1dCA/IG5ldyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxuICAgICAgICAgIGVhZ2VyOiB0aGlzLmVhZ2VyLFxuICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgbWFzazogZGVmc1tjaGFyXSxcbiAgICAgICAgICBpc09wdGlvbmFsOiBvcHRpb25hbEJsb2NrXG4gICAgICAgIH0pIDogbmV3IFBhdHRlcm5GaXhlZERlZmluaXRpb24oe1xuICAgICAgICAgIGNoYXI6IGNoYXIsXG4gICAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgICAgaXNVbm1hc2tpbmc6IHVubWFza2luZ0Jsb2NrXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKGRlZik7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XG4gICAgICAgIF9ibG9ja3M6IHRoaXMuX2Jsb2Nrcy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICByZXR1cm4gYi5zdGF0ZTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBfYmxvY2tzID0gc3RhdGUuX2Jsb2NrcyxcbiAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgX2V4Y2x1ZGVkKTtcblxuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIsIGJpKSB7XG4gICAgICAgIHJldHVybiBiLnN0YXRlID0gX2Jsb2Nrc1tiaV07XG4gICAgICB9KTtcblxuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInN0YXRlXCIsIG1hc2tlZFN0YXRlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVzZXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmlzQ29tcGxldGU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNGaWxsZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaXNGaWxsZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNGaXhlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5pc0ZpeGVkO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzT3B0aW9uYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaXNPcHRpb25hbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmRvQ29tbWl0KCk7XG4gICAgICB9KTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciArPSBiLnVubWFza2VkVmFsdWU7XG4gICAgICB9LCAnJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIFRPRE8gcmV0dXJuIF92YWx1ZSB3aGVuIG5vdCBpbiBjaGFuZ2U/XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYi52YWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJhcHBlbmRUYWlsXCIsIHRoaXMpLmNhbGwodGhpcywgdGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kRWFnZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgdmFyIF90aGlzJF9tYXBQb3NUb0Jsb2NrO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgc3RhcnRCbG9ja0luZGV4ID0gKF90aGlzJF9tYXBQb3NUb0Jsb2NrID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCkpID09PSBudWxsIHx8IF90aGlzJF9tYXBQb3NUb0Jsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfbWFwUG9zVG9CbG9jay5pbmRleDtcbiAgICAgIGlmIChzdGFydEJsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7IC8vIFRPRE8gdGVzdCBpZiBpdCB3b3JrcyBmb3IgbmVzdGVkIHBhdHRlcm4gbWFza3NcblxuICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tzdGFydEJsb2NrSW5kZXhdLmlzRmlsbGVkKSArK3N0YXJ0QmxvY2tJbmRleDtcblxuICAgICAgZm9yICh2YXIgYmkgPSBzdGFydEJsb2NrSW5kZXg7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgICB2YXIgZCA9IHRoaXMuX2Jsb2Nrc1tiaV0uX2FwcGVuZEVhZ2VyKCk7XG5cbiAgICAgICAgaWYgKCFkLmluc2VydGVkKSBicmVhaztcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgdmFyIGJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAoIWJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIGZvciAodmFyIGJpID0gYmxvY2tJdGVyLmluZGV4OzsgKytiaSkge1xuICAgICAgICB2YXIgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhO1xuXG4gICAgICAgIHZhciBfYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xuICAgICAgICBpZiAoIV9ibG9jaykgYnJlYWs7XG5cbiAgICAgICAgdmFyIGJsb2NrRGV0YWlscyA9IF9ibG9jay5fYXBwZW5kQ2hhcihjaCwgT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MsIHtcbiAgICAgICAgICBfYmVmb3JlVGFpbFN0YXRlOiAoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID0gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSkgPT09IG51bGwgfHwgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEuX2Jsb2Nrc1tiaV1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHZhciBza2lwID0gYmxvY2tEZXRhaWxzLnNraXA7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJsb2NrRGV0YWlscyk7XG4gICAgICAgIGlmIChza2lwIHx8IGJsb2NrRGV0YWlscy5yYXdJbnNlcnRlZCkgYnJlYWs7IC8vIGdvIG5leHQgY2hhclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGNodW5rVGFpbCA9IG5ldyBDaHVua3NUYWlsRGV0YWlscygpO1xuICAgICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gY2h1bmtUYWlsO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIGJpLCBiRnJvbVBvcywgYlRvUG9zKSB7XG4gICAgICAgIHZhciBibG9ja0NodW5rID0gYi5leHRyYWN0VGFpbChiRnJvbVBvcywgYlRvUG9zKTtcbiAgICAgICAgYmxvY2tDaHVuay5zdG9wID0gX3RoaXMyLl9maW5kU3RvcEJlZm9yZShiaSk7XG4gICAgICAgIGJsb2NrQ2h1bmsuZnJvbSA9IF90aGlzMi5fYmxvY2tTdGFydFBvcyhiaSk7XG4gICAgICAgIGlmIChibG9ja0NodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIGJsb2NrQ2h1bmsuYmxvY2tJbmRleCA9IGJpO1xuICAgICAgICBjaHVua1RhaWwuZXh0ZW5kKGJsb2NrQ2h1bmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjaHVua1RhaWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gJyc7XG4gICAgICB2YXIgaW5wdXQgPSAnJztcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBfLCBmcm9tUG9zLCB0b1Bvcykge1xuICAgICAgICBpbnB1dCArPSBiLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRTdG9wQmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU3RvcEJlZm9yZShibG9ja0luZGV4KSB7XG4gICAgICB2YXIgc3RvcEJlZm9yZTtcblxuICAgICAgZm9yICh2YXIgc2kgPSAwOyBzaSA8IHRoaXMuX3N0b3BzLmxlbmd0aDsgKytzaSkge1xuICAgICAgICB2YXIgc3RvcCA9IHRoaXMuX3N0b3BzW3NpXTtcbiAgICAgICAgaWYgKHN0b3AgPD0gYmxvY2tJbmRleCkgc3RvcEJlZm9yZSA9IHN0b3A7ZWxzZSBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3BCZWZvcmU7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHBsYWNlaG9sZGVyIGRlcGVuZGluZyBvbiBsYXppbmVzcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcih0b0Jsb2NrSW5kZXgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5sYXp5ICYmIHRvQmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlscztcblxuICAgICAgdmFyIHN0YXJ0QmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIGlmICghc3RhcnRCbG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdmFyIHN0YXJ0QmxvY2tJbmRleCA9IHN0YXJ0QmxvY2tJdGVyLmluZGV4O1xuICAgICAgdmFyIGVuZEJsb2NrSW5kZXggPSB0b0Jsb2NrSW5kZXggIT0gbnVsbCA/IHRvQmxvY2tJbmRleCA6IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5zbGljZShzdGFydEJsb2NrSW5kZXgsIGVuZEJsb2NrSW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCFiLmxhenkgfHwgdG9CbG9ja0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIGBfYmxvY2tzYCBtYXkgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICB2YXIgYXJncyA9IGIuX2Jsb2NrcyAhPSBudWxsID8gW2IuX2Jsb2Nrcy5sZW5ndGhdIDogW107XG5cbiAgICAgICAgICB2YXIgYkRldGFpbHMgPSBiLl9hcHBlbmRQbGFjZWhvbGRlci5hcHBseShiLCBhcmdzKTtcblxuICAgICAgICAgIF90aGlzMy5fdmFsdWUgKz0gYkRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYkRldGFpbHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9tYXBQb3NUb0Jsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9tYXBQb3NUb0Jsb2NrKHBvcykge1xuICAgICAgdmFyIGFjY1ZhbCA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBiaSA9IDA7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgICB2YXIgX2Jsb2NrMiA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgIHZhciBibG9ja1N0YXJ0UG9zID0gYWNjVmFsLmxlbmd0aDtcbiAgICAgICAgYWNjVmFsICs9IF9ibG9jazIudmFsdWU7XG5cbiAgICAgICAgaWYgKHBvcyA8PSBhY2NWYWwubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBiaSxcbiAgICAgICAgICAgIG9mZnNldDogcG9zIC0gYmxvY2tTdGFydFBvc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYmxvY2tTdGFydFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmxvY2tTdGFydFBvcyhibG9ja0luZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnNsaWNlKDAsIGJsb2NrSW5kZXgpLnJlZHVjZShmdW5jdGlvbiAocG9zLCBiKSB7XG4gICAgICAgIHJldHVybiBwb3MgKz0gYi52YWx1ZS5sZW5ndGg7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZm9yRWFjaEJsb2Nrc0luUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MpIHtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGZyb21CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGZyb21Qb3MpO1xuXG4gICAgICBpZiAoZnJvbUJsb2NrSXRlcikge1xuICAgICAgICB2YXIgdG9CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRvUG9zKTsgLy8gcHJvY2VzcyBmaXJzdCBibG9ja1xuXG5cbiAgICAgICAgdmFyIGlzU2FtZUJsb2NrID0gdG9CbG9ja0l0ZXIgJiYgZnJvbUJsb2NrSXRlci5pbmRleCA9PT0gdG9CbG9ja0l0ZXIuaW5kZXg7XG4gICAgICAgIHZhciBmcm9tQmxvY2tTdGFydFBvcyA9IGZyb21CbG9ja0l0ZXIub2Zmc2V0O1xuICAgICAgICB2YXIgZnJvbUJsb2NrRW5kUG9zID0gdG9CbG9ja0l0ZXIgJiYgaXNTYW1lQmxvY2sgPyB0b0Jsb2NrSXRlci5vZmZzZXQgOiB0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0udmFsdWUubGVuZ3RoO1xuICAgICAgICBmbih0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0sIGZyb21CbG9ja0l0ZXIuaW5kZXgsIGZyb21CbG9ja1N0YXJ0UG9zLCBmcm9tQmxvY2tFbmRQb3MpO1xuXG4gICAgICAgIGlmICh0b0Jsb2NrSXRlciAmJiAhaXNTYW1lQmxvY2spIHtcbiAgICAgICAgICAvLyBwcm9jZXNzIGludGVybWVkaWF0ZSBibG9ja3NcbiAgICAgICAgICBmb3IgKHZhciBiaSA9IGZyb21CbG9ja0l0ZXIuaW5kZXggKyAxOyBiaSA8IHRvQmxvY2tJdGVyLmluZGV4OyArK2JpKSB7XG4gICAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbYmldLCBiaSwgMCwgdGhpcy5fYmxvY2tzW2JpXS52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgIH0gLy8gcHJvY2VzcyBsYXN0IGJsb2NrXG5cblxuICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1t0b0Jsb2NrSXRlci5pbmRleF0sIHRvQmxvY2tJdGVyLmluZGV4LCAwLCB0b0Jsb2NrSXRlci5vZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHZhciByZW1vdmVEZXRhaWxzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInJlbW92ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBfLCBiRnJvbVBvcywgYlRvUG9zKSB7XG4gICAgICAgIHJlbW92ZURldGFpbHMuYWdncmVnYXRlKGIucmVtb3ZlKGJGcm9tUG9zLCBiVG9Qb3MpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVtb3ZlRGV0YWlscztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgaWYgKCF0aGlzLl9ibG9ja3MubGVuZ3RoKSByZXR1cm4gMDtcbiAgICAgIHZhciBjdXJzb3IgPSBuZXcgUGF0dGVybkN1cnNvcih0aGlzLCBjdXJzb3JQb3MpO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIE5PTkUgc2hvdWxkIG9ubHkgZ28gb3V0IGZyb20gZml4ZWQgdG8gdGhlIHJpZ2h0IVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmIChjdXJzb3IucHVzaFJpZ2h0QmVmb3JlSW5wdXQoKSkgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICBpZiAoY3Vyc29yLnB1c2hMZWZ0QmVmb3JlSW5wdXQoKSkgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIH0gLy8gRk9SQ0UgaXMgb25seSBhYm91dCBhfCogb3RoZXJ3aXNlIGlzIDBcblxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgIC8vIHRyeSB0byBicmVhayBmYXN0IHdoZW4gKnxhXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUZpbGxlZCgpO1xuICAgICAgICAgIGlmIChjdXJzb3Iub2sgJiYgY3Vyc29yLnBvcyA9PT0gY3Vyc29yUG9zKSByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICB9IC8vIGZvcndhcmQgZmxvd1xuXG5cbiAgICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlSW5wdXQoKTtcbiAgICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlRmlsbGVkKCk7IC8vIGJhY2t3YXJkIGZsb3dcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVJbnB1dCgpO1xuICAgICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVSZXF1aXJlZCgpO1xuICAgICAgICAgIGlmIChjdXJzb3Iub2sgJiYgY3Vyc29yLnBvcyA8PSBjdXJzb3JQb3MpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICAgIGlmIChjdXJzb3Iub2sgJiYgY3Vyc29yLnBvcyA8PSBjdXJzb3JQb3MpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSByZXR1cm4gMDtcbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7IC8vIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICAvLyBpZiAoXG4gICAgICAgIC8vICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCkgJiZcbiAgICAgICAgLy8gICAvLyBUT0RPIEhBQ0sgZm9yIGxhenkgaWYgaGFzIGFsaWduZWQgbGVmdCBpbnNpZGUgZml4ZWQgYW5kIGhhcyBjYW1lIHRvIHRoZSBzdGFydCAtIHVzZSBzdGFydCBwb3NpdGlvblxuICAgICAgICAvLyAgICghdGhpcy5sYXp5IHx8IHRoaXMuZXh0cmFjdElucHV0KCkpXG4gICAgICAgIC8vICkgcmV0dXJuIGN1cnNvci5wb3M7XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5SSUdIVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICAvLyBmb3J3YXJkIGZsb3dcbiAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCk7XG4gICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVSZXF1aXJlZCgpO1xuICAgICAgICBpZiAoY3Vyc29yLnB1c2hSaWdodEJlZm9yZUZpbGxlZCgpKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg7IC8vIGJhY2t3YXJkIGZsb3dcblxuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgcmV0dXJuIHRoaXMubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogR2V0IGJsb2NrIGJ5IG5hbWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tlZEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tlZEJsb2NrKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZEJsb2NrcyhuYW1lKVswXTtcbiAgICB9XG4gICAgLyoqIEdldCBhbGwgYmxvY2tzIGJ5IG5hbWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tlZEJsb2Nrc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9ja3MobmFtZSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBpbmRpY2VzID0gdGhpcy5fbWFza2VkQmxvY2tzW25hbWVdO1xuICAgICAgaWYgKCFpbmRpY2VzKSByZXR1cm4gW107XG4gICAgICByZXR1cm4gaW5kaWNlcy5tYXAoZnVuY3Rpb24gKGdpKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuX2Jsb2Nrc1tnaV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUGF0dGVybjtcbn0oTWFza2VkKTtcbk1hc2tlZFBhdHRlcm4uREVGQVVMVFMgPSB7XG4gIGxhenk6IHRydWUsXG4gIHBsYWNlaG9sZGVyQ2hhcjogJ18nXG59O1xuTWFza2VkUGF0dGVybi5TVE9QX0NIQVIgPSAnYCc7XG5NYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSID0gJ1xcXFwnO1xuTWFza2VkUGF0dGVybi5JbnB1dERlZmluaXRpb24gPSBQYXR0ZXJuSW5wdXREZWZpbml0aW9uO1xuTWFza2VkUGF0dGVybi5GaXhlZERlZmluaXRpb24gPSBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xuSU1hc2suTWFza2VkUGF0dGVybiA9IE1hc2tlZFBhdHRlcm47XG5cbmV4cG9ydCB7IE1hc2tlZFBhdHRlcm4gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi8uLi9jb3JlL2hvbGRlci5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJjaHVua3NcIl07XG5cbnZhciBDaHVua3NUYWlsRGV0YWlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiAqL1xuICBmdW5jdGlvbiBDaHVua3NUYWlsRGV0YWlscygpIHtcbiAgICB2YXIgY2h1bmtzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaHVua3NUYWlsRGV0YWlscyk7XG5cbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENodW5rc1RhaWxEZXRhaWxzLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLmNodW5rcy5tYXAoU3RyaW5nKS5qb2luKCcnKTtcbiAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImV4dGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQodGFpbENodW5rKSB7XG4gICAgICBpZiAoIVN0cmluZyh0YWlsQ2h1bmspKSByZXR1cm47XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbENodW5rKSkgdGFpbENodW5rID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbENodW5rKSk7XG4gICAgICB2YXIgbGFzdENodW5rID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgZXh0ZW5kTGFzdCA9IGxhc3RDaHVuayAmJiAoIC8vIGlmIHN0b3BzIGFyZSBzYW1lIG9yIHRhaWwgaGFzIG5vIHN0b3BcbiAgICAgIGxhc3RDaHVuay5zdG9wID09PSB0YWlsQ2h1bmsuc3RvcCB8fCB0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSAmJiAvLyBpZiB0YWlsIGNodW5rIGdvZXMganVzdCBhZnRlciBsYXN0IGNodW5rXG4gICAgICB0YWlsQ2h1bmsuZnJvbSA9PT0gbGFzdENodW5rLmZyb20gKyBsYXN0Q2h1bmsudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgICAgIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDb250aW51b3VzVGFpbERldGFpbHMpIHtcbiAgICAgICAgLy8gY2hlY2sgdGhlIGFiaWxpdHkgdG8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgIGlmIChleHRlbmRMYXN0KSB7XG4gICAgICAgICAgLy8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYXBwZW5kIG5ldyBjaHVua1xuICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykge1xuICAgICAgICBpZiAodGFpbENodW5rLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgIC8vIHVud3JhcCBmbG9hdGluZyBjaHVua3MgdG8gcGFyZW50LCBrZWVwaW5nIGBmcm9tYCBwb3NcbiAgICAgICAgICB2YXIgZmlyc3RUYWlsQ2h1bms7XG5cbiAgICAgICAgICB3aGlsZSAodGFpbENodW5rLmNodW5rcy5sZW5ndGggJiYgdGFpbENodW5rLmNodW5rc1swXS5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICAgIGZpcnN0VGFpbENodW5rID0gdGFpbENodW5rLmNodW5rcy5zaGlmdCgpO1xuICAgICAgICAgICAgZmlyc3RUYWlsQ2h1bmsuZnJvbSArPSB0YWlsQ2h1bmsuZnJvbTtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5kKGZpcnN0VGFpbENodW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gaWYgdGFpbCBjaHVuayBzdGlsbCBoYXMgdmFsdWVcblxuXG4gICAgICAgIGlmICh0YWlsQ2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGlmIGNodW5rcyBjb250YWlucyBzdG9wcywgdGhlbiBwb3B1cCBzdG9wIHRvIGNvbnRhaW5lclxuICAgICAgICAgIHRhaWxDaHVuay5zdG9wID0gdGFpbENodW5rLmJsb2NrSW5kZXg7XG4gICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgaWYgKCEobWFza2VkIGluc3RhbmNlb2YgSU1hc2suTWFza2VkUGF0dGVybikpIHtcbiAgICAgICAgdmFyIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKG1hc2tlZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcblxuICAgICAgZm9yICh2YXIgY2kgPSAwOyBjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCAmJiAhZGV0YWlscy5za2lwOyArK2NpKSB7XG4gICAgICAgIHZhciBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcblxuICAgICAgICB2YXIgbGFzdEJsb2NrSXRlciA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhtYXNrZWQudmFsdWUubGVuZ3RoKTtcblxuICAgICAgICB2YXIgc3RvcCA9IGNodW5rLnN0b3A7XG4gICAgICAgIHZhciBjaHVua0Jsb2NrID0gdm9pZCAwO1xuXG4gICAgICAgIGlmIChzdG9wICE9IG51bGwgJiYgKCAvLyBpZiBibG9jayBub3QgZm91bmQgb3Igc3RvcCBpcyBiZWhpbmQgbGFzdEJsb2NrXG4gICAgICAgICFsYXN0QmxvY2tJdGVyIHx8IGxhc3RCbG9ja0l0ZXIuaW5kZXggPD0gc3RvcCkpIHtcbiAgICAgICAgICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyB8fCAvLyBmb3IgY29udGludW91cyBibG9jayBhbHNvIGNoZWNrIGlmIHN0b3AgaXMgZXhpc3RcbiAgICAgICAgICBtYXNrZWQuX3N0b3BzLmluZGV4T2Yoc3RvcCkgPj0gMCkge1xuICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcihzdG9wKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2h1bmtCbG9jayA9IGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgJiYgbWFza2VkLl9ibG9ja3Nbc3RvcF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2h1bmtCbG9jaykge1xuICAgICAgICAgIHZhciB0YWlsRGV0YWlscyA9IGNodW5rQmxvY2suYXBwZW5kVGFpbChjaHVuayk7XG4gICAgICAgICAgdGFpbERldGFpbHMuc2tpcCA9IGZhbHNlOyAvLyBhbHdheXMgaWdub3JlIHNraXAsIGl0IHdpbGwgYmUgc2V0IG9uIGxhc3RcblxuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRhaWxEZXRhaWxzKTtcbiAgICAgICAgICBtYXNrZWQuX3ZhbHVlICs9IHRhaWxEZXRhaWxzLmluc2VydGVkOyAvLyBnZXQgbm90IGluc2VydGVkIGNoYXJzXG5cbiAgICAgICAgICB2YXIgcmVtYWluQ2hhcnMgPSBjaHVuay50b1N0cmluZygpLnNsaWNlKHRhaWxEZXRhaWxzLnJhd0luc2VydGVkLmxlbmd0aCk7XG4gICAgICAgICAgaWYgKHJlbWFpbkNoYXJzKSBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKHJlbWFpbkNoYXJzLCB7XG4gICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQoY2h1bmsudG9TdHJpbmcoKSwge1xuICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaHVua3M6IHRoaXMuY2h1bmtzLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBjLnN0YXRlO1xuICAgICAgICB9KSxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgICBzdG9wOiB0aGlzLnN0b3AsXG4gICAgICAgIGJsb2NrSW5kZXg6IHRoaXMuYmxvY2tJbmRleFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB2YXIgY2h1bmtzID0gc3RhdGUuY2h1bmtzLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBfZXhjbHVkZWQpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3BzKTtcbiAgICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzLm1hcChmdW5jdGlvbiAoY3N0YXRlKSB7XG4gICAgICAgIHZhciBjaHVuayA9IFwiY2h1bmtzXCIgaW4gY3N0YXRlID8gbmV3IENodW5rc1RhaWxEZXRhaWxzKCkgOiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCk7IC8vICRGbG93Rml4TWUgYWxyZWFkeSBjaGVja2VkIGFib3ZlXG5cbiAgICAgICAgY2h1bmsuc3RhdGUgPSBjc3RhdGU7XG4gICAgICAgIHJldHVybiBjaHVuaztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnNoaWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc2hpZnQoYmVmb3JlUG9zKSB7XG4gICAgICBpZiAoIXRoaXMuY2h1bmtzLmxlbmd0aCB8fCBiZWZvcmVQb3MgIT0gbnVsbCAmJiB0aGlzLmZyb20gPj0gYmVmb3JlUG9zKSByZXR1cm4gJyc7XG4gICAgICB2YXIgY2h1bmtTaGlmdFBvcyA9IGJlZm9yZVBvcyAhPSBudWxsID8gYmVmb3JlUG9zIC0gdGhpcy5mcm9tIDogYmVmb3JlUG9zO1xuICAgICAgdmFyIGNpID0gMDtcblxuICAgICAgd2hpbGUgKGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcbiAgICAgICAgdmFyIHNoaWZ0Q2hhciA9IGNodW5rLnVuc2hpZnQoY2h1bmtTaGlmdFBvcyk7XG5cbiAgICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxuICAgICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAgICsrY2k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgICBpZiAoIXRoaXMuY2h1bmtzLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgdmFyIGNpID0gdGhpcy5jaHVua3MubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKDAgPD0gY2kpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgICB2YXIgc2hpZnRDaGFyID0gY2h1bmsuc2hpZnQoKTtcblxuICAgICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcbiAgICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgICAgLS1jaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcbiAgICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaHVua3NUYWlsRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IHsgQ2h1bmtzVGFpbERldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5cbnZhciBQYXR0ZXJuQ3Vyc29yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGF0dGVybkN1cnNvcihtYXNrZWQsIHBvcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuQ3Vyc29yKTtcblxuICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICAgIHRoaXMuX2xvZyA9IFtdO1xuXG4gICAgdmFyIF9yZWYgPSBtYXNrZWQuX21hcFBvc1RvQmxvY2socG9zKSB8fCAocG9zIDwgMCA/IC8vIGZpcnN0XG4gICAge1xuICAgICAgaW5kZXg6IDAsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9IDogLy8gbGFzdFxuICAgIHtcbiAgICAgIGluZGV4OiB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aCxcbiAgICAgIG9mZnNldDogMFxuICAgIH0pLFxuICAgICAgICBvZmZzZXQgPSBfcmVmLm9mZnNldCxcbiAgICAgICAgaW5kZXggPSBfcmVmLmluZGV4O1xuXG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMub2sgPSBmYWxzZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXR0ZXJuQ3Vyc29yLCBbe1xuICAgIGtleTogXCJibG9ja1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLl9ibG9ja3NbdGhpcy5pbmRleF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBvc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLl9ibG9ja1N0YXJ0UG9zKHRoaXMuaW5kZXgpICsgdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgb2s6IHRoaXMub2tcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFN0YXRlKCkge1xuICAgICAgdGhpcy5fbG9nLnB1c2godGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBvcFN0YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgdmFyIHMgPSB0aGlzLl9sb2cucG9wKCk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBzO1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJpbmRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kQmxvY2soKSB7XG4gICAgICBpZiAodGhpcy5ibG9jaykgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5pbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3B1c2hMZWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdXNoTGVmdChmbikge1xuICAgICAgdGhpcy5wdXNoU3RhdGUoKTtcblxuICAgICAgZm9yICh0aGlzLmJpbmRCbG9jaygpOyAwIDw9IHRoaXMuaW5kZXg7IC0tdGhpcy5pbmRleCwgdGhpcy5vZmZzZXQgPSAoKF90aGlzJGJsb2NrID0gdGhpcy5ibG9jaykgPT09IG51bGwgfHwgX3RoaXMkYmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGJsb2NrLnZhbHVlLmxlbmd0aCkgfHwgMCkge1xuICAgICAgICB2YXIgX3RoaXMkYmxvY2s7XG5cbiAgICAgICAgaWYgKGZuKCkpIHJldHVybiB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMub2sgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3B1c2hSaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVzaFJpZ2h0KGZuKSB7XG4gICAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuXG4gICAgICBmb3IgKHRoaXMuYmluZEJsb2NrKCk7IHRoaXMuaW5kZXggPCB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aDsgKyt0aGlzLmluZGV4LCB0aGlzLm9mZnNldCA9IDApIHtcbiAgICAgICAgaWYgKGZuKCkpIHJldHVybiB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMub2sgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaExlZnRCZWZvcmVGaWxsZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaExlZnRCZWZvcmVGaWxsZWQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcHVzaExlZnQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuYmxvY2suaXNGaXhlZCB8fCAhX3RoaXMuYmxvY2sudmFsdWUpIHJldHVybjtcbiAgICAgICAgX3RoaXMub2Zmc2V0ID0gX3RoaXMuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzLm9mZnNldCwgRElSRUNUSU9OLkZPUkNFX0xFRlQpO1xuICAgICAgICBpZiAoX3RoaXMub2Zmc2V0ICE9PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoTGVmdEJlZm9yZUlucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hMZWZ0QmVmb3JlSW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gY2FzZXM6XG4gICAgICAvLyBmaWxsZWQgaW5wdXQ6IDAwfFxuICAgICAgLy8gb3B0aW9uYWwgZW1wdHkgaW5wdXQ6IDAwW118XG4gICAgICAvLyBuZXN0ZWQgYmxvY2s6IFhYPFtdPnxcbiAgICAgIHJldHVybiB0aGlzLl9wdXNoTGVmdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczIuYmxvY2suaXNGaXhlZCkgcmV0dXJuO1xuICAgICAgICBfdGhpczIub2Zmc2V0ID0gX3RoaXMyLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyhfdGhpczIub2Zmc2V0LCBESVJFQ1RJT04uTEVGVCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hMZWZ0QmVmb3JlUmVxdWlyZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaExlZnRCZWZvcmVSZXF1aXJlZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcHVzaExlZnQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMzLmJsb2NrLmlzRml4ZWQgfHwgX3RoaXMzLmJsb2NrLmlzT3B0aW9uYWwgJiYgIV90aGlzMy5ibG9jay52YWx1ZSkgcmV0dXJuO1xuICAgICAgICBfdGhpczMub2Zmc2V0ID0gX3RoaXMzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyhfdGhpczMub2Zmc2V0LCBESVJFQ1RJT04uTEVGVCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hSaWdodEJlZm9yZUZpbGxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoUmlnaHRCZWZvcmVGaWxsZWQoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuX3B1c2hSaWdodChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczQuYmxvY2suaXNGaXhlZCB8fCAhX3RoaXM0LmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICAgIF90aGlzNC5vZmZzZXQgPSBfdGhpczQuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzNC5vZmZzZXQsIERJUkVDVElPTi5GT1JDRV9SSUdIVCk7XG4gICAgICAgIGlmIChfdGhpczQub2Zmc2V0ICE9PSBfdGhpczQuYmxvY2sudmFsdWUubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoUmlnaHRCZWZvcmVJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoUmlnaHRCZWZvcmVJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcHVzaFJpZ2h0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNS5ibG9jay5pc0ZpeGVkKSByZXR1cm47IC8vIGNvbnN0IG8gPSB0aGlzLm9mZnNldDtcblxuICAgICAgICBfdGhpczUub2Zmc2V0ID0gX3RoaXM1LmJsb2NrLm5lYXJlc3RJbnB1dFBvcyhfdGhpczUub2Zmc2V0LCBESVJFQ1RJT04uTk9ORSk7IC8vIEhBQ0sgY2FzZXMgbGlrZSAoU1RJTEwgRE9FUyBOT1QgV09SSyBGT1IgTkVTVEVEKVxuICAgICAgICAvLyBhYXxYXG4gICAgICAgIC8vIGFhPFh8W10+WF8gICAgLSB0aGlzIHdpbGwgbm90IHdvcmtcbiAgICAgICAgLy8gaWYgKG8gJiYgbyA9PT0gdGhpcy5vZmZzZXQgJiYgdGhpcy5ibG9jayBpbnN0YW5jZW9mIFBhdHRlcm5JbnB1dERlZmluaXRpb24pIGNvbnRpbnVlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hSaWdodEJlZm9yZVJlcXVpcmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hSaWdodEJlZm9yZVJlcXVpcmVkKCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9wdXNoUmlnaHQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM2LmJsb2NrLmlzRml4ZWQgfHwgX3RoaXM2LmJsb2NrLmlzT3B0aW9uYWwgJiYgIV90aGlzNi5ibG9jay52YWx1ZSkgcmV0dXJuOyAvLyBUT0RPIGNoZWNrIHxbKl1YWF9cblxuICAgICAgICBfdGhpczYub2Zmc2V0ID0gX3RoaXM2LmJsb2NrLm5lYXJlc3RJbnB1dFBvcyhfdGhpczYub2Zmc2V0LCBESVJFQ1RJT04uTk9ORSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5DdXJzb3I7XG59KCk7XG5cbmV4cG9ydCB7IFBhdHRlcm5DdXJzb3IgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBQYXR0ZXJuRml4ZWREZWZpbml0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIFBhdHRlcm5GaXhlZERlZmluaXRpb24ob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLmlzRml4ZWQgPSB0cnVlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5GaXhlZERlZmluaXRpb24sIFt7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVW5tYXNraW5nID8gdGhpcy52YWx1ZSA6ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuX3ZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgIGlmICghdGhpcy5fdmFsdWUpIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgcmV0dXJuIG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1heFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgcmV0dXJuIGZsYWdzLnJhdyAmJiB0aGlzLl9pc1Jhd0lucHV0ICYmIHRoaXMuX3ZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKSB8fCAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzRmlsbGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuY2hhciA9PT0gY2g7XG4gICAgICB2YXIgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgIXRoaXMuZWFnZXIgJiYgIWZsYWdzLnRhaWw7XG4gICAgICBpZiAoaXNSZXNvbHZlZCkgZGV0YWlscy5yYXdJbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRFYWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kRWFnZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXBwZW5kQ2hhcih0aGlzLmNoYXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygnJyk7XG4gICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyKHN0clswXSwgZmxhZ3MpO1xuXG4gICAgICBpZiAodGFpbCAhPSBudWxsKSB7XG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbCh0YWlsKS50YWlsU2hpZnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF92YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgIF9pc1Jhd0lucHV0OiB0aGlzLl9pc1Jhd0lucHV0XG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xufSgpO1xuXG5leHBvcnQgeyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4uL2ZhY3RvcnkuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vLi4vY29yZS9ob2xkZXIuanMnO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wibWFza1wiXTtcbnZhciBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TID0ge1xuICAnMCc6IC9cXGQvLFxuICAnYSc6IC9bXFx1MDA0MS1cXHUwMDVBXFx1MDA2MS1cXHUwMDdBXFx1MDBBQVxcdTAwQjVcXHUwMEJBXFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFQ1xcdTAyRUVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4QS1cXHUwNTI3XFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MjAtXFx1MDY0QVxcdTA2NkVcXHUwNjZGXFx1MDY3MS1cXHUwNkQzXFx1MDZENVxcdTA2RTVcXHUwNkU2XFx1MDZFRVxcdTA2RUZcXHUwNkZBLVxcdTA2RkNcXHUwNkZGXFx1MDcxMFxcdTA3MTItXFx1MDcyRlxcdTA3NEQtXFx1MDdBNVxcdTA3QjFcXHUwN0NBLVxcdTA3RUFcXHUwN0Y0XFx1MDdGNVxcdTA3RkFcXHUwODAwLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwOEEwXFx1MDhBMi1cXHUwOEFDXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5NzdcXHUwOTc5LVxcdTA5N0ZcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJEXFx1MDlDRVxcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUxXFx1MDlGMFxcdTA5RjFcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTcyLVxcdTBBNzRcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkRcXHUwQUQwXFx1MEFFMFxcdTBBRTFcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzRFxcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI3MVxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJEMFxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDM0RcXHUwQzU4XFx1MEM1OVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRjFcXHUwQ0YyXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDNBXFx1MEQzRFxcdTBENEVcXHUwRDYwXFx1MEQ2MVxcdTBEN0EtXFx1MEQ3RlxcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRTAxLVxcdTBFMzBcXHUwRTMyXFx1MEUzM1xcdTBFNDAtXFx1MEU0NlxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUIwXFx1MEVCMlxcdTBFQjNcXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjQwLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjg4LVxcdTBGOENcXHUxMDAwLVxcdTEwMkFcXHUxMDNGXFx1MTA1MC1cXHUxMDU1XFx1MTA1QS1cXHUxMDVEXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2RS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4RVxcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MTBEMC1cXHUxMEZBXFx1MTBGQy1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2N0ZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUNcXHUxOTUwLVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUMxLVxcdTE5QzdcXHUxQTAwLVxcdTFBMTZcXHUxQTIwLVxcdTFBNTRcXHUxQUE3XFx1MUIwNS1cXHUxQjMzXFx1MUI0NS1cXHUxQjRCXFx1MUI4My1cXHUxQkEwXFx1MUJBRVxcdTFCQUZcXHUxQkJBLVxcdTFCRTVcXHUxQzAwLVxcdTFDMjNcXHUxQzRELVxcdTFDNEZcXHUxQzVBLVxcdTFDN0RcXHUxQ0U5LVxcdTFDRUNcXHUxQ0VFLVxcdTFDRjFcXHUxQ0Y1XFx1MUNGNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEyRFxcdTIxMkYtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTgzXFx1MjE4NFxcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDNjAtXFx1MkNFNFxcdTJDRUItXFx1MkNFRVxcdTJDRjJcXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkUyRlxcdTMwMDVcXHUzMDA2XFx1MzAzMS1cXHUzMDM1XFx1MzAzQlxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlELVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkRcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQkFcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQ0NcXHVBMDAwLVxcdUE0OENcXHVBNEQwLVxcdUE0RkRcXHVBNTAwLVxcdUE2MENcXHVBNjEwLVxcdUE2MUZcXHVBNjJBXFx1QTYyQlxcdUE2NDAtXFx1QTY2RVxcdUE2N0YtXFx1QTY5N1xcdUE2QTAtXFx1QTZFNVxcdUE3MTctXFx1QTcxRlxcdUE3MjItXFx1QTc4OFxcdUE3OEItXFx1QTc4RVxcdUE3OTAtXFx1QTc5M1xcdUE3QTAtXFx1QTdBQVxcdUE3RjgtXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUE4NDAtXFx1QTg3M1xcdUE4ODItXFx1QThCM1xcdUE4RjItXFx1QThGN1xcdUE4RkJcXHVBOTBBLVxcdUE5MjVcXHVBOTMwLVxcdUE5NDZcXHVBOTYwLVxcdUE5N0NcXHVBOTg0LVxcdUE5QjJcXHVBOUNGXFx1QUEwMC1cXHVBQTI4XFx1QUE0MC1cXHVBQTQyXFx1QUE0NC1cXHVBQTRCXFx1QUE2MC1cXHVBQTc2XFx1QUE3QVxcdUFBODAtXFx1QUFBRlxcdUFBQjFcXHVBQUI1XFx1QUFCNlxcdUFBQjktXFx1QUFCRFxcdUFBQzBcXHVBQUMyXFx1QUFEQi1cXHVBQUREXFx1QUFFMC1cXHVBQUVBXFx1QUFGMi1cXHVBQUY0XFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXFx1QUJDMC1cXHVBQkUyXFx1QUMwMC1cXHVEN0EzXFx1RDdCMC1cXHVEN0M2XFx1RDdDQi1cXHVEN0ZCXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYyMS1cXHVGRjNBXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXS8sXG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyMDc1MDcwXG4gICcqJzogLy4vXG59O1xuLyoqICovXG5cbnZhciBQYXR0ZXJuSW5wdXREZWZpbml0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIFBhdHRlcm5JbnB1dERlZmluaXRpb24ob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKTtcblxuICAgIHZhciBtYXNrID0gb3B0cy5tYXNrLFxuICAgICAgICBibG9ja09wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0cywgX2V4Y2x1ZGVkKTtcblxuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBibG9ja09wdHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5JbnB1dERlZmluaXRpb24sIFt7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5tYXNrZWQucmVzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgaWYgKGZyb21Qb3MgPT09IDAgJiYgdG9Qb3MgPj0gMSkge1xuICAgICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC52YWx1ZSB8fCAodGhpcy5pc0ZpbGxlZCAmJiAhdGhpcy5pc09wdGlvbmFsID8gdGhpcy5wbGFjZWhvbGRlckNoYXIgOiAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLm1hc2tlZC52YWx1ZSkgfHwgdGhpcy5pc09wdGlvbmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICh0aGlzLmlzRmlsbGVkKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMubWFza2VkLnN0YXRlOyAvLyBzaW11bGF0ZSBpbnB1dFxuXG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMubWFza2VkLl9hcHBlbmRDaGFyKGNoLCBmbGFncyk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkICYmIHRoaXMuZG9WYWxpZGF0ZShmbGFncykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSBkZXRhaWxzLnJhd0luc2VydGVkID0gJyc7XG4gICAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsICYmICF0aGlzLmxhenkgJiYgIWZsYWdzLmlucHV0KSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcbiAgICAgIH1cblxuICAgICAgZGV0YWlscy5za2lwID0gIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbDtcbiAgICAgIHRoaXMuaXNGaWxsZWQgPSBCb29sZWFuKGRldGFpbHMuaW5zZXJ0ZWQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkO1xuXG4gICAgICAvLyBUT0RPIHByb2JhYmx5IHNob3VsZCBiZSBkb25lIHZpYSBfYXBwZW5kQ2hhclxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQgPSB0aGlzLm1hc2tlZCkuYXBwZW5kLmFwcGx5KF90aGlzJG1hc2tlZCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLmlzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kRWFnZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDI7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkMiA9IHRoaXMubWFza2VkKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRtYXNrZWQyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMztcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQzID0gdGhpcy5tYXNrZWQpLmFwcGVuZFRhaWwuYXBwbHkoX3RoaXMkbWFza2VkMywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBib3VuZFBvcyA9IE1hdGgubWluKE1hdGgubWF4KGN1cnNvclBvcywgbWluUG9zKSwgbWF4UG9zKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtaW5Qb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBib3VuZFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDQsIF90aGlzJHBhcmVudDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQ0ID0gdGhpcy5tYXNrZWQpLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkbWFza2VkNCwgYXJndW1lbnRzKSAmJiAoIXRoaXMucGFyZW50IHx8IChfdGhpcyRwYXJlbnQgPSB0aGlzLnBhcmVudCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRwYXJlbnQsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXNrZWQ6IHRoaXMubWFza2VkLnN0YXRlLFxuICAgICAgICBpc0ZpbGxlZDogdGhpcy5pc0ZpbGxlZFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB0aGlzLm1hc2tlZC5zdGF0ZSA9IHN0YXRlLm1hc2tlZDtcbiAgICAgIHRoaXMuaXNGaWxsZWQgPSBzdGF0ZS5pc0ZpbGxlZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbn0oKTtcblxuZXhwb3J0IHsgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgUGF0dGVybklucHV0RGVmaW5pdGlvbiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcblxuLyoqIE1hc2sgcGlwZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIHR5cGVzICovXG5cbnZhciBQSVBFX1RZUEUgPSB7XG4gIE1BU0tFRDogJ3ZhbHVlJyxcbiAgVU5NQVNLRUQ6ICd1bm1hc2tlZFZhbHVlJyxcbiAgVFlQRUQ6ICd0eXBlZFZhbHVlJ1xufTtcbi8qKiBDcmVhdGVzIG5ldyBwaXBlIGZ1bmN0aW9uIGRlcGVuZGluZyBvbiBtYXNrIHR5cGUsIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gb3B0aW9ucyAqL1xuXG5mdW5jdGlvbiBjcmVhdGVQaXBlKG1hc2spIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFBJUEVfVFlQRS5NQVNLRUQ7XG4gIHZhciB0byA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogUElQRV9UWVBFLk1BU0tFRDtcbiAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2sobWFzayk7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gbWFza2VkLnJ1bklzb2xhdGVkKGZ1bmN0aW9uIChtKSB7XG4gICAgICBtW2Zyb21dID0gdmFsdWU7XG4gICAgICByZXR1cm4gbVt0b107XG4gICAgfSk7XG4gIH07XG59XG4vKiogUGlwZXMgdmFsdWUgdGhyb3VnaCBtYXNrIGRlcGVuZGluZyBvbiBtYXNrIHR5cGUsIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gb3B0aW9ucyAqL1xuXG5mdW5jdGlvbiBwaXBlKHZhbHVlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwaXBlQXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGlwZUFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVBpcGUuYXBwbHkodm9pZCAwLCBwaXBlQXJncykodmFsdWUpO1xufVxuSU1hc2suUElQRV9UWVBFID0gUElQRV9UWVBFO1xuSU1hc2suY3JlYXRlUGlwZSA9IGNyZWF0ZVBpcGU7XG5JTWFzay5waXBlID0gcGlwZTtcblxuZXhwb3J0IHsgUElQRV9UWVBFLCBjcmVhdGVQaXBlLCBwaXBlIH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgZiBhcyBfc2xpY2VkVG9BcnJheSB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCB7IG5vcm1hbGl6ZVByZXBhcmUgfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogUGF0dGVybiB3aGljaCBhY2NlcHRzIHJhbmdlcyAqL1xuXG52YXIgTWFza2VkUmFuZ2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRSYW5nZSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkUmFuZ2UpO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZFJhbmdlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSYW5nZSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkUmFuZ2UsIFt7XG4gICAga2V5OiBcIl9tYXRjaEZyb21cIixcbiAgICBnZXQ6XG4gICAgLyoqXG4gICAgICBPcHRpb25hbGx5IHNldHMgbWF4IGxlbmd0aCBvZiBwYXR0ZXJuLlxuICAgICAgVXNlZCB3aGVuIHBhdHRlcm4gbGVuZ3RoIGlzIGxvbmdlciB0aGVuIGB0b2AgcGFyYW0gbGVuZ3RoLiBQYWRzIHplcm9zIGF0IHN0YXJ0IGluIHRoaXMgY2FzZS5cbiAgICAqL1xuXG4gICAgLyoqIE1pbiBib3VuZCAqL1xuXG4gICAgLyoqIE1heCBib3VuZCAqL1xuXG4gICAgLyoqICovXG4gICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoIC0gU3RyaW5nKHRoaXMuZnJvbSkubGVuZ3RoO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgLy8gVE9ETyB0eXBlXG4gICAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHRvOiB0aGlzLnRvIHx8IDAsXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSB8fCAwLFxuICAgICAgICBtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoIHx8IDBcbiAgICAgIH0sIG9wdHMpO1xuICAgICAgdmFyIG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XG4gICAgICBpZiAob3B0cy5tYXhMZW5ndGggIT0gbnVsbCkgbWF4TGVuZ3RoID0gTWF0aC5tYXgobWF4TGVuZ3RoLCBvcHRzLm1heExlbmd0aCk7XG4gICAgICBvcHRzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKG9wdHMudG8pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciBzYW1lQ2hhcnNDb3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XG4gICAgICAgICsrc2FtZUNoYXJzQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIG9wdHMubWFzayA9IHRvU3RyLnNsaWNlKDAsIHNhbWVDaGFyc0NvdW50KS5yZXBsYWNlKC8wL2csICdcXFxcMCcpICsgJzAnLnJlcGVhdChtYXhMZW5ndGggLSBzYW1lQ2hhcnNDb3VudCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJpc0NvbXBsZXRlXCIsIHRoaXMpICYmIEJvb2xlYW4odGhpcy52YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJvdW5kYXJpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYm91bmRhcmllcyhzdHIpIHtcbiAgICAgIHZhciBtaW5zdHIgPSAnJztcbiAgICAgIHZhciBtYXhzdHIgPSAnJztcblxuICAgICAgdmFyIF9yZWYgPSBzdHIubWF0Y2goL14oXFxEKikoXFxkKikoXFxEKikvKSB8fCBbXSxcbiAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDMpLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjJbMV0sXG4gICAgICAgICAgbnVtID0gX3JlZjJbMl07XG5cbiAgICAgIGlmIChudW0pIHtcbiAgICAgICAgbWluc3RyID0gJzAnLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xuICAgICAgICBtYXhzdHIgPSAnOScucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICB9XG5cbiAgICAgIG1pbnN0ciA9IG1pbnN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICBtYXhzdHIgPSBtYXhzdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnOScpO1xuICAgICAgcmV0dXJuIFttaW5zdHIsIG1heHN0cl07XG4gICAgfSAvLyBUT0RPIHN0ciBpcyBhIHNpbmdsZSBjaGFyIGV2ZXJ5dGltZVxuXG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBkZXRhaWxzO1xuXG4gICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUgPSBub3JtYWxpemVQcmVwYXJlKF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiZG9QcmVwYXJlXCIsIHRoaXMpLmNhbGwodGhpcywgY2gucmVwbGFjZSgvXFxEL2csICcnKSwgZmxhZ3MpKTtcblxuICAgICAgdmFyIF9ub3JtYWxpemVQcmVwYXJlMiA9IF9zbGljZWRUb0FycmF5KF9ub3JtYWxpemVQcmVwYXJlLCAyKTtcblxuICAgICAgY2ggPSBfbm9ybWFsaXplUHJlcGFyZTJbMF07XG4gICAgICBkZXRhaWxzID0gX25vcm1hbGl6ZVByZXBhcmUyWzFdO1xuICAgICAgaWYgKCF0aGlzLmF1dG9maXggfHwgIWNoKSByZXR1cm4gY2g7XG4gICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIG5leHRWYWwgPSB0aGlzLnZhbHVlICsgY2g7XG4gICAgICBpZiAobmV4dFZhbC5sZW5ndGggPiB0aGlzLm1heExlbmd0aCkgcmV0dXJuICcnO1xuXG4gICAgICB2YXIgX3RoaXMkYm91bmRhcmllcyA9IHRoaXMuYm91bmRhcmllcyhuZXh0VmFsKSxcbiAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzMiA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMsIDIpLFxuICAgICAgICAgIG1pbnN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzBdLFxuICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzFdO1xuXG4gICAgICBpZiAoTnVtYmVyKG1heHN0cikgPCB0aGlzLmZyb20pIHJldHVybiBmcm9tU3RyW25leHRWYWwubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChOdW1iZXIobWluc3RyKSA+IHRoaXMudG8pIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b2ZpeCA9PT0gJ3BhZCcgJiYgbmV4dFZhbC5sZW5ndGggPCB0aGlzLm1heExlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBbJycsIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXSArIGNoLCBmbGFncykpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b1N0cltuZXh0VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2g7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgdmFyIHN0ciA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgZmlyc3ROb25aZXJvID0gc3RyLnNlYXJjaCgvW14wXS8pO1xuICAgICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gLTEgJiYgc3RyLmxlbmd0aCA8PSB0aGlzLl9tYXRjaEZyb20pIHJldHVybiB0cnVlO1xuXG4gICAgICB2YXIgX3RoaXMkYm91bmRhcmllczMgPSB0aGlzLmJvdW5kYXJpZXMoc3RyKSxcbiAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzNCA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMzLCAyKSxcbiAgICAgICAgICBtaW5zdHIgPSBfdGhpcyRib3VuZGFyaWVzNFswXSxcbiAgICAgICAgICBtYXhzdHIgPSBfdGhpcyRib3VuZGFyaWVzNFsxXTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZyb20gPD0gTnVtYmVyKG1heHN0cikgJiYgTnVtYmVyKG1pbnN0cikgPD0gdGhpcy50byAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSYW5nZTtcbn0oTWFza2VkUGF0dGVybik7XG5JTWFzay5NYXNrZWRSYW5nZSA9IE1hc2tlZFJhbmdlO1xuXG5leHBvcnQgeyBNYXNrZWRSYW5nZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXG5cbnZhciBNYXNrZWRSZWdFeHAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJlZ0V4cCwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSZWdFeHApO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZFJlZ0V4cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUmVnRXhwKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSZWdFeHAsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuc2VhcmNoKG9wdHMubWFzaykgPj0gMDtcbiAgICAgIH07XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJlZ0V4cC5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUmVnRXhwO1xufShNYXNrZWQpO1xuSU1hc2suTWFza2VkUmVnRXhwID0gTWFza2VkUmVnRXhwO1xuXG5leHBvcnQgeyBNYXNrZWRSZWdFeHAgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL3BheW1lbnQuc2Nzcyc7XG5pbXBvcnQgJ2NvbW1vbi9kcm9wZG93bi9kcm9wZG93bi5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9jYWxlbmRhci9jYWxlbmRhci5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9idXR0b24vYnV0dG9uLmpzJztcblxubGV0IHBheW1lbnRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXltZW50Jyk7XG5cbmZvciAobGV0IGVsZW1lbnQgb2YgcGF5bWVudEVsZW1lbnRzKSB7XG4gIGxldCBwYXltZW50UHJpY2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50X19wcmljZScpO1xuICBsZXQgcGF5bWVudERhdGVwaWNrZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhcl9fZGF0ZXBpY2tlcicpO1xuICBsZXQgcGF5bWVudENvc3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50X19jb3N0Jyk7XG4gIGxldCBwYXltZW50UmVzdWx0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudF9fcmVzdWx0Jyk7XG4gIGxldCBwYXltZW50RmVlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudF9fZmVlJyk7XG4gIGxldCBwYXltZW50QWRkaXRpb25hbEZlZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBheW1lbnRfX2FkZGl0aW9uYWwtZmVlJyk7XG5cbiAgcGF5bWVudERhdGVwaWNrZXIub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgcGF5bWVudENvc3QucXVlcnlTZWxlY3RvcignLnBheW1lbnRfX3RleHQnKS50ZXh0Q29udGVudCA9IHBheW1lbnRQcmljZS5xdWVyeVNlbGVjdG9yQWxsKCdwJylbMF0udGV4dENvbnRlbnQrJ3ggJytwYXltZW50RGF0ZXBpY2tlci5kYXRhc2V0LnNlbGVjdGVkRGF5cysnINGB0YPRgtC+0LonO1xuICAgIHBheW1lbnRDb3N0LnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50X19jb3VudCcpLnRleHRDb250ZW50ID0gKCtwYXltZW50UHJpY2UudGV4dENvbnRlbnQuc3BsaXQoJ+KCvScpWzBdICogcGF5bWVudERhdGVwaWNrZXIuZGF0YXNldC5zZWxlY3RlZERheXMpKyfigr0nO1xuICAgIHBheW1lbnRSZXN1bHQucXVlcnlTZWxlY3RvcignLnBheW1lbnRfX2NvdW50JykudGV4dENvbnRlbnQgPSArcGF5bWVudENvc3QucXVlcnlTZWxlY3RvcignLnBheW1lbnRfX2NvdW50JykudGV4dENvbnRlbnQuc3BsaXQoJ+KCvScpWzBdIC0gKCtwYXltZW50RmVlLnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50X19jb3VudCcpLnRleHRDb250ZW50LnNwbGl0KCfigr0nKVswXSArICtwYXltZW50QWRkaXRpb25hbEZlZS5xdWVyeVNlbGVjdG9yKCcucGF5bWVudF9fY291bnQnKS50ZXh0Q29udGVudC5zcGxpdCgn4oK9JylbMF0pICsgJ+KCvSc7XG4gIH07XG5cbiAgcGF5bWVudERhdGVwaWNrZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbn07XG4iLCJpbXBvcnQgJy4vYnVsbGV0LnNjc3MnO1xuIiwiaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcbiIsImltcG9ydCBBaXJEYXRlcGlja2VyIGZyb20gJ2Fpci1kYXRlcGlja2VyJztcbmltcG9ydCAnYWlyLWRhdGVwaWNrZXIvYWlyLWRhdGVwaWNrZXIuY3NzJztcbmltcG9ydCAnLi9jYWxlbmRhci5zY3NzJztcblxubGV0IGNhbGVuZGFyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsZW5kYXInKTtcblxuZnVuY3Rpb24gYWRkWmVybyhuKSB7cmV0dXJuIG4gPCAxMCA/ICcwJytuIDogbn07XG5cbmZvciAobGV0IGVsZW1lbnQgb2YgY2FsZW5kYXJFbGVtZW50cykge1xuICBsZXQgY2FsZW5kYXJJbnB1dHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxlbmRhcl9faW5wdXQnKTtcbiAgbGV0IGlucHV0RmllbGRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICBsZXQgY2FsZW5kYXJEYXRlcGlja2VyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXJfX2RhdGVwaWNrZXInKTtcblxuICBsZXQgY29uZmlybUJ1dHRvbiA9IHtcbiAgICBjb250ZW50OiAn0L/RgNC40LzQtdC90LjRgtGMJyxcbiAgICBjbGFzc05hbWU6ICdjYWxlbmRhcl9fYnV0dG9uLWNvbmZpcm0nLFxuICAgIG9uQ2xpY2s6IChkcCkgPT4ge1xuICAgICAgaWYgKGlucHV0RmllbGRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSBvZiBbMCwxXSApIHtcbiAgICAgICAgICBpZiAoZHAuc2VsZWN0ZWREYXRlc1tpXSkge1xuICAgICAgICAgICAgaW5wdXRGaWVsZHNbaV0udmFsdWUgPSBhZGRaZXJvKGRwLnNlbGVjdGVkRGF0ZXNbaV0uZ2V0RGF0ZSgpKSsnLicrYWRkWmVybygrZHAuc2VsZWN0ZWREYXRlc1tpXS5nZXRNb250aCgpKzEpKycuJytkcC5zZWxlY3RlZERhdGVzW2ldLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRwLnNlbGVjdGVkRGF0ZXMpIHtcbiAgICAgICAgICBkcC4kZGF0ZXBpY2tlci5wYXJlbnRFbGVtZW50LmRhdGFzZXQuc2VsZWN0ZWREYXlzID0gKGRwLnNlbGVjdGVkRGF0ZXNbMV0/LmdldFRpbWUoKSAtIGRwLnNlbGVjdGVkRGF0ZXNbMF0/LmdldFRpbWUoKSkgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGVuZGFyRGF0ZXBpY2tlci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRGaWVsZHNbMF0udmFsdWUgPSBkcC5mb3JtYXREYXRlKGRwLnNlbGVjdGVkRGF0ZXNbMF0sICdkZCBNTU0nKSsnIC0gJytkcC5mb3JtYXREYXRlKGRwLnNlbGVjdGVkRGF0ZXNbMV0sICdkZCBNTU0nKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIGxldCBjbGVhckJ1dHRvbiA9IHtcbiAgICBjb250ZW50OiAn0L7Rh9C40YHRgtC40YLRjCcsXG4gICAgY2xhc3NOYW1lOiAnY2FsZW5kYXJfX2J1dHRvbi1jbGVhcicsXG4gICAgb25DbGljazogKGRwKSA9PiB7XG4gICAgICBkcC5jbGVhcigpO1xuICAgICAgZm9yIChsZXQgaW5wdXQgb2YgaW5wdXRGaWVsZHMpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIGxldCBjYWxlbmRhciA9IG5ldyBBaXJEYXRlcGlja2VyKGNhbGVuZGFyRGF0ZXBpY2tlciwge1xuICAgIG5hdlRpdGxlczoge2RheXM6ICdNTU1NIHl5eXknfSxcbiAgICByYW5nZTogdHJ1ZSxcbiAgICBidXR0b25zOiBbY2xlYXJCdXR0b24sIGNvbmZpcm1CdXR0b25dXG4gIH0pO1xuXG5cbiAgZm9yIChsZXQgaW5wdXQgb2YgY2FsZW5kYXJJbnB1dHMpIHtcbiAgICBsZXQgc3dpdGNoVmlzaWJpbGl0eSA9IChkYXRlcGlja2VyKSA9PiB7XG4gICAgICBpZiAoIWRhdGVwaWNrZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYWxlbmRhcl9fZGF0ZXBpY2tlcl92aXNpYmxlJykpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhcl9fZGF0ZXBpY2tlcl92aXNpYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlcGlja2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGVuZGFyX19kYXRlcGlja2VyX3Zpc2libGUnKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBzd2l0Y2hWaXNpYmlsaXR5KGNhbGVuZGFyRGF0ZXBpY2tlcik7ICBcbiAgICB9O1xuXG4gICAgaW5wdXQub25rZXlkb3duID0gKGUpID0+IHtcbiAgICAgIGUua2V5ID09ICdFbnRlcicgJiYgc3dpdGNoVmlzaWJpbGl0eShjYWxlbmRhckRhdGVwaWNrZXIpO1xuICAgIH07XG5cbiAgICBcbiAgfTtcblxuICBsZXQgaW5wdXRzQXJyYXkgPSBBcnJheS5mcm9tKGNhbGVuZGFySW5wdXRzKTtcbiAgbGV0IGhpZGVDYWxlbmRhciA9IChlKSA9PiB7XG4gICAgaWYgKGNhbGVuZGFyRGF0ZXBpY2tlci5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbGVuZGFyX19kYXRlcGlja2VyX3Zpc2libGUnKSkge1xuICAgICAgaWYgKCFjYWxlbmRhckRhdGVwaWNrZXIuY29udGFpbnMoZS50YXJnZXQpICYmICFpbnB1dHNBcnJheS5zb21lKChpbnB1dCkgPT4gaW5wdXQuY29udGFpbnMoZS50YXJnZXQpKSkgIHtcbiAgICAgICAgY2FsZW5kYXJEYXRlcGlja2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGVuZGFyX19kYXRlcGlja2VyX3Zpc2libGUnKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBoaWRlQ2FsZW5kYXIoZSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgZS5rZXkgPT0gJ0VudGVyJyAmJiBoaWRlQ2FsZW5kYXIoZSk7XG4gIH0pO1xuXG4gIGxldCBuYXZBcnJvd3MgPSBjYWxlbmRhci4kZGF0ZXBpY2tlci5xdWVyeVNlbGVjdG9yQWxsKCcuYWlyLWRhdGVwaWNrZXItbmF2LS1hY3Rpb24nKTtcbiAgXG4gIGZvciAobGV0IGFycm93IG9mIG5hdkFycm93cykge1xuICAgIGxldCBhcnJvd0JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgYXJyb3dGb3J3YXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBhcnJvd0JhY2suY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBhcnJvd0JhY2suaW5uZXJIVE1MID0gJ2Fycm93X2JhY2snO1xuICAgIGFycm93Rm9yd2FyZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIGFycm93Rm9yd2FyZC5pbm5lckhUTUwgPSAnYXJyb3dfZm9yd2FyZCc7XG5cbiAgICBzd2l0Y2ggKGFycm93LmRhdGFzZXQuYWN0aW9uKSB7XG4gICAgICBjYXNlICdwcmV2JzogYXJyb3cucmVwbGFjZUNoaWxkcmVuKGFycm93QmFjayk7IGJyZWFrO1xuICAgICAgY2FzZSAnbmV4dCc6IGFycm93LnJlcGxhY2VDaGlsZHJlbihhcnJvd0ZvcndhcmQpO1xuICAgIH07XG4gIH07XG5cbiAgY2FsZW5kYXIuc2VsZWN0RGF0ZShlbGVtZW50LmRhdGFzZXQuZGF0ZXM/LnNwbGl0KCctJykpO1xuICBjYWxlbmRhci5zZXRWaWV3RGF0ZShlbGVtZW50LmRhdGFzZXQuZGF0ZXM/LnNwbGl0KCctJylbMV0pO1xuICBlbGVtZW50LmRhdGFzZXQuZGF0ZXM/LnNwbGl0KCctJylbMV0gPT0gJycgJiYgY2FsZW5kYXIuc2V0Vmlld0RhdGUoZWxlbWVudC5kYXRhc2V0LmRhdGVzPy5zcGxpdCgnLScpWzBdKTtcbiAgZWxlbWVudC5kYXRhc2V0LmRhdGVzICYmIGNhbGVuZGFyLiRkYXRlcGlja2VyLnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhcl9fYnV0dG9uLWNvbmZpcm0nKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG59O1xuIiwiaW1wb3J0ICcuL2NvbW1lbnQuc2Nzcyc7XG5pbXBvcnQgJ2NvbW1vbi9saWtlL2xpa2UuanMnO1xuIiwiaW1wb3J0ICcuL2Ryb3Bkb3duLnNjc3MnO1xuXG5sZXQgZHJvcGRvd25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xuXG5mb3IgKGxldCBlbGVtZW50IG9mIGRyb3Bkb3duRWxlbWVudHMpIHtcbiAgbGV0IGRyb3Bkb3duU2hlbGwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fc2hlbGwnKTtcbiAgbGV0IGRyb3Bkb3duSW5zaWRlID0gZHJvcGRvd25TaGVsbC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2luc2lkZScpO1xuICBsZXQgZHJvcGRvd25TdWJtZW51ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX3N1Ym1lbnUnKTtcbiAgbGV0IGNvdW50TnVtYmVycyA9IGRyb3Bkb3duU3VibWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2NvdW50Jyk7XG4gIGxldCBjbGVhckJ1dHRvbiA9IGRyb3Bkb3duU3VibWVudS5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2J1dHRvbi1jbGVhcicpO1xuICBsZXQgY29uZmlybUJ1dHRvbiA9IGRyb3Bkb3duU3VibWVudS5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2J1dHRvbi1jb25maXJtJyk7XG4gIFxuICBpZiAoZHJvcGRvd25JbnNpZGUuZGF0YXNldC5kcm9wZG93blR5cGUgPT0gJ2d1ZXN0cycpIHtcbiAgICBjbGVhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZm9yIChsZXQgbnVtYmVyIG9mIGNvdW50TnVtYmVycykge1xuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSAwO1xuICAgICAgICBudW1iZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgZHJvcGRvd25JbnNpZGUudmFsdWUgPSAnJztcbiAgICAgICAgY2xlYXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX2J1dHRvbl92aXNpYmxlJyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25maXJtQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkcm9wZG93bkluc2lkZS52YWx1ZSA9IGRyb3Bkb3duSW5zaWRlLmRhdGFzZXQuc3VtO1xuICAgICAgZHJvcGRvd25JbnNpZGUudmFsdWUgPSBkcm9wZG93bkluc2lkZS52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStkcm9wZG93bkluc2lkZS52YWx1ZS5zbGljZSgxKTtcbiAgICAgIGlmIChkcm9wZG93blN1Ym1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9fc3VibWVudV92aXNpYmxlJykgJiYgIWRyb3Bkb3duU3VibWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duX19zdWJtZW51X3NvbGlkJykpIHtcbiAgICAgICAgZHJvcGRvd25TdWJtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19zdWJtZW51X3Zpc2libGUnKTtcbiAgICAgICAgZHJvcGRvd25TdWJtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19zdWJtZW51X3NvbGlkJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRyb3Bkb3duU2hlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX3NoZWxsX2ZvY3VzZWQnKTtcbiAgICAgICAgICBkcm9wZG93blNoZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19zaGVsbF9zb2xpZCcpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICBpZiAoIWRyb3Bkb3duU3VibWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duX19zdWJtZW51X3Zpc2libGUnKSAmJiAhZHJvcGRvd25TdWJtZW51LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd25fX3N1Ym1lbnVfc29saWQnKSkge1xuICAgICAgZHJvcGRvd25TaGVsbC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fc2hlbGxfZm9jdXNlZCcpO1xuICAgICAgZHJvcGRvd25TdWJtZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19zdWJtZW51X3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJvcGRvd25TdWJtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19zdWJtZW51X3Zpc2libGUnKTtcbiAgICAgIGRyb3Bkb3duU3VibWVudS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9fc3VibWVudV9zb2xpZCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duU2hlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX3NoZWxsX2ZvY3VzZWQnKTtcbiAgICAgICAgZHJvcGRvd25TaGVsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9fc2hlbGxfc29saWQnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfTtcbiAgfTtcblxuICBkcm9wZG93blNoZWxsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc3dpdGNoVmlzaWJpbGl0eSgpO1xuICB9O1xuXG4gIGRyb3Bkb3duU2hlbGwub25rZXlkb3duID0gKGUpID0+IHtcbiAgICBlLmtleSA9PSAnRW50ZXInICYmIHN3aXRjaFZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGRyb3Bkb3duU3VibWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duX19zdWJtZW51X3Zpc2libGUnKSkge1xuICAgICAgaWYgKCFkcm9wZG93blN1Ym1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25TaGVsbC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGRyb3Bkb3duU3VibWVudS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9fc3VibWVudV92aXNpYmxlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRyb3Bkb3duU2hlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX3NoZWxsX2ZvY3VzZWQnKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgbnVtYmVyIG9mIGNvdW50TnVtYmVycykge1xuICAgIG51bWJlci5uZXh0U2libGluZy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbnVtYmVyLnRleHRDb250ZW50Kys7XG4gICAgICBudW1iZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICB9O1xuICAgIG51bWJlci5wcmV2aW91c1NpYmxpbmcub25jbGljayA9ICgpID0+IHtcbiAgICAgIG51bWJlci50ZXh0Q29udGVudCA+IDAgJiYgbnVtYmVyLnRleHRDb250ZW50LS07XG4gICAgICBudW1iZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICB9O1xuXG4gICAgaWYgKG51bWJlci50ZXh0Q29udGVudCA9PSAwKSB7bnVtYmVyLnByZXZpb3VzU2libGluZy5kaXNhYmxlZCA9IHRydWV9O1xuICAgIG51bWJlci5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmIChjbGVhckJ1dHRvbikge1xuICAgICAgICBjb3VudE51bWJlcnMuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgICAgaWYgKCtudW0udGV4dENvbnRlbnQgPiAwKSB7XG4gICAgICAgICAgICAhY2xlYXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9fYnV0dG9uX3Zpc2libGUnKSAmJiBjbGVhckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bl9fYnV0dG9uX3Zpc2libGUnKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBudW1iZXIudGV4dENvbnRlbnQgPiAwID8gbnVtYmVyLnByZXZpb3VzU2libGluZy5kaXNhYmxlZCA9IGZhbHNlIDogbnVtYmVyLnByZXZpb3VzU2libGluZy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBsZXQgY2FzZXMgPSBbMiwwLDEsMSwxLDJdO1xuICAgICAgbGV0IHRleHRDb3VudHMgPSBbXTtcbiAgICAgIGxldCBkcm9wZG93bkNvdW50ZXJzID0gZHJvcGRvd25TdWJtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fY291bnRlcicpO1xuICAgICAgbGV0IGNvdW50ZXJPYmplY3RzID0ge307XG5cbiAgICAgIGZvciAobGV0IGNvdW50ZXIgb2YgZHJvcGRvd25Db3VudGVycykge1xuICAgICAgICBpZiAoY291bnRlck9iamVjdHMuaGFzT3duUHJvcGVydHkoY291bnRlci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudmFyaWFudHMuc3BsaXQoJywnKVswXSkpIHtcbiAgICAgICAgICBjb3VudGVyT2JqZWN0c1tjb3VudGVyLnBhcmVudEVsZW1lbnQuZGF0YXNldC52YXJpYW50cy5zcGxpdCgnLCcpWzBdXS5jb3VudCA9ICtjb3VudGVyT2JqZWN0c1tjb3VudGVyLnBhcmVudEVsZW1lbnQuZGF0YXNldC52YXJpYW50cy5zcGxpdCgnLCcpWzBdXS5jb3VudCArICtjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fY291bnQnKS50ZXh0Q29udGVudDsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlck9iamVjdHNbY291bnRlci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudmFyaWFudHMuc3BsaXQoJywnKVswXV0gPSB7XG4gICAgICAgICAgICB2YXJpYW50czogY291bnRlci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudmFyaWFudHMuc3BsaXQoJywnKSxcbiAgICAgICAgICAgIGNvdW50OiBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fY291bnQnKS50ZXh0Q29udGVudFxuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvdW50ZXJPYmplY3RzKSkge1xuICAgICAgICBjb3VudGVyT2JqZWN0c1trZXldLmNvdW50ID4gMCA/IHRleHRDb3VudHMucHVzaChjb3VudGVyT2JqZWN0c1trZXldLmNvdW50KycgJytjb3VudGVyT2JqZWN0c1trZXldLnZhcmlhbnRzWyhjb3VudGVyT2JqZWN0c1trZXldLmNvdW50ICUgMTAwID4gNCAmJiBjb3VudGVyT2JqZWN0c1trZXldLmNvdW50ICUxMDAgPCAyMCkgPyAyIDogY2FzZXNbY291bnRlck9iamVjdHNba2V5XS5jb3VudCAlIDEwIDwgNSA/IGNvdW50ZXJPYmplY3RzW2tleV0uY291bnQgJSAxMCA6IDVdXSkgOiBlbGVtZW50LmRhdGFzZXQuZHJvcGRvd25UeXBlICE9ICdndWVzdHMnID8gdGV4dENvdW50cy5wdXNoKCfQvdC10YIgJytjb3VudGVyT2JqZWN0c1trZXldLnZhcmlhbnRzWzJdKSA6ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LmRyb3Bkb3duVHlwZSAhPSAnZ3Vlc3RzJykge1xuICAgICAgICBkcm9wZG93bkluc2lkZS52YWx1ZSA9IHRleHRDb3VudHMuam9pbignLCAnKTtcbiAgICAgICAgZHJvcGRvd25JbnNpZGUudmFsdWUgPSBkcm9wZG93bkluc2lkZS52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStkcm9wZG93bkluc2lkZS52YWx1ZS5zbGljZSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyb3Bkb3duSW5zaWRlLmRhdGFzZXQuc3VtID0gdGV4dENvdW50cy5qb2luKCcsICcpOyBcbiAgICAgIH07XG4gICAgfTtcbiAgICBudW1iZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICBjb25maXJtQnV0dG9uPy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gIH07XG59O1xuIiwiaW1wb3J0ICcuL2Zvb3Rlci5zY3NzJztcbmltcG9ydCAnY29tbW9uL2lucHV0L2lucHV0LmpzJztcbmltcG9ydCAnY29tbW9uL3NvY2lhbC9zb2NpYWwuanMnO1xuaW1wb3J0ICdjb21tb24vbG9nby9sb2dvLmpzJztcbiIsImltcG9ydCAnLi9oZWFkZXIuc2Nzcyc7XG5pbXBvcnQgJ2NvbW1vbi9idXR0b24vYnV0dG9uLmpzJztcbmltcG9ydCAnY29tbW9uL2xvZ28vbG9nby5qcyc7XG5cbmxldCBoZWFkZXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXInKTtcblxuZm9yIChsZXQgZWxlbWVudCBvZiBoZWFkZXJFbGVtZW50cykge1xuICBsZXQgbW9iaWxlTWVudSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbW9iaWxlLW1lbnUnKTtcbiAgbGV0IG1lbnUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKTtcbiAgbGV0IGFycm93TWVudUxpbmtzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX21lbnUtbGlua19hcnJvdycpKTtcbiAgbGV0IHN1Ym1lbnVFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19zdWJtZW51JykpO1xuXG4gIGxldCBzd2l0Y2hNZW51VmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICBpZiAoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX21lbnVfdmlzaWJsZScpKSB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbWVudV92aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51X3Zpc2libGUnKTtcbiAgICB9O1xuICB9O1xuXG4gIGxldCBzd2l0Y2hTdWJtZW51VmlzaWJpbGl0eSA9IChpKSA9PiB7XG4gICAgaWYgKCFzdWJtZW51RWxlbWVudHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX3N1Ym1lbnVfdmlzaWJsZScpKSB7XG4gICAgICBcbiAgICAgIHN1Ym1lbnVFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3N1Ym1lbnVfdmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJtZW51RWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19zdWJtZW51X3Zpc2libGUnKTtcbiAgICB9O1xuICB9O1xuXG4gIG1vYmlsZU1lbnUub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgc3dpdGNoTWVudVZpc2liaWxpdHkoKTtcbiAgfTtcblxuICBtb2JpbGVNZW51Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgZS5rZXkgPT0gJ0VudGVyJyAmJiBzd2l0Y2hNZW51VmlzaWJpbGl0eSgpO1xuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgIGlmICghbW9iaWxlTWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFtZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51X3Zpc2libGUnKTtcbiAgICB9O1xuICB9KTtcblxuICBmb3IgKGxldCBpIGluIGFycm93TWVudUxpbmtzKSB7XG4gICAgYXJyb3dNZW51TGlua3NbaV0ub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgICBzd2l0Y2hTdWJtZW51VmlzaWJpbGl0eShpKTtcbiAgICB9O1xuXG4gICAgYXJyb3dNZW51TGlua3NbaV0ub25rZXlkb3duID0gKGUpID0+IHtcbiAgICAgIGUua2V5ID09ICdFbnRlcicgJiYgc3dpdGNoU3VibWVudVZpc2liaWxpdHkoaSk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWFycm93TWVudUxpbmtzW2ldLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIXN1Ym1lbnVFbGVtZW50c1tpXS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHN1Ym1lbnVFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3N1Ym1lbnVfdmlzaWJsZScpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuaW1wb3J0ICcuL2lucHV0LnNjc3MnO1xuXG5sZXQgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpO1xubGV0IGRhdGVNYXNrID0gKGVsZW1lbnQpID0+IElNYXNrKGVsZW1lbnQsIHtcbiAgbWFzazogJ9CU0JQu0JzQnC7Qk9CT0JPQkycsXG4gIGJsb2Nrczoge1xuICAgINCT0JPQk9CTOiB7XG4gICAgICBtYXNrOiAnMDAwMCdcbiAgICB9LFxuICAgINCc0Jw6IHtcbiAgICAgIG1hc2s6IElNYXNrLk1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAxMlxuICAgIH0sXG4gICAg0JTQlDoge1xuICAgICAgbWFzazogSU1hc2suTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxLFxuICAgICAgdG86IDMxXG4gICAgfVxuICB9XG59KTtcblxuZm9yIChsZXQgZWxlbWVudCBvZiBpbnB1dEVsZW1lbnRzKSB7XG4gIGxldCBpbnB1dFNoZWxsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfX3NoZWxsJyk7XG4gIGxldCBpbnB1dEluc2lkZSA9IGlucHV0U2hlbGwucXVlcnlTZWxlY3RvcignLmlucHV0X19pbnNpZGUnKTtcblxuICBzd2l0Y2ggKGlucHV0SW5zaWRlLmRhdGFzZXQubWFzaykge1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgZGF0ZU1hc2soaW5wdXRJbnNpZGUpO1xuICAgICAgYnJlYWs7XG4gIH07XG59XG4iLCJpbXBvcnQgJy4vbGlrZS5zY3NzJztcblxubGV0IGxpa2VFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XG5cbmZvciAobGV0IGVsZW1lbnQgb2YgbGlrZUVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50SWNvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpa2VfX2ljb24nKTtcbiAgbGV0IGVsZW1lbnRDb3VudGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGlrZV9fY291bnRlcicpO1xuXG4gIGlmIChlbGVtZW50LmRhdGFzZXQuYWN0aXZlID09ICd0cnVlJykge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlrZV9hY3RpdmUnKTtcbiAgICBlbGVtZW50SWNvbi5jbGFzc0xpc3QuYWRkKCdsaWtlX19pY29uX2FjdGl2ZScpO1xuICAgIGVsZW1lbnRDb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2xpa2VfX2NvdW50ZXJfYWN0aXZlJyk7XG4gICAgZWxlbWVudEljb24udGV4dENvbnRlbnQgPSAnZmF2b3JpdGUnO1xuICB9O1xuXG4gIGVsZW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpa2VfYWN0aXZlJykpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGlrZV9hY3RpdmUnKTtcbiAgICAgIGVsZW1lbnRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2xpa2VfX2ljb25fYWN0aXZlJyk7XG4gICAgICBlbGVtZW50Q291bnRlci5jbGFzc0xpc3QucmVtb3ZlKCdsaWtlX19jb3VudGVyX2FjdGl2ZScpO1xuICAgICAgZWxlbWVudEljb24udGV4dENvbnRlbnQgPSAnZmF2b3JpdGVfYm9yZGVyJztcbiAgICAgICtlbGVtZW50Q291bnRlci50ZXh0Q29udGVudCA+IDAgPyBlbGVtZW50Q291bnRlci50ZXh0Q29udGVudCA9ICtlbGVtZW50Q291bnRlci50ZXh0Q29udGVudC0xIDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlrZV9hY3RpdmUnKTtcbiAgICAgIGVsZW1lbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2xpa2VfX2ljb25fYWN0aXZlJyk7XG4gICAgICBlbGVtZW50Q291bnRlci5jbGFzc0xpc3QuYWRkKCdsaWtlX19jb3VudGVyX2FjdGl2ZScpO1xuICAgICAgZWxlbWVudEljb24udGV4dENvbnRlbnQgPSAnZmF2b3JpdGUnO1xuICAgICAgZWxlbWVudENvdW50ZXIudGV4dENvbnRlbnQgPSArZWxlbWVudENvdW50ZXIudGV4dENvbnRlbnQrMTtcbiAgICB9O1xuICB9O1xufTtcbiIsImltcG9ydCAnLi9saXN0LnNjc3MnO1xuIiwiaW1wb3J0ICcuL2xvZ28uc2Nzcyc7XG4iLCJpbXBvcnQgJy4vcG9sbC5zY3NzJztcblxubGV0IHBvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb2xsJyk7XG5cbmZvciAobGV0IGVsZW1lbnQgb2YgcG9sbEVsZW1lbnRzKSB7XG4gIGxldCByYWRpdXMgPSA0NjtcbiAgbGV0IGNpcmN1bSA9IDIgKiByYWRpdXMgKiBNYXRoLlBJO1xuICBsZXQgZWxlbWVudENpcmNsZXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NpcmNsZScpXG5cbiAgZm9yIChsZXQgY2lyY2xlIG9mIGVsZW1lbnRDaXJjbGVzKSB7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3gnLCA1MCk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3knLCA1MCk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgncicsIHJhZGl1cyk7XG4gIH1cblxuICBsZXQgYXdlc29tZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xsX19hd2Vzb21lJyk7XG4gIGxldCBnb29kRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGxfX2dvb2QnKTtcbiAgbGV0IGZhaXJFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9sbF9fZmFpcicpO1xuICBsZXQgYmFkRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGxfX2JhZCcpO1xuXG4gIGxldCBnb29kQm9yZGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9sbF9fZ29vZC1ib3JkZXInKTtcbiAgbGV0IGF3ZXNvbWVCb3JkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xsX19hd2Vzb21lLWJvcmRlcicpO1xuICBsZXQgZmFpckJvcmRlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGxfX2ZhaXItYm9yZGVyJyk7XG4gIGxldCBiYWRCb3JkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xsX19iYWQtYm9yZGVyJyk7XG5cbiAgbGV0IHBvbGxDb3VudGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9sbF9fY291bnRlcicpO1xuXG4gIGxldCBkcmF3Q2lyY2xlID0gKCkgPT4ge1xuICAgIGxldCBhbGxDb3VudCA9ICthd2Vzb21lRWxlbWVudC5kYXRhc2V0LmNvdW50ICsgK2dvb2RFbGVtZW50LmRhdGFzZXQuY291bnQgKyArZmFpckVsZW1lbnQuZGF0YXNldC5jb3VudCArICtiYWRFbGVtZW50LmRhdGFzZXQuY291bnQ7XG4gICAgbGV0IGF3ZXNvbWVQZXJjZW50ID0gYXdlc29tZUVsZW1lbnQuZGF0YXNldC5jb3VudCoxMDAvYWxsQ291bnQ7XG4gICAgbGV0IGdvb2RQZXJjZW50ID0gZ29vZEVsZW1lbnQuZGF0YXNldC5jb3VudCoxMDAvYWxsQ291bnQ7XG4gICAgbGV0IGZhaXJQZXJjZW50ID0gZmFpckVsZW1lbnQuZGF0YXNldC5jb3VudCoxMDAvYWxsQ291bnQ7XG4gICAgbGV0IGJhZFBlcmNlbnQgPSBiYWRFbGVtZW50ID8gYmFkRWxlbWVudC5kYXRhc2V0LmNvdW50KjEwMC9hbGxDb3VudCA6IDA7XG5cbiAgICBwb2xsQ291bnRlci5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQgPSBhbGxDb3VudDtcblxuICAgIGlmIChnb29kRWxlbWVudC5kYXRhc2V0LmNvdW50ID4gMCkge1xuICAgICAgaWYgKGdvb2RFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPT0gJ2hpZGRlbicpIHtnb29kRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnfTtcbiAgICAgIGlmIChnb29kRWxlbWVudC5kYXRhc2V0LmNvdW50ID4gNSAmJiBnb29kQm9yZGVyLnN0eWxlLnZpc2liaWxpdHkgPT0gJ2hpZGRlbicpICB7Z29vZEJvcmRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnfTtcbiAgICAgIGdvb2RFbGVtZW50LnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGdvb2RQZXJjZW50ICogY2lyY3VtLzEwMCArICcgOTk5JztcbiAgICAgIGdvb2RCb3JkZXIuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gJzEgJyArIChnb29kUGVyY2VudCAqIGNpcmN1bS8xMDAgLSAyKSArICcgMSA5OTknO1xuICAgIH0gZWxzZSB7XG4gICAgICBnb29kRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBnb29kQm9yZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9O1xuXG4gICAgaWYgKGF3ZXNvbWVFbGVtZW50LmRhdGFzZXQuY291bnQgPiAwKSB7XG4gICAgICBpZiAoYXdlc29tZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9PSAnaGlkZGVuJykge2F3ZXNvbWVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSd9O1xuICAgICAgaWYgKGF3ZXNvbWVFbGVtZW50LmRhdGFzZXQuY291bnQgPiA1ICYmIGF3ZXNvbWVCb3JkZXIuc3R5bGUudmlzaWJpbGl0eSA9PSAnaGlkZGVuJykgIHthd2Vzb21lQm9yZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSd9O1xuICAgICAgYXdlc29tZUVsZW1lbnQuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYXdlc29tZVBlcmNlbnQgKiBjaXJjdW0vMTAwICsgJyA5OTknO1xuICAgICAgYXdlc29tZUVsZW1lbnQuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IC0oZ29vZFBlcmNlbnQgKiBjaXJjdW0vMTAwKTtcbiAgICAgIGF3ZXNvbWVCb3JkZXIuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IC0oZ29vZFBlcmNlbnQgKiBjaXJjdW0vMTAwKTtcbiAgICAgIGF3ZXNvbWVCb3JkZXIuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gJzEgJyArIChhd2Vzb21lUGVyY2VudCAqIGNpcmN1bS8xMDAgLSAyKSArICcgMSA5OTknO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2Vzb21lRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBhd2Vzb21lQm9yZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9O1xuXG4gICAgaWYgKGZhaXJFbGVtZW50LmRhdGFzZXQuY291bnQgPiAwKSB7XG4gICAgICBpZiAoZmFpckVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9PSAnaGlkZGVuJykge2ZhaXJFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSd9O1xuICAgICAgaWYgKGZhaXJFbGVtZW50LmRhdGFzZXQuY291bnQgPiA1ICYmIGZhaXJCb3JkZXIuc3R5bGUudmlzaWJpbGl0eSA9PSAnaGlkZGVuJykgIHtmYWlyQm9yZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSd9O1xuICAgICAgZmFpckVsZW1lbnQuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gZmFpclBlcmNlbnQgKiBjaXJjdW0vMTAwICsgJyA5OTknO1xuICAgICAgZmFpckVsZW1lbnQuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IC0oYXdlc29tZVBlcmNlbnQgKiBjaXJjdW0vMTAwKSAtIChnb29kUGVyY2VudCAqIGNpcmN1bS8xMDApO1xuICAgICAgZmFpckJvcmRlci5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gLShhd2Vzb21lUGVyY2VudCAqIGNpcmN1bS8xMDApIC0gKGdvb2RQZXJjZW50ICogY2lyY3VtLzEwMCk7XG4gICAgICBmYWlyQm9yZGVyLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxICcgKyAoZmFpclBlcmNlbnQgKiBjaXJjdW0vMTAwIC0gMikgKyAnIDEgOTk5JztcbiAgICB9IGVsc2Uge1xuICAgICAgZmFpckVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZmFpckJvcmRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfTtcblxuICAgIGlmIChiYWRFbGVtZW50LmRhdGFzZXQuY291bnQgPiAwKSB7XG4gICAgICBpZiAoYmFkRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID09ICdoaWRkZW4nKSB7YmFkRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnfTtcbiAgICAgIGlmIChiYWRFbGVtZW50LmRhdGFzZXQuY291bnQgPiA1ICYmIGJhZEJvcmRlci5zdHlsZS52aXNpYmlsaXR5ID09ICdoaWRkZW4nKSAge2JhZEJvcmRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnfTtcbiAgICAgIGJhZEVsZW1lbnQuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYmFkUGVyY2VudCAqIGNpcmN1bS8xMDAgKyAnIDk5OSc7XG4gICAgICBiYWRFbGVtZW50LnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAtKGF3ZXNvbWVQZXJjZW50ICogY2lyY3VtLzEwMCkgLSAoZ29vZFBlcmNlbnQgKiBjaXJjdW0vMTAwKSAtIChmYWlyUGVyY2VudCAqIGNpcmN1bS8xMDApO1xuICAgICAgYmFkQm9yZGVyLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAtKGF3ZXNvbWVQZXJjZW50ICogY2lyY3VtLzEwMCkgLSAoZ29vZFBlcmNlbnQgKiBjaXJjdW0vMTAwKSAtIChmYWlyUGVyY2VudCAqIGNpcmN1bS8xMDApO1xuICAgICAgYmFkQm9yZGVyLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxICcgKyAoYmFkUGVyY2VudCAqIGNpcmN1bS8xMDAgLSAyKSArICcgMSA5OTknO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGJhZEJvcmRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfTtcbiAgfTtcblxuICBkcmF3Q2lyY2xlKCk7XG5cbiAgbGV0IHBvbGxJdGVtcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvbGxfX2l0ZW0nKTtcblxuICBmb3IgKGxldCBpdGVtIG9mIHBvbGxJdGVtcykge1xuICAgIGxldCB1cGRhdGVQb2xsID0gKCkgPT4ge1xuICAgICAgc3dpdGNoIChpdGVtLnRleHRDb250ZW50KSB7XG4gICAgICAgIGNhc2UgJ9CS0LXQu9C40LrQvtC70LXQv9C90L4nOiArYXdlc29tZUVsZW1lbnQuZGF0YXNldC5jb3VudCsrOyBicmVhaztcbiAgICAgICAgY2FzZSAn0KXQvtGA0L7RiNC+JzogK2dvb2RFbGVtZW50LmRhdGFzZXQuY291bnQrKzsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ9Cj0LTQvtCy0LvQtdGC0LLQvtGA0LjRgtC10LvRjNC90L4nOiArZmFpckVsZW1lbnQuZGF0YXNldC5jb3VudCsrOyBicmVhaztcbiAgICAgICAgY2FzZSAn0KDQsNC30L7Rh9Cw0YDQvtCy0LDQvSc6ICtiYWRFbGVtZW50LmRhdGFzZXQuY291bnQrKzsgYnJlYWs7XG4gICAgICB9O1xuICAgICAgZHJhd0NpcmNsZSgpO1xuICAgIH1cblxuICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHt1cGRhdGVQb2xsKCl9O1xuICAgIGl0ZW0ub25rZXlkb3duID0gKGUpID0+IHtlLmtleSA9PSAnRW50ZXInICYmIHVwZGF0ZVBvbGwoKX07XG4gIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9yb29tLWRldGFpbHMtODg4LnNjc3MnO1xuaW1wb3J0ICdjb21tb24vaGVhZGVyL2hlYWRlci5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9mb290ZXIvZm9vdGVyLmpzJztcbmltcG9ydCAnY29tbW9uL2xpc3QvbGlzdC5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9jb21tZW50L2NvbW1lbnQuanMnO1xuaW1wb3J0ICdjb21tb24vYnVsbGV0L2J1bGxldC5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9wb2xsL3BvbGwuanMnO1xuaW1wb3J0ICdjYXJkcy9wYXltZW50L3BheW1lbnQuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9