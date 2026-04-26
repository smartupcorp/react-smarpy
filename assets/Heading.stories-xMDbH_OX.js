import{c as I,e as O,j as n,S as l}from"./Smarpy-Dq8Wa12B.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DlzGcqK6.js";import"./preload-helper-Dp1pzeXC.js";const P={"heading-1":"_heading-1_4d1gi_1","heading-2":"_heading-2_4d1gi_11","heading-3":"_heading-3_4d1gi_21","heading-4":"_heading-4_4d1gi_31","heading-5":"_heading-5_4d1gi_41","heading-6":"_heading-6_4d1gi_51"};function i(e){const a={...e};delete a.level,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const h=e.level,r=[P[`heading-${e.level}`]],p=I.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});p&&r.push(...p),e.className&&r.push(e.className);const s=O.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});if(e.as)return n(e.as,{...a,className:r.join(" "),css:s});if(h)switch(h){case 1:return n("h1",{...a,className:r.join(" "),css:s});case 2:return n("h2",{...a,className:r.join(" "),css:s});case 3:return n("h3",{...a,className:r.join(" "),css:s});case 4:return n("h4",{...a,className:r.join(" "),css:s});case 5:return n("h5",{...a,className:r.join(" "),css:s});case 6:return n("h6",{...a,className:r.join(" "),css:s})}return n("h1",{...a,className:r.join(" "),css:s})}i.__docgenInfo={description:"",methods:[],displayName:"Heading"};const B={title:"Components/Heading",component:i,tags:["autodocs"],argTypes:{}},c={args:{level:1},render:e=>n(l,{children:n(i,{...e,children:"Level 1"})})},d={args:{level:2},render:e=>n(l,{children:n(i,{...e,children:"Level 2"})})},o={args:{level:3},render:e=>n(l,{children:n(i,{...e,children:"Level 3"})})},t={args:{level:4},render:e=>n(l,{children:n(i,{...e,children:"Level 4"})})},g={args:{level:5},render:e=>n(l,{children:n(i,{...e,children:"Level 5"})})},m={args:{level:6},render:e=>n(l,{children:n(i,{...e,children:"Level 6"})})};var v,u,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    level: 1
  },
  render: props => <Smarpy>
      <Heading {...props}>
        {"Level 1"}
      </Heading>
    </Smarpy>
}`,...(L=(u=c.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var _,S,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    level: 2
  },
  render: props => <Smarpy>
      <Heading {...props}>
        {"Level 2"}
      </Heading>
    </Smarpy>
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var N,H,f;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    level: 3
  },
  render: props => <Smarpy>
      <Heading {...props}>
        {"Level 3"}
      </Heading>
    </Smarpy>
}`,...(f=(H=o.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var b,j,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    level: 4
  },
  render: props => <Smarpy>
      <Heading {...props}>
        {"Level 4"}
      </Heading>
    </Smarpy>
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var z,C,x;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    level: 5
  },
  render: props => <Smarpy>
      <Heading {...props}>
        {"Level 5"}
      </Heading>
    </Smarpy>
}`,...(x=(C=g.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var U,E,w;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    level: 6
  },
  render: props => <Smarpy>
      <Heading {...props}>
        {"Level 6"}
      </Heading>
    </Smarpy>
}`,...(w=(E=m.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const D=["Level1","Level2","Level3","Level4","Level5","Level6"];export{c as Level1,d as Level2,o as Level3,t as Level4,g as Level5,m as Level6,D as __namedExportsOrder,B as default};
