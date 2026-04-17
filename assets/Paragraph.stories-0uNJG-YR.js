import{c as l,e as m,j as t,a as h,S as u}from"./Smarpy-ihDwCBWx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CFjP-btH.js";import"./preload-helper-Dp1pzeXC.js";const p="_paragraph_12ya4_1",b={paragraph:p};function r(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const i=[b.paragraph],n=l.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});n&&i.push(...n),e.className&&i.push(e.className);const o=m.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?t(e.as,{...a,className:i.join(" "),css:o}):t("p",{...a,className:i.join(" "),css:o})}r.__docgenInfo={description:"",methods:[],displayName:"Paragraph"};const _={title:"Components/Paragraph",component:r,tags:["autodocs"],argTypes:{}},s={args:{},render:e=>h(u,{children:[t(r,{...e,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}),t(r,{...e,children:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})};var c,g,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Paragraph {...props}>
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
      </Paragraph>
      <Paragraph {...props}>
        {"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </Paragraph>
    </Smarpy>
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const S=["Plain"];export{s as Plain,S as __namedExportsOrder,_ as default};
