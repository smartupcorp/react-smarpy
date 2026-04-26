import{c as m,e as g,a as h,j as n,S as u}from"./Smarpy-Dq8Wa12B.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DlzGcqK6.js";import"./preload-helper-Dp1pzeXC.js";const y="_element_1ikir_1",b={element:y};function a(e){const i={...e};delete i.rubyText,delete i.fore,delete i.back,delete i.border,delete i.highlighter,delete i.positioning,delete i.sizing,delete i.spacing,delete i.className,delete i.css;const t=[b.element],r=m.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});r&&t.push(...r),e.className&&t.push(e.className);const d=g.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return h("ruby",{...i,className:t.join(" "),css:d,children:[e.children,n("rp",{children:"("}),n("rt",{children:e.rubyText}),n("rp",{children:")"})]})}a.__docgenInfo={description:"",methods:[],displayName:"Ruby",props:{rubyText:{required:!1,tsType:{name:"union",raw:"ReactNode | undefined",elements:[{name:"ReactNode"},{name:"undefined"}]},description:""}},composes:["Omit"]};const T={title:"Components/Ruby",component:a,tags:["autodocs"],argTypes:{}},s={args:{rubyText:"テスト"},render:e=>n(u,{children:n(a,{...e,children:"試験"})})};var c,o,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    rubyText: "テスト"
  },
  render: props => <Smarpy>
      <Ruby {...props}>
        {"試験"}
      </Ruby>
    </Smarpy>
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const _=["Plain"];export{s as Plain,_ as __namedExportsOrder,T as default};
