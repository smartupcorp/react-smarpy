import{c as d,e as m,j as n,S as h}from"./Smarpy-ihDwCBWx.js";import{D as f}from"./Div-Cg5IR5jt.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CFjP-btH.js";import"./preload-helper-Dp1pzeXC.js";const u="_centering_veq5a_1",y={centering:u};function a(e){const i={...e};delete i.fore,delete i.back,delete i.border,delete i.highlighter,delete i.positioning,delete i.sizing,delete i.spacing,delete i.className,delete i.css,delete i.as;const s=[y.centering],r=d.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});r&&s.push(...r),e.className&&s.push(e.className);const c=m.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?n(e.as,{...i,className:s.join(" "),css:c}):n("div",{...i,className:s.join(" "),css:c})}a.__docgenInfo={description:"",methods:[],displayName:"Centering"};const k={title:"Layouts/Centering",component:a,tags:["autodocs"],argTypes:{}},t={args:{},render:e=>n(h,{children:n(a,{...e,children:n(f,{children:"Centering"})})})};var g,o,l;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Centering {...props}>
        <Div>{"Centering"}</Div>
      </Centering>
    </Smarpy>
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const v=["Plain"];export{t as Plain,v as __namedExportsOrder,k as default};
