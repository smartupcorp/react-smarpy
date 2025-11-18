import{j as a,b as r,S as l,F as p}from"./Smarpy-sY_VmC9V.js";import{N as h,a as u,b as t,c as s,d,e as v,f as i,g,h as e}from"./NavStatic-BDgknpz3.js";import{H as f}from"./Hamburger-DTyFNJPN.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-B9m6i_AP.js";import"./preload-helper-Dp1pzeXC.js";const b={title:"Components/Nav",component:h,tags:["autodocs"],argTypes:{}},N=r(p,{children:[a(e,{as:"a",href:"/",children:"NavMenuItem1"}),a(e,{as:"a",href:"/",children:"NavMenuItem2"}),a(e,{as:"a",href:"/",children:"NavMenuItem3"})]}),n={args:{},render:B=>a(l,{children:r(h,{...B,children:[r(u,{isTabletOrLess:!0,children:[r(t,{children:[a(s,{children:a(f,{})}),a(d,{children:"Center"}),a(v,{})]}),a(i,{isActive:!0,children:N})]}),r(g,{isDesktopOrMore:!0,children:[r(t,{children:[a(s,{children:"NavBrandLeft"}),a(d,{children:"NavBrandCenter"}),a(v,{children:"NavBrandRight"})]}),a(i,{children:N})]})]})})};var c,o,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Nav {...props}>
        <NavAccordion isTabletOrLess>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger />
            </NavBrandLeft>
            <NavBrandCenter>{"Center"}</NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu isActive={true}>{navMenuItems}</NavMenu>
        </NavAccordion>
        <NavStatic isDesktopOrMore>
          <NavBrand>
            <NavBrandLeft>{"NavBrandLeft"}</NavBrandLeft>
            <NavBrandCenter>{"NavBrandCenter"}</NavBrandCenter>
            <NavBrandRight>{"NavBrandRight"}</NavBrandRight>
          </NavBrand>
          <NavMenu>{navMenuItems}</NavMenu>
        </NavStatic>
      </Nav>
    </Smarpy>
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const A=["Plain"];export{n as Plain,A as __namedExportsOrder,b as default};
