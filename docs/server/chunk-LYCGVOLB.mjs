import './polyfills.server.mjs';
import{A as v,B as g,C as ge,D as me,E as ve,G as _e,N as ye,O as Ce,P as Ve,Q as De,R as be,S as Me,V as Ae,Z as Ee,a as ae,aa as Z,b as le,c as ue,d as ce,e as P,f as de,g as he,h as f,i as E,j as k,k as p,l as T,m as y,n as C,o as j,p as u,q as _,r as W,s as q,t as h,u as fe,v as c,w as o,x as pe,y as z,z as m}from"./chunk-LSJDVDN6.mjs";import{a as l,b as d}from"./chunk-NDYDZJSS.mjs";var Qe=new E(""),Je=new E("");function Pe(n){return n!=null}function ke(n){return _e(n)?le(n):n}function Te(n){let e={};return n.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function je(n,e){return e.map(t=>t(n))}function et(n){return!n.validate}function Ge(n){return n.map(e=>et(e)?e:t=>e.validate(t))}function tt(n){if(!n)return null;let e=n.filter(Pe);return e.length==0?null:function(t){return Te(je(t,e))}}function te(n){return n!=null?tt(Ge(n)):null}function it(n){if(!n)return null;let e=n.filter(Pe);return e.length==0?null:function(t){let i=je(t,e).map(ke);return ce(i).pipe(ue(Te))}}function ie(n){return n!=null?it(Ge(n)):null}function we(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function nt(n){return n._rawValidators}function rt(n){return n._rawAsyncValidators}function Y(n){return n?Array.isArray(n)?n:[n]:[]}function B(n,e){return Array.isArray(n)?n.includes(e):n===e}function Fe(n,e){let t=Y(e);return Y(n).forEach(r=>{B(t,r)||t.push(r)}),t}function xe(n,e){return Y(e).filter(t=>!B(n,t))}var K=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},O=class extends K{get formDirective(){return null}get path(){return null}};var Q=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},st={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Zt=d(l({},st),{"[class.ng-submitted]":"isSubmitted"});var Be=(()=>{let e=class e extends Q{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(_(O,10))},e.\u0275dir=T({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&fe("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[W]});let n=e;return n})();var w="VALID",G="INVALID",V="PENDING",F="DISABLED",b=class{},U=class extends b{constructor(e,t){super(),this.value=e,this.source=t}},I=class extends b{constructor(e,t){super(),this.pristine=e,this.source=t}},S=class extends b{constructor(e,t){super(),this.touched=e,this.source=t}},D=class extends b{constructor(e,t){super(),this.status=e,this.source=t}};function ne(n){return(R(n)?n.validators:n)||null}function ot(n){return Array.isArray(n)?te(n):n||null}function re(n,e){return(R(e)?e.asyncValidators:n)||null}function at(n){return Array.isArray(n)?ie(n):n||null}function R(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ue(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[t])throw new P(1001,"")}function Re(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new P(1002,"")})}var M=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new ae,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===G}get pending(){return this.status==V}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Fe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new S(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new I(!0,i))}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,i)),this._events.next(new D(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(i=>{i.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===V)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=ke(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new D(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(G)?G:w}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ot(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}},A=class extends M{constructor(e,t,i){super(ne(t),re(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Re(this,!0,e),Object.keys(e).forEach(i=>{Ue(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var J=class extends A{};var se=new E("CallSetDisabledState",{providedIn:"root",factory:()=>H}),H="always";function lt(n,e,t=H){He(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),ct(n,e),ht(n,e),dt(n,e),ut(n,e)}function Ie(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ut(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function He(n,e){let t=nt(n);e.validator!==null?n.setValidators(we(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=rt(n);e.asyncValidator!==null?n.setAsyncValidators(we(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Ie(e._rawValidators,r),Ie(e._rawAsyncValidators,r)}function ct(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&$e(n,e)})}function dt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&$e(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function $e(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ht(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function ft(n,e){n==null,He(n,e)}function pt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}var gt={provide:O,useExisting:de(()=>oe)},x=Promise.resolve(),oe=(()=>{let e=class e extends O{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new j,this.form=new A({},te(i),ie(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){x.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),lt(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){x.then(()=>{let r=this._findContainer(i.path),s=new A({});ft(s,i),r.registerControl(i.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){x.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,pt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(_(Qe,10),_(Je,10),_(se,8))},e.\u0275dir=T({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&m("submit",function(L){return s.onSubmit(L)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[ve([gt]),W]});let n=e;return n})();function Se(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Oe(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var X=class extends M{constructor(e=null,t,i){super(ne(t),re(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=T({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let n=e;return n})();var mt=new E("");var We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({});let n=e;return n})(),ee=class extends M{constructor(e,t,i){super(ne(t),re(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Re(this,!1,e),e.forEach((i,r)=>{Ue(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ne(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var qe=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let s=this._reduceControls(i),a={};return Ne(r)?a=r:r!==null&&(a.validators=r.validator,a.asyncValidators=r.asyncValidator),new A(s,a)}record(i,r=null){let s=this._reduceControls(i);return new J(s,r)}control(i,r,s){let a={};return this.useNonNullable?(Ne(r)?a=r:(a.validators=r,a.asyncValidators=s),new X(i,d(l({},a),{nonNullable:!0}))):new X(i,r,s)}array(i,r,s){let a=i.map(L=>this._createControl(L));return new ee(a,r,s)}_reduceControls(i){let r={};return Object.keys(i).forEach(s=>{r[s]=this._createControl(i[s])}),r}_createControl(i){if(i instanceof X)return i;if(i instanceof M)return i;if(Array.isArray(i)){let r=i[0],s=i.length>1?i[1]:null,a=i.length>2?i[2]:null;return this.control(r,s,a)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ze=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:se,useValue:i.callSetDisabledState??H}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[We]});let n=e;return n})(),Ze=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:mt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:se,useValue:i.callSetDisabledState??H}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[We]});let n=e;return n})();function _t(n,e){if(n&1){let t=z();c(0,"div",7)(1,"label",8),g(2),o(),c(3,"div")(4,"label")(5,"input",9),m("change",function(){let r=y(t).$implicit,s=v(2);return C(s.onAnswerChange(r.id,1))}),o(),g(6," Totalmente de acuerdo "),o(),c(7,"label")(8,"input",9),m("change",function(){let r=y(t).$implicit,s=v(2);return C(s.onAnswerChange(r.id,2))}),o(),g(9," Algo de acuerdo "),o(),c(10,"label")(11,"input",9),m("change",function(){let r=y(t).$implicit,s=v(2);return C(s.onAnswerChange(r.id,3))}),o(),g(12," Neutral "),o(),c(13,"label")(14,"input",9),m("change",function(){let r=y(t).$implicit,s=v(2);return C(s.onAnswerChange(r.id,4))}),o(),g(15," Algo en desacuerdo "),o(),c(16,"label")(17,"input",9),m("change",function(){let r=y(t).$implicit,s=v(2);return C(s.onAnswerChange(r.id,5))}),o(),g(18," Totalmente en desacuerdo "),o()()()}if(n&2){let t=e.$implicit;u(),h("for",t.id),u(),me("",t.id,". ",t.pregunta,""),u(3),h("name",t.id)("value",1),u(3),h("name",t.id)("value",2),u(3),h("name",t.id)("value",3),u(3),h("name",t.id)("value",4),u(3),h("name",t.id)("value",5)}}function yt(n,e){if(n&1&&(c(0,"div",10),g(1),o()),n&2){let t=v(2);u(),ge(t.errorMessage)}}function Ct(n,e){if(n&1){let t=z();c(0,"div")(1,"form",2),m("ngSubmit",function(){y(t);let r=v();return C(r.submitForm())}),q(2,_t,19,13,"div",3)(3,yt,2,1,"div",4),c(4,"div",5)(5,"button",6),g(6,"Enviar"),o()()()()}if(n&2){let t=v();u(2),h("ngForOf",t.preguntas),u(),h("ngIf",t.errorMessage)}}function Vt(n,e){n&1&&(c(0,"div"),g(1,` Cargando preguntas...
`),o())}var Xe=(()=>{let e=class e{constructor(i,r){this.http=i,this.fb=r,this.preguntas=[],this.respuestas={},this.errorMessage=null,this.formulario=this.fb.group({})}ngOnInit(){this.http.get("https://personalidad.onrender.com/api/pregunta").subscribe(i=>{this.preguntas=i},i=>{console.error("Error al obtener preguntas:",i)})}onAnswerChange(i,r){this.respuestas[`Q${i}`]=r}submitForm(){for(let i of this.preguntas)if(this.respuestas[`Q${i.id}`]===void 0){this.errorMessage="Por favor, responda todas las preguntas antes de enviar.";return}this.errorMessage=null,console.log("Datos a enviar:",this.respuestas),this.http.post("https://personalidad.onrender.com/api/save",this.respuestas).subscribe(i=>{console.log("Respuestas enviadas con \xE9xito",i)},i=>{console.error("Error al enviar respuestas:",i)})}};e.\u0275fac=function(r){return new(r||e)(_(Ve),_(qe))},e.\u0275cmp=k({type:e,selectors:[["app-formulario"]],decls:3,vars:2,consts:[[1,"all"],[4,"ngIf"],[3,"ngSubmit"],["class","question-container",4,"ngFor","ngForOf"],["class","error-message",4,"ngIf"],[1,"button-container"],["type","submit"],[1,"question-container"],[3,"for"],["type","radio",3,"change","name","value"],[1,"error-message"]],template:function(r,s){r&1&&(c(0,"div",0),q(1,Ct,7,2,"div",1)(2,Vt,2,0,"div",1),o()),r&2&&(u(),h("ngIf",s.preguntas.length>0),u(),h("ngIf",s.preguntas.length===0))},dependencies:[ye,Ce,Le,Be,oe],styles:["body[_ngcontent-%COMP%]{background-color:#e0f7fa;font-family:Arial,sans-serif}form[_ngcontent-%COMP%]{max-width:1000px;background-color:#c5ebf0;margin:0 auto;padding:20px;border-radius:8px;box-shadow:0 2px 4px #0000001a}.all[_ngcontent-%COMP%]{background-color:#c5ebf0}.question-container[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px;background-color:#fff;border:1px solid black;border-radius:8px}.question-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:10px}.question-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.question-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{margin-right:10px}.button-container[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#60daeb;color:#000;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:16px}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#c5ebf0}.error-message[_ngcontent-%COMP%]{color:#d32f2f;margin-top:10px;text-align:center}"]});let n=e;return n})();var Dt=[{path:"formulario",component:Xe}],Ye=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[Z.forRoot(Dt),Z]});let n=e;return n})();var $=(()=>{let e=class e{constructor(){this.title="Personalidad"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=k({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,s){r&1&&pe(0,"router-outlet")},dependencies:[Ee]});let n=e;return n})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e,bootstrap:[$]}),e.\u0275inj=f({providers:[Me()],imports:[be,Ye,ze,De,Ze]});let n=e;return n})();var bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e,bootstrap:[$]}),e.\u0275inj=f({imports:[Ke,Ae]});let n=e;return n})();export{bt as a};
