import{c as $,e as k,j as r,S as l}from"./Smarpy-ihDwCBWx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CFjP-btH.js";import"./preload-helper-Dp1pzeXC.js";const S="_input_f87ny_1",x={input:S};function a(o){const e={...o};delete e.colorName,delete e.fore,delete e.back,delete e.border,delete e.highlighter,delete e.positioning,delete e.sizing,delete e.spacing,delete e.className,delete e.css,delete e.as;const c=[x.input],t=$.getUtilityClassNames({fore:o.fore,back:o.back,border:o.border,highlighter:o.highlighter,spacing:o.spacing,sizing:o.sizing,positioning:o.positioning});t&&c.push(...t),o.className&&c.push(o.className);const v={...o.colorName?{"--smarpy-input-color-fore":`var(--smarpy-color-${o.colorName}-input-fore, var(--smarpy-color-${o.colorName}-fore))`,"--smarpy-input-color-back":`var(--smarpy-color-${o.colorName}-input-back, var(--smarpy-color-${o.colorName}-back))`,"--smarpy-input-color-border":`var(--smarpy-color-${o.colorName}-input-border, var(--smarpy-color-${o.colorName}-border))`,"--smarpy-input-color-placeholder":`var(--smarpy-color-${o.colorName}-input-placeholder, var(--smarpy-color-${o.colorName}-placeholder))`,"--smarpy-input-color-outline":`var(--smarpy-color-${o.colorName}-input-outline, var(--smarpy-color-${o.colorName}-outline))`,"--smarpy-input-focus-color-fore":`var(--smarpy-color-${o.colorName}-input-focus-fore, var(--smarpy-color-${o.colorName}-focus-fore))`,"--smarpy-input-focus-color-back":`var(--smarpy-color-${o.colorName}-input-focus-back, var(--smarpy-color-${o.colorName}-focus-back))`,"--smarpy-input-focus-color-border":`var(--smarpy-color-${o.colorName}-input-focus-border, var(--smarpy-color-${o.colorName}-focus-border))`,"--smarpy-input-disabled-color-fore":`var(--smarpy-color-${o.colorName}-input-disabled-fore, var(--smarpy-color-${o.colorName}-disabled-fore))`,"--smarpy-input-disabled-color-back":`var(--smarpy-color-${o.colorName}-input-disabled-back, var(--smarpy-color-${o.colorName}-disabled-back))`,"--smarpy-input-disabled-color-border":`var(--smarpy-color-${o.colorName}-input-disabled-border, var(--smarpy-color-${o.colorName}-disabled-border))`}:void 0},m=k.getEmotionCss({fore:o.fore,back:o.back,border:o.border,highlighter:o.highlighter,spacing:o.spacing,sizing:o.sizing,positioning:o.positioning,css:o.css},v);return o.as?r(o.as,{...e,className:c.join(" "),css:m}):r("input",{...e,className:c.join(" "),css:m})}a.__docgenInfo={description:"",methods:[],displayName:"Input"};const j={title:"Components/Input",component:a,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},s={args:{colorName:void 0,type:"text"},render:o=>r(l,{children:r(a,{...o})})},n={args:{colorName:void 0,type:"checkbox"},render:o=>r(l,{children:r(a,{...o})})},i={args:{colorName:void 0,type:"radio"},render:o=>r(l,{children:r(a,{...o})})};var d,u,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    colorName: undefined,
    type: "text"
  },
  render: props => <Smarpy>
      <Input {...props} />
    </Smarpy>
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var p,b,N;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    colorName: undefined,
    type: "checkbox"
  },
  render: props => <Smarpy>
      <Input {...props} />
    </Smarpy>
}`,...(N=(b=n.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var g,f,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    colorName: undefined,
    type: "radio"
  },
  render: props => <Smarpy>
      <Input {...props} />
    </Smarpy>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const T=["PlainText","PlainCheckbox","PlainRadio"];export{n as PlainCheckbox,i as PlainRadio,s as PlainText,T as __namedExportsOrder,j as default};
