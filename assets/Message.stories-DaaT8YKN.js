import{j as e,S as i,a as l}from"./Smarpy-ihDwCBWx.js";import{M as o,b as g,a as y}from"./MessageHeader-D-zfCSzP.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CFjP-btH.js";import"./preload-helper-Dp1pzeXC.js";const f={title:"Components/Message",component:o,tags:["autodocs"],argTypes:{colorName:{control:"text"}}},r={args:{colorName:void 0},render:a=>e(i,{children:l(o,{...a,children:[e(y,{children:"Header"}),e(g,{children:"Body"})]})})},s={args:{colorName:void 0},render:a=>e(i,{children:e(o,{...a,children:e(g,{children:"Body"})})})};var n,d,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <Smarpy>
      <Message {...props}>
        <MessageHeader>
          {"Header"}
        </MessageHeader>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </Smarpy>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,t,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <Smarpy>
      <Message {...props}>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </Smarpy>
}`,...(m=(t=s.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const x=["Plain","BodyOnly"];export{s as BodyOnly,r as Plain,x as __namedExportsOrder,f as default};
