import{c as m,e as d,j as n,S as h}from"./Smarpy-ihDwCBWx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CFjP-btH.js";import"./preload-helper-Dp1pzeXC.js";const f="_element_4pti2_1",N={element:f};function t(e){const s={...e};delete s.fore,delete s.back,delete s.border,delete s.highlighter,delete s.positioning,delete s.sizing,delete s.spacing,delete s.className,delete s.css,delete s.as;const a=[N.element],c=m.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});c&&a.push(...c),e.className&&a.push(e.className);const l=d.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?n(e.as,{...s,className:a.join(" "),css:l}):n("span",{...s,className:a.join(" "),css:l})}t.__docgenInfo={description:"",methods:[],displayName:"Span"};const p={title:"Components/Span",component:t,tags:["autodocs"],argTypes:{}},i={args:{},render:e=>n(h,{children:n(t,{...e,children:n("span",{children:"Plain"})})})};var o,r,g;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Span {...props}>
        <span>{"Plain"}</span>
      </Span>
    </Smarpy>
}`,...(g=(r=i.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const _=["Plain"];export{i as Plain,_ as __namedExportsOrder,p as default};
