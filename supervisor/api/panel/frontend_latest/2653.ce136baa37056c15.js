export const ids=["2653"];export const modules={91624:function(e,t,a){a.r(t),a.d(t,{HaFormExpendable:function(){return n}});var i=a(44249),o=a(57243),s=a(50778);a(29073);let n=(0,i.Z)([(0,s.Mo)("ha-form-expandable")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"localizeValue",value:void 0},{kind:"method",key:"_renderDescription",value:function(){const e=this.computeHelper?.(this.schema);return e?o.dy`<p>${e}</p>`:o.Ld}},{kind:"field",key:"_computeLabel",value(){return(e,t,a)=>this.computeLabel?this.computeLabel(e,t,{...a,path:[...a?.path||[],this.schema.name]}):this.computeLabel}},{kind:"field",key:"_computeHelper",value(){return(e,t)=>this.computeHelper?this.computeHelper(e,{...t,path:[...t?.path||[],this.schema.name]}):this.computeHelper}},{kind:"method",key:"render",value:function(){return o.dy` <ha-expansion-panel outlined .expanded="${Boolean(this.schema.expanded)}"> <div slot="header" role="heading" aria-level="${this.schema.headingLevel?.toString()??"3"}"> ${this.schema.icon?o.dy` <ha-icon .icon="${this.schema.icon}"></ha-icon> `:this.schema.iconPath?o.dy` <ha-svg-icon .path="${this.schema.iconPath}"></ha-svg-icon> `:o.Ld} ${this.schema.title||this.computeLabel?.(this.schema)} </div> <div class="content"> ${this._renderDescription()} <ha-form .hass="${this.hass}" .data="${this.data}" .schema="${this.schema.schema}" .disabled="${this.disabled}" .computeLabel="${this._computeLabel}" .computeHelper="${this._computeHelper}" .localizeValue="${this.localizeValue}"></ha-form> </div> </ha-expansion-panel> `}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:flex!important;flex-direction:column}:host ha-form{display:block}.content{padding:12px}.content p{margin:0 0 24px}ha-expansion-panel{display:block;--expansion-panel-content-padding:0;border-radius:6px;--ha-card-border-radius:6px}ha-icon,ha-svg-icon{color:var(--secondary-text-color)}`}}]}}),o.oi)}};
//# sourceMappingURL=2653.ce136baa37056c15.js.map