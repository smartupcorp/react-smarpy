import{c,e as m,j as a,S as h}from"./Smarpy-ihDwCBWx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CFjP-btH.js";import"./preload-helper-Dp1pzeXC.js";const x="_gingham_6xl42_1",l={gingham:x,"is-0deg":"_is-0deg_6xl42_16","is-15deg":"_is-15deg_6xl42_19","is-30deg":"_is-30deg_6xl42_22","is-45deg":"_is-45deg_6xl42_25","is-60deg":"_is-60deg_6xl42_28","is-75deg":"_is-75deg_6xl42_31","is-90deg":"_is-90deg_6xl42_34","is-gray":"_is-gray_6xl42_37","is-red":"_is-red_6xl42_49","is-coral":"_is-coral_6xl42_61","is-orange":"_is-orange_6xl42_73","is-yellow":"_is-yellow_6xl42_85","is-lime":"_is-lime_6xl42_97","is-green":"_is-green_6xl42_109","is-cyan":"_is-cyan_6xl42_121","is-blue":"_is-blue_6xl42_133","is-violet":"_is-violet_6xl42_145","is-magenta":"_is-magenta_6xl42_157"};function g(e){const i={...e};delete i.colorName,delete i.degree,delete i.fore,delete i.back,delete i.border,delete i.highlighter,delete i.positioning,delete i.sizing,delete i.spacing,delete i.className,delete i.css,delete i.as;const s=[l.gingham];e.colorName&&s.push(l[`is-${e.colorName}`]),e.degree&&s.push(l[`is-${e.degree}deg`]);const t=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});t&&s.push(...t),e.className&&s.push(e.className);const _=m.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?a(e.as,{...i,className:s.join(" "),css:_}):a("div",{...i,className:s.join(" "),css:_})}g.__docgenInfo={description:"",methods:[],displayName:"Gingham"};const b={title:"Backgrounds/Gingham",component:g,tags:["autodocs"],argTypes:{}},n={args:{colorName:"gray"},render:e=>a(h,{children:a(g,{...e,style:{aspectRatio:"16/9",width:"100%"},children:a("span",{children:"Plain"})})})};var d,o,r;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    colorName: "gray"
  },
  render: props => <Smarpy>
      <Gingham {...props} style={{
      aspectRatio: "16/9",
      width: "100%"
    }}>
        <span>{"Plain"}</span>
      </Gingham>
    </Smarpy>
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const k=["Plain"];export{n as Plain,k as __namedExportsOrder,b as default};
