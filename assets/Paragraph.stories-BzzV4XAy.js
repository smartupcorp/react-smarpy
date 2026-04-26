import{c as l,e as m,j as t,a as h,S as u}from"./Smarpy-Dq8Wa12B.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DlzGcqK6.js";import"./preload-helper-Dp1pzeXC.js";const p="_paragraph_ydmcn_1",b={paragraph:p};function n(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const i=[b.paragraph],r=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});r&&i.push(...r),e.className&&i.push(e.className);const o=m.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?t(e.as,{...a,className:i.join(" "),css:o}):t("p",{...a,className:i.join(" "),css:o})}n.__docgenInfo={description:"",methods:[],displayName:"Paragraph"};const _={title:"Components/Paragraph",component:n,tags:["autodocs"],argTypes:{}},s={args:{},render:e=>h(u,{children:[t(n,{...e,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}),t(n,{...e,children:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})};var c,d,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Paragraph {...props}>
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
      </Paragraph>
      <Paragraph {...props}>
        {"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </Paragraph>
    </Smarpy>
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const S=["Plain"];export{s as Plain,S as __namedExportsOrder,_ as default};
