import{c as m,e as d,j as i,S as h}from"./Smarpy-Dq8Wa12B.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DlzGcqK6.js";import"./preload-helper-Dp1pzeXC.js";const f="_element_1ikir_1",N={element:f};function t(e){const s={...e};delete s.fore,delete s.back,delete s.border,delete s.highlighter,delete s.positioning,delete s.sizing,delete s.spacing,delete s.className,delete s.css,delete s.as;const n=[N.element],c=m.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});c&&n.push(...c),e.className&&n.push(e.className);const l=d.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...s,className:n.join(" "),css:l}):i("span",{...s,className:n.join(" "),css:l})}t.__docgenInfo={description:"",methods:[],displayName:"Span"};const _={title:"Components/Span",component:t,tags:["autodocs"],argTypes:{}},a={args:{},render:e=>i(h,{children:i(t,{...e,children:i("span",{children:"Plain"})})})};var o,r,g;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Span {...props}>
        <span>{"Plain"}</span>
      </Span>
    </Smarpy>
}`,...(g=(r=a.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const k=["Plain"];export{a as Plain,k as __namedExportsOrder,_ as default};
