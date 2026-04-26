import{c as m,e as d,j as s,S as h}from"./Smarpy-Dq8Wa12B.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DlzGcqK6.js";import"./preload-helper-Dp1pzeXC.js";const S="_element_1ikir_1",f={element:S};function a(e){const i={...e};delete i.fore,delete i.back,delete i.border,delete i.highlighter,delete i.positioning,delete i.sizing,delete i.spacing,delete i.className,delete i.css,delete i.as;const t=[f.element],c=m.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});c&&t.push(...c),e.className&&t.push(e.className);const o=d.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?s(e.as,{...i,className:t.join(" "),css:o}):s("section",{...i,className:t.join(" "),css:o})}a.__docgenInfo={description:"",methods:[],displayName:"Section"};const _={title:"Components/Section",component:a,tags:["autodocs"],argTypes:{}},n={args:{},render:e=>s(h,{children:s(a,{...e,children:s(a,{children:"Plain"})})})};var l,r,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Section {...props}>
        <Section>{"Plain"}</Section>
      </Section>
    </Smarpy>
}`,...(g=(r=n.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const k=["Plain"];export{n as Plain,k as __namedExportsOrder,_ as default};
